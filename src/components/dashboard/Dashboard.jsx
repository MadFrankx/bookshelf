import React from "react";
import styles from "./Dashboard.scss";
import User from "../user/User";
import MyBoard from "../myBoard/MyBoard";
import FriendsBoard from "../friendsBoard/FriendsBoard";
import Footer from "../footer/Footer";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            available: 0,
            lent: 0,
            borrowed: 0,
            username: this.props.match.params.username
        }
    }

    handleBooksUpdated = (books) => {
        const booksStatus = {
            available: 0,
            lent: 0,
            borrowed: 0,
        };

        books.forEach(book => {
            booksStatus[book.status] ++;
        });

        this.setState(booksStatus);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <User 
                    { ...this.state }
                />
                <div className= { styles.wrapper }>
                    <MyBoard 
                        onBooksUpdated = { this.handleBooksUpdated }      
                    />
                    <FriendsBoard />
                </div>
                <Footer />
            </div>
        );
    }
}
