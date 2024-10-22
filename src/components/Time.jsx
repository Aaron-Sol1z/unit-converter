import React, {useState} from 'react';

function Time(){

    const [input, setInput] = useState(0);
    const [timeFrom, setTimeFrom] = useState('select');
    const [timeTo, setTimeTo] = useState('select');
    const [result, setResult] = useState("Results will appear here");

    function handleTimeFromChange(event){
        setTimeFrom(event.target.value);
    }
    function handleTimeToChange(event){
        setTimeTo(event.target.value);
    }
    function handleTimeInput(event){
        setInput(event.target.value);
    }
    function handleTimeCalculate(){
        let conversionString = "";
        if(timeFrom !== "select" && timeTo !== "select"){
            switch(timeFrom){
                case "msec":
                    conversionString = convertMilliseconds(timeFrom, timeTo, input);
                    break;
                case "sec":
                    conversionString = convertSeconds(timeFrom, timeTo, input);
                    break;
                case "min":
                    conversionString = convertMinutes(timeFrom, timeTo, input);
                    break;
                case "hr":
                    conversionString = convertHours(timeFrom, timeTo, input);
                    break;
                case "days":
                    conversionString = convertDays(timeFrom, timeTo, input);
                    break;
                case "weeks":
                    conversionString = convertWeeks(timeFrom, timeTo, input);
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

    function convertMilliseconds(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput;
                break;
            case "sec":
                output = timeInput / 1000;
                break;
            case "min":
                output = timeInput / 60000;
                break;
            case "hr":
                output = timeInput / 3600000;
                break;
            case "days":
                output = timeInput / 86400000;
                break;
            case "weeks":
                output = timeInput / 604800000;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    function convertSeconds(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput * 1000;
                break;
            case "sec":
                output = timeInput;
                break;
            case "min":
                output = timeInput / 60;
                break;
            case "hr":
                output = timeInput / 3600;
                break;
            case "days":
                output = timeInput / 86400;
                break;
            case "weeks":
                output = timeInput / 604800;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    function convertMinutes(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput * 60000;
                break;
            case "sec":
                output = timeInput * 60;
                break;
            case "min":
                output = timeInput;
                break;
            case "hr":
                output = timeInput / 60;
                break;
            case "days":
                output = timeInput / 1440;
                break;
            case "weeks":
                output = timeInput / 10080;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    function convertHours(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput * 3600000;
                break;
            case "sec":
                output = timeInput * 3600;
                break;
            case "min":
                output = timeInput * 60;
                break;
            case "hr":
                output = timeInput;
                break;
            case "days":
                output = timeInput / 24;
                break;
            case "weeks":
                output = timeInput / 168;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    function convertDays(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput * 84000000;
                break;
            case "sec":
                output = timeInput * 86400;
                break;
            case "min":
                output = timeInput * 1440;
                break;
            case "hr":
                output = timeInput * 24;
                break;
            case "days":
                output = timeInput;
                break;
            case "weeks":
                output = timeInput / 7;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    function convertWeeks(timeFrom, timeTo, input){
        let output = 0;
        let timeInput = Number(input);
        switch(timeTo){
            case "msec":
                output = timeInput * 604800000;
                break;
            case "sec":
                output = timeInput * 604800;
                break;
            case "min":
                output = timeInput * 10080;
                break;
            case "hr":
                output = timeInput * 168;
                break;
            case "days":
                output = timeInput * 7;
                break;
            case "weeks":
                output = timeInput;
                break;
            default:
                console.log("No conversion executed in switch");
                break;
        }
        return `${timeInput} ${timeFrom} = ${output} ${timeTo}`;
    }
    return(
        <div>
            <h2>Time</h2>
            <select onChange={handleTimeFromChange}>
                <option value="select">Select unit</option>
                <option value="msec">Milliseconds</option>
                <option value="sec">Seconds</option>
                <option value="min">Minutes</option>
                <option value="hr">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
            </select>
            <input type="number" value={input} onChange={handleTimeInput} min="0"></input>
            <select onChange={handleTimeToChange}>
                <option value="select">Select unit</option>
                <option value="msec">Milliseconds</option>
                <option value="sec">Seconds</option>
                <option value="min">Minutes</option>
                <option value="hr">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
            </select>
            <button onClick={handleTimeCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default Time;