const month = document.querySelector(".month");
const date = document.querySelector(".date");

const getYearMonth = () => {
    const time = new Date();
    const dateMonth = String(time.getMonth() + 1).padStart(2, "0");
    const dateYear = String(time.getFullYear());
    month.innerText = `${dateYear}.${dateMonth}`
}

const getThisMonth = () => {

   let dateCount = 1;
   const time = new Date();
   const nowYear = time.getFullYear();
   const nowMonth = time.getMonth()+1;

   const lastDate = new Date(nowYear, nowMonth, 0).getDate();
   const firstDay = new Date(nowYear, nowMonth-1, 0).getDay() + 1;
   console.log("이번 달 마지막",lastDate);
   console.log("이번 달 첫 요일",firstDay);

   for(let i = 0; i < firstDay; i++ ){
      console.log(i);
      const dateTag = document.createElement("div");
      date.appendChild(dateTag);
   }
   for(let i = 0; i <= lastDate; i++){
      const dateTag = document.createElement("div");
      dateTag.innerText = dateCount;
      date.appendChild(dateTag);
      dateCount++;
   }
}


window.addEventListener("load", getYearMonth)
window.addEventListener("load", getThisMonth)

