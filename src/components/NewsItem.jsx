import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card w-90 p-4 shadow-xl">
          <img src={imageUrl} alt="book image" className="m-auto object-cover"
          onError={(e) => {
            e.target.src = "https://wpengine.com/wp-content/uploads/2021/05/optimize-images-1024x681.jpg"
          }} />
          <div className="px-3">
            <h3 className="font-bold my-3">{title}...</h3>
            <p className="mb-5">{description}...</p>
            <a
              href={newsUrl} target="_blank"
              className="bg-red-600 px-4 py-2 rounded-3xl text-white mt-2"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
