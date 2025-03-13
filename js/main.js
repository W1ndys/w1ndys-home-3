/**
 * 个人主页主要JavaScript文件
 * 负责加载配置和实现交互功能
 */

document.addEventListener('DOMContentLoaded', function () {
    // 黑客风格欢迎信息
    console.log("%c欢迎来到W1ndys的终端", "color: #00ff00; font-size: 24px; font-weight: bold; text-shadow: 0 0 5px #00ff00;");
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
    lightBtn.addEventListener('click', function () {
        setTheme('light');
        updateActiveButton(lightBtn);
    });

    // 深色主题按钮
    darkBtn.addEventListener('click', function () {
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
        document.title = 'W1ndys | 个人主页';
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
    // 初始化终端
    if (document.getElementById('terminal')) {
        window.terminal = new Terminal();
    }

    // 添加黑客文本扰乱效果
    const h1Element = document.getElementById('name');
    if (h1Element) {
        h1Element.addEventListener('mouseover', function () {
            // 只在Hacker Mode下触发文本扰乱效果
            if (document.body.classList.contains('dark-theme')) {
                scrambleText(h1Element, h1Element.textContent);
            }
        });

        h1Element.addEventListener('mouseout', function () {
            if (document.body.classList.contains('dark-theme')) {
                h1Element.textContent = config.basicInfo.name;
            }
        });
    }

    // 添加点击音效 - 只在Hacker Mode下启用
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function () {
            if (document.body.classList.contains('dark-theme')) {
                playHackerSound();
            }
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

// 终端功能
class Terminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.currentDirectory = '~';
        this.commandHistory = [];
        this.historyIndex = -1;
        this.fileSystem = {
            '~': {
                type: 'directory',
                content: {
                    'projects': {
                        type: 'directory',
                        content: {
                            'hack.sh': { type: 'file', content: '#!/bin/bash\necho "Initializing hack sequence..."\n' },
                            'notes.txt': { type: 'file', content: '网络安全学习笔记\n- XSS攻击防御\n- SQL注入防护\n- 密码学基础' },
                            'script.py': { type: 'file', content: 'print("Hello, Hacker!")' }
                        }
                    },
                    'documents': {
                        type: 'directory',
                        content: {
                            'readme.md': { type: 'file', content: '# 个人文档\n欢迎访问我的终端！' }
                        }
                    }
                }
            }
        };

        this.setupEventListeners();
        this.initialize();
    }

    initialize() {
        this.printWelcome();
        this.input.focus();
    }

    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = this.input.value.trim();
                if (command) {
                    this.executeCommand(command);
                    this.commandHistory.push(command);
                    this.historyIndex = this.commandHistory.length;
                }
                this.input.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.input.value = this.commandHistory[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.input.value = this.commandHistory[this.historyIndex];
                } else {
                    this.historyIndex = this.commandHistory.length;
                    this.input.value = '';
                }
            }
        });

        // 点击终端容器时聚焦输入框
        document.querySelector('.terminal-container').addEventListener('click', () => {
            this.input.focus();
        });
    }

    printWelcome() {
        const welcomeText = `
██╗    ██╗ ██╗███╗   ██╗██████╗ ██╗   ██╗███████╗
██║    ██║███║████╗  ██║██╔══██╗╚██╗ ██╔╝██╔════╝
██║ █╗ ██║╚██║██╔██╗ ██║██║  ██║ ╚████╔╝ ███████╗
██║███╗██║ ██║██║╚██╗██║██║  ██║  ╚██╔╝  ╚════██║
╚███╔███╔╝ ██║██║ ╚████║██████╔╝   ██║   ███████║
 ╚══╝╚══╝  ╚═╝╚═╝  ╚═══╝╚═════╝    ╚═╝   ╚══════╝
                                                  
Welcome to W1ndys's Terminal! Type 'help' for available commands.
`;
        this.printOutput(welcomeText, 'info');
    }

    printOutput(text, type = '') {
        const line = document.createElement('div');
        line.className = type ? `terminal-line ${type}` : 'terminal-line';
        line.textContent = text;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    printCommand(command) {
        const line = document.createElement('div');
        line.className = 'command';
        line.textContent = `root@w1ndys:${this.currentDirectory}$ ${command}`;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    scrollToBottom() {
        const container = document.querySelector('.terminal-container');
        container.scrollTop = container.scrollHeight;
    }

    executeCommand(command) {
        this.printCommand(command);
        const [cmd, ...args] = command.split(' ');

        const commands = {
            help: () => this.help(),
            clear: () => this.clear(),
            ls: () => this.ls(args[0]),
            cd: () => this.cd(args[0]),
            pwd: () => this.pwd(),
            cat: () => this.cat(args[0]),
            whoami: () => this.whoami(),
            date: () => this.date(),
            echo: () => this.echo(args),
            uname: () => this.uname(),
            tree: () => this.tree()
        };

        if (commands[cmd]) {
            commands[cmd]();
        } else {
            this.printOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
        }
    }

    help() {
        const helpText = `
Available commands:
  help    - Show this help message
  clear   - Clear the terminal screen
  ls      - List directory contents
  cd      - Change directory
  pwd     - Print working directory
  cat     - Show file contents
  whoami  - Display current user
  date    - Show current date and time
  echo    - Print text to terminal
  uname   - Print system information
  tree    - Display directory structure
`;
        this.printOutput(helpText, 'info');
    }

    clear() {
        this.output.innerHTML = '';
    }

    ls(path = '.') {
        const targetPath = this.resolvePath(path);
        const dir = this.getDirectory(targetPath);

        if (!dir || dir.type !== 'directory') {
            this.printOutput(`ls: cannot access '${path}': No such directory`, 'error');
            return;
        }

        const contents = Object.entries(dir.content).map(([name, item]) => {
            const color = item.type === 'directory' ? 'directory' : 'file';
            return `<span class="${color}">${name}</span>`;
        });

        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = contents.join('  ');
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    cd(path = '~') {
        if (!path) {
            this.currentDirectory = '~';
            return;
        }

        const targetPath = this.resolvePath(path);
        const dir = this.getDirectory(targetPath);

        if (!dir || dir.type !== 'directory') {
            this.printOutput(`cd: no such directory: ${path}`, 'error');
            return;
        }

        this.currentDirectory = targetPath;
    }

    pwd() {
        this.printOutput(`/home/w1ndys${this.currentDirectory === '~' ? '' : this.currentDirectory.substring(1)}`);
    }

    cat(path) {
        if (!path) {
            this.printOutput('cat: missing file operand', 'error');
            return;
        }

        const targetPath = this.resolvePath(path);
        const file = this.getFile(targetPath);

        if (!file || file.type !== 'file') {
            this.printOutput(`cat: ${path}: No such file`, 'error');
            return;
        }

        this.printOutput(file.content);
    }

    whoami() {
        this.printOutput('root');
    }

    date() {
        this.printOutput(new Date().toString());
    }

    echo(args) {
        this.printOutput(args.join(' '));
    }

    uname() {
        this.printOutput('W1ndys-OS v1.0.0 x86_64');
    }

    tree(path = '.', prefix = '') {
        const targetPath = this.resolvePath(path);
        const dir = this.getDirectory(targetPath);

        if (!dir || dir.type !== 'directory') {
            this.printOutput(`tree: '${path}': No such directory`, 'error');
            return;
        }

        if (prefix === '') {
            this.printOutput('.');
        }

        Object.entries(dir.content).forEach(([name, item], index, array) => {
            const isLast = index === array.length - 1;
            const newPrefix = prefix + (isLast ? '└── ' : '├── ');
            this.printOutput(newPrefix + name);

            if (item.type === 'directory') {
                this.tree(targetPath + '/' + name, prefix + (isLast ? '    ' : '│   '));
            }
        });
    }

    resolvePath(path) {
        if (!path || path === '.' || path === './') return this.currentDirectory;
        if (path === '..') {
            const parts = this.currentDirectory.split('/');
            return parts.length > 1 ? parts.slice(0, -1).join('/') : '~';
        }
        if (path.startsWith('/')) return path;
        if (path.startsWith('~/')) return path;
        return this.currentDirectory === '~' ? '~/' + path : this.currentDirectory + '/' + path;
    }

    getDirectory(path) {
        const parts = path.replace('~', '').split('/').filter(Boolean);
        let current = this.fileSystem['~'];

        for (const part of parts) {
            if (!current.content[part]) return null;
            current = current.content[part];
        }

        return current;
    }

    getFile(path) {
        const parts = path.replace('~', '').split('/').filter(Boolean);
        const fileName = parts.pop();
        const dirPath = parts.length ? '~/' + parts.join('/') : '~';
        const dir = this.getDirectory(dirPath);

        return dir && dir.content[fileName];
    }
} 