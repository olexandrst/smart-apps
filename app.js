const aiApps = [
    // Навчання
    {
        name: 'Алекс Стасюк',
        category: 'learning',
        description: 'Експерт з ШІ, викладач курсу "ШІ для бізнесу"',
        url: 'https://www.linkedin.com/in/alex-stasuk-2ba761148',
        logo: 'assets/images/alex-stasuk.jpg'
    },
    {
        name: 'Smart People',
        category: 'learning',
        description: 'Бізнес-школа в м. Рівне - навчання та розвиток',
        url: 'https://smartpeople.ua/',
        logo: 'https://logo.clearbit.com/smartpeople.ua'
    },
    {
        name: 'Google Teachable Machine',
        category: 'learning',
        description: 'Навчання ML-моделей без коду - ідеально для початківців',
        url: 'https://teachablemachine.withgoogle.com',
        logo: 'https://logo.clearbit.com/google.com'
    },
    {
        name: 'Elements of AI',
        category: 'learning',
        description: 'Безкоштовний курс основ ШІ для всіх',
        url: 'https://www.elementsofai.com',
        logo: 'https://logo.clearbit.com/elementsofai.com'
    },
    {
        name: 'Kaggle Learn',
        category: 'learning',
        description: 'Практичні мікрокурси з ML та Data Science',
        url: 'https://www.kaggle.com/learn',
        logo: 'https://logo.clearbit.com/kaggle.com'
    },
    {
        name: 'Fast.ai',
        category: 'learning',
        description: 'Практичне навчання deep learning для всіх',
        url: 'https://www.fast.ai',
        logo: 'https://logo.clearbit.com/fast.ai'
    },
    {
        name: 'DeepLearning.AI',
        category: 'learning',
        description: 'Курси від Andrew Ng - від основ до практики',
        url: 'https://www.deeplearning.ai',
        logo: 'https://logo.clearbit.com/deeplearning.ai'
    },
    {
        name: 'Hugging Face Learn',
        category: 'learning',
        description: 'Курси з NLP та трансформерів',
        url: 'https://huggingface.co/learn',
        logo: 'https://logo.clearbit.com/huggingface.co'
    },
    {
        name: 'Google AI Hub',
        category: 'learning',
        description: 'Навчальні матеріали та ресурси від Google',
        url: 'https://ai.google/education',
        logo: 'https://logo.clearbit.com/google.com'
    },
    {
        name: 'Microsoft AI School',
        category: 'learning',
        description: 'Освітні ресурси з AI від Microsoft',
        url: 'https://www.microsoft.com/ai/ai-school',
        logo: 'https://logo.clearbit.com/microsoft.com'
    },

    // Чат-боти
    {
        name: 'Claude',
        category: 'chatbots',
        description: 'Потужний AI-асистент від Anthropic для складних завдань',
        url: 'https://claude.ai',
        logo: 'https://logo.clearbit.com/anthropic.com'
    },
    {
        name: 'ChatGPT',
        category: 'chatbots',
        description: 'Популярний AI-чатбот від OpenAI',
        url: 'https://chat.openai.com',
        logo: 'https://logo.clearbit.com/openai.com'
    },
    {
        name: 'Gemini',
        category: 'chatbots',
        description: 'AI-асистент від Google',
        url: 'https://gemini.google.com',
        logo: 'https://logo.clearbit.com/google.com'
    },
    {
        name: 'Grok',
        category: 'chatbots',
        description: 'AI від X/Twitter з доступом до реальних даних',
        url: 'https://grok.x.ai',
        logo: 'https://logo.clearbit.com/x.ai'
    },
    {
        name: 'Copilot',
        category: 'chatbots',
        description: 'AI-помічник від Microsoft',
        url: 'https://copilot.microsoft.com',
        logo: 'https://logo.clearbit.com/microsoft.com'
    },
    {
        name: 'Google AI Studio',
        category: 'chatbots',
        description: 'Експериментуйте з Google Gemini API',
        url: 'https://aistudio.google.com',
        logo: 'https://logo.clearbit.com/google.com'
    },
    {
        name: 'Poe',
        category: 'chatbots',
        description: 'Доступ до різних AI-моделей в одному місці',
        url: 'https://poe.com',
        logo: 'https://logo.clearbit.com/poe.com'
    },

    // Автоматизація
    {
        name: 'Zapier',
        category: 'automation',
        description: 'Автоматизація робочих процесів та інтеграції',
        url: 'https://zapier.com',
        logo: 'https://logo.clearbit.com/zapier.com'
    },
    {
        name: 'Make',
        category: 'automation',
        description: 'Візуальна платформа автоматизації (Integromat)',
        url: 'https://make.com',
        logo: 'https://logo.clearbit.com/make.com'
    },
    {
        name: 'Botpress',
        category: 'automation',
        description: 'Створення чат-ботів та автоматизація',
        url: 'https://botpress.com',
        logo: 'https://logo.clearbit.com/botpress.com'
    },
    {
        name: 'n8n',
        category: 'automation',
        description: 'Open-source автоматизація робочих процесів',
        url: 'https://n8n.io',
        logo: 'https://logo.clearbit.com/n8n.io'
    },

    // Мультимедіа - Зображення
    {
        name: 'OpenArt',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Редактор AI-зображень та генерація арту',
        url: 'https://openart.ai',
        logo: 'https://logo.clearbit.com/openart.ai'
    },
    {
        name: 'Midjourney',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація високоякісних AI-зображень',
        url: 'https://www.midjourney.com',
        logo: 'https://logo.clearbit.com/midjourney.com'
    },
    {
        name: 'DALL-E',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація зображень від OpenAI',
        url: 'https://openai.com/dall-e',
        logo: 'https://logo.clearbit.com/openai.com'
    },
    {
        name: 'Momoai',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація фото та портретів',
        url: 'https://momoai.co',
        logo: 'https://logo.clearbit.com/momoai.co'
    },
    {
        name: 'Let\'s Enhance',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Покращення якості та реставрація зображень',
        url: 'https://letsenhance.io',
        logo: 'https://logo.clearbit.com/letsenhance.io'
    },
    {
        name: 'Remove.bg',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Видалення фону з зображень',
        url: 'https://remove.bg',
        logo: 'https://logo.clearbit.com/remove.bg'
    },
    {
        name: 'Stable Diffusion',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Open-source генерація зображень',
        url: 'https://stablediffusionweb.com',
        logo: 'https://logo.clearbit.com/stability.ai'
    },

    // Мультимедіа - 3D
    {
        name: 'Meshy',
        category: 'multimedia',
        subcategory: '3d',
        description: '3D моделювання та генерація мешів',
        url: 'https://meshy.ai',
        logo: 'https://logo.clearbit.com/meshy.ai'
    },
    {
        name: 'Luma AI',
        category: 'multimedia',
        subcategory: '3d',
        description: 'Створення 3D моделей з фото',
        url: 'https://lumalabs.ai',
        logo: 'https://logo.clearbit.com/lumalabs.ai'
    },
    {
        name: 'Spline AI',
        category: 'multimedia',
        subcategory: '3d',
        description: '3D дизайн з AI-асистентом',
        url: 'https://spline.design',
        logo: 'https://logo.clearbit.com/spline.design'
    },

    // Мультимедіа - Відео
    {
        name: 'Synthesia',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Генерація відео з AI-аватарами',
        url: 'https://synthesia.io',
        logo: 'https://logo.clearbit.com/synthesia.io'
    },
    {
        name: 'Runway',
        category: 'multimedia',
        subcategory: 'video',
        description: 'AI-інструменти для відеомонтажу',
        url: 'https://runwayml.com',
        logo: 'https://logo.clearbit.com/runwayml.com'
    },
    {
        name: 'HeyGen',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Створення відео з AI-аватарами',
        url: 'https://heygen.com',
        logo: 'https://logo.clearbit.com/heygen.com'
    },
    {
        name: 'Pika',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Генерація відео з тексту',
        url: 'https://pika.art',
        logo: 'https://logo.clearbit.com/pika.art'
    },

    // Мультимедіа - Аудіо
    {
        name: 'ElevenLabs',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Генерація голосу та озвучка',
        url: 'https://elevenlabs.io',
        logo: 'https://logo.clearbit.com/elevenlabs.io'
    },
    {
        name: 'Murf AI',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Професійна AI-озвучка',
        url: 'https://murf.ai',
        logo: 'https://logo.clearbit.com/murf.ai'
    },
    {
        name: 'Suno',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Генерація музики та пісень',
        url: 'https://suno.ai',
        logo: 'https://logo.clearbit.com/suno.ai'
    },

    // Бізнес
    {
        name: 'Perplexity',
        category: 'business',
        description: 'Розумний пошук з AI',
        url: 'https://perplexity.ai',
        logo: 'https://logo.clearbit.com/perplexity.ai'
    },
    {
        name: 'XMind',
        category: 'business',
        description: 'Інтелектуальні карти та мозковий штурм',
        url: 'https://xmind.ai',
        logo: 'https://logo.clearbit.com/xmind.ai'
    },
    {
        name: 'Notion AI',
        category: 'business',
        description: 'AI-асистент для продуктивності',
        url: 'https://notion.so',
        logo: 'https://logo.clearbit.com/notion.so'
    },
    {
        name: 'Fireflies.ai',
        category: 'business',
        description: 'Транскрипція зустрічей та нотатки',
        url: 'https://fireflies.ai',
        logo: 'https://logo.clearbit.com/fireflies.ai'
    },
    {
        name: 'Otter.ai',
        category: 'business',
        description: 'Транскрипція та нотатки для зустрічей',
        url: 'https://otter.ai',
        logo: 'https://logo.clearbit.com/otter.ai'
    },
    {
        name: 'Jasper',
        category: 'business',
        description: 'AI-копірайтинг для бізнесу',
        url: 'https://jasper.ai',
        logo: 'https://logo.clearbit.com/jasper.ai'
    },
    {
        name: 'Copy.ai',
        category: 'business',
        description: 'Генерація маркетингових текстів',
        url: 'https://copy.ai',
        logo: 'https://logo.clearbit.com/copy.ai'
    },

    // Інше
    {
        name: 'Hugging Face',
        category: 'other',
        description: 'Платформа для ML-моделей та датасетів',
        url: 'https://huggingface.co',
        logo: 'https://logo.clearbit.com/huggingface.co'
    },
    {
        name: 'Replicate',
        category: 'other',
        description: 'Запуск AI-моделей через API',
        url: 'https://replicate.com',
        logo: 'https://logo.clearbit.com/replicate.com'
    },
    {
        name: 'GitHub Copilot',
        category: 'other',
        description: 'AI-асистент для програмування',
        url: 'https://github.com/features/copilot',
        logo: 'https://logo.clearbit.com/github.com'
    },
    {
        name: 'Cursor',
        category: 'other',
        description: 'IDE з вбудованим AI',
        url: 'https://cursor.sh',
        logo: 'https://logo.clearbit.com/cursor.sh'
    },
    {
        name: 'Grammarly',
        category: 'other',
        description: 'AI-помічник для письма',
        url: 'https://grammarly.com',
        logo: 'https://logo.clearbit.com/grammarly.com'
    },
    {
        name: 'Canva AI',
        category: 'other',
        description: 'Дизайн з AI-інструментами',
        url: 'https://canva.com',
        logo: 'https://logo.clearbit.com/canva.com'
    },
    {
        name: 'Framer AI',
        category: 'other',
        description: 'Веб-дизайн з AI',
        url: 'https://framer.com',
        logo: 'https://logo.clearbit.com/framer.com'
    },
    {
        name: 'Replit AI',
        category: 'other',
        description: 'Онлайн IDE з AI-помічником',
        url: 'https://replit.com',
        logo: 'https://logo.clearbit.com/replit.com'
    },
    {
        name: 'LM Studio',
        category: 'other',
        description: 'Локальний запуск великих мовних моделей',
        url: 'https://lmstudio.ai',
        logo: 'https://logo.clearbit.com/lmstudio.ai'
    }
];

