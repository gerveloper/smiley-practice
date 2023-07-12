import "./styles.css";

const mouth = document.querySelector(".mouth");
const f = document.querySelector(".f-off");

function control(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log("Up");
      mouth.className = "";
      mouth.classList.add("happy-mouth");
      break;

    case "ArrowDown":
      console.log("Down");
      mouth.className = "";
      mouth.classList.add("sad-mouth");
      break;

    case "f":
      console.log("f");
      f.classList.toggle("f-on");
      break;

      case " ":
        console.log('Space')
        mouth.className = "";
      break;

    default:
      console.log("Other key");
      mouth.className = "";
      mouth.classList.add("appalling-life-mouth");
  }
}

document.addEventListener("keyup", control);
