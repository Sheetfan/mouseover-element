let root = document.querySelector("html");

let cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

let follower = document.createElement("div");
follower.classList.add("cursor","follower");
root.appendChild(follower);

root.addEventListener("mousemove",(e)=>{
    setPosition(cursor,e);
    setPosition(follower,e);
});

function setPosition(element,e){
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px,0`;
}