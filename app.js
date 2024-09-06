let allImg = document.querySelectorAll('img');
let allImgArr = Array.from(allImg);

const imageConatiner = document.querySelector('#image-container');

let alltier = document.querySelectorAll('.tier-list');
let alltierArr = Array.from(alltier);


allImgArr.forEach(img => {
    img.addEventListener('dragstart', dragStart);
});

alltier.forEach(llist=>{
    llist.addEventListener('dragover',dragOver);
    llist.addEventListener('drop',dropImage);
})

imageConatiner.addEventListener('dragover',dragOver);
imageConatiner.addEventListener('drop',dropImage);

function dragStart(e){
    e.dataTransfer.setData('image', e.target.id);
}

function dragOver(e){
    e.preventDefault();
}

function dropImage(e){
    if(e.target.tagName !== 'IMG'){
        e.preventDefault();
        const imageId = e.dataTransfer.getData('image');
        const image = document.getElementById(imageId);
        e.target.appendChild(image);
    }else{
        e.preventDefault();
        const imageId = e.dataTransfer.getData('image');
        const image = document.getElementById(imageId);
        e.target.parentElement.appendChild(image);
    }
}

