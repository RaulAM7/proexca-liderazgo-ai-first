# IO: module-blueprint-builder

## Inputs

| Input | Ruta | Obligatorio | Notas |
|-------|------|-------------|-------|
| Blueprint template | `00_inbox/01_Content_Structure_and_Design_and_Build_Guidelines/Blueprint abstracta modulo METODO DIRECT.md` | Si | Estructura universal 7 partes |
| Carpeta del modulo | `00_inbox/02_Contents/MM_module_slug/` | Si | File names como señales; C_Custom_Agents/ si populated |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si | Avatar, pain points, dream outcome, toolkit |
| BRIEF | `02_context/BRIEF.md` | Si | Identidad del proyecto |
| FACTS | `02_context/FACTS.md` | Si | Hechos verificados sobre modulos |
| CONSTRAINTS | `02_context/CONSTRAINTS.md` | Si | Restricciones de tono, plataforma, presupuesto |
| GLOSSARY | `02_context/GLOSSARY.md` | No | Terminologia del dominio |
| Input del usuario | Interactivo | Si | Decisiones sobre UNKNOWNs, refinamientos |

## Output

| Output | Ruta | Formato |
|--------|------|---------|
| Blueprint del modulo | `04_outputs/blueprints/MM_module-slug/blueprint_v{N}.md` | Markdown con YAML frontmatter |

## Schema del output

```yaml
---
module_id: "03"
module_name: "Impacta - Comunicacion"
direct_verb: "I"
version: 1
status: frozen | draft
date: 2026-03-XX
---
```

### Secciones (modulos 02+)

```markdown
# Blueprint: Modulo MM — [Nombre]

## 0. Apertura narrativa
- Reencuadre: [que significa este verbo DIRECT para el directivo]
- Frustraciones clave: [2-3 frustraciones reales]
- Vision AI-first: [que cambia]

## 1. Mapa de retos del directivo
- Reto 1: [descripcion]
- Reto 2: [descripcion]
- ...
- Brief infografia: [concepto visual para la infografia unica del modulo]

## 2. Casos de uso clave
- CU-01: [nombre] — [descripcion 1 linea]
- CU-02: [nombre] — [descripcion 1 linea]
- ... (6-8 max)

## 3. Sistema IA (agentes)
### Agente principal
- Nombre: [nombre]
- Rol: [1 linea]
- Problema mental que resuelve: [texto]
### Sub-agentes (opcional)
- Sub-agente 1: [nombre] — [cuando/por que separar]

## 4. Casos practicos guiados
Para cada CU-XX relevante:
- Clase practica: [titulo]
- Supuesto realista: [breve escenario]
- Walkthrough resumen: contexto → input → uso agente → output → ajuste

## 5. Toolkit ejecutiva
- Agentes: [lista con nombres]
- Prompts curados: [lista nombre + proposito]
- Mini-playbooks: [lista "si pasa X → usa Y"]

## 6. Sintesis operativa
- Problemas que resuelve este modulo: [lista]
- Cuando usar IA aqui: [lista]
- Que NO hacer: [lista]
- Encaje en DIRECT: [parrafo]
```

## Contrato con skills downstream

- `custom-gpt-builder` lee: Section 3 (agentes) + Section 2 (use cases) + Section 5 (toolkit)
- `class-redactor-maquetador` lee: Section 0 (apertura) + Sections 2-4 (use cases, agentes, casos practicos)
- `modulo-narrativa-para-notebooklm` lee: todo el blueprint
- Todas rechazan blueprints con `status: draft`
- Todas leen la version mas reciente (mayor N) si hay multiples
