import { Component, Fragment } from 'react';
import styles from '../Voting_page/index.module.scss';

import Action from '../../Actions';

class VotingPage extends Component {

  handleGetRandomItem=()=>{
    let number = Math.floor(Math.random()*66);
    return number
    

  }
  
  render() {
    const {addHistory,history,items}=this.props;
    return (
      <Fragment>
        <div>
          <button className={styles.back}>H</button>
          <button className={styles.button}>VOTING</button>
        </div>

        <div className={styles.page}>
          <div className={styles.image_container}>
            <img
              className={styles.ava}
              src={items[this.handleGetRandomItem()].image.url}
              alt={items[this.handleGetRandomItem()].name}
            />
          </div>
          <div className={styles.voting_button}>
            <div
              className={styles.like}
              onClick={() => {
                addHistory('likes',items[this.handleGetRandomItem()]);
              }}
            ></div>
            <div
              className={styles.favorities}
              onClick={() => {
                addHistory('favorities',items[this.handleGetRandomItem()]);
              }}
            ></div>
            <div
              className={styles.dislike}
              onClick={() => {
                addHistory('dislikes',items[this.handleGetRandomItem()]);
              }}
            ></div>
          </div>
          {history.map(el => (
            <Action key={el.id} text={el.text} image={el.image} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default VotingPage;
