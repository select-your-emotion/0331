import React from 'react';
import _ from 'lodash';
import music from '../images/music.jpeg';

const TrackListAdd = ({ tracks }) => {
  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div>
          {tracks.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="print_line_tracklist_add">
                  <a
                    target="_blank"
                    href={item.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(item.album.images) ? (
                      <img className="album_images"
                        variant="top"
                        src={item.album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img className="default_img" src={music} alt="" />
                    )}
                  </a>
                  <div className="song_name">
                  {item.name}
                  </div>
                  <div className="album_name">
                    {item.album.name}
                  </div>
                  <div className="song_artist">
                  {item.artists.map((artist) => artist.name)}
                  </div>
                  <button class="add_button" type="button">
                    추가하기
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default TrackListAdd;
