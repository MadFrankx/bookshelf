import React from "react";
import User from "../user/User";
import Boards from "../boards/Boards";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <User />
                <Boards />
            </div>
        );
    }
}
