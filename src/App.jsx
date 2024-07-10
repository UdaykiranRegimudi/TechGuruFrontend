import {UserButton} from '@clerk/clerk-react'
import Dashboard from './components/Dashboard'
import Sidenavbar from './assets/SideNav'
import Navbar from './assets/Navbar'
import Courses from './components/Courses'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Events from './components/Events'
import Chatbot from './components/Chatbot'
import CourseDetails from './components/CoursesDetails'
import EventDetails from './components/EventDetails'
import UpcomingEvents from './components/UpcomingEvents'




const courses = [
  {
      "id":1,
      "courseName": "Full-Stack Web Development",
      "description": "Master front-end and back-end technologies including React, Node.js, and Express. Build robust, scalable web applications and become a full-stack developer.",
      "about": "The Full-Stack Web Development course is designed to take you from beginner to advanced. Over the duration of this course, you'll learn to build dynamic and responsive web applications. You'll gain hands-on experience with both client-side and server-side development, work with databases, and understand deployment processes. By the end of the course, you'll have a comprehensive portfolio showcasing your skills.",
      "imageUrl": "/p10.jpg",
      "datesAndTimings": {
          "startDate": "2024-08-01",
          "endDate": "2024-12-01",
          "timings": "Monday, Wednesday, Friday - 6:00 PM to 8:00 PM (GMT)"
      },
      "topics": [
          "HTML, CSS, and JavaScript fundamentals",
          "React.js for building interactive UIs",
          "Node.js for server-side programming",
          "Express.js for building RESTful APIs",
          "Database management with MongoDB",
          "Authentication and Authorization",
          "Deployment and DevOps basics"
      ],
      "projects": [
          {
              "title": "Personal Portfolio Website",
              "description": "Create a responsive portfolio website to showcase your projects and skills."
          },
          {
              "title": "Task Manager App",
              "description": "Build a full-stack task manager application with user authentication."
          },
          {
              "title": "E-commerce Platform",
              "description": "Develop a complete e-commerce platform with product listings, shopping cart, and payment gateway integration."
          },
          {
              "title": "Social Media App",
              "description": "Create a social media application with features like user profiles, posts, and real-time chat."
          }
      ]
  },
  {
      "id":2,
      "courseName": "Introduction to Cybersecurity",
      "description": "Dive into the essentials of cybersecurity and learn how to protect systems from digital threats. Covering cryptography, this course equips you with fundamental skills.",
      "about": "The Introduction to Cybersecurity course provides a comprehensive overview of the critical concepts and practices in cybersecurity. You'll learn about the types of cyber threats, methods of defense, and the principles of cryptography. By understanding the landscape of digital security, you'll be equipped to protect systems and data from malicious attacks. The course also covers practical skills for detecting and responding to incidents.",
      "imageUrl": "/p11.jpg",
      "datesAndTimings": {
          "startDate": "2024-09-01",
          "endDate": "2024-11-30",
          "timings": "Tuesday, Thursday - 5:00 PM to 7:00 PM (GMT)"
      },
      "topics": [
          "Introduction to Cybersecurity",
          "Understanding Cyber Threats",
          "Network Security Fundamentals",
          "Cryptography Basics",
          "Securing Operating Systems",
          "Incident Response",
          "Ethical Hacking Principles"
      ],
      "projects": [
          {
              "title": "Vulnerability Assessment",
              "description": "Conduct a vulnerability assessment of a sample network and propose mitigation strategies."
          },
          {
              "title": "Encryption Tool",
              "description": "Develop a simple encryption tool to secure data transmissions."
          },
          {
              "title": "Incident Response Plan",
              "description": "Create an incident response plan for a hypothetical organization."
          }
      ]
  },
  {
      "id":3,
      "courseName": "Introduction to Generative AI",
      "description": "Discover the world of generative AI and learn to create models that generate new content. Covers neural networks, GANs, and creative applications in art, music, and text.",
      "about": "The Introduction to Generative AI course explores the fascinating field of AI that can create new content. You'll learn about neural networks, Generative Adversarial Networks (GANs), and their applications in various creative domains. This course will provide you with the knowledge to understand and build models that generate images, music, and text. By the end of the course, you'll have hands-on experience with implementing generative AI models and a portfolio of creative projects.",
      "imageUrl": "/p12.jpg",
      "datesAndTimings": {
          "startDate": "2024-10-01",
          "endDate": "2025-01-31",
          "timings": "Wednesday, Friday - 7:00 PM to 9:00 PM (GMT)"
      },
      "topics": [
          "Introduction to Generative AI",
          "Neural Networks Fundamentals",
          "Generative Adversarial Networks (GANs)",
          "Creating AI-generated Art",
          "Music Generation with AI",
          "Text Generation and Natural Language Processing",
          "Ethics and Future of Generative AI"
      ],
      "projects": [
          {
              "title": "AI Art Generator",
              "description": "Develop a model that generates unique pieces of art."
          },
          {
              "title": "Music Composition AI",
              "description": "Create an AI model that composes music based on input parameters."
          },
          {
              "title": "Text Generator",
              "description": "Build a text generation model for creative writing applications."
          }
      ]
  },
  {
      "id":4,
      "courseName": "Upcoming Events",
      "description": "Stay tuned for our upcoming events! Keep an eye on this space for more details and get ready to engage with the tech community like never before.",
      "about": "Our upcoming events are designed to bring together the tech community for learning, networking, and collaboration. From hackathons and workshops to guest lectures and networking sessions, there's something for everyone. These events provide a platform to engage with experts, work on exciting projects, and connect with peers who share your passion for technology.",
      "imageUrl": "/p13.jpg",
      "datesAndTimings": {
          "startDate": "2024-08-15",
          "endDate": "2024-12-31",
          "timings": "Various timings - stay tuned for specific event schedules"
      },
      "topics": [
          "Hackathons and Coding Competitions",
          "Technology Workshops",
          "Guest Lectures by Industry Experts",
          "Networking Sessions",
          "Collaborative Projects",
          "Career Development Panels",
          "Innovation Showcases"
      ],
      "projects": [
          {
              "title": "Hackathon Project",
              "description": "Participate in a 24-hour hackathon to develop innovative tech solutions."
          },
          {
              "title": "Workshop Hands-on Project",
              "description": "Engage in hands-on projects during workshops to apply new skills."
          },
          {
              "title": "Collaborative Project",
              "description": "Work with a team on a collaborative project to solve real-world problems."
          }
      ]
  }         
]

