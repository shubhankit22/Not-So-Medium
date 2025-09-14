// Application data with authentication support
const demoAccounts = [
    {
        email: "writer@demo.com",
        password: "writer123", 
        role: "Writer",
        name: "Demo Writer"
    },
    {
        email: "reader@demo.com", 
        password: "reader123",
        role: "Reader", 
        name: "Demo Reader"
    }
];

let articlesData = [
    {
        "id": 1,
        "title": "Building Scalable Microservices with Node.js and Docker",
        "excerpt": "Learn how to architect and deploy microservices using modern containerization techniques and best practices for production environments.",
        "author": "Sarah Chen",
        "publishDate": "2025-09-10",
        "readTime": "8 min read",
        "category": "DevOps",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        "featured": true,
        "authorEmail": "writer@demo.com"
    },
    {
        "id": 2,
        "title": "React 19: New Features and Breaking Changes You Need to Know",
        "excerpt": "Explore the latest updates in React 19 including Server Components, improved Suspense, and migration strategies for existing applications.",
        "author": "Alex Kumar",
        "publishDate": "2025-09-12",
        "readTime": "6 min read", 
        "category": "JavaScript",
        "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        "featured": true,
        "authorEmail": "writer@demo.com"
    },
    {
        "id": 3,
        "title": "Machine Learning Model Deployment with FastAPI and AWS",
        "excerpt": "Complete guide to deploying ML models in production using FastAPI, Docker, and AWS services for scalable AI applications.",
        "author": "Michael Rodriguez",
        "publishDate": "2025-09-08",
        "readTime": "12 min read",
        "category": "AI/ML",
        "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "writer@demo.com"
    },
    {
        "id": 4,
        "title": "Advanced Python Decorators: Patterns and Best Practices",
        "excerpt": "Master Python decorators with real-world examples including caching, authentication, logging, and performance monitoring.",
        "author": "Elena Vasquez",
        "publishDate": "2025-09-06",
        "readTime": "10 min read",
        "category": "Python",
        "image": "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "reader@demo.com"
    },
    {
        "id": 5,
        "title": "Cybersecurity in 2025: Emerging Threats and Defense Strategies", 
        "excerpt": "Comprehensive analysis of modern cybersecurity challenges including AI-powered attacks, quantum computing threats, and defense mechanisms.",
        "author": "David Park",
        "publishDate": "2025-09-04",
        "readTime": "15 min read",
        "category": "Cybersecurity",
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "writer@demo.com"
    },
    {
        "id": 6,
        "title": "TypeScript 5.5: Advanced Types and Performance Improvements",
        "excerpt": "Deep dive into TypeScript's newest features including template literal types, improved inference, and build performance optimizations.",
        "author": "Lisa Wang",
        "publishDate": "2025-09-02",
        "readTime": "9 min read",
        "category": "JavaScript",
        "image": "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "writer@demo.com"
    },
    {
        "id": 7,
        "title": "Building Real-time Applications with WebSockets and Socket.io",
        "excerpt": "Create interactive web applications with real-time communication using WebSockets, Socket.io, and modern web technologies.",
        "author": "James Thompson",
        "publishDate": "2025-08-30",
        "readTime": "11 min read",
        "category": "Web Development",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "reader@demo.com"
    },
    {
        "id": 8,
        "title": "Kubernetes Best Practices: From Basics to Production",
        "excerpt": "Essential Kubernetes concepts, deployment strategies, monitoring, and security practices for running containers in production.",
        "author": "Amanda Foster",
        "publishDate": "2025-08-28",
        "readTime": "14 min read",
        "category": "DevOps",
        "image": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
        "featured": false,
        "authorEmail": "writer@demo.com"
    }
];

const externalResources = [
    {
        "name": "GitHub",
        "description": "Discover trending repositories and open-source projects",
        "url": "https://github.com/trending",
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "color": "#24292e"
    },
    {
        "name": "Stack Overflow",
        "description": "Get answers to your programming questions",
        "url": "https://stackoverflow.com",
        "image": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png",
        "color": "#f48024"
    },
    {
        "name": "MDN Web Docs", 
        "description": "Comprehensive web development documentation",
        "url": "https://developer.mozilla.org",
        "image": "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
        "color": "#000000"
    },
    {
        "name": "TechCrunch",
        "description": "Latest startup and tech industry news",
        "url": "https://techcrunch.com",
        "image": "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png",
        "color": "#00cf63"
    },
    {
        "name": "Dev.to",
        "description": "Community platform for developers",
        "url": "https://dev.to",
        "image": "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
        "color": "#0a0a0a"
    }
];

