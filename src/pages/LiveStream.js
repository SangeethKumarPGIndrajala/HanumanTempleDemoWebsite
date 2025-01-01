import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

const LiveStream = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const videoSource = "https://www.youtube.com/embed/Ko18SgceYX8?si=iD6oxo167Oj6wgka" ;
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <ResponsiveNavbar/>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            Live Stream
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Join our live broadcast and experience the event in real-time.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            paddingTop: "56.25%", // 16:9 aspect ratio
            marginBottom: 4,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
          }}
        >
          <iframe
            src={videoSource}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%", // Ensure iframe covers the parent
            }}
          ></iframe>
        </Box>

        <Box textAlign="center">
          <Typography variant="body1">
            Thank you for joining! Make sure to subscribe for future updates and
            events.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default LiveStream;
