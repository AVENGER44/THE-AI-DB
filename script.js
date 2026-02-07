// DOM Elements
const gridContainer = document.getElementById('tools-grid');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');

let activeCategory = 'All';

// ==========================================================
/* === AI TOOLS DATABASE === */
// ==========================================================
const aiTools = [
    {
        name: "Kimi",
        category: "Text",
        image: "https://imgs.search.brave.com/6py51sqk6xfV6JV0RkPaPNz8TWkUfKVnA7qO-f0L7Z4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9haW1v/ZGUuY28vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDMvS2lt/aS1BSS1Mb2dvLndl/YnA",
        description: "kimi.com is the official website for Kimi, an AI assistant and chatbot developed by Chinese company Moonshot AI. The platform offers users access to advanced large language models (including Kimi K2.5) capable of reasoning, analysis, deep thinking, web search, multimodal processing, and agentic capabilities.",
        links: [
            { label: "Kimi AI", url: "https://www.kimi.com/" },
            { label: "LM arena", url: "https://arena.ai/" }
        ]
    },
    {
        name: "DeepSeek",
        category: "Text",
        image: "https://imgs.search.brave.com/ivyUb2VyAka6BrZM3IYvEXx6cLBCeJcpYQ_4lluFkN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L0RlZXBTZWVrLUxv/Z28tMjAyNC5wbmc",
        description: "chat.deepseek.com is the official web interface for DeepSeek, a Chinese AI assistant developed by Hangzhou DeepSeek Artificial Intelligence Co., Ltd. The platform provides free access to powerful AI models with no message limits or subscription fees.",
        links: [
            { label: "DeepSeek", url: "https://chat.deepseek.com/" },
            { label: "LM arena", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Z AI",
        category: "Text",
        image: "https://imgs.search.brave.com/DiOwoOymZKDXr2wwyZ_Mgbg9u6IScLRA4HODdTfeUAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odWdn/aW5nZmFjZS5jby9k/YXRhc2V0cy9odWdn/aW5nZmFjZS9kb2N1/bWVudGF0aW9uLWlt/YWdlcy9yZXNvbHZl/L21haW4vaW5mZXJl/bmNlLXByb3ZpZGVy/cy9sb2dvcy96YWkt/b3JnLWxpZ2h0LnBu/Zw",
        description: "chat.z.ai (also known as Z.ai) is the international web interface for a Chinese AI assistant originally founded as Zhipu AI. The platform provides free access to the GLM (General Language Model) family of large language models, positioning itself as a versatile AI workspace for content creation, coding, and research.",
        links: [
            { label: "Z.AI", url: "https://chat.z.ai/" },
            { label: "LM arena", url: "https://arena.ai/" }
        ]
    },
    {
        name: "LM arena",
        category: "Image",
        image: "https://imgs.search.brave.com/qVhRjm2ENjVekyi5I9rRtfNAwokMGenxBLLw9qqpTW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9jb250cmFyeS1y/ZXNlYXJjaC9hTUEy/WUdHTkhWZlRPMXZh/X0xNQXJlbmFfU3F1/YXJlLnBuZz9hdXRv/PWZvcm1hdCxjb21w/cmVzcyZmaXQ9bWF4/Jnc9Mzg0",
        description: "LM arena is a platform that provide all LLM (large language models) for free, either Text or image generation, even video generation.",
        links: [
            { label: "LM arena", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Yupp AI",
        category: "Code",
        image: "https://imgs.search.brave.com/C0C4saFi9VSmnAcSyFPj1jAbo8GGAgYHqVZHxNzj3pw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95dXBw/LmFpL3l1cHAud2Vi/cA",
        description: "YUPP AI is an All-in-one platform that provide all types of LLM, it the same as LM arena But with a better UI.",
        links: [
            { label: "YUPP AI", url: "https://yupp.ai/" },
        ]
    },
    {
        name: "ChatGPT",
        category: "Text",
        image: "https://imgs.search.brave.com/nbjiToc8XycCsgxLoRqb8-uss54DImfH1MScmju_eaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pY29u/cy1zYW1wbGUtcHNv/c3Qtc2V0dGluZy00/MTQ1OTUzMjAuanBn",
        description: "No need for a description here... Right ?!!",
        links: [
            { label: "CHATGPT", url: "https://chatgpt.com/" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Qwen AI",
        category: "Text",
        image: "https://imgs.search.brave.com/FGdpPbhjAcAhKsIhkNXlTLI0FLIsCQ2YCPJOwbQ-iSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L1F3ZW4tTG9nby0y/MDIzLnBuZw",
        description: "chat.qwen.ai is the official web interface for Qwen AI (also known as Tongyi Qianwen), Alibaba Cloud's flagship large language model. Developed by China's largest cloud computing company, Qwen serves as Alibaba's answer to ChatGPT and DeepSeek.",
        links: [
            { label: "Qwen AI", url: "https://chat.qwen.ai/" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Claude AI",
        category: "Code",
        image: "https://imgs.search.brave.com/ptx9ZmvTxUyircIx-AfYGD2N5JfEGJd6_aXDDL2j8iQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2xv/YmVodWIvbG9iZS1p/Y29ucy9yZWZzL2hl/YWRzL21hc3Rlci9w/YWNrYWdlcy9zdGF0/aWMtcG5nL2Rhcmsv/Y2xhdWRlLWNvbG9y/LnBuZw",
        description: "claude.ai is the official web interface for Claude AI, an advanced conversational AI assistant developed by Anthropic, an AI safety research company founded in 2021 by former OpenAI executives. The platform is designed to prioritize safety, reliability, and long-context understanding.",
        links: [
            { label: "Claude AI", url: "https://claude.ai/login" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Midjourney",
        category: "Image",
        image: "https://imgs.search.brave.com/Aa6Fj9IQhAvkAmISEo4aKIaZSzXKQn4vc4BNyvmYjX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdiL01pZGpvdXJu/ZXlfRW1ibGVtXyhs/aWdodF9ibHVlKS5z/dmc",
        description: "Midjourney, a leading generative AI image creation platform developed by an independent research lab based in San Francisco. Founded in 2022 by David Holz (co-founder of Leap Motion), it is widely regarded as one of the top tools for creating photorealistic and artistic images from text descriptions.",
        links: [
            { label: "Midjourney", url: "https://www.midjourney.com/home" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "GEMINI AI",
        category: "Text",
        image: "https://imgs.search.brave.com/WivpBNRvlQCRluXYdS1DKafyOfpzZLwaoYApsPDqAnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RfbW9kdWxl/cy9tYXhfMTIwMC9m/NGE4NTUxODg0NTA3/MDEuNjViNmQ2OTAz/ZGMzMy5wbmc",
        description: "Google Gemini, Google's flagship AI assistant and chatbot. Originally launched as \"Bard\" in 2023 and rebranded to Gemini in February 2024, it is built on Google's multimodal Gemini language models developed by Google DeepMind.",
        links: [
            { label: "GEMINI", url: "https://gemini.google.com/app" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Mistral AI",
        category: "Text",
        image: "https://imgs.search.brave.com/x8HkwtM0axmROVgfxuTA5BbFa2GhF3GLiMWSGoYHCEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib290/ZmxhcmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA4/L01pc3RyYWwtQUkt/TG9nby5wbmc",
        description: "Le Chat, the conversational AI assistant developed by Mistral AI, a French artificial intelligence company founded in 2023 by former Meta and Google DeepMind researchers. Mistral is widely considered Europe's leading AI model provider and a key challenger to American AI giants.",
        links: [
            { label: "LE CHAT", url: "https://chat.mistral.ai/chat" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "META AI",
        category: "Image",
        image: "https://imgs.search.brave.com/MHUKGpXtUn5ika8aTy1Vj_pFALR8U3e7zSHgvyFnXqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYyLzIvbWV0YS1h/aS1sb2dvLXBuZ19z/ZWVrbG9nby02MjQz/OTgucG5n",
        description: "Meta AI, Meta Platforms' (formerly Facebook) artificial intelligence division. The site serves as the gateway to Meta's suite of AI products, primarily built on its open-source Llama family of large language models.",
        links: [
            { label: "META AI", url: "https://www.meta.ai/" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    },
    {
        name: "Perplexity Search",
        category: "Text",
        image: "https://imgs.search.brave.com/w-pRtjQg4FsuQYZbK3oA7iAYV485-flk_6R7LFaKgr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA5/L1BlcnBsZXhpdHkt/QUktTG9nby0yMDIz/LnBuZw",
        description: "Perplexity AI, an AI-powered conversational search engine founded in 2022 by Aravind Srinivas, Denis Yarats, Johnny Ho, and Andy Konwinski. Unlike traditional search engines that return lists of links, Perplexity provides direct, citation-backed answers using large language models.",
        links: [
            { label: "Perplexity AI", url: "https://www.perplexity.ai/" },
            { label: "LMARENA", url: "https://arena.ai/" }
        ]
    }
];

// ===== RENDER =====
function renderTools(toolsData) {
    gridContainer.innerHTML = '';

    if (toolsData.length === 0) {
        const emptyMessage = aiTools.length === 0
            ? "Database is currently empty."
            : "No matching tools found.";

        gridContainer.innerHTML = `
            <div class="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20 card-animate">
                <div class="inline-flex flex-col items-center gap-3">
                    <svg class="w-10 h-10 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <p class="text-white/25 uppercase tracking-[0.2em] text-xs font-medium">${emptyMessage}</p>
                </div>
            </div>`;
        return;
    }

    toolsData.forEach((tool, index) => {
        const toolIndex = aiTools.findIndex(t => t.name === tool.name);
        const delay = index * 0.06;

        const cardHtml = `
            <div onclick="openToolModal(${toolIndex})" class="tool-card card-animate" style="animation-delay: ${delay}s">
                <div class="card-image-wrap">
                    <img src="${tool.image}" alt="${tool.name}" loading="lazy">
                    <span class="card-badge">${tool.category}</span>
                    <div class="card-overlay">
                        <h3 class="text-xl font-bold brand-font mb-1.5">${tool.name}</h3>
                        <p class="text-[11px] text-white/40 font-light tracking-wide">Click to explore →</p>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHtml;
    });
}

// ===== MODAL =====
function openToolModal(index) {
    const tool = aiTools[index];
    if (!tool) return;

    const modal = document.getElementById('toolModal');
    document.getElementById('modalImage').src = tool.image;
    document.getElementById('modalName').textContent = tool.name;
    document.getElementById('modalCategory').textContent = tool.category;
    document.getElementById('modalDescription').textContent = tool.description;

    const modalLinks = document.getElementById('modalLinks');
    modalLinks.innerHTML = '';
    if (tool.links) {
        tool.links.forEach((link, i) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.className = i === 0 ? "modal-link modal-link-primary" : "modal-link modal-link-secondary";
            a.textContent = link.label;
            modalLinks.appendChild(a);
        });
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeToolModal() {
    document.getElementById('toolModal').classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== FILTER & SEARCH =====
function updateDisplay() {
    const query = searchInput.value.toLowerCase();
    const filtered = aiTools.filter(tool => {
        const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
        const matchesSearch = tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
    renderTools(filtered);
}

function filterTools(category) {
    activeCategory = category;
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        if (btn.innerText.trim().toUpperCase() === category.toUpperCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    updateDisplay();
}

// ===== EVENT LISTENERS =====
searchInput.addEventListener('input', updateDisplay);

// Close modal on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeToolModal();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initial Render
renderTools(aiTools);
