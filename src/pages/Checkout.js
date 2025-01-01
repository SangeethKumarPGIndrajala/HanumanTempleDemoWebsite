import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { motion } from "framer-motion";

function Checkout() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const cart = useSelector((state) => state.poojaOrders);
  console.log("Cart : ", cart);
  const cartItems = cart?.poojaOrders ? cart.poojaOrders : [];
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <ResponsiveNavbar />
      <Box
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          padding: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {cartItems.length > 0 ? "Your Pooja Orders" : "No Pooja Orders"}
        </Typography>

        <List>
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`${item.poojaName} by ${item.devoteeName} ${item.birthStar} നക്ഷത്രം`}
                  secondary={`₹${parseFloat(item.poojaPrice)}`}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  ₹{parseFloat(item.poojaPrice)}
                </Typography>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
            paddingTop: 2,
            borderTop: "2px solid #ddd",
          }}
        >
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ₹{parseFloat(cart?.totalPrice)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
            padding: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "red",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
            disabled={cartItems.length === 0}
            fullWidth
            onClick={() => {
              console.log("Go to cart page");
            }}
          >
            clear cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={cartItems.length === 0}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Checkout;
