const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files from 'public' folder

let products = [
  {
    id: 1,
    name: "Apple Watch Ultra 2 with Alpine Loop",
    price: 15499000,
    description:
      "Apple Watch paling tangguh dan andal. Dirancang untuk petualangan outdoor dan olahraga berat dengan casing titanium ringan, kekuatan baterai lebih lama, dan layar paling terang yang pernah ada. Dengan gerakan ketuk dua kali, sebuah cara istimewa untuk berinteraksi dengan Apple Watch.",
    imageUrl: "/images/applewatch.png", // Added image URL
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 18249000,
    description:
      "iPhone 15 Pro Max. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal yang pernah ada.",
    imageUrl: "/images/smartphone.png", // Added image URL
  },
  {
    id: 3,
    name: "MacBook Pro M3 Max",
    price: 68499000,
    description:
      "MacBook Pro 16 inci melesat berkat M3 Pro dan M3 Max, chip yang sepenuhnya canggih serta menghadirkan kemampuan dan performa masif untuk alur kerja paling ekstrem. Dengan kekuatan baterai terbaik di kelasnya — hingga 22 jam — dan layar Liquid Retina XDR menawan, ini adalah laptop profesional yang tak ada tandingannya. Kini dalam warna baru: Hitam Kosmik.",
    imageUrl: "/images/macbookpro.png", // Added image URL
  },
];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST a new product
app.post("/api/products", (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  if (!name || !price || !description || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
    imageUrl,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET a specific product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// PUT (update) a product
app.put("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });

  const { name, price, description, imageUrl } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (description) product.description = description;
  if (imageUrl) product.imageUrl = imageUrl;

  res.json(product);
});

// DELETE a product
app.delete("/api/products/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  products.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
