import { Component, Fragment } from 'react';
import styles from '../Breeds/index.module.scss';

class Breeds extends Component {
  render() {
    const { showElementByName } = this.props;

    return (
      <Fragment>
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.back}
            onClick={() => {
              this.getNames();
            }}
          ></button>
          <button type="button" className={styles.button}>
            VOTING
          </button>
          <select
            onChange={e => {
              showElementByName(e);
            }}
            className={styles.all}
          >
            <option value="All items">All items</option>
            {this.props.items.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>

          <select className={styles.limit}>
            <option>Limit:5</option>
            <option>Limit:10</option>
            <option>Limit:15</option>
            <option>Limit:10</option>
          </select>

          <button
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_down}
          ></button>
          <button
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_down}
          ></button>
        </div>

        <div>
          <div className={styles.grid_container}>
            <div className={styles.item1 + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item2 + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item3 + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item4 + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item5 + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.grid_container_reverse}>
            <div className={styles.item1_rev + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item2_rev + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item3_rev + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item4_rev + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
            <div className={styles.item5_rev + ' ' + styles.item}>
              <img
                className={styles.item_img}
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Breeds;
