import React from "react";

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