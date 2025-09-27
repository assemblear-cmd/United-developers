# Overview

United Developers is a luxury international architecture studio website that showcases premium architectural projects and services. The application is built as a full-stack web application with a React frontend and Express backend, featuring a modern design system inspired by high-end real estate companies like Sotheby's International Realty. The site emphasizes visual storytelling through portfolio showcases, company statistics, team profiles, and contact forms for potential clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **3D Graphics**: React Three Fiber and Drei for interactive 3D elements (CubeNavigation component)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Session Management**: Built-in session handling with connect-pg-simple for PostgreSQL sessions

## Design System
- **Color Palette**: Dual light/dark theme support with luxury-focused color scheme (deep charcoal, sophisticated navy, warm champagne accents)
- **Typography**: Google Fonts integration (Playfair Display for luxury branding, Inter for body text, Montserrat for UI elements)
- **Component Philosophy**: Consistent spacing framework using Tailwind units, hover/elevation effects, and premium visual hierarchy

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Centralized in shared/schema.ts with Zod validation
- **Current Tables**: Users table with UUID primary keys, username/password fields
- **Migration Strategy**: Drizzle Kit for schema migrations

## Routing Strategy
- **File Structure**: Page-based routing with dedicated components for Home, Team, and 404 handling
- **Navigation**: Fixed header with scroll-based styling transitions and mobile-responsive hamburger menu
- **Component Organization**: Modular component structure with examples directory for development/testing

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connectivity
- **drizzle-orm**: Database ORM with type-safe queries
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

## UI and Design Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber
- **lucide-react**: Icon library for consistent iconography

## Development and Build Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling integration

## Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod

## Additional Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette/search interface