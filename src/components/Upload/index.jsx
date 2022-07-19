import { Component, Fragment } from 'react';
import styles from '../Upload/index.module.scss';

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
    this.setState(prev => ({ files: [...prev.files, file] }));

    const formData = new FormData();
    formData.append(file.name, file, file.name);

  };

  render() {
    return (
      <Fragment>
        <div className={styles.modal_back}>
          <div className={styles.modal_body}>
            <button className={styles.close_modal}></button>
            <p className={styles.h1}>Upload a .jpg or .png Cat Image</p>
            <p className={styles.h2}>
              Any uploads must comply with the{' '}
              <span style={{ color: 'red' }}>upload guidelines</span> or face
              deletion.
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
            <p className={styles.h2}>No file selected</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Upload;
