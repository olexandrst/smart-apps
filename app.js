const aiApps = [
    // Навчання
    {
        name: 'Алекс Стасюк',
        category: 'learning',
        description: 'Експерт з ШІ, викладач курсу "ШІ для бізнесу"',
        url: 'https://www.linkedin.com/in/alex-stasuk-2ba761148',
        image: 'assets/images/alex-stasuk.jpg',
        icon: '👨‍🏫'
    },
    {
        name: 'Smart People',
        category: 'learning',
        description: 'Бізнес-школа в м. Рівне - навчання та розвиток',
        url: 'https://smartpeople.org.ua',
        icon: '🎓'
    },
    {
        name: 'Google Teachable Machine',
        category: 'learning',
        description: 'Навчання ML-моделей без коду - ідеально для початківців',
        url: 'https://teachablemachine.withgoogle.com',
        icon: '🤖'
    },
    {
        name: 'Elements of AI',
        category: 'learning',
        description: 'Безкоштовний курс основ ШІ для всіх',
        url: 'https://www.elementsofai.com',
        icon: '📚'
    },
    {
        name: 'Kaggle Learn',
        category: 'learning',
        description: 'Практичні мікрокурси з ML та Data Science',
        url: 'https://www.kaggle.com/learn',
        icon: '📊'
    },
    {
        name: 'Fast.ai',
        category: 'learning',
        description: 'Практичне навчання deep learning для всіх',
        url: 'https://www.fast.ai',
        icon: '⚡'
    },
    {
        name: 'DeepLearning.AI',
        category: 'learning',
        description: 'Курси від Andrew Ng - від основ до практики',
        url: 'https://www.deeplearning.ai',
        icon: '🧠'
    },
    {
        name: 'Hugging Face Learn',
        category: 'learning',
        description: 'Курси з NLP та трансформерів',
        url: 'https://huggingface.co/learn',
        icon: '🤗'
    },
    {
        name: 'Google AI Hub',
        category: 'learning',
        description: 'Навчальні матеріали та ресурси від Google',
        url: 'https://ai.google/education',
        icon: '🎯'
    },
    {
        name: 'Microsoft AI School',
        category: 'learning',
        description: 'Освітні ресурси з AI від Microsoft',
        url: 'https://www.microsoft.com/ai/ai-school',
        icon: '🏫'
    },

    // Чат-боти
    {
        name: 'Claude',
        category: 'chatbots',
        description: 'Потужний AI-асистент від Anthropic для складних завдань',
        url: 'https://claude.ai',
        icon: '🤖'
    },
    {
        name: 'ChatGPT',
        category: 'chatbots',
        description: 'Популярний AI-чатбот від OpenAI',
        url: 'https://chat.openai.com',
        icon: '💬'
    },
    {
        name: 'Gemini',
        category: 'chatbots',
        description: 'AI-асистент від Google',
        url: 'https://gemini.google.com',
        icon: '✨'
    },
    {
        name: 'Grok',
        category: 'chatbots',
        description: 'AI від X/Twitter з доступом до реальних даних',
        url: 'https://grok.x.ai',
        icon: '🚀'
    },
    {
        name: 'Copilot',
        category: 'chatbots',
        description: 'AI-помічник від Microsoft',
        url: 'https://copilot.microsoft.com',
        icon: '🎯'
    },
    {
        name: 'Google AI Studio',
        category: 'chatbots',
        description: 'Експериментуйте з Google Gemini API',
        url: 'https://aistudio.google.com',
        icon: '🔬'
    },
    {
        name: 'Poe',
        category: 'chatbots',
        description: 'Доступ до різних AI-моделей в одному місці',
        url: 'https://poe.com',
        icon: '🎪'
    },

    // Автоматизація
    {
        name: 'Zapier',
        category: 'automation',
        description: 'Автоматизація робочих процесів та інтеграції',
        url: 'https://zapier.com',
        icon: '⚡'
    },
    {
        name: 'Make',
        category: 'automation',
        description: 'Візуальна платформа автоматизації (Integromat)',
        url: 'https://make.com',
        icon: '🔗'
    },
    {
        name: 'Botpress',
        category: 'automation',
        description: 'Створення чат-ботів та автоматизація',
        url: 'https://botpress.com',
        icon: '🤖'
    },
    {
        name: 'n8n',
        category: 'automation',
        description: 'Open-source автоматизація робочих процесів',
        url: 'https://n8n.io',
        icon: '🔄'
    },

    // Мультимедіа - Зображення
    {
        name: 'OpenArt',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Редактор AI-зображень та генерація арту',
        url: 'https://openart.ai',
        icon: '🎨'
    },
    {
        name: 'Midjourney',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація високоякісних AI-зображень',
        url: 'https://www.midjourney.com',
        icon: '🖼️'
    },
    {
        name: 'DALL-E',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація зображень від OpenAI',
        url: 'https://openai.com/dall-e',
        icon: '🎭'
    },
    {
        name: 'Momoai',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Генерація фото та портретів',
        url: 'https://momoai.co',
        icon: '📸'
    },
    {
        name: 'Let\'s Enhance',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Покращення якості та реставрація зображень',
        url: 'https://letsenhance.io',
        icon: '✨'
    },
    {
        name: 'Remove.bg',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Видалення фону з зображень',
        url: 'https://remove.bg',
        icon: '🗑️'
    },
    {
        name: 'Stable Diffusion',
        category: 'multimedia',
        subcategory: 'images',
        description: 'Open-source генерація зображень',
        url: 'https://stablediffusionweb.com',
        icon: '🌈'
    },

    // Мультимедіа - 3D
    {
        name: 'Meshy',
        category: 'multimedia',
        subcategory: '3d',
        description: '3D моделювання та генерація мешів',
        url: 'https://meshy.ai',
        icon: '🧊'
    },
    {
        name: 'Luma AI',
        category: 'multimedia',
        subcategory: '3d',
        description: 'Створення 3D моделей з фото',
        url: 'https://lumalabs.ai',
        icon: '📦'
    },
    {
        name: 'Spline AI',
        category: 'multimedia',
        subcategory: '3d',
        description: '3D дизайн з AI-асистентом',
        url: 'https://spline.design',
        icon: '🎲'
    },

    // Мультимедіа - Відео
    {
        name: 'Synthesia',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Генерація відео з AI-аватарами',
        url: 'https://synthesia.io',
        icon: '🎬'
    },
    {
        name: 'Runway',
        category: 'multimedia',
        subcategory: 'video',
        description: 'AI-інструменти для відеомонтажу',
        url: 'https://runwayml.com',
        icon: '🎥'
    },
    {
        name: 'HeyGen',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Створення відео з AI-аватарами',
        url: 'https://heygen.com',
        icon: '🎞️'
    },
    {
        name: 'Pika',
        category: 'multimedia',
        subcategory: 'video',
        description: 'Генерація відео з тексту',
        url: 'https://pika.art',
        icon: '📹'
    },

    // Мультимедіа - Аудіо
    {
        name: 'ElevenLabs',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Генерація голосу та озвучка',
        url: 'https://elevenlabs.io',
        icon: '🎙️'
    },
    {
        name: 'Murf AI',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Професійна AI-озвучка',
        url: 'https://murf.ai',
        icon: '🔊'
    },
    {
        name: 'Suno',
        category: 'multimedia',
        subcategory: 'audio',
        description: 'Генерація музики та пісень',
        url: 'https://suno.ai',
        icon: '🎵'
    },

    // Бізнес
    {
        name: 'Perplexity',
        category: 'business',
        description: 'Розумний пошук з AI',
        url: 'https://perplexity.ai',
        icon: '🔍'
    },
    {
        name: 'XMind',
        category: 'business',
        description: 'Інтелектуальні карти та мозковий штурм',
        url: 'https://xmind.ai',
        icon: '🧠'
    },
    {
        name: 'Notion AI',
        category: 'business',
        description: 'AI-асистент для продуктивності',
        url: 'https://notion.so',
        icon: '📝'
    },
    {
        name: 'Fireflies.ai',
        category: 'business',
        description: 'Транскрипція зустрічей та нотатки',
        url: 'https://fireflies.ai',
        icon: '🎤'
    },
    {
        name: 'Otter.ai',
        category: 'business',
        description: 'Транскрипція та нотатки для зустрічей',
        url: 'https://otter.ai',
        icon: '🦦'
    },
    {
        name: 'Jasper',
        category: 'business',
        description: 'AI-копірайтинг для бізнесу',
        url: 'https://jasper.ai',
        icon: '✍️'
    },
    {
        name: 'Copy.ai',
        category: 'business',
        description: 'Генерація маркетингових текстів',
        url: 'https://copy.ai',
        icon: '📄'
    },

    // Інше
    {
        name: 'Hugging Face',
        category: 'other',
        description: 'Платформа для ML-моделей та датасетів',
        url: 'https://huggingface.co',
        icon: '🤗'
    },
    {
        name: 'Replicate',
        category: 'other',
        description: 'Запуск AI-моделей через API',
        url: 'https://replicate.com',
        icon: '🔄'
    },
    {
        name: 'GitHub Copilot',
        category: 'other',
        description: 'AI-асистент для програмування',
        url: 'https://github.com/features/copilot',
        icon: '👨‍💻'
    },
    {
        name: 'Cursor',
        category: 'other',
        description: 'IDE з вбудованим AI',
        url: 'https://cursor.sh',
        icon: '⌨️'
    },
    {
        name: 'Grammarly',
        category: 'other',
        description: 'AI-помічник для письма',
        url: 'https://grammarly.com',
        icon: '📚'
    },
    {
        name: 'Canva AI',
        category: 'other',
        description: 'Дизайн з AI-інструментами',
        url: 'https://canva.com',
        icon: '🎨'
    },
    {
        name: 'Framer AI',
        category: 'other',
        description: 'Веб-дизайн з AI',
        url: 'https://framer.com',
        icon: '🖥️'
    },
    {
        name: 'Replit AI',
        category: 'other',
        description: 'Онлайн IDE з AI-помічником',
        url: 'https://replit.com',
        icon: '💻'
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

    // Підтримка як зображень так і емоджі
    if (app.image) {
        const img = document.createElement('img');
        img.src = app.image;
        img.alt = app.name;
        img.onerror = function() {
            // Якщо зображення не завантажилось, показуємо емоджі
            this.style.display = 'none';
            icon.textContent = app.icon;
        };
        icon.appendChild(img);
    } else {
        icon.textContent = app.icon;
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
