
var ok = document.querySelector(`.olala`);
console.log(ok)
ok.children
console.log(ok.children)
var list = ok.children
console.log(list)
for (let i=0;i<list.length;i++){
    list[i].onclick = function(){
        list[i].classList.toggle(`olala1`)
    }
}

const searchIcon = document.getElementById(`oo`)
const searchForm = document.getElementById(`ooo`)
searchIcon.addEventListener(`click`, function(){
    if(searchForm.style.display===`block`){
        searchForm.display=`none`
    }else{
        searchForm.display=`block`
    }
})