let suggestedTopics = [
    {
        "id": 1,
        "title": "GraphQL vs REST API Design Patterns",
        "votes": 42,
        "suggestedBy": "writer@demo.com",
        "suggestedByName": "Demo Writer"
    },
    {
        "id": 2,
        "title": "Rust for Systems Programming Beginners",
        "votes": 38,
        "suggestedBy": "writer@demo.com",
        "suggestedByName": "Demo Writer"
    },
    {
        "id": 3,
        "title": "Edge Computing and Serverless Architecture",
        "votes": 35,
        "suggestedBy": "reader@demo.com",
        "suggestedByName": "Demo Reader"
    },
    {
        "id": 4,
        "title": "Web3 and Blockchain Development Guide",
        "votes": 29,
        "suggestedBy": "writer@demo.com",
        "suggestedByName": "Demo Writer"
    },
    {
        "id": 5,
        "title": "Mobile App Security Best Practices",
        "votes": 24,
        "suggestedBy": "reader@demo.com",
        "suggestedByName": "Demo Reader"
    }
];

const categories = [
    "All Categories",
    "JavaScript", 
    "Python",
    "AI/ML",
    "Web Development",
    "DevOps", 
    "Cybersecurity",
    "Mobile Development",
    "Data Science",
    "Cloud Computing"
];

// Authentication state
let currentUser = null;

// Application state
let filteredArticles = [...articlesData];
let currentPage = 1;
let articlesPerPage = 4;
let currentCarouselIndex = 0;
let carouselInterval;
let votedTopics = new Set();

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeCategories();
    renderArticles();
    renderCarousel();
    renderTopics();
    setupEventListeners();
    startCarouselAutoplay();
    updateUIForAuthState();
});

// Authentication functions
function login(email, password) {
    const user = demoAccounts.find(account => 
        account.email === email && account.password === password
    );
    
    if (user) {
        currentUser = { ...user };
        updateUIForAuthState();
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
    votedTopics.clear();
    updateUIForAuthState();
    closeModal('authModal');
}

function updateUIForAuthState() {
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');
    
    if (currentUser) {
        // Show authenticated UI
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        
        // Update user info
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userRole').textContent = currentUser.role;
        document.getElementById('userRole').setAttribute('data-role', currentUser.role);
        document.getElementById('userInitials').textContent = getInitials(currentUser.name);
        document.getElementById('userNameDropdown').textContent = currentUser.name;
        document.getElementById('userEmailDropdown').textContent = currentUser.email;
        document.getElementById('userRoleDropdown').textContent = currentUser.role;
        
        // Set role-based attributes
        userMenu.setAttribute('data-role', currentUser.role);
        
        // Show welcome message
        const welcomeMessage = document.getElementById('welcomeMessage');
        const welcomeTitle = document.getElementById('welcomeTitle');
        const welcomeText = document.getElementById('welcomeText');
        
        welcomeMessage.classList.remove('hidden');
        welcomeTitle.textContent = `Welcome back, ${currentUser.name}!`;
        
        if (currentUser.role === 'Writer') {
            welcomeText.textContent = 'Ready to share your knowledge? Write a new article or suggest topics for the community.';
        } else {
            welcomeText.textContent = 'Discover amazing articles and engage with the community by upvoting topics.';
        }
        
        // Hide auth prompt, show appropriate forms
        document.getElementById('authPrompt').classList.add('hidden');
        
    } else {
        // Show non-authenticated UI
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        
        // Hide welcome message
        document.getElementById('welcomeMessage').classList.add('hidden');
        
        // Show auth prompt for topic suggestions
        document.getElementById('authPrompt').classList.remove('hidden');
    }
    
    // Re-render articles to show edit buttons for writers
    renderArticles();
    renderTopics();
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Article creation
function createNewArticle(articleData) {
    const newArticle = {
        id: Date.now(),
        title: articleData.title,
        excerpt: articleData.excerpt,
        author: currentUser.name,
        publishDate: new Date().toISOString().split('T')[0],
        readTime: articleData.readTime,
        category: articleData.category,
        image: articleData.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
        featured: false,
        authorEmail: currentUser.email
    };
    
    articlesData.unshift(newArticle); // Add to beginning
    filterArticles(); // Refresh the display
    closeModal('articleModal');
    
    // Show success message
    alert('Article published successfully!');
}

// Initialize categories dropdown
function initializeCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.innerHTML = '';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
}

// Render articles
function renderArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    articlesGrid.innerHTML = '';
    
    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });

    renderPagination();
}

