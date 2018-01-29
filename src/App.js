import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        summary={movie.summary}
       />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({movies})
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

  export default App;

//How FB, Insta InfiniteScrolls as more page loads..!
//...this.state.movies 가 앞에있으면 맨 위로 로딩됨..! 은근히 좋은..?
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       greeting: "Hello Again!"
  //     })
  //   }, 5000)
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         {
  //           title: "Matrix",
  //           poster: "http://img.insight.co.kr/static/2017/10/15/700/2hku8n772ya7ewvwp9af.jpg"
  //         },
  //         {
  //           title: "Avengers",
  //           poster:   "https://i.ytimg.com/vi/JFRfeijq8hw/maxresdefault.jpg"
  //         },
  //         {
  //           title: "Oldboy",
  //           poster: "http://post.phinf.naver.net/MjAxNzAzMTdfMTYz/MDAxNDg5NzM2MDcxODAy.WEV0qQpHK2F74GLXX9l-OHrWbFnJ1LEOooFkbqBviKkg.uxILQXouPnfsSycAO9ImBV-urtlLrB7d7dyNLBms1hQg.JPEG/%EB%B8%94%EB%9E%99.jpg?type=w1200"
  //         },
  //         {
  //           title: "Star Wars",
  //           poster: "http://cfile3.uf.tistory.com/image/99AE673359C1ADAA09A600"
  //         },
  //         {
  //           title: "Thor",
  //           poster: "http://sccdn.chosun.com/news/html/2018/01/26/2018012701002098300148871.jpg"
  //         }
  //       ]
  //     })
  //   }, 5000)
  // }
