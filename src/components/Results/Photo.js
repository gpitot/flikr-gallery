import React from "react";
import styled from "styled-components";

const Photo = ({url}) => <Tile url={url}></Tile>;

const Tile = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 300px;
  height: 300px;
  background-position: center;
  margin:15px;
`;

export default Photo;