// Create article card element
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card card';
    
    const canEdit = currentUser && currentUser.email === article.authorEmail && currentUser.role === 'Writer';
    
    card.innerHTML = `
        ${article.featured ? '<div class="featured-badge">Featured</div>' : ''}
        <img src="${article.image}" alt="${article.title}" class="article-card__image">
        <div class="article-card__content">
            <div class="article-card__category">${article.category}</div>
            <h3 class="article-card__title">${article.title}</h3>
            <p class="article-card__excerpt">${article.excerpt}</p>
            <div class="article-card__meta">
                <div>
                    <span class="article-card__author">${article.author}</span>
                    <span> • ${formatDate(article.publishDate)} • ${article.readTime}</span>
                </div>
            </div>
            ${canEdit ? `
                <div class="article-card__actions">
                    <button class="edit-btn" onclick="editArticle(${article.id})">Edit</button>
                </div>
            ` : ''}
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('edit-btn')) {
            console.log(`Navigate to article: ${article.title}`);
        }
    });
    
    return card;
}

// Edit article function (placeholder)
function editArticle(articleId) {
    console.log(`Edit article with ID: ${articleId}`);
    alert('Edit functionality would open the article editor.');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.getElementById('pageNumbers');
    
    if (!pagination || !prevBtn || !nextBtn || !pageNumbers) return;
    
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => goToPage(i));
        pageNumbers.appendChild(pageBtn);
    }
}

// Navigate to page
function goToPage(page) {
    currentPage = page;
    renderArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter articles
function filterArticles() {
    const categoryFilter = document.getElementById('categoryFilter');
    const timeFilter = document.getElementById('timeFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (!categoryFilter || !timeFilter || !searchInput) return;
    
    const categoryValue = categoryFilter.value;
    const timeValue = timeFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    filteredArticles = articlesData.filter(article => {
        const matchesCategory = categoryValue === 'All Categories' || article.category === categoryValue;
        const matchesTime = timeValue === 'all' || isWithinTimeRange(article.publishDate, timeValue);
        const matchesSearch = searchValue === '' || 
            article.title.toLowerCase().includes(searchValue) || 
            article.excerpt.toLowerCase().includes(searchValue) ||
            article.category.toLowerCase().includes(searchValue);
        
        return matchesCategory && matchesTime && matchesSearch;
    });
    
    currentPage = 1;
    renderArticles();
}

// Check if article is within time range
function isWithinTimeRange(publishDate, days) {
    const articleDate = new Date(publishDate);
    const currentDate = new Date('2025-09-14');
    const daysDiff = Math.ceil((currentDate - articleDate) / (1000 * 60 * 60 * 24));
    
    return daysDiff <= parseInt(days);
}

// Render carousel
function renderCarousel() {
    const resourceCarousel = document.getElementById('resourceCarousel');
    if (!resourceCarousel) return;
    
    resourceCarousel.innerHTML = '';
    
    externalResources.forEach(resource => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${resource.image}" alt="${resource.name}" class="carousel-item__logo">
            <h4 class="carousel-item__title">${resource.name}</h4>
            <p class="carousel-item__description">${resource.description}</p>
            <a href="${resource.url}" target="_blank" class="carousel-item__link">Visit ${resource.name}</a>
        `;
        resourceCarousel.appendChild(item);
    });
}

// Move carousel
function moveCarousel(direction) {
    const totalItems = externalResources.length;
    
    if (direction === 'next') {
        currentCarouselIndex = (currentCarouselIndex + 1) % totalItems;
    } else {
        currentCarouselIndex = (currentCarouselIndex - 1 + totalItems) % totalItems;
    }
    
    updateCarouselPosition();
}

