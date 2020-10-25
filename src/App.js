import React, { Component } from 'react'
import './App.scss';

import Stepper from "./stepper/Stepper"

export default class App extends Component {
    constructor(){
        super();
        this.state={
            currentStep:1
        }
    }

    handleClick=(clickType)=>{
        const{currentStep} = this.state;
        let newStep =currentStep;
        clickType === "next" ? newStep++ :newStep--;
        if(newStep > 0 && newStep <= 5)
            this.setState({
                currentStep:newStep
            });
    };
    render() {
        const stepsArray = [
            "office one",
            "office two",
            "office three",
            "office four",
            "office five"
        ];


        const{currentStep} = this.state;

        return (
        <>
            <div className="stepper-container-horizontal">
                <Stepper
                steps={stepsArray}
                direction="horizontal"
                currentStepNumber={currentStep}
                />
            </div>
            <div className="buttons-container">
                <button onClick={() => this.handleClick()}>Previous</button>
                <button onClick={() => this.handleClick("next")}>Next</button>
            </div>
        </>
        );
    }
}