const events = [
    {
      id: 1,
      title: "Summer Hackathon 2024",
      date: "July 15-17, 2024",
      time: "10:00 AM - 6:00 PM",
      description: "Join our Summer Hackathon 2024 to tackle real-world challenges and compete for exciting prizes. Collaborate with fellow tech enthusiasts, network with industry professionals, and showcase your innovative solutions. Whether you're a seasoned developer or a newcomer, this event offers a dynamic environment to test your skills, gain hands-on experience, and learn from experts. Participate in workshops, get mentorship, and enjoy a creative atmosphere filled with like-minded individuals. Don't miss this opportunity to make an impact and advance your career in tech.",
      cta: "Register Now",
      imageUrl: "/pic6.png",
      rules: [
        "Teams of up to 4 members are allowed.",
        "Projects must be completed within the hackathon timeframe.",
        "All code must be original and created during the hackathon.",
        "Judging criteria include innovation, technical difficulty, and presentation."
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      registrationGuidelines: [
        "Register online before July 10, 2024.",
        "Provide details of team members during registration.",
        "Ensure all team members have valid IDs for verification."
      ],
      prizes: [
        "1st Place: $5000 and a trophy",
        "2nd Place: $3000 and medals",
        "3rd Place: $1000 and certificates"
      ],
      extraInfo: {
        location: "Virtual Event",
        sponsors: ["TechCorp", "CodeX", "Innovate Inc."],
        contactEmail: "info@summerhackathon2024.com",
        organizer: "Tech Events LLC"
      }
    },
    {
      id: 2,
      title: "AI Innovation Hackathon",
      date: "August 20-22, 2024",
      time: "9:00 AM - 5:00 PM",
      description: "The AI Innovation Hackathon invites you to delve into the realm of artificial intelligence and craft cutting-edge AI solutions. Collaborate with industry experts, exchange ideas with peers, and push the boundaries of AI technology. This event is perfect for those passionate about AI, offering hands-on experience with the latest tools and frameworks. Engage in intense coding sessions, attend insightful talks, and compete to create impactful AI applications. Whether you're interested in machine learning, deep learning, or AI ethics, this hackathon provides a comprehensive platform to innovate and excel.",
      cta: "Join the Challenge",
      imageUrl: "/pic7.png",
      rules: [
        "Teams of up to 3 members are allowed.",
        "Use of pre-trained models is permitted, but the solution must be original.",
        "All work must be documented and submitted by the deadline.",
        "Projects will be judged on creativity, impact, and technical execution."
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Keras"],
      registrationGuidelines: [
        "Register online before August 15, 2024.",
        "Submit a brief description of the AI project during registration.",
        "Ensure all team members have valid IDs for verification."
      ],
      prizes: [
        "1st Place: $7000 and a trophy",
        "2nd Place: $4000 and medals",
        "3rd Place: $2000 and certificates"
      ],
      extraInfo: {
        location: "Virtual Event",
        sponsors: ["AI Tech Solutions", "Data Innovators", "TechX Labs"],
        contactEmail: "info@aihackathon2024.com",
        organizer: "AI Events Co."
      }
    },
    {
      id: 3,
      title: "Cybersecurity Defense Hackathon",
      date: "September 10-12, 2024",
      time: "11:00 AM - 7:00 PM",
      description: "Test your cybersecurity acumen in our Cybersecurity Defense Hackathon, where you'll defend against simulated cyber-attacks and develop robust security solutions. This event offers a unique opportunity to apply your knowledge in real-world scenarios, collaborate with peers, and receive guidance from cybersecurity experts. Participants will face various challenges designed to test their skills in threat detection, incident response, and vulnerability assessment. It's an intense, educational experience aimed at enhancing your understanding of modern cybersecurity practices and improving your defensive capabilities.",
      cta: "Defend Now",
      imageUrl: "/pic8.png",
      rules: [
        "Teams of up to 4 members are allowed.",
        "All defense mechanisms must be original and created during the hackathon.",
        "Participants must adhere to ethical hacking guidelines.",
        "Judging criteria include effectiveness, innovation, and teamwork."
      ],
      technologies: ["Wireshark", "Metasploit", "Kali Linux", "Snort"],
      registrationGuidelines: [
        "Register online before September 5, 2024.",
        "Submit a brief description of your defense strategy during registration.",
        "Ensure all team members have valid IDs for verification."
      ],
      prizes: [
        "1st Place: $6000 and a trophy",
        "2nd Place: $3500 and medals",
        "3rd Place: $1500 and certificates"
      ],
      extraInfo: {
        location: "Virtual Event",
        sponsors: ["CyberTech Solutions", "Security Innovations Inc.", "Defense Systems Ltd."],
        contactEmail: "info@cyberhackathon2024.com",
        organizer: "Cyber Events Group"
      }
    },
    {
      id: 4,
      title: "Web Development Hackathon",
      date: "October 5-7, 2024",
      time: "8:00 AM - 4:00 PM",
      description: "Showcase your web development skills at our Web Development Hackathon, an event designed for both seasoned developers and aspiring coders. Build innovative web applications, engage in competitive coding sessions, and gain insights from leading industry professionals. This hackathon provides a platform to create impactful web solutions that prioritize user experience, design, and functionality. Collaborate with peers, participate in workshops, and leverage the latest technologies to develop cutting-edge web applications. It's an exciting opportunity to enhance your portfolio, gain recognition, and contribute to the future of web development.",
      cta: "Build with Us",
      imageUrl: "/pic9.png",
      rules: [
        "Teams of up to 4 members are allowed.",
        "Projects must be fully functional web applications.",
        "All work must be original and completed within the hackathon period.",
        "Projects will be judged on usability, design, and functionality."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      registrationGuidelines: [
        "Register online before October 1, 2024.",
        "Submit a brief description of your web application during registration.",
        "Ensure all team members have valid IDs for verification."
      ],
      prizes: [
        "1st Place: $5000 and a trophy",
        "2nd Place: $3000 and medals",
        "3rd Place: $1000 and certificates"
      ],
      extraInfo: {
        location: "Virtual Event",
        sponsors: ["WebTech Corp", "DevGen Solutions", "Code Masters Ltd."],
        contactEmail: "info@webhackathon2024.com",
        organizer: "Web Events Inc."
      }
    },
    {
      id: 5,
      title: "IoT Solutions Hackathon",
      date: "November 15-17, 2024",
      time: "10:00 AM - 6:00 PM",
      description: "The IoT Solutions Hackathon invites you to create cutting-edge Internet of Things (IoT) solutions that address real-world challenges. Collaborate with fellow developers, leverage advanced IoT technologies, and present your projects to industry leaders. This event offers a unique platform to innovate in the IoT space, with opportunities to build prototypes, test solutions, and receive feedback from experts. Participate in hands-on workshops, gain access to IoT hardware, and network with professionals in the field. Whether you're a beginner or an experienced developer, this hackathon provides a comprehensive environment to push the boundaries of IoT technology.",
      cta: "Innovate Now",
      imageUrl: "/pic14.png",
      rules: [
        "Teams of up to 4 members are allowed.",
        "Projects must incorporate IoT devices and technologies.",
        "All work must be original and created during the hackathon.",
        "Judging criteria include innovation, practicality, and technical execution."
      ],
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node-RED"],
      registrationGuidelines: [
        "Register online before November 10, 2024.",
        "Submit a brief description of your IoT project during registration.",
        "Ensure all team members have valid IDs for verification."
      ],
      prizes: [
        "1st Place: $6000 and a trophy",
        "2nd Place: $3500 and medals",
        "3rd Place: $1500 and certificates"
      ],
      extraInfo: {
        location: "Virtual Event",
        sponsors: ["IoT Innovations Ltd.", "TechX IoT Solutions", "Connectivity Systems Inc."],
        contactEmail: "info@iothackathon2024.com",
        organizer: "IoT Events Group"
      }
    }
  ];
  
  
  
  

const App = () =>{
  return(
    <div style={{backgroundColor:"white",paddingTop:"0px",}}>
      <div style={{position:"fixed",top: 0,width: "100%", zIndex: 1000}}>
        <Navbar/>
      </div>
      <div style={{display:"flex",width:"100%"}}>
          <div style={{width:"15%",height:"30%",}}>
            <div style={{top: 1, zIndex: 1000,marginTop:"10vh"}}>
            <Sidenavbar/> 
            </div>
          </div>
          <div className='bg-slate-100 w-full pl-16' style={{minHeight:"100vh"}}>
        <div style={{marginTop:"13vh",width:"100%"}}>

            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route path="/courses" element={<Courses courses={courses}/>}/>
              <Route path="/hackathons" element={<Events events={events}/>}/>
              <Route path="/chatbot" element={<Chatbot/>}/>
              <Route path="/course/:courseId" element={<CourseDetails courses={courses}/>}/>
              <Route path="/event/:eventId" element={<EventDetails events={events}/>}/>
              <Route path="/ctf" element={<UpcomingEvents/>}/>
              <Route path="/winners" element={<UpcomingEvents/>}/>
            </Routes>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App 