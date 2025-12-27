function Skillscards({image, skill, className}){
    return(
            <div className={className}>
                <img src={image} alt="" />
                <h2> {skill} </h2>
            </div>
    )
}

export default Skillscards