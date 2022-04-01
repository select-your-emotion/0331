import React from 'react';
import _ from 'lodash';
import music from '../images/music.jpeg';


const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div >
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <div className="print_line_albumlist">
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <img className='album_images'
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img className="default_img" src={music} alt="" />
                    )}
                  </a>
                  <div className="song_name">
                  {album.name}
                  </div>
                  <div className="song_artist">
                  {album.artists.map((artist) => artist.name).join(', ')}
                  </div>
                  <div className="song_artist">
                  {album.release_date}
                  </div>
              </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;
