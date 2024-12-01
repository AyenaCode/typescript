let counter = 0;

export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export const setupDecremante = (element: HTMLButtonElement) => {
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Decremante is ${counter}`;
  };
  element.addEventListener("click", () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  });
  setCounter(0);
};

export const setupReset = (element: HTMLButtonElement) => {
  element.innerHTML = "Réinitialisé";
  element.addEventListener("click", () => {
    if (counter > 0) {
      counter = 0;
      setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
      setupDecremante(document.querySelector<HTMLButtonElement>("#dercem")!);
    }
  });
};
