# Philippe Cutillas - Professional Portfolio

A stunning, world-class portfolio website showcasing exceptional engineering talent with cutting-edge design.

## ✨ Features

### Design
- **Modern Typography** - Space Grotesk for headings, JetBrains Mono for code
- **Animated Gradients** - Flowing color transitions across UI elements
- **Glassmorphism** - Premium glass-effect cards with backdrop blur
- **Particle Effects** - Floating orbs and animated grid background
- **Noise Texture** - Subtle grain for depth and professionalism
- **Custom Scrollbar** - Gradient-themed scrollbar design

### Interactions
- **Smooth Animations** - Framer Motion powered transitions
- **Expandable Cards** - Click to reveal detailed information
- **Hover Effects** - Shine effects and gradient borders
- **Scroll Indicators** - Progress bar and parallax effects
- **Responsive Design** - Flawless on all screen sizes

### Technical
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom configuration
- **Framer Motion** - Production-ready animation library
- **Optimized Images** - Next/Image with AVIF & WebP support

## 🎨 Design Philosophy

This portfolio embodies modern web design principles:
- **Visual Hierarchy** - Clear content structure with bold typography
- **Color Psychology** - Blue (trust/tech), Purple (creativity), Pink (innovation)
- **Microinteractions** - Delightful hover states and transitions
- **Performance First** - Optimized assets and lazy loading
- **Accessibility** - Semantic HTML and ARIA labels

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
├── app/
│   ├── globals.css      # Custom styles and utilities
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main portfolio page
├── public/
│   ├── philippe.jpg     # Profile photo
│   └── noise.svg        # Texture overlay
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## 🎯 Sections

1. **Hero** - Striking introduction with animated photo and contact info
2. **Quick Stats** - Impressive numbers at a glance
3. **Experience** - Detailed work history with expandable cards
4. **Education** - Academic background and achievements
5. **Skills** - Technical, soft skills, and personal interests
6. **Projects** - Featured personal projects
7. **Publications** - Scientific research contributions

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the accent colors:
```typescript
colors: {
  accent: {
    blue: '#00d4ff',
    purple: '#b57cff',
    pink: '#ff6ec7',
    green: '#00ffa3',
  },
}
```

### Fonts
Modify `app/layout.tsx` to use different Google Fonts:
```typescript
const spaceGrotesk = Space_Grotesk({ ... })
const jetbrainsMono = JetBrains_Mono({ ... })
```

### Content
Update `app/page.tsx` with your information in the component props.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

© 2025 Philippe Cutillas. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion