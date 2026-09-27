// Expanded case studies and technology lists, grounded in the owner's resume.
const stacks = {
  life: [
    ['Unity / C#', 'Zenject', 'SOLID', 'ScriptableObject', 'Addressables'],
    ['Android', 'iOS', 'Native plugins', 'Geolocation', 'QR scanning'],
    ['REST API', 'UnityWebRequest', 'JSON', 'async / await', 'Coroutines'],
    ['Unity UI', 'TextMeshPro', 'DOTween', 'Firebase', 'Crashlytics'],
    ['Unity Profiler', 'Gradle', 'Android SDK', 'Xcode', 'Git', 'Google Play', 'App Store'],
  ],
  sol: [
    ['Unity / C#', 'Zenject', 'SOLID', 'ScriptableObject', 'Addressables'],
    ['REST API', 'UnityWebRequest', 'JSON', 'async / await', 'Coroutines', 'Web3'],
    ['Unity UI', 'TextMeshPro', 'DOTween', 'UI navigation'],
    ['Firebase', 'Crashlytics', 'Unity Profiler', 'Git', 'WebGL', 'Android', 'iOS'],
  ],
  ants: [
    ['Unity', 'C#', 'Game architecture', 'System design'],
    ['Multi-agent systems', 'Autonomous agents', 'Agent navigation', 'Pheromone communication'],
    ['Procedural generation', 'Real-time simulation', 'Emergent behaviour'],
    ['Gameplay programming', 'Systems design', 'Prototyping', 'Playtesting'],
  ],
};

const techTags = [
  ['Unity', 'C#', 'OOP', 'SOLID', 'Zenject', 'ScriptableObject', 'ECS'],
  ['UniTask', 'UniRx', 'async / await', 'Coroutines', 'Addressables'],
  ['Unity UI', 'TextMeshPro', 'DOTween', 'Spine', 'Animation'],
  ['REST API', 'HTTP', 'WebSockets', 'UnityWebRequest', 'JSON', 'Firebase', 'Crashlytics', 'Web3'],
  ['Android', 'iOS', 'WebGL', 'Native plugins', 'SDK integration', 'Geolocation', 'QR scanning'],
  ['Unity Profiler', 'Git', 'CI/CD', 'Gradle', 'Android SDK', 'Xcode', 'Google Play', 'App Store'],
];

