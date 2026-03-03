---
name: modulo-narrativa-para-notebooklm
description: >
  Genera un documento narrativo estrategico por modulo, diseñado para alimentar
  NotebookLM y producir material multimedia (podcasts, audio overviews, guias de estudio).
  Usa esta skill cuando el usuario mencione "narrativa", "NotebookLM", "multimedia",
  "generar narrativa del modulo", "podcast script", "resumen multimedia", "audio del modulo",
  "generacion multimedia", "intro del modulo", o cuando exista un blueprint frozen y se necesite
  crear el documento fuente para producir podcast o audio educativo. Esta skill es el NODO TERMINAL
  del pipeline de produccion de modulos.
---

# Modulo Narrativa para NotebookLM

Genera un documento narrativo ESTRATEGICO por modulo que captura intencion, sentimiento y posicionamiento — NO es un resumen de contenido. El documento alimenta NotebookLM para producir podcasts, audio overviews y guias de estudio.

## Goal

Producir una narrativa de 150-300 lineas con 9 secciones estrategicas + 3-5 prompts NotebookLM, a partir del blueprint frozen y (opcionalmente) GPT packages y clases del modulo.

## Input esperado

| Input | Ruta | Obligatorio | Notas |
|-------|------|-------------|-------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si | Fuente principal. RECHAZAR si status != frozen |
| GPT packages | `04_outputs/gpt-packages/MM_slug/*.md` | Recomendado | Enriquece seccion 8 |
| Class content | `04_outputs/clases/MM_slug/*.md` | Recomendado | Enriquece seccion 9 |
| Narrativa ejemplo | Ver referencia en references/narrative-recipe.md | Si | Calibrar tono y nivel de abstraccion |
| Context files | `02_context/{BRIEF,FACTS,CONSTRAINTS}.md` | Si | Metodo DIRECT, identidad PROEXCA |

**Degradacion graceful:**

| Nivel | Inputs disponibles | Resultado |
|-------|-------------------|-----------|
| Minimo | Solo blueprint | Secciones 1-7 completas, 8-9 marcadas [pendiente] |
| Parcial | Blueprint + GPT packages | Secciones 1-8 completas, 9 marcada [pendiente] |
| Parcial | Blueprint + clases | Secciones 1-7 + 9 completas, 8 marcada [pendiente] |
| Completo | Blueprint + GPT packages + clases | Las 9 secciones completas |

## Output

Un archivo markdown con YAML frontmatter en `04_outputs/narrativas/MM_slug/narrativa_v{N}.md`.

**Schema frontmatter:**

```yaml
---
module_id: "MM"
module_name: "[Nombre del modulo]"
direct_verb: "[Letra DIRECT]"
purpose: "NotebookLM multimedia generation"
blueprint_version: N
gpt_packages_version: N    # o "N/A" si no disponible
class_content_version: N   # o "N/A" si no disponible
version: 1
---
```

**Schema body:** 9 secciones + prompts NotebookLM (ver `references/narrative-recipe.md` para guia detallada de cada seccion).

## Reglas criticas

### Naturaleza del documento
- La narrativa es ESTRATEGICA, no descriptiva — define intencion, no lista contenido
- NO es un resumen del modulo: explica POR QUE existe y QUE transforma
- Calibrar contra la narrativa existente de "Domina Lo Esencial" (mismo nivel de abstraccion)

### Secciones obligatorias
- Seccion 4 ("Que NO es") es OBLIGATORIA y sustantiva — sin ella la narrativa pierde su poder de filtro
- Seccion 5 ("Que debe sentir") describe un ESTADO COGNITIVO, no conocimiento. Correcto: "Puedo producir un dosier sin depender de nadie." Incorrecto: "Se usar 3 agentes de marketing."
- Seccion 7 ("Idea central") debe ser UNA UNICA FRASE memorable

### Secciones condicionales (8 y 9)
- Resumen y apuntan a artefactos — NO los reproducen
- Si GPT packages no disponibles: seccion 8 = `[pendiente — ejecutar custom-gpt-builder primero]`
- Si class content no disponible: seccion 9 = `[pendiente — ejecutar class-redactor-maquetador primero]`
- NUNCA inventar nombres de agentes o clases que no existen

### Prompts NotebookLM
- Minimo 3, maximo 5 prompts
- Cada prompt ESPECIFICO del modulo (no generico "resume este contenido")
- Al menos 1 para audio/podcast generation
- Al menos 1 para summary/study guide
- Referenciar contexto PROEXCA

### Tono y estilo
- Estrategico, intencional, confiado pero no arrogante
- Español
- 150-300 lineas totales
- Referenciar DIRECT por nombre
- Filosofia base: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."

## Anti-patterns

- Convertir la narrativa en un indice de contenidos ("En este modulo veras: clase 1, clase 2...")
- Secciones genericas que podrian aplicar a cualquier modulo de cualquier programa
- "Que debe sentir" como lista de conocimientos adquiridos
- Prompts NotebookLM genericos ("resume este documento")
- Reproducir contenido de agentes o clases en lugar de resumir y apuntar
- Tono descriptivo o academico en lugar de estrategico e intencional

## Procedimiento

1. **IDENTIFY** → Detectar modulo objetivo (del contexto del usuario o preguntar)
2. **READ** → Cargar blueprint frozen en `04_outputs/blueprints/MM_slug/blueprint_v{N}.md`
   - RECHAZAR si no existe o si `status` != `frozen`
3. **LOAD** → Cargar GPT packages si disponibles: `04_outputs/gpt-packages/MM_slug/*.md`
4. **LOAD** → Cargar class content si disponible: `04_outputs/clases/MM_slug/*.md`
5. **REFERENCE** → Leer narrativa ejemplo:
   `00_inbox/02_Contents/00_Modulo_Domina_Lo_Esencial_1/0_Resumen_Multimedia_Modulo/Narrativa Generacion Multimedia Modulo Domina lo esencial.md`
6. **CONTEXT** → Leer `02_context/{BRIEF,FACTS,CONSTRAINTS}.md` para metodo DIRECT e identidad PROEXCA
7. **SYNTHESIZE** → Aplicar receta de 9 secciones (ver `references/narrative-recipe.md`):
   - Secciones 1-7: siempre generadas desde blueprint + context
   - Seccion 8: desde GPT packages o marcar [pendiente]
   - Seccion 9: desde class content o marcar [pendiente]
8. **PROMPTS** → Generar 3-5 prompts NotebookLM especificos del modulo
9. **PRESENT** → Mostrar narrativa completa al usuario
10. **ITERATE** → Refinar segun feedback
11. **SAVE** → Guardar en `04_outputs/narrativas/MM_slug/narrativa_v{N}.md`
