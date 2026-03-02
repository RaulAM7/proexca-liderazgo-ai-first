# Initial Context Report — 2026-03-02

## What was built

- **BRIEF.md**: Identidad completa del programa, participantes (17 directivos PROEXCA), proveedor (EduKami), instructor (Fer Martín), estructura (20h async + 6h masterclass), 6 módulos, 5 GEMs. Dos campos marcados Unknown (time horizon, success definition).
- **FACTS.md**: 18 hechos verificables con fuente y nivel de confianza, organizados en 6 categorías. Sección de 9 unknowns. Sección de 4 conflictos entre fuentes con resolución.
- **CONSTRAINTS.md**: Presupuesto (11.950€), non-negotiables (método DIRECT™, blueprint, tailoring PROEXCA, GEMs ready-to-use, acceso permanente), tone/brand (ejecutivo, práctico, español, AI-first). Time constraint: not stated.
- **LINKS.md**: 2 URLs encontradas (www.edukami.ai, raul@edukami.ai).
- **GLOSSARY.md**: 9 términos de dominio definidos (DIRECT™, GEM, Toolkit, AI-first, PROEXCA, Blueprint, Tailoring, NotebookLM, Campus EduKami).
- **backlog.md**: 10 tareas candidatas inferidas (contenido de 6 módulos, 5 GEMs, casos prácticos, materiales masterclass, narrativas multimedia).
- **decisions.md**: 7 decisiones inferidas registradas (nº GEMs, participantes, presupuesto, blueprint, numeración módulos, idioma, plataforma GEMs).

## Gaps and unknowns

- **Timeline de entrega**: no se indica en ninguna fuente — bloquea planificación temporal de cualquier spec.
- **Estado contractual**: la Propuesta se presenta como propuesta, no contrato firmado — afecta si el trabajo debe comenzar.
- **Plataforma de despliegue de GEMs**: ¿Google Gems? ¿Custom GPTs? No especificado — bloquea spec de diseño de GEMs.
- **Módulo 02 inexistente**: la numeración salta de 01 a 03 sin explicación — necesita confirmación.
- **Horas asíncronas**: inconsistencia interna en la Propuesta (18h vs 20h) — necesita aclaración.
- **Casos prácticos específicos**: solo "AI, gaming y aeroespacial" mencionados como ejemplo — insuficiente para producir los casos de todos los módulos.
- **Metodología de evaluación**: no se describe cómo se evalúa/certifica a los participantes — bloquea diseño de assessment.
- **Contenido existente**: todas las carpetas de módulos (teoría, práctica, agentes) están vacías — no hay contenido previo sobre el que construir.

## Conflicts found

- **[Diseño Offer] vs [Propuesta]**: Nº de GEMs (6 vs 5). Resuelto: Propuesta es autoritativa → 5 GEMs.
- **[Diseño Offer] vs [Propuesta]**: Nº de participantes (6-10 vs 17). Resuelto: Propuesta es autoritativa → 17.
- **[Diseño Offer] vs [Propuesta]**: Presupuesto (11.600€ vs 11.950€). Resuelto: Propuesta es autoritativa → 11.950€.
- **[Propuesta sección 1] vs [Propuesta sección 5.3]**: Horas asíncronas (20h vs 18h). No resuelto; marcado confianza media.

## Suggested next action

Resolver 3 unknowns críticos antes de escribir el primer spec: (1) plataforma de despliegue de GEMs, (2) confirmación de que el salto en numeración del Módulo 02 es intencional, (3) aclaración de 18h vs 20h. Si no se pueden resolver de inmediato, proceder con spec del Módulo 00 "Domina lo esencial 1", que es el módulo con más material fuente disponible (narrativa de intención ya existe).
