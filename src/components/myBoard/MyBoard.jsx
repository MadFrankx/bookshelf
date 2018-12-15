import React from "react";
import styles from "./MyBoard.scss";
import YourBook from "../yourBook/YourBook";
import PopupAddBook from "../popupAddBook/PopupAddBook";
import pencil from '../../assets/pencil.png';
import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';


export default class MyBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            books: [],
            available: 0,
            lent: 0,
            borrowed: 0
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        });
      }

    handleAddBook = (title, author, status, index) => {
        this.setState( prevState => {
            return {
                visible: !this.state.visible,
                books: [
                    ...prevState.books,
                    {
                        key: index,
                        title: title,
                        author: author,
                        status: status
                    }
                ],
                available: this.state.available + 1
            }
        })

        console.log(this.state.books);
    }

    handleChangeStatus = (books) => {
        console.log("Change");
        books.forEach = (book) => {
            if (book.status == 'available') {
                this.setState({
                    available: this.state.available + 1
                });
            } else if (book.status == 'lent') {
                this.setState({
                    lent: this.state.lent + 1
                });
            } else if (book.status == 'borrowed') {
                this.setState({
                    borrowed: this.state.borrowed + 1
                });
        }
    }
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
                    {this.state.books.map( (book, index) =>
                        <YourBook 
                            changeStatus= { this.handleChangeStatus }
                            title= { book.title }
                            author= { book.author }
                            key= { index }
                        />
                    )}
                </div>
            );
        }
    }
}