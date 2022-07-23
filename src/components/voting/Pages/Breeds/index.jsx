import { Component, Fragment } from 'react';
import styles from '../Breeds/index.module.scss';
import Grid5 from 'components/Grids/gtid5';
import Loader from 'components/Loader';

class Breeds extends Component {
  state = {
    page: 0,
    prevStatus: false,
    nextStatus: false,
    limit: 5,
  };

  changeLimit = e => {
    if (e.target.value === '5') {
      this.props.updateLimit(5);
    } else if (e.target.value === '10') {
      this.props.updateLimit(10);
    } else if (e.target.value === '15') {
      this.props.updateLimit(15);
    } else if (e.target.value === '20') {
      this.props.updateLimit(20);
    }
  };

  goToPrev = () => {
    this.props.updatePage(-1);
  };

  goToNext = () => {
    this.props.updatePage(1);
  };

  render() {
    const { showElementByName } = this.props;

    return (
      <Fragment>
        <div className={styles.menu}>
          <button
            onClick={() => {
              this.props.onGoBack();
            }}
            type="button"
            className={styles.back}
          ></button>
          <button type="button" className={styles.button}>
            BREEDS
          </button>
          <select
            onChange={e => {
              showElementByName(e);
            }}
            className={styles.all}
          >
            <option value="All items">All items</option>
            {this.props.all.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>

          <select
            onChange={e => {
              this.changeLimit(e);
            }}
            className={styles.limit}
          >
            <option value="5">Limit:5</option>
            <option value="10">Limit:10</option>
            <option value="15">Limit:15</option>
            <option value="20">Limit:20</option>
          </select>

          <button
            onClick={() => {
              this.props.handleOrderItems('asc');
            }}
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_down}
          ></button>
          <button
            onClick={() => {
              this.props.handleOrderItems('desc');
            }}
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_upp}
          ></button>
        </div>

        <Fragment>
          {this.props.status === true && (
            <Grid5 page="breeds" items={this.props.items} />
          )}
          {this.props.status === false && <Loader />}
          {this.props.status === true && (
            <div className={styles.button_container}>
              <button
                className={styles.pages + ' ' + styles.pages_prev}
                disabled={this.props.page === 0}
                onClick={e => {
                  this.goToPrev(e);
                }}
              >
                PREV
              </button>

              <button
                className={styles.pages + ' ' + styles.pages_next}
                disabled={!this.props.items === []}
                onClick={e => {
                  this.goToNext(e);
                }}
              >
                NEXT
              </button>
            </div>
          )}
        </Fragment>
      </Fragment>
    );
  }
}

export default Breeds;
