let sectionFondoPointer = document.getElementById('sectionFondoPointer')
let sectionFondoKeyboard = document.getElementById('sectionFondoKeyboard')
let containerClues = document.getElementById('containerClues')
let gato = document.getElementById('gato')
let sectionHab1 = document.getElementById('sectionHab1')
let camaraId = document.getElementById('camaraId')
let containerFondo = document.getElementsByClassName('containerFondo')
let titleDiv = document.getElementsByClassName('titleDiv')

let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')

let btn1 = document.getElementById('btn1')

let gNote = document.getElementById('gNote')
let cNote = document.getElementById('cNote')
let aNote = document.getElementById('aNote')
let bNote = document.getElementById('bNote')
let eNote = document.getElementById('eNote')
let dNote = document.getElementById('dNote')
let fNote = document.getElementById('fNote')


let melody = '';

let gurgles = new Audio('src/audio/gurgles.mp3');
let storm = new Audio('src/audio/rain-on-window.mp3');
let footsteps = new Audio('src/audio/door-footsteps.mp3');
let toneBeep = new Audio('src/audio/tone-beep.wav');
let angry = new Audio('src/audio/the-angry.wav');
let beeps = new Audio('src/audio/beeps.wav')
let countdown = new Audio('src/audio/countdown.wav')
let maullido = new Audio('src/audio/maullido.wav')
let ronroneo = new Audio('src/audio/ronroneo.wav')
let lose = new Audio('src/audio/gameOver.wav')

function fondoPointer() {
//INTERVALS
    let intervalPointer;
    let intervalTimer;

//AUDIOS
    gurgles.play();
    gurgles.loop = true;
    gurgles.volume =  0.4;
    storm.play();
    storm.loop = true;
    storm.volume = 0.4;
    angry.volume = 0.02;
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
                                        setTimeout(() => {
                                            countdown.play()
                                        }, 600);
                                        setTimeout(() => {
                                            countdown.pause()
                                        }, 4300);
                                        const contador = document.getElementById("contador")
                                        const startingMinutes = 1;
                                        let time = startingMinutes * 60;
                                        function updateContador() {
                                            let minutes = Math.floor(time / 60)
                                            let seconds = time % 60
                                            minutes < 10 ? minutes = `0${minutes}` : minutes;
                                            seconds < 10 ? seconds = `0${seconds}` : seconds;
                                            contador.innerHTML = `${minutes}:${seconds}`
                                            time--
                                            if(time == 0) { 
                                                clearInterval(intervalTimer)
                                                loseGame() 
                                            }
                                        }
                                        intervalTimer = setInterval(updateContador, 100)
                                        document.getElementById('inputTimer').style.visibility = 'visible'       
                                    })

                                }, kdev); 
                            }, kdev);
                        }, kdev);
                    }, kdev);
                }, kdev);
            }, kdev);
        }, kdev); 
    }, kdev);
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
    bloockedDoor.volume = 1;
    
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
    let intervalTutorial;
    
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
                        
                        intervalTutorial = setInterval(() => {
                            document.getElementById('staticArrowsId').classList.add('displayNone')
                            document.getElementById('pointerNoBackgroundId').classList.add('displayNone')
                            setTimeout(() => {
                                document.getElementById('staticArrowsId').classList.remove('displayNone')
                                document.getElementById('pointerNoBackgroundId').classList.remove('displayNone')                
                            }, 500);
                        }, 1000);
                    
                        setTimeout(() => {
                            clearInterval(intervalTutorial)
                            document.getElementById('staticArrowsId').classList.add('displayNone')
                            document.getElementById('pointerNoBackgroundId').classList.add('displayNone')
                        }, 5000);

                        setTimeout(() => {
                            const hanlderArrowUp = e => {
                                if(e.code == "ArrowUp")
                                    {
                                        document.body.removeEventListener('keydown', hanlderArrowUp)
                                        hall(); // <-- Siguiente nivel
                                    }
                                }
                            document.body.addEventListener('keydown', hanlderArrowUp )
                        }, 800);
                    }, 1800);
                }, 800);
            }, 2200)
        }, 800)
    }, 2000)
}

function hall() {
//FIXING DOM
    //FondoCatacombs to Hall
    if(containerFondo[2].style.display == 'block') { 
        containerFondo[2].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    //Debris to Hall
    if(containerFondo[4].style.display == 'block') { 
        containerFondo[4].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    //PuertaCode to Hall
    if(containerFondo[5].style.display == 'block') { 
        containerFondo[5].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    //Pasillo to Hall
    if(containerFondo[6].style.display == 'block') { 
        containerFondo[6].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
    //Catacombs to Hall
    if(containerFondo[10].style.display == 'block') { 
        containerFondo[10].style.display = 'none';
        containerFondo[3].style.display = 'block';
    }
//MOVING THROUGH ROOMS
    const hanlderArrows = e => {
        if(e.code == "ArrowLeft")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                debris(); // <-- To move
            }
        if(e.code == "ArrowRight")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                puertaCode(); // <-- To move
            }
        if(e.code == "ArrowUp")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                pasillo(); // <-- To move
            }
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                catacombs(); // <-- To move
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
                hall(); // <-- To move
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
                hall(); // <-- To move
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
            hab1(); // <-- To move
        }
    if(e.code == "ArrowRight")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            hab2(); // <-- To move
        }
    if(e.code == "ArrowUp")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            toilet(); // <-- To move
        }
    if(e.code == "ArrowDown")
        {
            document.body.removeEventListener('keydown', hanlderArrows)
            hall(); // <-- To move
        }
    }
