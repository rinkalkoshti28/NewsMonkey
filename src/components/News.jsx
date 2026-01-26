import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    // API call can be made here to fetch real news data
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc5029fa80c446fc9d957ee7b41ab7b9&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc5029fa80c446fc9d957ee7b41ab7b9&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      page: this.state.page - 1 ,
      articles: parsedData.articles
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc5029fa80c446fc9d957ee7b41ab7b9&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ 
        page: this.state.page + 1,
        articles: parsedData.articles
      });
    }
  }

  render() {
    return (
      <>
      <div className='w-full overflow-x-hidden my-7 px-30' >
      <h1 className='text-2xl font-medium mb-5'>NewsMonkey - Top Headlines</h1>
      <div className='flex flex-wrap gap-20 justify-center' >
      {this.state.articles.map((element) => {
        return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
      })}
      </div>
      <div className='flex justify-between mt-2'>
        <button disabled={this.state.page <= 1} className="bg-red-600 px-4 py-2 rounded-3xl text-white mt-2" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button className="bg-red-600 px-4 py-2 rounded-3xl text-white mt-2" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    </>
    )
  }
}

export default News