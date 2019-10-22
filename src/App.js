import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MessageList from "./components/MessageList/MessageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: []
    };
  }

  search = searchValue => {
    if (searchValue === "") {
      this.setState({ filteredData: this.state.data });
    } else {
      let newFilteredData = this.state.data.filter(
        element =>
          element["body"]
            .replace(/\n/g, " ")
            .toLowerCase()
            .includes(searchValue.toLowerCase()) &&
          element["title"].toLowerCase().includes(searchValue.toLowerCase())
      );
      this.setState({ filteredData: newFilteredData });
    }
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
            let resObj = Array.from(response).map(item => {
              return {
                id: item["id"],
                title: item["title"],
                body: item["body"]
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
        <Header className="app__header" search={this.search} />
        <MessageList
          className="app__message-list"
          data={this.state.filteredData}
        />
      </div>
    );
  }
}

export default App;