// Update carousel position
function updateCarouselPosition() {
    const resourceCarousel = document.getElementById('resourceCarousel');
    if (resourceCarousel) {
        const translateX = -currentCarouselIndex * 100;
        resourceCarousel.style.transform = `translateX(${translateX}%)`;
    }
}

// Start carousel autoplay
function startCarouselAutoplay() {
    carouselInterval = setInterval(() => {
        moveCarousel('next');
    }, 5000);
}

// Stop carousel autoplay
function stopCarouselAutoplay() {
    clearInterval(carouselInterval);
}

// Render topics
function renderTopics() {
    const topicsList = document.getElementById('topicsList');
    if (!topicsList) return;
    
    topicsList.innerHTML = '';
    
    const sortedTopics = [...suggestedTopics].sort((a, b) => b.votes - a.votes);
    
    sortedTopics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        
        const isVoted = votedTopics.has(topic.id);
        const canVote = currentUser !== null;
        
        topicItem.innerHTML = `
            <div class="topic-item__content">
                <div class="topic-item__title">${topic.title}</div>
                <div class="topic-item__meta">Suggested by ${topic.suggestedByName}</div>
            </div>
            <div class="topic-item__vote">
                <button class="vote-btn ${isVoted ? 'voted' : ''}" 
                        data-topic-id="${topic.id}"
                        ${!canVote ? 'disabled' : ''}>
                    ↑
                </button>
                <span class="vote-count">${topic.votes}</span>
            </div>
        `;
        
        const voteBtn = topicItem.querySelector('.vote-btn');
        voteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (canVote) {
                voteTopic(topic.id);
            }
        });
        
        topicsList.appendChild(topicItem);
    });
}

// Vote for topic
function voteTopic(topicId) {
    if (!currentUser) return;
    
    const topic = suggestedTopics.find(t => t.id === topicId);
    if (!topic) return;
    
    if (votedTopics.has(topicId)) {
        votedTopics.delete(topicId);
        topic.votes--;
    } else {
        votedTopics.add(topicId);
        topic.votes++;
    }
    
    renderTopics();
}

// Add new topic
function addTopic(title) {
    if (!title || title.trim() === '' || !currentUser || currentUser.role !== 'Writer') return;
    
    const newTopic = {
        id: Date.now(),
        title: title.trim(),
        votes: 1,
        suggestedBy: currentUser.email,
        suggestedByName: currentUser.name
    };
    
    suggestedTopics.unshift(newTopic);
    votedTopics.add(newTopic.id);
    
    renderTopics();
}

// Auth tab switching
function switchAuthTab(tabType) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabType}"]`).classList.add('active');
    
    const nameField = document.getElementById('nameField');
    const roleField = document.getElementById('roleField');
    const authTitle = document.getElementById('authModalTitle');
    const authSubmit = document.getElementById('authSubmit');
    
    if (tabType === 'signup') {
        nameField.style.display = 'block';
        roleField.style.display = 'block';
        authTitle.textContent = 'Sign Up';
        authSubmit.textContent = 'Sign Up';
        document.getElementById('authName').required = true;
    } else {
        nameField.style.display = 'none';
        roleField.style.display = 'none';
        authTitle.textContent = 'Sign In';
        authSubmit.textContent = 'Sign In';
        document.getElementById('authName').required = false;
    }
}

// Handle auth form submission
function handleAuthSubmit() {
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const isSignup = document.querySelector('.auth-tab.active').dataset.tab === 'signup';
    
    if (isSignup) {
        const name = document.getElementById('authName').value;
        const role = document.getElementById('authRole').value;
        
        // Simple signup - just create user and login
        const newUser = { email, password, name, role };
        demoAccounts.push(newUser);
        currentUser = { ...newUser };
        updateUIForAuthState();
        closeModal('authModal');
        alert('Account created successfully!');
    } else {
        // Login
        if (login(email, password)) {
            closeModal('authModal');
        } else {
            alert('Invalid email or password. Try demo accounts: writer@demo.com/writer123 or reader@demo.com/reader123');
        }
    }
    
    // Reset form
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.reset();
    }
    switchAuthTab('login');
}

