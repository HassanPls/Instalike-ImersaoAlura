import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Um gato",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um gato fofo",
    imagem: "https://placecats.com/felix/300/150",
  },
  {
    id: 3,
    descricao: "Um gato curioso",
    imagem: "https://placecats.com/curious/300/150",
  },
  {
    id: 4,
    descricao: "Um gato sonolento",
    imagem: "https://placecats.com/sleepy/300/150",
  },
  {
    id: 5,
    descricao: "Um gato brincalhão",
    imagem: "https://placecats.com/playful/300/150",
  },
  {
    id: 6,
    descricao: "Um gato com olhos verdes",
    imagem: "https://placecats.com/green-eyes/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando.");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
