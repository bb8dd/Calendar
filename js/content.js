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
const dateAll = document.querySelector(".date");
const date = document.querySelectorAll(".date > div")

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const modal = document.querySelector(".modal");

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
    /* 반복 하는 부분 */
    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 0).getDay() + 1;

    let thisMonthDate = 1;
    let lastMonthDate = new Date(year, monthIndex, 0).getDate() - (firstDay - 1);

    if (firstDay !== 7) {
        for (let i = 0; i < firstDay; i++) {
            const dateTag = document.createElement("div");
            dateTag.innerText = lastMonthDate;
            dateTag.className = "last-month-date";
            dateAll.appendChild(dateTag);
            lastMonthDate++;
        }
    }
    for (let i = 0; i <= lastDate; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = thisMonthDate;
        if ((time.getDate() == thisMonthDate) && (monthIndex === time.getMonth() && year === time.getFullYear())) {
            dateTag.className = "today";
        }
        dateAll.appendChild(dateTag);
        thisMonthDate++;
    }
    paintGit();
    /* 반복 하는 부분 */
}

//* 저번 달 넘어가는 함수
const handlePrevMonth = () => {
    dateAll.innerHTML = "";
    if (monthIndex === 0) {
        monthIndex = 11;
        year -= 1;
        console.log(year);
    } else {
        monthIndex -= 1;
    }

    /* 반복되는 부분 */
    const nextMonth = monthList[monthIndex];
    month.innerText = `${nextMonth}${year}`

    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 0).getDay() + 1;

    let thisMonthDate = 1;
    let lastMonthDate = new Date(year, monthIndex, 0).getDate() - (firstDay - 1);
    if (firstDay !== 7) {
        for (let i = 0; i < firstDay; i++) {
            const dateTag = document.createElement("div");
            dateTag.innerText = lastMonthDate;
            dateTag.className = "last-month-date";
            dateAll.appendChild(dateTag);
            lastMonthDate++;
        }
    }
    for (let i = 1; i <= lastDate; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = thisMonthDate;
        if ((time.getDate() == thisMonthDate) && (monthIndex === time.getMonth() && year === time.getFullYear())) {
            dateTag.className = "today";
        }
        dateAll.appendChild(dateTag);
        thisMonthDate++;
    }
    paintGit();
    /* 반복되는 부분 */
}

//* 다음 달 넘어가는 함수
const handleNextMonth = () => {
    dateAll.innerHTML = "";
    if (monthIndex === 11) {
        monthIndex = 0;
        year += 1;
    } else {
        monthIndex += 1;
    }

    const nextMonth = monthList[monthIndex];
    month.innerText = `${nextMonth}${year}`

    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 0).getDay() + 1;

    let thisMonthDate = 1;
    let lastMonthDate = new Date(year, monthIndex, 0).getDate() - (firstDay - 1);
    if (firstDay !== 7) {
        for (let i = 0; i < firstDay; i++) {
            const dateTag = document.createElement("div");
            dateTag.innerText = lastMonthDate;
            dateTag.className = "last-month-date";
            dateAll.appendChild(dateTag);
            lastMonthDate++;
        }
    }
    for (let i = 1; i <= lastDate; i++) {
        const dateTag = document.createElement("div");
        dateTag.innerText = thisMonthDate;
        if ((time.getDate() == thisMonthDate) && (monthIndex === time.getMonth() && year === time.getFullYear())) {
            dateTag.className = "today";
        }
        dateAll.appendChild(dateTag);
        thisMonthDate++;
    }
    paintGit();
}

//* GitBox 그리는 함수 

