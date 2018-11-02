import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
// import posts from "../../mock/mock_data.json"

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      page: 1,
      filteredPosts: []
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }
  /** life cycle */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        this.setState({
          posts,
          filteredPosts: posts.slice(0, 10),
          total: posts.length
        })
      )
      .catch(e => {
        console.log(e);
      });
    
  }

  handlePageChange(page) {
    const filteredPosts = this.state.posts.slice(
      (page - 1) * 10,
      (page - 1) * 10 + 10
    );
    this.setState({
      page: page,
      filteredPosts: filteredPosts
    });
  }

  render() {
    const { page, total } = this.state;
    return (
      <div>
        <h1 className="heading">List of items with pagination</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredPosts.map((post, i) => {
                return (
                  <tr key={i}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination
          margin={10}
          page={page}
          count={Math.ceil(total / 10)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default List;
