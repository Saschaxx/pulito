const textBreakElement = document.querySelector('.text_break'),
      revealTextElement = textBreakElement.querySelector('.text_break-big');

let animationTriggered = false;

function isVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function(){
    if(isVisible(textBreakElement) && !animationTriggered){
        revealTextElement.classList.add('reveal-text');
        animationTriggered = true;
    }
})

