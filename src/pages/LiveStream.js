import React from "react";
import { Box, Typography, Container } from "@mui/material";

import ResponsiveNavbar from "../components/ResponsiveNavbar";

const LiveStream = () => {

  const videoSource = "https://www.youtube.com/embed/Ko18SgceYX8?si=iD6oxo167Oj6wgka";

  return (
    <div style={{ opacity: 1 }}> 
      <ResponsiveNavbar /> 

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            Live Stream
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Join our live broadcast and experience the event in real-time.
          </Typography>
        </Box>

        {/* Animated video container */}
        <>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", 
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
                height: "100%", 
              }}
            ></iframe>
          </Box>
        </>

        <Box textAlign="center">
          <Typography variant="body1">
            Thank you for joining! Make sure to subscribe for future updates and
            events.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default LiveStream;
