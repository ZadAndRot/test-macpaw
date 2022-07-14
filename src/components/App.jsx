import { Component } from 'react';
import styles from '../components/index.module.scss';
import logo from '../components/images/logo.svg';
import vote_table from 'components/images/vote-table.svg';
import pet_breeds from 'components/images/pet-breeds.svg';
import images_search from 'components/images/images-search.svg';
import Voting from './voting';

export class App extends Component {
  // state = {
  //   item: [],
  //   status: false,
  // };
  // https://api.thecatapi.com/v1/breeds?limit=10&page=0
  // fn = () => {
  //   fetch('https://api.thecatapi.com/v1/breeds?')
  //     .then(x => x.json())
  //     .then(y => {
  //       this.setState({ item: y, status: true });
  //     });
  // };

  render() {
    // var { item, status } = this.state;

    return (
      <div className={styles.app}>
        {/* <button type='button' onClick={this.fn}>click</button>
        
        {this.state.status===true?<div>{this.state.item.map((el)=> el.id)}</div>:"Loading...."} */}
        <div className={styles.left}>
          <img alt="" className={styles.logo} src={logo} />
          <p className={styles.hello}>Hi intern!</p>
          <p className={styles.welcome}>Welcome to MI 2022 Front-end test</p>
          <p className={styles.start}>Lets start using The Cat API</p>
          <div className={styles.container}>
            <div>
              <div className={styles.flex_item + ' ' + styles.vote}>
                <img alt="" className={styles.img} src={vote_table} />
              </div>

              <button className={styles.btn_voting + ' ' + styles.btn}>
                VOTING
              </button>
            </div>

            <div>
              <div className={styles.flex_item + ' ' + styles.pet}>
                <img alt="" className={styles.img} src={pet_breeds} />
              </div>

              <button className={styles.btn_breeds + ' ' + styles.btn}>
                BREEDS
              </button>
            </div>

            <div >
              <div className={styles.flex_item + ' ' + styles.images}>
              <img alt="" className={styles.img} src={images_search} />
              </div>
              
              <button className={styles.btn_gallery + ' ' + styles.btn}>
                GALLERY
              </button>
            </div>
          </div>
        </div>

        {/* <RightDefaulf/> */}
        <Voting/>

        
      </div>
    );
  }
}
