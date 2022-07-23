import { Component, Fragment } from 'react';
import styles from '../Grids/index.module.scss';
import like from '../images/green_smile.svg';
import dislike from '../images/dislike_hover.svg';
import favourite from '../images/heart_default.svg';

class Grid5 extends Component {
  hover = e => {
    e.currentTarget.children[0].classList.add(styles.hovered);
  };

  leave = e => {
    e.currentTarget.children[0].classList.remove(styles.hovered);
  };

  hoverBtn = e => {
    e.currentTarget.children[0].classList.add(styles.hovered_btn);
  };

  leaveBtn = e => {
    e.currentTarget.children[0].classList.remove(styles.hovered_btn);
  };

  render() {
    const { items } = this.props;
    let new_array = [
      items.slice(0, 20),
      items.slice(20, 40),
      items.slice(40, 60),
      items.slice(60, 80),
    ];
    console.log(new_array);
    return (
      <Fragment>
        {this.props.page === 'gallery' && (
          <div>
            {new_array.map(
              item =>
                item.lenght!==0 ? (
                  <div key={new_array.indexOf(item)} className={item[0] ?styles.grid_container:styles.grid_container_none}>
                    {item.map(el => (
                      <div
                        onMouseOver={e => {
                          this.hoverBtn(e);
                          console.log(item);
                        }}
                        onMouseLeave={e => {
                          this.leaveBtn(e);
                        }}
                        key={el.id}
                        className={
                          item.indexOf(el) === 0
                            ? styles.item0
                            : null + item.indexOf(el) === 1
                            ? styles.item1
                            : null + item.indexOf(el) === 2
                            ? styles.item2
                            : null + item.indexOf(el) === 3
                            ? styles.item3
                            : null + item.indexOf(el) === 4
                            ? styles.item4
                            : null + item.indexOf(el) === 5
                            ? styles.item5
                            : null + item.indexOf(el) === 6
                            ? styles.item6
                            : null + item.indexOf(el) === 7
                            ? styles.item7
                            : null + item.indexOf(el) === 8
                            ? styles.item8
                            : null + item.indexOf(el) === 9
                            ? styles.item9
                            : null + item.indexOf(el) === 10
                            ? styles.item10
                            : null + item.indexOf(el) === 11
                            ? styles.item11
                            : null + item.indexOf(el) === 12
                            ? styles.item12
                            : null + item.indexOf(el) === 13
                            ? styles.item13
                            : null + item.indexOf(el) === 14
                            ? styles.item14
                            : null + item.indexOf(el) === 15
                            ? styles.item15
                            : null + item.indexOf(el) === 16
                            ? styles.item16
                            : null + item.indexOf(el) === 17
                            ? styles.item17
                            : null + item.indexOf(el) === 18
                            ? styles.item18
                            : null + item.indexOf(el) === 19
                            ? styles.item19
                            : null
                        }
                      >
                        <div className={styles.hovered_div}>
                          <button
                            onClick={() => {
                              this.props.addHistory('likes', el, false);
                            }}
                            className={styles.hovered_text}
                          ></button>
                        </div>
                        <img
                          className={styles.item_img}
                          src={el.image.url}
                          alt="hello"
                        />
                      </div>
                    ))}
                  </div>
                ):<div style={{display:"none"}}></div>
            )}
          </div>
        )}

        {this.props.page === 'breeds' && (
          <div>
            <div className={styles.grid_container}>
              {items.map(
                el =>
                  el.image && (
                    <div
                      onMouseOver={e => {
                        this.hover(e);
                        console.log(items);
                      }}
                      onMouseLeave={e => {
                        this.leave(e);
                      }}
                      key={el.id}
                      className={
                        items.indexOf(el) === 0
                          ? styles.item0
                          : null + items.indexOf(el) === 1
                          ? styles.item1
                          : null + items.indexOf(el) === 2
                          ? styles.item2
                          : null + items.indexOf(el) === 3
                          ? styles.item3
                          : null + items.indexOf(el) === 4
                          ? styles.item4
                          : null + items.indexOf(el) === 5
                          ? styles.item5
                          : null + items.indexOf(el) === 6
                          ? styles.item6
                          : null + items.indexOf(el) === 7
                          ? styles.item7
                          : null + items.indexOf(el) === 8
                          ? styles.item8
                          : null + items.indexOf(el) === 9
                          ? styles.item9
                          : null + items.indexOf(el) === 10
                          ? styles.item10
                          : null + items.indexOf(el) === 11
                          ? styles.item11
                          : null + items.indexOf(el) === 12
                          ? styles.item12
                          : null + items.indexOf(el) === 13
                          ? styles.item13
                          : null + items.indexOf(el) === 14
                          ? styles.item14
                          : null + items.indexOf(el) === 15
                          ? styles.item15
                          : null + items.indexOf(el) === 16
                          ? styles.item16
                          : null + items.indexOf(el) === 17
                          ? styles.item17
                          : null + items.indexOf(el) === 18
                          ? styles.item18
                          : null + items.indexOf(el) === 19
                          ? styles.item19
                          : null
                      }
                    >
                      <div className={styles.hovered_div}>
                        <span className={styles.hovered_text}>{el.name}</span>
                      </div>
                      <img
                        className={styles.item_img}
                        src={el.image.url}
                        alt="hello"
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        )}

        {this.props.point === true && (
          <div>
            <div className={styles.grid_container}>
              {this.props.items.map(el => (
                <div
                  onMouseOver={e => {
                    this.hoverBtn(e);
                    console.log(items);
                  }}
                  onMouseLeave={e => {
                    this.leaveBtn(e);
                  }}
                  key={el.id}
                  className={
                    items.indexOf(el) === 0
                      ? styles.item0
                      : null + items.indexOf(el) === 1
                      ? styles.item1
                      : null + items.indexOf(el) === 2
                      ? styles.item2
                      : null + items.indexOf(el) === 3
                      ? styles.item3
                      : null + items.indexOf(el) === 4
                      ? styles.item4
                      : null + items.indexOf(el) === 5
                      ? styles.item5
                      : null + items.indexOf(el) === 6
                      ? styles.item6
                      : null + items.indexOf(el) === 7
                      ? styles.item7
                      : null + items.indexOf(el) === 8
                      ? styles.item8
                      : null + items.indexOf(el) === 9
                      ? styles.item9
                      : null + items.indexOf(el) === 10
                      ? styles.item10
                      : null + items.indexOf(el) === 11
                      ? styles.item11
                      : null + items.indexOf(el) === 12
                      ? styles.item12
                      : null + items.indexOf(el) === 13
                      ? styles.item13
                      : null + items.indexOf(el) === 14
                      ? styles.item14
                      : null + items.indexOf(el) === 15
                      ? styles.item15
                      : null + items.indexOf(el) === 16
                      ? styles.item16
                      : null + items.indexOf(el) === 17
                      ? styles.item17
                      : null + items.indexOf(el) === 18
                      ? styles.item18
                      : null + items.indexOf(el) === 19
                      ? styles.item19
                      : null
                  }
                >
                  <div className={styles.hovered_div}>
                    <button
                      type="button"
                      onClick={() => {
                        this.props.addHistory(this.props.text, el, false);
                        this.props.handleAddToHistory(this.props.text, el.id);
                      }}
                      className={styles.like}
                    >
                      {this.props.text === 'favorities' && (
                        <img src={favourite} alt="" />
                      )}
                      {this.props.text === 'dislikes' && (
                        <img src={dislike} alt="" />
                      )}
                      {this.props.text === 'likes' && <img src={like} alt="" />}
                    </button>
                  </div>

                  <img className={styles.item_img} src={el.url} alt="hello" />
                </div>
              ))}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Grid5;
