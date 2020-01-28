import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const demoQueries = ["dog", "cat", "beach"];

const Demos = () => (
  <Area>
    {demoQueries.map(query => (
      <Item to={`/search/${query}`} key={query}>
        {query}
      </Item>
    ))}
  </Area>
);

const Area = styled.div`
  display: flex;
  margin: 25px auto;
  width: 100%;
  max-width: 500px;
  justify-content:center;
`;

const Item = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  border: solid 1px black;
  margin: 5px;
`;

export default Demos;
