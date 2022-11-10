const playBtn = document.getElementById("playbtn");
const dLeft = document.getElementById("left");
const dRight = document.getElementById("right");
const show = document.getElementById("result");

const dice = ["one","two","three","four","five","six"];

playBtn.addEventListener("click",()=>{
    reset();
    Random();
})

Random = () =>{
    let leftS = (Math.random()*5).toFixed();
    let rightS = (Math.random()*5).toFixed();
    check(leftS,rightS);
    changeStyle(leftS,rightS);
    console.log(dice[leftS]);
    console.log(dice[rightS]);
}

check = (l,r) =>{
    if (l>r){
        show.innerHTML = "พระคิน 1 ชนะโว้ยย!!";
        dLeft.classList.add("win");
    } else if (r>l){
        show.innerHTML = "พระคิน 2 ชนะว้อยย!!";
        dRight.classList.add("win");
    }else{
        show.innerHTML = "เสมอไอน้อง!!";
    }
}

changeStyle = (l,r) =>{
    dLeft.classList.add(dice[l]);
    dRight.classList.add(dice[r]);
}

reset = () => {
    dLeft.className = "dice";
    dRight.className = "dice";
}
