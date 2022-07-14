import { Component, Fragment } from 'react';
import styles from '../Like_dislike/index.module.scss';

class Like extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.menu}>
          <button type="button" className={styles.back}>
            H
          </button>
          <button type="button" className={styles.button}>
            {this.props.title}
          </button>
        </div>
        <div className={styles.photo_container}>
          {this.props.items.map(el => (
            <div key={el.id} className={styles.image_container}>
              <div className={styles.popup}></div>
              <img alt={el.id} src={el.url} className={styles.img} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Like;
