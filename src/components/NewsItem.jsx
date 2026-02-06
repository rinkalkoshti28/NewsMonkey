import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author } = this.props;
    return (
      <>
        <div className="card w-90 h-110 p-4 shadow-xl relative">
          <img src= {imageUrl ? imageUrl : "https://wpengine.com/wp-content/uploads/2021/05/optimize-images-1024x681.jpg"}
          alt={title ? title : "book image"} referrerPolicy="no-referrer" className="m-auto object-cover w-100 h-50" />
          <div className="px-3 ">
            <h3 className="font-bold my-2 w-full h-10">{title ? title.slice(0, 55) + "..." : "No title available"}</h3>
            <p className="mb-2 w-full h-fit">{description ? description.slice(0, 105) + "..." : "No description available"}</p>
            <p className="text-sm text-gray-500 my-1">By {author ? author : "Unknown Author"}  {/*on  {date ?  new Date(date).toGMTString() : "Unknown Date"}*/}</p>
          </div>
          <a
              href={newsUrl} target="_blank"
              className="bg-red-600 px-4 py-2 rounded-3xl text-white absolute bottom-3 right-2.5"
            >
              Read More
            </a>
        </div>
      </>
    );
  }
}

export default NewsItem;
