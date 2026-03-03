# IO: class-redactor-maquetador

## Inputs

| Input | Ruta | Obligatorio | Notas |
|-------|------|-------------|-------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si | Debe tener `status: frozen` |
| GPT packages | `04_outputs/gpt-packages/MM_slug/*.md` | Recomendado | Nombres y descripciones de agentes para clases practicas. Si no disponible, usar nombres del blueprint |
| Context files | `02_context/{BRIEF,FACTS,CONSTRAINTS,GLOSSARY}.md` | Si | Contexto PROEXCA, restricciones, terminologia |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si | Avatar, escenarios, pain points para supuestos realistas |
| File names existentes | `00_inbox/02_Contents/MM_module/{A_Clases_Teoria,B_Clases_Practica}/` | No | Nombres sugieren titulos de clases planeados |

## Output

| Output | Ruta | Formato |
|--------|------|---------|
| Clases de teoria | `04_outputs/clases/MM_slug/T-XX_titulo_v{N}.md` | Markdown con YAML frontmatter |
| Clases de practica | `04_outputs/clases/MM_slug/P-XX_titulo_v{N}.md` | Markdown con YAML frontmatter |

## Schema: Clase de teoria

```yaml
---
class_id: "T-01"
module_id: "03"
type: theory
title: "Que vamos a aprender en este modulo"
duration_minutes: 15
blueprint_version: 1
version: 1
---
```

```markdown
# [Titulo de la Clase]

## Objetivo de aprendizaje
Al terminar esta clase, seras capaz de [1-2 frases].

## Agenda
1. [tema 1] (X min)
2. [tema 2] (X min)
3. [tema 3] (X min)

## Desarrollo

### [Heading tema 1]
[Contenido: ejecutivo, practico, sin jerga]

### [Heading tema 2]
[Contenido]

### [Heading tema 3]
[Contenido]

## Puntos clave (takeaways)
- [takeaway 1 — accionable]
- [takeaway 2]
- [takeaway 3]

## Conexion con lo que viene
[1-2 frases enlazando con la siguiente clase]
```

## Schema: Clase de practica

```yaml
---
class_id: "P-01"
module_id: "03"
type: practice
title: "Practica: usando el agente para redactar emails directivos"
duration_minutes: 25
use_case_ref: "CU-01"
agent_ref: "Comunicador Ejecutivo PROEXCA"
blueprint_version: 1
version: 1
---
```

```markdown
# [Titulo de la Clase]

## Objetivo practico
[Que va a producir el directivo en esta clase]

## Supuesto (escenario realista)
[2-3 parrafos: contexto PROEXCA realista]

## Preparacion (inputs necesarios)
- [que necesita tener listo]

## Walkthrough paso a paso

### Paso 1: [Accion — verbo imperativo]
[Instrucciones + que escribir/hacer]
**Lo que debes ver:** [resultado esperado]

### Paso 2: [Accion]
[Instrucciones]
**Lo que debes ver:** [resultado esperado]

### Paso 3: [Accion]
...

## Ajuste fino
[Como iterar, que buscar, como mejorar el resultado]

## Resultado esperado
[Descripcion del output final que el directivo deberia tener]

## Errores comunes
- [error 1] → [fix]
- [error 2] → [fix]
- [error 3] → [fix]
```

## Contrato con skills downstream

- `modulo-narrativa-para-notebooklm` lee los archivos de clases para resumirlos en la narrativa (seccion 9)
- Los archivos deben ser autocontenidos (legibles sin otros archivos)
