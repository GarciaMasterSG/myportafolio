import Projectcards from "../Components/Projectcards"
import Skillscards from "../Components/Skillscards"
import background from '../Images/cyber-background.jpg'
import './Home.css'
import amyVideo from '../Images/AMYgreenhouse.mp4'

function Home(){
    return(
        <div className="home">
            <div id="background">
                <img src={background} alt="" />
            </div>
            <div id='pageTitle'>
                <h1> Hi, I'm Jose Garcia</h1>
                <h3> Software engineer</h3>
            </div>
            <div id='projects'>
                <div>
                    <h1 id='projectstitle'> My projects </h1>
                    <Projectcards video={amyVideo} title='AMY the greenhouse app' description='AMY Greenhouse App is a multilingual application designed to monitor temperature and humidity levels in a greenhouse.' viewCode='https://github.com/GarciaMasterSG/AMY'/>
                </div>
                <div id='skills'>
                    <h1> Skills and technologies </h1>
                    <div id="cards">
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" skill='Python'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" skill='HTML'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" skill='CSS'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" skill='JavaScript'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" skill='REACT'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" skill='C#'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" skill='SQL'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" skill='.NET'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg" skill='Spanish'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" skill='English'/>
                        <Skillscards className='skillcards' image="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/br.svg" skill='Portuguese'/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Home