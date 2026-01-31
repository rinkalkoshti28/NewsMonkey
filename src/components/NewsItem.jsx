import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card w-90 h-110 p-4 shadow-xl">
          <img src= {imageUrl ? imageUrl : "https://wpengine.com/wp-content/uploads/2021/05/optimize-images-1024x681.jpg"}
          alt={title ? title : "book image"} className="m-auto object-cover w-100 h-50" />
          <div className="px-3 relative">
            <h3 className="font-bold my-3 w-full h-10">{title ? title.slice(0, 55) + "..." : "No title available"}</h3>
            <p className="mb-5 w-full h-fit">{description ? description.slice(0, 105) + "..." : "No description available"}</p>
            <a
              href={newsUrl} target="_blank"
              className="bg-red-600 px-4 py-2 rounded-3xl text-white absolute right-0"
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
