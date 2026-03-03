---
name: class-redactor-maquetador
description: >
  Produce contenido de clases de teoria y practica desde un blueprint frozen, aplicando una
  receta diseñada para directivos ejecutivos. Usa esta skill cuando el usuario mencione
  "escribir clases", "redactar contenido", "generar clases", "contenido del modulo",
  "clases de teoria", "clases practicas", "walkthrough", "maquetar clases", o cuando exista
  un blueprint frozen y el usuario pida producir el contenido educativo del modulo. Tambien
  cuando el usuario referencie un titulo de clase especifico o pida crear material formativo.
  Asegurate de usar esta skill siempre que se necesite transformar un blueprint en contenido
  de clases listo para la plataforma.
---

# Class Redactor & Maquetador

Transforma un blueprint frozen en clases de teoria (T-XX) y practica (P-XX) listas para integrar en la plataforma Campus EduKami. Esta es la skill mas exigente del pipeline porque la receta de redaccion se diseña desde cero — no existen clases previas como referencia en el repo.

## Por que importa

Las clases son lo que el directivo consume directamente. Una clase mal escrita se abandona. Una clase bien escrita convierte teoria en accion en 15-25 minutos. La receta asegura consistencia, calidad ejecutiva y trazabilidad al blueprint.

## Input esperado

| Input | Ruta | Obligatorio |
|-------|------|-------------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si (status: frozen) |
| GPT packages | `04_outputs/gpt-packages/MM_slug/*.md` | Recomendado |
| Context files | `02_context/{BRIEF,FACTS,CONSTRAINTS,GLOSSARY}.md` | Si |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si |
| File names existentes | `00_inbox/02_Contents/MM_module/{A,B}_*/` | No |

## Output

- Clases de teoria: `04_outputs/clases/MM_slug/T-XX_titulo_v{N}.md`
- Clases de practica: `04_outputs/clases/MM_slug/P-XX_titulo_v{N}.md`

Lee `references/class-recipe.md` para la receta completa. Lee `references/theory-template.md` y `references/practice-template.md` para los templates fill-in-the-blank.

## Procedimiento

### 1. IDENTIFY — Detectar modulo objetivo

Pregunta o detecta del contexto que modulo.

### 2. READ — Cargar blueprint

Lee el blueprint frozen. **RECHAZAR si status es "draft"**. Extrae las 7 secciones.

### 3. SCAN — Buscar hints de titulos

Lee nombres de archivo existentes en `00_inbox/02_Contents/MM_module/A_Clases_Teoria/` y `B_Clases_Practica/` — los nombres (incluso de archivos vacios) sugieren titulos planeados.

### 4. LOAD — Cargar GPT packages (si disponibles)

Lee los paquetes GPT de `04_outputs/gpt-packages/MM_slug/` para referenciar nombres de agentes correctamente en clases practicas.

### 5. DERIVE — Mapear blueprint a plan de clases

Siguiendo el mapeo:
- Blueprint Seccion 0 (Apertura) → **T-01**: "Que vamos a aprender en este modulo"
- Blueprint Secciones 1-3 (Retos, CUs, Agentes) → **T-02+**: 1 clase teoria por tema mayor o agente
- Blueprint Seccion 4 (Casos practicos) → **P-XX**: 1 clase practica por walkthrough

### 6. PLAN — Presentar plan al usuario

Muestra tabla con: titulo, tipo (T/P), CU-ref, agente-ref, duracion estimada, orden. Espera aprobacion.

### 7. GENERATE — Escribir cada clase

Aplica la receta de `references/class-recipe.md`:
- Para teoria → usa `references/theory-template.md`
- Para practica → usa `references/practice-template.md`

### 8. REVIEW — Presentar al usuario

Muestra las clases generadas. Itera segun feedback.

### 9. SAVE — Guardar

Guardar con YAML frontmatter en `04_outputs/clases/MM_slug/`.

## Reglas

- Teoria: max 1500 palabras, escaneable, ejecutivo
- Practica: max 2000 palabras, walkthrough reproducible con escenarios PROEXCA
- YAML frontmatter obligatorio: class_id, module_id, type, title, duration_minutes, blueprint_version, version
- Cada paso de walkthrough DEBE incluir "Lo que debes ver"
- Practicas referencian nombre exacto del agente + CU-XX del blueprint
- Todo en español, tono "sistema no curso"
- No inventar hechos PROEXCA — usar `02_context/` para datos reales
- No inventar metodologias — referenciar las del agente INFUSE correspondiente
- Las clases deben formar un hilo narrativo (cada una conecta con la siguiente)

## Anti-patterns

- Parrafos academicos ("En esta leccion aprenderemos...") — directo al grano
- Walkthroughs vagos ("Introduce tu consulta") — especificos ("Escribe: 'Necesito un dosier del sector aeroespacial europeo para [mision]'")
- Omitir "Lo que debes ver" en pasos de walkthrough
- Escenarios genericos ("una empresa quiere...") — PROEXCA-especificos
- Clases sin conexion entre si — deben formar hilo narrativo
- Clases que introducen un agente sin explicar primero el problema que resuelve
