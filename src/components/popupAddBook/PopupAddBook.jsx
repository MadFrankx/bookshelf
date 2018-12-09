import React from "react";
import styles from "./PopupAddBook.scss";

export default class PopupAddBook extends React.Component {
    render() {
        return (
            <div className= { styles.wrapper }>
                <form>
                    <div>
                        <label>
                        <input className= { styles.data } type="text" placeholder="Title"/>
                        </label>
                    </div>
                    <div>
                        <label>
                        <input className= { styles.data } type="password" placeholder="Author"/>
                        </label>
                    </div>
                    <div>
                        <input className= { styles.add } type="submit" value="Add" />
                    </div>
                </form>
            </div>
        );
    }
}