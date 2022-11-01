function ColorChange() {
    const a = document.getElementsByClassName('lamp-red')[0];
    const b = document.getElementsByClassName('lamp-yellow')[0];
    const c = document.getElementsByClassName('lamp-green')[0];
    let x = 5 ;    
    switch (x % 3) {
        case 0 :
            a.style.opacity = 1;
            break;
        case 1 :
            b.style.opacity = 1;
            break;
        case 2 :
            c.style.opacity = 1;
            break;
    }
}