import logo from './logo.svg';
import './App.css';
import Pagination from "./components/Pagination";
import Post from "./components/Post";
import React from "react";
import { SuperHeroesData } from './dataLocal';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.pagesLimit = 5;
    this.state = {
      totalCount: 0,
      data: [],
      posts: [],
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {

      this.setState({
          data: SuperHeroesData, // lista == dataLocal
          totalCount: SuperHeroesData.length,
          SuperHeroesData,
          posts: SuperHeroesData.slice(0, 5)

      })
      console.log(SuperHeroesData) // mostrando por consola la dataLocal
      /*
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log("data", data, data.length);
        this.setState({
          totalCount: data.length,
          data,
          posts: data.slice(0, 5)
        });
      })
      .catch(err => {
        console.log("error", err);
      });*/
  }

  handlePageChange({ activePage, offset }) {
    this.setState({
      activePage,
      posts: this.state.data.slice(offset, offset + this.pagesLimit)
    });
  }

  render() {
    const { posts, data } = this.state;
    return (

      <>  
      
          <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                  <h3 className="text-center">
                      REACT PAGINACIÓN
                  </h3>
                  <span className="badge bg-warning float-right">USANDO DATA LOCAL</span>
                </div>
            </div>
          </div>
       
          <div className="">
            <div className="">
              {posts.map(item => {
                return <Post data={item} />;
              })}
            </div>

            {data.length > 0 && (
              <Pagination
                activePage={parseInt(this.state.activePage)}
                itemsCountPerPage={this.pagesLimit}
                totalItemsCount={this.state.totalCount}
                pageRangeDisplayed={5}
                setPage={this.handlePageChange}
              />
            )}
          </div>
      </>
    );
  }
}

