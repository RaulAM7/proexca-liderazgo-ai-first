# PROMPT FOR SKILL-CREATOR: modulo-narrativa-para-notebooklm

Crea una skill llamada **"modulo-narrativa-para-notebooklm"**.

## Proposito

Genera un documento narrativo estrategico por modulo, diseñado para alimentar NotebookLM y producir contenido multimedia (podcasts, audio overviews, guias de estudio). La narrativa captura intencion, sentimiento y posicionamiento estrategico — NO es un resumen de contenido. Esta basada en el ejemplo existente de la narrativa del modulo "Domina lo esencial".

## Trigger (descripcion pushy)

Usa esta skill cuando el usuario mencione "narrativa", "NotebookLM", "multimedia", "generar narrativa del modulo", "podcast script", "narrative for module", "resumen multimedia", "audio del modulo", o cuando exista un blueprint frozen y el usuario quiera crear el documento fuente para NotebookLM. Tambien cuando el usuario referencie "generacion multimedia", "intro del modulo" o pida material para producir podcast o audio educativo. Asegurate de usar esta skill siempre que se necesite un documento estrategico del modulo para generacion de contenido multimedia.

## Workflow

1. Identificar modulo objetivo
2. Leer blueprint frozen (OBLIGATORIO — rechazar si no existe o esta en draft)
3. Leer GPT packages si disponibles en `04_outputs/gpt-packages/MM_slug/` (enriquece seccion 8)
4. Leer class content si disponible en `04_outputs/clases/MM_slug/` (enriquece seccion 9)
5. Leer la narrativa ejemplo como referencia de receta:
   `00_inbox/02_Contents/00_Modulo_Domina_Lo_Esencial_1/0_Resumen_Multimedia_Modulo/Narrativa Generacion Multimedia Modulo Domina lo esencial.md`
6. Aplicar la receta de 9 secciones
7. Generar 3-5 prompts NotebookLM especificos del modulo
8. Presentar al usuario para revision
9. Guardar en `04_outputs/narrativas/MM_slug/narrativa_v{N}.md`

## Archivos de referencia a bundlear

- `references/narrative-recipe.md` — Estructura de 9 secciones con guia detallada por seccion y anti-patterns

## La receta de narrativa (9 secciones)

1. **Contexto general:** Posicionar este modulo dentro del viaje DIRECT. No describir contenido.
2. **Que es [verbo]:** Definir como CAPACIDAD que el directivo adquiere, no como herramienta que aprende.
3. **Rol especifico del modulo:** Que instala en el workflow diario del directivo. Operativo, no conceptual.
4. **Que NO es este modulo (OBLIGATORIO):** Exclusiones explicitas. Esta seccion es el filtro de expectativas. Sin ella la narrativa pierde poder.
5. **Que debe sentir el directivo al terminarlo:** Estado COGNITIVO, no conocimiento. "Puedo hacer X sin depender de nadie" — no "Se usar Y herramientas".
6. **Relacion con los siguientes modulos:** Conexion hacia adelante en la secuencia DIRECT.
7. **Idea central que debe quedar grabada:** UNA frase. Breve. Memorable. (Ejemplo existente: "No necesitas ver mas IA. Necesitas menos IA, mejor usada.")
8. **Resumen de agentes y toolkit:** Breve desde GPT packages. Si no disponibles: `[pendiente — ejecutar custom-gpt-builder primero]`
9. **Resumen de clases y casos practicos:** Breve desde class content. Si no disponibles: `[pendiente — ejecutar class-redactor-maquetador primero]`

**Prompts NotebookLM (3-5):** Especificos del modulo. Ejemplo:
- "Genera un podcast de 10 minutos donde dos expertos discuten por que [verbo] es la competencia mas subestimada de un directivo AI-first, usando ejemplos del contexto de PROEXCA"

## Restricciones criticas

- Documento ESTRATEGICO, no descriptivo
- Seccion 4 (Que NO es) es obligatoria y sustantiva
- Seccion 5 describe estado cognitivo, no conocimiento
- Secciones 8-9 resumen y apuntan, no reproducen
- Funciona con solo blueprint (minimo) — secciones 8-9 se marcan [pendiente]
- Prompts NotebookLM especificos (no genericos)
- Todo en español
- 150-300 lineas totales
- Referenciar DIRECT por nombre

## Ruta de output

`04_outputs/narrativas/MM_slug/narrativa_v{N}.md`

## Skill existente a usar como modelo

`shared/skills/emailing-copy/SKILL.md`
