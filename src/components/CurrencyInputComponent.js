import React from "react";

const currencies = {
    usd: 'Dollar (Us)',
    ksh: 'Kenyan Shilling'
};

class CurrencyInputComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { amount: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ amount: e.target.value});
    }

    render(){
        return(<div>
                    <fieldset>
                        <legend>Enter amount in {currencies[this.props.currency]}:</legend>
                        <input value={this.state.amount} onChange={this.handleChange} />
                    </fieldset>
                </div>);
    }
}

export default CurrencyInputComponent;