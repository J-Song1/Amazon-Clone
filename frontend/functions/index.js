const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const KEY = "sk_test_51InCWTEc3fUrbgHx7mE1wxB0MxaNGVA38aZCpowzFThQPQih9YVuZfQeQkA6UCbqMjHvaSyfaAeyBWkEaBrOVJSJ005jvgJ8oM";
const stripe = require("stripe")(KEY);

// App Config
const app = express();

// Middlewares
app.use(cors({ 
  origin: true
}));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/test", (req, res) => {
  res.status(200).send("Bad Test");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  
  console.log("Payment Requet Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits - cents
    currency: "usd"
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// Listen command

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);