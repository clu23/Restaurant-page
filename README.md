# 🥩 Meat House — Restaurant Page

A single-page restaurant website built entirely with JavaScript. No static HTML in the body — all content is dynamically generated through DOM manipulation and swapped via tab-style navigation.

## Features

- **Full DOM rendering** — the page body starts empty, everything is built in JS
- **Tab navigation** — Home, Menu, About, Contact sections swap dynamically without page reload
- **Modular architecture** — each section (navbar, home, menu, about, contact, footer) is its own ES6 module
- **Reusable factory function** — `createHtmlElement(type, id, classes, content)` used throughout to keep DOM creation clean
- **Webpack bundling** — source modules compiled into a single `dist/main.js`

## Tech Stack

- JavaScript (ES6 modules)
- CSS (Google Fonts, Flexbox)
- Webpack

## Project Structure

```
├── dist/
│   ├── index.html
│   ├── main.js          # Webpack bundle
│   └── style.css
├── src/
│   ├── index.js          # Entry point, routing logic, createHtmlElement helper
│   ├── navbar.js          # Navigation bar
│   ├── main-home.js       # Home / landing section
│   ├── menu.js            # Menu with items data
│   ├── about.js           # About section
│   ├── contact.js         # Contact section
│   └── footer.js          # Footer
├── webpack.config.js
└── package.json
```

## Getting Started

```bash
git clone https://github.com/clu23/Restaurant-page.git
cd Restaurant-page
npm install
npx webpack
```

Then open `dist/index.html` in your browser.

## What I Learned

- Generating an entire page through JS without writing HTML markup
- Splitting code into ES6 modules with `import` / `export`
- Setting up a Webpack build pipeline from scratch
- Event delegation for handling navigation clicks

## Context

Built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

## Author

**Clément Lulurga** — [GitHub](https://github.com/clu23)
