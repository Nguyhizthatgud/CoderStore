# CoderStore - E-commerce Frontend

A modern React-based e-commerce frontend application built for **portfolio demonstration** and **educational purposes only**.

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0+-purple.svg)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.0+-green.svg)
![License](https://img.shields.io/badge/License-Educational%20Use-orange.svg)

## 🎯 Purpose

**This project is created exclusively for:**

- 📚 **Educational purposes** - Learning React, modern frontend development
- 💼 **Portfolio demonstration** - Showcasing development skills
- 🚀 **Personal learning** - Exploring e-commerce UI/UX patterns

**⚠️ NOT FOR COMMERCIAL USE** - This is a learning project and should not be used for actual commercial purposes.

## ✨ Features

### 🛍️ Core E-commerce Features

- **Product Catalog** - Browse and filter products
- **Product Details** - Detailed product information with image gallery
- **Search & Filter** - Advanced product filtering by category, price, gender
- **Responsive Design** - Mobile-first, works on all devices
- **User Authentication** - Login/logout functionality
- **Shopping Cart** - Add products to cart (frontend only)

### 🎨 UI/UX Features

- **Modern Design** - Clean, professional interface using Ant Design
- **Interactive Components** - Hover effects, loading states, animations
- **Breadcrumb Navigation** - Easy navigation between pages
- **Product Image Gallery** - Carousel with thumbnail navigation
- **Rating System** - Product ratings and reviews display
- **Sorting Options** - Sort by price, features, newest arrivals

### 🔧 Technical Features

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing with protected routes
- **React Hook Form** - Efficient form handling and validation
- **Context API** - State management for authentication
- **Lazy Loading** - Code splitting for better performance
- **Error Boundaries** - Graceful error handling

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.2+** - UI library
- **Vite** - Build tool and dev server
- **React Router Dom** - Client-side routing

### UI/Styling

- **Ant Design** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom styling

### Form Handling

- **React Hook Form** - Form validation and handling

### State Management

- **React Context API** - Global state management
- **React Hooks** - Local state management

### Utilities

- **Lodash** - Utility functions
- **Numeral.js** - Number formatting
- **Axios** - HTTP client (for future API integration)

## 📁 Project Structure

```
CoderStore/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Breadcrumb.jsx
│   │   ├── Form4AntDesign/ # Form components
│   │   └── ...
│   ├── context/           # React Context providers
│   │   └── Auth.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.jsx
│   ├── pages/             # Page components
│   │   ├── Homepage.jsx
│   │   ├── Contentpage.jsx
│   │   ├── Detailpage.jsx
│   │   ├── Mainlayout.jsx
│   │   └── Errorpage.jsx
│   ├── routes/            # Route protection
│   │   └── Authrequired.jsx
│   ├── ApiService.js      # API service layer
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── db.json               # Mock database (JSON Server)
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nguyhizthatgud/CoderStore.git
   cd coderstore
   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Start the mock API server** (in a separate terminal)

   ```bash
   npm run server
   # or
   npx json-server --watch db.json --port 8000
   ```

5. **Open your browser**
   ```
   Frontend: http://localhost:5173
   API Server: http://localhost:8000
   ```

## 🎮 Usage

### Navigation

- **Home Page** (`/`) - Landing page with featured products
- **Shop Page** (`/user`) - Main product catalog with filters (requires login)
- **Product Detail** (`/product/:id`) - Individual product information

### Authentication

- Use the login feature to access protected routes
- Authentication is simulated (frontend only)

### Features to Explore

1. **Browse Products** - Navigate to the shop page
2. **Filter Products** - Use sidebar filters (gender, category, price range)
3. **Search Products** - Use the search bar
4. **Sort Products** - Sort by price, features, or newest
5. **View Product Details** - Click on any product card
6. **Responsive Design** - Try different screen sizes

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npx json-server --watch db.json --port 8000  # Start JSON server (mock API)

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🌐 Mock Data

The project uses **JSON Server** to simulate a backend API with mock product data. The `db.json` file contains:

- Products with images, prices, ratings
- Categories and filters
- User authentication data (simulated)

## 📱 Responsive Design

The application is fully responsive and tested on:

- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+) (recommended)
- 🖥️ **Large Desktop** (1440px+) (recommended)

## 🎨 Key Learning Concepts Demonstrated

### React Concepts

- ✅ Functional Components
- ✅ React Hooks (useState, useEffect, useContext, useMemo)
- ✅ Custom Hooks
- ✅ Component Composition
- ✅ Conditional Rendering
- ✅ Event Handling

### Advanced Patterns

- ✅ Context API for state management
- ✅ Protected Routes
- ✅ Code Splitting & Lazy Loading
- ✅ Error Boundaries
- ✅ Form Handling with React Hook Form

### Modern Development

- ✅ ES6+ JavaScript
- ✅ Module imports/exports
- ✅ Async/Await patterns
- ✅ RESTful API integration
- ✅ Component-based architecture

## 🚧 Known Limitations

**This is an educational project with intentional limitations:**

- No real backend integration
- No actual payment processing
- No user registration/database
- No order management
- No inventory tracking
- No email notifications

## 🔄 Future Enhancements (Learning Opportunities)

- [ ] Add Redux/Zustand for complex state management
- [ ] Implement TypeScript for type safety
- [ ] Add unit and integration tests (Jest, React Testing Library)
- [ ] Integrate with a real backend API
- [ ] Add PWA capabilities
- [ ] Implement advanced animations (Framer Motion)
- [ ] Add internationalization (i18n)

## 🤝 Contributing

Since this is an educational project:

- **Feedback welcome** - Suggestions for improvement
- **Learning together** - Feel free to fork and experiment
- **Not accepting PRs** - This is for personal learning

## 📄 License

**Educational Use Only** - This project is created for learning and portfolio purposes. Not licensed for commercial use.

## 👨‍💻 Author

**NguyHizthatgud**

- Portfolio: [your-portfolio.com]
- GitHub: Nguyhizthatgud
- LinkedIn: www.linkedin.com/in/huy-nguy-654b9628b
- Email: nguyh432@gmail.com

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **React Hook Form** - For easy form handling
- **Ant Design** - For the beautiful UI components
- **Vite** - For the fast build tool
- **JSON Server** - For easy API mocking

---

_Built with ❤️ for learning React and became a fullstack developer_
