import React from "react";
import people1 from "../../images/people-1.png";
import people2 from "../../images/people-2.png";
import BlogDetails from "../BlogDetails/BlogDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blogs = () => {
  const blogsInfo = [
    {
      name: "Winson",
      img: people1,
      description:
        "Some quick example text to build on the card title and make up.",
      city: "California",
      title:'2 times brush in a day can keep you healthy',
    },
    {
      name: "Winson",
      img: people2,
      description:
        "Some quick example text to build on the card title and make up.",
      city: "California",
      title:'The tooth cancer is taking a challenge',
    },
  ];

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="">
        <h5 style={{ color: "#1cc7c1" }}>OUR BLOGS</h5>
        <h1 style={{ color: "#3a4256" }}>From Our Blog News</h1>
      </div>
      <div className="my-5">
        <div className="row">
          <div className="col-md-4 left-blog-container p-4 rounded overflow-hidden">
            <h6 className="text-light pt-3 ps-3">Rashed Kabir</h6>
            <small className="text-light ps-3">22 Aug 2022</small>
            <h5 className="py-3 text-light ps-3 py-4">Check at least a docter in a  <br /> yer for your teeth</h5>
            <FontAwesomeIcon className="text-light ps-3 fs-1" style={{paddingTop:'90px'}} icon={faArrowRightLong} />
          </div>
          <div className="col-md-8">
            <div className="row">
            {blogsInfo.map((blog) => (
              <BlogDetails blog={blog} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
