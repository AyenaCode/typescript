import { setupCounter, setupDecremante, setupReset } from "./counter.ts";

import "./style.css";
// import "./type.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="dercem" type="button"></button>
    </div> 
    <div><button id="reset" type="button"></button><div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupDecremante(document.querySelector<HTMLButtonElement>("#dercem")!);
setupReset(document.querySelector<HTMLButtonElement>("#reset")!);
