import "../css/LandingPage.css";
import React from "react";

function LandingPage() {
  return (
    <main className="background-tertiary">
      <div className="position-relative overflow-hidden p-3 p-md-5  text-center background-primary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Yoga With Corinna</h1>
          <h3 className="fw-normal text-muted mb-3">Energize your flow</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <a className="icon-link" href="#">
              Learn more
              <svg className="bi">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
            <a className="icon-link" href="#">
              Buy
              <svg className="bi">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>

        <div className="sliced-image"></div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="position-relative me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-grow-1">
          <div class="my-3 py-3 z-1 position-relative">
            <h2 class="display-5">Your Guide to Wellness</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div className="lake-image"></div>
        </div>
        <div class="position-relative me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden  flex-grow-1">
          <div class="my-3 p-3 z-1 position-relative ">
            <h2 class="display-5">Nurturing Your Mind, Body, and Soul</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div className="lake-image-2"></div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
