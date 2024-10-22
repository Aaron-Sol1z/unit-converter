import React, {useState} from 'react';

function Length(){

    const [input, setInput] = useState(0);
    const [lengthFrom, setLengthFrom] = useState('select');
    const [lengthTo, setLengthTo] = useState('select');
    const [result, setResult] = useState("Results will appear here");

    function handleLengthFromChange(event){
        setLengthFrom(event.target.value);
    }
    function handleLengthToChange(event){
        setLengthTo(event.target.value);
    }
    function handleLengthInput(event){
        setInput(event.target.value);
    }
    function handleLengthCalculate(){
        let conversionString = "";
        if(lengthFrom !== "select" && lengthTo !== "select"){
            switch(lengthFrom){
                case "mm":
                    conversionString = convertMillimeters(lengthFrom, lengthTo, input);
                    break;
                case "cm":
                    conversionString = convertCentimeters(lengthFrom, lengthTo, input);
                    break;
                case "m":
                    conversionString = convertMeters(lengthFrom, lengthTo, input);
                    break;
                case "km":
                    conversionString = convertKilometers(lengthFrom, lengthTo, input);
                    break;
                case "in":
                    conversionString = convertInches(lengthFrom, lengthTo, input);
                    break;
                case "ft":
                    conversionString = convertFeet(lengthFrom, lengthTo, input);
                    break;
                case "yd":
                    conversionString = convertYards(lengthFrom, lengthTo, input);
                    break;
                case "mi":
                    conversionString = convertMiles(lengthFrom, lengthTo, input);
                    break;
                case "NM":
                    conversionString = convertNauticalMiles(lengthFrom, lengthTo, input);
                    break;
                case "mil":
                    conversionString = convertMils(lengthFrom, lengthTo, input);
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

    function convertMillimeters(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput;
                break;
            case "cm":
                output = lengthInput / 10;
                break;
            case "m":
                output = lengthInput / 1000;
                break;
            case "km":
                output = lengthInput / 1000000;
                break;
            case "in":
                output = lengthInput / 25.4;
                break;
            case "ft":
                output = lengthInput / 304.8;
                break;
            case "yd":
                output = lengthInput / 914.4;
                break;
            case "mi":
                output = lengthInput / 1609000;
                break;
            case "NM":
                output = lengthInput / 1852000;
                break;
            case "mil":
                output = lengthInput * 39.37;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertCentimeters(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 10;
                break;
            case "cm":
                output = lengthInput;
                break;
            case "m":
                output = lengthInput / 100;
                break;
            case "km":
                output = lengthInput / 100000;
                break;
            case "in":
                output = lengthInput / 2.54;
                break;
            case "ft":
                output = lengthInput / 30.48;
                break;
            case "yd":
                output = lengthInput / 91.44;
                break;
            case "mi":
                output = lengthInput / 160900;
                break;
            case "NM":
                output = lengthInput / 185200;
                break;
            case "mil":
                output = lengthInput * 393.7;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertMeters(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 1000;
                break;
            case "cm":
                output = lengthInput * 100;
                break;
            case "m":
                output = lengthInput;
                break;
            case "km":
                output = lengthInput / 1000;
                break;
            case "in":
                output = lengthInput * 39.37;
                break;
            case "ft":
                output = lengthInput * 3.281;
                break;
            case "yd":
                output = lengthInput * 1.094;
                break;
            case "mi":
                output = lengthInput / 1609;
                break;
            case "NM":
                output = lengthInput / 1852;
                break;
            case "mil":
                output = lengthInput * 39370;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertKilometers(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 1000000;
                break;
            case "cm":
                output = lengthInput * 100000;
                break;
            case "m":
                output = lengthInput * 1000;
                break;
            case "km":
                output = lengthInput;
                break;
            case "in":
                output = lengthInput * 39370;
                break;
            case "ft":
                output = lengthInput * 3281;
                break;
            case "yd":
                output = lengthInput * 1094;
                break;
            case "mi":
                output = lengthInput / 1.609;
                break;
            case "NM":
                output = lengthInput / 1.852;
                break;
            case "mil":
                output = lengthInput * 39370000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertInches(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 25.4;
                break;
            case "cm":
                output = lengthInput * 2.54;
                break;
            case "m":
                output = lengthInput / 39.37;
                break;
            case "km":
                output = lengthInput / 39370;
                break;
            case "in":
                output = lengthInput;
                break;
            case "ft":
                output = lengthInput / 12;
                break;
            case "yd":
                output = lengthInput / 36;
                break;
            case "mi":
                output = lengthInput / 63360;
                break;
            case "NM":
                output = lengthInput / 72910;
                break;
            case "mil":
                output = lengthInput * 1000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertFeet(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 304.8;
                break;
            case "cm":
                output = lengthInput * 30.48;
                break;
            case "m":
                output = lengthInput / 3.281;
                break;
            case "km":
                output = lengthInput / 3281;
                break;
            case "in":
                output = lengthInput * 12;
                break;
            case "ft":
                output = lengthInput;
                break;
            case "yd":
                output = lengthInput / 3;
                break;
            case "mi":
                output = lengthInput / 5280;
                break;
            case "NM":
                output = lengthInput / 6076;
                break;
            case "mil":
                output = lengthInput * 12000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertYards(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 914.4;
                break;
            case "cm":
                output = lengthInput * 91.44;
                break;
            case "m":
                output = lengthInput / 1.094;
                break;
            case "km":
                output = lengthInput / 1094;
                break;
            case "in":
                output = lengthInput * 36;
                break;
            case "ft":
                output = lengthInput * 3;
                break;
            case "yd":
                output = lengthInput;
                break;
            case "mi":
                output = lengthInput / 1760;
                break;
            case "NM":
                output = lengthInput / 2025;
                break;
            case "mil":
                output = lengthInput * 36000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertMiles(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 1609000;
                break;
            case "cm":
                output = lengthInput * 160900;
                break;
            case "m":
                output = lengthInput * 1609;
                break;
            case "km":
                output = lengthInput * 1.609;
                break;
            case "in":
                output = lengthInput * 63360;
                break;
            case "ft":
                output = lengthInput * 5280;
                break;
            case "yd":
                output = lengthInput * 1760;
                break;
            case "mi":
                output = lengthInput;
                break;
            case "NM":
                output = lengthInput / 1.151;
                break;
            case "mil":
                output = lengthInput * 63360000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertNauticalMiles(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput * 1852000;
                break;
            case "cm":
                output = lengthInput * 185200;
                break;
            case "m":
                output = lengthInput * 1852;
                break;
            case "km":
                output = lengthInput * 1.852;
                break;
            case "in":
                output = lengthInput * 72910;
                break;
            case "ft":
                output = lengthInput * 6076;
                break;
            case "yd":
                output = lengthInput * 2025;
                break;
            case "mi":
                output = lengthInput * 1.151;
                break;
            case "NM":
                output = lengthInput;
                break;
            case "mil":
                output = lengthInput * 72910000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }
    function convertMils(lengthFrom, lengthTo, input){
        let output = 0;
        let lengthInput = Number(input);
        switch(lengthTo){
            case "mm":
                output = lengthInput / 39.37;
                break;
            case "cm":
                output = lengthInput / 393.7;
                break;
            case "m":
                output = lengthInput / 39370;
                break;
            case "km":
                output = lengthInput / 39370000;
                break;
            case "in":
                output = lengthInput / 1000;
                break;
            case "ft":
                output = lengthInput / 12000;
                break;
            case "yd":
                output = lengthInput / 36000;
                break;
            case "mi":
                output = lengthInput / 63360000;
                break;
            case "NM":
                output = lengthInput / 72910000;
                break;
            case "mil":
                output = lengthInput;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${lengthInput} ${lengthFrom} = ${output} ${lengthTo}`;
    }

    return(
        <div>
            <h2>Length</h2>
            <select onChange={handleLengthFromChange}>
                <option value="select">Select unit</option>
                <option value="mm">Millimeters</option>
                <option value="cm">Centimeters</option>
                <option value="m">Meters</option>
                <option value="km">Kilometers</option>
                <option value="in">Inches</option>
                <option value="ft">Feet</option>
                <option value="yd">Yards</option>
                <option value="mi">Miles</option>
                <option value="NM">Nautical miles</option>
                <option value="mil">Mils</option>
            </select>
            <input type="number" value={input} onChange={handleLengthInput} min="0"></input>
            <select onChange={handleLengthToChange}>
                <option value="select">Select unit</option>
                <option value="mm">Millimeters</option>
                <option value="cm">Centimeters</option>
                <option value="m">Meters</option>
                <option value="km">Kilometers</option>
                <option value="in">Inches</option>
                <option value="ft">Feet</option>
                <option value="yd">Yards</option>
                <option value="mi">Miles</option>
                <option value="NM">Nautical miles</option>
                <option value="mil">Mils</option>
            </select>
            <button onClick={handleLengthCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default Length;