import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }

  fetchNews = async (page) => {
    console.log("Fetch called");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc5029fa80c446fc9d957ee7b41ab7b9&page=${page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("Page number:", page);
    console.log("Page Size:", this.props.pageSize);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      page: page, 
    });
  }

  async componentDidMount() {
    // API call can be made here to fetch real news data
    this.fetchNews(1)
  }

  handlePrevClick = async () => {
    if(this.state.page > 1) {
      const prevPage = this.state.page - 1;
      this.setState({page: prevPage});
      console.log("Previous");
      this.fetchNews(prevPage);
    }
  };

  handleNextClick = async () => {
    console.log("Next");
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if(this.state.page < totalPages) {
      const nextPage = this.state.page + 1;
      this.setState({page: nextPage});
      this.fetchNews(nextPage);
    }
  };

  render() {
    return (
      <>
        <div className="w-full overflow-x-hidden my-7 px-30">
          <h1 className="text-2xl font-medium mb-5 text-center">
            NewsMonkey - Top Headlines
          </h1>
          <div className="w-full mx-auto flex flex-wrap gap-15 justify-center items-center">
            {this.state.articles.map((element, index) => {
                return (<NewsItem
                  key={element.url || index}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />);
            })}
          </div>
          <div className="flex justify-between mt-2">
            <button
              disabled={this.state.page <= 1}
              className="bg-red-600 px-4 py-2 rounded-3xl text-white mt-2"
              onClick={this.handlePrevClick}
            >
              &larr;
            </button>
            <button
              disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
              className="bg-red-600 px-4 py-2 rounded-3xl text-white mt-2"
              onClick={this.handleNextClick}
            >
              &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
