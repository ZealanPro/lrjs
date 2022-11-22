let squares = document.querySelectorAll(".square")

squares.forEach(element => {
    element.onmouseover = function() {
        element.style.background = "red"
    }
});

squares.forEach(element => {
    element.onclick = function() {

        let new_element = document.createElement('img')
        new_element.setAttribute("class", "square")
        new_element.style.background = "#fff"
        element.replaceWith(new_element)
    }
});