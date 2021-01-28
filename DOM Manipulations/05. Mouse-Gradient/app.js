function attachGradientEvents() {
    const div = document.getElementById("gradient");
    const result = document.getElementById("result");

    div.addEventListener("mousemove", function (e) {
        e.preventDefault();

        let x = e.offsetX;
        let percent = Math.floor(x / this.clientWidth * 100);
        result.textContent = `${percent}%`;
    })

    div.addEventListener("mouseout", function (e) {
        result.textContent = "";
    })
}