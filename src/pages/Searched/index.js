import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Results from "../../components/Results";
import Demos from "../../components/Demos";
//get query from params

class Searched extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Demos />
        <Results query={this.props.match.params.query || null}/>
      </>
    );
  }
}

export default Searched;
