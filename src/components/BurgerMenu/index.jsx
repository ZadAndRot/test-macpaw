import { Component } from 'react';
import styles from '../BurgerMenu/index.module.css';
import vote_table from '../images/vote-table.svg';
import pet_breeds from '../images/pet-breeds.svg';
import images_search from '../images/images-search.svg';

class BurgerMenu extends Component {
  render() {
    const { voting_clicked_on } = this.props;

    return (
      <div className={styles.page}>
        <button
          onClick={() => {
            this.props.openMenu();
          }}
          className={styles.close}
        ></button>
        <div className={styles.container}>
          <div
            onClick={e => {
              voting_clicked_on(e, 'voting');
              this.props.openMenu();
            }}
          >
            <div className={styles.flex_item + ' ' + styles.vote}>
              <img alt="" className={styles.img} src={vote_table} />
            </div>

            <button className={styles.btn_voting + ' ' + styles.btn}>
              VOTING
            </button>
          </div>

          <div
            onClick={e => {
              voting_clicked_on(e, 'breeds');
              this.props.openMenu();
            }}
          >
            <div id="pet" className={styles.flex_item + ' ' + styles.pet}>
              <img alt="" className={styles.img} src={pet_breeds} />
            </div>

            <button className={styles.btn_breeds + ' ' + styles.btn}>
              BREEDS
            </button>
          </div>

          <div
            onClick={e => {
              voting_clicked_on(e, 'gallery');
              this.props.openMenu();
            }}
          >
            <div id="images" className={styles.flex_item + ' ' + styles.images}>
              <img alt="" className={styles.img} src={images_search} />
            </div>

            <button
              id="images_button"
              className={styles.btn_gallery + ' ' + styles.btn}
            >
              GALLERY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
