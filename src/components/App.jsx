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
    modal_status: false,
    uploadedFiles: [],
    searched: [],
  };

  handleInputClicked = (value, e) => {
    e.preventDefault();
    this.setState({
      searched: this.state.items.filter(el => el.name === value),
    });
    console.log(this.state.searched);
  };

  setUploadedFiles = ({ id, url, name }) => {
    this.setState(prev => ({
      uploadedFiles: [
        ...prev.uploadedFiles,
        { id: id, image: { url: url }, name: name },
      ],
    }));

    console.log(this.state.uploadedFiles);
  };

  open_modal = () => {
    this.setState({ modal_status: true });
  };

  close_modal = () => {
    this.setState({ modal_status: false });
  };

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
    } else if (text === 'search') {
      this.setState({ page_id: 'search' });
    } else {
      console.log('something wrong');
    }
  };

  async componentDidMount() {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(res =>
        res.json().then(json => {
          this.setState({ status: true, items: json });
        })
      )
      .finally(this.setState({ status: false }));

    console.log(this.state.items);
  }

  addHistory = (text, item, only) => {
    let nan = nanoid();

    if (text === 'favorities' && only === true) {
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
    } else if (text === 'favorities' && only === false) {
      if (this.state.favorite.some(el => el.id === item.id)) {
        this.setState(prevState => ({
          history: [
            ...prevState.history,
            {
              id: nan,
              text: `Image id: ${item.id} was removed from favorities`,
              image: favorite,
            },
          ],
          favorite: [...prevState.favorite.filter(el => el.id !== item.id)],
        }));
      } else {
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
      }
    } else if (text === 'likes' && only === true) {
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
          ...prevState.liked,
          { id: item.id, breed: item.name, url: item.image.url },
        ],
      }));
    } else if (text === 'likes' && only === false) {
      if (this.state.liked.some(el => el.id === item.id)) {
        this.setState(prevState => ({
          history: [
            ...prevState.history,
            {
              id: nan,
              text: `Image id: ${item.id} was removed from likes`,
              image: likes,
            },
          ],
          liked: [...prevState.liked.filter(el => el.id !== item.id)],
        }));
      } else {
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
            ...prevState.liked,
            { id: item.id, breed: item.name, url: item.image.url },
          ],
        }));
      }
    } else if (text === 'dislikes' && only === true) {
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
          ...prevState.disliked,
          { id: item.id, breed: item.name, url: item.image.url },
        ],
      }));
    } else if (text === 'dislikes' && only === false) {
      if (this.state.disliked.some(el => el.id === item.id)) {
        this.setState(prevState => ({
          history: [
            ...prevState.history,
            {
              id: nan,
              text: `Image id: ${item.id} was removed from dislikes`,
              image: dislikes,
            },
          ],
          disliked: [...prevState.disliked.filter(el => el.id !== item.id)],
        }));
      } else {
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
            ...prevState.disliked,
            { id: item.id, breed: item.name, url: item.image.url },
          ],
        }));
      }
    }

    console.log(this.state.history);
  };

  voting_clicked_on = (e, page) => {
    let active = document.getElementsByClassName(styles.flex_item_active);
    console.log(active);
    if (e.currentTarget === active[0]) {
      e.currentTarget.classList.remove(styles.flex_item_active);
      this.setState({ page_id: 'default' });
    } else {
      active[0] && active[0].classList.remove(styles.flex_item_active);
      e.currentTarget.classList.add(styles.flex_item_active);

      this.setState({ page_id: page });
    }
  };

  render() {
    return (
      <div className={styles.app}>
        {this.state.modal_status && (
          <Upload
            setUploadedFiles={this.setUploadedFiles}
            close_modal={this.close_modal}
          />
        )}

        <div className={styles.left}>
          <img alt="" className={styles.logo} src={logo} />
          <p className={styles.hello}>Hi intern!</p>
          <p className={styles.welcome}>Welcome to MI 2022 Front-end test</p>
          <p className={styles.start}>Lets start using The Cat API</p>

          <div className={styles.container}>
            <div
              onClick={e => {
                this.voting_clicked_on(e, 'voting');
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
                this.voting_clicked_on(e, 'breeds');
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
                this.voting_clicked_on(e, 'gallery');
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
            searched={this.state.searched}
            onInputClicked={this.handleInputClicked}
            uploadedFiles={this.state.uploadedFiles}
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
            open_modal={this.open_modal}
            status={this.state.status}
          />
        )}
      </div>
    );
  }
}
