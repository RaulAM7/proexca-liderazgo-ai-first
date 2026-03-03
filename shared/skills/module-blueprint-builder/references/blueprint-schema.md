# Blueprint Schema

Schema completo del output de module-blueprint-builder. Usa este documento como referencia al generar o validar blueprints.

## YAML Frontmatter (obligatorio)

```yaml
---
module_id: "04"
module_name: "Impacta - Marketing"
direct_verb: "I"
version: 1
status: draft | frozen
date: 2026-03-XX
---
```

| Campo | Tipo | Regla |
|-------|------|-------|
| module_id | string | "00" a "06" |
| module_name | string | Formato: "Verbo - Tema" |
| direct_verb | string | D, I, R, E, C (o "fundacional" para 00/01) |
| version | integer | Siempre incremental, empieza en 1 |
| status | enum | "draft" o "frozen" — downstream rechaza draft |
| date | string | YYYY-MM-DD |

## Secciones (modulos 02+, blueprint completo)

```markdown
# Blueprint: Modulo MM — [Nombre]

## 0. Apertura narrativa
- **Reencuadre**: [que significa este verbo DIRECT para el directivo — 2-3 frases que conecten con su dia a dia]
- **Frustraciones clave**: [2-3 frustraciones reales que viven hoy, concretas, no genericas]
- **Vision AI-first**: [que cambia cuando aplican IA aqui — resultado tangible]

## 1. Mapa de retos del directivo
- Reto 1: [descripcion concreta — que les pasa, por que duele]
- Reto 2: [descripcion]
- Reto 3: [descripcion]
- **Brief infografia**: [concepto visual para la infografia unica del modulo — que muestra, como se organiza]

## 2. Casos de uso clave
- CU-01: [nombre corto] — [descripcion 1 linea: tarea real + dolor que resuelve]
- CU-02: [nombre] — [descripcion]
- ... (6-8 max)

Criterios para incluir un use case:
- Real (el directivo lo hace o deberia hacerlo)
- Recurrente (no es one-off)
- Doloroso en tiempo o calidad

## 3. Sistema IA (agentes)

Preferir 2 agentes por modulo (1 core + 1 sub) que agrupen los CUs por afinidad funcional.
Criterio de agrupacion: los CUs dentro de un agente comparten naturaleza del output, perfil
de interlocutor, metodologia de trabajo o frecuencia de uso.

### Agente principal
- **Nombre**: [nombre descriptivo, incluye "PROEXCA" si aplica]
- **Rol**: [1 linea — que profesional encarna]
- **Problema mental que resuelve**: [la pregunta interna del directivo que este agente contesta]
- **CUs que cubre**: [lista de CU-XX asignados]
- **Logica de agrupacion**: [por que estos CUs van juntos — 1-2 frases]

### Sub-agente 1
- **Nombre**: [nombre]
- **Rol**: [1 linea]
- **Problema mental que resuelve**: [pregunta interna]
- **CUs que cubre**: [lista de CU-XX asignados]
- **Logica de agrupacion**: [por que estos CUs van juntos]

### Sub-agente 2 (opcional)
- [Solo si hay un tercer cluster funcional claro. Max absoluto: 3 agentes por modulo.]

## 4. Casos practicos guiados
Para cada CU-XX que merezca walkthrough:
- **Clase practica**: [titulo de la clase]
- **Supuesto realista**: [escenario concreto PROEXCA — no generico]
- **Walkthrough resumen**: contexto → input del directivo → uso del agente → output → ajuste fino

No todos los CU necesitan clase practica. Priorizar los mas dolorosos o complejos.

## 5. Toolkit ejecutiva
- **Agentes**: [lista con nombres]
- **Prompts curados**: [lista: nombre del prompt + proposito — no genericos, orientados a tareas reales]
- **Mini-playbooks**: [lista "si pasa X → usa Y" — decisiones rapidas]

## 6. Sintesis operativa
- **Problemas que resuelve este modulo**: [lista concisa]
- **Cuando usar IA aqui**: [situaciones concretas]
- **Que NO hacer**: [errores comunes o usos inadecuados de IA en este dominio]
- **Encaje en DIRECT**: [parrafo — como este modulo conecta con los demas]
```

## Secciones (modulos 00 y 01, blueprint reducido)

Los modulos fundacionales no siguen un verbo DIRECT. Estructura reducida:

```markdown
# Blueprint: Modulo MM — [Nombre]

## 0. Apertura narrativa
[Igual que blueprint completo]

## 1. Contenido fundacional
[Temas que se cubren, organizados por sesion/clase]

## 2. Herramientas base
[Plataformas y herramientas que se introducen]

## 3. Sintesis
[Que sabe hacer el directivo al terminar este modulo]
```

## Contrato con skills downstream

| Skill downstream | Secciones que lee | Que extrae |
|-----------------|-------------------|------------|
| custom-gpt-builder | 3, 2, 5 | Specs de agentes, use cases para prompt starters, toolkit |
| class-redactor-maquetador | 0, 1, 2, 3, 4, 5 | Temas para teoria, walkthroughs para practica |
| modulo-narrativa-para-notebooklm | todo (0-6) | Narrativa completa del modulo |

Todas rechazan blueprints con `status: draft`. Todas leen la version mas reciente (mayor N).
