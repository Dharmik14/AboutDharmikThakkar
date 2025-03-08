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
  username: "Dharmik Thakkar",
  title: "Hi all, I'm Dharmik",
  subTitle: emoji(
    "A passionate Mobile App Developer 🚀 having handsome experience building robust and beautiful Mobile applications with Android | iOS | Flutter | React Native."
  ),
  resumeLink: "https://drive.google.com/file/d/1spXD98n2WjZNSG3tUF16RpEArQ2KGYnC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dharmik14",
  linkedin: "https://www.linkedin.com/in/dharmik-thakkar-mobile-app-development/",
  gmail: "dharmikthakkar14897@gmail.com",
  // gitlab: "https://gitlab.com/DharmikThakkar",
  // facebook: "https://www.facebook.com/Dharmik.Thakkar7",
  // medium: "https://medium.com/@DharmikThakkar",
  stackoverflow: "https://stackoverflow.com/users/11140751/dharmik-thakkar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Got an idea I can turn into a robust Mobile Application",
  skills: [
    emoji(
      "⚡ Develop beautiful & robust apps for Android & iOS devices from scratch"
    ),
    emoji("⚡ Maintain an ongoing project for you. Fix or Repair that is Damaged"),
    emoji(
      "⚡ Help you with the whole lifecycle that goes for developing "
    ),
    emoji(
      "⚡ Brainstorm with you with your idea with a coffee"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  
  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
     {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-dart-lang"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NSIT University",
      subHeader: "Bachelors of Engineering in Computer",
      duration: "May 2015 - April 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Lead - Mobile App Development",
      company: "FeroAi Freight Technologies LLP",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "Nov 2021 – Present",
      desc: "Spearhead the design, development, testing, and deployment of high-quality Flutter apps, ensuring seamless alignment with client objectives and timely delivery. Lead and inspire a dynamic mobile app team, collaborating with design and backend experts to craft innovative and scalable solutions. Drive technical excellence through strategic decision-making, code reviews, and shaping the team’s growth through hiring initiatives."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Mobile App Developer",
      company: "Mobio Solutions Private Ltd",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "March 2019 – Oct 2021",
      desc: "Create comprehensive project scope and requirement documentation, delivering precise estimations for successful project execution. Expertly translate app designs into high-performance, visually captivating mobile apps using Native Android and Flutter frameworks. Proactively debug and resolve complex issues in existing projects, ensuring seamless integration with the latest OS releases for optimal performance."
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
  title: "Some Cool Stuff that i worked on",
  subtitle: "Dont forget to give a peeeek on this section",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SkinAffairs",
      projectDesc: "E-Commerce app exclusively for Beauty products"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
        //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Oraculus",
      projectDesc: "App that uses ML for Palmistry"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
     {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SmartLot Tracker",
      projectDesc: "App that uses Beacon & BLE for Indoor Navigation in Large spaces"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Skin Plush",
      projectDesc: "App that uses ML to detect moles on skin and compares for similarity for R&D purposes"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Play Store Listing Certification",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Play Store Listing Certification",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.credential.net/87e3ca0e-24d5-45cd-9397-aeffeacbaf87#acc.mjG7tzX2"
        }      ]
    }
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
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
      url: "https://medium.com/@DharmikThakkar/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/DharmikThakkar-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Dharmik-Thakkar-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  email_address: "dharmikthakkar14897@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
