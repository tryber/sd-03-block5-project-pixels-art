window.onload = () => {
    sessionStorage.setItem("SelectedColor", "black")
    document.querySelectorAll('.color').forEach(element => element.addEventListener("click", (event) => {
        sessionStorage.setItem("SelectedColor", event.toElement.attributes.value.value)
    }))
    document.querySelectorAll('.pixel').forEach(element => element.addEventListener("click", (event) => {
        event.srcElement.style.backgroundColor = sessionStorage.getItem("SelectedColor")
    }));
}
