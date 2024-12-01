// Définir les types d'opérations
type Operation = "add" | "subtract" | "multiply" | "divide";

// Fonction pour effectuer une opération
export const calculate = (
  a: number,
  b: number,
  operation: Operation
): number | string => {
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
};
