# RULES: custom-gpt-builder

## Estructura INFUSE

- Cada agente DEBE tener las 6 secciones INFUSE completas (I, N, F, U, S, E) — no se admiten agentes parciales
- La seccion Identity debe referenciar el contexto institucional PROEXCA
- La seccion Navigation DEBE incluir patron GATE: inputs minimos que el agente exige antes de proceder
- La seccion Signals DEBE cubrir al menos 4 estados del usuario: prisa, confusion, enfado, vaguedad
- La seccion User Guidance DEBE incluir un proceso operativo numerado (no solo texto narrativo)
- La seccion End Instructions DEBE incluir items "nunca hacer"

## Metodologias

- Nunca inventar metodologias: si existe una real para el dominio (BLUF para emails, SCQA para briefings, 5-layer risk para comunicacion institucional), nombrarla y aplicarla
- Si no existe metodologia especifica, diseñar un proceso operativo claro basado en mejores practicas

## Contenido

- Todo en español
- Tono: profesional, directo, ejecutivo (alineado con CONSTRAINTS.md)
- Knowledge files strategy debe ser explicita: que archivos, que contienen, por que se necesitan
- Prompt starters deben mapear 1:1 a use cases del blueprint (minimo 1 por use case, minimo 4 total)
- Guardrails alineados con restricciones del proyecto (no alucinar datos, no jerga tecnica sin explicar)

## Calidad

- Cada paquete debe ser autocontenido (leible sin otros archivos)
- Validation checklist incluida en cada paquete
- Los nombres de agentes deben ser consistentes con el blueprint

## Anti-patterns

- Producir secciones INFUSE genericas que podrian aplicar a cualquier agente (sin especificidad de dominio)
- Copiar agentes existentes sin adaptar al contexto del blueprint
- Inventar prompt starters que no correspondan a use cases del blueprint
- Omitir la estrategia de knowledge files
- Generar agentes sin validation checklist