const categoryNames = {
    learning: '🎓 Навчання',
    chatbots: '💬 Чат-боти',
    automation: '⚡ Автоматизація',
    multimedia: '🎨 Мультимедіа',
    business: '💼 Бізнес',
    other: '🔧 Інше'
};

// Порядок відображення категорій
const categoryOrder = ['learning', 'chatbots', 'automation', 'multimedia', 'business', 'other'];

let currentFilter = 'all';
let searchQuery = '';

function renderApps() {
    const container = document.getElementById('appsContainer');
    container.innerHTML = '';

    let filteredApps = aiApps;

    if (currentFilter !== 'all') {
        filteredApps = filteredApps.filter(app => app.category === currentFilter);
    }

    if (searchQuery) {
        filteredApps = filteredApps.filter(app =>
            app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const groupedApps = filteredApps.reduce((acc, app) => {
        if (!acc[app.category]) {
            acc[app.category] = [];
        }
        acc[app.category].push(app);
        return acc;
    }, {});

    // Використовуємо categoryOrder для правильного порядку відображення
    categoryOrder.filter(category => groupedApps[category]).forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = categoryNames[category];
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'apps-grid';

        groupedApps[category].forEach(app => {
            const card = createAppCard(app);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });

    if (filteredApps.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1 / -1;">Додатків не знайдено 😕</p>';
    }
}

function createAppCard(app) {
    const card = document.createElement('a');
    card.className = 'app-card';
    card.href = app.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const icon = document.createElement('div');
    icon.className = 'app-icon';

    // Використовуємо логотипи замість емоджі
    if (app.logo) {
        const img = document.createElement('img');
        img.src = app.logo;
        img.alt = app.name;
        img.loading = 'lazy';
        icon.appendChild(img);
    }

    const name = document.createElement('div');
    name.className = 'app-name';
    name.textContent = app.name;

    const description = document.createElement('div');
    description.className = 'app-description';
    description.textContent = app.description;

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(description);

    return card;
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderApps();
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderApps();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    setupFilters();
    setupSearch();
});
