const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PROTOTYPE_PORT || 2026;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "project.html"));
});

app.listen(PORT, () => {
    console.log(`EstateX prototype: http://localhost:${PORT}`);
});
