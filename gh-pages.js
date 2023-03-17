import { publish } from "gh-pages";

publish("build", {
  branch: "gh-pages",
  repo: "https://github.com/DoormatIka/reviewer.git",
  user: {
    name: "DoormatIka",
    email: "trashcanartistlily@gmail.com"
  },
  dotfiles: true,
}, () => {
  console.log("Deployed.")
})