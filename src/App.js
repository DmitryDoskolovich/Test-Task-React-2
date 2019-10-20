import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MessageList from "./components/MessageList/MessageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchValue: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue === "") {
      this.setState({ filteredData: this.state.data });
    } else {
      let newFilteredData = this.state.data.filter(
        element =>
          element["body"]
            .replace(/\n/g, " ")
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) &&
          element["title"]
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase())
      );
      this.setState({ filteredData: newFilteredData });
    }
  };

  onChangeSearcValue = e => {
    this.setState({ searchValue: e.target.value });
  };

  getData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200) {
          console.log("error:", res.status);
        } else {
          res.json().then(response => {
            let responseObj = response;
            let newObj = Object.entries(responseObj);
            let resObj = newObj.map(item => {
              return {
                id: item[1]["id"],
                title: item[1]["title"],
                body: item[1]["body"]
              };
            });
            this.setState({ data: resObj, filteredData: resObj });
          });
        }
      })
      .catch(error => console.error("Fetch error", error));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="app">
        <Header
          className="app__header"
          onSubmit={this.handleSubmit}
          onChange={this.onChangeSearcValue}
        />
        <MessageList
          className="app__message-list"
          data={this.state.filteredData}
        />
      </div>
    );
  }
}

export default App;
