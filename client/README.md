# Barber Therapy - Frontend Only

A premium barbershop website built with React, TypeScript, and Tailwind CSS. Optimized for static deployment on Netlify and Vercel.

## Features

- 🎨 Premium dark theme with gold accents
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 📅 Calendly booking integration
- 🎯 SEO optimized
- ♿ Accessible components with Radix UI

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Netlify
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your Git repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

## Technologies

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter
- **Icons**: Lucide React + Font Awesome
- **Forms**: React Hook Form + Zod

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── navigation.tsx  # Site navigation
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── gallery-section.tsx
│   ├── testimonials-section.tsx
│   └── footer.tsx
├── pages/              # Page components
│   ├── home.tsx        # Homepage
│   ├── booking.tsx     # Booking page
│   └── not-found.tsx   # 404 page
├── lib/                # Utilities
│   └── utils.ts        # Tailwind merge utilities
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Brand Colors
Edit `src/index.css` to customize the brand colors:

```css
:root {
  --brand-black: hsl(0, 0%, 0%);
  --brand-gold: hsl(45, 74%, 52%);
  --brand-white: hsl(0, 0%, 100%);
  --brand-dark: hsl(0, 0%, 6.7%);
}
```

### Content
- Update business information in each component
- Replace placeholder images with your own
- Modify the Calendly URL in `src/pages/booking.tsx`

## Performance

- Built with Vite for optimal bundling
- Lazy loaded components
- Optimized images and assets
- Minimal bundle size