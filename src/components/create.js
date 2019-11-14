import React from 'react';
import '../App.css';
import axios from 'axios';

class Create extends React.Component {

  constructor(props){
    super(props);

    this.state = {Title:'',
                  Year:'',
                  Poster:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);

  }

  handleMovieTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleMovieYearChange(e){
    this.setState({Year: e.target.value});
  }
  
  handleMoviePosterChange(e){
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const movieObject = {
      title : this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }

    axios.post('http://localhost:4000/api/movies/', movieObject)
    .then()
    .catch();
    this.setState({Title:'',Year:'', Poster:''})
  }

  render(){
    return (
      <div className="App">
        <h3> Hello </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Movie Title</label>
            <input 
              type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.handleMovieTitleChange}
            ></input>
          </div>
          <div>
            <label>Movie Year</label>
            <input 
              type='text'
              className='form-control'
              value={this.state.Year}
              onChange={this.handleMovieYearChange}
            ></input>
          </div>
          <div>
            <label>Movie Poster URL</label>
           <textarea
              row='3'
              className='form-control'
              value={this.state.Poster}
              onChange={this.handleMoviePosterChange}
            ></textarea>
          </div>

          <div>
            <input
            type="submit"
            value="Add Movie"
            >
            </input>
          </div>

        </form>
      </div>
    );
  }
  
}

export default Create;
