import React, {Component} from 'react';
import './Clock.css';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log(` lifeCycle component,metoda konstruktora`);
    }
    //Dodjemy trzy metody
    componentDidMount(){
        this.timerID = setInterval(
            () => {this.tick()}, 1000);
        console.log(`Dwa komponenty: lifeCycle oraz componentDivMount`);
    }
    componentDidUpdate(){
        console.log(`cykl aktualizacji komponentu`);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
        console.log(`component willUnMOnt - odmontowanie`);
    }
/*
    toggleClock = () => {
        this.setState((prevState)=>{
            return({
                showClock: !prevState.showClock
            });
        })
    }
*/
    tick = () => {
        this.setState({
        date: new Date()
    });
}
    render(){
        return(
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()}<span onClick={this.props.toggleClockMethod}> X</span></h4>
            </div>
        )
    } 
}
export default Clock; 