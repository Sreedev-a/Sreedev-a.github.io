export const portfolio = {
  person: { name: "Sree Dev A", role: "AI/ML Engineer", location: "Bengaluru, India", email: "Sreedev514162@gmail.com", summary: "I build intelligent systems that combine machine learning, computer vision, automation and modern software engineering." },
  socials: { github: "https://github.com/Sreedev-a", linkedin: "https://www.linkedin.com/in/sreedev514162/", resume: "/resume/Sreedev_A_Resume.pdf" },
  nav: ["Home", "About", "Experience", "Projects", "Skills", "Contact"],
  experience: [
  {
    role: "AI/ML Engineer Trainee",
    company: "Meetmux",
    period: "June 2026 – Present",
    points: [
      "Developing AI/ML solutions and end-to-end machine-learning workflows.",
      "Integrating models into real-world applications and AI-powered product prototypes.",
      "Building with Python and modern AI technologies.",
    ],
  },
  {
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "March 2026 – May 2026",
    points: [
      "Worked on data analysis tasks and practical data-driven problem solving.",
      "Applied analytical techniques to explore, process and interpret datasets.",
      "Developed practical experience in data analysis workflows and tools.",
    ],
  },
  {
    role: "Cloud Engineering Intern",
    company: "InternAge",
    period: "February 2026 – May 2026",
    points: [
      "Gained practical experience in cloud engineering concepts and workflows.",
      "Worked with cloud technologies and infrastructure-oriented development practices.",
      "Developed hands-on understanding of cloud deployment and engineering workflows.",
    ],
  },
  {
    role: "Superintelligence & AI Intern",
    company: "Chiac ASI",
    period: "February 2026 – May 2026",
    points: [
      "Explored concepts and emerging approaches related to artificial intelligence and superintelligence.",
      "Participated in a self-paced learning internship focused on preparing for the development of superintelligent systems.",
      "Studied modern AI concepts and their potential applications and implications.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Feyn Labs",
    period: "October 2024 – March 2025",
    points: [
      "Built Matchify, an NLP clustering project focused on market segmentation.",
      "Applied K-Means, KNN and PCA to machine-learning experiments.",
      "Developed AI product prototypes and explored time-series and finance use cases.",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "Aerobosoft",
    period: "August 2023 – October 2023",
    points: [
      "Developed a kyphosis detection workflow using SVM, Random Forest and XGBoost.",
      "Prepared data pipelines and contributed to an NLP chatbot.",
      "Explored reinforcement-learning-based improvements.",
    ],
  },
],
  projects: [
  {
    title: "AI-Proctored Assessment Platform",
    category: "AI • Computer Vision • Full Stack",
    description:
      "An intelligent assessment platform with adaptive questions, webcam proctoring, device and multiple-person detection, look-away monitoring, evidence capture, risk scoring, timed tests, and dedicated candidate and admin experiences.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenCV"],
    image: "/ai-proctoring-cover.png",
    github: "https://github.com/Sreedev-a/AI-Proctored-Assessment-Platform",
    demo: "https://frontend-five-blond-42.vercel.app/login",
  },
  {
    title: "Cardiovascular Disease Detection from Retinal Images",
    category: "Deep Learning • Computer Vision",
    description:
      "CNN-based system for classifying cardiovascular disease indicators from retinal fundus images, covering preprocessing, training and performance evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    image: "/retinal-diagnostics-cover.png",
    github: "https://github.com/Sreedev-a",
    demo: "",
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    category: "Computer Vision",
    description:
      "Real-time webcam gesture recognition using hand landmarks and machine-learning and deep-learning techniques.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    image: "/hand-gesture-cover.png",
    github: "https://github.com/Sreedev-a",
    demo: "",
  },
  {
    title: "Attendance Register ERP",
    category: "Android • Firebase",
    description:
      "Android attendance management system with authentication, role-based access and real-time database integration.",
    tech: ["Android Studio", "Java / Kotlin", "XML", "Firebase"],
    image: "/attendance-erp-cover.png",
    github: "https://github.com/Sreedev-a",
    demo: "",
  },
],
  skills: {
  "Programming": [
    "Python",
    "Java",
    "SQL",
    "C",
    "TypeScript"
  ],

  "AI / Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "NLP",
    "Generative AI",
    "LLMs",
    "AI Agents"
  ],

  "Computer Vision": [
    "OpenCV",
    "MediaPipe",
    "CNN",
    "Image Processing",
    "Object Detection",
    "Face Detection"
  ],

  "Data Science": [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "SciPy",
    "PCA",
    "K-Means",
    "KNN",
    "SVM",
    "Random Forest",
    "XGBoost"
  ],

  "Backend / Full Stack": [
    "FastAPI",
    "Flask",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs"
  ],

  "Databases": [
    "PostgreSQL",
    "MySQL",
    "Firebase"
  ],

  "DevOps / Deployment": [
    "Git",
    "GitHub",
    "Docker",
    "GitHub Actions",
    "Vercel",
    "Cloudflare",
    "Render"
  ],

  "Developer Tools": [
    "VS Code",
    "Jupyter",
    "Android Studio",
    "Postman",
    "Linux",
    "npm"
  ],
},
  interests: [
    { title: "Generative AI", text: "Building practical applications using modern language models." },
    { title: "Computer Vision", text: "Creating real-time intelligent visual systems." },
    { title: "AI Agents & Automation", text: "Combining AI models with tools and workflows." },
    { title: "MLOps", text: "Turning machine-learning experiments into reliable products." },
  ],
  education: { degree: "B.Tech — Artificial Intelligence & Machine Learning", year: "2024", institution: "Institution name — Visweswaraya Technological University" },
} as const;
