import React from "react";
import styles from "./MyBoard.scss";
import YourBook from "../yourBook/YourBook";
import PopupAddBook from "../popupAddBook/PopupAddBook";
import pencil from '../../assets/pencil.png';


export default class MyBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            books: [],
            
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        })
      }

    handleAddBook = (title, author, index) => {
        this.setState( prevState => {
            return {
                visible: !this.state.visible,
                books: [
                    ...prevState.books,
                    {
                        key: index,
                        title: title,
                        author: author,
                    }
                ],
                available: this.props.available + 1
            }
        })
        console.log(this.state);
    }

    render() {
        if (this.state.visible ||
            (this.state.books.title === '') ||
            (this.state.books.author === '')) {
            return (
                <div className= { styles.wrapper }>
                    <h1 className= { styles.board }>Your Books
                        <img className= { styles.dataImage} onClick={() => this.popup()} src= { pencil } />
                    </h1>
                    <PopupAddBook addBook= { this.handleAddBook }/>
                </div>
            );
        } else {
            return (
                <div className= { styles.wrapper }>
                    <h1 className= { styles.board }>Your Books
                        <img className= { styles.dataImage} onClick={() => this.popup()} src= { pencil } />
                    </h1>
                    {this.state.books.map( (book) =>
                        <YourBook 
                            title= { book.title }
                            author= { book.author }
                        />
                    )}
                </div>
            );
        }
    }
}