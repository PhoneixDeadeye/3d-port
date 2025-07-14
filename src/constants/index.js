import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    git,
    github,
    html,
    javascript,
    linkedin,
} from "../assets/icons";
import smarteditor from "../assets/images/smarteditor.svg";
import comfyui from "../assets/images/comfyui.png";
import foodclassifier from "../assets/images/foodclassifier.svg";
import training from "../assets/images/training.svg";
import python from "../assets/icons/python.svg";
import c from "../assets/icons/c.svg";
import cpp from "../assets/icons/cpp.svg";
import java from "../assets/icons/java.svg";
import pandas from "../assets/icons/pandas.svg";
import opencv from "../assets/icons/opencv.svg";
// import tkinter from "../assets/icons/tkinter.svg"; // File does not exist
import tensorflow from "../assets/icons/tensorflow.svg";
import vscode from "../assets/icons/visual-studio-code-svgrepo-com.svg";
import canva from "../assets/icons/canva.svg";
import linux from "../assets/icons/linux.svg";
import nptel from "../assets/images/logo.svg"; // Using logo.svg as placeholder

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Framework/Library",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "Framework/Library",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Machine Learning",
    },
    {
        imageUrl: comfyui,
        name: "Comfy UI",
        type: "AI Tool",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Tool/Platform",
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
        imageUrl: canva,
        name: "Canva",
        type: "Tool/Platform",
    },
    {
        imageUrl: linux,
        name: "Linux/Unix",
        type: "Tool/Platform",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
  title: "SmartEditor ",
  company_name: "Personal Project",
  icon: smarteditor, 
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
  title: "NPTEL Cloud Computing Certificate",
  company_name: "NPTEL",
  icon: nptel,
  iconBg: "#b3e5fc",
  date: "November 2024",
  points: [
    "Completed the NPTEL Cloud Computing course and received certification.",
    "Gained hands-on experience with cloud service models, deployment, and management.",
    "Learned about virtualization, distributed storage, and cloud security best practices."
  ],
},
{
  title: "Competitive Programming Trainee",
  company_name: "Summer Training",
  icon: training, 
  iconBg: "#accbe1",
  date: "June 2024 – July 2024",
  points: [
    "Mentored in algorithm design and optimization for coding competitions.",
    "Applied core DSA concepts to competitive problems.",
    "Created a visual web-based N-Queen Solver using backtracking.",
  ],
}
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
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Food Image Classification',
        description: 'Deep learning model for classifying food images using ResNet50V2 and EfficientNetB0.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: car,
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
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'MovieLand',
        description: 'React SPA for browsing movies with search, filter, and infinite scroll features.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-black',
        name: 'Deepfake Detection Suite',
        description: 'AI-powered tool for detecting manipulated videos with Chrome extension and chatbot.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'Comfy UI AI Image Generator',
        description: 'User interface for generating and editing AI images with ComfyUI.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];

export const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur",
    date: "July – October 2024",
    icon: nptel,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud (Coursera)",
    date: "January 2024",
    icon: nptel,
  },
];