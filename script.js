let cube = document.querySelector('.cube');
let initialX = 0, initialY = 0;
let deltaX = 2.0, deltaY = 2.0; 

function rotateCube() {
    initialX += deltaX;
    initialY += deltaY;
    cube.style.transform = `rotateX(${initialY}deg) rotateY(${initialX}deg)`;
}

setInterval(rotateCube, 100);  
let startX, startY;
let isDragging = false;

function startDrag(event) {
    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

function onDrag(event) {
    if (!isDragging) return;
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    cube.style.transform = `rotateX(${initialY - deltaY}deg) rotateY(${initialX + deltaX}deg)`;
}

function stopDrag(event) {
    if (!isDragging) return;
    initialX += event.clientX - startX;
    initialY -= event.clientY - startY;
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
}

cube.addEventListener('mousedown', startDrag);
