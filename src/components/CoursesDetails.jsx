
import { useParams } from 'react-router-dom';
import ToastButton from '../assets/Toast';
import Upload from '../assets/Upload';
import Model from '../assets/Model';



const CourseDetails = ({courses}) =>{

    

    console.log(courses)
    const { courseId } = useParams();
    const details = courses.find(p => p.id == parseInt(courseId));
    console.log(details)

    const SubmitData = async(data) => {
        data.year = parseInt(data.year)
        data["course"] = details.courseName
        data["courseId"] = details.id
        console.log(data)
        const object =  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const response = await fetch("http://localhost:3000/register/",object)
        const data1 = await response.json()
        console.log(response.status)
        if(response.status == 200){
            const emailData = {
                email:data.email,
                subject:"Welcome to "+ data.course+ " - Your Registration is Confirmed!",
                startDate:details.datesAndTimings.startDate,
                endDate:details.datesAndTimings.endDate,
                studentName:data.name,
                courseName:data.course,

            }
            const object1 = {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(emailData),
            }
            const res = await fetch("http://localhost:3000/register/send-email",object1)
        }
        
        
        alert(data1.message)
    }

    return(
        <div >
            <div className="flex justify-between pt-4 pl-4 pr-4">
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 text-white w-2/3 bg-gray-700">
                    
                    <h1 className="text-lg font-semibold mb-2">{details.courseName}</h1>
                    <p className="mb-2">{details.description}</p>
                    <h1 className="font-semibold mb-2">About</h1>
                    <p className="mb-3">{details.about}</p>
                    <div>
                        <h1 className="font-semibold mb-2">Timings</h1>
                        <p className="mb-2">Start Date : {details.datesAndTimings.startDate}</p>
                        <p className="mb-2">End Date : {details.datesAndTimings.endDate}</p>
                        <p className="mb-2">Timings : {details.datesAndTimings.timings}</p>
                    </div>
                </div>
                <div className="bg-card text-card-foreground p-2 rounded-lg shadow-lg m-2 bg-gray-700 text-white w-1/3">
                    <img src={details.imageUrl} className="h-72 w-full"/>
                    <div className="text-center mt-4">
                        
                        <Model  data = {"Register for Event"} SubmitData={SubmitData} />
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-between pb-4 pl-4 pr-4">
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 text-white w-2/4 bg-gray-700">
                    <h1 className="text-lg font-semibold mb-3 ml-2">Topics to teach</h1>
                    <ul style={{listStyleType:"revert"}} className="ml-10">
                    {details.topics.map((each) =>(
                        <li className="m-2">{each}</li>
                    ))}
                    </ul>
                </div>
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg m-2 bg-gray-700 text-white w-3/4">
                    <h1 className="text-lg font-semibold">Projects</h1>
                    <ul>
                        {details.projects.map(each =>(
                            <li className="m-2">
                                <h1 className="text-base font-medium">{each.title}</h1>
                                <p>{each.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}


export default CourseDetails