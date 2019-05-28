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
import { getArtistAlbum } from "../../redux/actions/Dashboard/albums/action";
import { getTracks } from "../../redux/actions/Dashboard/tracks/action";
import Loader from "../Loader/component";
import SongPlayer from "../SongPlayer/component";
import { message } from "antd";
class AppDashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      artistBackgroundData: {
        artistTagName: "",
        artistBackgroundImage: ""
      },
      playerSong: {
        songURL: ""
      }
    };
    this.artistBackgroundHandler = this.artistBackgroundHandler.bind(this);
  }
  artistBackgroundHandler = obj => {
    this.setState({
      artistBackgroundData: {
        artistTagName: obj.Name,
        artistBackgroundImage: obj.pic
      }
    });
  };
  songHandler = song => {
    if (typeof song !== undefined) {
      this.setState({
        playerSong: {
          songURL: song
        }
      });
    } else {
      return message.warning("preview_url is not defined to play the song");
    }
  };
  render() {
    return (
      <>
        <SearchBar token={this.props.access_token} searchHandler={this.props.onSearchArtist} />
        <section className={styles.appContainer}>
          <ArtistView
            token={this.props.access_token}
            albumHandler={this.props.onSearchArtistAlbum}
            artistBackgroundHandler={this.artistBackgroundHandler}
            artistData={this.props.searchData.searchResult ? this.props.searchData.searchResult : null}
          />
          {this.props.albumsObj && this.props.albumsObj.albumsData ? (
            <ArtistBackgroundPanel
              artistTagName={this.state.artistBackgroundData.artistTagName}
              artistBackgroundPic={this.state.artistBackgroundData.artistBackgroundImage}>
              <section className={styles.mainAlbumsContainer}>
                <AlbumsView
                  albumsData={this.props.albumsObj.albumsData.data.items}
                  token={this.props.access_token}
                  fetchSongs={this.props.onTracksSearch}
                />
                <SongsContainer songsData={this.props.songsObj.tracksData} songHandler={this.songHandler} />
              </section>
            </ArtistBackgroundPanel>
          ) : (
            <Loader />
          )}
        </section>
        <>
          <SongPlayer song={this.state.playerSong.songURL} />
        </>
      </>
    );
  }
}

const MapStateToProps = state => {
  return {
    searchData: state.search,
    albumsObj: state.albums,
    songsObj: state.tracks
  };
};

const MapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSearchArtist: (searchQuery, token) => searchArtist(searchQuery, token),
      onSearchArtistAlbum: (artistID, token) => getArtistAlbum(artistID, token),
      onTracksSearch: (albumid, token) => getTracks(albumid, token)
    },
    dispatch
  );
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AppDashboard);
