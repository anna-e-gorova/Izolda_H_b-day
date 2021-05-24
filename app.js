let arr = ['roll-in-left','slit-in-diagonal-2','slit-in-vertical','roll-in-left','slit-in-diagonal-2','slit-in-vertical'];
//let arr = ['rotate-scale-up','roll-in-left','roll-in-left','roll-in-left','roll-in-left','roll-in-left'];

let dig_box = document.querySelectorAll('.dignities_box');

function test() {

    dig_box.forEach(function(card, index){
        if (card.getBoundingClientRect().top <= window.innerHeight && card.classList.length <= 1 ) {
            card.classList.add(arr[index]);
        }
    });
}
test();

document.addEventListener('scroll', function(event){
            test();
});







