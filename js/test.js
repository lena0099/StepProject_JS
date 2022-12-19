// section Our Services

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

// section 2

const filterBox = document.querySelectorAll('.box');
const filterElement=document.querySelectorAll(".filter-element");

function removeActive(){
    for(let i=0;i<filterElement.length;i++){
        filterElement[i].classList.remove("filter-active");
    }
}

// $(".col-auto").addClass("no-box");
// $(".box").slice(0,12).show();


let tooShow=12;
let c=24;

let count = 0;
let arr = [...document.querySelectorAll('.col-auto')];
function firstshow() {
    for (let i = 0; i < arr.length; i++)
    {
        arr[i].classList.add("hide");
    }
}

function show(arr)
{
    if (arr.length<=tooShow){
        document.getElementById("work-block-button").style.display="none";
    }

    for (let i = 0; i < tooShow; i++) {
        arr[i].classList.remove("hide");
    }
    for (let i = 0; i < tooShow; i++) {
        arr.shift();
    }

}


firstshow();
debugger
firsttooshow();

function firsttooshow(){

    for (let i = 0; i < tooShow; i++) {
        arr[i].classList.remove("hide");
    }
    for (let i = 0; i < tooShow; i++) {
        arr.shift();
    }
}
console.log(arr.length);
document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    removeActive();
    event.target.classList.add("filter-active");
    let filterClass = event.target.dataset['f'];
    arr=[];
    count=0;
    document.getElementById("work-block-button").style.display="flex";


    for (let i = 0; i < filterBox.length; i++) {
        filterBox[i].classList.add('hide');
        if (!filterBox[i].classList.contains(filterClass) && filterClass !== 'All') {
            filterBox[i].classList.add('hide');

        }
        else if (filterClass === 'All')
        {
            arr[count]=filterBox[i];
            count++;
        }
        else if((filterBox[i].classList.contains(filterClass)) && filterClass !== 'All') {

            arr[count]=filterBox[i];
            count++;
        }
    }
    show(arr);
});
function stoploading(){
    document.getElementById("loading").style.display="none"
}

document.querySelector('.load-img').addEventListener('click', (event) => {
   document.getElementById("loading").style.display="flex";
   setTimeout(stoploading,2000);

    setTimeout(show,2500,arr);
});



function createbackforimage(){
let card=document.getElementsByClassName("box")
for(let i=0;i<card.length;i++)
{
    if(card[i].classList.contains("Graphic_Design"))
    card[i].append(back("Graphic Design"));
    if(card[i].classList.contains("Web-Design"))
        card[i].append(back("Web Design"));
    if(card[i].classList.contains("Landing_Pages"))
        card[i].append(back("Landing Pages"));
    if(card[i].classList.contains("Wordpress"))
        card[i].append(back("Wordpress"));

}}
function back(type) {

    let backImg = createElement('div', ['back']);

    let icon=createElement("img", ["icon"]);
    icon.src="img/icon/icon.png";
    backImg.append(icon);
    let cardBackTitle = createElement('p', ['card-back-title']);
    cardBackTitle.innerHTML = 'creative design';
    backImg.append(cardBackTitle);

    let cardBackText = createElement('p', ['card-back-text']);
    cardBackText.innerHTML = type;
    backImg.append(cardBackText);
    return backImg;
    

}
function createElement(tag,classesToCss,datasetName, dataset) {
    let element = document.createElement(tag);
    if(classesToCss) {
        classesToCss.forEach((cls)=>{
            element.classList.add(cls);
        });
    }
    if(dataset) {
        for (let i = 0; i < datasetName.length; i++) {
            element.dataset[datasetName[i]] = dataset[i];
        }
    }
    return element;
}
createbackforimage();


