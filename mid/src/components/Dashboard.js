import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Router} from 'react-router-dom';
import {
  initiateGetResult,
  initiateLoadMoreAlbums, initiateLoadMoreArtists, initiateLoadMorePlaylist, initiateLoadMoreTracks
} from '../actions/result';
import Header from './Header';
import Loader from './Loader';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import Sidebar from './Sidebar';
import Search from './search';
import Library from './Library';
import createMyPlaylist from './createMyPlaylist';
import Player from './player';


const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory('albums');
      });
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const loadMore = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, playlist, tracks } = props;
      setIsLoading(true);
      switch (type) {
        case 'albums':
          await dispatch(initiateLoadMoreAlbums(albums.next));
          break;
        case 'artists':
          await dispatch(initiateLoadMoreArtists(artists.next));
          break;
        case 'playlist':
          await dispatch(initiateLoadMorePlaylist(playlist.next));
          break;
        case 'tracks':
          await dispatch(initiateLoadMoreTracks(tracks.next));
          break;
        default:
      }
      setIsLoading(false);
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, playlist, tracks } = props;
  const result = { albums, artists, playlist, tracks };

  return (
    <React.Fragment>
      {isValidSession() ? (
        <div>
     <Header />
          <div className="wrap">
          <Router>
          <div className="main-body">
          <Sidebar />
          <Switch>
            <Route path="/" component={<Library/>} />
            <Route path="/search" component={<Search/>} />
            <Route path="/player" component={<Player/>} />
            <Route path="/createmyplaylist" component={<createMyPlaylist/>} />
          </Switch>
        </div>
        </Router>
          </div>
          <div className="wrap2">
          <SearchForm handleSearch={handleSearch} />
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            isValidSession={isValidSession}
            />
        </div>
      </div>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: true
            }
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
    tracks: state.tracks
  };
};

export default connect(mapStateToProps)(Dashboard);
