import React from "react";
import styles from "./Boards.scss";
import MyBoard from "../myBoard/MyBoard";
import FriendsBoard from "../friendsBoard/FriendsBoard";

export default class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            available: this.props.available
        }
    }


    render() {
        return (
            <div className= { styles.wrapper }>
                <MyBoard available= {this.props.available}/>
                <FriendsBoard />
                { console.log(this.state)}

            </div>
        );
    }
}