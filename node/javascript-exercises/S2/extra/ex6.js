const internet = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
console.log('Obigame + Men  ', internet);

function swap(internets, Index1, Index2){
    const meme = internets[Index1];
    internets[Index1] = internets[Index2];
    internets[Index2] = meme;

    return internets;
}


