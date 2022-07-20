import { Component } from 'react';
import styles from '../Gallery/index.module.scss';
import { Fragment } from 'react';
import Loader from 'components/Loader';
import { nanoid } from 'nanoid';

class Gallery extends Component {
  state = {
    status: false,
    items: [],
    limit: 5,
  };

  async componentDidMount() {
    fetch(
      `https://api.thecatapi.com/v1/breeds?&limit=${this.state.limit}&page=1`
    ).then(res =>
      res
        .json()
        .then(json => {
          this.setState(prev => ({
            status: true,
            items: [...this.props.uploadedFiles, ...json],
          }));
          console.log(json);
        })
        .finally(this.setState({ status: false }))
    );
  }

  getMore = e => {
    if (e.target.value === '5') {
      this.setState(prev => ({ limit: 5 }));
    } else if (e.target.value === '10') {
      this.setState(prev => ({ limit: 10 }));
    } else if (e.target.value === '15') {
      this.setState(prev => ({ limit: 15 }));
    } else if (e.target.value === '20') {
      this.setState(prev => ({ limit: 20 }));
    }
  };

  loadMore = e => {
    this.setState(prev => ({ limit: prev.limit + 5 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit) {
      fetch(
        `https://api.thecatapi.com/v1/breeds?&limit=${
          this.props.uploadedFiles.length < this.state.limit &&
          this.state.limit - this.props.uploadedFiles.length
        }`
      ).then(res =>
        res
          .json()
          .then(json => {
            this.setState(prev => ({
              status: true,
              items: [...this.props.uploadedFiles, ...json],
            }));
            console.log(json);
          })
          .finally(this.setState({ status: false }))
      );
    }
  }

  getRandom = () => {
    return Math.random();
  };

  handleOrder = e => {
    if (e.target.value === 'asc') {
      this.setState({
        items: this.state.items.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }),
      });
    } else if (e.target.value === 'desc') {
      this.setState({
        items: this.state.items.sort(function (a, b) {
          return b.name.localeCompare(a.name);
        }),
      });
    } else if (e.target.value === 'random') {
      this.setState({
        items: this.state.items.sort(function (a, b) {
          return Math.random() <= 0.5 ? -1 : 1;
        }),
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className={styles.menu}>
          <div className={styles.left}>
            <button
              type="button"
              className={styles.back}
              onClick={() => {
                this.getElementsForGrid5();
              }}
            ></button>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                this.getElementsForGrid5();
              }}
            >
              GALLERY
            </button>
          </div>
          <button
            onClick={() => {
              this.props.open_modal();
            }}
            type="button"
            className={styles.upload}
          >
            Upload
          </button>
        </div>
        <form className={styles.form}>
          <div>
            <label for="select" className={styles.lable}>
              ORDER
            </label>
            <select
              id="select"
              onChange={e => {
                this.handleOrder(e);
              }}
              className={styles.select}
            >
              <option value="random">Random</option>
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>
            <label className={styles.lable}>TYPE</label>
            <select className={styles.select}>
              <option value="all">All</option>
              <option value="static">Static</option>
              <option value="animated">Animated</option>
            </select>
          </div>
          <div>
            <label className={styles.lable}>BREED</label>
            <select className={styles.select}>
              <option value="none">None</option>
              <option>Abssian</option>
              <option>Cat</option>
            </select>
            <label className={styles.lable}>LIMIT</label>
            <div>
              <select
                onChange={e => {
                  this.getMore(e);
                }}
                className={styles.select}
              >
                <option value="5">5 items per page</option>
                <option value="10">10 items per page</option>
                <option value="15">15 items per page</option>
                <option value="20">20 items per page</option>
              </select>
              <button className={styles.scroll} />
            </div>
          </div>
        </form>
        <div className={styles.gallery}>
          {this.state.items.map(item => (
            <div className={styles.image_container}>
              <div className={styles.hovered}>
                <button
                  onClick={() => {
                    this.props.addHistory('likes', item, false);
                  }}
                ></button>
              </div>
              <img
                key={nanoid()}
                className={styles.image}
                src={item.image.url}
                alt={item.id}
              />
            </div>
          ))}
        </div>
        {this.state.status === false && <Loader />}
        <button
          onClick={() => {
            this.loadMore();
          }}
          className={styles.more}
        >
          Upload photo
        </button>
      </Fragment>
    );
  }
}

export default Gallery;
