---
name: custom-gpt-builder
description: >
  Genera paquetes completos de Custom GPT/GEM con instrucciones INFUSE desde un blueprint
  frozen de modulo. Usa esta skill cuando el usuario mencione "construir agentes", "crear GPT",
  "generar GEMs", "INFUSE", "agent package", "custom GPT para modulo", "paquete de agente",
  o cuando exista un blueprint frozen y el usuario pida crear los agentes de ese modulo.
  Tambien cuando el usuario referencie un nombre especifico de agente del offer design
  (Comunicador Ejecutivo, Marketing Estrategico, Analista Estrategico, etc.) en el contexto
  de construirlo o configurarlo. Asegurate de usar esta skill siempre que se necesite
  transformar un blueprint en agentes listos para desplegar.
---

# Custom GPT Builder

Transforma la Seccion 3 (Sistema IA) de un blueprint frozen en paquetes completos de Custom GPT/GEM, listos para desplegar en Google Gems u OpenAI GPTs. Cada paquete incluye instrucciones INFUSE completas, knowledge files strategy, capabilities, prompt starters, guardrails y validation checklist.

## Por que importa

Los agentes son la herramienta que el directivo usa cada dia. Un paquete bien construido significa que el agente funciona desde el dia 1 sin configuracion por parte del usuario. Un paquete mal hecho significa que el directivo abandona el agente en la primera semana.

## Input esperado

| Input | Ruta | Obligatorio |
|-------|------|-------------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si (status: frozen) |
| Agentes INFUSE existentes | `00_inbox/02_Contents/MM_module/C_Custom_Agents/*/` | No |
| GPT Builder methodology | `00_inbox/Agente-Custom-GPT-Builder/agente-custom-gpt-builder.md` | Si |
| CONSTRAINTS | `02_context/CONSTRAINTS.md` | Si |
| GLOSSARY | `02_context/GLOSSARY.md` | No |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si |

## Output

Un archivo por agente en: `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md`

Lee `references/infuse-framework.md` para la guia de las 6 secciones INFUSE y el mapeo blueprint → INFUSE.

## Procedimiento

### 1. IDENTIFY — Detectar modulo objetivo

Pregunta o detecta del contexto que modulo. Localiza el blueprint frozen.

### 2. READ — Cargar blueprint

Lee el blueprint frozen. **RECHAZAR si status es "draft"**. Extrae:
- Seccion 2 (use cases) — para prompt starters y User Guidance
- Seccion 3 (agentes) — nombres, roles, CUs asignados, logica de agrupacion
- Seccion 5 (toolkit) — prompts curados y playbooks
- Seccion 0 (apertura) + Seccion 6 (sintesis) — para Identity y End Instructions

### 3. INVENTORY — Listar agentes

Lista todos los agentes definidos en Seccion 3. Cada agente del blueprint genera 1 paquete GPT.

### 4. SCAN — Buscar definiciones existentes

Para cada agente, busca en `00_inbox/02_Contents/MM_module/C_Custom_Agents/` si hay una definicion INFUSE previa. Si la hay, usala como base de enriquecimiento. Si no, construye desde cero.

### 5. BUILD — Construir paquete INFUSE por agente

Para cada agente, construye las 6 secciones INFUSE. Lee `references/infuse-framework.md` para la guia detallada de cada seccion y el mapeo desde el blueprint.

**Principio fundamental — Enfoque por Rol:**
Cada agente encarna un **ROL profesional senior** con capacidades abiertas en su dominio. El agente NUNCA dice "produzco N tipos de X". Los use cases del blueprint son **ejemplos frecuentes** que se enseñan en el curso, no el limite del agente. El agente puede abordar cualquier reto dentro de su rol profesional.

