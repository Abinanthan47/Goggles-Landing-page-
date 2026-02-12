# 🕶️ Goggles - Premium Eyewear Landing Page

A high-performance, visually stunning landing page for a premium eyewear brand. Built with modern web technologies to deliver an immersive shopping experience, featuring smooth scrolling, dynamic animations, and a responsive design.

---

## ✨ Features

- **Immersive Hero Section**: A captivating initial visual with smooth entry animations to grab user attention.
- **Dynamic Product Showcase**: Interactive display of featured eyewear, allowing users to explore details seamlessly.
- **Elemental Series**: A specialized collection section highlighting unique, element-inspired designs.
- **Smooth Scrolling**: Powered by [Lenis](https://lenis.studiofreight.com/) for a fluid, premium scrolling experience.
- **Fully Responsive**: Optimized for all devices, ensuring a seamless experience on mobile, tablet, and desktop.
- **Modern Typography**: Utilizing the **Bebas Neue** font for a bold, impactful aesthetic.
- **Performance Optimized**: Lightning-fast load times and interactions powered by Vite.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Custom CSS Keyframes
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Fonts**: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) via Google Fonts

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) (typically included with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/googles-landing-page.git
   cd googles_landingpage
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
   Navigate to `http://localhost:5173` (or the URL shown in your terminal) to view the project.

---

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable React components
│   ├── Collections.jsx       # New Arrivals / Collections section
│   ├── ElementalSeries.jsx   # Special series section
│   ├── Footer.jsx            # page footer
│   ├── Hero.jsx              # Main hero section
│   ├── NavBar.jsx            # Navigation bar
│   └── ProductShowcase.jsx   # Product highlight section
├── App.jsx          # Main application component
├── main.jsx         # Entry point
├── index.css        # Global styles & Tailwind imports
└── ...
public/              # Public assets (images, video, etc.) served at root
```

---

## 🎨 Customization

### Tailwind Configuration

The project uses Tailwind CSS v4. Styles are defined in `src/index.css`. You can customize the theme or add new utilities directly in the CSS file or modify `tailwind.config.js` if you need complex configuration.

### Fonts

The project uses **Bebas Neue**. To change the font, update the import in `src/index.css` and the `fontFamily` configuration in `tailwind.config.js`.

---
