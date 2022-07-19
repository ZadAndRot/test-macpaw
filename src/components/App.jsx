import { Component } from 'react';
import styles from '../components/index.module.scss';
import logo from '../components/images/logo.svg';
import vote_table from 'components/images/vote-table.svg';
import pet_breeds from 'components/images/pet-breeds.svg';
import images_search from 'components/images/images-search.svg';
import Voting from '../components/voting';
import Upload from './Upload';
import favorite from '../components/images/pink_heart.svg';
import likes from '../components/images/green_smile.svg';
import dislikes from '../components/images/yellow_smile.svg';
import { nanoid } from 'nanoid';
import RightDefaulf from '../components/Starting';

export class App extends Component {
  state = {
    page_id: 'default',
    status: false,
    items: [],
    person: {},
    history: [
      { id: 'id-1', text: 'Cat was added to favorities', image: favorite },
      { id: 'id-2', text: 'Cat was added to favorities', image: favorite },
      { id: 'id-3', text: 'Cat was added to favorities', image: favorite },
    ],
    favorite: [],
    liked: [],
    disliked: [],
  };

  back_to_breeds = () => {};

  showElementByName = e => {
    let item = {};

    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === e.target.value) {
        item = this.state.items[i];
      }
    }

    this.setState({ page_id: 'personal', person: item });
  };

  showFavorities = text => {
    console.log('hello');
    if (text === 'favourite') {
      this.setState({ page_id: 'favourite' });
    } else if (text === 'likes') {
      this.setState({ page_id: 'likes' });
    } else if (text === 'dislikes') {
      this.setState({ page_id: 'dislikes' });
    } else {
      console.log('something wrong');
    }
  };

  async componentDidMount() {
    fetch('https://api.thecatapi.com/v1/breeds').then(res =>
      res.json().then(json => {
        this.setState({ status: true, items: json });
      })
    );

    console.log(this.state.items);
  }

  addHistory = (text, item) => {
    console.log(text);
    let nan = nanoid();

    if (text === 'favorities') {
      this.setState(prevState => ({
        history: [
          ...prevState.history,
          {
            id: nan,
            text: `Image id: ${item.id} was added to favorities`,
            image: favorite,
          },
        ],
        favorite: [
          ...prevState.favorite,
          { id: item.id, breed: item.name, url: item.image.url },
        ],
      }));
    } else if (text === 'likes') {
      this.setState(prevState => ({
        history: [
          ...prevState.history,
          {
            id: nan,
            text: `Image id: ${item.id} was added to likes`,
            image: likes,
          },
        ],
        liked: [
          ...prevState.favorite,
          { id: item.id, breed: item.name, url: item.image.url },
        ],
      }));
    } else if (text === 'dislikes') {
      this.setState(prevState => ({
        history: [
          ...prevState.history,
          {
            id: nan,
            text: `Image id: ${item.id} was added to dislikes`,
            image: dislikes,
          },
        ],
        disliked: [
          ...prevState.favorite,
          { id: item.id, breed: item.name, url: item.image.url },
        ],
      }));
    }

    console.log(this.state.history);
  };

  // here is a part with pages
  //
  //-----------------------------------------------------------
  //------------------------------------------------------------

  voting_clicked = async (class_div, class_btn, e) => {
    let elem = e.currentTarget.children[0];
    let el = document.getElementsByClassName(class_div)[0];
    let btn = document.getElementsByClassName(class_btn)[0];
    console.log(el, btn);

    let vote_div = document.getElementsByClassName(styles.vote)[0];

    let pet_div = document.getElementsByClassName(styles.pet)[0];
    let images_div = document.getElementsByClassName(styles.images)[0];

    let vote_button = document.getElementsByClassName(styles.button_voting)[0];
    let pet_button = document.getElementsByClassName(styles.button_voting)[1];
    let images_button = document.getElementsByClassName(
      styles.button_voting
    )[2];

    console.log(vote_button);

    console.log(pet_button);

    console.log(images_button);

    if (elem.classList.contains(styles.pet)) {
      if (elem.classList.contains(styles.flex_item_active)) {
        elem.classList.remove(styles.flex_item_active);
        btn.classList.remove(styles.btn_active);

        vote_div.classList.remove(styles.flex_item_active);
        vote_button.classList.remove(styles.btn_active);
        images_div.classList.remove(styles.flex_item_active);
        images_button.classList.remove(styles.btn_active);
        this.setState({ page_id: 'default' });
        console.log('not active');
      } else {
        elem.classList.add(styles.flex_item_active);
        btn.classList.add(styles.btn_active);
        this.setState({ page_id: 'breeds' });
        console.log('active');
      }
    } else if (elem.classList.contains(styles.vote)) {
      if (elem.classList.contains(styles.flex_item_active)) {
        elem.classList.remove(styles.flex_item_active);
        btn.classList.remove(styles.btn_active);

        pet_div.classList.remove(styles.flex_item_active);
        pet_button.classList.remove(styles.btn_active);
        images_div.classList.remove(styles.flex_item_active);
        images_button.classList.remove(styles.btn_active);
        this.setState({ page_id: 'default' });
        console.log('not active');
      } else {
        console.log('not');
        elem.classList.add(styles.flex_item_active);
        btn.classList.add(styles.btn_active);
        this.setState({ page_id: 'voting' });
        console.log('active');
      }
    } else if (elem.classList.contains(styles.images)) {
      if (elem.classList.contains(styles.flex_item_active)) {
        elem.classList.remove(styles.flex_item_active);
        btn.classList.remove(styles.btn_active);

        vote_div.classList.remove(styles.flex_item_active);
        vote_button.classList.remove(styles.btn_active);
        pet_div.classList.remove(styles.flex_item_active);
        pet_button.classList.remove(styles.btn_active);
        this.setState({ page_id: 'default' });
        console.log('not active');
      } else {
        elem.classList.add(styles.flex_item_active);
        btn.classList.add(styles.btn_active);
        this.setState({ page_id: 'gallery' });
        console.log('active');
      }
    }
  };

  render() {
    // var { item, status } = this.state;

    return (
      <div className={styles.app}>
        <Upload/>
        {/* <button type='button' onClick={this.fn}>click</button>
        
        {this.state.status===true?<div>{this.state.item.map((el)=> el.id)}</div>:"Loading...."} */}
        <div className={styles.left}>
          <img alt="" className={styles.logo} src={logo} />
          <p className={styles.hello}>Hi intern!</p>
          <p className={styles.welcome}>Welcome to MI 2022 Front-end test</p>
          <p className={styles.start}>Lets start using The Cat API</p>

          <div className={styles.container}>
            <div
              onClick={e => {
                this.voting_clicked(styles.vote, styles.btn_voting, e);
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
                this.voting_clicked(styles.pet, styles.btn_breeds, e);
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
                this.voting_clicked(styles.images, styles.btn_gallery, e);
              }}
            >
              <div
                id="images"
                className={styles.flex_item + ' ' + styles.images}
              >
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

        {/* <RightDefaulf/> */}

        {this.state.page_id === 'default' ? (
          <RightDefaulf />
        ) : (
          <Voting
            showElementByName={this.showElementByName}
            person={this.state.person}
            showFavorities={this.showFavorities}
            items={this.state.items}
            favourities={this.state.favorite}
            likes={this.state.liked}
            dislikes={this.state.disliked}
            history={this.state.history}
            addHistory={this.addHistory}
            page_id={this.state.page_id}
          />
        )}
      </div>
    );
  }
}
