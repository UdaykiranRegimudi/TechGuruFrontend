import {SignInButton} from '@clerk/clerk-react'

const Join = () =>{
    return( 
        <div className="p-20">
            <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-96 md:space-y-6 md:space-x-96 ">
                <div className="w-2/3 p-5">
                    <h1 className="text-2xl font-semibold mb-3">Join Us</h1>
                    <p className="text-indigo-950 mb-4">Whether you're looking to start a career in tech, advance your current skills, or simply explore your passion for technology, Project Tech is here to help. Join our community today and start your journey towards becoming a tech innovator.</p>
                    <h1 className="text-2xl font-semibold mb-3">Get Ready to Innovate</h1>
                    <p className="text-indigo-950 mb-4">Embark on your path to becoming a tech innovator with Project Tech. Join us today and unlock a world of opportunities, knowledge, and connections. Your future in tech starts here!</p>
                    <SignInButton className="btn btn-outline-primary ">Get Started</SignInButton>
                </div>
                <img src="/pic4.png" className="w-1/3"/>
            </div>
            
        </div>
    )
}

export default Join