// Handle article form submission
function handleArticleSubmit() {
    if (!currentUser || currentUser.role !== 'Writer') {
        alert('Only writers can create articles.');
        return;
    }
    
    const articleData = {
        title: document.getElementById('articleTitle').value,
        excerpt: document.getElementById('articleExcerpt').value,
        category: document.getElementById('articleCategory').value,
        readTime: document.getElementById('articleReadTime').value,
        image: document.getElementById('articleImage').value
    };
    
    if (articleData.title && articleData.excerpt && articleData.category && articleData.readTime) {
        createNewArticle(articleData);
        const articleForm = document.getElementById('articleForm');
        if (articleForm) {
            articleForm.reset();
        }
    } else {
        alert('Please fill in all required fields.');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter event listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const timeFilter = document.getElementById('timeFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) categoryFilter.addEventListener('change', filterArticles);
    if (timeFilter) timeFilter.addEventListener('change', filterArticles);
    if (searchInput) searchInput.addEventListener('input', filterArticles);
    
    // Pagination event listeners
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });
    }
    
    // Carousel event listeners
    const prevCarousel = document.getElementById('prevCarousel');
    const nextCarousel = document.getElementById('nextCarousel');
    
    if (prevCarousel) {
        prevCarousel.addEventListener('click', () => {
            stopCarouselAutoplay();
            moveCarousel('prev');
            startCarouselAutoplay();
        });
    }
    
    if (nextCarousel) {
        nextCarousel.addEventListener('click', () => {
            stopCarouselAutoplay();
            moveCarousel('next');
            startCarouselAutoplay();
        });
    }
    
    // Topic form event listener
    const topicForm = document.getElementById('topicForm');
    if (topicForm) {
        topicForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const topicInput = document.getElementById('topicInput');
            if (topicInput) {
                const title = topicInput.value.trim();
                if (title && currentUser && currentUser.role === 'Writer') {
                    addTopic(title);
                    topicInput.value = '';
                }
            }
        });
    }
    
    // Authentication event listeners
    const openAuthModalBtn = document.getElementById('openAuthModal');
    const closeAuthModalBtn = document.getElementById('closeAuthModal');
    const authPromptBtn = document.getElementById('authPromptBtn');
    
    if (openAuthModalBtn) {
        openAuthModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal('authModal');
        });
    }
    
    if (closeAuthModalBtn) {
        closeAuthModalBtn.addEventListener('click', () => closeModal('authModal'));
    }
    
    if (authPromptBtn) {
        authPromptBtn.addEventListener('click', () => openModal('authModal'));
    }
    
    // Auth form tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            switchAuthTab(tabType);
        });
    });
    
    // Demo account buttons
    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const email = btn.dataset.email;
            const password = btn.dataset.password;
            const emailField = document.getElementById('authEmail');
            const passwordField = document.getElementById('authPassword');
            if (emailField) emailField.value = email;
            if (passwordField) passwordField.value = password;
        });
    });
    
    // Auth form submission
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleAuthSubmit();
        });
    }
    
    // Article modal event listeners
    const writeArticleBtn = document.getElementById('writeArticleBtn');
    const closeArticleModalBtn = document.getElementById('closeArticleModal');
    const cancelArticleBtn = document.getElementById('cancelArticle');
    
    if (writeArticleBtn) {
        writeArticleBtn.addEventListener('click', () => openModal('articleModal'));
    }
    if (closeArticleModalBtn) {
        closeArticleModalBtn.addEventListener('click', () => closeModal('articleModal'));
    }
    if (cancelArticleBtn) {
        cancelArticleBtn.addEventListener('click', () => closeModal('articleModal'));
    }
    
    // Article form submission
    const articleForm = document.getElementById('articleForm');
    if (articleForm) {
        articleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleArticleSubmit();
        });
    }
    
    // User dropdown
    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            const dropdown = document.getElementById('dropdownMenu');
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('dropdownMenu');
        const avatar = document.getElementById('userAvatar');
        
        if (dropdown && avatar && !dropdown.contains(e.target) && !avatar.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    });
    
    // Close modals when clicking backdrop
    const authModal = document.getElementById('authModal');
    const articleModal = document.getElementById('articleModal');
    
    [authModal, articleModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__backdrop') || e.target === modal) {
                    closeModal(modal.id);
                }
            });
        }
    });
    
    // Pause carousel on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarouselAutoplay);
        carouselContainer.addEventListener('mouseleave', startCarouselAutoplay);
    }
}