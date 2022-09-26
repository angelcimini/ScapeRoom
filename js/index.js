let sectionFondoPointer = document.getElementById('sectionFondoPointer')
let sectionFondoKeyboard = document.getElementById('sectionFondoKeyboard')

let containerFondo = document.getElementsByClassName('containerFondo')
let titleDiv = document.getElementsByClassName('titleDiv')

let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')

let btn1 = document.getElementById('btn1')

let jugador = {
    // nombre: '',
    objetos: []
};

function fondoPointer() {
    //borrar controles fijos footer
//INTERVALS
    let intervalPointer;

//AUDIOS
    let gurgles = new Audio('src/audio/gurgles.aiff');
    gurgles.play();
    gurgles.loop = true;
    gurgles.volume =  0.4;

    let storm = new Audio('src/audio/rain-on-window.mp3');
    storm.play();
    storm.loop = true;
    storm.volume = 0.4;

    let footsteps = new Audio('src/audio/door-footsteps.mp3');

    let toneBeep = new Audio('src/audio/tone-beep.wav');

    let angry = new Audio('src/audio/the-angry.wav');
    angry.volume = 0.02;
    let beeps = new Audio('src/audio/beeps.wav')
    beeps.volume = 0.08;

//DOM TIMES
const k1 = 2000;
const k1dev = 50;
const k2 = 12000;
const k2dev = 50;
const k3 = 6000;
const k3dev = 50;
const k4 = 8000;
const k4dev = 50;
const k5 = 4560;
const k5dev = 50;
const k6 = 1400;
const k6dev = 50;
const k7 = 3500;
const k7dev = 50;
const k8 = 6000;
const k8dev = 50;


//DOM CHANGES
    btn1.classList.add('displayNone')
    titulo1.innerHTML= ``
    toneBeep.play()
    setTimeout(() => {
        angry.play();
        setTimeout(() => {
            angry.pause();
            titulo1.innerHTML = `<span>-¿Qué? Joder Christine, ahora estoy en medio de algo importante... ¿No me puedes echar la bronca en otro momento?</span>`
            setTimeout(() => {
                angry.play()
                titulo1.innerHTML= ``
                setTimeout(() => {
                    angry.pause()
                    titulo1.innerHTML= `<span>Ok, ok, I'm going right now babe, don't be mad at me.</span>`
                    setTimeout(() => {
                        titulo1.innerHTML= `<p>beeeep... beeeep...</p>`
                        beeps.play();
                        setTimeout(() => {
                            titulo1.innerHTML= ``
                            beeps.pause();
                            setTimeout(() => {
                                titulo1.innerHTML= `<span class="red"> Nuestra fiesta tendrá que esperar.
                                                    <br> Pero en nada volveré para jugar contigo.
                                                    <br><br> Hasta pronto princesita... </span>`
                                setTimeout(() => {
                                    
                                    titulo1.innerHTML= `. . . `      
                                    footsteps.play();
                                    setTimeout(()=> {
                                        intervalPointer = setInterval(()=>{
                                            containerFondo[0].classList.remove('dark')
                                            containerFondo[0].classList.add('containerFondoPointer')
                                            setTimeout(()=>{
                                                containerFondo[0].classList.remove('containerFondoPointer')
                                                containerFondo[0].classList.add('dark')
                                            }, 200)
                                        }, 300)                                       
                                    }, 3000) 
                                    
                                    containerFondo[0].addEventListener('click', ()=>{
                                        if(intervalPointer) {clearInterval(intervalPointer)};
                                        footsteps.pause();
                                        fondoKeyboard(); // <-- Siguiente nivel
                                    })

                                }, k8dev); 
                            }, k7dev);
                        }, k6dev);
                    }, k5dev);
                }, k4dev);
            }, k3dev);
        }, k2dev); 
    }, k1dev);     
}

function fondoKeyboard() {

//INTERVALS
    let intervalKeyboard;
    
//AUDIOS    
    let bloockedDoor = new Audio('src/audio/bloocked-door.wav');
    bloockedDoor.volume = 0.08;
    
//DOM CHANGES    
    containerFondo[0].style.display = 'none';
    // containerFondo[1].classList.remove('displayNone')
    containerFondo[1].style.display = 'block';
    
    containerFondo[1].addEventListener('click', ()=>{
        bloockedDoor.play();
        titulo2.innerHTML = `<span>¿Está Cerrada? ¡Mierda! Probaré de otra forma...</span>`

        const hanlderArrows = e => {
            if
            (   e.code == "ArrowRight" || 
                e.code == "ArrowLeft" ||
                e.code == "ArrowUp" ||
                e.code == "ArrowDown"   
            )
                {
                    document.body.removeEventListener('keydown', hanlderArrows)
                    if(intervalKeyboard) {clearInterval(intervalKeyboard)};
                    fondoCatacombs(); // <-- Siguiente nivel
                }
            }
        document.body.addEventListener('keydown', hanlderArrows )
            
        setTimeout(()=> {
            intervalKeyboard = setInterval(()=>{
                containerFondo[1].classList.remove('dark')
                containerFondo[1].classList.add('containerFondoKeyboard')
                setTimeout(()=>{
                    containerFondo[1].classList.remove('containerFondoKeyboard')
                    containerFondo[1].classList.add('dark')
                }, 100)
            }, 50)
        }, 9000)  // <-- Tiempo antes de la pista    
    })
}

function fondoCatacombs() {

//INTERVALS
    let intervalCatacombs;
    let intervalCatacombs2;
    
//AUDIOS
    let beat = new Audio('src/audio/large-wooden-gate.wav');
    beat.play();
    
//DOM CHANGES 
    containerFondo[1].style.display = 'none';
    containerFondo[2].style.display = 'block';
    setTimeout(()=> {
        intervalCatacombs = setInterval(()=>{
            containerFondo[2].classList.remove('dark')
            containerFondo[2].classList.add('containerFondoCatacombs')
            setTimeout(()=>{
                containerFondo[2].classList.remove('containerFondoCatacombs')
                containerFondo[2].classList.add('dark')
            }, 120)
        }, 100)
        setTimeout(()=> {
            if(intervalCatacombs) {clearInterval(intervalCatacombs)}
            intervalCatacombs2 = setInterval(()=>{
                containerFondo[2].classList.remove('dark')
                containerFondo[2].classList.add('containerFondoCatacombs')
                setTimeout(()=>{
                    containerFondo[2].classList.remove('containerFondoCatacombs')
                    containerFondo[2].classList.add('dark')
                }, 170)
            }, 150)
            setTimeout(()=> {
                if(intervalCatacombs2) {clearInterval(intervalCatacombs2)}
                beat.pause()
                setTimeout(() => {
                    titulo3.innerHTML = `<span>Lo que faltaba, tendré que encontrar el camino a oscuras</span>`
                    setTimeout(() => {
                        titulo3.innerHTML = `<span>Debo darme prisa</span>`
                        setTimeout(() => {
                            titulo3.innerHTML = ``                        
                        }, 1000);                        
                        setTimeout(() => {
                            const hanlderArrowUp = e => {
                                if(e.code == "ArrowRight")
                                    {
                                        document.body.removeEventListener('keydown', hanlderArrowUp)
                                        if(intervalKeyboard) {clearInterval(intervalKeyboard)};
                                        fondoCatacombs(); // <-- Siguiente nivel
                                    }
                                }
                            document.body.addEventListener('keydown', hanlderArrowUp )
                        }, 1000);
                    }, 3000);
                }, 1000);
            }, 2500)
        }, 2000)
    }, 5000)
}

function hall() {
    console.log('pizzacola')
}