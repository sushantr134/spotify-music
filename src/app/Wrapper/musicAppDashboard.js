import React from "react";
import SearchBar from "../SearchBar/component";
import ArtistView from "../ArtistView/component";
import ArtistBackgroundPanel from "../ArtistBackgroudPanel/component";
import AlbumsView from "../AlbumsView/component";
import SongsContainer from "../SongsList/component";

import styles from "./dashboardStyle.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchArtist } from "../../redux/actions/Dashboard/search/action";

class AppDashboard extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SearchBar
          token={this.props.access_token}
          searchHandler={this.props.onSearchArtist}
        />
        <section className={styles.appContainer}>
          <ArtistView
            token={this.props.access_token}
            artistData={
              this.props.searchData.searchResult
                ? this.props.searchData.searchResult
                : null
            }
          />
          <ArtistBackgroundPanel>
            <>
              <AlbumsView />
              <SongsContainer />
            </>
          </ArtistBackgroundPanel>
        </section>
      </>
    );
  }
}

const MapStateToProps = state => {
  return {
    searchData: state.search
  };
};

const MapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSearchArtist: (searchQuery, token) => searchArtist(searchQuery, token)
    },
    dispatch
  );
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AppDashboard);
