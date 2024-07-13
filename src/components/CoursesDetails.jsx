
import { useParams } from 'react-router-dom';
import ToastButton from '../assets/Toast';
import Upload from '../assets/Upload';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';



const CourseDetails = ({courses}) =>{

    const [userData,setUser] = useState()

    const {user} = useUser();

    useEffect(() =>{
        const fetchData = async()=>{
          const url = "https://techbackend-2.onrender.com/student/"
          const res = await fetch(url);
          const data = await res.json()

          console.log(user.emailAddresses[0].emailAddress)
          const findData = data.find(each => each.email == user.emailAddresses[0].emailAddress)
          if(findData != undefined){
            setUser(findData)
          }else{
            setUser(undefined)
          }
        }
        fetchData()
    },[1])

    

    console.log(courses)
    const { courseId } = useParams();
    const details = courses.find(p => p.courseId == parseInt(courseId));
    console.log(details)

    const SubmitData = async() => {

        if(userData != undefined){
            
            userData["course"] = details.courseName
            userData["courseId"] = details.courseId
            console.log(userData)
            const object =  {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            }
            const response = await fetch("https://techbackend-2.onrender.com/courseRegister/",object)
            const data1 = await response.json()
            console.log(data1)
            console.log(response.status)
            if(response.status == 200){
                const emailData = {
                    email:userData.email,
                    subject:"Welcome to "+ userData.course+ " - Your Registration is Confirmed!",
                    startDate:details.datesAndTimings.startDate,
                    endDate:details.datesAndTimings.endDate,
                    studentName:userData.name,
                    courseName:userData.course,

                }
                const object1 = {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(emailData),
                }
                const res = await fetch("https://techbackend-2.onrender.com/email",object1)
                alert(data1.message)
        }else{
            alert(data1.message)
        }
        }else{
            alert("Please complete your profile details before registering for the event.")
        }
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
                        
                        <button className='btn btn-outline-light'  onClick={SubmitData} >Register for the Event</button>
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