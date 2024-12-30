import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#282c34", color: "#fff", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {/* Google Maps */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <h4>Our Location</h4>
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509482!2d144.95373551550443!3d-37.81627937975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6ab2ec45d21!2sTemple!5e0!3m2!1sen!2s!4v1698544741223!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div style={{ textAlign: "center" }}>
          <h4>Contact Us</h4>
          <p>Email: templeinfo@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        {/* Important Links */}
        <div style={{ textAlign: "center" }}>
          <h4>Important Links</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li>
              <a href="#about" style={{ color: "#61dafb", textDecoration: "none" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" style={{ color: "#61dafb", textDecoration: "none" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: "#61dafb", textDecoration: "none" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p>&copy; {new Date().getFullYear()} Temple Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
