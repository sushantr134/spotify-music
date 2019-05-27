import React from "react";
import styles from "./style.scss";

export default class ArtistBackgroundPanel extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <div
          className={styles.artistPicBackgroundContainer}
          style={{
            background: `url(${this.props.artistBackgroundPic}) no-repeat`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundOrigin: "border-box",
            backgroundAttachment: "fixed"
          }}>
          <div className={styles.overlay}>
            <h3>Artist</h3>
            <h1>{this.props.artistTagName}</h1>
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }
}