const paintGit = () => {
    const gitBox = document.createElement("div")
    gitBox.innerHTML = `
                    <a href="https://github.com/bb8dd">
                    <svg
                    style="margin-top: 30px;"
                    xmlns="http://www.w3.org/2000/svg"
                    day="day"
                    width="40"
                    height="40"
                    viewbox="0 0 999.937 999.937"><path
                    style="fill: wheat;"
                    d="M0 499.968c0-138.012 48.825-255.843 146.476-353.493C244.125 48.825 361.956 0 499.969 0 637.98 0 755.811 48.825 853.462 146.475c97.649 97.65 146.475 215.481 146.475 353.493s-48.825 255.843-146.475 353.493c-97.65 97.65-215.481 146.476-353.493 146.476-138.013 0-255.844-48.825-353.493-146.476C48.825 755.812 0 637.979 0 499.968zm54.684 0c0 122.389 43.617 227.199 130.851 314.434 87.234 87.233 192.045 130.851 314.434 130.851 122.388 0 227.199-43.617 314.433-130.851 87.234-87.234 130.851-192.045 130.851-314.434 0-122.388-43.616-227.199-130.851-314.433C727.168 98.301 622.356 54.684 499.969 54.684c-122.389 0-227.199 43.617-314.434 130.851C98.301 272.769 54.684 377.58 54.684 499.968zm140.617 107.415c-2.604-2.604-2.604-5.208 0-7.812 5.207-5.208 11.718-7.161 19.529-5.859 7.812 1.302 12.369 2.604 13.671 3.906 9.114 3.906 19.205 12.694 30.271 26.366 11.066 13.671 19.855 23.11 26.366 28.318 31.248 26.04 63.146 27.993 95.696 5.859 2.604-9.114 6.836-16.926 12.694-23.437 5.858-6.51 11.393-11.066 16.601-13.671 5.209-2.604 14.323-6.51 27.343-11.718-42.967-3.906-77.795-11.393-104.486-22.46s-47.849-25.063-63.473-41.989c-20.832-23.436-33.527-54.033-38.084-91.791-4.558-37.758-1.628-72.261 8.789-103.509 7.812-19.53 18.879-37.106 33.2-52.731-10.416-32.55-8.463-69.657 5.859-111.321 41.664 2.604 79.422 16.926 113.274 42.966 65.1-16.926 132.804-17.577 203.111-1.953 9.114-6.51 23.111-14.647 41.989-24.413 18.879-9.765 42.641-15.299 71.285-16.601 5.208 14.322 8.789 31.248 10.742 50.778s.977 37.758-2.929 54.684c29.945 31.248 45.569 72.912 46.871 124.992 0 41.664-7.16 76.167-21.482 103.509s-39.711 50.127-76.167 68.354c-24.738 11.719-57.288 18.879-97.65 21.483 18.229 9.114 31.574 18.554 40.037 28.319 8.464 9.765 13.997 25.063 16.602 45.895v61.521l1.952 59.566c3.906 6.511 8.464 12.044 13.672 16.602 5.208 4.557 9.765 7.812 13.671 9.765 3.905 1.953 5.208 4.883 3.905 8.789-1.302 3.906-6.51 5.859-15.623 5.859-22.135 0-39.711-7.812-52.731-23.437-3.906-6.51-5.859-14.321-5.859-23.436v-93.744c0-10.416-2.604-17.903-7.812-22.46-5.208-4.558-10.416-7.487-15.624-8.789v123.039c0 22.134 2.604 36.456 7.812 42.966s8.463 13.021 9.766 19.53c1.302 1.302.325 2.278-2.93 2.929-3.254.65-8.788-.325-16.601-2.929-16.926-3.906-28.644-12.695-35.154-26.366-6.51-13.671-9.765-28.319-9.765-43.943V667.926H488.25v121.086c0 15.624-3.256 30.598-9.766 44.919-9.113 18.229-26.04 27.993-50.777 29.295-3.906-1.302-5.859-2.604-5.859-3.905 1.302-1.303 5.208-7.812 11.718-19.53 1.302-2.604 2.93-7.812 4.883-15.624 1.954-7.812 2.93-16.926 2.93-27.342v-123.04c-5.208 1.302-10.091 4.231-14.648 8.789s-6.836 12.044-6.836 22.46v93.744c0 9.113-1.953 16.926-5.859 23.436-11.718 15.624-29.295 23.437-52.73 23.437-9.114 0-14.322-1.953-15.624-5.859-1.303-2.604-.977-4.883.977-6.836s4.883-4.232 8.789-6.836c3.906-2.604 6.51-4.558 7.812-5.859 5.208-3.906 9.113-9.114 11.718-15.624 3.906-5.208 4.882-18.879 2.929-41.013s-2.279-36.456-.977-42.966c-33.853 11.718-68.355 5.858-103.51-17.577-10.416-10.416-20.832-25.39-31.248-44.919-7.812-14.323-23.436-31.249-46.871-50.779z"/>
                    </svg>
                    </a>`

    dateAll.appendChild(gitBox)
}


window.addEventListener("load", paintYearMonth);
window.addEventListener("load", paintThisDate);
prevBtn.addEventListener("click", handlePrevMonth);
nextBtn.addEventListener("click", handleNextMonth);
