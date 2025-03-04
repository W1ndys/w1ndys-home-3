/**
 * 个人主页配置文件
 * 修改此文件来自定义您的个人主页
 */

const config = {
    // 基本信息
    basicInfo: {
        name: "W1ndys",
        bio: "网络安全爱好者 / Python爱好者",
        avatar: "https://github.com/W1ndys.png",
        footerText: "© 2025-present W1ndys 我的个人主页 - 由 HTML/CSS/JS 驱动"
    },

    // 关于我
    about: {
        content: `
            <p>你好！我是W1ndys，一名网络安全爱好者，同时也是一名Python爱好者。</p>
            <p>我的技能包括：</p>
            <ul>
                <li>Python</li>
                <li>网络安全</li>
                <li>网页设计</li>
                <li>Python脚本</li>
            </ul>
            <p>如果需要联系我，可以通过下方邮箱联系我。</p>
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
            name: "Outlook邮箱",
            url: "mailto:w1ndys@outlook.com",
            icon: "fas fa-envelope"
        },
        //QQ邮箱
        {
            name: "QQ邮箱",
            url: "mailto:w1ndys@qq.com",
            icon: "fas fa-envelope"
        },
        {
            name: "个人博客",
            url: "https://blog.w1ndys.top",
            icon: "fas fa-blog"
        },
        {
            name: "W1ndysBot",
            url: "https://github.com/W1ndys/W1ndysBot",
            icon: "fas fa-robot"
        },
        {
            name: "Easy-QFNU",
            url: "https://github.com/W1ndys/Easy-QFNU",
            icon: "fas fa-book"
        }
    ],

    // 项目展示
    projects: [
        {
            title: "QFNUCourseSelector",
            description: "QFNU抢课脚本，支持多种选课模式的高性能选课工具",
            image: "https://socialify.git.ci/W1ndys/QFNUCourseSelector/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto",
            url: "https://github.com/W1ndys/QFNUCourseSelector"
        },
        {
            title: "Easy-QFNU",
            description: "Easy-QFNU官方文档，致力于让你的QFNU生活更加便捷",
            image: "https://socialify.git.ci/W1ndys/Easy-QFNU/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto",
            url: "https://github.com/W1ndys/Easy-QFNU"
        },
        {
            title: "W1ndysBot",
            description: "一个基于Python和NapCatQQ的QQ机器人",
            image: "https://socialify.git.ci/W1ndys/W1ndysBot/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto",
            url: "https://github.com/W1ndys/W1ndysBot"
        },
        {
            title: "QFNULibraryBook",
            description: "曲阜师范大学图书馆预约脚本，提供便捷的图书馆座位预约服务",
            image: "https://socialify.git.ci/W1ndys/QFNULibraryBook/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto",
            url: "https://github.com/W1ndys/QFNULibraryBook"
        },
        {
            title: "QFNULogin",
            description: "曲阜师范大学教务系统模拟登录脚本，便于读取教务系统数据",
            image: "https://socialify.git.ci/W1ndys/QFNULogin/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto",
            url: "https://github.com/W1ndys/QFNULogin"
        }
    ]
}; 