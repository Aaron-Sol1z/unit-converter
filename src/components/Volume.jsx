import React, {useState} from 'react';

function Volume(){

    const [input, setInput] = useState(0);
    const [volumeFrom, setVolumeFrom] = useState('select');
    const [volumeTo, setVolumeTo] = useState('select');
    const [result, setResult] = useState("Results will appear here");

    function handleVolumeFromChange(event){
        setVolumeFrom(event.target.value);
    }
    function handleVolumeToChange(event){
        setVolumeTo(event.target.value);
    }
    function handleVolumeInput(event){
        setInput(event.target.value);
    }
    function handleVolumeCalculate(){
        let conversionString = "";
        if(volumeFrom !== "select" && volumeTo !== "select"){
            switch(volumeFrom){
                case "UK gal":
                    conversionString = convertUKGallons(volumeFrom, volumeTo, input);
                    break;
                case "US gal":
                    conversionString = convertUSGallons(volumeFrom, volumeTo, input);
                    break;
                case "l":
                    conversionString = convertLiters(volumeFrom, volumeTo, input);
                    break;
                case "ml":
                    conversionString = convertMilliliters(volumeFrom, volumeTo, input);
                    break;
                case "cm^3":
                    conversionString = convertCubicCentimeters(volumeFrom, volumeTo, input);
                    break;
                case "m^3":
                    conversionString = convertCubicMeters(volumeFrom, volumeTo, input);
                    break;
                case "in^3":
                    conversionString = convertCubicInches(volumeFrom, volumeTo, input);
                    break;
                case "ft^3":
                    conversionString = convertCubicFeet(volumeFrom, volumeTo, input);
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

    function convertUKGallons(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput;
                break;
            case "US gal":
                output = volumeInput * 1.201;
                break;
            case "l":
                output = volumeInput * 4.546;
                break;
            case "ml":
                output = volumeInput * 4546;
                break;
            case "cm^3":
                output = volumeInput * 4546;
                break;
            case "m^3":
                output = volumeInput / 220;
                break;
            case "in^3":
                output = volumeInput * 277.4;
                break;
            case "ft^3":
                output = volumeInput / 6.229;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertUSGallons(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput / 1.201;
                break;
            case "US gal":
                output = volumeInput;
                break;
            case "l":
                output = volumeInput * 3.785;
                break;
            case "ml":
                output = volumeInput * 3785
                break;
            case "cm^3":
                output = volumeInput * 3785;
                break;
            case "m^3":
                output = volumeInput / 264.2;
                break;
            case "in^3":
                output = volumeInput * 231;
                break;
            case "ft^3":
                output = volumeInput / 7.48;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertLiters(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput / 4.546;
                break;
            case "US gal":
                output = volumeInput / 3.785;
                break;
            case "l":
                output = volumeInput;
                break;
            case "ml":
                output = volumeInput * 1000;
                break;
            case "cm^3":
                output = volumeInput * 1000;
                break;
            case "m^3":
                output = volumeInput / 1000;
                break;
            case "in^3":
                output = volumeInput * 61.024;
                break;
            case "ft^3":
                output = volumeInput / 28.317;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertMilliliters(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput / 4546;
                break;
            case "US gal":
                output = volumeInput / 3785;
                break;
            case "l":
                output = volumeInput / 1000;
                break;
            case "ml":
                output = volumeInput;
                break;
            case "cm^3":
                output = volumeInput;
                break;
            case "m^3":
                output = volumeInput / 1000000;
                break;
            case "in^3":
                output = volumeInput / 16.387;
                break;
            case "ft^3":
                output = volumeInput / 28320;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertCubicCentimeters(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput / 4546;
                break;
            case "US gal":
                output = volumeInput / 3785;
                break;
            case "l":
                output = volumeInput / 1000;
                break;
            case "ml":
                output = volumeInput;
                break;
            case "cm^3":
                output = volumeInput;
                break;
            case "m^3":
                output = volumeInput / 1000000;
                break;
            case "in^3":
                output = volumeInput / 16.387;
                break;
            case "ft^3":
                output = volumeInput / 28320;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertCubicMeters(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput * 220;
                break;
            case "US gal":
                output = volumeInput * 264.2;
                break;
            case "l":
                output = volumeInput * 1000;
                break;
            case "ml":
                output = volumeInput * 1000000;
                break;
            case "cm^3":
                output = volumeInput * 1000000;
                break;
            case "m^3":
                output = volumeInput;
                break;
            case "in^3":
                output = volumeInput * 61020;
                break;
            case "ft^3":
                output = volumeInput * 35.315;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertCubicInches(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput / 277.4;
                break;
            case "US gal":
                output = volumeInput / 231;
                break;
            case "l":
                output = volumeInput / 61.024;
                break;
            case "ml":
                output = volumeInput * 16.387;
                break;
            case "cm^3":
                output = volumeInput * 16.387;
                break;
            case "m^3":
                output = volumeInput / 61020;
                break;
            case "in^3":
                output = volumeInput;
                break;
            case "ft^3":
                output = volumeInput / 1728;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }
    function convertCubicFeet(volumeFrom, volumeTo, input){
        let output = 0;
        let volumeInput = Number(input);
        switch(volumeTo){
            case "UK gal":
                output = volumeInput * 6.229;
                break;
            case "US gal":
                output = volumeInput * 7.481;
                break;
            case "l":
                output = volumeInput * 28.317;
                break;
            case "ml":
                output = volumeInput * 28320;
                break;
            case "cm^3":
                output = volumeInput * 28320;
                break;
            case "m^3":
                output = volumeInput / 35.315;
                break;
            case "in^3":
                output = volumeInput * 1728;
                break;
            case "ft^3":
                output = volumeInput;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${volumeInput} ${volumeFrom} = ${output} ${volumeTo}`;
    }

    return(
        <div>
            <h2>Volume</h2>
            <select onChange={handleVolumeFromChange}>
                <option value="select">Select unit</option>
                <option value="UK gal">UK Gallons</option>
                <option value="US gal">US Gallons</option>
                <option value="l">Liters</option>
                <option value="ml">Milliliters</option>
                <option value="cm^3">Cubic Centimeters</option>
                <option value="m^3">Cubic Meters</option>
                <option value="in^3">Cubic Inches</option>
                <option value="ft^3">Cubic Feet</option>
            </select>
            <input type="number" value={input} onChange={handleVolumeInput} min="0"></input>
            <select onChange={handleVolumeToChange}>
                <option value="select">Select unit</option>
                <option value="UK gal">UK Gallons</option>
                <option value="US gal">US Gallons</option>
                <option value="l">Liters</option>
                <option value="ml">Milliliters</option>
                <option value="cm^3">Cubic Centimeters</option>
                <option value="m^3">Cubic Meters</option>
                <option value="in^3">Cubic Inches</option>
                <option value="ft^3">Cubic Feet</option>
            </select>
            <button onClick={handleVolumeCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default Volume;