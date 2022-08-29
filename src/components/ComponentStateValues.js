import React from "react";

// In this component i show how state can be changed
class ComponentStateValues extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: 1 };
    }

    doubler = () => {
        this.setState((state) => ({
            value: state.value *= 2
        }));
    }

    render(){
        return(<div>
                    <button onClick={this.doubler}>Double value { this.state.value }</button>
               </div>);
    }
}

export default ComponentStateValues;