# Barber Therapy - Premium Barbershop Website

## Overview

This is a frontend-only static React application for a premium barbershop called "Barber Therapy". The application serves as a business website with appointment booking functionality via Calendly integration, showcasing services, gallery, testimonials, and company information. The project is optimized for static deployment on platforms like Netlify and Vercel.

## System Architecture

The application is now configured as a frontend-only static website:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

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

### Server-Side Structure
1. **Routes Handler**: Centralized route registration system
2. **Storage Interface**: Abstracted data layer with in-memory implementation
3. **Vite Integration**: Development server with HMR support
4. **Error Handling**: Centralized error middleware

### Database Schema
- **Users Table**: ID, username, password fields
- **Drizzle ORM**: Type-safe database operations
- **Zod Validation**: Schema validation for user inputs

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests via storage interface
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: TanStack Query manages client-side cache updates

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with middleware support
- Drizzle ORM with PostgreSQL adapter
- Vite with React plugin

### UI Dependencies
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for modern icons
- Font Awesome for additional icons

### Development Dependencies
- TypeScript for type safety
- ESBuild for server bundling
- PostCSS with Autoprefixer
- Replit-specific development tools

### External Services
- **Calendly Integration**: Embedded booking widget for appointments
- **Neon Database**: PostgreSQL hosting (via @neondatabase/serverless)
- **Google Fonts**: Playfair Display and Montserrat typography
- **Unsplash Images**: Professional barbershop photography

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

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.