import React from "react";
import ReactDOM from 'react-dom';

import Header from "../components/Header";

const PageB = props => (
    <React.Fragment>
        <Header title="Page B" desciption="This is page B" />
        <p>foo bar</p>
    </React.Fragment>
);

ReactDOM.render(
  <React.StrictMode>
    <PageB />
  </React.StrictMode>,
  document.getElementById('root')
);
