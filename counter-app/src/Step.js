import { render } from "@testing-library/react";
import React from "react";
import "./Step.css";

function Step(){
    return(
        <div id="step-div">
            <label for="step-input">Krok </label>
            <input type="number" name="step-input" min="1" max="10" />
            </div>
        )  
}
export default Step;
        
    
    

