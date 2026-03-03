# IO: custom-gpt-builder

## Inputs

| Input | Ruta | Obligatorio | Notas |
|-------|------|-------------|-------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si | Debe tener `status: frozen` |
| Agentes INFUSE existentes | `00_inbox/02_Contents/MM_module/C_Custom_Agents/*/` | No | Si populated, usados como punto de partida |
| GPT Builder methodology | `00_inbox/Agente-Custom-GPT-Builder/agente-cuistom-gpt-builder.md` | Si | Framework INFUSE de referencia |
| CONSTRAINTS | `02_context/CONSTRAINTS.md` | Si | Tono, marca, restricciones |
| GLOSSARY | `02_context/GLOSSARY.md` | No | Terminologia del dominio |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si | Avatar pain points para seccion Signals |

## Output

| Output | Ruta | Formato |
|--------|------|---------|
| Paquete GPT (por agente) | `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md` | Markdown con YAML frontmatter |

## Schema del output

```yaml
---
agent_name: "Comunicador Ejecutivo PROEXCA"
module_id: "03"
module_name: "Impacta - Comunicacion"
blueprint_version: 1
version: 1
status: ready | draft
---
```

```markdown
# GPT Package: [Nombre del Agente]

## Metadata
- Nombre: [nombre display]
- Descripcion corta: [1-2 lineas, para listing]
- Avatar sugerido: [breve]

## INFUSE Instructions

### I — Identity & Goal
[texto completo]

### N — Navigation Rules
[texto completo, incluyendo patron GATE]

### F — Flow & Personality
[texto completo]

### U — User Guidance
[proceso operativo numerado]

### S — Signals & Adaptation
[minimo 4 estados: prisa, confusion, enfado, vaguedad]

### E — End Instructions
[mandatos permanentes + "nunca hacer"]

## Knowledge Files Strategy
- Archivo 1: [nombre] — [que contiene, por que se necesita]
- Archivo 2: ...

## Capabilities Configuration
- Web search: [on/off + por que]
- Code interpreter: [on/off + por que]
- Image generation: [on/off + por que]
- Canvas: [on/off + por que]

## Prompt Starters
1. "[starter 1 — mapeado a CU-01]"
2. "[starter 2 — mapeado a CU-02]"
3. "[starter 3]"
4. "[starter 4]"

## Guardrails
- [guardrail 1]
- [guardrail 2]

## Validation Checklist
- [ ] INFUSE completo (6 secciones)
- [ ] Navigation incluye GATE
- [ ] Signals cubre 4 estados
- [ ] No alucinacion habilitada
- [ ] Metodologia especifica integrada
- [ ] Prompt starters cubren use cases
- [ ] Knowledge files documentados
```

## Contrato con skills downstream

- `modulo-narrativa-para-notebooklm` lee los paquetes GPT para resumir agentes en la narrativa (seccion 8)
- Los paquetes deben ser autocontenidos (no requieren archivos externos para entenderse)
