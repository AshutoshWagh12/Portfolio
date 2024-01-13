

/*--------------- Home Page ----------------*/

export const DEFAULT_GREETING_ITEMS = {
  title: "Hello 👋.",
  title2: "Ashutosh",
  logo_name: "ashutosh.w()",
  nickname: "Ash",
  full_name: "Ashutosh Wagh",
  subTitle: "A Computer Science Graduate. Always learning 🔥.",
  resumeLink:
  "https://drive.google.com/file/d/16PJETCkehDu4hV-LD3o29U6mJCMoA9rX/view?usp=sharing",
  mail: "mailto:waghashutosh12@gmail.com",
};


/*---------Your Social Media Link ----------*/

export const DEFAULT_SOCIALMEDIA_LINKS = {
  github: "https://github.com/AshutoshWagh12",
  linkedin: "https://www.linkedin.com/in/ashutosh-wagh-a0bab519b",
  gmail: "waghashutosh12@gmail.com",
  instagram: "https://www.instagram.com/wagh.ashutosh12/",
};



/*--------------- Skills ----------------*/

export const DEFAULT_SKILL_ITEMS = [
  [
    {
      title: "I'm Proficient in",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using Html, Css, JavaScript & React.JS",
        
        "⚡ Integration of third party services such as Firebase, Heroku",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          src: "Images/html.png"
        },
        {
          skillName: "CSS3",
          src: "Images/css.png"
        },
        {
          skillName: "JavaScript",
          src: "Images/js.png"
        },
        {
          skillName: "react",
          src: "Images/react.png"
        },
        
      ],
    }
  ],
  [
    {
      title: "My Technical Knowledge",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with databases like MySql",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          src: "Images/java.png"
        },
        {
          skillName: "C++",
          src: "Images/c++.png"
        },
        {
          skillName: "JavaScript",
          src: "Images/js.png"
        },
        
      ],
    }
  ]
]






  // -------- CertificationCard Page ---------


  export const DEFAULT_CERT_CARD_ITEMS = [

      {
        title: "Programming using Java",
        subtitle: "Infosys Springboard",
        src: "Images/java.png",
        certificate_link: "https://drive.google.com/file/d/11FsD6M37wBMrgy1sir4OYo7upPI5Mo9W/view?usp=sharing",
        alt_name: "Java Course",
        color_code: "#1d1d1d",
      },
      {
        title: "Data Structures & Algorithms using Java",
        subtitle: "Infosys Springboard",
        src: "Images/DSA.png",
        certificate_link:
          "https://drive.google.com/file/d/10rXUWde7CoX5mY9V5v5gPHMLBdvqbKV8/view?usp=sharing",
        alt_name: "DSA Course",
        color_code: "#1d1d1d",
      },
      {
        title: "Build a Face Recognition Application using Python",
        subtitle: "GUVI",
        src: "Images/python.png",
        certificate_link:
          "https://www.guvi.in/verify-certificate?id=1wk53Zq56z017922j4&course=aiforindiahindihandson",
        alt_name: "Face Recognition Application",
        color_code: "#1d1d1d",
      },
      
      {
        title: "C++ Course",
        subtitle: "Great Learning",
        src: "Images/c++.png",
        certificate_link:
          "https://drive.google.com/file/d/1d5gFr1KKQ2g0dauXEmy47ydXqNAmdsiJ/view?usp=sharing",
        alt_name: "C++ Course",
        color_code: "#1d1d1d",
      },
      {
        title: "Developer Virtual Experience Program",
        subtitle: "Accenture (Forage)",
        src: "Images/developer.png",
        certificate_link:
          "https://app.luminpdf.com/viewer/64d1e3c4c951e224c43a9143",
        alt_name: "Developer Experience",
        color_code: "#1d1d1d",
      },
      {
        title: "HTML Workshop",
        subtitle: "GeeksforGeeks",
        src: "Images/html.png",
        certificate_link:
          "https://media.geeksforgeeks.org/courses/certificates/6259dd5c3179bf9dc82e5a74b2dd2cc7.pdf",
        alt_name: "HTML Workshop",
        color_code: "#1d1d1d",
      },
  ];


// ------------ ExperienceCard Page -------------


export const DEFAULT_EXPERIENCE_CARD_ITEMS = {
  
    name: "Web Developer Intern",
    subTitle:"Consisty System Pvt.Ltd.",
    src: "https://drive.google.com/file/d/1YxtcOpDjJKlktB0fmKkauCA7QRsj1m8_/view?usp=sharing",
    description:
    [
    "• Gained hands-on experience in Java, HTML, CSS, & JavaScript through developing and maintaining web applications.",
    "• Redesigned and improved existing websites for enhanced user experience.",
    ],
    logos: [
      {
        language:"HTML",
        src: "Images/html.png"
      },
      {
        language:"CSS",
        src: "Images/css.png"
      },
      {
        language:"JavaScript",
        src: "Images/js.png"
      },
      {
        language:"React",
        src: "Images/react.png"
      },
      
    ],
}
  
  
   
  
  
  // ------------ ProjectCard Page -------------

  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of a vast variety of latest technology tools. My best experience is to create JavaScript & React Project. Below are some of my projects.",
    avatar_image_path: "projects_image.svg",
  };
  
  export const DEFAULT_PROJECT_CARD_ITEMS = [
     {
        id: "0",
        name: "My-PortFolio",
        url: "https://github.com/Nikhilhaspe/whatsapp-clone-mern",
        description:
          "My personal portfolio website. Built using React, react-router-dom and other usefull libraries.Adaptive to any screen width i.e Responsive.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          {
            language:"React",
            src: "Images/react.png"
          },
          
        ],
      },
      {
        id: "1",
        name: "Myntra Clone",
        url: "https://github.com/Nikhilhaspe/Realtime-Pizza",
        description:
          "This is Myntra Clone Built using React, react-router-dom, redux and other usefull libraries. Adaptive to any screen width i.e Responsive.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          {
            language:"React",
            src: "Images/react.png"
          },
          
        ],
      },
      {
        id: "2",
        name: "Snake-Game",
        projectView:"https://ashutoshwagh12.github.io/Snake-Game/",
        url: "https://github.com/AshutoshWagh12/Snake-Game",
        description:
          "Simple our childhood loved game Snake built using HTML, Css & Js with audio support.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          
        ],
      },
      {
        id: "3",
        name: "Calculator",
        projectView:"https://ashutoshwagh12.github.io/Calculator/",
        url: "https://github.com/AshutoshWagh12/Calculator",
        description:
          "A Simple Calculator for basic mathematical operations having elegant UI with both light and dark mode.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          
        ],
      },
      {
        id: "4",
        name: "Online-Food-Delivery-Webite",
        projectView:"https://ashutoshwagh12.github.io/Online-Food-Delivery-Website/",
        url: "https://github.com/AshutoshWagh12/Online-Food-Delivery-Website",
        description:
          "A Simple, Reponsive, Elegant UI which can be used for any other food deliver website.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          
        ],
    },
      
]



/* ----------- Contact & Resume ------------ */


export const DEFAULT_CONTACTPAGE_ITEMS = {
  title: "Contact Me",
  profile_image: "Images/My_Pic.jpg",
  description:
    "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",

};
  
  