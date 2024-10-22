import React, {useState} from 'react';

function Temperature(){

    const [input, setInput] = useState(0);
    const [tempFrom, setTempFrom] = useState('select');
    const [tempTo, setTempTo] = useState('select');
    const [result, setResult] = useState("Results will appear here");

    function handleTempFromChange(event){
        setTempFrom(event.target.value);
    }
    function handleTempToChange(event){
        setTempTo(event.target.value);
    }
    function handleTempInput(event){
        setInput(event.target.value);
    }
    function handleTempCalculate(){
        let conversionString = "";
        if(tempFrom !== "select" && tempTo !== "select"){
            switch(tempFrom){
                case "C":
                    conversionString = convertCelsius(tempFrom, tempTo, input);
                    break;
                case "F":
                    conversionString = convertFahrenheit(tempFrom, tempTo, input);
                    break;
                case "K":
                    conversionString = convertKelvin(tempFrom, tempTo, input);
                    break;
                default:
                    console.log(`No unit selected. Conversion terminated`);
                    break;
            }
            setResult(conversionString);
        }else{
            setResult(`You must select two units to convert`);
        }
    }

    function convertCelsius(tempFrom, tempTo, input){
        let output = 0;
        let tempInput = Number(input);
        switch(tempTo){
            case "C":
                output = tempInput;
                break;
            case "F":
                output = (tempInput) * (9/5) + 32;
                break;
            case "K":
                output = tempInput + 273.15;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${tempInput} ${tempFrom} = ${output} ${tempTo}`;
    }
    function convertFahrenheit(tempFrom, tempTo, input){
        let output = 0;
        let tempInput = Number(input);
        switch(tempTo){
            case "C":
                output = (tempInput - 32) * (5/9);
                break;
            case "F":
                output = tempInput;
                break;
            case "K":
                output = ((tempInput - 32) * (5/9)) + 273.15;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${tempInput} ${tempFrom} = ${output} ${tempTo}`;
    }
    function convertKelvin(tempFrom, tempTo, input){
        let output = 0;
        let tempInput = Number(input);
        switch(tempTo){
            case "C":
                output = tempInput - 273.15;
                break;
            case "F":
                output = (tempInput - 273.15) * (9/5) + 32;
                break;
            case "K":
                output = tempInput;
                break;
            default:
                console.log(`No conversion executed in switch`);
                break;
        }
        return `${tempInput} ${tempFrom} = ${output} ${tempTo}`;
    }
    return(
        <div>
            <h2>Temperature</h2>
            <select onChange={handleTempFromChange}>
                <option value="select">Select unit</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
            </select>
            <input type="number" value={input} onChange={handleTempInput}></input>
            <select onChange={handleTempToChange}>
                <option value="select">Select unit</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
            </select>
            <button onClick={handleTempCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default Temperature;