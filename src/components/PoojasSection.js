import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination,
  Grid,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addPoojaOrder } from "../redux/orderSlice";

const poojasData = [
  {
    id: 1,
    name: "Ganapathi Homam",
    description:
      "Invoke Lord Ganesha's blessings for prosperity and obstacle removal.",
    price: "₹1500",
    image: "poojas/ganapathy-homam.jpeg",
  },
  {
    id: 2,
    name: "Navagraha Pooja",
    description:
      "Seek balance and harmony by worshipping the nine planetary deities.",
    price: "₹2500",
    image: "poojas/navagraha-pooja.jpeg",
  },
  {
    id: 3,
    name: "Rudrabhishekam",
    description:
      "Anoint Lord Shiva with offerings for peace and spiritual upliftment.",
    price: "₹3000",
    image: "poojas/rudrabhishekam-pooja.jpeg",
  },
  {
    id: 4,
    name: "Lakshmi Pooja",
    description:
      "Worship the Goddess of Wealth to attract prosperity and abundance.",
    price: "₹2000",
    image: "poojas/lakshmi-pooja.jpeg",
  },
  // Add more poojas as needed
];

const PoojasSection = ({ isHome }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = isHome ? 3 : 9;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedPoojas = poojasData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const dispatch = useDispatch();
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [formData, setFormData] = useState({
    poojaName: "",
    devoteeName: "",
    birthStar: "",
    poojaPrice: 0,
    poojaTime: "",
  });
  const handleDialogueOpen = () => {
    setDialogueOpen(true);
  };
  const handleDialogueClose = () => {
    setDialogueOpen(false);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "poojaPrice" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = ()=>{
    dispatch(addPoojaOrder(formData));
    handleDialogueClose();
  }

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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    handleDialogueOpen();
                    setFormData({
                      ...formData,
                      poojaName: pooja.name,
                      poojaPrice: pooja.price.substring(1),
                    });
                  }}
                >
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

      <Dialog open={dialogueOpen} onClose={handleDialogueClose} fullWidth>
        <DialogTitle>Book Pooja</DialogTitle>
        <DialogContent>
          <TextField
            label="Pooja Name"
            name="poojaName"
            value={formData.poojaName}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Devotee Name"
            name="devoteeName"
            value={formData.devoteeName}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            select
            label="Birth Star"
            name="birthStar"
            value={formData.birthStar}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            SelectProps={{
              native: true,
            }}
          >
            <option value="" disabled>
             
            </option>
            {[
              "അശ്വതി",
              "ഭരണി",
              "കാർത്തിക",
              "രോഹിണി",
              "മകയിരം",
              "തിരുവാതിര",
              "പുണർതം",
              "പൂയം",
              "ആയില്യം",
              "മകം",
              "പൂരം",
              "ഉത്രം",
              "അത്തം",
              "ചിത്ര",
              "ചോതി",
              "വിശാഖം",
              "അനിഴം",
              "തൃക്കേട്ട",
              "മൂലം",
              "പൂരാടം",
              "ഉത്രാടം",
              "തിരുവോണം",
              "അവിട്ടം",
              "ചതയം",
              "പൂരുരുട്ടാതി",
              "ഉത്രട്ടാതി",
              "രേവതി",
            ].map((star, index) => (
              <option key={index} value={star}>
                {star}
              </option>
            ))}
          </TextField>
          <TextField
            label="Pooja Price"
            name="poojaPrice"
            type="number"
            value={formData.poojaPrice}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Pooja Time"
            name="poojaTime"
            type="datetime-local"
            value={formData.poojaTime}
            onChange={handleFormChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogueClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Book</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PoojasSection;
