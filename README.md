# Pokédex App

A modern, responsive Pokédex application built with React and powered by the PokéAPI. This application allows users to explore Pokémon, view detailed information, search for specific Pokémon, and manage a personal favorites list.

## 🚀 Features

- **Interactive Carousel**: Featured Pokémon showcase with detailed cards
- **Pokémon Directory**: Browse through all Pokémon with pagination
- **Detailed Views**: Comprehensive Pokémon information pages
- **Search Functionality**: Find Pokémon by name
- **Favorites System**: Save and manage your favorite Pokémon
- **Responsive Design**: Optimized for mobile and desktop devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **UI Components**: Flowbite React
- **Icons**: Lucide React

## 📱 Pages & Components

### Home Page

- Hero carousel featuring 5 popular Pokémon
- Pokémon Essentials section with grid layout
- Quick navigation to full Pokémon list

### Pokémon List Page

- Paginated list of all Pokémon
- Search functionality by name
- Responsive grid layout
- Favorite toggle buttons

### Pokémon Details Page

- High-resolution Pokémon artwork
- Detailed information including type and description
- Favorite toggle functionality
- Navigation back to list

### Favorites Page

- Personal collection of favorite Pokémon
- Empty state when no favorites exist
- Same card layout as main list

## 🎨 Design Features

- **Type-based Color Coding**: Each Pokémon type has its own color scheme
- **Responsive Grid**: Adapts from 1 column on mobile to 4 columns on desktop
- **Loading States**: Smooth loading indicators throughout the app
- **Error Handling**: Graceful error states with user-friendly messages
- **Cross-browser Compatibility**: Works across modern browsers

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pokemon-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📂 Project Structure

```
src/
├── api/                    # API configuration
├── app/                    # Application core
│   ├── home/              # Home page
│   └── main.jsx           # Application entry point
├── components/            # Shared components
├── features/              # Feature-based modules
│   └── pokemon/
│       ├── api/           # Pokémon API calls
│       ├── components/    # Pokémon components
│       ├── constants/     # Type colors and constants
│       ├── details/       # Detail page
│       ├── favorites/     # Favorites functionality
│       ├── hooks/         # Custom hooks
│       ├── services/      # Business logic
│       └── utils/         # Helper functions
├── hooks/                 # Global hooks
├── routes/                # Route definitions
└── utils/                 # Utility functions
```

## 🎯 Key Features Implementation

### State Management

- **React Context**: Used for favorites management
- **TanStack Query**: Handles API state, caching, and synchronization
- **Local State**: Component-level state for UI interactions

### Performance Optimizations

- **Lazy Loading**: Routes are code-split for better performance
- **Caching**: API responses are cached to reduce network requests
- **Pagination**: Large datasets are paginated to improve load times
- **Responsive Images**: Optimized image loading

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Meets WCAG guidelines

## 🔧 Configuration

The application uses several configuration files:

- **Vite Config**: Build tool configuration
- **Tailwind Config**: Styling configuration with custom colors
- **ESLint Config**: Code quality rules
- **Router Config**: Route definitions and lazy loading

## 📊 API Integration

The app integrates with the [PokéAPI](https://pokeapi.co/) to fetch:

- Pokémon basic information
- Detailed Pokémon data
- Species information for descriptions
- High-resolution artwork

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Extended with Pokémon type colors
- **Flowbite Components**: Pre-built UI components
- **Responsive Design**: Mobile-first approach

## 🔍 Search Functionality

- **Real-time Search**: Search Pokémon by name
- **Error Handling**: Graceful handling of not found results
- **Loading States**: Visual feedback during search

## ❤️ Favorites System

- **Persistent State**: Favorites are maintained during the session
- **Toggle Functionality**: Add/remove favorites with visual feedback
- **Dedicated Page**: View all favorite Pokémon in one place

## 📱 Mobile Optimization

- **Responsive Breakpoints**: Optimized for all screen sizes
- **Touch-friendly**: Properly sized touch targets
- **Performance**: Optimized for mobile networks

## 🚀 Deployment

The application is ready for deployment on platforms like:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project with:

```bash
npm run build
```

## 📄 License

This project is created for educational purposes as part of a technical assessment.

## 🤝 Contributing

This project was built as a technical assessment. For any questions or suggestions, please contact the development team.

---

**Built with ❤️ using React and PokéAPI**
