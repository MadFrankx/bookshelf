import classNames from 'classnames';
import React from "react";
import styles from "./FriendsBook.scss";
import PopupEditQueue from "../popupEditQueue/PopupEditQueue";
import pencil from '../../assets/pencil.png';
import starGreen from '../../assets/starGreen.png';

export default class YourBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            added: false
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        })
      }
    
    changeQueue = () => {
        this.setState({
            added: !this.state.added
        });
    }

    render() {
        const popup = (this.state.visible ? <PopupEditQueue 
                                                            handleChangeQueue = { this.changeQueue }
                                                            /> : null);
        const starsDiv = (this.state.added ?
                        <div className= { styles.stars }>
                            <img className= { styles.dataImage} src= { this.props.awaitingImg1 } />
                            <img className= { styles.dataImage} src= { this.props.awaitingImg2 } />
                            <img className= { styles.dataImage} src= { starGreen } />
                        </div> :
                        <div className= { styles.stars }>
                        <img className= { styles.dataImage} src= { this.props.awaitingImg1 } />
                        <img className= { styles.dataImage} src= { this.props.awaitingImg2 } />
                    </div> 
            )
        return (
            <div>
                <div className= { styles.wrapper }>
                    <div className= { styles.user }>
                        <img className= { styles.dataImageStar} src= { this.props.imgSrc } title= { this.props.username }/>
                    </div>
                    <div className= { styles.user }>
                        <img className= { styles.dataImage} src= { this.props.statusImg } />
                    </div>
                    <div className= { styles.innerWrapper }>
                        <div>
                            <p><span>Title: </span> { this.props.title }</p>
                            <p><span>Author: </span>{ this.props.author }</p>
                        </div>
                        <div className= { styles.stats }>
                            <p className= { styles.awaiting }>AWAITING</p>
                            { starsDiv }
                        </div>
                    </div>
                    <div className= { styles.user }>
                    <img 
                        className= {classNames( styles.dataImage, styles.pencilImage )}
                        onClick={() => this.popup()} 
                        src= { pencil } />
                    </div>
                </div>
                {popup}
            </div>

        );
    }
}