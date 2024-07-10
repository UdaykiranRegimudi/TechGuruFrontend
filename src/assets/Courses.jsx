import { Element } from "react-scroll"

const course = [
    {
        "courseName": "Full-Stack Web Development",
        "description": "Master front-end and back-end technologies including React, Node.js, and Express. Build robust, scalable web applications and become a full-stack developer.",
        "imageUrl":"/p10.jpg"
    },
    {
      "courseName": "Introduction to Cybersecurity",
      "description": "Dive into the essentials of cybersecurity and learn how to protect systems from digital threats. Covering cryptography,this course equips you with fundamental skills.",
      "imageUrl":"/p11.jpg"
    },
    {
        "courseName": "Introduction to Gen AI",
        "description": "Discover the world of generative AI and learn to create models that generate new content. Covers neural networks, GANs, and creative applications in art, music, and text.",
        "imageUrl":"/p12.jpg"
    },
    {
        "courseName": "Upcoming Events",
        "description": "Stay tuned for our upcoming events! Keep an eye on this space for more details and get ready to engage with the tech community like never before.",
        "imageUrl":"/p13.jpg"
    }
    
  ]
  


const Courses = () =>{
    return(
        <Element name="course">
        <div>
            <h1 className='text-center text-2xl font-semibold mt-5'>Explore Our Dynamic Courses</h1>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"30px"}} >
                {course.map(each =>(
                    <div style={{marginRight:"20px",backgroundSize:"cover"}} className="w-1/5 bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-96 md:space-y-6 md:space-x-96">
                        <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",alignItems:"center"}}>
                            <div >
                                <img src={each.imageUrl} className="rounded-full mb-10" height="200" width="200" />
                            </div>
                        <div style={{textAlign:"center"}}>
                            <h4 className="font-serif font-bold text-base">{each.courseName}</h4>
                            <p className="text-indigo-950">{each.description}</p>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
        </Element>
    )
}

export default Courses