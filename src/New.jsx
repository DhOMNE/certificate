

var container = document.querySelector('.container');

container.addEventListener('mousedown',mousedown);

function mousedown(){



    container.addEventListener('mousemove',mousemove)
    function mousemove(e){

            var x = e.clientX + 'px';

            var y = e.clientY + 'px';
            this.style.left = x;
            this.style.top = y;


    }
}