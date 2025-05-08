# Exclusive Shop Webapp

## Overview

Exclusive Shop Webapp is a modern e-commerce platform built with cutting-edge technologies to deliver a seamless shopping experience. The application includes features like product browsing, category filtering, admin management, and user authentication.

## Tech Stack

- **Vite**: Fast and modern build tool.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **React**: Component-based UI library.
- **Axios**: HTTP client for API requests.
- **uuid**: Unique ID generation.
- **shadcn**: UI components library.
- **Radix UI**: Accessible UI primitives.
- **TailwindCSS**: Utility-first CSS framework.
- **jwt-decode**: Decode JSON Web Tokens.
- **lucide-react**: Icon library for React.
- **react-hot-toast**: Notifications for React.
- **react-router-dom**: Routing for React applications.
- **ESLint**: Code linting tool.

## Pages

1. **Home**: Landing page showcasing products.
2. **Categories**: Browse products by category.
3. **Admin**: Admin dashboard for managing the platform (requires admin login).
4. **Login**: User login page.
5. **Admin Login**: Separate login page for admin users.
6. **About**: Information about the platform.
7. **Search**: Search functionality for products.
8. **Product Page**: Detailed view of a specific product.

## Features

- **Authentication**: Admin dashboard is protected and requires login. Non-admin users cannot access admin functionalities.
- **API Integration**: Data is fetched from the [dummyjson](https://dummyjson.com/) API.
- **Responsive Design**: Optimized for all devices using TailwindCSS.
- **Notifications**: Real-time feedback using `react-hot-toast`.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/B1lol-dev/Exclusive-shop-webapp.git
cd Exclusive-shop-webapp
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## License

This project is licensed under the [MIT License](LICENSE).
