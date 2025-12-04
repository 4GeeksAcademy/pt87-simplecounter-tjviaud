import React from "react";
import SecondsCounter from "./SecondsCounter";
import ReactDOM from 'react-dom';
import Card from './Card.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);


function SecondsCounter() {
	return (
		<>
		  <SecondsCounter />
		</>
	)
	function Card (props){
    
		return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
}

   

export default SecondsCounter