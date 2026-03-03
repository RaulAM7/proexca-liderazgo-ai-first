# PROMPT FOR SKILL-CREATOR: class-redactor-maquetador

Crea una skill llamada **"class-redactor-maquetador"**.

## Proposito

Genera contenido de clases de teoria y practica desde un blueprint frozen de modulo. Esta skill contiene una RECETA DE CLASES diseñada desde cero (no hay clases previas en el repo como referencia). La receta produce contenido ejecutivo para directivos PROEXCA dentro del metodo DIRECT.

## Trigger (descripcion pushy)

Usa esta skill cuando el usuario mencione "escribir clases", "redactar contenido", "generar clases", "contenido del modulo", "clases de teoria", "clases practicas", "class content", "redactar teoria", "walkthrough", "maquetar clases", "escribir el contenido del modulo", o cuando exista un blueprint frozen y el usuario pida producir el contenido educativo del modulo. Tambien cuando el usuario referencie un titulo de clase especifico o pida crear material formativo. Asegurate de usar esta skill siempre que se necesite transformar un blueprint en contenido de clases listo para la plataforma.

## Workflow

1. Identificar modulo objetivo (del contexto o preguntar)
2. Leer blueprint frozen desde `04_outputs/blueprints/MM_slug/blueprint_v{N}.md`
   - RECHAZAR si status es "draft"
3. Leer nombres de archivo existentes en `00_inbox/02_Contents/MM_module/` para hints de titulos
4. Opcionalmente leer GPT packages de `04_outputs/gpt-packages/MM_slug/` si disponibles
5. Derivar plan de clases:
   - Blueprint Section 0 → T-01 (apertura/que vamos a aprender)
   - Blueprint Sections 1-3 → clases de teoria (1 por tema mayor)
   - Blueprint Section 4 → clases de practica (1 por walkthrough)
6. Presentar plan al usuario (titulos, orden, tipo, duracion estimada)
7. Tras aprobacion, generar cada clase aplicando la receta de `references/class-recipe.md`
8. Presentar para revision, iterar
9. Guardar en `04_outputs/clases/MM_slug/`

## Archivos de referencia a bundlear

Esta skill NECESITA references/ porque la receta es extensa:

- `references/class-recipe.md` — Receta completa de clases teoria + practica con guia por seccion
- `references/theory-template.md` — Template fill-in-the-blank para clases de teoria
- `references/practice-template.md` — Template fill-in-the-blank para clases de practica

## La receta de clases (nucleo de la skill)

### Receta de TEORIA

1. **Objetivo de aprendizaje:** 1-2 frases empezando con "Al terminar esta clase, seras capaz de..."
2. **Agenda:** 3-5 items numerados con minutos estimados (total ~15-20 min lectura)
3. **Desarrollo:** 3-5 subsecciones headed, cada una con:
   - Frase de apertura conectando con la realidad del directivo
   - Contenido core: 2-3 parrafos o listas de bullets
   - Callout box para concepto clave (si aplica)
   - Conexion con la siguiente subseccion
4. **Puntos clave:** 3-5 bullets accionables
5. **Conexion:** 1-2 frases ligando con lo que viene

### Receta de PRACTICA

1. **Objetivo practico:** 1 frase describiendo que producira el directivo
2. **Supuesto:** 2-3 parrafos de escenario realista PROEXCA (internacionalizacion, ferias, analisis sectorial, comunicacion institucional)
3. **Preparacion:** lista de bullets de lo necesario
4. **Walkthrough:** 4-8 pasos numerados, cada uno con:
   - Heading de accion (verbo imperativo)
   - Instrucciones concretas (que escribir, que prompt usar)
   - Bloque "Lo que debes ver" (resultado esperado)
5. **Ajuste fino:** 2-3 parrafos sobre como iterar/mejorar
6. **Resultado esperado:** descripcion del output final
7. **Errores comunes:** 3-5 pares error + fix

## Restricciones criticas

- Teoria: max 1500 palabras, escaneable, ejecutivo
- Practica: escenario PROEXCA realista + walkthrough reproducible
- YAML frontmatter obligatorio en cada clase
- Practicas referencian nombre del agente + ID use case del blueprint
- Todo en español
- No inventar hechos PROEXCA (usar `02_context/` para datos reales)
- Cada paso de walkthrough DEBE incluir "Lo que debes ver"

## Ruta de output

`04_outputs/clases/MM_slug/{T,P}-XX_titulo_v{N}.md`

## Skill existente a usar como modelo

`shared/skills/emailing-copy/SKILL.md`
