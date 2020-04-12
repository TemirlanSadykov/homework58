'use strict';

//Задание 1
function hideSplashScreen(){
    document.getElementById('page-splash').hidden = true;
    document.body.classList.remove('no-scroll');
}

function showSplashScreen(){
    document.getElementById('page-splash').hidden = false;
    document.body.classList.add('no-scroll');
}

//Задание 2
function createCommentElement(comment){
    comment = document.querySelector('[name=userComment]').value;
    if(comment == undefined || comment.trim().length == 0){
        return 0;
    }
    else {
        let element = document.createElement('a');
        element.href = "#";
        element.innerHTML = "You";
        let elem = document.createElement('p');
        elem.innerHTML = comment;
        document.body.querySelector('[name=userComment]').before(element);
        document.body.querySelector('[name=userComment]').before(elem);
    }
}

function createPostElement(post){
    post = document.querySelector('[name=userPost]').value;
    if(post == undefined || post.trim().length == 0){
        return 0;
    }
    else {
        let elem = document.createElement('p');
        elem.innerHTML = post;
        document.body.querySelector('[name=userPost]').before(elem);
    }
}


//3 и 4 задание
document.body.querySelector('[name=newPost]').hidden = true;
document.body.querySelector('[name=newImage]').hidden = true;
document.body.querySelector('[name=newMyPost]').hidden = true;
document.body.querySelector('[name=myPost]').hidden = true;
document.body.querySelector('[name=newPost]').hidden = true;

function clickButton(){
    document.body.querySelector('[name=newPost]').hidden = false;
    document.body.querySelector('[name=newImage]').hidden = false;
    document.body.querySelector('[name=myPostButton]').hidden = true;
}

function createImageElement(){
    let imageUrl = document.body.querySelector('[name=newPost]').value;
    if(imageUrl == 0 || imageUrl.trim().length == 0){
        return 0;
    }
    else{
        let image = document.createElement('img');
        image.src = imageUrl;
        image.classList.add('d-block', 'w-100');
        document.body.querySelector('[name=newImage]').before(image);
        document.body.querySelector('[name=newImage]').hidden = true;
        document.body.querySelector('[name=newMyPost]').hidden = false;
        document.body.querySelector('[name=myPost]').hidden = false;
        document.body.querySelector('[name=newPost]').hidden = true;
    }
}

function addMyPostElement(post){
    post = document.querySelector('[name=myPost]').value;
    if(post == undefined || post.trim().length == 0){
        return 0;
    }
    else {
        let elem = document.createElement('p');
        elem.innerHTML = post;
        document.body.querySelector('[name=myPost]').before(elem);
        document.body.querySelector('[name=newMyPost]').hidden = true;
        document.body.querySelector('[name=myPost]').hidden = true;
    }
}

