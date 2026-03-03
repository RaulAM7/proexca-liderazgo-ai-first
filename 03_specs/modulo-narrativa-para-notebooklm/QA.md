# QA: modulo-narrativa-para-notebooklm

## Estructura del documento

- [ ] YAML frontmatter completo (module_id, module_name, direct_verb, purpose, versions)
- [ ] Las 9 secciones presentes
- [ ] Seccion 4 ("Que NO es") no esta vacia y es sustantiva
- [ ] Seccion 5 ("Que debe sentir") describe estado cognitivo, no conocimiento
- [ ] Seccion 7 ("Idea central") es una unica frase memorable
- [ ] Seccion de prompts NotebookLM presente con 3-5 prompts
- [ ] Longitud total: 150-300 lineas

## Calidad de contenido

- [ ] Tono estrategico, no descriptivo
- [ ] Metodo DIRECT referenciado por nombre
- [ ] El verbo del modulo esta correctamente posicionado en la secuencia DIRECT
- [ ] No es un content dump — la narrativa es intencional y enfocada
- [ ] Cada seccion aporta una perspectiva unica (no hay repeticion entre secciones)
- [ ] Todo en español

## Manejo de inputs

- [ ] Version del blueprint referenciada en frontmatter
- [ ] Secciones 8-9 populated si GPT packages / class content disponibles
- [ ] Secciones 8-9 marcadas `[pendiente]` si esos inputs no estan disponibles
- [ ] No hay nombres de agentes ni titulos de clases inventados
- [ ] Las secciones 8-9 resumen y apuntan, no reproducen contenido

## Prompts NotebookLM

- [ ] Prompts especificos de este modulo (no genericos)
- [ ] Al menos 1 prompt para audio/podcast generation
- [ ] Al menos 1 prompt para summary/study guide
- [ ] Prompts referencian contexto PROEXCA
- [ ] Prompts son lo suficientemente detallados para producir output de calidad

## Calibracion contra ejemplo existente

- [ ] El nivel de abstraccion es similar al de la narrativa de "Domina lo esencial"
- [ ] La seccion "Que NO es" tiene el mismo poder de filtro
- [ ] La seccion "Que debe sentir" describe un estado similar ("puedo X sin Y")
- [ ] La "Idea central" tiene el mismo impacto que "No necesitas ver mas IA..."

## Checks de la skill (post skill-creator)

- [ ] SKILL.md bajo 500 lineas
- [ ] Receta vive en references/narrative-recipe.md
- [ ] Descripcion es "pushy" para triggering
- [ ] Procedimiento paso-a-paso e imperativo
