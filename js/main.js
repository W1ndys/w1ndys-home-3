/**
 * 个人主页主要JavaScript文件
 * 负责加载配置和实现交互功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 加载基本信息
    loadBasicInfo();
    
    // 加载关于我的内容
    loadAboutContent();
    
    // 加载社交链接
    loadSocialLinks();
    
    // 加载项目
    loadProjects();
    
    // 设置主题切换按钮
    setupThemeButtons();
    
    // 检查本地存储中的主题设置
    loadSavedTheme();
});

// 加载基本信息
function loadBasicInfo() {
    // 设置名字
    document.getElementById('name').textContent = config.basicInfo.name;
    
    // 设置简介
    document.getElementById('bio').textContent = config.basicInfo.bio;
    
    // 设置头像
    document.getElementById('avatar').src = config.basicInfo.avatar;
    
    // 设置页脚文本
    document.getElementById('footer-text').textContent = config.basicInfo.footerText;
}

// 加载关于我的内容
function loadAboutContent() {
    document.getElementById('about-content').innerHTML = config.about.content;
}

// 加载社交链接
function loadSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = '';
    
    config.socialLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'social-link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            <span>${link.name}</span>
        `;
        
        socialLinksContainer.appendChild(linkElement);
    });
}

// 加载项目
function loadProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    projectsContainer.innerHTML = '';
    
    config.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">查看项目</a>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}

// 设置主题切换按钮
function setupThemeButtons() {
    const lightBtn = document.getElementById('theme-light');
    const darkBtn = document.getElementById('theme-dark');
    
    // 浅色主题按钮
    lightBtn.addEventListener('click', function() {
        setTheme('light');
        updateActiveButton(lightBtn);
    });
    
    // 深色主题按钮
    darkBtn.addEventListener('click', function() {
        setTheme('dark');
        updateActiveButton(darkBtn);
    });
}

// 设置主题
function setTheme(theme) {
    // 移除所有主题类
    document.body.classList.remove('dark-theme');
    
    // 根据选择的主题添加相应的类
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // 保存主题设置到本地存储
    localStorage.setItem('preferred-theme', theme);
}

// 更新活动按钮状态
function updateActiveButton(activeBtn) {
    // 移除所有按钮的活动状态
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 为当前活动按钮添加活动状态
    activeBtn.classList.add('active');
}

// 加载保存的主题
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('preferred-theme');
    
    if (savedTheme) {
        setTheme(savedTheme);
        
        // 更新活动按钮
        const btnId = `theme-${savedTheme}`;
        const activeBtn = document.getElementById(btnId);
        if (activeBtn) {
            updateActiveButton(activeBtn);
        }
    }
} 