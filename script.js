// crud JavasScript Basico
const miniTwitter = {
  usuarios: [
    {
      username: "mathias",
    },
  ],
  posts: [
    {
      owner: "mathias",
      content: "meu primeiro tweet",
    },
  ],
};
// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    owner: dadnos.owner,
    content: dados.content,
  });
}
criaPost({ owner: mathias, content: "segundo tweet" });
console.log(miniTwitter.posts);
//READ
//UPDATE
//DELETE
