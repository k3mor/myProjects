//Komponent funkcyjny
import React, {useState, useEffect} from 'react';
import "./ClockFunctional.css";

const ClockFunctional = (props) => {

    console.log("Inicjalizacja cyklu życia, ustawiamy stan Date, [set, setDate]");

    const tick = () => setDate(new Date);

    useEffect(()=>{
        let timerID = setInterval(()=>{tick()}, 1000);
        console.log(`Mounting && Updating, jak komponent didMount i didUpdate`);

        return()=>{
            clearInterval(timerID);
            console.log(`Cykl odmontowywania`);
        } 
    });

    const [date, setDate] = useState(new Date()); 
    return(
        <div className="clock">
            
             <h4>Time: {date.toLocaleTimeString()}<span onClick={props.toggleClockMethod}> X</span></h4>
                      
        </div>
    );
}
export default ClockFunctional;