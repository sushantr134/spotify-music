import React from "react";
import styles from "./style.scss";

export default class AlbumsView extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={styles.containerAlbum}>
        {this.props.albumsData.map(albumObj => {
          let artistName = albumObj.artists[0].name;
          let albumBg = albumObj.images[0].url.toString();
          return (
            <div
              key={albumObj.id}
              className={styles.albumBoxContainer}
              style={{ background: `url(${albumBg}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover" }}>
              <div className={styles.overlayAlbum}>
                <ul>
                  <li>
                    Artist:&nbsp;&nbsp;<b>{artistName}</b>
                  </li>
                  <li>Album:&nbsp;&nbsp;{albumObj.name}</li>
                  <li>Songs:&nbsp;&nbsp;{albumObj.total_tracks}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
