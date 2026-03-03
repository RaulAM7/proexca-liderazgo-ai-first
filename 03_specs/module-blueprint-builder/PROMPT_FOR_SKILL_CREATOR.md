# PROMPT FOR SKILL-CREATOR: module-blueprint-builder

Crea una skill llamada **"module-blueprint-builder"**.

## Proposito

Ayuda al usuario a construir un blueprint completo de cualquier modulo del programa PROEXCA "Liderazgo Inteligente". Cada modulo sigue el metodo DIRECT y tiene una estructura universal de 7 partes definida en el template abstracto. El blueprint es el artefacto central del que dependen 3 skills downstream (custom-gpt-builder, class-redactor-maquetador, modulo-narrativa-para-notebooklm).

## Trigger (descripcion pushy)

Usa esta skill cuando el usuario mencione "blueprint", "crear blueprint", "diseñar modulo", "planificar modulo", "estructura del modulo", "module design", o pida empezar a trabajar en la estructura de un modulo. Tambien cuando el usuario referencia cualquier modulo por nombre (Domina lo esencial, Impacta Comunicacion, Impacta Marketing, Analiza Mejor, Dirige Mejor) en el contexto de planificarlo o estructurarlo. Asegurate de usar esta skill siempre que el usuario quiera definir que contiene un modulo, que agentes tiene, que casos de uso cubre, o como encaja en DIRECT.

## Workflow

1. Pregunta o detecta que modulo quiere el usuario
2. Escanea la carpeta del modulo bajo `00_inbox/02_Contents/MM_*/`:
   - Lee TODOS los nombres de archivo (incluso vacios — los nombres codifican use cases y temas)
   - Lee cualquier archivo populated en `C_Custom_Agents/` (definiciones INFUSE)
   - Lee la narrativa en `0_Resumen_Multimedia_Modulo/` si existe
3. Lee `00_inbox/00_Offer_Design/` para contexto de avatar y dream outcome
4. Lee `00_inbox/01_Content_Structure_and_Design_and_Build_Guidelines/Blueprint abstracta modulo METODO DIRECT.md` para el template
5. Lee `02_context/{BRIEF,FACTS,CONSTRAINTS,GLOSSARY}.md`
6. Genera un DRAFT del blueprint siguiendo el schema de `references/blueprint-schema.md`
7. Presenta al usuario con markers `[UNKNOWN — necesita input]` resaltados
8. Loop interactivo: refina basandose en feedback (max 5 preguntas por ronda)
9. Cuando el usuario aprueba: pon status a "frozen", guarda archivo versionado

## Restricciones criticas

- Modulos 00 y 01 usan blueprint REDUCIDO (son fundacionales, no modulos de verbo DIRECT)
- Modulos 02+ siguen el blueprint COMPLETO de 7 partes
- Nunca inventar use cases o roles de agentes — extraer de fuentes o preguntar
- Todo en español
- Max 6-8 use cases por modulo, max 1 core + 2 sub-agentes
- YAML frontmatter obligatorio con: module_id, module_name, direct_verb, version, status, date
- No congelar si quedan [UNKNOWN]s

## Archivos de referencia a bundlear

- `references/blueprint-schema.md` — Schema completo del output con todas las secciones y campos
- `references/module-registry.md` — Lista de los 6 modulos con IDs, nombres, verbos DIRECT y rutas inbox

## Ruta de output

`04_outputs/blueprints/MM_module-slug/blueprint_v{N}.md`

## Skill existente a usar como modelo de estructura

`shared/skills/emailing-copy/SKILL.md` (para la estructura del SKILL.md: frontmatter → goal → input → output → reglas → anti-patterns → procedimiento)
