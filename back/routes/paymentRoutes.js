import { Router } from "express";
import Razorpay from "razorpay";
import { createHmac } from "crypto";
import dotenv from "dotenv";

dotenv.config();
const paymentRouter = Router();

const { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } = process.env;

// Configure Razorpay instance
const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_SECRET_KEY,
});

// Create order
paymentRouter.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // Amount in paise
    currency: "INR",
    receipt: `order_rcpt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// Verify payment
paymentRouter.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = createHmac("sha256", RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Invalid payment signature" });
  }
});

export default paymentRouter;
