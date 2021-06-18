import React from "react";
import "./video.css";
import { Button } from "../../components/buttons/buttons";
import { useParams, useHistory } from "react-router-dom";

import YouTube from "react-youtube";

export function Video(props) {
  const history = useHistory();
  const params = useParams();

  let partNo = params.partNo ? params.partNo : 1;

  function endHandler() {
    history.push(`/s${params.sessionId}/p${partNo}/next`);
  }

  return (
    <div className="videoWrap">
      <Button type={"close"} link={`/map/s-${params.sessionId}/p-${partNo}`} />

      <YouTube
        videoId={"XPXeCcqsMBg"}
        className={"video"}
        containerClassName={"videoFrame"}
        onEnd={endHandler}
      />

      {/*}

            <iframe 
                className='video'
                src={ props.src }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />

            {*/}
    </div>
  );
}
