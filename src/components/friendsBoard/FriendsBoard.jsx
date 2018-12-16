import React from "react";
import styles from "./FriendsBoard.scss";
import FriendsBook from "../friendsBook/FriendsBook";
import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';
import starBlue from '../../assets/starBlue.png';
import starYellow from '../../assets/starYellow.png';
import starPurple from '../../assets/starPurple.png';

export default class FriendsBoards extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            friendsBooks: [
                {
                    title: 'Pride and Prejudice',
                    author: 'Jane Austen',
                    imgSrc: starBlue,
                    statusImg: lent,
                    awaitingImg1: starYellow,
                    awaitingImg2: starPurple,
                    username: "JohnyBravo"
                },
                {
                    title: '1984',
                    author: 'George Orwell',
                    imgSrc: starPurple,
                    statusImg: available,
                    awaitingImg1: starYellow,
                    awaitingImg2: starBlue,
                    username: "Jack McDonald"
                },
                {
                    title: 'To Kill a Mockingbird',
                    author: 'Harper Lee',
                    imgSrc: starPurple,
                    statusImg: lent,
                    awaitingImg1: starYellow,
                    awaitingImg2: starBlue,
                    username: "Jack McDonald"
                },
                {
                    title: 'The God of Small Things',
                    author: 'Arundhati Roy',
                    imgSrc: starYellow,
                    statusImg: borrowed,
                    awaitingImg1: starBlue,
                    awaitingImg2: starPurple,
                    username: "Amy Griffin"
                },
                {
                    title: 'Wolf Hall',
                    author: 'Hilary Mantel',
                    imgSrc: starBlue,
                    statusImg: available,
                    awaitingImg1: starYellow,
                    awaitingImg2: starPurple,
                    username: "JohnyBravo"
                },
                {
                    title: 'Frankenstein',
                    author: 'Mary Shelley',
                    imgSrc: starPurple,
                    statusImg: available,
                    awaitingImg1: starYellow,
                    awaitingImg2: starBlue,
                    username: "Jack McDonald"
                },
                {
                    title: 'Lord of the Flies',
                    author: 'William Golding',
                    imgSrc: starBlue,
                    statusImg: borrowed,
                    awaitingImg1: starYellow,
                    awaitingImg2: starPurple,
                    username: "JohnyBravo"
                },
                {
                    title: 'Midnight’s Children',
                    author: 'Salman Rushdie',
                    imgSrc: starBlue,
                    statusImg: borrowed,
                    awaitingImg1: starYellow,
                    awaitingImg2: starPurple,
                    username: "JohnyBravo"
                },
                {
                    title: 'Jane Eyre',
                    author: 'Charlotte Bronte',
                    imgSrc: starYellow,
                    statusImg: lent,
                    awaitingImg1: starBlue,
                    awaitingImg2: starPurple,
                    username: "Amy Griffin"
                },
            ]
        }
    }
    render() {
        return (
            <div className= { styles.wrapper }>
                <h1 className= { styles.board }>Books From Your Group</h1>
                {this.state.friendsBooks.map( (book, index) =>
                        <FriendsBook 
                            statusImg= { book.statusImg }
                            imgSrc= { book.imgSrc }
                            awaitingImg1= { book.awaitingImg1 }
                            awaitingImg2= { book.awaitingImg2 }
                            title= { book.title }
                            author= { book.author }
                            username= { book.username }
                            key= { index }
                        />
                    )}
            </div>
        );
    }
}