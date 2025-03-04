/**
 * 个人主页配置文件
 * 修改此文件来自定义您的个人主页
 */

const config = {
    // 基本信息
    basicInfo: {
        name: "W1ndys",
        bio: "网络安全爱好者 / Python爱好者",
        avatar: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/github-api/github-api.png", // 使用GitHub API图标作为头像
        footerText: "© 2025-present W1ndys 我的个人主页 - 由 HTML/CSS/JS 驱动"
    },

    // 关于我
    about: {
        content: `
            <p>你好！我是一名热爱创造的开发者。我专注于网络安全，喜欢设计美观且用户友好的界面。</p>
            <p>我的技能包括：</p>
            <ul>
                <li>Python</li>
                <li>网络安全</li>
                <li>UI/UX 设计</li>
                <li>响应式网页设计</li>
            </ul>
            <p>在业余时间，我喜欢摄影、阅读和探索新技术。</p>
        `
    },

    // 社交链接
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/W1ndys",
            icon: "fab fa-github"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/yourprofile",
            icon: "fab fa-linkedin"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: "fab fa-twitter"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/yourusername",
            icon: "fab fa-instagram"
        },
        {
            name: "Email",
            url: "mailto:your.email@example.com",
            icon: "fas fa-envelope"
        },
        {
            name: "个人博客",
            url: "https://yourblog.com",
            icon: "fas fa-blog"
        }
    ],

    // 项目展示
    projects: [
        {
            title: "个人作品集",
            description: "展示我的设计和开发项目的作品集网站",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
            url: "#"
        },
        {
            title: "旅行博客",
            description: "记录我的旅行经历和摄影作品的博客",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
            url: "#"
        },
        {
            title: "天气应用",
            description: "使用React开发的实时天气查询应用",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
            url: "#"
        }
    ]
}; 