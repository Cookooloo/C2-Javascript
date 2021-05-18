document.onkeydown = function (event) {
    let blokje = document.querySelector('#blokje');
    let currentPosition = blokje.parentElement.id;
    console.log(currentPosition);
    switch (event.keyCode) {
        case 37:
            if(currentPosition == 0 || currentPosition == 5 || currentPosition == 10 || currentPosition == 15 || currentPosition == 20) {
                //doe niks
            } else {
                let newPosition = currentPosition - 1;
                document.getElementById(newPosition).append(blokje);
            }
            console.log('Left key pressed');
            break;
        case 38:
            if(currentPosition == 0 || currentPosition == 1 || currentPosition == 2 || currentPosition == 3 || currentPosition == 4) {
                //doe niks
            } else {
                let newPosition = currentPosition - 5;
                document.getElementById(newPosition).append(blokje);
            }
            console.log('Up key pressed');
            break;
        case 39:
            if(currentPosition == 4 || currentPosition == 9 || currentPosition == 14 || currentPosition == 19 || currentPosition == 24) {
                //doe niks
            } else {
                let newPosition = currentPosition + 1;
                document.getElementById(newPosition).append(blokje);
            }
            console.log('Right key pressed');
            break;
        case 40:
            if(currentPosition == 20 || currentPosition == 21 || currentPosition == 22 || currentPosition == 23|| currentPosition == 24) {
                //doe niks
            } else {
                let newPosition = currentPosition + 5;
                document.getElementById(newPosition).append(blokje);
            }
            console.log('Down key pressed');
            break;
    }
}