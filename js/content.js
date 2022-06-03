const month = document.querySelector(".month");
const date = document.querySelector(".date");
const monthList = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]

const getYearMonth = () => {
    const time = new Date();
    const thisMonth = monthList[time.getMonth()];
    const thisYear = String(time.getFullYear());
    month.innerText = `${thisMonth}${thisYear}`
}

const getThisMonth = () => {
   
   const time = new Date();
   const nowYear = time.getFullYear();
   const nowMonth = time.getMonth()+1;

   const lastDate = new Date(nowYear, nowMonth, 0).getDate();
   const firstDay = new Date(nowYear, nowMonth-1, 0).getDay() + 1;
   console.log("이번 달 마지막",lastDate);
   console.log("이번 달 첫 요일",firstDay);

   let thisMonthDate = 1;
   let lastMonthDate = new Date(nowYear, nowMonth-1, 0).getDate() - (firstDay-1);

   for(let i = 0; i < firstDay; i++ ){
      console.log(i);
      const dateTag = document.createElement("div");
      dateTag.innerText = lastMonthDate;
      dateTag.className  = "last-month-date";
      date.appendChild(dateTag);
      lastMonthDate++;
   }
   for(let i = 0; i <= lastDate; i++){
      const dateTag = document.createElement("div");
      dateTag.innerText = thisMonthDate;
      if(time.getDate() == thisMonthDate){
         dateTag.className = "today";
         console.log("같은 날", thisMonthDate)
      }
      date.appendChild(dateTag);
      thisMonthDate++;
   }
}


window.addEventListener("load", getYearMonth)
window.addEventListener("load", getThisMonth)

