import React from "react";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ images }) {
  return images.map(({ webformatURL, largeImageURL }) => (
    <li className={s.imageGalleryItem} key={largeImageURL} id={largeImageURL}>
      <img
        src={webformatURL}
        id={largeImageURL}
        alt=""
        className={s.imageGalleryItemImage}
      />
    </li>
  ));
}
