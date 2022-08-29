import React from "react";

class ListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { teams: [ 'Madrid', 'Milan', 'Ajax', 'Liverpool', 'bayern', 'Al Ahly', 'Mazembe' ] };
    }

    render(){
        return(<div>
                    <ul>
                        { this.state.teams.map((team) =>  <li key={team}>{ team }</li> ) }
                    </ul>
                </div>);
    }
}

export default ListComponent;