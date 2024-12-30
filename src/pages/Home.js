import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { motion } from "framer-motion";
import TempleTimings from "../components/TempleTimings";
import PoojasSection from "../components/PoojasSection";
import ImportantDays from "../components/ImportantDays";
import Footer from "../components/Footer";

function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <ResponsiveNavbar />
      <CarouselSlider />
      <div className="container-fluid px-0">
        {/* Row 1 */}
        <motion.div
          className="row text-center align-items-center content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="col-md-6 order-2 order-md-1">
            <img
              src="hanuman-hero1.jpg"
              style={{ width: "100%" }}
              alt="Hanuman Hero 1"
            />
          </div>
          <div className="col-md-6 order-1 order-md-2 p-5">
            <motion.div
              className="jumbotron text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="display-4">Welcome to Hanuman Temple</h1>
            </motion.div>
            <div className="row mt-4">
              {["Spiritual Tranquility", "Divine Blessings", "Inner Peace"].map(
                (text, index) => (
                  <motion.div
                    className="col-md-4 text-center"
                    key={index}
                    whileHover={{ scale: 1.1 }}
                  >
                    <button
                      className="btn btn-secondary rounded-circle"
                      disabled
                    >
                      <img src="tick-icon.svg" alt="Tick Icon" />
                    </button>
                    <p className="mt-2">{text}</p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="row text-center align-items-center content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="col-md-6 p-5">
            <motion.div
              className="jumbotron text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="display-4">Hanuman Temple Insights</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie tellus quis dui porttitor aliquet. Fusce a lorem
              porttitor, rutrum arcu sit amet, vehicula nunc. Morbi hendrerit
              sit amet magna at aliquam. Aenean sodales efficitur massa non
              pellentesque.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="hanuman-hero2.jpg"
              style={{ width: "100%" }}
              alt="Hanuman Hero 2"
            />
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="row text-center align-items-center content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="col-md-6 order-2 order-md-1">
            <img
              src="hanuman-hero3.jpg"
              style={{ width: "100%" }}
              alt="Hanuman Hero 3"
            />
          </div>
          <div className="col-md-6 order-1 order-md-2 p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              venenatis viverra fermentum. Cras volutpat, leo vitae viverra
              pharetra, nulla sem finibus dui, id venenatis est turpis ut lorem.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <TempleTimings />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <PoojasSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <ImportantDays />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Footer/>
      </motion.div>
    </>
  );
}

export default Home;
