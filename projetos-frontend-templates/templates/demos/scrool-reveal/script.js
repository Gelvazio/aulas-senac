// documentacao abaixo:
// https://scrollrevealjs.org/guide/hello-world.html

window.sr = ScrollReveal({ reset: true });

// 2 segundos de duracao
sr.reveal('.area-1', { duration: 2000 });

sr.reveal('.area-2', {
    duration: 2000,
    rotate: { x: 0, y: 80, z: 0 }
});

sr.reveal('.area-3', {
    duration: 2000,
    rotate: { x: 100, y: 100, z: 0 }
});

sr.reveal('.headline', { duration: 2000 });
sr.reveal('.widget', { interval: 200 });