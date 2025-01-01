import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Details:", formData);
    // donation submission logic here
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <ResponsiveNavbar/>
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" gutterBottom>
              Donate Now
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Your contribution helps us make a difference.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Donation Amount (in INR ₹)"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Donate
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default Donation;
