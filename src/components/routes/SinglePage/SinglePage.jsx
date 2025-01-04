import React from "react";
import "./SinglePage.scss";
import { Slider } from "../../slider/Slider";
import { singlePost } from "../../../lib/data";
import Map from "../../../components/map/Map";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePost.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePost.address}</span>
                </div>
                <div className="price">${singlePost.price}</div>
              </div>
            </div>
            <div className="bottom">{singlePost.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Client is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Policies</span>
                <p>new polices</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>new</span>
                <p>new one</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>10CM</span>
            </div>
            <div className="size">
              <img src="/size.png" alt="" />
              <span>10CM</span>
            </div>
            <div className="size">
              <img src="/size.png" alt="" />
              <span>10CM</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePost]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
