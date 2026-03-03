# SPEC: modulo-narrativa-para-notebooklm

## Outcome

Una skill que genera un **documento narrativo estrategico** por modulo, diseñado para alimentar NotebookLM y producir material multimedia (podcasts, audio overviews, guias de estudio). La narrativa captura intencion, sentimiento y posicionamiento — NO es un resumen de contenido.

## Scope

- Generar una narrativa por modulo basada en el blueprint (obligatorio) + GPT packages y clases (opcionales)
- Aplicar la receta de narrativa inferida del ejemplo existente (Domina Lo Esencial)
- Incluir prompts sugeridos para NotebookLM
- Funcionar con inputs parciales (degradacion graceful)

## No-scope

- No genera el blueprint (eso es `module-blueprint-builder`)
- No construye agentes (eso es `custom-gpt-builder`)
- No escribe clases (eso es `class-redactor-maquetador`)
- No ejecuta NotebookLM ni produce audio/video directamente

## Fuente de la receta

La narrativa existente en `00_inbox/02_Contents/00_Modulo_Domina_Lo_Esencial_1/0_Resumen_Multimedia_Modulo/Narrativa Generacion Multimedia Modulo Domina lo esencial.md` es el unico ejemplo. Tiene:
- ~150 lineas
- 7 secciones estrategicas (contexto, que es, rol, que NO es, que debe sentir, relacion, idea central)
- Tono intencional/estrategico, NO descriptivo
- La seccion "Que NO es" es clave: actua como filtro de expectativas
- La seccion "Que debe sentir" describe un estado cognitivo, no conocimiento

La receta extiende este modelo con 2 secciones nuevas (resumen agentes + resumen clases) para crear un documento mas completo cuando los outputs del pipeline estan disponibles.

## Enfoque

### Degradacion graceful

La skill funciona con diferentes niveles de input:

| Nivel | Inputs disponibles | Resultado |
|-------|-------------------|-----------|
| Minimo | Solo blueprint | Secciones 1-7 completas, 8-9 marcadas `[pendiente]` |
| Parcial | Blueprint + GPT packages | Secciones 1-8 completas, 9 marcada `[pendiente]` |
| Parcial | Blueprint + clases | Secciones 1-7 + 9 completas, 8 marcada `[pendiente]` |
| Completo | Blueprint + GPT packages + clases | Las 9 secciones completas |

### Las 9 secciones

1. Contexto general (posicionamiento estrategico en DIRECT)
2. Que es [verbo] (definicion como capacidad, no como herramienta)
3. Rol especifico del modulo (que instala en el workflow del directivo)
4. Que NO es este modulo (exclusiones explicitas — **obligatorio**)
5. Que debe sentir el directivo al terminarlo (estado cognitivo, no conocimiento)
6. Relacion con los siguientes modulos (conexion en DIRECT)
7. Idea central que debe quedar grabada (una frase)
8. Resumen de agentes y toolkit (desde GPT packages)
9. Resumen de clases y casos practicos (desde class content)

+ Prompts sugeridos para NotebookLM (3-5)

## Decisiones de diseno

- La receta vive en `references/narrative-recipe.md` (bundled)
- La narrativa NO reproduce contenido de agentes o clases — solo resume y apunta a los artefactos
- Los prompts para NotebookLM deben ser especificos del modulo (no genericos)
- Longitud objetivo: 150-300 lineas (consistente con el ejemplo existente + secciones nuevas)
- Este es el nodo terminal del pipeline — no tiene consumidores downstream
