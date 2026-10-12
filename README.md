# ÉLORA Store

## Overview
ÉLORA is a modern luxury perfume e-commerce web application built with React. It provides a clean, responsive interface for browsing fragrances, managing a shopping cart, and contacting the store. The application demonstrates best practices in React development, including component structure, routing, global state management, and responsive design.

## Features
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Catalog**: Browse a collection of fragrances with image previews
- **Search & Filter**: Find products by name and filter by category (Floral, Woody, Oriental, Fresh)
- **Users from API**: Fetches and displays users data from an external API
- **Shopping Cart**: Cart drawer with quantity controls, remove item, and total price
- **Contact Page**: Message form with a clean, elegant layout
- **Form Validation**: Register and contact forms are validated with React Hook Form
- **Notifications**: Toast messages on registration using React Hot Toast
- **Newsletter**: Email subscription form in the footer
- **Custom 404 Page**: Friendly page for unknown routes
- **Fast Loading**: Optimized performance with Vite build tool

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Router DOM**: For handling navigation and routing within the application
- **Context API**: For global state management (cart and products)
- **CSS Modules**: For scoped, component-level styling
- **Bootstrap 5**: For responsive utilities and pre-styled components
- **Bootstrap Icons**: For the icon set used across the interface
- **React Hook Form**: For handling forms and validation
- **React Hot Toast**: For toast notifications
- **Axios**: For making HTTP requests to the API

### API
- **[Fake Store API](https://fakestoreapi.com/)**: RESTful API that provides the users data used in the application

### Development Tools
- **Vite**: Next generation frontend tooling for faster development and optimized builds
- **ESLint**: For code linting and maintaining code quality
- **npm**: Package manager for JavaScript

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/emann-10/Graduation-Project-.git
cd repo-name
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure
```
├── public/                  # Public assets
├── src/                     # Source files
│   ├── assets/              # Images and static assets
│   ├── Components/          # Reusable components
│   │   ├── Hero/            # Hero section
│   │   ├── Layout/          # Layout wrapper
│   │   │   ├── Footer/      # Footer with newsletter
│   │   │   └── Navbar/      # Navbar with cart drawer
│   │   ├── Products/
│   │   │   └── BestSellers/ # Best sellers slider
│   │   └── Register/        # Registration form
│   ├── Context/             # AppContext (cart and global state)
│   ├── Pages/               # Page components
│   │   ├── AllProducts/     # Products page (search and filter)
│   │   ├── Contacts/        # Contact page
│   │   ├── Home/            # Home page
│   │   ├── NotFound/        # 404 page
│   │   ├── ProductDetails/  # Product details page
│   │   └── Users/           # Users list from Fake Store API
│   ├── App.jsx              # Main application component and routes
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .gitignore               # Git ignore file
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── vercel.json              # Vercel routing configuration
└── vite.config.js           # Vite configuration
```

## Live Demo
[View the live site](https://your-project.vercel.app)

## License
MIT

## Acknowledgements
- [React](https://react.dev/) for the amazing library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework