import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Pagination, Grid } from "@mui/material";

const poojasData = [
  {
    id: 1,
    name: "Ganapathi Homam",
    description: "Invoke Lord Ganesha's blessings for prosperity and obstacle removal.",
    price: "₹1500",
    image: "poojas/ganapathy-homam.jpeg",
  },
  {
    id: 2,
    name: "Navagraha Pooja",
    description: "Seek balance and harmony by worshipping the nine planetary deities.",
    price: "₹2500",
    image: "poojas/navagraha-pooja.jpeg",
  },
  {
    id: 3,
    name: "Rudrabhishekam",
    description: "Anoint Lord Shiva with offerings for peace and spiritual upliftment.",
    price: "₹3000",
    image: "poojas/rudrabhishekam-pooja.jpeg",
  },
  {
    id: 4,
    name: "Lakshmi Pooja",
    description: "Worship the Goddess of Wealth to attract prosperity and abundance.",
    price: "₹2000",
    image: "poojas/lakshmi-pooja.jpeg",
  },
  // Add more poojas as needed
];

const PoojasSection = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedPoojas = poojasData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Pooja Offerings
      </Typography>
      <Grid container spacing={3}>
        {displayedPoojas.map((pooja) => (
          <Grid item xs={12} sm={6} md={4} key={pooja.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={pooja.image}
                alt={pooja.name}
              />
              <CardContent>
                <Typography variant="h6">{pooja.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {pooja.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {pooja.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(poojasData.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default PoojasSection;
