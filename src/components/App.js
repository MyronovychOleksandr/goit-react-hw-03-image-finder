import React, { Component } from "react";

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Loader from "react-loader-spinner";
import Modal from "./modal/Modal";

import imagesApi from "../services/imagesApi";
import s from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    loading: false,
    page: 1,
    largeImageURL: "",
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    const prevImages = prevState.images;
    const nextImages = this.state.images;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevImages !== nextImages && this.state.page > 2) {
      const a = window.innerHeight - 150;
      window.scrollBy({
        top: a,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imagesApi.fetchImagesWithQuery(searchQuery, page).then((images) =>
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        loading: false,
      }))
    );
    // .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    if (this.state.searchQuery !== query) {
      this.setState({ searchQuery: query, page: 1, images: [] });
    }
  };

  handleOpenModal = (url) => {
    this.setState({ largeImageURL: url });
    window.addEventListener("keydown", this.handleEscapeModale);
  };

  handleEscapeModale = (e) => {
    if (e.code === "Escape") {
      this.setState({ largeImageURL: "" });
    }
  };

  render() {
    const { images, loading, largeImageURL } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery onClick={this.handleOpenModal}>
            <ImageGalleryItem images={images} />
          </ImageGallery>
        )}
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {largeImageURL && (
          <Modal url={largeImageURL} onClose={this.handleEscapeModale} />
        )}
        {images.length > 0 && (
          <button className={s.button} type="button" onClick={this.fetchImages}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
