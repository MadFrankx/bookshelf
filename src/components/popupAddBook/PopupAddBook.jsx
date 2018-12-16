import React from "react";
import styles from "./PopupAddBook.scss";

export default class PopupAddBook extends React.Component {
    constructor(props) {
        super(props);
    }

    titleInput = React.createRef();
    authorInput = React.createRef();

    handleSubmit = (event) => {
       event.preventDefault();
        this.props.addBook(this.titleInput.current.value, 
                            this.authorInput.current.value,
                            "available");
        event.currentTarget.reset();
    };

    render() {
        return (
            <div className= { styles.wrapper }>
                <form onSubmit= { this.handleSubmit }>
                    <div>
                        <label>
                        <input 
                            className= { styles.data } 
                            type="text"
                            ref= { this.titleInput }
                            placeholder="Title" />
                        </label>
                    </div>
                    <div>
                        <label>
                        <input 
                            className= { styles.data } 
                            type="text" 
                            ref= { this.authorInput }
                            placeholder="Author"/>
                        </label>
                    </div>
                    <div>
                        <input className= { styles.add }
                            type="submit" 
                            value="Add" />
                    </div>
                </form>
            </div>
        );
    }
}