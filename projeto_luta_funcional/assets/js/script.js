const char = creatSorcerer('Matheus');
const monster = creatBigMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);