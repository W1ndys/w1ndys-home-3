# 个人主页模板

一个美观、响应式、可自定义的个人主页模板，适合展示个人信息、项目和社交媒体链接。

## 特点

- 🎨 美观现代的设计
- 📱 完全响应式，适配各种设备
- 🌓 支持浅色/深色主题切换
- 🎭 可自定义主题颜色
- ⚙️ 简单的配置文件，无需编程知识
- 🔗 社交媒体链接展示
- 📂 项目展示区域
- 📝 "关于我"自定义内容

## 如何使用

1. 下载或克隆此仓库到您的计算机
2. 修改 `js/config.js` 文件来自定义您的个人信息
3. 替换 `images/avatar.jpg` 为您自己的头像
4. 添加您的项目图片到 `images` 文件夹
5. 通过网页服务器或直接在浏览器中打开 `index.html` 查看效果

## 自定义内容

### 基本信息

在 `config.js` 文件中修改 `basicInfo` 部分：

```javascript
basicInfo: {
    name: "你的名字",
    bio: "前端开发者 / 设计师 / 摄影爱好者",
    avatar: "images/avatar.jpg",
    footerText: "© 2023 我的个人主页 - 由 HTML/CSS/JS 驱动"
}
```

### 关于我

在 `config.js` 文件中修改 `about` 部分，支持 HTML 格式：

```javascript
about: {
  content: `
        <p>你好！我是一名热爱创造的开发者。</p>
        <p>我的技能包括：</p>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vue.js</li>
            <li>UI/UX 设计</li>
        </ul>
    `;
}
```

### 社交链接

在 `config.js` 文件中修改 `socialLinks` 数组：

```javascript
socialLinks: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "fab fa-github",
  },
  // 添加更多链接...
];
```

图标使用 [Font Awesome](https://fontawesome.com/icons) 图标库，您可以在其网站上查找更多图标。

### 项目展示

在 `config.js` 文件中修改 `projects` 数组：

```javascript
projects: [
  {
    title: "项目名称",
    description: "项目描述",
    image: "images/project1.jpg",
    url: "https://project-url.com",
  },
  // 添加更多项目...
];
```

### 自定义主题

在 `config.js` 文件中修改 `themes.custom` 对象来自定义颜色：

```javascript
themes: {
    custom: {
        bg: "#f0f7ff",
        cardBg: "#ffffff",
        text: "#333333",
        accent: "#ff6b6b",
        secondary: "#6c757d",
        border: "#e9ecef",
        hover: "#f8f9fa"
    }
}
```

## 技术栈

- HTML5
- CSS3 (使用 CSS 变量实现主题切换)
- JavaScript (原生，无框架)
- Font Awesome 图标
- Google Fonts

## 许可

MIT 许可证 - 随意使用和修改！
