import React from "react";
import styles from "./style.scss";
import Loader from "../Loader/component";

export default class SongsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  msTominSec = msTime => {
    let min = Math.floor((msTime / 1000 / 60) << 0),
      sec = Math.floor((msTime / 1000) % 60);
    return {
      minSecTime: { minutes: min, seconds: sec }
    };
  };

  render() {
    return (
      <section className={styles.songsSection}>
        <h2>Songs</h2>
        {this.props.songsData ? (
          this.props.songsData.items.map(songObj => {
            let timeInMinSecObj = this.msTominSec(songObj.duration_ms);
            return (
              <div key={songObj.id} className={styles.songsContainer} onClick={() => this.props.songHandler(songObj.preview_url)}>
                <h1>{songObj.name}</h1>
                <label>
                  {timeInMinSecObj.minSecTime.minutes}:{timeInMinSecObj.minSecTime.seconds}
                </label>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </section>
    );
  }
}
