import { Element } from "react-scroll"
import { Link } from 'react-router-dom';


const Events = ({events}) =>{
    return(
        <div>
            <h1 className='text-center text-2xl font-semibold mt-5 mb-5'>Explore Our Dynamic Hackathons</h1>
            
            <div className="flex flex-wrap cursor-pointer">
                
                {events.map(each =>(
                    <Link to={`/event/${each.id}`} className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 bg-white w-72">
                        <div className="ml-4">
                            <img src={each.imageUrl} className="rounded-full mb-10" height="200" width="200" />
                        </div>
                        <div className="text-center">
                            <h4 className="font-serif font-bold text-base">{each.title}</h4>
                            <p className="text-indigo-950">{each.date}</p>
                            <p className="text-indigo-950">{each.time}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Events