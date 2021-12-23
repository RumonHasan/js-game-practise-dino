const dinoElem = document.querySelector('[data-dino]');
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100; // every second our frame should last 100 milisecond

let isJumping;
let dinoFrame;
let currentFrameTime;
export function setDino(){
    isJumping = false;
    dinoFrame = 0;
}

export function updateDino(delta, speedScale){
    handleRun(delta, speedScale);
    handleJump();
}

function handleRun(delta, speedScale){
    if(isJumping){ // when jumping changing the dinosaur to stationary position
        dinoElem.src = `images/dino-stationary.jpg`;
        return;
    }
    if(currentFrameTime >= FRAME_TIME){
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
        dinoElem.src = `img/dino-run-${dinoFrame}.png`;
        currentFrameTime -= FRAME_TIME;
    }
    currentFrameTime += delta * speedScale
}

function handleJump(){

}