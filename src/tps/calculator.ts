// Définir les types d'opérations
type Operation = "add" | "subtract" | "multiply" | "divide";

// Fonction pour effectuer une opération
function calculate(
  a: number,
  b: number,
  operation: Operation
): number | string {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b !== 0 ? a / b : "Erreur : division par zéro";
    default:
      return "Opération non valide";
  }
}

// Exemple d'utilisation
console.log(calculate(10, 5, "add")); // Résultat : 15
console.log(calculate(10, 5, "subtract")); // Résultat : 5
console.log(calculate(10, 5, "multiply")); // Résultat : 50
console.log(calculate(10, 0, "divide")); // Résultat : "Erreur : division par zéro"
