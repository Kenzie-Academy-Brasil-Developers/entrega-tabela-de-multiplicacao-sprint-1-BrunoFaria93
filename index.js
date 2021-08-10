function tabelaMulti (parametro){
    let array = []
    let valores = ''

    for(let i = 0; i <= parametro; i++ ){
        array[i] = []
        for(let j = 0; j < parametro + 1; j ++){
            array[i][j] = i * j
            
        }
    }
    return console.table(array)
}