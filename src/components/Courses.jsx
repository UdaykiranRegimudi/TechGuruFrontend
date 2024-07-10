import { Element } from "react-scroll"
import { Link } from 'react-router-dom';





const Courses = ({courses}) =>{
    return(
        <div>
            <h1 className='text-center text-2xl font-semibold mt-5 mb-5'>Explore Our Dynamic Courses</h1>
            
            <div className="flex flex-wrap cursor-pointer">
                
                {courses.map(each =>( 
                    <Link to={`/course/${each.id}`} className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 bg-white w-72">
                        <div className="ml-4"> 
                            <img src={each.imageUrl} className="rounded-full mb-10" height="200" width="200" />
                        </div>
                        <h1 className="text-lg font-semibold text-left">{each.courseName}</h1>
                        <p>{each.description.slice(0,170)}<a className="text-blue-600"> Read More...</a></p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Courses