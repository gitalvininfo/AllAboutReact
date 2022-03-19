import React from "react"


export default function Card(props) {
    return (
        <div>
            <div className="card-container">
                <img src={props.imageUrl} className="card--image" />
                <div className="card--right-content">
                    <div>
                        <span className="card--place">{props.location}</span>
                        <span className="card--view-google-map">View on Google Maps</span>
                    </div>
                    <h3 className="card--tourist-spot">{props.title}</h3>

                    <p className="card--date">{props.startDate} - {props.endDate}</p>

                    <p className="card--content">
                        {props.description}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}