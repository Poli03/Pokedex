const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./not-found.png");
            pokeTYPE("not found");
            pokeHp(0);
            pokeATK(0);
            pokeDEF(0);
            pokeSPatk(0);
            pokeSPdef(0);
            pokeSPEED(0);
            pokeAbi1("not found");
            pokeAbi2("not found");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let poketype = data.types[0].type.name;
            let pokehp = data.stats[0].base_stat;
            let pokeatk =data.stats[1].base_stat;
            let pokedef =data.stats[2].base_stat;
            let pokespatk = data.stats[3].base_stat;
            let pokespdef = data.stats[4].base_stat;
            let pokespeed = data.stats[5].base_stat;
            let pokeabi1 = data.abilities[0].ability.name;
            let pokeabi2 = data.abilities[1].ability.name;
            pokeImage(pokeImg);
            pokeTYPE(poketype);
            pokeHp(pokehp);
            pokeATK(pokeatk);
            pokeDEF(pokedef);
            pokeSPatk(pokespatk);
            pokeSPdef(pokespdef);
            pokeSPEED(pokespeed);
            pokeAbi1(pokeabi1);
            pokeAbi2(pokeabi2);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeTYPE = (type) => {
    const poketype = document.getElementById("type");
    poketype.value = type ;
}
const pokeHp = (hp) => {
    const pokehp = document.getElementById("hp");
    pokehp.value = hp;
}
const pokeATK = (atk) => {
    const pokeatk = document.getElementById("attck");
    pokeatk.value = atk;
}
const pokeDEF = (def) => {
    const pokedef = document.getElementById("defense");
    pokedef.value = def; 
}
const pokeSPatk = (spatk) => {
    const pokespatk = document.getElementById("special-attack");
    pokespatk.value = spatk;
}
const pokeSPdef = (spdef) => {
    const pokespdef = document.getElementById("special-defense");
    pokespdef.value = spdef;
}
const pokeSPEED = (speed) => {
    const pokespeed = document.getElementById("speed");
    pokespeed.value = speed;
}
const pokeAbi1 = (ability1) => {
    const pokeabi1 = document.getElementById("ability1");
    pokeabi1.value = ability1;
}
const pokeAbi2 = (ability2) => {
    const pokeabi2 = document.getElementById("ability2");
    pokeabi2.value = ability2;
}