export const details = {
  ru: {
    techKicker: 'ИНСТРУМЕНТЫ И ПРАКТИКА', techTitle: 'Стек за каждым решением.',
    techIntro: 'Технологии, с которыми работал в игровых и мобильных проектах. В подробных кейсах — конкретный контекст их применения.',
    techGroups: [
      ['Язык и архитектура', 'Проектирование модулей, разделение данных, логики и представления, внедрение зависимостей.'],
      ['Асинхронность и контент', 'Асинхронные операции, реактивные сценарии, загрузка и управление игровым контентом.'],
      ['Интерфейсы и анимация', 'Экраны, списки, попапы, навигация и визуальная обратная связь на действия игрока.'],
      ['Сеть и внешние сервисы', 'Состояния клиента и сервера, API, диагностика сбоев, интеграции аналитики и игровых сервисов.'],
      ['Платформы и интеграции', 'Мобильные сборки, нативные модули, разрешения, lifecycle и взаимодействие с устройством.'],
      ['Производительность и релизы', 'Профилирование памяти и аллокаций, сборки, зависимости, публикация и поддержка продукта.'],
    ].map(([title, description], i) => ({title, description, tags: techTags[i]})),
    scopeLabel: 'Моя зона ответственности', teamLabel: 'Как работали',
    engineeringLabel: 'Инженерные задачи и решения', projectStackLabel: 'Технологии проекта',
    highlightsLabel: 'Мой вклад', earlierLabel: 'Подробнее о проекте',
    projectDetails: {
      life: {
        tags: ['Unity / C#', 'Zenject', 'Native plugins', 'REST API', 'Firebase', 'Android / iOS'],
        highlights: ['Модульная архитектура вместо тесно связанного legacy.', 'Нативные геолокация, QR и авторизация; выпуск в двух сторах.'],
        scope: 'Техническое развитие Unity-клиента: архитектура, нативные плагины, UI, интеграции, оптимизация и production-релизы.',
        team: 'Команда Unity- и backend-разработчиков, дизайнер, QA и продукт. Принимал архитектурные решения, декомпозировал задачи и проводил code review.',
        work: [
          ['Архитектура и развитие legacy', 'Разделил интерфейс, бизнес-логику, сетевой слой, локальное хранение и платформенные интеграции. Вынес клиентские системы в сервисы и адаптеры, чтобы Android и iOS использовали общую логику.'],
          ['Нативная геолокация', 'Разработал модуль для обеих мобильных платформ: запрос разрешений, работа с lifecycle и фоновыми сценариями, передача координат в Unity. Диагностировал поведение на реальных устройствах.'],
          ['Авторизация и QR-сканер', 'Реализовал нативные плагины входа и сканирования: возврат из системного интерфейса в приложение, передача результатов, обработка ошибок камеры и восстановление пользовательского состояния.'],
          ['Backend и продуктовые интеграции', 'Настроил запросы к API, сериализацию, повторные отправки и отображение локальных состояний. Интегрировал и поддерживал Firebase, Crashlytics, аналитику, платежи и platform services.'],
          ['Интерфейсы и мобильная оптимизация', 'Вынес повторяемую UI-логику в переиспользуемые компоненты. Контролировал память, аллокации, частоту обновлений и работу фоновых сервисов на Android и iOS.'],
          ['Путь до релиза', 'Готовил production-сборки и решал проблемы Gradle, Android SDK, Xcode, зависимостей, подписей и provisioning profiles. Участвовал в прохождении App Store Review и публикации через Google Play Console.'],
        ],
        stack: ['Архитектура и данные', 'Платформенные модули', 'Сеть и асинхронность', 'UI и сервисы', 'Диагностика и релиз'].map((title,i)=>({title,tags:stacks.life[i]})),
      },
      sol: {
        tags: ['Unity / C#', 'Zenject', 'REST API', 'Addressables', 'Unity UI', 'Web3'],
        highlights: ['Экономика, прогрессия и 15+ сценариев работы с backend.', 'Навигация, состояния UI и оптимизация тяжёлых экранов.'],
        scope: 'Unity-клиент онлайн-стратегии: архитектура, игровые и мета-системы, backend-интеграции, UI, оптимизация и поддержка live-сборок.',
        team: 'Unity, backend, frontend, UI/UX, QA, продукт и геймдизайн. Регулярные обновления с отдельными staging- и production-окружениями.',
        work: [
          ['Модульный клиент', 'Разделил интерфейсы, игровые состояния, сеть, сервисы и конфиги. Пользовательские данные, сессии и сетевые операции получили отдельный слой, чтобы UI не зависел от формата ответов backend.'],
          ['Экономика и мета-системы', 'Развивал клиентские модули экономики, прогрессии, наград и пользовательских состояний. Связал игровые сценарии с синхронизацией серверных данных.'],
          ['Сеть и восстановление состояния', 'Интегрировал более 15 API-сценариев: запросы, сериализацию, ошибки и повторы. Обработал частично загруженные состояния, некорректные ответы и восстановление интерфейса после сетевого сбоя.'],
          ['UI, навигация и переиспользование', 'Переработал экраны, попапы, списки и loading-состояния. Разделил логику, состояние и представление, чтобы новые пользовательские сценарии требовали меньше ручной связующей логики.'],
          ['Оптимизация и Web3', 'Снизил runtime-аллокации на тяжёлых UI-экранах примерно на треть: убрал лишние обновления, переиспользовал данные и проверял результат через Unity Profiler. Для Web3-интеграций реализовал клиентские статусы ожидания, результата и ошибок операций.'],
          ['Live-разработка и качество', 'Готовил staging- и production-сборки, проверял окружения и критичные сценарии перед релизом. Проводил code review, декомпозировал задачи и постепенно рефакторил legacy-участки параллельно с разработкой новых фич.'],
        ],
        stack: ['Архитектура и контент', 'Сеть и интеграции', 'Интерфейсы', 'Диагностика и платформы'].map((title,i)=>({title,tags:stacks.sol[i]})),
      },
      ants: {
        tags: ['Unity / C#', 'Multi-agent AI', 'Pheromones', 'Procedural generation', 'Simulation'],
        highlights: ['Автономные агенты с локальным восприятием и феромонной связью.', 'Процедурный муравейник и первый закрытый плейтест.'],
        scope: 'Самостоятельная разработка: концепция, системный геймдизайн, архитектура, AI, механики, визуализация и играбельные сборки.',
        team: 'Solo-разработка с проверкой игровых гипотез через прототипы и закрытый плейтест. Собираю обратную связь и определяю приоритеты развития симуляции.',
        work: [
          ['Архитектура живой колонии', 'Объединил поведение агентов, феромонную связь, добычу ресурсов, размножение и развитие колонии. Изменения среды и действия отдельных муравьёв влияют на состояние всей системы.'],
          ['Децентрализованный AI', 'Реализовал исследование мира, поиск и перенос ресурсов, возвращение в муравейник и коллективные атаки. Агенты действуют по локальным сигналам окружения, без готовых координат целей.'],
          ['Феромонная коммуникация', 'Разработал путевые, пищевые и боевые феромоны. Используемые следы усиливаются, остальные испаряются: так колония формирует маршруты и перераспределяет активность без управления каждым агентом.'],
          ['Процедурный мир и жизненный цикл', 'Муравьи выкапывают помещения и расширяют муравейник в процессе симуляции. Связал изменение среды с иерархией, размножением, ростом популяции и сбором ресурсов.'],
          ['Наблюдаемый AI и плейтесты', 'Визуализировал появление, усиление и затухание феромонных следов, чтобы игрок видел причины поведения колонии. Довёл прототип до играбельной версии и первого закрытого плейтеста.'],
        ],
        stack: ['Основа проекта', 'Поведение агентов', 'Мир и симуляция', 'Разработка и проверка идей'].map((title,i)=>({title,tags:stacks.ants[i]})),
      },
    },
    earlierProjects: {
      'DIGroup Limited': {
        intro: 'Онлайн-sandbox об исследовании планеты космическим зондом. Как основной Unity-разработчик вёл полный цикл клиентской части — от прототипирования до рабочих сборок.',
        points: ['Полётная модель, управление зондом, навигация и NPC, реагирующие на состояние мира.', 'Редактирование ландшафта и подземные залежи: скрытые ресурсы становились доступны после раскопки.', 'Строительство базы с проверкой условий размещения и занятости области; клиентские механики PvP и кланов.', 'Backend API, разделение gameplay-систем на модули, оптимизация сцен и UI через Unity Profiler.'],
        tags: ['Unity / C#', 'REST API', 'UnityWebRequest', 'JSON', 'ScriptableObject', 'DOTween', 'TextMeshPro', 'Unity Profiler', 'Android / iOS', 'WebGL'],
      },
      'Raid Leader': {
        intro: 'Тактическая игра об управлении отрядом. Самостоятельно реализовал клиент: боевую логику, персонажей, способности, AI, интерфейсы и сборки.',
        points: ['Система юнитов с ролями, характеристиками, состояниями и реакциями на действия других персонажей.', 'Способности: кулдауны, выбор цели, условия применения, эффекты, урон и обратная связь в UI.', 'AI персонажей: принятие решений в бою, переключение состояний и стратегии поведения, выбираемые игроком.', 'Конфиги для балансировки без изменения основной логики, разделение систем боя и оптимизация сцены.'],
        tags: ['Unity / C#', 'State machines', 'Character AI', 'Ability systems', 'ScriptableObject', 'SOLID', 'Coroutines', 'DOTween', 'Unity UI', 'Unity Profiler'],
      },
    },
  },
  en: {
    techKicker: 'TOOLS & PRACTICE', techTitle: 'The stack behind the decisions.',
    techIntro: 'Technologies I have worked with across game and mobile projects. The case studies show where and how I applied them.',
    techGroups: [
      ['Language & architecture', 'Modular systems, separating data, logic and presentation, and dependency injection.'],
      ['Async & content', 'Asynchronous operations, reactive flows, loading and managing game content.'],
      ['Interfaces & animation', 'Screens, lists, popups, navigation and visual feedback for player actions.'],
      ['Networking & services', 'Client and server state, APIs, error diagnostics, analytics and game service integrations.'],
      ['Platforms & integrations', 'Mobile builds, native modules, permissions, lifecycle handling and device interaction.'],
      ['Performance & releases', 'Memory and allocation profiling, builds, dependencies, publishing and product support.'],
    ].map(([title,description],i)=>({title,description,tags:techTags[i]})),
    scopeLabel: 'My responsibility', teamLabel: 'Working context',
    engineeringLabel: 'Engineering challenges & solutions', projectStackLabel: 'Project technologies',
    highlightsLabel: 'My contribution', earlierLabel: 'More about the project',
    projectDetails: {
      life: {
        tags: ['Unity / C#', 'Zenject', 'Native plugins', 'REST API', 'Firebase', 'Android / iOS'],
        highlights: ['Replaced tightly coupled legacy code with modular client systems.', 'Native location, QR and authentication; releases on both stores.'],
        scope: 'Technical ownership of the Unity client: architecture, native plugins, UI, integrations, optimisation and production releases.',
        team: 'Unity and backend developers, a designer, QA and product. Made architecture decisions, broke down tasks and reviewed code.',
        work: [
          ['Architecture & legacy evolution', 'Separated UI, business logic, networking, local storage and platform integrations. Extracted client systems into services and adapters so Android and iOS could share core logic.'],
          ['Native geolocation', 'Built modules for both mobile platforms: permission requests, app lifecycle and background scenarios, and passing coordinates to Unity. Diagnosed behaviour on real devices.'],
          ['Authentication & QR scanning', 'Implemented native sign-in and scanner plugins: returning from system UI, passing results to Unity, handling camera errors and restoring user state.'],
          ['Backend & product integrations', 'Implemented API calls, serialisation, retries and local state presentation. Integrated and maintained Firebase, Crashlytics, analytics, payments and platform services.'],
          ['UI & mobile optimisation', 'Extracted repeated UI logic into reusable components. Monitored memory, allocations, update frequency and background service behaviour on Android and iOS.'],
          ['Shipping the product', 'Prepared production builds and resolved Gradle, Android SDK, Xcode, dependency, signing and provisioning profile issues. Worked on App Store Review and Google Play Console publishing.'],
        ],
        stack: ['Architecture & data', 'Platform modules', 'Networking & async', 'UI & services', 'Diagnostics & releases'].map((title,i)=>({title,tags:stacks.life[i]})),
      },
      sol: {
        tags: ['Unity / C#', 'Zenject', 'REST API', 'Addressables', 'Unity UI', 'Web3'],
        highlights: ['Economy, progression and 15+ backend integration flows.', 'UI navigation, state management and heavy-screen optimisation.'],
        scope: 'The Unity client of an online strategy game: architecture, gameplay and meta systems, backend integration, UI, optimisation and live build support.',
        team: 'Unity, backend, frontend, UI/UX, QA, product and game design. Regular updates with separate staging and production environments.',
        work: [
          ['A modular client', 'Separated interfaces, game states, networking, services and configuration. User data, sessions and network operations gained their own layer so UI did not depend directly on backend response formats.'],
          ['Economy & meta systems', 'Developed client modules for economy, progression, rewards and user states. Connected gameplay flows to server data synchronisation.'],
          ['Networking & state recovery', 'Integrated 15+ API flows, including requests, serialisation, failures and retries. Handled partially loaded states, invalid responses and UI recovery after network failures.'],
          ['UI, navigation & reuse', 'Reworked screens, popups, lists and loading states. Separated logic, state and presentation so new user flows required less manual glue code.'],
          ['Optimisation & Web3', 'Reduced runtime allocations on heavy UI screens by roughly one third by removing redundant updates, reusing data and validating with Unity Profiler. Implemented client-side pending, success and failure states for Web3 operations.'],
          ['Live development & quality', 'Prepared staging and production builds and checked environments and critical flows before release. Reviewed code, broke down tasks and gradually refactored legacy areas alongside new feature development.'],
        ],
        stack: ['Architecture & content', 'Networking & integrations', 'Interfaces', 'Diagnostics & platforms'].map((title,i)=>({title,tags:stacks.sol[i]})),
      },
      ants: {
        tags: ['Unity / C#', 'Multi-agent AI', 'Pheromones', 'Procedural generation', 'Simulation'],
        highlights: ['Autonomous agents with local perception and pheromone communication.', 'A procedural nest and the first closed playtest.'],
        scope: 'Solo development: concept, systems design, architecture, AI, mechanics, visualisation and playable builds.',
        team: 'Independent development, validating ideas through prototypes and a closed playtest. Gathering feedback to prioritise the simulation’s evolution.',
        work: [
          ['Architecture of a living colony', 'Connected agent behaviour, pheromone communication, resource gathering, reproduction and colony development. Environmental changes and individual ants affect the whole system.'],
          ['Decentralised AI', 'Implemented exploration, resource discovery and transport, returning to the nest and collective attacks. Agents act on local environmental signals rather than predefined target coordinates.'],
          ['Pheromone communication', 'Built route, food and combat pheromones. Used trails strengthen while others evaporate, allowing routes and activity to emerge without commanding individual agents.'],
          ['A procedural world & life cycle', 'Ants excavate chambers and expand the nest during simulation. Connected changes in the environment to hierarchy, reproduction, population growth and resource gathering.'],
          ['Observable AI & playtesting', 'Visualised the appearance, reinforcement and decay of pheromone trails so players can understand colony behaviour. Took the prototype to a playable build and its first closed playtest.'],
        ],
        stack: ['Project foundation', 'Agent behaviour', 'World & simulation', 'Development & validation'].map((title,i)=>({title,tags:stacks.ants[i]})),
      },
    },
    earlierProjects: {
      'DIGroup Limited': {
        intro: 'An online sandbox about exploring a planet with a space probe. As the primary Unity developer, I owned the client cycle from prototyping to working builds.',
        points: ['Flight model, probe controls, navigation and NPCs reacting to world state.', 'Terrain editing and underground deposits: hidden resources become available after excavation.', 'Base construction with placement and occupancy checks, plus client-side PvP and clan systems.', 'Backend APIs, modular gameplay systems, and scene and UI optimisation with Unity Profiler.'],
        tags: ['Unity / C#', 'REST API', 'UnityWebRequest', 'JSON', 'ScriptableObject', 'DOTween', 'TextMeshPro', 'Unity Profiler', 'Android / iOS', 'WebGL'],
      },
      'Raid Leader': {
        intro: 'A tactical squad combat game. Independently implemented the client: combat logic, characters, abilities, AI, interfaces and builds.',
        points: ['Units with roles, attributes, states and reactions to other characters’ actions.', 'Abilities with cooldowns, target selection, conditions, effects, damage and UI feedback.', 'Character AI with combat decisions, state transitions and player-selected behaviour strategies.', 'Data-driven balancing without changing core logic, separated combat systems and scene optimisation.'],
        tags: ['Unity / C#', 'State machines', 'Character AI', 'Ability systems', 'ScriptableObject', 'SOLID', 'Coroutines', 'DOTween', 'Unity UI', 'Unity Profiler'],
      },
    },
  },
};
