// const hariflar = ["z" , "l" , "m" , "o" , "r"];
// ["l", "z", "m", "o", "r"]
// ["l", "m", "o", "z", "z" , "r"]

// const tartib = hariflar.sort(function (a,b) {
//     return a - b
// })
// console.log(tartib)

const pokemonForm = document.querySelector("#form")
const pokeInput = document.querySelector("#input");
const pokeSort = document.querySelector("#select");
const pokeBox = document.querySelector("#pokewrapper");
console.log(pokemonForm , pokeBox , pokeInput , pokeSort);

function renderPokemon(poke) {
    pokeBox.innerHTML = "";
    poke.forEach(obyektlar => {
        pokeBox.innerHTML +=
        `
        <li class = "list">
          <button class= "btn3"> ${obyektlar.num}</button>
          <h2 class = "text"> ${obyektlar.name}</h2>
          <img class = "img" src="${obyektlar.img}" alt="${obyektlar.name}">
          <button class="btn"> ${obyektlar.type.join("||")}</button>
          <h2 class = "text2">Candy count: ${obyektlar.candy_count}</h2>
          <h2 class = "text3">${obyektlar.weight}</h2>
          <h2 class = "text4">${obyektlar.weaknesses}</h2>
          <button class="btn2"> ${obyektlar.spawn_time}</button>
        </li>
        `
    });
}
renderPokemon(pokemons);

function sortirovka(obj, qiymat){
    if(qiymat === "A-Z"){
        return obj.sort((a, b) => a.name.localeCompare(b.name));
    } else if(qiymat === "Z-A"){
        return obj.sort((a, b) => b.name.localeCompare(a.name));
    }
}

pokeSort.addEventListener("change", (event) => {
    const val = pokeSort.value;
    let sortedPokemons;
    if(val === "A-Z" || val === "Z-A"){
        sortedPokemons = sortirovka(pokemons, val);
    } else {
        sortedPokemons = pokemons;
    }
    renderPokemon(sortedPokemons);
})


pokemonForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inpQiymat = pokeInput.value.toLowerCase();
    const filterProduct = pokemons.filter(item => item.name.toLowerCase().includes(inpQiymat));
    renderPokemon(filterProduct);
    pokeInput.value = "";
});         