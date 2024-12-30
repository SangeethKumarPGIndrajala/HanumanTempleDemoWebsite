import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Box, Container } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const TempleTimings = () => {
  const morningEvents = [
    { time: "5:00 AM", event: "Temple Opens and Morning Prayer" },
    { time: "6:00 AM", event: "Special Pooja" },
    { time: "7:00 AM", event: "Devotee Darshan Begins" },
  ];

  const eveningEvents = [
    { time: "5:00 PM", event: "Evening Aarti" },
    { time: "6:00 PM", event: "Special Rituals and Offerings" },
    { time: "8:00 PM", event: "Temple Closes" },
  ];

  const renderTimelineItems = (events, icon) =>
    events.map((event, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot color="primary">{icon}</TimelineDot>
          {index < events.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" color="text.primary">
            {event.time}
          </Typography>
          <Typography color="text.secondary">{event.event}</Typography>
        </TimelineContent>
      </TimelineItem>
    ));

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Temple Schedule
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Morning Timeline
        </Typography>
        <Timeline>{renderTimelineItems(morningEvents, <WbSunnyIcon />)}</Timeline>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          Evening Timeline
        </Typography>
        <Timeline>{renderTimelineItems(eveningEvents, <NightsStayIcon />)}</Timeline>
      </Box>
    </Container>
  );
};

export default TempleTimings;
