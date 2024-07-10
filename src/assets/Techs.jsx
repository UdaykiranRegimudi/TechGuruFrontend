
import { Element } from "react-scroll"
const Feature = [
    {
      imageUrl:"/pic2.png",
      heading:"Interactive Learning",
      desc:"Engage in hands-on tech projects and gain practical skills."
  
    },
    {
      imageUrl:"/pic3.png",
      heading:"Expert Instructors",
      desc:"Learn from industry experts and experienced mentors."
    },
    {
      imageUrl:"/pic4.png",
      heading:"Hackathons and Competitions",
      desc:"Compete in hackathons and CTF games to test your skills."
    },
    {
      imageUrl:"/pic5.png",
      heading:"Community Support",
      desc:"Join a vibrant community of tech enthusiasts and collaborate on projects."
    }
  ]

const Techs = () =>{
    return(
      <Element name="tech">
        <div>
            <h1 className='text-center text-2xl font-semibold mt-5'>Why To Choose Project Tech?</h1>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"30px"}} >
                {Feature.map(each =>(
                    <div style={{marginRight:"20px",backgroundSize:"cover"}} className="w-1/5 bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-96 md:space-y-6 md:space-x-96">
                        <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",alignItems:"center"}}>
                            <div >
                                <img src={each.imageUrl} className="rounded-full mb-10" height="200" width="200" />
                            </div>
                        <div style={{textAlign:"center"}}>
                                <h4 className="font-serif font-bold text-base">{each.heading}</h4>
                                <p className="text-indigo-950">{each.desc}</p>
                        </div>
                        </div>
                        </div>
                ))}
                
            </div>
        </div>
        </Element>
    )
}

export default Techs