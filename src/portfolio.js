/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4500 // Terminal typing animation duration
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nirmitdagli",
  title: "Hi all, I'm Nirmit",
  subTitle: emoji(
    "A passionate Computer Science Graduate Student at Quinnipiac University with a strong background in Cloud, Networking, DevOps, Cybersecurity, Infrastructure Automation, AI and Quantum Computing."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-programmer-typing-code-on-his-computer-4622-large.mp4" // Add your video URL here or leave empty for default
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nirmitdagli",
  linkedin: "https://www.linkedin.com/in/nirmitdagli/",
  gmail: "ndagli@quinnipiac.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD, DEVOPS, AI & QUANTUM COMPUTING ENTHUSIAST",
  skills: [
    emoji(
      "⚡ Cloud Infrastructure & DevOps Automation (AWS, Azure, GCP, Kubernetes)"
    ),
    emoji("⚡ Generative AI & Large Language Models (Bedrock, Hugging Face, LangChain)"),
    emoji(
      "⚡ Quantum Computing Research & Algorithms"
    ),
    emoji(
      "⚡ Full Stack Development & System Administration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Quinnipiac University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Computer Science",
      duration: "May 2026",
      desc: "GPA: 3.8/4. Relevant Courses: Computer Networks, GenAI & Quantum Computing.",
      descBullets: []
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "May 2020",
      desc: "GPA: 3.1/4. Relevant Courses: Python, Cloud Computing, Operating Systems, Software Development, IoT.",
      descBullets: []
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "95%"
    },
    {
      Stack: "DevOps and Security",
      progressPercentage: "90%"
    },
    {
      Stack: "System Administrator and Networking",
      progressPercentage: "85%"
    },
    {
      Stack: "SRE, Incident Response and Program Management",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud and AI Engineer Intern",
      company: "State Street",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2025 - August 2025",
      desc: "Managed delivery of an AI chatbot project using Azure AI Foundry. Championed GitHub Copilot adoption. Oversaw rollout of Amazon Q across 44 AWS accounts.",
      descBullets: [
        "Coordinated validation of Terraform modules and OPA policies with security teams, reducing delivery risks."
      ]
    },
    {
      role: "Research Assistant",
      company: "Quinnipiac University",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "August 2025",
      desc: "Led SPARK framework project (Generative AI + RAG). PrivAItect development (privacy threat model platform).",
      descBullets: [
        "Coordinated cross-functional collaboration on Quantum–Classical algorithm benchmarking."
      ]
    },
    {
      role: "Graduate Assistant",
      company: "Quinnipiac University",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "August 2024",
      desc: "Assisted professors and staff with projects, resolved student queries, and automated workflows, reducing manual clerical work by 60%.",
      descBullets: []
    },
    {
      role: "DevOps Engineer",
      company: "Ini8 Labs",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "January 2021 – Jun 2024",
      desc: "Oversaw delivery of Infrastructure-as-Code and DevSecOps implementations. Facilitated Agile sprint planning.",
      descBullets: [
        "Coordinated release schedules and stakeholder expectations during multi-cloud migrations."
      ]
    },
    {
      role: "Senior SaaS Infrastructure Engineer",
      company: "Zycus Pvt. Ltd.",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "January 2021 – Jun 2024",
      desc: "Directed cloud infrastructure programs across AWS, Azure, and VMware. Led automation and AI-driven transformation, delivering 80% IT task reduction.",
      descBullets: [
        "Managed Kubernetes modernization initiative, migrating and optimizing 50+ clusters.",
        "Coordinated enterprise security and disaster recovery efforts.",
        "Delivered multi-cloud architecture & SRE improvements."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "ACADEMIC & PROFESSIONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SPARK Plug and Play Framework",
      projectDesc: "Built an AI Tutor platform providing 24/7 academic support across multiple subjects using generative AI, LLMs, and RAG.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "PrivAItect",
      projectDesc: "AI-powered platform that transforms user system descriptions into threat-aware architectures using LINDDUN and MITRE PANOPTIC.",
      footerLink: []
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Database Convertor",
      projectDesc: "Web app to transform datasets across AWS databases (RDS, DynamoDB, Neptune, Document DB) via a user-friendly UI.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Grover’s Algorithm Research",
      projectDesc: "Implemented and analyzed Grover’s quantum search algorithm for string matching, benchmarking speedups against classical approaches.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "CERTIFICATIONS THAT I HAVE COMPLETED",
  achievementsCards: [
    {
      title: "Certified Kubernetes Application Developer(CKAD)",
      subtitle: "Completed Certification from Linux Foundation",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "CKAD Logo",
      footerLink: [
        {
          name: "Certified Kubernetes Application Developer(CKAD)",
          url: ""
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator(CKA)",
      subtitle: "Completed Certification from Linux Foundation.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "CKA Logo",
      footerLink: [
        {
          name: "Certified Kubernetes Administrator(CKA)",
          url: ""
        }
      ]
    },
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "Completed Certification from Amazon Web Services",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certifications",
          url: ""
        }
      ]
    },
    {
      title: "RedHat Certified System Administrator",
      subtitle: "Completed Certification from A.P. Shah Institute of Technology",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "RedHat Logo",
      footerLink: [
        {
          name: "RHCSA Certification",
          url: ""
        }
      ]
    },
    {
      title: "LangChain for LLM Application Development",
      subtitle: "Completed Certification from DeepLearning.AI",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "LangChain Logo",
      footerLink: [
        {
          name: "LangChain Certification",
          url: ""
        }
      ]
    },
    {
      title: "SPARK Publication (IEEE)",
      subtitle: "Published research paper on AI Tutor Framework at IEEE Conference",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "IEEE Publication",
          url: ""
        }
      ]
    },
    {
      title: "Grover's Algorithm (Springer)",
      subtitle: "Published research on Quantum Computing algorithms with Springer",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Springer Logo",
      footerLink: [
        {
          name: "Springer Publication",
          url: ""
        }
      ]
    },
    {
      title: "Single Sign On (IRJET)",
      subtitle: "Published paper on SSO implementation in IRJET Journal",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "IRJET Logo",
      footerLink: [
        {
          name: "IRJET Publication",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // DISABLED - Blogs section hidden
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // DISABLED - Talks section hidden
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // DISABLED - Podcast section hidden
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "475-317-4538",
  email_address: "ndagli@quinnipiac.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // DISABLED - Twitter section hidden
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
