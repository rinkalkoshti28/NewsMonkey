import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 3,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  fetchNews = async (page) => {
    console.log("Fetch called");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log("Page number:", page);
    console.log("Page Size:", this.props.pageSize);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      page: page,
      loading: false,
    });
  };

  async componentDidMount() {
    // API call can be made here to fetch real news data
    this.fetchNews(1);
  }

  // handlePrevClick = async () => {
  //   if(this.state.page > 1) {
  //     const prevPage = this.state.page - 1;
  //     this.setState({page: prevPage});
  //     console.log("Previous");
  //     this.fetchNews(prevPage);
  //   }
  // };

  // handleNextClick = async () => {
  //   console.log("Next");
  //   const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
  //   if(this.state.page < totalPages) {
  //     const nextPage = this.state.page + 1;
  //     this.setState({page: nextPage});
  //     this.fetchNews(nextPage);
  //   }
  // };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles.length)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults || 0,
    });
  // console.log("fetchmoredata called");
  };

  render() {
    return (
      <>
        <div className="w-full overflow-auto px-5 my-7 lg:px-30">
          <h1 className="text-2xl font-medium mb-5 text-center">
            NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
              <div className="w-full mx-auto flex flex-wrap gap-15 justify-center items-center" >
                {this.state.articles.map((element, index) => {
                  return (
                    <NewsItem
                      key={element.url || index}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  );
                })}
              </div>
          </InfiniteScroll>
        </div>
        {/* <div className="flex justify-between mt-2 ">
            <button
              disabled={this.state.page <= 1}
              className="bg-red-600 px-4 py-2 text-white mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
              className="bg-red-600 px-4 py-2 text-white mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
      </>
    );
  }
}

export default News;
