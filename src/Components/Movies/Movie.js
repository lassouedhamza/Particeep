import { movieDeleted, movieDisliked, movieLiked } from "../../Store/actions";

import { ProgressBar } from "../ProgressBar/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import "./Movie.css";

// #region COMPONENT
/**
* A component that displays a Film card
* @className
* @category Movie
* @param Movie.propTypes Component properties
*/
const Movie = (props) => {
  //#region INITIALIZATION
  const {
    data
  } = props;

  //Dispatch
  const dispatch = useDispatch();
  //#endregion

  // #region UTILS
  // Return à % like / dislike
  const getRatio = useCallback(() => {
    let total = data.likes + data.dislikes;

    if (!total) {
      return null;
    }

    total = data.likes / (data.likes + data.dislikes);
    return total;
  }, [data]);
  // #endregion

  //#region HOOK
  // Click on dislike button
  const handleClickdisLike = () => {
    dispatch(movieDisliked(data));
  };

  // Click on like button
  const handleClickLike = () => {
    dispatch(movieLiked(data));
  };

  // Click on trash button
  const handleClickTrash = () => {
    dispatch(movieDeleted(data));
  };
  //#endregion

  //#region INTERFACE
  return (
    <>

    <div className="container" key={`${data.id}`}>

 <div className="item item-1"style={{ 'backgroundImage': `url(${data.image})` }} >
    <div className="body-item">
      <div className="body-item-1">

      </div>
      <div className="title body-item-2">{data.title}</div>
      <div className="properties body-item-3">
      </div>

      <div className="body-item-5">

      <ProgressBar ratio={getRatio()} />

      </div>
      <div className="icon-set body-item-6">
        <i className="icon-thumbs-up"
                    applied={data.liked}
                    icon={faThumbsUp}
                    numberOf={data.likes}
                    onClick={handleClickLike}></i>
        <i className="icon-thumbs-down"
                      applied={data.disliked}
                      icon={faThumbsDown}
                      numberOf={data.dislikes}
                      onClick={handleClickdisLike}></i>
                      <i>
     <FontAwesomeIcon

                icon={faTrashAlt}
                onClick={handleClickTrash}

              /></i>
      </div>
    </div>
  </div>

</div>
</>
  );
};

// #region PROPERTIES
/**
* Properties types of {@link Movie}
      * @typedef {Object} Movie.PropTypes
      * @property {object} data Movie's data
      */
// Properties
Movie.propTypes = {
  data: PropTypes.object.isRequired
};
// #endregion

export { Movie };
