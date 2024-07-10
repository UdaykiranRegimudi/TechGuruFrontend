
import { useParams } from 'react-router-dom';



const EventDetails = ({events}) =>{
    console.log(events)
    const { eventId } = useParams();
    const details = events.find(p => p.id == parseInt(eventId));
    console.log(details)
    return(
        <div >
            <div className="flex justify-between pt-4 pl-4 pr-4">
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 text-white w-2/3 bg-gray-700">
                    
                    <h1 className="text-lg font-semibold mb-2">{details.title}</h1>
                    <p className="mb-2">{details.description}</p>
                    <h1 className="text-lg font-semibold mb-2">Event Timings</h1>
                    <p className='mb-2'>Date : {details.date}</p>
                    <p className='mb-2'>Time : {details.time}</p>
                    <h1 className='mt-3 text-center'>* * * * * * {details.cta} * * * * * *</h1>
                    <div>
                       
                    </div>
                </div>
                <div className="bg-card text-card-foreground p-2 rounded-lg shadow-lg m-2 bg-gray-700 text-white w-1/3">
                    <img src={details.imageUrl} className="h-72 w-full"/>
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-light">Register For Event</button>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-between pb-4 pl-4 pr-4">
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 text-white w-2/4 bg-gray-700">
                    <h1 className="text-lg font-semibold mb-3">Registration Guidelines</h1>
                    <ul style={{listStyleType:"revert"}} className='ml-6 mb-3'>
                        {details.registrationGuidelines.map(each =>(
                            <li className='mb-3'>{each}</li>
                        ))}
                    </ul>
                    <h1 className="text-lg font-semibold mb-3">Prizes</h1>
                    <ul style={{listStyleType:"revert"}} className='ml-6 mb-3'>
                        {details.prizes.map(each =>(
                            <li className='mb-3'>{each}</li>
                        ))}
                    </ul>
                    
                </div>
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 bg-gray-700 text-white w-3/4">
                    <h1 className="text-lg font-semibold">Rules</h1>
                    <ul style={{listStyleType:"revert"}} className='ml-6 mb-3'>
                        {details.rules.map(each =>(
                            <li className='mb-3'>{each}</li>
                        ))}
                    </ul>
                    <h1 className="text-lg font-semibold mb-3 mt-5">Technologies</h1>
                    <ul style={{listStyleType:"revert"}} className='ml-6 mb-3 flex'>
                        {details.technologies.map(each =>(
                            <li className='mb-3 w-1/2'>{each}</li>
                        ))}
                    </ul>


                </div>
            </div>
            
        </div>
    )
}


export default EventDetails