# Portfolio Website - React

A modern, responsive portfolio website built with React and Vite featuring smooth animations, dark theme, and a beautiful gradient UI.

## Features

✨ **Modern Design** - Contemporary dark theme with gradient accents
⚡ **Fast Performance** - Built with Vite for optimal development and production builds
📱 **Fully Responsive** - Works seamlessly on all devices
🎨 **Beautiful Animations** - Smooth transitions and floating particle effects
📧 **Contact Form** - Functional contact form with file upload support
🎯 **Portfolio Showcase** - Filterable project display with categories

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations and gradients

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    - Navigation bar with scroll detection
│   ├── Hero.jsx         - Hero section with CTA buttons
│   ├── About.jsx        - About me section
│   ├── Portfolio.jsx    - Portfolio showcase with filtering
│   ├── Contact.jsx      - Contact form and information
│   ├── Footer.jsx       - Footer section
│   └── Particles.jsx    - Animated particle background
├── App.jsx              - Main app component
├── main.jsx             - React entry point
└── index.css            - Global styles and animations
```

## Components

### Navigation
- Fixed header with smooth scroll detection
- Active link highlighting based on scroll position
- Responsive design

### Hero
- Eye-catching introduction section
- Call-to-action buttons
- Animated profile circle with rotating border

### Portfolio
- Filterable project cards
- Categories: Projects, Certificates, Skills
- Smooth filtering animation

### Contact
- Contact information display
- Functional contact form
- File upload capability

## Customization

### Update Personal Information
Edit the components to include your own:
- Name and title in `Navigation.jsx`
- Bio and skills in `Hero.jsx` and `About.jsx`
- Project details in `Portfolio.jsx`
- Contact information in `Contact.jsx`

### Modify Colors
The color scheme uses CSS custom properties in `index.css`:
- Primary color: `#ff4757` (Red)
- Accent color: `#8a2be2` (Purple)
- Background: `#0a0118` (Dark purple)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Fazri Lukman Nurrohman

## Contact

- Email: fazri.lukman@example.com
- Location: Bandung, Indonesia
