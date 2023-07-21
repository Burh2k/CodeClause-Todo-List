function save() {
    var content = document.getElementById("input").value;
    var text = document.getElementById("list");

    var newpara = document.createElement('p');
    newpara.textContent = content;
    newpara.classList.add('paragragh-styling');
    newpara.style.borderBottom("black");

    text.appendChild(newpara);
    document.getElementById("input").value = "";
}
var text = document.getElementById("list");
text.addEventListener('click', function () {
    text.style.textDecoration = 'line-through';
});
function clearlist() {
    document.getElementById("list").textContent = "";
}