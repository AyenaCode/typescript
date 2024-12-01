import { calculate } from "./tps/calculator";

// Exemple d'utilisation
console.log(calculate(10, 5, "add")); // Résultat : 15
console.log(calculate(10, 5, "subtract")); // Résultat : 5
console.log(calculate(10, 5, "multiply")); // Résultat : 50
console.log(calculate(10, 0, "divide")); // Résultat : "Erreur : division par zéro"
