# CLAUDE.md — proexca-liderazgo-ai-first

> Leer este archivo al inicio de cada sesion.

---

## Project Snapshot

| Campo | Valor |
|-------|-------|
| Proyecto | Liderazgo Inteligente: Certificado de IA aplicada para Directivos PROEXCA |
| Proveedor | EduKami (raul@edukami.ai) |
| Cliente | PROEXCA (Sociedad Canaria de Fomento Economico) |
| Participantes | Hasta 17 directivos |
| Instructor masterclasses | Fer Martin (CTO EduKami) |
| Presupuesto | 11.950 EUR (IGIC no incluido) |
| Metodologia | DIRECT (Domina-Impacta-Resuelve-Entiende-ConectaloTuRol) |
| Plataforma contenido | Campus EduKami |
| Plataforma GEMs | Por confirmar (Custom GPTs o Google Gems) |

---

## Repo Structure

```
proexca-liderazgo-ai-first/
├── 00_inbox/              <- raw material (solo lectura, no editar)
│   ├── 00_Offer_Design/   <- propuesta y diseno de oferta
│   └── 02_Contents/       <- contenidos por modulo (M00-M06)
├── 01_harness/            <- taskflow, rules, skills index, stack
├── 02_context/            <- BRIEF, FACTS, CONSTRAINTS, LINKS, GLOSSARY
├── 03_specs/              <- specs por skill + now/ (spec activa) + decisions.md
├── 04_outputs/            <- entregables finales
│   ├── blueprints/        <- blueprints de modulos
│   ├── clases-copiar/     <- clases listas para subir a EduKami
│   └── gpt-packages/      <- specs de Custom GPTs/GEMs
├── 05_scratch/            <- borradores temporales
├── 06_emailing/           <- emails HTML
│   ├── templates/         <- base_dark.html, base_light.html
│   ├── campaigns/         <- emails por fecha y tipo
│   └── assets/            <- imagenes, CSS
├── shared/
│   ├── skills/            <- skills reutilizables (14 skills)
│   └── agents/            <- agentes delegables (4 agents)
├── runners/
└── toolkit/               <- web maquetada desplegable (Vercel)
```

---

## Taskflow

Ciclo obligatorio: **Seed -> Distill -> Spec -> Ship -> QA**

- Solo una spec activa a la vez en `03_specs/now/001_now.md`
- Si el contexto esta vacio, ejecutar `initial-context-building` primero
- Skills disponibles en `shared/skills/` — leer `01_harness/SKILLS_INDEX.md` para el catalogo

---

## Modulos (6 total)

| ID | Nombre | Bloque DIRECT |
|----|--------|---------------|
| M00 | Domina lo esencial 1 | Domina |
| M01 | Domina lo esencial 2 | Domina |
| M03 | Impacta - Comunicacion | Impacta |
| M04 | Impacta - Marketing | Impacta |
| M05 | Analiza Mejor | Resuelve/Entiende |
| M06 | Dirige Mejor | Conectalo a Tu Rol |

> Nota: M02 no existe en la numeracion. Pendiente de confirmar si es intencional.

Estructura universal de modulo (post-M01): Apertura narrativa (5-7 min) -> Mapa de retos -> Casos de uso (6-8 max) -> Sistema IA (agentes) -> Casos practicos guiados -> Toolkit ejecutiva -> Sintesis operativa (5 min max).

---

## GEMs (5 confirmados)

1. Comunicador Ejecutivo PROEXCA
2. Marketing & Internacionalizacion PROEXCA
3. Analista Estrategico PROEXCA
4. Asistente de Reuniones PROEXCA
5. Research & Insights PROEXCA

Cada GEM debe estar listo para usar desde el dia 1, sin configuracion por parte de los directivos.

---

## Emailing

- Templates base en `06_emailing/templates/` (dark y light)
- Campanas en `06_emailing/campaigns/YYYY-MM-DD_nombre/`
- Cuando pido "hazme un email" o "genera un correo": usar la template base, clonar a nueva campana, adaptar copy
- Cuando pido "quitame X" o "cambiame Y": editar el HTML de la campana directamente, no la template
- Tono de emails: ejecutivo, cercano, profesional. Idioma: espanol.

---

## Toolkit Web

- Directorio: `toolkit/`
- Stack: HTML/CSS/JS vanilla, desplegable en Vercel
- Proposito: catalogo web de agentes IA para los directivos
- Tiene su propio `vercel.json`

---

## Operating Principles

1. **Leer antes de editar.** Siempre leer el archivo antes de modificarlo.
2. **00_inbox es solo lectura.** Nunca editar raw material.
3. **02_context es la fuente de verdad destilada.** Actualizar cuando cambie el scope.
4. **Propuesta > Diseno Offer.** Cuando hay conflicto, la Propuesta es autoritativa.
5. **Decisions en `03_specs/decisions.md`.** Con fecha y status.
6. **Un spec activo a la vez** en `03_specs/now/`.
7. **Entregables a `04_outputs/`.** Formato: `YYYY-MM-DD_topic_v1.md`.
8. **No crear archivos nuevos si editar uno existente logra el objetivo.**

---

## Tone & Brand

- Idioma: espanol
- Tono: ejecutivo, practico, orientado a accion, sin jerga tecnica innecesaria
- Posicionamiento: "AI-first" — IA como metodo primario de trabajo, no complemento
- Filosofia: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."
- El programa debe sentirse como un sistema operativo para el directivo, no como un curso academico

---

## Guardrails

- No generar contenido que contradiga el metodo DIRECT
- No inventar datos sobre PROEXCA que no esten en 02_context/
- No modificar templates base de email sin confirmacion explicita
- No saltar el ciclo Seed->Distill->Spec->Ship->QA para entregables nuevos
- Si hay un unknown en FACTS.md, marcarlo — no inventar la respuesta
