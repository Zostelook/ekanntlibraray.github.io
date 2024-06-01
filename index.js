

function parentDiv(e){
    console.log('This is parent Div')

}


function childDiv(e){
    console.log("This is Child Div");
    e.stopPropagation();
}

const parent =  document.getElementById('parentDiv')
parent.addEventListener('click', parentDiv)


const child = document.getElementById('childDiv');
child.addEventListener('click',childDiv);

