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

//DEV HACK
const kdev = 50;
const k1 = 2000;
const k2 = 12000;
const k3 = 6000;
const k4 = 8000;
const k5 = 4560;
const k6 = 1400;
const k7 = 3500;
const k8 = 6000;



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

                                }, 6000); 
                            }, 3500);
                        }, 1400);
                    }, 4560);
                }, 8000);
            }, 6000);
        }, 12000); 
    }, 2000);     
}

function fondoKeyboard() {
//FIXING DOM
    if(containerFondo[0].style.display = 'block'){
    containerFondo[0].style.display = 'none';
    containerFondo[1].style.display = 'block';
    }
//INTERVALS
    let intervalKeyboard;
    
//AUDIOS    
    let bloockedDoor = new Audio('src/audio/bloocked-door.wav');
    
//DOM CHANGES    
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
//FIXING DOM
    containerFondo[1].style.display = 'none';
    containerFondo[2].style.display = 'block';
//INTERVALS
    let intervalCatacombs;
    let intervalCatacombs2;
    
//AUDIOS
    let woodenGate = new Audio('src/audio/large-wooden-gate.wav');
    woodenGate.volume = 0.6;
    woodenGate.play();
    
//DOM CHANGES 
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
                woodenGate.pause()
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
                                        hall(); // <-- Siguiente nivel
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
//FIXING DOM
    if(containerFondo[2].style.display == 'block') { 
        containerFondo[2].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    if(containerFondo[4].style.display == 'block') { 
        containerFondo[4].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    if(containerFondo[5].style.display == 'block') { 
        containerFondo[5].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    if(containerFondo[6].style.display == 'block') { 
        containerFondo[6].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    if(containerFondo[10].style.display == 'block') { 
        containerFondo[10].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowLeft")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                debris(); // <-- Siguiente nivel
            }
        if(e.code == "ArrowRight")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                puertaCode(); // <-- Siguiente nivel
            }
        if(e.code == "ArrowUp")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                pasillo(); // <-- Siguiente nivel
            }
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                catacombs(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )




}

function debris() {
//FIXING DOM
    if(containerFondo[3].style.display == 'block') { 
        containerFondo[3].style.display = 'none';
        containerFondo[4].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                hall(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function puertaCode() {
//FIXING DOM
    if(containerFondo[3].style.display == 'block') { 
        containerFondo[3].style.display = 'none';
        containerFondo[5].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                hall(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}


function pasillo() {
//FIXING DOM
    if(containerFondo[3].style.display == 'block') { 
        containerFondo[3].style.display = 'none';
        containerFondo[6].style.display = 'block';
    }
    if(containerFondo[7].style.display == 'block') { 
        containerFondo[7].style.display = 'none';
        containerFondo[6].style.display = 'block';
    }
    if(containerFondo[8].style.display == 'block') { 
        containerFondo[8].style.display = 'none';
        containerFondo[6].style.display = 'block';
    }
    if(containerFondo[9].style.display == 'block') { 
        containerFondo[9].style.display = 'none';
        containerFondo[6].style.display = 'block';
    }
//MOVING THROUGH ROOMS
const hanlderArrows = e => {
    if(e.code == "ArrowLeft")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            hab1(); // <-- Siguiente nivel
        }
    if(e.code == "ArrowRight")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            hab2(); // <-- Siguiente nivel
        }
    if(e.code == "ArrowUp")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            toilet(); // <-- Siguiente nivel
        }
    if(e.code == "ArrowDown")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            hall(); // <-- Siguiente nivel
        }
    }
document.body.addEventListener('keydown', hanlderArrows )



}

function hab1() {
//FIXING DOM
    if(containerFondo[6].style.display == 'block') { 
        containerFondo[6].style.display = 'none';
        containerFondo[7].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                pasillo(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function hab2() {
//FIXING DOM
    if(containerFondo[6].style.display == 'block') { 
        containerFondo[6].style.display = 'none';
        containerFondo[8].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                pasillo(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function toilet() {
//FIXING DOM
    if(containerFondo[6].style.display == 'block') { 
        containerFondo[6].style.display = 'none';
        containerFondo[9].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                pasillo(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function catacombs() {
//FIXING DOM
    if(containerFondo[3].style.display == 'block') { 
        containerFondo[3].style.display = 'none';
        containerFondo[10].style.display = 'block';
    }
    if(containerFondo[11].style.display == 'block') { 
        containerFondo[11].style.display = 'none';
        containerFondo[10].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                hall(); // <-- Siguiente nivel
            }
        if(e.code == "ArrowUp")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                cell(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function cell() {
//FIXING DOM
    if(containerFondo[10].style.display == 'block') { 
        containerFondo[10].style.display = 'none';
        containerFondo[11].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                catacombs(); // <-- Siguiente nivel
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}
