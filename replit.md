# Barber Therapy - Premium Barbershop Application

## Overview

This is a full-stack React application for a premium barbershop called "Barber Therapy". The application serves as a business website with appointment booking functionality, showcasing services, gallery, testimonials, and company information. The project uses a modern tech stack with React frontend, Express backend, and is configured for deployment on Replit.

## System Architecture

The application follows a full-stack monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Prepared for connect-pg-simple sessions
- **Development**: Hot reload with Vite middleware integration

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

### Development Environment
- **Replit Configuration**: Node.js 20, Web, PostgreSQL 16 modules
- **Hot Reload**: Vite dev server with Express middleware
- **Port Configuration**: Local port 5000, external port 80
- **File Watching**: Automatic restart on server file changes

### Production Build
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Production Express serves built client files
- **Environment**: NODE_ENV-based configuration switching

### Database Setup
- **Drizzle Migrations**: Schema changes via `drizzle-kit push`
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Connection Pooling**: Neon serverless driver for efficient connections

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.