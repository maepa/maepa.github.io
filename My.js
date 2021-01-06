function parallaxY(event){
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateY(${-event.clientY*speed/1000}px)`
  });
}
document.addEventListener('mousemove', parallaxY)

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


function get_current_age(date) {
  return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

document.getElementById("age").innerHTML="My age: " + get_current_age('2001-10-20');
