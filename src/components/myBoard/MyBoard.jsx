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
            books: []
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return JSON.stringify(nextState) !== JSON.stringify(this.state);
    }

    componentDidUpdate = () => {
        this.props.onBooksUpdated(this.state.books);
    }

    popup = () => {
        this.setState({
          visible: !this.state.visible
        });
      }

    handleAddBook = (title, author, status) => {
        this.setState( prevState => {
            return {
                visible: !prevState.visible,
                books: [
                    ...prevState.books,
                    {
                        title: title,
                        author: author,
                        status: status,
                        id: Date.now()
                    }
                ]
            }
        });
        console.log(this.state.books);
    }

    handleBookStatusChange = (idBook, newStatus) => {
        this.setState( prevState => {
            const booksCopy = JSON.parse(JSON.stringify(prevState.books));
            const bookIndex = booksCopy.findIndex(book => book.id === idBook);
            booksCopy[bookIndex].status = newStatus;
            return {
                books: booksCopy
            };
        });
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
                            onStatusChanged= { (bookStatus) => this.handleBookStatusChange(book.id, bookStatus) }
                            title= { book.title }
                            author= { book.author }
                            key= { index }
                            status= { book.status }
                        />
                    )}
                </div>
            );
        }
    }
}