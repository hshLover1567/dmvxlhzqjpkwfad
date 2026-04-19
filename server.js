const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

// หน้าแรก
app.get("/", (req, res) => {
    res.send("API HSH ทำงานแล้ว!");
});

// ตัวอย่าง API
app.get("/apihsh/player/:id", (req, res) => {
    res.json({
        id: req.params.id,
        name: "Player_" + req.params.id
    });
});

// 🔥 อันนี้สำคัญ (ถ้าไม่มี = ไม่ทำงาน)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});