import React from "react";
import styles from "./MyBoard.scss";
import YourBook from "../yourBook/YourBook";
import PopupAddBook from "../popupAddBook/PopupAddBook";
import pencil from '../../assets/pencil.png';


export default class MyBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        })
      }

    render() {
        const popup = (this.state.visible ? <PopupAddBook /> : null);
        return (
            <div className= { styles.wrapper }>
                <h1 className= { styles.board }>Your Books
                    <img className= { styles.dataImage} onClick={() => this.popup()} src= { pencil } />
                </h1>
                { popup }
                <YourBook />
                <YourBook />
                <YourBook />
                <YourBook />
                <YourBook />
                <YourBook />
                <YourBook />
                <YourBook />
            </div>
        );
    }
}