import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="automatex__blog section__padding" id="blog">
    <div className="automatex__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are capturing it
      </h1>
    </div>
    <div className="automatex__blog-container">
      <div className="automatex__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="May 26, 2023"
          text="Experience Automation is the future. Let's explore it together."
        />
      </div>
      <div className="automatex__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="May 26, 2023"
          text="Experience Automation is the future. Let's explore it together."
        />
        <Article
          imgUrl={blog03}
          date="May 26, 2023"
          text="Experience Automation is the future. Let's explore it together."
        />
        <Article
          imgUrl={blog04}
          date="May 26, 2023"
          text="Experience Automation is the future. Let's explore it together."
        />
        <Article
          imgUrl={blog05}
          date="May 26, 2023"
          text="Experience Automation is the future. Let's explore it together."
        />
      </div>
    </div>
  </div>
);

export default Blog;
