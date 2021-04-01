import './Characters.css';
import React from 'react';
const Characters = (props) => {

    return (
        <div className="boxes-card">
            <div className="box-card">

                <div className="name-card">
                    <h2>{props.name}</h2>
                </div>

                <div>
                    <img className="image-card" src={props.image} />
                </div>
                <div className="bigblock-status">
                    <div className="block-status">
                        <p className="status-gender">{props.gender}</p>
                        <p className="status-specie">Specie : {props.species}</p>
                        <p className="status-location">{props.location.name}</p>
                        <div>
                            <p className="status-text">{props.status}</p>
                            <div className={"status-card " + (props.status.charAt(0).toLowerCase() + props.status.slice(1)) + "-status"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Characters;