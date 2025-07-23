import readeaseImg from '../assets/images/readease.png';
import partinImg from '../assets/images/partin.jpg';
// import disasterImg from '../assets/images/disaster.jpg';
import codyImg from '../assets/images/cody.png';

const projectData = [
  {
    title: "ReadEase",
    image: readeaseImg,
    link: "",
    description:
      "An assistive learning platform for dyslexic students, using OpenAI for real-time text-to-speech and summarization to enhance reading comprehension.",
    tags: {
      topics: ["Accessibility", "NLP", "Frontend"],
      tech: ["React", "Node.js", "TypeScript", "OpenAI"]
    }
  },
  {
    title: "PartIn (HackNYU Winner - Education track)",
    image: partinImg,
    link: "https://devpost.com/software/partin",
    description:
      "A sound-to-analytics tool that transcribes classroom discussion audio and analyzes student engagement using NLP and visual dashboards.",
    tags: {
      topics: ["Audio Analysis", "NLP", "Data Visualization"],
      tech: ["PyTorch", "AWS Transcribe", "Tableau"]
    }
  },
  {
    title: "Disaster Response Classifier",
    // image: disasterImg,
    link: "",
    description:
      "A PyTorch-based machine learning app that classifies 10,000+ real-world disaster messages with 85% accuracy using a custom Flask ETL pipeline.",
    tags: {
      topics: ["Machine Learning", "NLP"],
      tech: ["PyTorch", "Flask", "SQLite", "Docker"]
    }
  },
  {
    title: "Human Face to Dog Breed Classifier",
    // image: null,
    link: "",
    description:
      "A PyTorch-based machine learning app that shows the closest dog breed given a picture of a human face.",
    tags: {
      topics: ["Machine Learning", "NLP"],
      tech: ["PyTorch", "Flask", "SQLite", "Docker"]
    }
  },
  {
    title: "Project CODY (Android App)",
    image: codyImg,
    link: "https://github.com/SamHungEvelyne/ProjectCODY_android_app",
    description:
      "An Android app developed to help Clark University's CS department manage course scheduling and student info for their Youth program. Built with a custom MySQL backend hosted with Firebase (outdated). CODY Project https://mathcs.clarku.edu/~cody/index.html",
    tags: {
      topics: ["Mobile App", "Education"],
      tech: ["Kotlin", "MySQL", "Firebase", "Github"]
    }
  },
  {
    title: "This Portfolio Website",
    // image: null,
    description:
      "The site you're viewing now. Built from scratch using React, Tailwind CSS, and Vite. It features a clean component architecture and is deployed via GitHub Actions to GitHub Pages.",
    tags: {
      topics: ["Frontend", "DevOps"],
      tech: ["React", "Vite", "Tailwind", "GitHub Actions"]
    }
  }
];

export default projectData;
