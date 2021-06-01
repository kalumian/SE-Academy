import React from "react";
import {
  ListVideosItemLink,
  ListVideosItemNumber,
  ListVideosItemImage,
  ListVideosItemName,
} from "../../styled/PagesStyle";

function ListVideosItemComponent({ color, image, episode, title, BefforLink }) {
  return (
    <div>
      <ListVideosItemNumber color={color}>{episode}</ListVideosItemNumber>
      <ListVideosItemImage
        color={color}
        src={image}
        alt={`image-video-episode${episode}`}
      />
      <ListVideosItemLink color={color} to={`${BefforLink}/${episode}`}>
        <ListVideosItemName color={color}>{title}</ListVideosItemName>
      </ListVideosItemLink>
    </div>
  );
}

export default ListVideosItemComponent;
