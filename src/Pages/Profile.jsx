import myimage from '../Images/profilephoto.jpg'
import linkedinIcon from '../Images/LI-Logo.png'
import githubIcon from '../Images/github-logo.png'
import locationimage from '../Images/location.png'
import emailimage from '../Images/mail.png'
import './Profile.css'

function Profile(){
    return(
        <div id="profilepage">
            <div id='image'>
                <img id="myimage" src={myimage} alt="" />
            </div>
            <div id='description'>
                <h1> Jose Garcia </h1>
                <div>
                    <div id='mailicon'>
                        <img src={emailimage} alt="" />
                        <h3 id='mail'> jagarcia505050 @gmail.com </h3>
                    </div>
                    <div id='locationicon'>
                        <img src={locationimage} alt="" />
                        <h3 id='location'> Eindhoven, Netherlands </h3>
                    </div>
                </div>
                <div id='pagesicons'>
                    <a id='linkedinicon' href="https://www.linkedin.com/in/jose-angel-garcia-a6bb31291/" target='_blank' rel='nonpener nonreferrer' >
                        <img id='linkedinlogo' src={linkedinIcon} alt="" />
                        <h4> https://www.linkedin.com/in/jose </h4>
                    </a>
                    <a id='giticon' href="https://github.com/GarciaMasterSG"  target='_blank' rel='nonpener nonreferrer'>
                        <img id='githublogo' src={githubIcon} alt="" />
                        <h4> https://github.com/GarciaMasterSG </h4>
                    </a>
                </div>
                <h3 id='aboutme'>
                    I am a technology enthusiast with a strong interest in development and 
                    building clean, functional user interfaces. The buttons above will take 
                    you to my GitHub and LinkedIn profiles, where you can explore my projects
                    , see how I work, and follow my professional growth. I enjoy learning 
                    continuously, experimenting with new ideas, and turning concepts into 
                    real solutions through code.
                </h3>
            </div>
        </div>
    )
}

export default Profile