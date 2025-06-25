import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
  title: "SmartEditor Developer",
  company_name: "Personal Project",
  icon: smarteditor, // Replace with your actual icon import
  iconBg: "#d0f0c0",
  date: "April 2025",
  points: [
    "Developed a GUI tool to extract and correct text from scanned documents using Tesseract OCR.",
    "Enabled real-time user correction with an image-text side-by-side display interface.",
    "Implemented benchmarking to compare OCR output with ground truth for accuracy evaluation.",
    "Utilized Python, OpenCV, Pandas, and Tkinter to build a fully functional desktop application."
  ],
},
{
  title: "AI Image Generation Interfacer",
  company_name: "Comfy UI Project",
  icon: comfyui, 
  iconBg: "#fceabb",
  date: "March 2025",
  points: [
    "Developed an intuitive interface for generating AI images using ComfyUI and various models.",
    "Enabled real-time editing and customization of image outputs.",
    "Integrated features for saving and sharing generated images.",
  ],
},
{
  title: "Food Image Classifier",
  company_name: "Deep Learning Project",
  icon: foodclassifier, 
  iconBg: "#fddde6",
  date: "January 2025",
  points: [
    "Built a deep learning model to classify food images using the Food101 dataset (10 categories).",
    "Applied transfer learning using ResNet50V2 and EfficientNetB0 models.",
    "Achieved 78% accuracy, surpassing baseline results through model tuning and TensorBoard analysis.",
  ],
},
{
  title: "Competitive Programming Trainee",
  company_name: "Summer Training",
  icon: training, // Replace with your actual icon import
  iconBg: "#accbe1",
  date: "June 2024 – July 2024",
  points: [
    "Mentored in algorithm design and optimization for coding competitions.",
    "Applied core DSA concepts to competitive problems.",
    "Created a visual web-based N-Queen Solver using backtracking.",
  ],
}
,
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/PhoneixDeadeye',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rohan-agarwal007/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Food Image Classification',
        description: 'Deep learning model for classifying food images using ResNet50V2 and EfficientNetB0.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Fashion MNIST Classifier',
        description: 'TensorFlow classifier for the Fashion MNIST dataset with accuracy visualization.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Stock Trading Bot',
        description: 'Reinforcement learning-based automated trading system with backtesting capabilities.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MovieLand',
        description: 'React SPA for browsing movies with search, filter, and infinite scroll features.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Deepfake Detection Suite',
        description: 'AI-powered tool for detecting manipulated videos with Chrome extension and chatbot.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Comfy UI AI Image Generator',
        description: 'User interface for generating and editing AI images with ComfyUI.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];