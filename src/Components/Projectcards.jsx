import './Projectcards.css'

function Projectcards(prop){
    return(
        <div id="projectcards">
            <div id='background1'></div>
            <video controls src={prop.video}></video>
            <h2> {prop.title} </h2>
            <h3> {prop.description}</h3>
            <div id='botones'>
                <a href={prop.viewDocumentation} target='_blank' rel='noopener noreferrer'> View Documentation </a>
                <a href={prop.viewCode} target='_blank' rel='noopener noreferrer'> View Code </a>
            </div>
        </div>
    )
}

export default Projectcards