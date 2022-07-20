import { Component, Fragment } from 'react';
import styles from '../SearchResults/index.module.scss';

class SearchResults extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.menu}>
          <div className={styles.left}>
            <button type="button" className={styles.back}></button>
            <button type="button" className={styles.button}>
              SEARCH
            </button>
          </div>
        </div>

        <div className={styles.grid_container}>
          {this.props.searched.map(el => (
            <div className={styles.image_container}>
              <div className={styles.hovered}>
                <span>{el.name}</span>
              </div>
              <img alt="" src={el.image.url} />
              {el.name}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default SearchResults;
