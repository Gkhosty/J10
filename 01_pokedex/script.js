// =============================================
// 🧩 Exercice 01 – Pokedex Explorer
// Fichier : J09/01_pokedex/script.js
// =============================================

// 🧠 Objectif : explorer et analyser les données du Pokédex en JavaScript pur
// ---------------------------------------------------------------
// Étapes :
// 1. Charger les données JSON
// 2. Manipuler les tableaux et objets
// 3. Écrire des fonctions d’analyse et de recherche
// ---------------------------------------------------------------

// 💾 Étape 1 : Charger le fichier JSON
// Si tu es dans un environnement Node.js, tu peux utiliser fs :
import fs from "fs";

let pokedex;

// Essaie d’abord de lire et parser le fichier local pokedex.json
try {
  const data = fs.readFileSync("./pokedex.json", "utf8");
  pokedex = JSON.parse(data);
  console.log("✅ Fichier chargé avec succès !");
} catch (err) {
  console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  process.exit(1);
}

// Vérifie que la structure est bien celle attendue
console.log("Nombre de Pokémon :", pokedex.pokemon.length);
console.log("Premier Pokémon :", pokedex.pokemon[0].name);

// ---------------------------------------------------------------
// ✨ Étape 2 : Fonctions de base à compléter
// ---------------------------------------------------------------

/**
 * Retourne le nombre total de Pokémon dans le Pokédex
 */
function countPokemon() {
  // TODO : compter les Pokémon à partir de pokedex.pokemon
 console.log(pokedex.pokemon.length)
}
countPokemon()
/**
 * Retourne un tableau des Pokémon pesant plus de 10 kg
 */
function heavyPokemon() {
  let pokemonLourd =[]
  // TODO : filtrer selon le champ "weight" (ex: "6.9 kg" -> penser à parseFloat)
  for(let i = 0; i < pokedex.pokemon.length; i++){

  let poids = pokedex.pokemon[i].weight 
  if(parseFloat(poids) > 10){
    pokemonLourd.push(pokedex.pokemon[i].name)
  }
  }
  console.log(pokemonLourd)
}
heavyPokemon()


/**
 * Retourne les évolutions d’un Pokémon donné (s’il en a)
 */
function getEvolutions(name) {
  // TODO : chercher le Pokémon, vérifier la clé "next_evolution"

let evolution = []
for(let i = 0; i < pokedex.pokemon.length; i++){
  if(pokedex.pokemon[i].name === name){
    if(!pokedex.pokemon[i].next_evolution){
      let vide =[]
      return
    }
    for(let cle of pokedex.pokemon[i].next_evolution){
      evolution.push(cle.name)
    }

  }
}
console.log(evolution)
}

getEvolutions("Bulbasaur")
getEvolutions("Pikachu")

/**
 * Retourne un objet complet représentant le Pokémon recherché
 */
function searchPokemon(name) {
// TODO : trouver le Pokémon, retourner ses infos principales
const pokemon = pokedex.pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
if (!pokemon) return null;

  return {
    name: pokemon.name,
    type: pokemon.type,
    weight: pokemon.weight,
    height: pokemon.height,
    weaknesses: pokemon.weaknesses,
    egg: pokemon.egg
  };
}
console.log(searchPokemon("Charmeleon"));
console.log(searchPokemon("Porygon"));
console.log(searchPokemon("Mr. Mime"));
searchPokemon("Charmander")

// ---------------------------------------------------------------
// 🔍 Tests rapides (tu peux commenter ou adapter ces lignes)
// ---------------------------------------------------------------

// console.log(countPokemon());
// console.log(heavyPokemon().slice(0, 5));
// console.log(getEvolutions("Bulbasaur"));
// console.log(searchPokemon("Pikachu"));