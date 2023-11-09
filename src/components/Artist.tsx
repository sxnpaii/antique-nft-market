import { Artists } from "../utils/types";

import "../styles/components-style/Artist.scss";

const Artist = ({ artist }: { artist: Artists }) => {
  return (
    <div class="Artist">
      <img src={artist.avatar} alt="" />
      <div className="info">
        <h6>{artist.full_name}</h6>
        <a href={artist.username}>@{artist.username}</a>
      </div>  
    </div>
  )
}

export default Artist