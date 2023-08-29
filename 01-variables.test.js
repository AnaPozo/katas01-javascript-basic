import { describe, it } from "node:test";
import assert from "node:assert/strict";

/* PRIMERA PARTE: En esta sección deberéis crear las variables necesarias para hacer pasar los tests.
Fíjate en el "assert": son las verificaciones del test, es decir, lo que el test busca para poder pasar.
Para lanzar los tests, ejecuta en un terminal que apunte a la carpeta del ejercicio, el comando "npm t".
Cada vez que ejecutes el comando podrás ir viendo como aparecen más tests en verde.
TIP: Si consideras que hay demasiada información en el terminal, puedes probar a comentar los tests e ir descomentando sólo el que vas a resolver.
*/

describe("Variables en JavaScript", () => {
  it("Pueden contener strings", () => {
    const a = "Hello!";
    const b = "Somos la P7";

    assert.strictEqual(a, "Hello!");
    assert.strictEqual(b, "Somos la P7");
  });

  it("Pueden contener numeros", () => {
    const c = 2;
    const d = 1498;
    assert.strictEqual(c, 2);
    assert.strictEqual(d, 1498);
  });

  it("Pueden contener booleanos", () => {
    const e = true;
    const f = false;

    assert.strictEqual(e, true);
    assert.strictEqual(f, false);
  });

  it("Pueden contener decimales", () => {
    const g = 1.45;
    const h = 45.99999;

    assert.strictEqual(g, 1.45);
    assert.strictEqual(h, 45.99999);
  });
});

// SEGUNDA PARTE: En esta sección deberéis crear dos variables por cada test para hacer pasar los tests.

describe("Operaciones aritmeticas en JavaScript", () => {
  it("Suma", () => {
    const i = 50;
    const j = 50;
    assert.strictEqual(i + j, 100);
  });
  it("Resta", () => {
    const k = 20;
    const l = 10;

    assert.strictEqual(k - l, 10);
  });
  it("Multiplicacion", () => {
    const m = 3;
    const n = 2;

    assert.strictEqual(m * n, 6);
  });
  it("Division", () => {
    const o = 3;
    const p = 1;
    assert.strictEqual(o / p, 3);
  });

  it("Modulo: Investiga que es el operador modulo (%) en JavaScript para resolver este test", () => {
    const q = 6;
    const r = 2;
    const s = 5;
    assert.strictEqual(q % r, 0);
    assert.strictEqual(s % r, 1);
  });
});

// TERCERA PARTE: A partir de aquí, se nos complica un poco la tarea. Analiza bien qué pide cada test para saber qué variables debes crear y cómo.

describe("Comparaciones en JavaScript", () => {
  it("Usando el comparador de igualdad ===", () => {
    const number = 20;
    const expression = number === 10;

    assert.strictEqual(expression, false);
  });
  it("Usando el comparador de diferencia !==", () => {
    const language = "JavaScript";
    const expression = language !== "JavaScript";

    assert.strictEqual(expression, false);
  });
});

describe("Algebra booleana", () => {
  it("Usando el operador AND (&&)", () => {
    const a = true;
    const b = true;

    const expression = a && b;

    assert.strictEqual(expression, true);
  });

  it("Usando el operador OR (||)", () => {
    const c = false;
    const d = false;

    const expression = c || d;

    assert.strictEqual(expression, false);
  });
});

// CUARTA PARTE: Pongamos en práctica todo lo aprendido hasta ahora

describe("Operaciones con JavaScript", () => {
  it("Completa las variables que faltan para pasar los tests, toca darle al coco!", () => {
    // Escribe aquí tu código
    const a = 6;
    const b = 5;
    const c = 2;

    assert.strictEqual(a + b, 11);
    assert.strictEqual(b + c, 7);
    assert.strictEqual(a * c, 12);
  });
  it("Completa las variables que faltan para pasar los tests", () => {
    // Escribe aquí tu código
    const d = 11;
    const e = 2;
    const f = 20;

    assert.strictEqual(d * e, 22);
    assert.strictEqual(e * f, 40);
  });
  it("Completa las variables que faltan para pasar los tests", () => {
    // Escribe aquí tu código
    const a = 10;
    const b = 100;
    const c = undefined;
    const d = "Hello";
    const e = "Eagles";

    assert.strictEqual(a > 9, true);
    assert.strictEqual(a < 11, true);
    assert.strictEqual(b === 100, true);
    assert.strictEqual(c !== undefined, false);
    assert.strictEqual(d !== "Hello", false);
    assert.strictEqual(e.startsWith("E"), true);
  });
})
