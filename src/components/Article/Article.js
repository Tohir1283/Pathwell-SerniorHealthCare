import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="articleContainer">
      <div className="imageContainer">
        <img
          src="http://pathwell.axiomthemes.com/wp-content/uploads/2017/10/bg-21-copyright.jpg"
          alt=""
          style={{ height: "100%" }}
        />
      </div>
      <div className="articleText">
        <h1>Professional Care You Can Trust</h1>
        <br />
        <br />
        <br />
        <br />
        <p>
          We trace our success as a company to the simple and enduring
          philosophy that aging is a gift. The wealth of knowledge and
          experience that comes with age is a gift to the individual & the
          family.
        </p>
        <br />
        <br />
        <p>
          {" "}
          We work to provide an environment that supports the whole person—mind
          and heart, as well as body.
        </p>
        <br />
        <hr />
        <br />
        <h5>email: pathWell@info.com</h5>
      </div>
    </div>
  );
};

export default Article;
