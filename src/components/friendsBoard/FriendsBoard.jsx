import React from "react";
import styles from "./FriendsBoard.scss";
import FriendsBook from "../friendsBook/FriendsBook";

export default class FriendsBoards extends React.Component {
    render() {
        return (
            <div className= { styles.wrapper }>
                <h1 className= { styles.board }>Books From Your Group</h1>
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
                <FriendsBook />
            </div>
        );
    }
}