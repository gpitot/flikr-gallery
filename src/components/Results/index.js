import React, { Component } from "react";
import styled from "styled-components";
import { loadPhotos } from "../../api";
import Photo from "./Photo";
class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true
    };
  }

  loadResults = () => {
    this.setState({ loading: true });
    const { query } = this.props;
    loadPhotos({ query })
      .then(photos => this.setState({ loading: false, photos }))
      .catch(err => {
        //handle error here
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    this.loadResults();
  };

  componentDidUpdate = prevProps => {
    console.log(this.props);
    if (prevProps.query !== this.props.query) {
      //call api
      //set loading to true
      this.loadResults();
    }
  };
  render() {
    console.log(this.state.photos);
    const { loading, photos } = this.state;

    if (loading) return <Area><h1>loading</h1></Area>;

    return (
      <Area>
        {photos.map(({ farm, server, id, secret }) => (
          <Photo
            url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
            key={id}
          />
        ))}
      </Area>
    );
  }
}

const Area = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1400px;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export default Results;
