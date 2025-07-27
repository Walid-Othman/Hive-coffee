




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
window.addEventListener('scroll',()=>{
  if(window.scrollY >=70){
cards.classList.add('animate__animated', 'animate__bounce', 'animate__slideInRight')
  }else{
    cards.classList.remove('animate__animated', 'animate__bounce', 'animate__slideInRight')
  }
})
}

anmation()