/**
 * 个人主页主要JavaScript文件
 * 负责加载配置和实现交互功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 黑客风格欢迎信息
    console.log("%c欢迎来到黑客空间", "color: #00ff00; font-size: 24px; font-weight: bold; text-shadow: 0 0 5px #00ff00;");
    console.log("%c正在加载系统核心文件...", "color: #00ff00; font-size: 14px;");
    
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
    
    // 添加黑客风格效果
    setupHackerEffects();
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
    
    // 设置终端名称
    if (document.getElementById('terminal-name')) {
        document.getElementById('terminal-name').textContent = config.basicInfo.name;
    }
    
    // 设置代码统计
    if (document.getElementById('code-stat')) {
        document.getElementById('code-stat').textContent = config.stats?.codeLines || "10,000+ 行代码";
    }
    
    // 设置咖啡统计
    if (document.getElementById('coffee-stat')) {
        document.getElementById('coffee-stat').textContent = config.stats?.coffeeCount || "999+ 杯咖啡";
    }
    
    // 设置时间统计
    if (document.getElementById('time-stat')) {
        document.getElementById('time-stat').textContent = config.stats?.codingHours || "1337+ 小时编码";
    }
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
        
        // 应用黑客风格
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            <span class="link-text">${link.name}</span>
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
                <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">访问项目</a>
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
        document.title = '黑客空间 | 个人主页';
        document.querySelector('.terminal-header').style.display = 'flex';
        // 修改标题为黑客风格
        document.querySelector('#about h2').textContent = 'cat about.txt';
        document.querySelector('#links h2').textContent = 'ls -la /links';
        document.querySelector('#projects h2').textContent = './show_projects.sh';
        
        // 更新CSS变量
        document.documentElement.style.setProperty('--bg', 'var(--dark-bg)');
        document.documentElement.style.setProperty('--card-bg', 'var(--dark-card-bg)');
        document.documentElement.style.setProperty('--text', 'var(--dark-text)');
        document.documentElement.style.setProperty('--accent', 'var(--dark-accent)');
        document.documentElement.style.setProperty('--secondary', 'var(--dark-secondary)');
        document.documentElement.style.setProperty('--border', 'var(--dark-border)');
        document.documentElement.style.setProperty('--hover', 'var(--dark-hover)');
    } else {
        document.title = '个人主页';
        document.querySelector('.terminal-header').style.display = 'none';
        // 恢复普通标题
        document.querySelector('#about h2').textContent = '关于我';
        document.querySelector('#links h2').textContent = '我的链接';
        document.querySelector('#projects h2').textContent = '我的项目';
        
        // 恢复浅色主题的CSS变量
        document.documentElement.style.setProperty('--bg', 'var(--light-bg)');
        document.documentElement.style.setProperty('--card-bg', 'var(--light-card-bg)');
        document.documentElement.style.setProperty('--text', 'var(--light-text)');
        document.documentElement.style.setProperty('--accent', 'var(--light-accent)');
        document.documentElement.style.setProperty('--secondary', 'var(--light-secondary)');
        document.documentElement.style.setProperty('--border', 'var(--light-border)');
        document.documentElement.style.setProperty('--hover', 'var(--light-hover)');
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
    } else {
        // 默认使用浅色主题
        setTheme('light');
        const lightBtn = document.getElementById('theme-light');
        if (lightBtn) {
            updateActiveButton(lightBtn);
        }
    }
}

// 黑客风格效果
function setupHackerEffects() {
    // 添加黑客文本扰乱效果
    const h1Element = document.getElementById('name');
    if (h1Element) {
        h1Element.addEventListener('mouseover', function() {
            scrambleText(h1Element, h1Element.textContent);
        });
        
        h1Element.addEventListener('mouseout', function() {
            h1Element.textContent = config.basicInfo.name;
        });
    }
    
    // 添加点击音效
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            playHackerSound();
        });
    });
}

// 文本扰乱效果
function scrambleText(element, originalText) {
    const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;
    const maxIterations = 15;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split("")
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        
        if (iterations >= originalText.length) {
            clearInterval(interval);
            element.textContent = originalText;
        }
        
        iterations += 1 / 3;
    }, 30);
}

// 黑客音效
function playHackerSound() {
    const sounds = [
        "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAFAAAGUACFhYWFhYWFhYWFhYWFhYWFhYWFvb29vb29vb29vb29vb29vb29vb3p6enp6enp6enp6enp6enp6enp6f////////////////////////////////8AAAA5TEFNRTMuOTlyAm4AAAAALgkAABSAJAJATQABzAAAAoZtuaRpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",
        "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAFAAAGUACFhYWFhYWFhYWFhYWFhYWFhYWFvb29vb29vb29vb29vb29vb29vb3p6enp6enp6enp6enp6enp6enp6f////////////////////////////////8AAAA5TEFNRTMuOTlyAm4AAAAALgkAABSAJAJATQABzAAAAoZtuaRsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
    ];
    
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = 0.2;
    audio.play();
} 