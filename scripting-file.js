function save() {
    var content = document.getElementById("input").value;
    var text = document.getElementById("list");
    
    var newpara = document.createElement('p');
    newpara.textContent = content;
    newpara.style.borderBottom = "1px solid black";

    text.appendChild(newpara);
    var count=0;
    newpara.addEventListener('click', function () {
        count=count+1;
        this.classList.toggle('line-through');
        if(count==2){
            this.remove();
        }
    });
    document.getElementById("input").value = "";
}

function clearlist() {
    document.getElementById("list").textContent = "";
}