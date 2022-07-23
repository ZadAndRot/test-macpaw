import { Component } from 'react';
import styles from '../components/index.module.scss';
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
import BurgerMenu from './BurgerMenu';

export class App extends Component {
  state = {
    light: true,
    page_id: 'default',
    status: false,
    all: [],
    items: [],
    person: {},
    limit: 5,
    page: 1,
    path: ['default'],
    history: [],
    favorite: [],
    liked: [],
    disliked: [],
    modal_status: false,
    uploadedFiles: [],
    searched: [],
    openMenu: false,
  };

  openMenu = () => {
    this.setState(prev => ({ openMenu: !prev.openMenu }));
  };

  handleGoBack = () => {
    this.setState(prev => ({ page_id: prev.path[prev.path.length - 2] }));
  };

  updatePage = number => {
    this.setState(prev => ({ page: prev.page + number }));
  };

  updateLimit = limit => {
    this.setState({ limit: limit });
  };

  handleOrderItems = e => {
    if (e === 'asc') {
      this.setState({
        items: this.state.items.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }),
      });
    } else if (e === 'desc') {
      this.setState({
        items: this.state.items.sort(function (a, b) {
          return b.name.localeCompare(a.name);
        }),
      });
    }
  };

  handleInputClicked = (value, e) => {
    e.preventDefault();
    this.setState({
      searched: this.state.all.filter(el => el.name.includes(value)),
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
  };

  open_modal = () => {
    this.setState({ modal_status: true });
  };

  close_modal = () => {
    this.setState({ modal_status: false });
  };

  showElementByName = e => {
    let item = {};

    for (let i = 0; i < this.state.all.length; i++) {
      if (this.state.all[i].id === e.target.value) {
        item = this.state.all[i];
        this.setState({ page_id: 'personal', person: item });
        this.setState(prev => ({ path: [...prev.path, 'personal'] }));
      }
    }
    if (e.target.value === 'all') {
      this.setState({ page_id: 'gallery' });
      this.setState(prev => ({ path: [...prev.path, 'gallery'] }));
    }
  };

  showFavorities = text => {
    console.log('hello');
    if (text === 'favourite') {
      this.setState({ page_id: 'favourite' });
      this.setState(prev => ({ path: [...prev.path, 'favourite'] }));
    } else if (text === 'likes') {
      this.setState({ page_id: 'likes' });
      this.setState(prev => ({ path: [...prev.path, 'likes'] }));
    } else if (text === 'dislikes') {
      this.setState({ page_id: 'dislikes' });
      this.setState(prev => ({ path: [...prev.path, 'dislikes'] }));
    } else if (text === 'search') {
      this.setState({ page_id: 'search' });
      this.setState(prev => ({ path: [...prev.path, 'search'] }));
    } else {
      console.log('something wrong');
    }
  };

  toggleClicked = e => {
    this.setState(prev => ({ light: !prev.light }));

    console.log(e.target);
  };

  async componentDidMount() {
    fetch(
      `https://api.thecatapi.com/v1/breeds?&limit=${this.state.limit}&page=${this.state.page}`
    ).then(res =>
      res
        .json()
        .then(json => {
          this.setState({
            status: true,
            items: json.filter(el =>
              Object.keys(el).some(key =>
                key === 'image'
                  ? true:false
              )
            ),
          });
        })
        .finally(this.setState({ status: false }))
    );

    // this.setState(prev=>({limit:prev.limit+1}))

    fetch(`https://api.thecatapi.com/v1/breeds`).then(res =>
      res
        .json()
        .then(json => {
          this.setState({
            status:true,
            all: json.filter(el =>
              Object.keys(el).some(key =>
                key === 'image'
                  ? true:false
              )
            ),
          });
        })
        .finally(this.setState({ status: false }))
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.limit !== this.state.limit ||
      prevState.page !== this.state.page
    ) {
      fetch(
        `https://api.thecatapi.com/v1/breeds?&limit=${this.state.limit}&page=${this.state.page}`
      ).then(res =>
        res
          .json()
          .then(json => {
            this.setState(prev => ({
              status: true,
              items: [
                ...json.filter(el =>
                  Object.keys(el).some(key =>
                    key === 'image'
                      ?true:false
                  )
                ),
              ],
            }));
            console.log(json);
          })
          .finally(this.setState({ status: false }))
      );
    //   () => {
    //     return true;
    //   }
    // : () => {
    //     this.setState(prev => ({ limit: prev.limit + 1 }));
    //     return false;
    //   }
    }
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
              id: item.id,
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
              id: item.id,
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
    if (e.currentTarget === active[0]) {
      e.currentTarget.classList.remove(styles.flex_item_active);
      this.setState({ page_id: 'default' });
      this.setState(prev => ({ path: [...prev.path, 'default'] }));
    } else {
      active[0] && active[0].classList.remove(styles.flex_item_active);
      e.currentTarget.classList.add(styles.flex_item_active);

      this.setState({ page_id: page });
      this.setState(prev => ({ path: [...prev.path, page] }));
    }
  };

  render() {
    return (
      <div className={this.state.light ? styles.app_light : styles.app_dark}>
        <div className={styles.app}>
          {this.state.modal_status && (
            <Upload
              setUploadedFiles={this.setUploadedFiles}
              close_modal={this.close_modal}
            />
          )}
          {this.state.openMenu && (
            <BurgerMenu
              openMenu={this.openMenu}
              voting_clicked_on={this.voting_clicked_on}
            />
          )}

          <div className={styles.left}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div className={styles.logo}></div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className={styles.eye}></div>
                  <button
                    onClick={e => {
                      this.toggleClicked(e);
                    }}
                    className={styles.toggle}
                  >
                    <span className={styles.on}></span>
                  </button>
                </div>
              </div>
            </div>
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

          {this.state.page_id === 'default' ? (
            <RightDefaulf />
          ) : (
            <Voting
              limit={this.state.limit}
              onOpenMenu={this.openMenu}
              voting_clicked_on={this.voting_clicked_on}
              page={this.state.page}
              onGoBack={this.handleGoBack}
              all={this.state.all}
              updatePage={this.updatePage}
              updateLimit={this.updateLimit}
              handleOrderItems={this.handleOrderItems}
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
      </div>
    );
  }
}
