import React from "react";
import CurrencyInputComponent from "./CurrencyInputComponent";

function dollardToKsh(dollar){
    return dollar * 120.05;
}

function kshToDollar(ksh){
    return ksh / 120.05;
}

function doCovert(amount, conversion){
    let value = parseFloat(amount);
    if(Number.NaN(value)){
        return '';
    }

    let output = conversion(value);
    let rounded = Math.round(value * 1000) / 1000; 
    return rounded.toString();
}

class MoneyConverterComponent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <br />
                <CurrencyInputComponent currency="usd"/>
                <CurrencyInputComponent currency="ksh"/>
            </div>
        );
    }
}

export default MoneyConverterComponent;