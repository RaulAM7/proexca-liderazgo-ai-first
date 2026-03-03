---
name: module-blueprint-builder
description: >
  Construye blueprints versionados de modulos del programa PROEXCA "Liderazgo Inteligente"
  desde fuentes en inbox + input interactivo del usuario, siguiendo la estructura de 7 partes
  del metodo DIRECT. Usa esta skill cuando el usuario mencione "blueprint", "crear blueprint",
  "diseñar modulo", "planificar modulo", "estructura del modulo", o pida empezar a trabajar
  en la estructura de un modulo. Tambien cuando el usuario referencia cualquier modulo por nombre
  (Domina lo esencial, Impacta Comunicacion, Impacta Marketing, Analiza Mejor, Dirige Mejor)
  en el contexto de planificarlo o estructurarlo. Asegurate de usar esta skill siempre que el
  usuario quiera definir que contiene un modulo, que agentes tiene, que casos de uso cubre,
  o como encaja en DIRECT.
---

# Module Blueprint Builder

Construye interactivamente el blueprint de cualquier modulo del programa, produciendo el artefacto central que alimenta a las 3 skills downstream del pipeline: `custom-gpt-builder`, `class-redactor-maquetador` y `modulo-narrativa-para-notebooklm`.

## Por que importa el blueprint

El blueprint define la identidad del modulo: que problemas resuelve, que agentes lo soportan, y como se estructura el contenido. Sin un blueprint frozen no se puede avanzar en el pipeline — las skills downstream lo rechazan. Un blueprint bien hecho reduce ambiguedad y retrabajo en todo el pipeline.

## Input esperado

El usuario indica que modulo quiere construir (por nombre o numero). La skill escanea automaticamente las fuentes disponibles:

| Input | Ruta | Obligatorio |
|-------|------|-------------|
| Blueprint template | `00_inbox/01_Content_Structure_and_Design_and_Build_Guidelines/Blueprint abstracta modulo METODO DIRECT.md` | Si |
| Carpeta del modulo | `00_inbox/02_Contents/MM_module_slug/` | Si |
| Offer design | `00_inbox/00_Offer_Design/*.md` | Si |
| BRIEF | `02_context/BRIEF.md` | Si |
| FACTS | `02_context/FACTS.md` | Si |
| CONSTRAINTS | `02_context/CONSTRAINTS.md` | Si |
| GLOSSARY | `02_context/GLOSSARY.md` | No |

Consulta `references/module-registry.md` para identificar el modulo y su ruta inbox.

## Output

Un archivo blueprint en: `04_outputs/blueprints/MM_module-slug/blueprint_v{N}.md`

El schema completo del output esta en `references/blueprint-schema.md`. Leelo antes de generar el draft.

## Procedimiento

### 1. IDENTIFY — Detectar modulo objetivo

Pregunta o detecta del contexto que modulo quiere el usuario. Consulta `references/module-registry.md` para validar ID, nombre, verbo DIRECT y ruta inbox.

### 2. SCAN — Leer fuentes

Lee en este orden:

a. **Carpeta del modulo** (`00_inbox/02_Contents/MM_*/`):
   - Lee TODOS los nombres de archivo en `A_Clases_Teoria/` y `B_Clases_Practica/` — incluso si los archivos estan vacios, los nombres codifican temas y use cases
   - Lee cualquier archivo populated en `C_Custom_Agents/` (definiciones INFUSE de agentes existentes)
   - Lee `0_Resumen_Multimedia_Modulo/` si tiene contenido

b. **Offer design** (`00_inbox/00_Offer_Design/*.md`):
   - Extrae: avatar del directivo, pain points, dream outcome, toolkit esperada, GEMs mencionados para este modulo

c. **Blueprint template** (`00_inbox/01_Content_Structure_.../Blueprint abstracta modulo METODO DIRECT.md`):
   - La estructura universal de 7 partes — tu molde

d. **Context pack** (`02_context/{BRIEF,FACTS,CONSTRAINTS,GLOSSARY}.md`):
   - BRIEF para identidad del proyecto, FACTS para datos verificados, CONSTRAINTS para tono y restricciones

### 3. EXTRACT — Mapear hallazgos

Organiza lo encontrado:
- **Use cases** ← nombres de archivos en teoria/practica + offer design
- **Agentes** ← `C_Custom_Agents/` (si populated) + GEMs del offer design
- **Narrativa** ← `0_Resumen_Multimedia_Modulo/` (si existe)
- **ICP y pain points** ← offer design

### 4. PROPOSE — Generar draft

Genera el draft del blueprint siguiendo el schema de `references/blueprint-schema.md`:

- **Modulos 00 y 01**: blueprint REDUCIDO (son fundacionales, no siguen un verbo DIRECT completo). Sin infografia de retos ni tabla de 6-8 use cases.
- **Modulos 02+**: blueprint COMPLETO con las 7 secciones (0-6).

Rellena todo lo posible desde las fuentes. Marca `[UNKNOWN — necesita input]` donde falte informacion. Nunca inventes use cases ni roles de agentes — es preferible un [UNKNOWN] a una alucinacion.

### 5. ASK — Presentar al usuario

Muestra el draft completo resaltando los markers [UNKNOWN]. Formula max 5 preguntas dirigidas por ronda, enfocadas en resolver los unknowns mas criticos primero (use cases > agentes > detalles de secciones).

### 6. REFINE — Actualizar

Incorpora las respuestas del usuario al blueprint. Si surgen nuevas dudas, repite ASK con nuevas preguntas (max 5 por ronda).

### 7. REPEAT — Iterar hasta satisfaccion

Repite los pasos 5-6 hasta que el usuario este satisfecho y no queden [UNKNOWN]s.

### 8. FREEZE — Congelar y guardar

Cuando el usuario aprueba:
1. Cambia `status: draft` → `status: frozen` en el frontmatter
2. Guarda en `04_outputs/blueprints/MM_module-slug/blueprint_v{N}.md`
3. Si ya existe una version anterior, incrementa N (nunca sobreescribas)

## Reglas

- Max 6-8 use cases por modulo
- Preferir 2 agentes por modulo (1 core + 1 sub) que agrupen los CUs por afinidad funcional. Los agentes deben cubrir clusters naturales de use cases — no asignar 1 agente por CU ni meter todos en uno solo. Criterio de agrupacion: los CUs dentro de un agente comparten naturaleza del output (ej. documentos largos vs piezas cortas), perfil de interlocutor, metodologia de trabajo, o frecuencia de uso. Max absoluto: 1 core + 2 sub-agentes
- Nunca inventar use cases ni agentes — extraer de fuentes o preguntar
- Todo en español
- YAML frontmatter obligatorio: module_id, module_name, direct_verb, version, status, date
- No congelar si quedan [UNKNOWN]s
- Versionado siempre incremental (v1, v2, v3...) — nunca sobreescribir
- Tono estrategico y orientado a accion, no academico
- Filosofia: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."

## Anti-patterns

- Copiar el template abstracto sin adaptar al modulo concreto — cada modulo tiene su identidad
- Inventar use cases que "suenan bien" en lugar de marcar [UNKNOWN] — la honestidad es mas util que la completitud falsa
- Producir blueprints con mas de 8 use cases o mas de 3 agentes — viola las constraints del programa
- Mezclar contenido de modulos distintos — cada blueprint es autonomo
- Congelar un blueprint con [UNKNOWN]s pendientes — las skills downstream no pueden trabajar con ambiguedad
- Generar secciones genericas tipo "en este modulo aprenderemos..." — el directivo no tiene paciencia para relleno
