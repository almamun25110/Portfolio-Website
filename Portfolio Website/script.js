const scriptURL = 'https://script.google.com/macros/s/AKfycbyTyrWpGw2hCy9hyIhC-xZZe9cOoFe9Z8kt_55-YCxcufIzy5TIEsXCFt4fVYvDTWHt/exec';
let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
let sideManu = document.getElementById('sidemenu');
const msg = document.getElementById('msg');
const form = document.forms['submit-to-google-sheet'];


function opentab (tabname) {
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-links");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
};

function openmenu (){
    sideManu.style.right = "0";
}
function closemenu (){
    sideManu.style.right = "-200px";
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully", response;
        setTimeout(function(){
            msg.innerHTML="";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
