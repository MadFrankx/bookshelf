import React from "react";
import styles from "./User.scss";
import UserData from "../userData/UserData";
import BooksData from "../booksData/BooksData";


export default class User extends React.Component {
    render() {
        return (
                <div className= { styles.dashboard }>
                    <UserData />
                    <BooksData />
                </div>
        );
    }
}