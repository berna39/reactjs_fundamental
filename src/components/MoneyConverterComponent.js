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
    if(Number.isNaN(value)){
        return '';
    }

    let output = conversion(value);
    let rounded = Math.round(output * 1000) / 1000; 
    return rounded.toString();
}

class MoneyConverterComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleDollarChange = this.handleDollarChange.bind(this);
        this.handleKshChange = this.handleKshChange.bind(this);

        this.state = { amount: '', currency: 'usd'};
    }

    handleDollarChange(amount){
        this.setState({ amount: amount, currency: 'usd' });
    }

    handleKshChange(amount){
        this.setState({ amount: amount, currency: 'ksh' });
    }
    
    render(){
        let dollar = this.state.currency === 'usd' ? this.state.amount : doCovert(this.state.amount, kshToDollar);
        let ksh = this.state.currency === 'ksh' ? this.state.amount : doCovert(this.state.amount, dollardToKsh);
        return(
            <div>
                <br />
                <CurrencyInputComponent amount={dollar} currency="usd" onAmountChange={this.handleDollarChange}/>
                <CurrencyInputComponent amount={ksh} currency='ksh' onAmountChange={this.handleKshChange}/>
            </div>
        );
    }
}

export default MoneyConverterComponent;