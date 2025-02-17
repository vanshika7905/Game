let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");

let newbtn = document.querySelector("#new-btn");

let msgcontainer = document.querySelector(".msg-container");

let turnO = true;

let count = 0;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>
{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click",() =>{
        count++;
        if (turnO){ //player O turns
        box.innerText= "O";
        box.classList.add("red");
        box.classList.remove("blue");
        turnO = false;
        }
else {
    //player X turns
    box.innerText= "X";
    box.classList.add("blue");
    box.classList.remove("red");
    turnO = true;
}
if(count === 9)
{
    msg.innerText= "It's a Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
    count =0;
}
box.disabled = true; //button is disabled cannot be clicked again
checkwinner();
});
});
const disableboxes =() =>
    {
        for (let box of boxes){
            box.disabled = true;
        }
    };
    const enableboxes =() =>
        {
            for (let box of boxes){
                box.disabled = false;
                box.innerText = "";
            }
        };
const checkwinner = () =>
{
    for (let pattern of winpatterns){
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;
    
    if(posval1 != "" && posval2 != "" && posval3 != "") 
    {
        if(posval1 == posval2 && posval2 == posval3){
            showwinner(posval1);
        
        }
    }
    }
};

const showwinner = (winner) =>
{
msg.innerText = `Congratulations! Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);