document.body.addEventListener('keydown', hanlderArrows )



}

function hab1() {
//INTERVALS
    let intervalTrueno;
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
                pasillo(); // <-- To move
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )

    setTimeout(()=> {
        intervalTrueno = setInterval(()=>{
            containerFondo[7].classList.remove('containerHab1')
            containerFondo[7].classList.add('containerHab1Trueno')
            gato.src = "src/images/clues/gatoTrueno.png"
            setTimeout(()=>{
                containerFondo[7].classList.remove('containerHab1Trueno')
                containerFondo[7].classList.add('containerHab1')
                gato.src = "src/images/clues/gato.png"
            }, 50)
        }, 150)
        //cambiar settimeout por onclic hab1
        setTimeout(() => {
            if(intervalTrueno) {
                clearInterval(intervalTrueno)
                gato.remove()
                maullido.play()
                gato.addEventListener('click', () =>  pista4() )
                document.getElementById('containerDebris').appendChild(gato) 
            }
        }, 2000);


    }, 1000)

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
                pasillo(); // <-- To move
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
                pasillo(); // <-- To move
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
        if(e.code == "ArrowUp")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                hall(); // <-- To move
            }
        if(e.code == "ArrowDown")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                cell(); // <-- To move
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
        if(e.code == "ArrowUp")
            {
                document.body.removeEventListener('keydown', hanlderArrows)
                catacombs(); // <-- To move
            }
        }
    document.body.addEventListener('keydown', hanlderArrows )
}

function pista1() {
    document.getElementById('ahorcado').remove()
    containerClues.innerHTML += `<img src="src/imagesQr/AQrCode.png" alt="pista1" width="80px">`
}

function pista2() {
    document.getElementById('QrGraffiti').remove()
    containerClues.innerHTML += `<img src="src/imagesQr/NQrCode.png" alt="pista2" width="80px">`
}

function pista3() {
    let respuesta = document.getElementById('respuesta').value
    if(respuesta == "help") {
        inputs.style.visibility = 'hidden'
        containerClues.innerHTML += `<img src="src/imagesQr/IQrCode.png" alt="pista3" width="80px">`
    }
}

function pista4() {
    gato.remove()
    ronroneo.play()
    setTimeout(() => {
        ronroneo.pause()
    }, 2000);
    containerClues.innerHTML += `<img src="src/imagesQr/RQrcode.png" alt="pista1" width="80px">`
}

function pista5() {
    botonOscuro.remove()
    containerClues.innerHTML += `<img src="src/imagesQr/HQrCode.png" alt="pista1" width="80px">`
}

function gSound() {
    let gNote = new Audio('src/audio/g.wav');
    gNote.play();
    console.log(melody)
    melody == 'cdef' ? melody = 'cdefg' : melody = '';
}
function cSound() {
    let cNote = new Audio('src/audio/c.wav');
    cNote.play();
    melody = 'c'
}
function aSound() {
    let aNote = new Audio('src/audio/a.wav');
    aNote.play();
    console.log(melody)
    melody == 'cdefg' ? melody = 'cdefga' : melody = '';
}
function pista6() {
    let bNote = new Audio('src/audio/b.wav');
    bNote.play();
    console.log(melody)
    setTimeout(() => {
        if(melody == 'cdefga'){
            gNote.remove()
            cNote.remove()
            aNote.remove()
            bNote.remove()
            eNote.remove()
            dNote.remove()
            fNote.remove()
            console.log(melody)
            containerFondo[9].classList.remove('containerToilet')
            containerFondo[9].classList.add('containerToiletLight')
            containerFondo[9].innerHTML = ``
            setTimeout(() => {
                containerFondo[9].classList.remove('containerToiletLight')
                containerFondo[9].classList.add('containerToilet')
            }, 2500);
            containerClues.innerHTML += `<img src="src/imagesQr/OQrCode.png" alt="pista1" width="80px">`    
        } else {
            melody = '';
        } 
    }, 1000);
}
function eSound() {
    let eNote = new Audio('src/audio/e.wav');
    eNote.play();
    console.log(melody)
    melody == 'cd' ? melody = 'cde' : melody = '';
}
function dSound() {
    let dNote = new Audio('src/audio/d.wav');
    dNote.play();
    console.log(melody)
    melody == 'c' ? melody = 'cd' : melody = ''; 
}
function fSound() {
    let fNote = new Audio('src/audio/f.wav');
    fNote.play();
    console.log(melody)
    melody == 'cde' ? melody = 'cdef' : melody = '';
}

function pista7() {
    let inputs = document.getElementById('inputs')
    inputs.style.visibility = 'visible'
}

function pista8() {
    camaraId.remove()
    containerClues.innerHTML += `<img src="src/imagesQr/CQrCode.png" alt="pista1" width="80px">`
}

function victory() {
    let inputsSalida = document.getElementById('inputsSalida')
    inputsSalida.style.visibility = 'visible'
}

function respuestaWin() {
    let respuestaSalida = document.getElementById('respuestaSalida').value
    if(respuestaSalida == "ironhack") {
        inputs.style.visibility = 'hidden'
        let victory = new Audio('src/audio/victory.mp3')
        storm.pause()
        gurgles.pause()
        victory.volume = 0.7
        victory.play()
        let doc = document.getElementsByTagName('body')
        doc[0].innerHTML= `<div><h2>YOU WIN</h2></div>`
        doc[0].classList.add('victory')
    }

}

function loseGame() {
    let doc = document.getElementsByTagName('body')
    lose.play()
    doc[0].innerHTML= `<div><h2>YOU LOSE</h2></div>`
    doc[0].classList.add('lose')
}