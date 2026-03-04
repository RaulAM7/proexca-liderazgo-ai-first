# INFUSE Framework Reference

Guia para construir las 6 secciones INFUSE de cada Custom GPT/GEM.

## Las 6 secciones

### I — Identity & Goal
Define quien es el agente y que hace. El agente encarna un **ROL profesional senior** con capacidades abiertas en su dominio — no es una maquina de N outputs. Los use cases del blueprint son ejemplos frecuentes que se enseñan en el curso, no el limite del agente. NUNCA escribir "produces N tipos de X". Incluye:
- Rol profesional senior que encarna (ej: "Senior Marketing Strategist de internacionalizacion", "Head of Digital Marketing")
- Dominio profesional abierto donde el agente puede ayudar
- Mision en 1-2 frases
- Contexto institucional PROEXCA
- Ejemplos frecuentes de lo que puede hacer (derivados de los CUs del blueprint), presentados como ejemplos no como limites
- Metodologias que domina (nombrar las reales, no inventar)
- Foco: "guiar, corregir, mejorar y optimizar. No respuestas genericas: diseñar sistemas."

### N — Navigation Rules
Define que puede y que NO puede hacer el agente. El GATE es abierto al dominio completo del rol, no restringido a los tipos de output del blueprint. Los tipos de output del blueprint son atajos frecuentes, no restricciones. Incluye:
- **Patron GATE**: inputs minimos que el agente exige antes de proceder, formulados de forma abierta al dominio (ej: "Antes de ayudarte, necesito: que reto tienes, contexto, audiencia/destinatario, resultado esperado")
- Atajos frecuentes del GATE para los CUs del blueprint (ej: "Si es un dosier, necesito: sector + audiencia + evento")
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
- **Primer bloque obligatorio**: proceso generico abierto ("Para cualquier reto de [dominio del rol]") con pasos generales aplicables a cualquier peticion del dominio (ej: 1. Entender el reto, 2. Analizar contexto, 3. Proponer enfoque, 4. Desarrollar, 5. Revisar y ajustar)
- **Bloques siguientes**: workflows especificos de los CUs del blueprint como referencia y ejemplo (ej: "Proceso para DOSIERES:", "Proceso para EMAILS:")
- Cada paso es una accion concreta (clasificar, analizar, proponer, redactar, ajustar, revisar)
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
**OBLIGATORIO**: incluir archivos .md de metodologias/frameworks de reconocido prestigio mundial para el rol profesional del agente. Estos archivos se generan con contenido practico (explicacion, cuando usar, pasos, ejemplos) y se ubican junto al .md del custom agent en `knowledge/`. Ejemplos segun dominio: PESTEL, DAFO, SCQA, STP, BLUF, AIDA, PESO, AARRR, piramide invertida, etc.
- Archivo 1: [nombre] — [que contiene, por que]

## Capabilities Configuration
- Web search: [on/off + por que]
- Code interpreter: [on/off + por que]
- Image generation: [on/off + por que]
- Canvas: [on/off + por que]

## Prompt Starters
1. "[mapeado a CU-XX]"
2. "[mapeado a CU-XX]"
3. "[mapeado a CU-XX]"
4. "[mapeado a CU-XX]"
5. "[prompt abierto del rol — ej: Ayudame a diseñar una estrategia de...]"
6. "[prompt abierto del rol — ej: Necesito tu opinion experta sobre...]"

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
