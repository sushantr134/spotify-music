import React from "react";
import styles from "./style.scss";

export default class SongPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.song === null) {
      message.warning("preview_url is not defined to play the song");
    }
  }
  render() {
    return (
      <section className={styles.playerContainer}>
        <div className={styles.albumImage} />
        <div className={styles.playerOptions}>
          <audio controls src={this.props.song} />
        </div>
      </section>
    );
  }
}