informationAboutPeople=[/*0-specialtyPerson,1-namePerson,3-descriptionPerson,4-src*/
    [
        'UX Designer',
        'Hasan Ali',
        'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        "img/Step%20Project%20Ham/about/Layer%206.png"
    ],[
        'Frond End',
        "Jon Fob",
        "In software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer, and the data access layer of a piece of software, or the physical infrastructure or hardware.",
        "img/Step%20Project%20Ham/about/Layer%2047.png"
    ],[
        'Bob Marty',
        'Full Stack',
        'In computing, a solution stack or software stack is a set of software subsystems or components needed to create a complete platform such that no additional software is needed to support applications. Applications are said to "run on" or "run on top of" the resulting platform.',
        "./img/Step%20Project%20Ham/about/Layer%207.png"
    ],[
        'Bob Bobovich',
        'Back End',
        'The front-end is also referred to as the client-side and is sometimes considered "web design". The back-end of the web industry is often called the server-side. Often when someone says they\'re a "web developer" they\'re saying they work on the back-end of sites.',
        "./img/Step%20Project%20Ham/about/Layer%208.png"
    ],[
        'Justin Buber',
        "Java developer",
        "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        "./img/Step%20Project%20Ham/about/Layer%2052.png"
    ],[
        'Fog Noc',
        "Python developer",
        'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace',
        "./img/Step%20Project%20Ham/about/Layer%2054.png"
    ]
];
/*region what-people-say*/
selectPhoto=document.getElementById('select-photo');
descriptionPerson=document.getElementById('descriptionPerson');
namePerson=document.getElementById('namePerson');
specialtyPerson=document.getElementById('specialtyPerson');
shiftToRight = document.getElementById('shiftToRight');
shiftToLeft =document.getElementById('shiftToLeft');
slider = document.getElementById('slider');
slider.addEventListener('click',function (event) {
    let target = event.target;
    if(target.classList.contains('slider-item')) {
        removeSelectClasses('slider-item', 'slider-item-select');
        target.classList.add('slider-item-select');
        updateInformationAboutPerson(+target.dataset.numberPerson)
    }
});
shiftToLeft.addEventListener('click',function (event) {
    let target = event.target;
    if(shiftToRight.classList.contains('finish-direction')){
        shiftToRight.classList.remove('finish-direction')
    }
    let activeElement = document.querySelector('.slider-item-select');
    if(activeElement.previousElementSibling){
        target.classList.remove('finish-direction');
        removeSelectClasses('slider-item', 'slider-item-select');
        activeElement.previousElementSibling.classList.add('slider-item-select');
        updateInformationAboutPerson(+activeElement.previousElementSibling.dataset.numberPerson)
    }
    else {
        target.classList.add('finish-direction');
    }
    shiftDirection(false);
});
shiftToRight.addEventListener('click',function (event) {
    let target = event.target;
    if(shiftToLeft.classList.contains('finish-direction')){
        shiftToLeft.classList.remove('finish-direction')
    }
    let activeElement = document.querySelector('.slider-item-select');
    if(activeElement.nextElementSibling){
        target.classList.remove('finish-direction');
        removeSelectClasses('slider-item', 'slider-item-select');
        activeElement.nextElementSibling.classList.add('slider-item-select');
        updateInformationAboutPerson(+activeElement.nextElementSibling.dataset.numberPerson)
    }
    else {
        target.classList.add('finish-direction');
    }

    shiftDirection(true);
});
// /*end region what-people-say*/
//


/*region what-people-say*/
//двигает
function shiftDirection(direction){
    /*direction: false-left, true-right*/
    let shift = 0;
    let timerLeft = setInterval(function () {
        if(shift>(slider.firstElementChild.offsetWidth/slider.firstElementChild.childElementCount)-2){
            clearInterval(timerLeft);
            return false;
        }
        else {
            direction?slider.scrollLeft+=5:slider.scrollLeft-=5;
            shift+=5;
        }
    },20);

}



/*меняет текст в элементе*/
function updateHTMLTEXT(element,index,number) {
    element.innerHTML = informationAboutPeople[index][number];
}
/*обновление информации о персоне*/
function updateInformationAboutPerson(index) {
    selectPhoto.src=informationAboutPeople[index][3];
    updateHTMLTEXT(specialtyPerson,index,1);
    updateHTMLTEXT(namePerson,index,0);
    updateHTMLTEXT(descriptionPerson,index,2);
}
/*удаляет ранее выбраного человека*/
function removeSelectClasses(whereFind, classToRemove) {
    let temp = document.querySelectorAll(`.${whereFind}`);
    temp.forEach((element)=>{
        if(element.classList.contains(classToRemove)){
            element.classList.remove(classToRemove);
            return element;
        }
    })
}
/*end region what-people-say*/

// function createElementBreakingNews() {
//     let elements=document.getElementsByClassName("box");
//     let back=document.createElement("div");
//     let paragraph= document.createElement("p");
//     paragraph.innerHTML="ddd";
//     back.append(paragraph);
//
//     for(let i=0;i<elements.length;i++)
//     {
//         elements[i].append(back);
//     }
//
// }
// createElementBreakingNews();
//



//
//
// $(function () {
//     $(".box").slice(0,12).show();
//     $("#work-block-button").on('click', function (e) {
//         e.preventDefault();
//         $(".box:hidden").slice(0, 12).slideDown();
//         if ($(".box:hidden").length === 0) {
//             $("#work-block-button").fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//
//     });
// });




