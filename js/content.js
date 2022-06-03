const month = document.querySelector(".month");

const getYearMonth = () => {
    const date = new Date();
    const dateMonth = String(date.getMonth() + 1).padStart(2, "0");
    const dateYear = String(date.getFullYear());
    month.innerText = `${dateYear}.${dateMonth}`
}

window.addEventListener("load", getYearMonth)