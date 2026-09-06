# Full-Stack Developer Portfolio

![Hero Section Preview](./hero_screenshot.png)

A high-performance, cinematic developer portfolio web application built with **React**, **Vite**, **Tailwind CSS**, **GSAP**, and **Lenis Smooth Scroll**.

The portfolio is designed with a modern dark aesthetic, rich micro-interactions, scroll-driven animations, smooth scrolling, responsive layouts, and optimized mobile experiences.

---

## ✨ Features

- 🎬 **Cinematic Motion & Animations**
  GSAP ScrollTrigger animations, letter-scramble preloader, reveal effects, and smooth image parallax.

- 🌊 **Inertial Smooth Scrolling**
  Powered by Lenis Smooth Scroll with GSAP ticker synchronization for a smooth scrolling experience.

- 📱 **Fully Responsive**
  Optimized for desktop, tablet, and mobile devices, including smaller screens down to 320px.

- 💼 **Featured Project Showcase**
  Displays featured projects with project images, technology information, live demo links, and GitHub repository links.

- 🛠️ **Development Process Section**
  Interactive workflow showing the development process:
  `Define → Design → Build → Launch`

- 📧 **Contact Integration**
  Contact section with EmailJS integration and direct social/contact links.

- 🔍 **SEO Friendly**
  Includes optimized page metadata, semantic HTML structure, favicon support, Open Graph metadata, and search-engine-friendly content.

- ⚡ **Fast Performance**
  Built with Vite for fast development and optimized production builds.

---

## 🛠️ Tech Stack

| Category             | Technologies                               |
| :------------------- | :----------------------------------------- |
| **Core Frontend**    | React 19, JavaScript (ES6+), HTML5         |
| **Styling & Design** | Tailwind CSS v4, Modern CSS, Glassmorphism |
| **Animation**        | GSAP 3, ScrollTrigger                      |
| **Smooth Scrolling** | Lenis Smooth Scroll                        |
| **Forms**            | EmailJS Browser Integration                |
| **Build Tool**       | Vite                                       |
| **Code Quality**     | ESLint                                     |
| **Package Manager**  | npm                                        |
| **Runtime**          | Node.js                                    |

---

## 📁 Project Structure

```text
portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero_assets/
│   │   ├── images/
│   │   │   └── projects/
│   │   │       ├── shopBag.webp
│   │   │       ├── nestivo.webp
│   │   │       ├── iNotebook.webp
│   │   │       ├── weather.webp
│   │   │       └── iTyping.webp
│   │   │
│   │   └── other-assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/
│   │   └── useLenis.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js:** v18 or higher
- **npm:** v9 or higher
- **Git**

You can check your versions using:

```bash
node -v
npm -v
git --version
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

For example:

```text
http://localhost:5173
```

> Note: Vite may use a different port if the default port is already occupied.

---

## 📱 Mobile Testing

To test the portfolio on a mobile device connected to the same Wi-Fi network:

```bash
npm run dev -- --host
```

Then open the network URL shown by Vite on your mobile device.

Example:

```text
http://192.168.x.x:5173
```

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ⚠️ Build Troubleshooting

### `Could not resolve '../assets/images/projects/iNotebook.webp'`

If the production build shows:

```text
[UNRESOLVED_IMPORT]

Could not resolve '../assets/images/projects/iNotebook.webp'
in src/components/Work.jsx
```

it means Vite cannot find the image at the path imported by `Work.jsx`.

The import currently expects:

```jsx
import iNotebook from "../assets/images/projects/iNotebook.webp";
```

Therefore, make sure this file exists exactly here:

```text
src/
└── assets/
    └── images/
        └── projects/
            └── iNotebook.webp
```

### Important: Check the filename

File names are case-sensitive on Linux and many deployment platforms.

For example:

```text
iNotebook.webp
```

is different from:

```text
inotebook.webp
```

and:

```text
INotebook.webp
```

If your actual file has a different name, either rename the file to:

```text
iNotebook.webp
```

or update the import in `Work.jsx` to match the exact filename.

### If the image is missing

Add the project image to:

```text
src/assets/images/projects/
```

Then run:

```bash
npm run build
```

again.

### Check Git

If the file exists locally but the deployment still fails, make sure Git is tracking it:

```bash
git status
```

Then:

```bash
git add src/assets/images/projects/iNotebook.webp
git commit -m "Add iNotebook project image"
git push
```

After pushing, run the deployment again.

---

## 🔐 Environment Variables

If EmailJS or another external service requires environment variables, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do **not** commit private secrets to GitHub.

Make sure `.env` is included in `.gitignore`:

```text
.env
.env.local
.env.*.local
```

---

## 🔍 SEO

The portfolio is structured with SEO in mind, including:

- Semantic HTML
- Descriptive page title
- Meta description
- Open Graph metadata
- Favicon
- Robots configuration
- XML sitemap
- Canonical URL
- Descriptive image `alt` attributes
- Responsive design
- Fast Vite production builds
- Clean and accessible content structure

---

## ⚡ Performance

The project focuses on:

- Vite production optimization
- Lazy loading where appropriate
- Optimized project images
- Smooth animation performance
- Responsive layouts
- Reduced unnecessary rendering
- GSAP animation optimization
- Lenis and GSAP synchronization

---

## 🌐 Deployment

The project can be deployed on platforms such as:

- Vercel
- Netlify
- Render
- GitHub Pages
- Any static hosting platform supporting Vite builds

Before deployment, always test:

```bash
npm run build
```

The deployment should only be started after the production build completes successfully.

---

## 📜 License & Usage Restrictions

**Copyright © 2026 Intiyaj Ansari. All Rights Reserved.**

This project and all associated source code, UI designs, layouts, graphics, branding assets, animations, scripts, and media files are **PROPRIETARY**.

### Terms of Use

- ❌ **No Unauthorized Copying**
  You may not copy, clone, reproduce, or mirror any portion of this repository or its source code.

- ❌ **No Distribution**
  You may not distribute, sell, sublicense, host, publish, or commercially exploit this codebase or design.

- ❌ **No Derivative Works**
  Modification, adaptation, or creation of derivative works based on this project is prohibited.

- ❌ **No Reuse of Assets**
  Portfolio images, graphics, animations, branding, and other visual assets may not be reused without permission.

- 🔒 **Permission Required**
  Any use, modification, reproduction, or deployment of this repository requires explicit written permission from the copyright holder.

---

## 👨‍💻 Author

**Intiyaj Ansari**

Full-Stack Developer

Built with ❤️ using React, Vite, Tailwind CSS, GSAP, and Lenis.

```

**Main fix for your current error:** `Work.jsx` is importing `iNotebook.webp`, but that file is missing or its name/case is different. Put the exact file at `src/assets/images/projects/iNotebook.webp`, then run `npm run build` again.
```
