# QA: module-blueprint-builder

## Calidad del documento blueprint

- [ ] YAML frontmatter tiene todos los campos requeridos (module_id, module_name, direct_verb, version, status, date)
- [ ] Las 7 secciones presentes (0-6) O set reducido para modulos 00/01
- [ ] No quedan markers `[UNKNOWN]` en blueprints con status `frozen`
- [ ] Cantidad de use cases entre 1 y 8
- [ ] Cantidad de agentes: max 1 core + 2 sub-agentes
- [ ] Todo el contenido en español
- [ ] Versionado correcto (no hay sobreescrituras)
- [ ] Campo status es `frozen` (no `draft`) para blueprints que seran consumidos

## Trazabilidad de fuentes

- [ ] Cada use case es trazable a: nombre de archivo en inbox, offer design, o input del usuario
- [ ] Cada rol de agente es trazable a: definicion INFUSE existente, offer design, o decision del usuario
- [ ] No hay hechos inventados ni use cases alucinados

## Preparacion para pipeline

- [ ] El archivo blueprint existe en la ruta correcta: `04_outputs/blueprints/MM_slug/blueprint_v{N}.md`
- [ ] El archivo es parseable por skills downstream (markdown valido, frontmatter valido)
- [ ] El blueprint tiene suficiente detalle para que `custom-gpt-builder` derive specs de agentes
- [ ] El blueprint tiene suficiente detalle para que `class-redactor-maquetador` derive contenido de clases
- [ ] El blueprint tiene suficiente detalle para que `modulo-narrativa-para-notebooklm` genere narrativa

## Calidad del SKILL.md (post skill-creator)

- [ ] La descripcion es suficientemente "pushy" para triggering
- [ ] El procedimiento es paso-a-paso e imperativo
- [ ] Anti-patterns documentados
- [ ] Menos de 500 lineas (o usa references/ para overflow)
- [ ] Frontmatter YAML correcto (name, description)
