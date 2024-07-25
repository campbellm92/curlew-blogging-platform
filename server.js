const express = require("express");
const fs = require("fs");
const path = require("path");
const marked = require("marked");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("posts", (req, res) => {
  const postsDir = path.join(__dirname, "posts");
  fs.readdir(postsDir, (error, files) => {
    if (error) {
      return res.status(500).json({ error: "Unable to read posts directory." });
    }
    const posts = files.map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const title = content.split("")[0].replace("/^#s*/, ''");
      return { file, title };
    });
    res.json(posts);
  });
});

app.get("/post/:file", (req, res) => {
  const filePath = path.join(__dirname, "posts", req.params.file);
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      return res.status(404).send("Post not found.");
    }
    const htmlContent = marked(content);
    res.send(htmlContent);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
