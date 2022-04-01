import React from 'react';
import _ from 'lodash';
import music from '../images/music.jpeg';

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div >
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className='print_line_playlist'>
                  <a
                    target="_blank"
                    href={item.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(item.images) ? (
                      <img className="album_images"
                      variant="top" src={item.images[0].url} alt="" />
                    ) : (
                      <img className="default_img" src={music} alt="" />
                    )}
                  </a>
                  <div className="song_name">
                  {item.name}
                  </div>
                  <div className="album_name">
                  By {item.owner.display_name}
                  </div>
                  <div className="song_artist">
                    {item.tracks.total}개
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayList;
