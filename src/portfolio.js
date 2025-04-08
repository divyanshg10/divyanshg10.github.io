/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Divyansh Gupta",
  title: "Hi all, I'm Divyansh",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 with 3 years of experience building scalable, user-focused systems. I thrive in fast-paced teams and love tackling new challenges that drive impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NsToj7ZCdrVId0Bri13JUUddp2pZgy_x/view?usp=drive_link",
  resumeFilename: "Divyansh_Gupta.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  codeforces: "https://codeforces.com/profile/divyanshg10",
  github: "https://github.com/divyanshg10",
  linkedin: "https://www.linkedin.com/in/divyanshg10/",
  gmail: "divyanshg10@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full stack engineer cum competitive programmer who wants to solve real world problems and create impact.",
  skills: [
    emoji(
      "⚡ Communicate regularly with end users to ensure better user experience"
    ),
    emoji(
      "⚡ Use business use case to drive the all the decisions and design of the software"
    ),
    emoji(
      "⚡ Collaborate with team for better shared understanding and high quality softwares"
    ),
    emoji(
      "⚡ Think critically and solve edge cases to ensure better user experience"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology, Patna",
      logo: require("./assets/images/NITP.webp"),
      subHeader: "B.Tech. in Computer Science and Engineering",
      duration: "August 2018 - June 2022",
      desc: "CGPA: 8.89",
      descBullets: [
        "Created android app for students to track updates for annual techno-cultural fest"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Spring Boot",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "50%"
    },
    {
      Stack: "Postgres",
      progressPercentage: "55%"
    },
    {
      Stack: "GIT",
      progressPercentage: "95%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate (SDE 2)",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/Goldman_Sachs.png"),
      date: "March 2024 – Present",
      desc: "Building systems for business to mitigate and manage risks while engaging in new business activities",
      descBullets: [
        "Created Proposal management system incorporating all the relevant policies and regulations",
        "The system is driving efficiency and transparency across different teams firmwide",
        "Designed an extensible framework for generating word documents using factory design pattern",
        "Integrated Prometheus and Grafana for monitoring and alerting",
        "Tech Stack: Springboot, Spring Statemachine, React, MongoDB"
      ]
    },
    {
      role: "Software Engineer",
      company: "Lowe's",
      companylogo: require("./assets/images/LowesLogo.png"),
      date: "August 2022 – March 2024",
      desc: "Designed low code workflow platform for business to automate their processes",
      descBullets: [
        "Revamped the website to improve user experience by over 90%",
        "Engineered a drafts module enabling users to design workflows across multiple sessions and share them with other users",
        "Created a chrome extension during hackathon empowering engineers to easily share articles across organisation improving knowledge sharing",
        "Tech stack : React, Redux, Springboot, Temporal, BPMN, Postgres"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Aakash + Byju's",
      companylogo: require("./assets/images/AESL.png"),
      date: "Jan 2022 – June 2022",
      desc: "Designed content management system providing teachers with centralized platform to manage the questions and test modules",
      descBullets: [
        "Built the reports module using Elastic search and Springboot to generate usage reports for teachers increasing accountability",
        "Optimized the performance of API by 96% redesigning the way data is fetched reducing the database calls from 300 to 11",
        "Tech stack : Springboot, Kafka, Elastic Search, Sql"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Candidate Master @ Codeforces",
      subtitle: "Among top 0.75% programmers on Codeforces",
      image: require("./assets/images/Codeforces.png"),
      imageAlt: "Codeforces Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://codeforces.com/profile/divyanshg10"
        }
      ]
    },
    {
      title: "Individual Excellence Award @ Lowe's",
      subtitle:
        "For bringing Lowe's core values to life and excelling in my actions",
      image: require("./assets/images/LowesLogo.png"),
      imageAlt: "Lowe's Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1VqalSoq3XtqxrWyMH9P5ZtUHfNYxw47y/view?usp=sharing"
        }
      ]
    },
    {
      title: "3rd rank in departmental hackathon @ Lowe's",
      subtitle:
        "Engineered a social media application for sharing knowledge among engineers",
      image: require("./assets/images/LowesLogo.png"),
      imageAlt: "Lowe's Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Yq_7hc4yee9mbr4XhzM7xiOOIG_CYcrT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Spot Award @ Lowe's",
      subtitle:
        "For taking action at the right time and going all out in getting the job done",
      image: require("./assets/images/LowesLogo.png"),
      imageAlt: "Lowe's Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/13vst_OIXNY6CAei8Y9u-ga4kx_8d6G2M/view?usp=sharing"
        }
      ]
    },
    {
      title: "Topper in Social Networks course @ NPTEL",
      subtitle:
        "Completed a course on Social Networks, exploring the power of graph theory and network analysis to uncover hidden patterns and insights",
      image: require("./assets/images/NPTEL.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/13QxiTDfn-uyHIzIbSFhvZmRUWFGL4FIT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Topper in Data Analytics with Python course @ NPTEL",
      subtitle: "Learnt the foundational concepts in data analytics",
      image: require("./assets/images/NPTEL.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1B6QbhOLJG9qst6rCP5rXtH4ToUwb2B3n/view?usp=sharing"
        }
      ]
    },
    {
      title:
        "Topper in An Introduction to Programming through C++ course @ NPTEL",
      subtitle: "Learnt the basics to programming using C++",
      image: require("./assets/images/NPTEL.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1cquGBucX8w6J9WYqUtjX-af4Wo9jslT4/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a job opportunity, project or just want to say hi? My Inbox is open for all.",
  number: "+91-8865042608",
  email_address: "divyanshg10@gmail.com"
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
  achievementSection,
  contactInfo,
  isHireable,
};
