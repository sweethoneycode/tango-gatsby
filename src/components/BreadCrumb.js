import React from "react";
import { Link } from "gatsby";
import { checkPropTypes, PropType } from "prop-types";

import { BreadCrumbWrapper } from "./styles/BreadCrumbStyles";

const BreadCrumb = ({ parent }) => (
  <div className="container">
    <div className="row">
      <div className=" col-lg-9 offser-lg-3">
        <BreadCrumb>
          <Link to="/">
            <span>Home</span>
          </Link>
          <span className="divider">/</span>
          {parent ? (
            <>
              <Link to={parent.link}>
                <span dangerouslySetInnerHTML={{ __html: parent.title }} />
              </Link>
              <span className="divider">/</span>
            </>
          ) : null}
        </BreadCrumb>
      </div>
    </div>
  </div>
);

BreadCrumb.PropTypes = {
  parent: PropTypes.object,
};

export default BreadCrumb;
