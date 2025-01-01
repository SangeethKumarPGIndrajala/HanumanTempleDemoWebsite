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
import { useDispatch, useSelector } from "react-redux";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

import { resetPoojaOrders } from "../redux/orderSlice";

function Checkout() {
    const dispatch = useDispatch();


  const cart = useSelector((state) => state.poojaOrders);
  const cartItems = cart?.poojaOrders ? cart.poojaOrders : [];
  const handleClearCart = () => {
    dispatch(resetPoojaOrders());
  }

  return (
    <div style={{ opacity: 1 }}>
      {" "}
      {/* Fallback visibility to prevent blank screen */}
      <ResponsiveNavbar />{" "}
      {/* Navbar remains static, unaffected by animation */}
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
        <>
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
              onClick={handleClearCart}
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
        </>
      </Box>
    </div>
  );
}

export default Checkout;
