import { Component, Fragment } from 'react';
import styles from '../Upload/index.module.scss';
import { nanoid } from 'nanoid';

class Upload extends Component {
  state = {
    files: [],
    images: null,
  };
  componentDidMount() {
    const forma = document.querySelector('form');
    const inp = forma.querySelector('input');
    forma.addEventListener('click', () => {
      inp.click();
    });
  }

  handleGetFile = e => {
    let file = e.target.files[0];
    this.setState({ images: URL.createObjectURL(file) });

    file.isUploadung = true;
    this.setState({ files: file });
  };

  handleSentFile = e => {
    e.preventDefault();
    this.props.setUploadedFiles({
      id: nanoid(),
      url: this.state.images,
      name: this.state.files.name,
    });
    this.setState({ images: null, files: null });
  };

  render() {
    return (
      <Fragment>
        <div className={styles.modal_back}>
          <div className={styles.modal_body}>
            <button
              onClick={() => {
                this.props.close_modal();
              }}
              className={styles.close_modal}
            ></button>
            <p className={styles.h1}>Upload a .jpg or .png Cat Image</p>
            <p className={styles.h2}>
              Any uploads must comply with the{' '}
              <a
                href="https://thecatapi.com/privacy"
                style={{ color: 'red', textDecoration: 'none' }}
              >
                upload guidelines
              </a>{' '}
              or face deletion.
            </p>
            {this.state.images}
            <form className={styles.desc}>
              {this.state.images && (
                <img
                  className={styles.image_uploaded}
                  src={this.state.images}
                  alt=""
                />
              )}
              <input
                hidden
                className={styles.hidden}
                onChange={e => {
                  this.handleGetFile(e);
                }}
                type="file"
              />
              <p className={styles.h2}>
                <b style={{ color: 'black' }}>Drag here</b> your file or{' '}
                <b style={{ color: 'black' }}> Click here</b> to upload
              </p>
            </form>
            {this.state.images && this.state.files ? (
              <button
                type="button"
                onClick={e => {
                  this.handleSentFile(e);
                }}
                className={styles.upload_photo}
              >
                UPLOAD PHOTO
              </button>
            ) : null}
            <p className={styles.h2}>No file selected</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Upload;