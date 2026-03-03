# SPEC: class-redactor-maquetador

## Outcome

Una skill que, dado un blueprint frozen, produce el **contenido completo de clases** (teoria y practica) de un modulo. Es la skill mas exigente del pipeline porque no existen clases previas en el repo — la receta de redaccion/maquetacion se diseña desde cero.

## Scope

- Generar clases de teoria (T-XX) y practica (P-XX) por modulo
- Aplicar la receta de clases diseñada especificamente para directivos PROEXCA
- Mapear secciones del blueprint a clases concretas
- Producir contenido listo para integrar en la plataforma formativa

## No-scope

- No construye agentes/GPTs (eso es `custom-gpt-builder`)
- No produce narrativas (eso es `modulo-narrativa-para-notebooklm`)
- No diseña el blueprint (eso es `module-blueprint-builder`)
- No genera video, audio ni material visual

## Hallazgo critico: no hay clase-ejemplo en el repo

Los archivos de clases en `00_inbox/02_Contents/` estan **todos vacios** (son placeholders con nombre). La receta se diseña desde cero usando:

1. **Blueprint template** (estructura de 7 secciones → que enseñar, en que orden)
2. **Naming patterns** de inbox (ej: "4 3 Tu Agente de IA para ayudarte a redactar e-mails")
3. **Offer design** (avatar ejecutivo, pain points, dream outcome)
4. **Metodo DIRECT** (filosofia AI-first, ejecutivo, practico)
5. **Agentes INFUSE existentes** (calidad bar: BLUF, 3P, 5-layer risk)
6. **Project constraints** (tono ejecutivo, español, sin jerga, "sistema no curso")

## Enfoque

### Mapeo Blueprint → Clases

| Seccion Blueprint | Tipo clase | Titulo patron |
|-------------------|-----------|---------------|
| 0. Apertura | T-01 | "Que vamos a aprender en este modulo" |
| 1-2. Retos + Casos de uso | T-02+ | Teoria conceptual por tema mayor |
| 3. Sistema IA (agentes) | T-XX | "Tu agente de IA para [caso]" |
| 4. Casos practicos | P-XX | "Practica: usando el agente para [caso]" |
| 6. Sintesis | Embebida | Se integra en la ultima clase |

### Flujo operativo

1. Leer blueprint frozen
2. Derivar plan de clases (cuantas T, cuantas P, titulos, orden)
3. Presentar plan al usuario para aprobacion
4. Generar cada clase aplicando la receta
5. Revision del usuario
6. Iterar hasta satisfaccion
7. Guardar archivos versionados

### Receta de clases (nucleo intelectual de la skill)

**Clase de teoria:** Objetivo aprendizaje → Agenda con tiempos → Desarrollo (3-5 subsecciones escaneables) → Puntos clave (3-5 accionables) → Conexion siguiente. Max 1500 palabras.

**Clase de practica:** Objetivo practico → Supuesto PROEXCA realista → Preparacion → Walkthrough paso a paso (con "Lo que debes ver") → Ajuste fino → Resultado esperado → Errores comunes. Max 2000 palabras.

## Decisiones de diseno

- La receta vive en `references/class-recipe.md` (bundled) para mantener SKILL.md bajo 500 lineas
- Tambien se bundlean `references/theory-template.md` y `references/practice-template.md`
- Los escenarios practicos usan contextos PROEXCA reales (internacionalizacion, ferias, analisis sectorial)
- Cada paso del walkthrough incluye "Lo que debes ver" para que el directivo no se pierda
- La numeracion de clases sigue el patron detectado en inbox (prefijo de modulo + secuencia)
