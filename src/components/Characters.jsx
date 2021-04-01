import './Characters.css';
import React from 'react';
const Characters = (props) => {

    return (
        <div className="boxes-card">
            <div className="box-card">
                <img className="image-card" src={props.image} />
                <div className="name-card">
                    <h2>{props.name}</h2>
                <div className = "bigblock-status"></div>
                    <p className="status-gender">{props.gender}</p>
                <div className="block-status">
                    <p className="status-specie">Specie : {props.species}</p>
                    <div>
                    <div className={"status-card " + (props.status.charAt(0).toLowerCase() + props.status.slice(1)) + "-status"}></div>
                    <p className="status-text">{props.status}</p>
                    </div>
                    <p className="status-location">{props.location.name}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Characters;