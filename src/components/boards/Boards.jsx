import React from "react";
import styles from "./Boards.scss";
import MyBoard from "../myBoard/MyBoard";
import FriendsBoard from "../friendsBoard/FriendsBoard";

export default class Boards extends React.Component {
    render() {
        return (
            <div className= { styles.wrapper }>
                <MyBoard />
                <FriendsBoard />
            </div>
        );
    }
}