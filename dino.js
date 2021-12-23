const dinoElem = document.querySelector('[data-dino]');
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100; // every second our frame should last 100 milisecond

let isJumping;
export function setDino(){
    isJumping = false;
}

export function updateDino(delta, speedScale){
    handleRun();
    handleJump();
}

function handleRun(){
    if(isJumping){
        dinoElem.src = `images/dino-stationary.jpg`
    }
}

function handleJump(){

}