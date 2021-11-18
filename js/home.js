var div = document.getElementById('flex-cat-gen');
function generatorCat(){
    var image = document.createElement('img');
    
    image.src  ="https://cdn2.thecatapi.com/images/9du.gif"
    image.id="remove-image";
    image.width="150"
    div.appendChild(image);
}
function reset(){
    document.getElementById('remove-image').remove();
}
// we can use this---------


// const reset = function(){
//     const image =document.getElementById("remove-image");
//     div.removeChild(image);
// }
// // reset();