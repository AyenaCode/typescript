import { defineConfig } from "vite";
import { configDefaults } from "vitest/config"; // Importez les types Vitest

export default defineConfig({
  test: {
    globals: true, // Utiliser des globals comme `describe`, `it`, `expect`
    environment: "node", // Environnement pour exécuter les tests
    exclude: [...configDefaults.exclude], // Exclure les dossiers par défaut (node_modules, dist, etc.)
  },
});
