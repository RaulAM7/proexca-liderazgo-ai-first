# INFUSE Framework Reference

Guia para construir las 6 secciones INFUSE de cada Custom GPT/GEM.

## Las 6 secciones

### I — Identity & Goal
Define quien es el agente y que hace. Incluye:
- Rol profesional que encarna (ej: "Director de Marketing estrategico")
- Mision en 1-2 frases
- Contexto institucional PROEXCA
- Metodologias que aplica (nombrar las reales, no inventar)
- Foco: "guiar, corregir, mejorar y optimizar. No respuestas genericas: diseñar sistemas."

### N — Navigation Rules
Define que puede y que NO puede hacer el agente. Incluye:
- **Patron GATE**: inputs minimos que el agente exige antes de proceder (ej: "Antes de redactar, necesito: destinatario, objetivo, plazo, tono")
- Limites de dominio (no responde fuera de su area)
- No inventa datos ni especula
- Si hay riesgo (reputacional, legal, sensible) → sugiere alternativa humana
- Si instrucciones ambiguas → pide claridad antes de seguir

### F — Flow & Personality
Define como se comunica. Incluye:
- Tono: profesional, directo, ejecutivo, sin jerga
- Formato preferido (bullets, bloques cortos, headings)
- Prioridad: claridad > precision tecnica > utilidad practica
- Español neutro (adaptable si se pide)

### U — User Guidance
Define el proceso operativo del agente. **Siempre numerado, nunca narrativo.**
- Proceso de 4-8 pasos que sigue el agente para cada tarea
- Cada paso es una accion concreta (clasificar, analizar, proponer, redactar, ajustar, revisar)
- Basado en los use cases asignados al agente en el blueprint
- Incluir sub-pasos si son complejos

### S — Signals & Adaptation
Define como el agente detecta y responde al estado del usuario. **Minimo 4 estados:**
- Usuario con prisa → condensar, ir al grano, un solo output directo
- Usuario confundido → simplificar, ofrecer ruta paso a paso
- Usuario enfadado/frustrado → validar, tono neutro, foco en solucion
- Usuario vago/impreciso → pedir precision con preguntas concretas
- (Opcional) Usuario avanzado → tecnicas mas profundas

### E — End Instructions
Mandatos permanentes que el agente SIEMPRE cumple:
- Items "nunca hacer" (no compartir docs internos, no alucinar datos, etc.)
- Coherencia con INFUSE
- Usar ejemplos practicos cuando aporten claridad
- Procesos solidos y repetibles

## Mapeo Blueprint → INFUSE

| Seccion Blueprint | Seccion INFUSE | Que aporta |
|-------------------|----------------|------------|
| 0. Apertura narrativa | I — Identity | El "por que" del agente |
| 1. Mapa de retos | N — Navigation | Que problemas atender, que evitar |
| 2. Casos de uso | U — User Guidance | Workflow operativo por caso |
| 3. Sistema IA | I — Identity | Rol, especializacion, CUs asignados |
| 5. Toolkit | U — User Guidance | Prompts, mini-playbooks |
| 6. Sintesis | E — End Instructions | Que nunca hacer |

## Schema del output

```yaml
---
agent_name: "Marketing Estrategico PROEXCA"
module_id: "04"
module_name: "Impacta - Marketing"
blueprint_version: 1
version: 1
status: ready
---
```

```markdown
# GPT Package: [Nombre del Agente]

## Metadata
- Nombre: [nombre display]
- Descripcion corta: [1-2 lineas]
- Avatar sugerido: [breve]

## INFUSE Instructions
### I — Identity & Goal
### N — Navigation Rules
### F — Flow & Personality
### U — User Guidance
### S — Signals & Adaptation
### E — End Instructions

## Knowledge Files Strategy
- Archivo 1: [nombre] — [que contiene, por que]

## Capabilities Configuration
- Web search: [on/off + por que]
- Code interpreter: [on/off + por que]
- Image generation: [on/off + por que]
- Canvas: [on/off + por que]

## Prompt Starters
1. "[mapeado a CU-XX]"
2. "[mapeado a CU-XX]"
3. "..."
4. "..."

## Guardrails
- [guardrail]

## Validation Checklist
- [ ] INFUSE completo (6 secciones)
- [ ] Navigation incluye GATE
- [ ] Signals cubre 4 estados
- [ ] Metodologia especifica integrada (no generica)
- [ ] Prompt starters cubren use cases asignados
- [ ] Knowledge files documentados
- [ ] Tono alineado con CONSTRAINTS.md
```
