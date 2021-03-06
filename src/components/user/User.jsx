import React from "react";
import styles from "./User.scss";
import UserData from "../userData/UserData";
import BooksData from "../booksData/BooksData";


export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className= { styles.header }>
                    <UserData 
                        {...this.props}
                    />
                    <BooksData
                        { ...this.props }
                     />
                </div>
        );
    }
}