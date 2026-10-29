const btn = document.getElementById("darkModeBtn");

btn.onclick = function () {
    document.body.classList.toggle("light");
};
const title = document.querySelector("header h1");

setInterval(() => {
    title.style.color = "#38bdf8";

    setTimeout(() => {
        title.style.color = "white";
    }, 500);

}, 1500);
const numbers = document.querySelectorAll(".stat-box h2");

numbers.forEach((number) => {
    const target = parseInt(number.innerText);

    let count = 0;

    const update = setInterval(() => {
        count++;

        number.innerText = count;

        if (count >= target) {
            clearInterval(update);

            if (target === 10) {
                number.innerText = "10+";
            }

            if (target === 100) {
                number.innerText = "100+";
            }
        }
    }, 20);
});
const topBtn = document.getElementById("topBtn");

topBtn.onclick = function () {
    alert("کار میکنه");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
