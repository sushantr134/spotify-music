import React from "react";
import { Input, message } from "antd";
import styles from "./style.scss";
const Search = Input.Search;

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.searchContainer}>
        <Search
          className={styles.searchInput}
          placeholder='Search artist here e.g: justin '
          onSearch={val =>
            val.length > 0
              ? this.props.searchHandler(encodeURIComponent(val), this.props.token)
              : message.error("Empty Search Query not allowed")
          }
          style={{ width: 250 }}
        />
      </div>
    );
  }
}
