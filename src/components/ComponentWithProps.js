import React from "react";

// in this component i show how props can be sent to a child component
class ComponentWithProps extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
                    <p>Props passed : { this.props.firstProp }</p>
                </div>);
    }
}

export default ComponentWithProps;