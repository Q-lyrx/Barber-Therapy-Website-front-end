# Barber Therapy - Premium Barbershop Website

## Overview

This is a frontend-only static React application for a premium barbershop called "Barber Therapy". The application serves as a business website with appointment booking functionality via Calendly integration, showcasing services, gallery, testimonials, and company information. The project is optimized for static deployment on platforms like Netlify and Vercel.

## System Architecture

The application is fully configured as a static website with no backend dependencies:

### Frontend Architecture (Static)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized static builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and design system
- **Language**: TypeScript with ES modules
- **Deployment**: Static files only, optimized for Netlify/Vercel
- **Development**: Vite dev server with hot module replacement

### Design System
- **Brand Colors**: Black (#000000), Gold (#D4AF37), White (#FFFFFF)
- **Typography**: Playfair Display for headings, Montserrat for body text
- **Icons**: Font Awesome 6.4.0 for consistent iconography
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Client-Side Components
1. **Navigation**: Sticky header with smooth scrolling navigation
2. **Hero Section**: Full-screen landing with call-to-action buttons
3. **About Section**: Master barber profile and statistics
4. **Services Section**: Grid layout of barbershop services with pricing
5. **Gallery Section**: Image showcase with hover effects
6. **Testimonials**: Customer reviews with star ratings
7. **Footer**: Contact information and social media links
8. **Booking Page**: Dedicated appointment scheduling interface

### Project Structure
1. **Client Directory**: Contains all React frontend code
2. **Static Assets**: Compressed WebP images and optimized assets
3. **Build Output**: Generated static files in client/dist directory
4. **Deployment Configs**: Netlify and Vercel configuration files

## Data Flow

1. **Static Content**: All content is rendered client-side from React components
2. **External Integrations**: Calendly widget for appointment booking
3. **Asset Loading**: Optimized image loading with WebP compression
4. **Client-Side Navigation**: Wouter handles routing without server requests

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, Wouter)
- Vite with React plugin for development and building

### UI Dependencies
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for modern icons
- Font Awesome for additional icons

### Development Dependencies
- TypeScript for type safety
- PostCSS with Autoprefixer
- Tailwind CSS plugins

### External Services
- **Calendly Integration**: Embedded booking widget for appointments
- **Google Fonts**: Playfair Display and Montserrat typography
- **Compressed Images**: WebP optimized barbershop photography

## Deployment Strategy

### Frontend-Only Deployment
This project is now optimized for static hosting platforms:

**Netlify Deployment:**
- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 18
- Auto-deployment from Git repository
- SPA routing with redirects configured

**Vercel Deployment:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Auto-deployment from Git repository
- Optimized caching headers for assets

### Development Environment
- **Local Development**: Vite dev server on port 3000
- **Hot Reload**: Fast refresh with Vite HMR
- **Type Checking**: TypeScript compilation
- **CSS Processing**: Tailwind + PostCSS pipeline

### Build Optimization
- **Bundle Splitting**: Vendor and UI chunks separated
- **Tree Shaking**: Unused code elimination
- **Minification**: ESBuild for fast builds
- **Asset Optimization**: Automatic compression and caching

## Changelog

- September 24, 2025: Removed all backend code and configured for static hosting
- September 24, 2025: Implemented comprehensive gallery with WebP image compression
- September 24, 2025: Added lightbox functionality and carousel navigation
- June 26, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.