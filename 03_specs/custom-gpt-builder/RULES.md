# RULES: custom-gpt-builder

## Enfoque por Rol

- Cada agente encarna un **rol profesional senior** con capacidades abiertas en su dominio, no produce N tipos de output
- La seccion Identity NUNCA dice "produces N tipos de X" — describe el rol y dominio profesional de forma abierta
- Los use cases del blueprint son **ejemplos frecuentes** que se enseñan en el curso, no el limite del agente
- Knowledge files DEBEN incluir archivos .md de metodologias/frameworks de reconocido prestigio para el rol (ej: PESTEL, DAFO, SCQA, STP, BLUF, AIDA, PESO, AARRR segun dominio)
- Los .md de metodologias van junto al .md del custom agent en `knowledge/`
- Prompt starters: mezcla de CUs del blueprint + al menos 1-2 prompts abiertos del rol
- Navigation: GATE abierto al dominio del rol, los tipos de output del blueprint son atajos frecuentes no restricciones
- User Guidance: primer bloque = proceso generico abierto del rol, bloques siguientes = workflows de CUs como referencia

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
