import "./styles.css";

const mouth = document.querySelector(".mouth");
const v = document.querySelector(".vulcan-salute");

function control(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log("Up");
      mouth.className = "";
      // mouth.classList.remove("sad-mouth");
      // mouth.classList.remove("appalling-life-mouth");
      mouth.classList.add("happy-mouth");
      break;

    case "ArrowDown":
      console.log("Down");
      mouth.className = "";
      // mouth.classList.remove("happy-mouth");
      // mouth.classList.remove("appalling-life-mouth");
      mouth.classList.add("sad-mouth");
      break;

    case "v":
      console.log("v");
      // f.className = "";
      // mouth.classList.remove("happy-mouth");
      // mouth.classList.remove("appalling-life-mouth");
      v.classList.toggle("v-on");
      break;

    case " ":
      console.log("Space");
      mouth.className = "";
      break;

    default:
      console.log("Other key");
      mouth.className = "";
      // mouth.classList.remove("sad-mouth");
      // mouth.classList.remove("happy-mouth");
      mouth.classList.add("appalling-life-mouth");
  }
}

document.addEventListener("keyup", control);
