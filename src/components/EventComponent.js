import React from "react";

// Very basic event reactive component
class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.myMethod = this.myMethod.bind(this);
    }

    myMethod(){
        alert('Event triggered');
    }

    myOtherMethod(){
        alert('Other Event triggered');
    }

    render(){
        return(<div>
                    <button onClick={this.myMethod}>Click on me</button>
                    <button onClick={() => this.myOtherMethod()}>Or me</button>
                </div>);
    }
}

export default EventComponent;