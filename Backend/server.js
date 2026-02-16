import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

// forcing nodejs to use google or cloudflare's dns server
import dns from "dns"
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send("server is live..."));

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
    connectDB();
});