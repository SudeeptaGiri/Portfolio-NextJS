import { Project } from "@/types/projects";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "https://drive.google.com/file/d/1KniZMJZ0rsB9OuA-zJwDujfK8LHrLeS8/view?pli=1" }
];

export const gridItems = [
  {
    id: 1,
    title: "I work closely with others to turn shared ideas into real, impactful solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  }
];

export const projects:Project[] = [
      {
        "id": 1,
        "name": "rent-car",
        "category": "Full Stack Development",
        "description": "A comprehensive car rental platform built during internship with team of 8 developers. Users can login, book cars, filter options, make payments with automatic calculations, manage bookings, and provide ratings. Includes service agent and admin dashboards with complete booking management system.",
        "techStack": ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript"],
        "codeLink": "https://github.com/SudeeptaGiri/car-rent",
        "liveLink": "#",
        "thumbnail": "https://images.unsplash.com/photo-1664784323987-799bf584ad71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Group",
        "status": "Completed",
        "isLive": false,
        "features": [
          "User authentication and profile management",
          "Automatic payment calculation based on time",
          "Booking management and tracking system",
          "Rating and feedback system",
          "Service agent dashboard for booking management",
          "Admin panel with comprehensive reports",
          "Responsive design for all devices"
        ],
        "challenges": [
          "Implementing complex booking logic with time-based pricing",
          "Managing multiple user roles and permissions",
          "Integrating payment gateway securely",
          "Coordinating with team of 8 using Agile methodologies",
          "Ensuring data consistency across different user actions"
        ]
      },
         {
        "id": 2,
        "name": "CADET.AI - AI-powered Interview Platform",
        "category": "EdTech / AI",
        "description": "CADET.AI is an AI-driven interview preparation and assessment platform built using Angular and Node.js. It generates questions dynamically based on subject and difficulty, allows users to respond via voice, transcribes answers, evaluates them for correctness, and generates performance reports. Admins can schedule interviews and manage question banks.",
        "techStack": ["Angular", "Node.js", "Express.js", "MongoDB", "Speech-to-Text API", "AI Question Generation"],
        "codeLink": "https://github.com/username/cadet-ai-platform",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1661678430218-49f0e380b965?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "AI-generated interview questions based on subject and difficulty",
          "Voice-based answer recording and transcription",
          "Automated answer evaluation and feedback system",
          "Performance report generation with accuracy metrics",
          "Admin panel for scheduling interviews",
          "Subject and difficulty-level management by admin",
          "Secure and scalable backend with Express.js and MongoDB"
        ],
        "challenges": [
          "Integrating real-time speech-to-text transcription with evaluation logic",
          "Building dynamic question generation using AI",
          "Managing user sessions and interview scheduling for admins",
          "Designing clean, role-based interfaces for users and admins",
          "Ensuring accuracy and fairness in automated assessment"
        ]
      },
      {
        "id": 3,
        "name": "boxcar",
        "category": "Frontend Development",
        "description": "A responsive frontend application for a second-hand car marketplace. Built with modern web technologies focusing on user experience, mobile responsiveness, and clean design aesthetics for car browsing and purchasing interface.",
        "techStack": ["HTML5", "Tailwind CSS", "TypeScript", "Responsive Design"],
        "codeLink": "https://github.com/SudeeptaGiri/BoxCar",
        "liveLink": "#",
        "thumbnail": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Fully responsive design for all devices",
          "Modern UI with Tailwind CSS styling",
          "Car listing and detail pages",
          "Advanced filtering and search functionality",
          "Image gallery with zoom functionality",
          "Mobile-first approach",
          "Fast loading and optimized performance"
        ],
        "challenges": [
          "Creating pixel-perfect responsive designs",
          "Optimizing performance for image-heavy content",
          "Implementing complex filtering logic",
          "Ensuring cross-browser compatibility"
        ]
      },
      {
        "id": 4,
        "name": "mindease",
        "category": "Mental Health Platform",
        "description": "A comprehensive mental health screening platform built with team of 3 developers. Features standardized assessments (PHQ-9, GAD-7), AI-powered personalized improvement plans, integrated helpline with Google Maps API for nearby medical facilities, and volunteer connection system.",
        "techStack": ["React", "Spring Boot", "MySQL", "Google Maps API", "AI/ML"],
        "codeLink": "https://github.com/SudeeptaGiri/MindEase",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1683865775849-b958669dca26?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Standardized mental health assessments (PHQ-9, GAD-7)",
          "AI-powered personalized improvement plans",
          "Score tracking and progress monitoring",
          "Integrated helpline with Google Maps API",
          "Nearby medical facilities and doctor information",
          "Volunteer connection and verification system",
          "Admin dashboard for volunteer verification",
          "Secure user data handling and privacy protection"
        ],
        "challenges": [
          "Implementing accurate mental health assessment algorithms",
          "Creating personalized AI recommendations",
          "Integrating Google Maps API for location services",
          "Ensuring user privacy and data security",
          "Building volunteer verification system"
        ]
      },
      {
        "id": 5,
        "name": "nagarik aur samvidhan",
        "category": "Educational Gaming",
        "description": "A gamified learning platform for Indian Constitution education built with team of 6 developers. Features diverse game formats including Spin the Wheel, Card Games, and Board Games to engage users in learning constitutional concepts through interactive gameplay.",
        "techStack": ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
        "codeLink": "https://github.com/SudeeptaGiri/Nagrik-Aur-Samvidhan-Constitutional-Literacy-Platform",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1750360905993-96da7cf34465?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Group",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Multiple game formats (Spin the Wheel, Card Games, Board Games)",
          "Constitutional concept mapping into gamified content",
          "Interactive learning modules",
          "Progress tracking and achievements",
          "Responsive design for educational institutions",
          "Backend database for content management",
          "Landing page with engaging visuals"
        ],
        "challenges": [
          "Converting complex constitutional concepts into engaging games",
          "Creating diverse game mechanics for different learning styles",
          "Implementing backend routing for game data",
          "Ensuring educational accuracy while maintaining engagement"
        ]
      },
      {
        "id": 6,
        "name": "ai career navigator",
        "category": "AI-Powered Career Guidance",
        "description": "An intelligent career guidance platform built with team of 6 developers using AI-driven analysis to provide personalized job recommendations, educational pathways, and salary insights for students and career counselors.",
        "techStack": ["JavaScript", "Python", "Flask", "Machine Learning", "API Integration"],
        "codeLink": "https://github.com/SudeeptaGiri/AI-Career-Navigator",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1666739032009-cfcd5e0ae7db?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Group",
        "status": "Completed",
        "isLive": false,
        "features": [
          "AI-driven job description analysis and recommendations",
          "Educational pathway suggestions based on career goals",
          "Salary insights and market trends",
          "Customized career guidance for students",
          "Counselor dashboard with student insights",
          "API integration for real-time job market data",
          "Interactive career assessment tools"
        ],
        "challenges": [
          "Implementing complex machine learning algorithms",
          "Managing API integration and data synchronization",
          "Creating accurate career prediction models",
          "Optimizing DOM manipulation for smooth user experience"
        ]
      },
      {
        "id": 7,
        "name": "integrated academic calendar",
        "category": "Education Management",
        "description": "A centralized academic calendar system for all Indian Universities built with team of 5 developers. Designed to align academic schedules for fairness and simplicity in admissions with integrated event management system.",
        "techStack": ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        "codeLink": "https://github.com/SudeeptaGiri/Annual-Academic-Calander",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1677572452964-91e968d02d6a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Group",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Centralized calendar for all Indian Universities",
          "Academic schedule alignment system",
          "Event management and scheduling",
          "Admission timeline coordination",
          "Responsive frontend design",
          "University-specific customization options",
          "Real-time updates and notifications"
        ],
        "challenges": [
          "Coordinating schedules across multiple universities",
          "Creating flexible event management system",
          "Ensuring responsive design across devices",
          "Managing complex database relationships"
        ]
      },
      {
        "id": 8,
        "name": "ai coach & sports community",
        "category": "Sports Technology",
        "description": "An AI-powered sports coaching platform built with team of 4 developers. Provides real-time feedback for sports improvement and creates a community platform for sports enthusiasts to connect, share progress, and receive personalized coaching.",
        "techStack": ["React.js", "Node.js", "MongoDB", "Vertex AI", "Real-time APIs"],
        "codeLink": "https://github.com/SudeeptaGiri/Grind_Frontend-ver2",
        "liveLink": "#",
        "thumbnail": "https://images.unsplash.com/photo-1604459972088-b1a714e7065b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Group",
        "status": "Completed",
        "isLive": false,
        "features": [
          "AI-powered real-time feedback system",
          "Sports community platform and networking",
          "Personalized coaching recommendations",
          "Progress tracking and analytics",
          "Video analysis and technique improvement",
          "Responsive design for mobile and desktop",
          "Integration with Vertex AI for advanced analytics"
        ],
        "challenges": [
          "Implementing real-time AI feedback algorithms",
          "Creating responsive UI for sports video analysis",
          "Integrating Vertex AI for complex data processing",
          "Building community features with real-time updates"
        ]
      },
      {
        "id": 9,
        "name": "CookBook - Angular Recipe Manager",
        "category": "Food & Lifestyle",
        "description": "A recipe management web application developed using Angular. It allows users to browse, add, and manage their favorite or self-created recipes. Designed to enhance learning of Angular services, component interaction, and HTTP client.",
        "techStack": ["Angular", "TypeScript", "HTML", "CSS", "Angular Services", "HTTPClient", "json-server (db.json)"],
        "codeLink": "https://github.com/SudeeptaGiri/cook-book",
        "liveLink": "#",
        "thumbnail": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=300&fit=crop",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Browse public recipes with ingredients and steps",
          "Add new recipes with title, ingredients, and instructions",
          "Mark recipes as favorite",
          "View all favorite recipes in a dedicated section",
          "View recipes created by the user separately",
          "Responsive design for mobile and desktop",
          "Uses Angular services and HTTP client for data interaction"
        ],
        "challenges": [
          "Implementing CRUD operations with json-server and Angular HTTP client",
          "Handling state management for favorites and user-created recipes",
          "Structuring modular components and routing effectively",
          "Ensuring responsive layout and smooth UX across devices"
        ]
      },
      {
        "id": 10,
        "name": "kanban board",
        "category": "AI-Powered Productivity",
        "description": "An intelligent task management application that uses AI to automatically break down complex tasks into smaller, manageable subtasks. Features a Jira-like Kanban board interface for tracking task progress from todo to completion with temperature-based AI analysis.",
        "techStack": ["Angular", "TypeScript", "AI/ML Integration", "RxJS"],
        "codeLink": "https://github.com/username/ai-kanban-board",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1682126266861-c25d9bdc9678?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "AI-powered task breakdown using temperature analysis",
          "Jira-inspired Kanban board interface",
          "Drag-and-drop task management",
          "Progress tracking (Todo → In Progress → Completed)",
          "Task complexity analysis and recommendations",
          "Real-time updates and synchronization",
          "Responsive design with modern UI"
        ],
        "challenges": [
          "Integrating AI for meaningful task breakdown",
          "Creating intuitive drag-and-drop functionality",
          "Implementing efficient state management",
          "Balancing AI suggestions with user control"
        ]
      },
      {
        "id": 11,
        "name": "Credit Card Defaulter Analysis",
        "category": "FinTech / Machine Learning",
        "description": "A machine learning-based web application to predict the likelihood of a customer defaulting on credit card payments. Developed as a solo project using Python for ML and Flask for the web interface. It helps financial institutions assess credit risk before issuing cards.",
        "techStack": ["Python", "Flask", "Pandas", "Scikit-learn", "XGBoost", "Gaussian Naive Bayes", "HTML", "CSS"],
        "codeLink": "https://github.com/SudeeptaGiri/CreditCard-Defaulter-Analysis",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1723662157484-54e877486505?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Prediction of credit card defaulters using machine learning",
          "Used XGBoost and Gaussian Naive Bayes algorithms for accuracy",
          "Clean web interface built with Flask",
          "User inputs financial and demographic details for prediction",
          "Displays risk prediction with confidence score",
          "Data preprocessing, feature selection, and model evaluation",
          "Basic dashboard to view past predictions"
        ],
        "challenges": [
          "Training and tuning multiple models for best performance",
          "Handling imbalanced datasets and missing values",
          "Deploying a machine learning model with Flask",
          "Ensuring reliable and fast predictions through the web app",
          "Designing a minimal yet effective frontend for user interaction"
        ]
      },{
        "id": 12,
        "name": "Temperature Prediction using LSTM",
        "category": "Machine Learning / Time Series",
        "description": "A time series forecasting project that predicts future temperature trends using Long Short-Term Memory (LSTM) neural networks. Built using Python and deep learning libraries to explore temporal dependencies in weather data.",
        "techStack": ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
        "codeLink": "https://github.com/SudeeptaGiri/Temperature-Prediction",
        "liveLink": "#",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1731329197935-f8765ac2d1dd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "type": "Solo",
        "status": "Completed",
        "isLive": false,
        "features": [
          "Used LSTM neural networks for temperature time series forecasting",
          "Data cleaning, normalization, and windowing for training",
          "Visualizes past vs predicted temperature trends",
          "Split historical data into training and validation sets",
          "Implemented model evaluation with RMSE and MAE metrics",
          "Experimented with sequence length and model tuning",
          "Interactive Jupyter Notebook with detailed outputs"
        ],
        "challenges": [
          "Preparing time series data for LSTM input format",
          "Avoiding overfitting and ensuring generalization",
          "Optimizing sequence length and model parameters",
          "Handling real-world weather data with missing or noisy entries",
          "Visualizing and interpreting LSTM predictions meaningfully"
        ]
      }      
    ]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/SudeeptaGiri",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/sudeepta_giri",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sudeepta-giri-6a888521b/",
  },
];
