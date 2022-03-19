var leftButton, rightButton = false;
function myButtonLeft(btn) {
    btn.style.backgroundColor = "green";
    btn.style.border = "green";
    btn.disabled = "true";

    leftButton = true;
    if (leftButton && rightButton) {
        start();
    }
}
function myButtonRight(btn) {

    btn.style.backgroundColor = "green";
    btn.style.border = "green";
    btn.disabled = "true";
    rightButton = true;
    if (leftButton && rightButton) {
        start();
    }
    

}
function start() {
    var counter= 4;

    //Set the timer to count the counter down
    var timer = setInterval(function() 
    {
        counter--;
        if(counter== 0) 
        {
            clearInterval(timer);
            window.location = 'index2.html';
        } 
        else 
        {
            //Execute the CSS change function
            styleChange();
        }
    }, 1000);

    function styleChange()
    {
        document.getElementById("timer").innerHTML = (counter);
       
        // In CSS "Demo" is given a transition of 1s to smooth out the animation"
    }
   

}

// count = 0;
// var i = setInterval(() => {
//     count++;
//     console.log(count)
//     if (count == 3) {
//         clearInterval(i)
//         console.log('tugadiiiiii')
//     }
// }, 1000)


