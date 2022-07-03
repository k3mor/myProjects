import React, {Component} from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
//import Clock from "./Clock";
import ClockFuncional from "./ClockFuncional";
import Step from "./Step";

/* Komponent klasowy */

class Counter extends Component {
    //Tworzymy konstruktor
    constructor (props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true
        };
    }
//changeValue() nie działa bez metody strzałkowej dla ES 6. Dla ES stworzyć kontekst obiektowy this: this.changeValue() = this.changeValue.bind(this)
    changeValue = (action) => {
        //console.log(`ChangeValue clicked`)
        //Można przekazać obiekt
        /*
        this.setState({
            counterValue: this.state.counterValue
            +1
        })*/
        //console.log(action);
        //MOżna przkazac funkcję
       

        
        this.setState((prevState, prevProps)=>{

            let currentCounterValue = prevState.counterValue;
            if(action==='add'){
                currentCounterValue += 1;
            }else if(action==='reinit'){
                currentCounterValue = prevProps.initValue;
            }else{
                currentCounterValue = 0;
            }
            return ({
                counterValue: currentCounterValue
            })
        });
    }

    toggleClock = () => {
        this.setState((prevState)=>{
            return({
                showClock: !prevState.showClock
            });
        })
    }

  

    render (){
       
        let clockElement = '';
        if(this.state.showClock){
            //clockElement = <Clock toggleClockMethod = {this.toggleClock} />;
            clockElement = <ClockFuncional toggleClockMethod = {this.toggleClock} />;
        }else{
            clockElement = <span onClick={this.toggleClock} className="showClock">show clock</span>;
        }

        //let randomNumber= Math.floor(Math.random() * (108-1+1)+1);
       
        return(
            <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue} />
            {clockElement}
            <Step />
        </div>
        )
    }
}

export default Counter;

// Komponent funkcyjny:
/*
function Counter(props){
    let randomNumber= Math.floor(Math.random() * (108-1+1)+1);
    return (
        <div className="counter">
            Counter:
            <span className="value">
                {props.initValue}
            </span>
        </div>
    );
}
export default Counter;
*/