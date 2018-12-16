import React from "react";
import star from '../../assets/starGreen.png';
import polygon from '../../assets/polygonTeal.png';
import styles from "./UserData.scss";

export default class UserData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= { styles.user }>
                    <img className= { styles.dataImage} src= { star } />
                    <h1 className= { styles.username }>{this.props.username}</h1>
                    <img className= { styles.dataImage } src= { polygon } />
            </div>
        );
    }
}