import React, { ReactDOM } from "react";

import Header from "../components/Header";

const PageA = props => (
    <React.Fragment>
        <Header title="Page A" desciption="This is page A" />
        <ul>
            <li>1 fish</li>
            <li>2 fish</li>
            <li>red fish</li>
            <li>blue fish</li>
        </ul>
    </React.Fragment>
);

ReactDOM.render(
  <React.StrictMode>
    <PageA />
  </React.StrictMode>,
  document.getElementById('root')
);
