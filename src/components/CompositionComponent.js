import React from "react";


function BasicComponent(props){
    return(<div>
                <h1>{ props.title }</h1>
                <p>{ props.content }</p>
                <div>
                    { props.children }
                </div>
           </div>);
}


class CompositionComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
                    <BasicComponent title="My Title" content="The content">
                        <button>The child</button>
                    </BasicComponent>
               </div>);
    }
}

export default CompositionComponent;