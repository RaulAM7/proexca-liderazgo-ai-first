# Resumen Ejecutivo: 4 Skills para el Pipeline de Produccion de Modulos

**Fecha:** 2026-03-03
**Iteracion:** Diseño de specs (pre-implementacion)

---

## Pipeline

```
                                ┌─> custom-gpt-builder ─────────┐
module-blueprint-builder ──────>│                                ├─> modulo-narrativa-para-notebooklm
                                └─> class-redactor-maquetador ──┘
```

Las 4 skills forman un pipeline donde el **blueprint** es el artefacto central. Skills 2 y 3 corren en paralelo; skill 4 consume los outputs de las 3 anteriores.

---

## Las 4 Skills

### 1. module-blueprint-builder (medium/interactive)

**Que hace:** Construye interactivamente un blueprint completo del modulo (7 secciones DIRECT) escaneando inbox, offer design y context files. Loop: proponer → preguntar → refinar → congelar.

**Input:** Carpeta del modulo en inbox + offer design + blueprint template + context files + input del usuario
**Output:** `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` (status: frozen)

**Dependencias upstream:** Ninguna (entry point del pipeline)
**Dependencias downstream:** Las 3 skills restantes

---

### 2. custom-gpt-builder (medium)

**Que hace:** Genera paquetes Custom GPT/GEM completos con instrucciones INFUSE (6 secciones), knowledge files, capabilities, prompt starters, guardrails y validation checklist.

**Input:** Blueprint frozen + agentes INFUSE existentes (opcional) + GPT Builder methodology + context
**Output:** `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md` (uno por agente)

**Dependencias upstream:** module-blueprint-builder
**Dependencias downstream:** modulo-narrativa-para-notebooklm

---

### 3. class-redactor-maquetador (heavy)

**Que hace:** Produce clases de teoria (T-XX, max 1500 palabras) y practica (P-XX, max 2000 palabras) aplicando una receta diseñada desde cero. Las clases practicas incluyen walkthroughs reproducibles con escenarios PROEXCA reales.

**Input:** Blueprint frozen + GPT packages (recomendado) + context + offer design
**Output:** `04_outputs/clases/MM_slug/{T,P}-XX_titulo_v{N}.md`

**Dependencias upstream:** module-blueprint-builder (+ custom-gpt-builder recomendado)
**Dependencias downstream:** modulo-narrativa-para-notebooklm

**Riesgo principal:** No hay clases previas como referencia. La receta se diseño desde: blueprint template, naming patterns, offer design, DIRECT method, agentes INFUSE, constraints.

---

### 4. modulo-narrativa-para-notebooklm (light)

**Que hace:** Genera un documento narrativo estrategico (150-300 lineas) para NotebookLM. 9 secciones: intencion, capacidad, rol, exclusiones, estado cognitivo, conexiones DIRECT, idea central, resumen agentes, resumen clases + prompts NotebookLM (3-5).

**Input:** Blueprint frozen (obligatorio) + GPT packages (recomendado) + class content (recomendado)
**Output:** `04_outputs/narrativas/MM_slug/narrativa_v{N}.md`

**Dependencias upstream:** Las 3 skills anteriores
**Dependencias downstream:** Ninguna (nodo terminal)

**Degradacion graceful:** Funciona solo con blueprint; secciones 8-9 se marcan [pendiente].

---

## Archivos producidos en esta iteracion

### Specs (28 archivos en 4 directorios)

```
03_specs/module-blueprint-builder/     7 archivos (SPEC, TASKFLOW, RULES, IO, PROMPT, EXAMPLES, QA)
03_specs/custom-gpt-builder/           7 archivos
03_specs/class-redactor-maquetador/    7 archivos
03_specs/modulo-narrativa-para-notebooklm/ 7 archivos
```

### Indices actualizados

```
01_harness/SKILLS_INDEX.md             +4 entradas (12 skills totales)
```

### Output consolidado

```
04_outputs/skills_iteracion_2026-03-03/SUMMARY.md    (este archivo)
```

---

## Contrato de datos entre skills

| Artefacto | Productor | Consumidor(es) | Ruta | Status requerido |
|-----------|-----------|----------------|------|-----------------|
| Blueprint | skill 1 | skills 2, 3, 4 | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | frozen |
| GPT Package | skill 2 | skill 4 | `04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md` | ready |
| Class File | skill 3 | skill 4 | `04_outputs/clases/MM_slug/{T,P}-XX_v{N}.md` | — |
| Narrativa | skill 4 | (terminal) | `04_outputs/narrativas/MM_slug/narrativa_v{N}.md` | — |

---

## Orden de implementacion recomendado

| Fase | Skill | Test con | Razon |
|------|-------|----------|-------|
| 1 | module-blueprint-builder | Modulo 03 | Mas datos disponibles en inbox |
| 2a | custom-gpt-builder | Modulo 03 | Agentes existentes para validar |
| 2b | class-redactor-maquetador | Modulo 03 | Mas contexto para la receta |
| 3 | modulo-narrativa-para-notebooklm | Modulo 00 | Narrativa existente para comparar |

---

## Siguiente paso

**Listo para lanzar skill-creator con `PROMPT_FOR_SKILL_CREATOR.md` de cada skill.**

Empezar por `03_specs/module-blueprint-builder/PROMPT_FOR_SKILL_CREATOR.md` (Fase 1).
