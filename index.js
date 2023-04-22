const number=Math.floor(Math.random()*100);
const id=document.querySelector("#id");
const advice=document.querySelector("#advice");
const btn=document.querySelector(".btn")
function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
  
        id.innerHTML = `${dataId}`;
        advice.innerHTML = dataAdvice;
      });
  }
  btn.addEventListener("click",()=>{
    generateAdvice();
  })
