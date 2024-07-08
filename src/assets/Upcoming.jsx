
import { Element } from "react-scroll"


  const Events = [
    {
      "title": "Summer Hackathon 2024",
      
      "date": "July 15-17, 2024",
      "time": "10:00 AM - 6:00 PM",
      "description": "Join our summer hackathon to solve real-world problems and win exciting prizes. Collaborate with fellow tech enthusiasts and showcase your skills.",
      "cta": "Register Now",
      "imageUrl":"/pic6.png"
    },
    {
      "title": "Cybersecurity CTF Challenge",
      "date": "September 5, 2024",
      "time": "12:00 PM - 8:00 PM",
      "description": "Test your cybersecurity skills in our Capture The Flag (CTF) challenge. Solve puzzles, exploit vulnerabilities, and compete for top positions.",
      "cta": "Join Now",
      "imageUrl":"/pic7.png"
    },
    {
      "title": "Web Development Bootcamp",
      "date": "October 1-30, 2024",
      "time": "Every Monday & Wednesday, 6:00 PM - 9:00 PM",
      "description": "Master the basics of web development in this month-long bootcamp. Build your own website from scratch using HTML, CSS, and JavaScript.",
      "cta": "Enroll Today",
      "imageUrl":"/pic8.png"
    },
    {
      "title": "Tech Innovation Conference",
      "date": "November 20, 2024",
      "time": "9:00 AM - 5:00 PM",
      "description": "Attend our annual Tech Innovation Conference to hear from leading tech innovators, participate in panel discussions, and network with professionals.",
      "cta": "Get Tickets",
      "imageUrl":"/pic9.png"
    },
  ]
  

const Upcoming = () =>{
    return(
      <Element name="upcoming">
        <div>
            <h1 className='text-center text-2xl font-semibold mt-5'>Upcoming Events</h1>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"30px"}} >
                {Events.map(each =>(
                    <div style={{marginRight:"20px",backgroundSize:"cover"}} className="w-1/5 bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-96 md:space-y-6 md:space-x-96">
                        <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",alignItems:"center"}}>
                            <div >
                                <img src={each.imageUrl} className="rounded-full mb-4" height="200" width="200" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-serif font-bold text-base">{each.title}</h4>
                                <p className="text-indigo-950">{each.date}</p>
                                <p className="text-indigo-950">{each.time}</p>
                           </div>
                        </div>
                        </div>
                ))}
                
            </div>
        </div>
        </Element>
    )
}

export default Upcoming