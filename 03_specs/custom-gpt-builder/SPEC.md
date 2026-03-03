# SPEC: custom-gpt-builder

## Outcome

Una skill que, dado un blueprint frozen de un modulo, genera **paquetes completos de Custom GPT/GEM** para cada agente definido en la seccion 3 del blueprint. Cada paquete contiene instrucciones INFUSE completas, estrategia de knowledge files, configuracion de capacidades, prompt starters, guardrails y checklist de validacion.

## Scope

- Generar N paquetes GPT por modulo (uno por agente en el blueprint)
- Aplicar la metodologia INFUSE del documento base del GPT Builder
- Enriquecer con agentes INFUSE existentes cuando esten disponibles en inbox
- Producir agentes listos para desplegar en Google Gems / OpenAI GPTs

## No-scope

- No construye el blueprint (eso es `module-blueprint-builder`)
- No escribe contenido de clases (eso es `class-redactor-maquetador`)
- No decide cuantos agentes hay — eso lo define el blueprint
- No despliega en plataforma — solo produce el paquete documental

## Enfoque

### Fuente de metodologia

El documento base es `00_inbox/Agente-Custom-GPT-Builder/agente-cuistom-gpt-builder.md`, que define:
- Framework INFUSE (6 secciones: I/N/F/U/S/E)
- Proceso de 8 pasos para construir GPTs
- Preguntas de alineacion obligatorias

### Mapeo Blueprint → INFUSE

| Seccion Blueprint | Seccion INFUSE | Que aporta |
|-------------------|----------------|------------|
| 0. Apertura narrativa | I — Identity | El "por que" del agente |
| 1. Mapa de retos | N — Navigation | Que problemas atender, que evitar |
| 2. Casos de uso | U — User Guidance | Workflow operativo por caso |
| 3. Sistema IA | I — Identity | Rol, especializacion |
| 5. Toolkit | U — User Guidance | Prompts, mini-playbooks |
| 6. Sintesis | E — End Instructions | Que nunca hacer |

### Enriquecimiento con agentes existentes

Para modulos que ya tienen agentes en `00_inbox/02_Contents/MM_module/C_Custom_Agents/`:
1. Leer la definicion INFUSE existente
2. Usarla como punto de partida
3. Enriquecer con contexto del blueprint (use cases, toolkit, retos)
4. Completar secciones faltantes

Para modulos sin agentes existentes:
1. Construir desde cero usando INFUSE + blueprint + offer design

## Decisiones de diseno

- Cada paquete GPT es **autocontenido**: leible sin necesidad de otros archivos
- Las instrucciones INFUSE se escriben en español, tono ejecutivo
- Prompt starters mapean 1:1 a use cases del blueprint (minimo 4)
- El validation checklist es parte del paquete, no un archivo separado
- La skill bundlea `references/infuse-framework.md` y `references/agent-examples.md` para mantener SKILL.md bajo 500 lineas
