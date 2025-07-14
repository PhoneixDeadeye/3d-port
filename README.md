# 🌟 3D Portfolio - Rohan Agarwal

A stunning 3D interactive portfolio website built with React, Three.js, and Vite. This portfolio showcases my skills, projects, and experience through an immersive 3D environment.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual deployed URL -->

## ✨ Features

- **🎮 Interactive 3D Environment**: Immersive 3D island, plane, and bird animations
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🎵 Audio Controls**: Background music with sound toggle
- **📧 Contact Form**: Integrated EmailJS for direct communication
- **🎨 Smooth Animations**: React Spring animations for enhanced UX
- **⚡ Fast Performance**: Built with Vite for lightning-fast loading
- **🎯 Modern UI**: Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18, JSX
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **Animations**: React Spring
- **Routing**: React Router DOM
- **Forms**: EmailJS
- **Timeline**: React Vertical Timeline Component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PhoneixDeadeye/3d-port.git
   cd 3d-port
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 📁 Project Structure

```
3D_portfolio-main/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icons for skills and technologies
│   │   ├── images/         # Project images and logos
│   │   └── models/         # 3D model files (.glb)
│   ├── components/
│   │   ├── Alert.jsx       # Alert component
│   │   ├── CTA.jsx         # Call-to-action component
│   │   ├── Footer.jsx      # Footer component
│   │   ├── HomeInfo.jsx    # Home page information
│   │   ├── Loader.jsx      # Loading component
│   │   └── Navbar.jsx      # Navigation component
│   ├── constants/
│   │   └── index.js        # Constants for skills, projects, etc.
│   ├── hooks/
│   │   └── useAlert.js     # Custom hook for alerts
│   ├── models/
│   │   ├── Bird.jsx        # 3D bird model
│   │   ├── Fox.jsx         # 3D fox model
│   │   ├── Island.jsx      # 3D island model
│   │   ├── Plane.jsx       # 3D plane model
│   │   └── Sky.jsx         # 3D sky model
│   ├── pages/
│   │   ├── About.jsx       # About page
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Home.jsx        # Home page
│   │   └── Projects.jsx    # Projects page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Skills Showcased

- **Programming Languages**: Java, C, C++, Python, JavaScript, HTML
- **Frameworks & Libraries**: React, TensorFlow, OpenCV, Pandas
- **Tools & Platforms**: VS Code, Git, GitHub, Linux/Unix, Canva
- **AI/ML**: ComfyUI, TensorFlow

## 📊 Projects Featured

1. **SmartEditor** - GUI tool for OCR text extraction and correction
2. **AI Image Generation Interface** - ComfyUI-based image generation tool
3. **Food Image Classifier** - Deep learning model with 78% accuracy
4. **Fashion MNIST Classifier** - TensorFlow-based classification system
5. **Stock Trading Bot** - RL-based automated trading system
6. **MovieLand** - React SPA with search and filter features

## 🎨 Customization

### Adding New Skills
1. Add the skill icon to `src/assets/icons/`
2. Import the icon in `src/assets/icons/index.js`
3. Add the skill object to the `skills` array in `src/constants/index.js`

### Adding New Projects
1. Add project images to `src/assets/images/`
2. Add the project object to the `projects` array in `src/constants/index.js`
3. Include iconUrl, theme, name, description, and link

### Updating Experience
Update the `experiences` array in `src/constants/index.js` with your professional experience.

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Get your Service ID, Template ID, and Public Key
4. Add them to your `.env` file

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rohan Agarwal**
- GitHub: [@PhoneixDeadeye](https://github.com/PhoneixDeadeye)
- LinkedIn: [Rohan Agarwal](https://www.linkedin.com/in/rohan-agarwal007/)
- Email: [Your Email Address]

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- React Three Fiber for React integration
- Tailwind CSS for utility-first styling
- EmailJS for contact form functionality
- All the open-source libraries that made this project possible

---

⭐ **Star this repository if you found it helpful!**
