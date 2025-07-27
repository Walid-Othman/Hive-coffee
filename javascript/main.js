




const typedTwo = new Typed('.typed-c-two', {
  strings: ['Coming soon with the finest coffee flavors.........'],
   typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop:Infinity
});

const typedThree = new Typed('.typed-c-three', {
  strings: ['انتظرونا قريبًا، حيث يلتقي المزاج الراقي بالقهوة.','Stay tuned – where refined mood meets rich coffee.','Coming Soon'],
   typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop:Infinity
});
const typedcomingsoon = new Typed('.coming-soon', {
  strings: ['انتظرونا قريبًا، حيث يلتقي المزاج الراقي بالقهوة','Stay tuned – where refined mood meets rich coffee.','Coming Soon'],
   typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop:Infinity
});


function anmation(){
let cards =  document.querySelector('.cards')
let cardsD = document.querySelector('.section-different')
window.addEventListener('scroll',()=>{
  if(window.scrollY >=70){
cards.classList.add('animate__animated', 'animate__bounce', 'animate__slideInRight')
  }else{
    cards.classList.remove('animate__animated', 'animate__bounce', 'animate__slideInRight')
  }
  if(window.scrollY >=1000){
cardsD.classList.add('animate__animated','animate__bounce','animate__slideInLeft')
  }else{
cardsD.classList.remove('animate__animated','animate__bounce','animate__slideInLeft')
  }
})
}

anmation()

function welcome(){
let hello=  document.querySelectorAll('.for-alert')
if(hello){
  hello.forEach(hello2=>{
    hello2.addEventListener('click',()=>{
      alert(`لسّه القصة ما بدأت...
لكن قريبًا جدًا، بتبدأ أول رشفة، وأول لحظة هدوء بطعم يليق فيكم.
هيـــــــــــــــــڤ... مو بس كوفي، هي مساحة راحة، ذوق، وتفاصيل تلامس المزاج.

📍 موقعنا تحت التجهيز
🎉 الافتتاح قريب جدًا – تابعونا على السوشال ميديا علشان تكونوا أول من يزورنا!`)
    })
  })
}

}
welcome()