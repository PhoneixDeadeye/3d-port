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
        link: 'https://github.com/PhoneixDeadeye/TensorFlow/blob/main/Computer%20Vision%20and%20CNN/Introduction_to_computer_vision.ipynb',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Fashion MNIST Classifier',
        description: 'TensorFlow classifier for the Fashion MNIST dataset with accuracy visualization.',
        link: 'https://github.com/PhoneixDeadeye/Fashion-MNIST-Classifier   ',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Document Q and A',
        description: 'A project for question answering from documents using generative AI techniques.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Document_Q_and_A',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Modified Resume',
        description: 'A tool for resume modification and optimization using AI.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Modified_Resume',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Multi Lang Invoice Extractor',
        description: 'Extracts invoice data in multiple languages using AI models.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Multi_Lang_Invoice_Extractor',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'PDF Chat',
        description: 'Chat with PDF documents using generative AI for Q&A.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/PDF_Chat',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Q and A Chatbot',
        description: 'A chatbot for answering questions using generative AI.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Q_and_A_Chatbot',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Q and A from Image',
        description: 'Extracts and answers questions from images using AI.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Q_and_from_Image',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Resume ATS',
        description: 'AI-powered resume screening and ATS optimization.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/Resume_ATS',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'SQL LLM App',
        description: 'An app for interacting with SQL databases using large language models.',
        link: 'https://github.com/PhoneixDeadeye/Gen-AI/tree/main/SQL_LLM_App',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'MovieLand',
        description: 'React SPA for browsing movies with search, filter, and infinite scroll features.',
        link: 'https://github.com/PhoneixDeadeye/MovieLand-Website',
    },
    {
        iconUrl: car,
        theme: 'btn-back-black',
        name: 'AWS Email Lambda',
        description: 'A serverless AWS Lambda function for sending emails using AWS SES, with API Gateway integration and secure environment variables.',
        link: 'https://github.com/PhoneixDeadeye/AWS-Email-lambda',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'Comfy UI AI Image Generator',
        description: 'User interface for generating and editing AI images with ComfyUI.',
        link: 'https://github.com/adrianhajdin/project_ai_sumhttps://github.com/PhoneixDeadeye/ComfUImarizer',
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