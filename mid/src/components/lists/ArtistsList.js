import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div>
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <div className="print_line_artistlist">
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <img className="album_images"
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img className="default_img" src={music} alt="" />
                    )}
                  </a>
                  <div className="song_name">
                    {artist.name}
                  </div>
                  <div className="song_artist">
                    {artist.followers.total}명
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

export default ArtistsList;
