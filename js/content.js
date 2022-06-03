const monthList = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
]
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const time = new Date();

let monthIndex = time.getMonth();
let year = time.getFullYear();

//* 연도, 월 가져오는 함수
const paintYearMonth = () => {
    const thisMonth = monthList[monthIndex];
    month.innerText = `${thisMonth}${year}`
}

//* 이번달 date 그리는 함수
const paintThisDate = () => {

    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 0).getDay() + 1;

    let thisMonthDate = 1;
    let lastMonthDate = new Date(year, monthIndex, 0).getDate() - (firstDay - 1);

    for (let i = 0; i < firstDay; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = lastMonthDate;
        dateTag.className = "last-month-date";
        date.appendChild(dateTag);
        lastMonthDate++;
    }
    for (let i = 0; i <= lastDate; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = thisMonthDate;
        if (time.getDate() == thisMonthDate) {
            dateTag.className = "today";
        }
        date.appendChild(dateTag);
        thisMonthDate++;
    }
}

//* 저번 달 넘어가는 함수
const handlePrevMonth = () => {
    date.innerHTML = "";
    if (monthIndex === 0) {
        monthIndex = 12;
        year -= 1;
        console.log(year);
    }
    monthIndex = monthIndex - 1;
    const prevMonth = monthList[monthIndex];
    month.innerText = `${prevMonth}${year}`

    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 0).getDay() + 1;

    let thisMonthDate = 1;
    let lastMonthDate = new Date(year, monthIndex, 0).getDate() - (firstDay - 1);
    if (firstDay !== 7) {
        for (let i = 0; i < firstDay; i++) {
            const dateTag = document.createElement("div");
            dateTag.innerText = lastMonthDate;
            dateTag.className = "last-month-date";
            date.appendChild(dateTag);
            lastMonthDate++;
        }
    }
    for (let i = 1; i <= lastDate; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = thisMonthDate;
        if (time.getDate() == thisMonthDate) {
            dateTag.className = "today";
        }
        date.appendChild(dateTag);
        thisMonthDate++;
    }
}

//* 다음 달 넘어가는 함수
const handleNextMonth = () => {
    date.innerHTML = "";
    if (monthIndex === 11) {
        monthIndex = 0;
        year += 1;
    }
}

window.addEventListener("load", paintYearMonth);
window.addEventListener("load", paintThisDate);
prevBtn.addEventListener("click", handlePrevMonth);
nextBtn.addEventListener("click", handleNextMonth);