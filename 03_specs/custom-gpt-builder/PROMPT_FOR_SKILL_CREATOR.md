# PROMPT FOR SKILL-CREATOR: custom-gpt-builder

Crea una skill llamada **"custom-gpt-builder"**.

## Proposito

Genera paquetes completos de Custom GPT / GEM desde un blueprint frozen de modulo. Cada paquete contiene instrucciones INFUSE completas (6 secciones), estrategia de knowledge files, configuracion de capacidades, prompt starters, guardrails y un validation checklist. Los agentes estan diseñados para directivos PROEXCA dentro del metodo DIRECT.

## Trigger (descripcion pushy)

Usa esta skill cuando el usuario mencione "construir agentes", "crear GPT", "generar GEMs", "INFUSE", "agent package", "custom GPT para modulo", "paquete de agente", o cuando exista un blueprint frozen y el usuario pida crear los agentes de ese modulo. Tambien cuando el usuario referencie un nombre especifico de agente del offer design (Comunicador Ejecutivo, Analista Estrategico, etc.) en el contexto de construirlo o configurarlo. Asegurate de usar esta skill siempre que se necesite transformar un blueprint en agentes listos para desplegar.

## Workflow

1. Identificar modulo objetivo (del contexto o preguntar)
2. Leer blueprint frozen desde `04_outputs/blueprints/MM_slug/blueprint_v{N}.md`
   - RECHAZAR si status es "draft"
3. Listar agentes de la Seccion 3 del blueprint
4. Para cada agente:
   a. Buscar definicion existente en `00_inbox/02_Contents/MM_module/C_Custom_Agents/`
   b. Leer el framework INFUSE de `00_inbox/Agente-Custom-GPT-Builder/agente-custom-gpt-builder.md`
   c. Construir las 6 secciones INFUSE (I/N/F/U/S/E)
   d. Derivar knowledge file strategy del dominio del agente
   e. Configurar capabilities (web, code interpreter, images, canvas)
   f. Generar 4+ prompt starters mapeados a use cases del blueprint
   g. Escribir guardrails desde `02_context/CONSTRAINTS.md`
   h. Completar validation checklist
5. Presentar cada paquete al usuario para revision
6. Guardar en `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md`

## Archivos de referencia a bundlear

- `references/infuse-framework.md` — Guia extraida del framework INFUSE con las 6 secciones y como escribir cada una
- `references/agent-examples.md` — 2-3 excerpts de agentes existentes como few-shot examples:
  - `00_inbox/.../Agente de IA - Redaccion de Emails Directivos.md` (ejemplo de BLUF + 3P)
  - `00_inbox/.../Agente IA - Informes, Memos & Briefings Ejecutivos.md` (ejemplo de piramide invertida)
  - `00_inbox/.../Agente de IA - Comunicador Institucional.md` (ejemplo de framework 5 capas de riesgo)

## Restricciones criticas

- Las 6 secciones INFUSE son obligatorias por agente
- Navigation rules debe incluir patron GATE
- Signals debe cubrir 4 estados (prisa, confusion, enfado, vaguedad)
- Todo en español
- Referenciar metodologias reales (BLUF, 3P, SCQA, etc.) — nunca inventar
- Incluir validation checklist por agente

## Ruta de output

`04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md`

## Skill existente a usar como modelo

`shared/skills/emailing-copy/SKILL.md`
