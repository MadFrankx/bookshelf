import React from "react";
import User from "../user/User";
import Boards from "../boards/Boards";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            available: 0,
            lent: 0,
            borrowed: 0,
            owned: 0
        }
    }

    render() {
        return (
            <div>
                <User 
                    available= { this.state.available }
                    lent= { this.state.lent }
                    borrowed= { this.state.borrowed }
                    owned= { this.state.owned }
                />
                { console.log(this.state)}
                <Boards available= {this.state.available}/>
            </div>
        );
    }
}