**Reglas criticas por seccion:**
- **I (Identity):** Referenciar contexto PROEXCA + ROL senior que encarna (ej: "Senior Marketing Strategist", "Head of Digital Marketing") + dominio profesional abierto. Los CUs del blueprint se mencionan como ejemplos frecuentes, no como limites. NUNCA escribir "produces N tipos de documentos/contenido".
- **N (Navigation):** Incluir patron GATE abierto al dominio del rol (no restringido a los tipos de output del blueprint). Los tipos de output del blueprint son atajos frecuentes, no restricciones. El agente acepta cualquier reto de su dominio profesional.
- **F (Flow):** Tono ejecutivo, directo, español, sin jerga
- **U (User Guidance):** Primer bloque = proceso generico abierto ("Para cualquier reto de [dominio del rol]") con pasos generales. Bloques siguientes = workflows especificos de los CUs del blueprint como referencia y ejemplo. Siempre numerado, nunca narrativo.
- **S (Signals):** Cubrir minimo 4 estados: prisa, confusion, enfado, vaguedad
- **E (End Instructions):** Items "nunca hacer" + mandatos permanentes

### 6. EXTRAS — Complementar cada paquete

Tras las 6 secciones INFUSE, añade:

**Knowledge Files Strategy:** Que archivos subir al GPT, que contienen, por que se necesitan. Ser explicito.

**OBLIGATORIO — Knowledge de metodologias del rol:** Para cada agente, buscar e incluir metodologias, frameworks y best practices de reconocido prestigio mundial para el rol profesional que encarna. Generar archivos .md con el contenido de estas metodologias (explicacion practica, cuando usar, pasos, ejemplos). Estos archivos van **junto al .md del custom agent** en su misma carpeta (ej: `00_inbox/02_Contents/MM_module/C_Custom_Agents/knowledge/`). Ejemplos: PESTEL, DAFO, SCQA, STP, BLUF, AIDA, piramide invertida, framework PESO, etc. segun el dominio del rol.

**Capabilities Configuration:**
- Web search: on/off + justificacion
- Code interpreter: on/off + justificacion
- Image generation: on/off + justificacion
- Canvas: on/off + justificacion

**Prompt Starters:** Minimo 4 mapeados a use cases del blueprint + al menos 1-2 prompts abiertos del rol (ej: "Ayudame a diseñar una estrategia de...", "Necesito tu opinion experta sobre..."). Deben ser frases naturales que un directivo escribiria. La mezcla de prompts especificos (CUs) + abiertos (rol) refuerza que el agente no esta limitado a los CUs.

**Guardrails:** Derivar de `02_context/CONSTRAINTS.md` — no alucinar datos, no jerga sin explicar, tono institucional.

**Validation Checklist:** Incluir en cada paquete (ver schema en references).

### 7. PRESENT — Mostrar al usuario

Presenta cada paquete para revision. Iterar segun feedback.

### 8. SAVE — Guardar

Guardar en `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md` con YAML frontmatter.

## Reglas

- **Enfoque por Rol**: cada agente es una skill de rol profesional senior con capacidades abiertas en su dominio. Los CUs del blueprint son ejemplos frecuentes, no limites. El agente puede abordar cualquier reto de su rol.
- Las 6 secciones INFUSE son obligatorias — no se admiten agentes parciales
- Referenciar metodologias reales (BLUF, SCQA, piramide invertida, etc.) — nunca inventar
- **Knowledge de metodologias obligatorio**: generar archivos .md de frameworks/metodologias de prestigio del rol, ubicados junto al .md del agent
- Prompt starters: mezcla de CUs del blueprint + prompts abiertos del rol
- Cada paquete autocontenido (leible sin otros archivos)
- Todo en español, tono ejecutivo
- Knowledge files strategy explicita (no solo "subir archivos relevantes")
- Nombres de agentes consistentes con el blueprint

## Anti-patterns

- **Cerrar el agente a N tipos de output** — los CUs del blueprint son ejemplos frecuentes, no limites. NUNCA "produces N tipos de X"
- Secciones INFUSE genericas que podrian aplicar a cualquier agente — cada agente tiene dominio especifico
- Copiar un agente existente sin adaptar al blueprint concreto
- Prompt starters que SOLO corresponden a CUs del blueprint sin incluir prompts abiertos del rol
- Omitir knowledge files de metodologias del rol
- Omitir knowledge files strategy o capabilities config
- Generar agentes sin validation checklist
