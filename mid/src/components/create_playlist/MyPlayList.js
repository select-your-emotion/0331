import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import {
  initiateGetResult,
  initiateLoadMoreAlbums, initiateLoadMoreArtists, initiateLoadMorePlaylist, initiateLoadMoreTracks
} from '../result';
import Loader from '../Loader';
import AddForm from './AddForm';
import AddResult from './AddResult';
import PlayListMain from './PlayListMain';
import PlayListBody from './PlayListBody';

const MAIN_POSTER = [
  {image : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00f56557183915.59cbcc586d5b8.jpg"}
]

const MyPlayList = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isValidSession, history } = props;
 
  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory('tracks');
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
    <>
      {isValidSession() ? (
        <div>


          <PlayListMain src={MAIN_POSTER[0].image}/>
          <PlayListBody/>

          <div className="wrap2">
          <AddForm handleSearch={handleSearch} />
          <Loader show={isLoading}>Loading...</Loader>

          <AddResult
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
    </>
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

export default connect(mapStateToProps)(MyPlayList);
