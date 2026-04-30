const aiApps = [
    // Навчання
    {
        name: 'Алекс Стасюк',
        category: 'learning',
        description: 'Експерт з ШІ, викладач курсу "ШІ для бізнесу"',
        url: 'https://www.linkedin.com/in/alex-stasuk-2ba761148',
        image: 'assets/images/alex-stasuk.jpg',
        icon: '👨‍🏫',
        details: 'Викладач курсу "ШІ для бізнесу" в бізнес-школі Smart People. Допомагає підприємцям опанувати штучний інтелект та інтегрувати його в бізнес-процеси.',
        features: [
            'Авторський курс з практичним підходом',
            'Робота з реальними бізнес-кейсами',
            'Менторинг та супровід студентів',
            'Експертиза в галузі AI-автоматизації'
        ]
    },
    {
        name: 'Smart People',
        category: 'learning',
        description: 'Бізнес-школа в м. Рівне - навчання та розвиток',
        url: 'https://smartpeople.ua/',
        icon: '🎓',
        details: 'Бізнес-школа Smart People в м. Рівне пропонує курси для підприємців, керівників і фахівців. Спеціалізується на практичному навчанні бізнес-навичкам та сучасним технологіям.',
        features: [
            'Курси з ШІ для бізнесу',
            'Програми для керівників і власників',
            'Практичне навчання від експертів',
            'Спільнота випускників і нетворкінг'
        ]
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
        icon: '🤖',
        details: 'Claude — це передовий AI-асистент від компанії Anthropic, орієнтований на безпечні та осмислені відповіді. Особливо сильний у роботі з довгими документами, аналізі та складних міркуваннях.',
        features: [
            'Аналіз великих документів і PDF',
            'Просунута робота з кодом',
            'Робота з зображеннями та діаграмами',
            'Велике контекстне вікно',
            'Артефакти — інтерактивні результати'
        ]
    },
    {
        name: 'ChatGPT',
        category: 'chatbots',
        description: 'Популярний AI-чатбот від OpenAI',
        url: 'https://chat.openai.com',
        icon: '💬',
        details: 'ChatGPT — найпопулярніший AI-чатбот від OpenAI. Універсальний інструмент для написання текстів, програмування, навчання та творчих задач.',
        features: [
            'Генерація та редагування текстів',
            'Допомога з програмуванням',
            'Робота із зображеннями (GPT-4o)',
            'Голосовий режим спілкування',
            'GPTs — кастомні асистенти'
        ]
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

    // Розробникам
    {
        name: 'GitHub Copilot',
        category: 'developers',
        description: 'AI-асистент для програмування',
        url: 'https://github.com/features/copilot',
        icon: '👨‍💻',
        details: 'GitHub Copilot — це AI-помічник для розробників, який пропонує автодоповнення коду в реальному часі. Інтегрується з популярними IDE та підтримує багато мов програмування.',
        features: [
            'Автодоповнення коду в реальному часі',
            'Підтримка десятків мов програмування',
            'Чат для пояснення і рефакторингу',
            'Інтеграція з VS Code, JetBrains, Neovim'
        ]
    },
    {
        name: 'Cursor',
        category: 'developers',
        description: 'IDE з вбудованим AI',
        url: 'https://cursor.sh',
        icon: '⌨️',
        details: 'Cursor — це IDE на базі VS Code з глибокою інтеграцією AI. Дозволяє редагувати код за допомогою чату, генерувати функції та автоматично виправляти помилки.',
        features: [
            'Чат із розумінням всього проєкту',
            'Редагування коду через AI-підказки',
            'Автоматичне виправлення помилок',
            'Сумісність з розширеннями VS Code'
        ]
    },
    {
        name: 'Replit AI',
        category: 'developers',
        description: 'Онлайн IDE з AI-помічником',
        url: 'https://replit.com',
        icon: '💻',
        details: 'Replit — це браузерна платформа для розробки з вбудованим AI-помічником. Дозволяє створювати, запускати і ділитись проєктами без локальних налаштувань.',
        features: [
            'Розробка прямо в браузері',
            'AI-агент для автоматичного створення проєктів',
            'Спільне редагування в реальному часі',
            'Підтримка багатьох мов і фреймворків'
        ]
    },
    {
        name: 'Claude Code',
        category: 'developers',
        description: 'CLI-агент для розробки від Anthropic',
        url: 'https://claude.com/product/claude-code',
        icon: '⚙️',
        details: 'Claude Code — офіційний CLI-агент від Anthropic для роботи з кодовою базою прямо в терміналі. Розуміє контекст проєкту, виконує задачі та інтегрується з IDE.',
        features: [
            'Робота безпосередньо в терміналі',
            'Розуміння всієї кодової бази',
            'Виконання багатокрокових задач',
            'Інтеграція з VS Code, JetBrains'
        ]
    },
    {
        name: 'v0',
        category: 'developers',
        description: 'AI-генерація React-компонентів від Vercel',
        url: 'https://v0.dev',
        icon: '🔷',
        details: 'v0 від Vercel — це AI-інструмент для генерації UI-компонентів за текстовим описом. Видає готовий код React/Tailwind, який можна одразу використовувати у проєкті.',
        features: [
            'Генерація UI з текстового опису',
            'Готовий код React + Tailwind CSS',
            'Інтерактивний редактор результатів',
            'Експорт в shadcn/ui компоненти'
        ]
    },
    {
        name: 'Bolt.new',
        category: 'developers',
        description: 'Створення повноцінних застосунків в браузері',
        url: 'https://bolt.new',
        icon: '⚡',
        details: 'Bolt.new — браузерна AI-платформа від StackBlitz для створення повноцінних веб-застосунків. Генерує, запускає та розгортає код прямо у вашому браузері.',
        features: [
            'Створення full-stack застосунків',
            'Запуск Node.js у браузері (WebContainers)',
            'Розгортання одним кліком',
            'Підтримка популярних фреймворків'
        ]
    },
    {
        name: 'Windsurf',
        category: 'developers',
        description: 'AI-IDE наступного покоління від Codeium',
        url: 'https://codeium.com/windsurf',
        icon: '🌊',
        details: 'Windsurf — це AI-IDE від Codeium з агентним підходом. Сам аналізує проєкт, планує зміни та виконує їх з контекстом всієї кодової бази.',
        features: [
            'Cascade — агент з повним контекстом проєкту',
            'Автоматичні багатофайлові зміни',
            'Швидкі чат-команди',
            'Безкоштовний автокомпліт'
        ]
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
        name: 'LM Studio',
        category: 'other',
        description: 'Локальний запуск великих мовних моделей',
        url: 'https://lmstudio.ai',
        icon: '🖥️'
    }
];

const categoryNames = {
    learning: '🎓 Навчання',
    chatbots: '💬 Чат-боти',
    automation: '⚡ Автоматизація',
    multimedia: '🎨 Мультимедіа',
    business: '💼 Бізнес',
    developers: '👨‍💻 Розробникам',
    other: '🔧 Інше'
};

// Порядок відображення категорій
const categoryOrder = ['learning', 'chatbots', 'automation', 'multimedia', 'business', 'developers', 'other'];

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
    const card = document.createElement('button');
    card.className = 'app-card';
    card.type = 'button';
    card.addEventListener('click', () => openServiceModal(app));

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

function openServiceModal(app) {
    const modal = document.getElementById('serviceModal');
    const iconEl = document.getElementById('modalIcon');
    const titleEl = document.getElementById('modalTitle');
    const subtitleEl = document.getElementById('modalSubtitle');
    const detailsEl = document.getElementById('modalDetails');
    const featuresEl = document.getElementById('modalFeatures');
    const featuresSection = document.getElementById('modalFeaturesSection');
    const linkEl = document.getElementById('modalLink');

    iconEl.innerHTML = '';
    if (app.image) {
        const img = document.createElement('img');
        img.src = app.image;
        img.alt = app.name;
        img.onerror = function() {
            this.remove();
            iconEl.textContent = app.icon;
        };
        iconEl.appendChild(img);
    } else {
        iconEl.textContent = app.icon;
    }

    titleEl.textContent = app.name;
    subtitleEl.textContent = categoryNames[app.category] || '';
    detailsEl.textContent = app.details || app.description;

    featuresEl.innerHTML = '';
    if (Array.isArray(app.features) && app.features.length > 0) {
        app.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresEl.appendChild(li);
        });
        featuresSection.style.display = '';
    } else {
        featuresSection.style.display = 'none';
    }

    linkEl.href = app.url;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

function setupModal() {
    const modal = document.getElementById('serviceModal');

    modal.querySelectorAll('[data-modal-close]').forEach(el => {
        el.addEventListener('click', closeServiceModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeServiceModal();
        }
    });
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
    setupModal();
});
