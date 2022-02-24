const Card = (props) => {

    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} alt=""/>
            <div className="details">
                <div className="location--details">
                    <img className="path" src="/images/placeholder.png" alt="" />
                    <span className="location--text">{props.location}</span>
                    <a className="maps--url" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title--text">{props.title}</h1>
                <span className="date--text">{props.startDate} - {props.endDate}</span>
                <p className="description--text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card