import { Component, Fragment } from 'react';
import styles from '../Like_dislike/index.module.scss';
import like from '../images/green_smile.svg';
import dislike from '../images/dislike_hover.svg';
import favourite from '../images/heart_default.svg';


class Like extends Component {
  state = {
    favorities: [],
    likes: [],
    dislikes: [],
  };

  handleAddToHistory = (type, id) => {
    
    if (type === 'favorities') {
      this.setState(prev => ({
        favorities: [...prev.favorities, { id: id }],
      }));
    } else if (type === 'likes') {
      this.setState(prev => ({
        likes: [...prev.likes, { id: id }],
      }));
    } else if (type === 'dislikes') {
      this.setState(prev => ({
        dislikes: [...prev.dislikes, { id: id }],
      }));
    }
  };

  render() {
    const { text, addHistory } = this.props;
    return (
      <Fragment>
        <div className={styles.menu}>
          <button onClick={()=>{this.props.onGoBack()}} type="button" className={styles.back}>
            H
          </button>
          <button type="button" className={styles.button}>
            {this.props.title}
          </button>
        </div>
        <div className={styles.photo_container}>
          {this.props.items.map(el => (
            <div key={el.id} className={styles.image_container}>
              <div className={styles.popup}>
                <button type="button"
                  onClick={() => {
                    addHistory(text, el, false);
                    this.handleAddToHistory(text, el.id);
                  }}
                >
                  {text === 'favorities' && <img src={favourite} alt="" />}
                  {text === 'dislikes' && <img src={dislike} alt="" />}
                  {text === 'likes' && <img src={like} alt="" />}
                </button>
              </div>
              <img src={el.url} alt={el.id} className={styles.img} />
            </div>
          ))}
        </div>
        <div className={styles.history_block}>
          {text === 'favorities' &&
            this.state.favorities.map(el => (
              <div key={el.id} className={styles.history_container}>
                <div className={styles.time}>
                  {new Date().getHours().toLocaleString() +
                    ':' +
                    new Date().getMinutes().toLocaleString()}
                </div>
                <div className={styles.history}>
                  Item ID: <span>{el.id}</span> was removed from favorite
                </div>
              </div>
            ))}
          {text === 'likes' &&
            this.state.likes.map(el => (
              <div key={el.id} className={styles.history_container}>
                <div className={styles.time}>
                  {new Date().getHours().toLocaleString() +
                    ':' +
                    new Date().getMinutes().toLocaleString()}
                </div>
                <div className={styles.history}>
                  Item ID: <span>{el.id}</span> was removed from likes
                </div>
              </div>
            ))}
          {text === 'dislikes' &&
            this.state.dislikes.map(el => (
              <div key={el.id} className={styles.history_container}>
                <div className={styles.time}>
                  {new Date().getHours().toLocaleString() +
                    ':' +
                    new Date().getMinutes().toLocaleString()}
                </div>
                <div className={styles.history}>
                  Item ID: <span>{el.id}</span> was removed from dislikes
                </div>
              </div>
            ))}
        </div>
      </Fragment>
    );
  }
}

export default Like;
