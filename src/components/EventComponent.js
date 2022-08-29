import React from "react";

class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.myMethod = this.myMethod.bind(this);
    }

    myMethod(){
        alert('Event trigred');
    }

    render(){
        return(<div>
                    <button onClick={this.myMethod}>Trigger</button>
                </div>);
    }
}

export default EventComponent;