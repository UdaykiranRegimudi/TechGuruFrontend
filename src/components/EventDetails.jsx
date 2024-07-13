
import { useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';



const EventDetails = ({events}) =>{
    console.log(events)
    const { eventId } = useParams();
    const details = events.find(p => p.hackId == parseInt(eventId));
    console.log(details)

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


    const SubmitData = async() => {

        if(userData != undefined){
            
            userData["hackathonName"] = details.title
            userData["hackathonId"] = details.hackId
            console.log(userData)
            const object =  {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            }
            const response = await fetch("https://techbackend-2.onrender.com/hackathonRegister/",object)
            const data1 = await response.json()
            console.log(data1)
            console.log(response.status)
            if(response.status == 200){ 
                const emailData = {
                    email:userData.email,
                    subject:"Welcome to "+ userData.hackathonName+ " - Your Registration is Confirmed!",
                    startDate:details.date,
                    endDate:details.date,
                    studentName:userData.name,
                    courseName:userData.hackathonName,

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
                    <button className='btn btn-outline-light'  onClick={SubmitData} >Register for the Event</button>
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