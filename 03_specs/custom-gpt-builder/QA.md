# QA: custom-gpt-builder

## Checks por agente

- [ ] Las 6 secciones INFUSE presentes y no vacias (I, N, F, U, S, E)
- [ ] Identity referencia el contexto PROEXCA
- [ ] Navigation incluye patron GATE (inputs minimos exigidos)
- [ ] Signals cubre 4 estados: prisa, confusion, enfado, vaguedad
- [ ] User Guidance incluye proceso operativo numerado
- [ ] End Instructions incluye items "nunca hacer"
- [ ] Knowledge file strategy explicita (archivos nombrados, contenido descrito)
- [ ] Al menos 4 prompt starters
- [ ] Prompt starters mapean a use cases del blueprint
- [ ] Guardrails presentes y no genericos
- [ ] Validation checklist completada

## Consistencia cross-agente

- [ ] Todos los agentes de un modulo comparten tono/personalidad consistente
- [ ] No hay responsabilidades solapadas entre agentes del mismo modulo
- [ ] Nombres de agentes coinciden con la Seccion 3 del blueprint

## Calidad de contenido

- [ ] Metodologias reales referenciadas (no inventadas)
- [ ] Tono ejecutivo, directo, sin jerga innecesaria
- [ ] Todo en español
- [ ] Paquetes autocontenidos (legibles sin otros archivos)

## Checks de pipeline

- [ ] Version del blueprint referenciada en YAML frontmatter
- [ ] Rutas siguen convencion: `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md`
- [ ] YAML frontmatter completo (agent_name, module_id, module_name, blueprint_version, version, status)
