# 💼 Digital CV Portfolio - Mouhammad Khier ABDOH

> A modern, multilingual digital resume built with cutting-edge web technologies

Welcome to my professional portfolio website! This isn't just another static CV - it's a fully interactive, multilingual showcase of my software engineering journey, designed to demonstrate both my technical skills and attention to detail.

## 🚀 Why I Built This

Traditional PDF resumes felt too limiting for showcasing a developer's capabilities. I wanted to create something that:

- **Demonstrates my coding skills** through the very medium I work in
- **Tells my story interactively** with smooth animations and thoughtful UX
- **Serves multiple audiences** with Arabic, German, and English support
- **Works everywhere** - from mobile phones to printed paper
- **Stays current** with easy updates and modern web standards

## 🌟 Key Features & Highlights

### 🌍 True Multilingual Experience
- **Native Arabic support** with proper RTL (right-to-left) text flow
- **German localization** for the European market
- **English as lingua franca** for international opportunities
- Smart language detection and persistent preferences

### 📱 Device-Agnostic Design
- **Mobile-first responsive design** that scales beautifully
- **Touch-optimized interactions** for smartphone users
- **Desktop enhancements** with hover states and larger layouts
- **Print-perfect formatting** for traditional CV submissions

### ⚡ Performance & Accessibility
- **Lightning-fast loading** with Next.js static generation
- **Zero layout shift** with optimized images and fonts
- **Screen reader compatible** with semantic HTML structure
- **Keyboard navigation** for accessibility compliance

### 🎨 Thoughtful Visual Design
- **Custom color palette** reflecting professionalism and personality
- **Subtle animations** that enhance without distracting
- **Clean typography** optimized for readability
- **Consistent iconography** throughout the experience

## 🛠️ Technical Architecture

This project showcases modern web development practices and technologies:

### Core Framework
- **Next.js 15** - Latest React meta-framework with App Router
- **React 19** - Cutting-edge React features and optimizations
- **TypeScript** - Full type safety and developer experience

### Styling & UI
- **Tailwind CSS** - Utility-first styling for rapid development
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide Icons** - Consistent, beautiful iconography
- **CSS Custom Properties** - Dynamic theming system

### Internationalization
- **next-intl** - Professional i18n solution for Next.js
- **Custom language context** - Seamless language switching
- **RTL support** - Proper Arabic text rendering

### Development Experience
- **ESLint & Prettier** - Code quality and formatting
- **Type-safe configurations** - Runtime error prevention
- **Hot reload** - Instant development feedback

## 🏗️ Project Structure Deep Dive

```
cv/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── layout.tsx          # Root layout with language provider
│   │   └── page.tsx            # Main CV page component
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Base UI primitives (buttons, cards, etc.)
│   │   ├── icons/              # Custom SVG icons
│   │   ├── command-menu.tsx    # Keyboard shortcut interface
│   │   ├── project-card.tsx    # Project showcase component
│   │   └── skill-tag.tsx       # Technology skill badges
│   ├── contexts/               # React Context providers
│   │   └── LanguageContext.tsx # Language switching logic
│   ├── data/                   # Content and configuration
│   │   └── resume-data.tsx     # Centralized CV data
│   ├── lib/                    # Utility functions
│   │   ├── i18n.ts            # Internationalization config
│   │   └── utils.ts           # Helper functions
│   └── messages/               # Translation files
│       ├── en.ts              # English content
│       ├── de.ts              # German content
│       └── ar.ts              # Arabic content
├── public/                     # Static assets
└── package.json               # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm** or **yarn** package manager

### Local Development

```bash
# Clone this repository
git clone https://github.com/mouhammad-abdoh/cv.git
cd cv

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run start
```

## 🎯 Customization Guide

This project is designed to be easily customizable for other developers:

### 1. Personal Data
Edit `src/data/resume-data.tsx` to update:
- Personal information and contact details
- Professional experience and roles
- Education and certifications
- Skills and technology stack
- Project portfolio

### 2. Translations
Modify files in `src/messages/`:
- `en.ts` - English content
- `de.ts` - German content  
- `ar.ts` - Arabic content

### 3. Styling & Branding
Customize in `src/app/globals.css`:
- Color scheme variables
- Typography settings
- Component-specific styles
- Print optimization rules

### 4. Adding New Sections
Extend `src/app/page.tsx` and corresponding translation files to add new CV sections.

## 🎨 Design Philosophy

This CV reflects my approach to software development:

- **User-centered design** - Every interaction is intentional
- **Performance matters** - Fast loading, smooth animations
- **Accessibility first** - Inclusive design for all users
- **Clean code** - Maintainable, well-documented codebase
- **Progressive enhancement** - Works great everywhere, exceptional where supported

## 📊 Performance Metrics

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

## 📝 License & Usage

This project is open source under the **MIT License**. You're welcome to:
- Use it as inspiration for your own CV
- Fork and adapt it for your needs
- Study the code for learning purposes
- Contribute improvements via pull requests

Please don't copy the personal content directly - make it your own!

## 🤝 Connect With Me

If you find this project useful or want to discuss collaboration opportunities:

- **GitHub**: [mouhammad-abdoh](https://github.com/mouhammad-abdoh)
- **LinkedIn**: [mouhammad-khier-abdoh](https://www.linkedin.com/in/mouhammad-khier-abdoh-32939492/)
- **Email**: mouhammad.khier.abdoh@gmail.com

---

*Built with ❤️ and lots of coffee in Ulm, Germany*
