// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1=document.querySelector('#noun1');
var verb=document.querySelector('#verb');
var adjective=document.querySelector('#adjective');
var noun2=document.querySelector('#noun2');
var setting=document.querySelector('#setting');
var student=document.querySelector('#student');

// Constants for p tag to display query selectors
var choosenNoun1=document.querySelector('#choosenNoun1');
var choosenVerb=document.querySelector('#choosenVerb');
var choosenAdjective=document.querySelector('#choosenAdjective');
var choosenNoun2=document.querySelector('#choosenNoun2');
var choosenSetting=document.querySelector('#choosenSetting');
var studentId=document.querySelector('#studentId');

// Constants for final buttons and p tags
var playback=document.querySelector('#playback');
var random=document.querySelector('#random');
var story=document.querySelector('#story');

// Variables for pre-defined arrays
var first=['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var second=['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var third=['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var fourth=['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var fifth=['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
var array1=0;
var array2=0;
var array3=0;
var array4=0;
var array5=0;
var newPosition;
var text;

/* Functions
-------------------------------------------------- */
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
//function to generate position of array's element. I've taken it from the website below:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function student_on_click(){
    //displays my student id
    studentId.textContent=200544581;
}
function noun1_on_click() {
     //making sure, that we generate a new word, when user presses the button
    do{
        newPosition=getRandomIntInclusive(0, first.length-1);
    }
    while (array1===newPosition)
    array1=newPosition;
    //display the text to the right of the button
    choosenNoun1.textContent=first[array1];
}

function verb_on_click() {
    //making sure, that we generate a new word, when user presses the button
    do{
        newPosition=getRandomIntInclusive(0, second.length-1);
    }
    while (array2===newPosition)
    array2=newPosition;
    //display the text to the right of the button
    choosenVerb.textContent=second[array2];
}

function adjective_on_click() {
    //making sure, that we generate a new word, when user presses the button
    do{
        newPosition=getRandomIntInclusive(0, third.length-1);
    }
    while (array3===newPosition)
    array3=newPosition;
    //display the text to the right of the button
    choosenAdjective.textContent=third[array3];
}

function noun2_on_click() {
    //making sure, that we generate a new word, when user presses the button
    do{
        newPosition=getRandomIntInclusive(0, fourth.length-1);
    }
    while (array4===newPosition)
    array4=newPosition;
    //display the text to the right of the button
    choosenNoun2.textContent=fourth[array4];
}

function setting_on_click() {
    //making sure, that we generate a new word, when user presses the button
    do{
        newPosition=getRandomIntInclusive(0, fifth.length-1);
    }
    while (array5===newPosition)
    array5=newPosition;
    //display the text to the right of the button
    choosenSetting.textContent=fifth[array5];
}

// concatenate the user story and display
function playback_on_click() {
    //combining 5 words into a sentence
    text=first[array1]+" "+second[array2]+" "+third[array3]+" "+fourth[array4]+" "+fifth[array5]+".";
    story.textContent=text;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    //when user presses Random Story, then it triggers 5 word functions (to display changed words near each button)
    // and displays sentence (using playback_on_click)
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
//enabling functions when the buttons are clicked
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
student.addEventListener("click", student_on_click);