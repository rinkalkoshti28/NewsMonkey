import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = async () => {
    console.log("Fetch called");
    props.setProgress(0);
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    fetchNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles.length);
    setArticles(articles.concat(parsedData.articles));
    if(parsedData.articles.length === 0) {
      setHasMore(false);
    }
    setTotalResults(parsedData.totalResults);
  // console.log("fetchmoredata called");
  };

    return (
      <>
        <div className="w-full overflow-auto px-5 py-10 my-7 lg:px-30">
          <h1 className="text-2xl font-medium my-3 text-center">
            NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </h1>
          {articles.length === 0 && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={articles.length > 0 && <Spinner />}
          >
              <div className="w-full flex flex-wrap gap-15 justify-center md:justify-start items-center" >
                {articles.map((element, index) => {
                  return (
                    <NewsItem
                      key={element.url + index}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.image}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  );
                })}
              </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }

News.defaultProps = {
  country: "us",
  pageSize: 3,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
