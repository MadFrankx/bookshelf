import React from "react";
import styles from "./Dashboard.scss";
import User from "../user/User";
import MyBoard from "../myBoard/MyBoard";
import FriendsBoard from "../friendsBoard/FriendsBoard";

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

    handleAddBook = ( state) => {
        this.setState({
                state: state,
                owned: this.state.owned + 1
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <User 
                    status= { this.state.status }
                />
                { console.log(this.state)}
                    <div className= { styles.wrapper }>
                        <MyBoard handleUpdateState = { this.handleAddBook }
                                onChange = { this.handleAddBook }        
                        />
                        <FriendsBoard />
                    </div>
            </div>
        );
    }
}
