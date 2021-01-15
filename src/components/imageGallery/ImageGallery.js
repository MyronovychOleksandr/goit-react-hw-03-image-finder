import React, { Component } from "react";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  handleGalleryClick = (e) => {
    if (e.target.id) {
      this.props.onClick(e.target.id);
    }
  };

  render() {
    return (
      <ul className={s.imageGallery} onClick={this.handleGalleryClick}>
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallery;
