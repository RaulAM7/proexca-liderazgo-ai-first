# SPEC: module-blueprint-builder

## Outcome

Una skill que permite al usuario construir interactivamente un **blueprint completo** de cualquier modulo del programa "Liderazgo Inteligente" (PROEXCA), siguiendo la estructura universal de 7 partes definida en el template abstracto del metodo DIRECT.

El blueprint es el **artefacto central** del pipeline de produccion de modulos: alimenta directamente a `custom-gpt-builder`, `class-redactor-maquetador` y `modulo-narrativa-para-notebooklm`.

## Scope

- Modulos 00 a 06 del programa (los 6 modulos actuales)
- Extraccion de use cases, agentes y estructura desde `00_inbox/02_Contents/`
- Enriquecimiento con offer design (`00_inbox/00_Offer_Design/`) y context files (`02_context/`)
- Flujo iterativo: proponer → preguntar → refinar → congelar

## No-scope

- No escribe contenido de clases (eso es `class-redactor-maquetador`)
- No construye agentes/GPTs (eso es `custom-gpt-builder`)
- No produce narrativas multimedia (eso es `modulo-narrativa-para-notebooklm`)
- No genera material visual (infografias, presentaciones)

## Enfoque

### Loop interactivo Propose-Ask-Refine-Freeze

1. **SCAN**: Leer carpeta del modulo en inbox + offer design + blueprint template + context files
2. **EXTRACT**: Identificar use cases desde nombres de archivos (incluso vacios), agentes desde `C_Custom_Agents/`, narrativa si existe
3. **PROPOSE**: Generar draft con las 7 secciones, marcando `[UNKNOWN — necesita input]` donde falte informacion
4. **ASK**: Presentar draft al usuario con preguntas dirigidas (max 5 por ronda)
5. **REFINE**: Actualizar blueprint segun feedback
6. **FREEZE**: Cuando el usuario aprueba, cambiar status a `frozen` y guardar versionado

### Adaptacion por tipo de modulo

- **Modulos 00 y 01** (Domina Lo Esencial 1 y 2): Blueprint reducido. Son modulos fundacionales que no siguen el template DIRECT-verb completo. Sin infografia de retos ni tabla de 6-8 use cases.
- **Modulos 02+**: Blueprint completo con las 7 secciones del template abstracto.

## Decisiones de diseno

- Los **nombres de archivos** en inbox son señal primaria de use cases (aunque los archivos esten vacios, sus nombres codifican el tema)
- Los blueprints se **versionan**: `blueprint_v1.md`, `blueprint_v2.md`. Solo la version mas reciente es consumida por skills downstream
- Status `draft` vs `frozen`: skills downstream RECHAZAN blueprints en draft
- La skill bundlea `references/` con el schema completo del blueprint y un registro de modulos
