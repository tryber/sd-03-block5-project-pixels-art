window.onload = () => {
    sessionStorage.setItem("SelectedColor", "black")
    document.querySelectorAll('.color').forEach(element => element.addEventListener("click", (event) => {
      document.getElementsByClassName("selected")[0].classList.remove("selected")
      sessionStorage.setItem("SelectedColor", event.toElement.attributes.value.value)
      document.getElementsByClassName(sessionStorage.getItem("SelectedColor") + "-bg")[0].classList.add("selected")
    }))
    document.querySelectorAll('.pixel').forEach(element => element.addEventListener("click", (event) => {
        event.srcElement.style.backgroundColor = sessionStorage.getItem("SelectedColor")
    }));
}
