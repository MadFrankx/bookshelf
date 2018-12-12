import React from "react";
import styles from "./PopupAddBook.scss";

export default class PopupAddBook extends React.Component {
    constructor(props) {
        super(props);
        // this.state= {
        //     title: '',
        //     author: ''
        // }
    }

    titleInput = React.createRef();
    authorInput = React.createRef();

    // handleTitleChange = (event) => {
    //     this.setState({title: event.target.value});
    // };

    // handleAuthorChange = (event) => {
    //     this.setState({author: event.target.value});
    // };

    handleSubmit = (event) => {
       event.preventDefault();
        this.props.addBook(this.titleInput.current.value, 
                            this.authorInput.current.value);
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
                            // value= { this.state.title }  
                            ref= { this.titleInput }
                            placeholder="Title" />
                        </label>
                    </div>
                    <div>
                        <label>
                        <input 
                            className= { styles.data } 
                            type="text" 
                            // value= { this.state.author }
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