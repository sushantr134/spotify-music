import React from "react";
import styles from "./style.scss";

import Loader from "../Loader/component";
import { Icon } from "antd";

const ArtistPanel = ({ dataObj }) => {
  return (
    <div className={styles.artistInfoContainer}>
      {dataObj.images[0] !== undefined ? (
        <img src={dataObj.images[0].url.toString()} alt={dataObj.id} />
      ) : (
        <Icon style={{ color: "black" }} type='user' />
      )}
      <ul className={styles.artistViewInfo}>
        <li>
          <a href={""}>{dataObj.name}</a>
        </li>
        <li>
          <span>Genre</span>&nbsp;:&nbsp;<span>{dataObj.genres.slice(0, 3)}</span>
        </li>
        <li>
          <span>Popularity</span>&nbsp;:&nbsp;<span>{dataObj.popularity}</span>
        </li>
        <li>
          <span>Followers</span>&nbsp;:&nbsp;<span>{dataObj.followers.total}</span>
        </li>
      </ul>
    </div>
  );
};

export default class ArtistView extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.artistContainer}>
        <div className={styles.artistListContainer}>
          {this.props.artistData != null ? (
            this.props.artistData.items.map((artistObj, i) => {
              return <ArtistPanel key={i} dataObj={artistObj} />;
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
