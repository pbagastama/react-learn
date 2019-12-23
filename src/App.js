// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios'; 
// import Header from './component/Header'
// import Footer from './component/Footer'
// import logo from './logo.svg';
import './App.css';
// import { directive } from '@babel/types';

class App extends Component{
    constructor(){
      super();
      this.state = {
        // judul: '',
        dataFilms: [],
        // dataKu: [],
      };
    }

    componentDidMount(){
      // axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      // axios.get('https://facebook.github.io/react-native/movies.json')
      // axios.get('https://jsonplaceholder.typicode.com/users/')
      axios.get('https://swapi.co/api/films/')
      .then((dataArticles) => {
          console.log(dataArticles);
          // console.log(dataArticles.data.latestreview[1].user);
          // console.log(dataArticles.data.latestreview[2].user);
          // console.log(dataArticles.data.latestreview[3].user); 
          // console.log(dataArticles.data.description); 
          // console.log(dataArticles.data.movies);
          this.setState({
            // dataKu: dataArticles.data,
            dataFilms: dataArticles.data.results,

            // judul: dataArticles.data.latest_articles[0].title, 
            // judul1: dataArticles.data.latest_articles[1].title, 
            // judul2: dataArticles.data.latest_articles[2].title, 
            // judul3: dataArticles.data.latest_articles[3].title, 
            // judul4: dataArticles.data.latest_articles[4].title
            // judul: dataArticles.data.results[0].title, 
            // judul1: dataArticles.data.results[1].title, 
            // judul2: dataArticles.data.results[2].title, 
            // judul3: dataArticles.data.results[3].title, 
            // judul4: dataArticles.data.results[4].title
          })
      })
    };

    render(){
      var css = {
        border:'1px solid black', 
        padding:'16px'
      }
      var str ={
        border:'1px solid black', 
        padding:'16px',
        width:'10%',
        textAlign:'center'
      }
      var stn ={
        border:'1px solid black', 
        padding:'16px',
        width:'16%',
      }
      var stdir ={
        border:'1px solid black', 
        padding:'16px',
        width:'16%',
        textAlign:'center'
      }
      const data = this.state.dataFilms.map((item, index)=>{
        var datefilms = item.release_date;
        var namefilms = item.title;
        var descfilms = item.opening_crawl;
        var director = item.director;
        // var alamat = [
        //   item.address.suite,
        //   item.address.street,
        //   item.address.city].join(", ");
        return <tr style={css} key={index}>
        <td style={str}>{datefilms}</td>
        <td style={stn}>{namefilms}</td>
        <td style={css}>{descfilms}</td>
        <td style={stdir}>{director}</td>
        </tr>
      })
      return(
        <div>
          <center>
            <h1>Get Data Films Star Wars</h1> 
            <table style={css}> 
              <tbody>
                <tr>
                  <th>Release</th> 
                  <th>Name</th> 
                  <th>Description</th> 
                  <th>Director</th>
                </tr>
                { data }
              </tbody>
            </table>
          </center>
        </div>
        // <div>
        //   <center>
        //     <h1> Get Data Female Daily </h1>
        //     <h1>Coba Get Data</h1> 
        //     <p>{this.state.judul}</p> 
        //     <p>{this.state.judul1}</p> 
        //     <p>{this.state.judul2}</p> 
        //     <p>{this.state.judul3}</p> 
        //     <p>{this.state.judul4}</p>
        //   </center>
        // </div>
      );
    }
}
export default App;
