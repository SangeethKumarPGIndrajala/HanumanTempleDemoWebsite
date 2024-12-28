import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <CarouselSlider />
      <div className="row mt-2">
        <div className="col-sm-6 col-md-6">
          <img src="hanuman-hero1.jpg" style={{ width: "100%" }} />
          <img src="hanuman-hero2.jpg" style={{ width: "100%" }} />
          <img src="hanuman-hero3.jpg" style={{ width: "100%" }} />
        </div>
        <div className="col-md-6 p-5">
          <div className="jumbotron text-center">
            <h1 className="display-4">Welcome to Hanuman Temple</h1>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <button className="btn btn-secondary rounded-circle" disabled>
                <img src="tick-icon.svg" alt="Tick Icon" />
              </button>
              <p className="mt-2">100 % Peace of mind</p>
            </div>
            <div className="col-md-4 text-center">
              <button className="btn btn-secondary rounded-circle" disabled>
                <img src="tick-icon.svg" alt="Tick Icon" />
              </button>
              <p className="mt-2">100 % Satisfaction</p>
            </div>
            <div className="col-md-4 text-center">
              <button className="btn btn-secondary rounded-circle" disabled>
                <img src="tick-icon.svg" alt="Tick Icon" />
              </button>
              <p className="mt-2">100 % Serenity</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie tellus quis dui porttitor aliquet. Fusce a
                lorem porttitor, rutrum arcu sit amet, vehicula nunc. Morbi
                hendrerit sit amet magna at aliquam. Aenean sodales efficitur
                massa non pellentesque. Suspendisse vel orci commodo, facilisis
                dui at, aliquam justo. Suspendisse ornare tellus vel
                sollicitudin posuere. Quisque venenatis viverra fermentum. Cras
                volutpat, leo vitae viverra pharetra, nulla sem finibus dui, id
                venenatis est turpis ut lorem. Nunc id sollicitudin nulla. Sed
                vel quam non velit laoreet rutrum sit amet in sem. Donec maximus
                est ac leo consectetur, et auctor nibh tincidunt. Cras quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
