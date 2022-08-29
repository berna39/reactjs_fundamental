import React from "react";

// Basic form handling
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { name:'', os: ''};

        this.submited = this.submited.bind(this);
        this.somethingChanged = this.somethingChanged.bind(this);
    }

    submited(e){
        e.preventDefault();
        alert('Form submited with these data : '+JSON.stringify(this.state));
    }

    somethingChanged(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(<div>
                    <form onSubmit={this.submited}>
                        <input name="name" value={this.state.name} onChange={this.somethingChanged} placeholder="Enter your name"/>
                        <input name="os" id="os" value={this.state.os} onChange={this.somethingChanged} placeholder="Enter the OS you use"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>);
    }
}

export default Form;