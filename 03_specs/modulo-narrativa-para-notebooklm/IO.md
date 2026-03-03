# IO: modulo-narrativa-para-notebooklm

## Inputs

| Input | Ruta | Obligatorio | Notas |
|-------|------|-------------|-------|
| Blueprint frozen | `04_outputs/blueprints/MM_slug/blueprint_v{N}.md` | Si | Fuente principal. Debe tener `status: frozen` |
| GPT packages | `04_outputs/gpt-packages/MM_slug/*.md` | Recomendado | Para seccion 8 (resumen agentes). Sin ellos, seccion 8 = [pendiente] |
| Class content | `04_outputs/clases/MM_slug/*.md` | Recomendado | Para seccion 9 (resumen clases). Sin ellos, seccion 9 = [pendiente] |
| Narrativa ejemplo | `00_inbox/02_Contents/00_Modulo_Domina_Lo_Esencial_1/0_Resumen_Multimedia_Modulo/Narrativa Generacion Multimedia Modulo Domina lo esencial.md` | Si | Referencia de receta y tono |
| Context files | `02_context/{BRIEF,FACTS,CONSTRAINTS}.md` | Si | Metodo DIRECT, identidad PROEXCA |

## Output

| Output | Ruta | Formato |
|--------|------|---------|
| Narrativa del modulo | `04_outputs/narrativas/MM_slug/narrativa_v{N}.md` | Markdown con YAML frontmatter |

## Schema del output

```yaml
---
module_id: "03"
module_name: "Impacta - Comunicacion"
direct_verb: "I"
purpose: "NotebookLM multimedia generation"
blueprint_version: 1
gpt_packages_version: 1    # o "N/A" si no disponible
class_content_version: 1   # o "N/A" si no disponible
version: 1
---
```

```markdown
# Narrativa para generacion multimedia: Modulo MM — [Nombre]

## 1. Contexto general
[Posicionamiento estrategico de este modulo dentro de DIRECT]

## 2. Que es [verbo DIRECT de este modulo]
[Definicion como capacidad, no como herramienta]

## 3. Rol especifico del modulo
[Que instala en el workflow del directivo]

## 4. Que NO es este modulo
[Exclusiones explicitas — esta seccion es OBLIGATORIA y sustantiva]

## 5. Que debe sentir el directivo al terminarlo
[Estado cognitivo/emocional objetivo — no lista de conocimientos]

## 6. Relacion con los siguientes modulos
[Como conecta hacia adelante en DIRECT]

## 7. Idea central que debe quedar grabada
[UNA frase memorable]

## 8. Resumen de agentes y toolkit
[Breve de que agentes existen y que resuelven — desde GPT packages]
[O: "[pendiente — ejecutar custom-gpt-builder primero]"]

## 9. Resumen de clases y casos practicos
[Breve del contenido de clases — desde class content]
[O: "[pendiente — ejecutar class-redactor-maquetador primero]"]

---

## Prompts sugeridos para NotebookLM
1. "[prompt especifico para podcast/audio]"
2. "[prompt especifico para resumen/study guide]"
3. "[prompt especifico para analisis del modulo]"
```

## Contrato pipeline

Este es el **nodo terminal** del pipeline. No tiene consumidores downstream.
Sus inputs vienen de las 3 skills anteriores:
- `module-blueprint-builder` → blueprint (obligatorio)
- `custom-gpt-builder` → GPT packages (recomendado)
- `class-redactor-maquetador` → class content (recomendado)
