---
name: emailing-copy
description: >
  Genera copy profesional para emails institucionales tipo PROEXCA / IA360 / EduKami.
  Usa esta skill cuando necesites redactar el contenido de un email de comunicación,
  campaña, bienvenida, seguimiento, lanzamiento o newsletter. Trigger: cuando el usuario
  mencione "email", "mailing", "comunicación", "newsletter", "copy de email", "redactar
  correo", "campaña de email" o pida escribir un mensaje para enviar por correo electrónico.
---

# Emailing Copy

Genera el contenido textual de emails institucionales alineados con el tono y posicionamiento del proyecto.

## Input esperado

El usuario proporciona un briefing con:

- **Público objetivo** (quién recibe el email)
- **Intención del mensaje** (bienvenida, seguimiento, lanzamiento, recordatorio, etc.)
- **Programa/producto** al que se refiere
- **Datos clave** que deben aparecer (fechas, horarios, componentes, nombres)
- **CTA principal** (qué acción debe tomar el destinatario)
- **Contexto adicional** si aplica (urgencia, tono específico, restricciones)

## Output

Un archivo `content.md` dentro de la carpeta de campaña (`06_emailing/campaigns/YYYY-MM-DD_slug/`) con esta estructura:

```markdown
# Metadata
- Subject: [asunto del email]
- Preheader: [texto preview, ≤90 caracteres]
- Variables: {{nombre}}, etc.

# Hero
## [Título principal — H1]
[Subtítulo — 1-2 líneas máximo]

# Sección 1 (card)
## [Título sección]
[Párrafo introductorio]
- Bullet 1
- Bullet 2
- Bullet 3

# Sección 2
## [Título sección]
[Contenido con párrafos cortos y/o bullets]

# CTA Final
## [Título cierre]
[Párrafo de refuerzo]
[Texto botón] → [URL]
```

## Reglas de copy

### Tono
- Ejecutivo, directo, con autoridad — hablas a directivos que toman decisiones
- Práctico y orientado a acción — cada frase debe justificar su existencia
- Sin jerga técnica innecesaria — si usas un término técnico, explícalo en la misma frase
- Confianza sin arrogancia — posiciona con claridad, no con hipérbole
- Filosofía base: "No necesitas ver más IA. Necesitas menos IA, mejor usada."

### Estructura
- Máximo 3 niveles de información: apertura → cuerpo → cierre
- Párrafos de máximo 3 líneas — si necesitas más, divide en bullets
- Bullets accionables: beneficios concretos, no features abstractas
- CTA claro y único por sección — no más de 2 CTAs en todo el email
- Siguientes pasos SIEMPRE separados del bloque "qué incluye/qué es"
- Subject line: ≤60 caracteres, informativo, sin clickbait
- Preheader: complementa el subject, no lo repite

### Formato
- Texto en español
- Sin emojis en el cuerpo del email (permitido en subject line si aporta)
- Negritas solo para conceptos clave (no para énfasis decorativo)
- Links descriptivos (no "haz clic aquí")

## Anti-patterns

- Promesas vagas: "vas a transformar tu forma de trabajar" → mejor: "reducirás el tiempo de preparación de reuniones un 60%"
- Tecnicismos sin contexto: "LLM", "fine-tuning", "RAG" sin explicar
- Párrafos-muro: >3 líneas seguidas sin break visual
- CTA repetido: mismo botón/texto más de 2 veces
- Mezclar "qué incluye" con "qué tienes que hacer" — son bloques separados
- Tono académico: "en este programa aprenderás..." → mejor: "desde hoy tienes acceso a..."
- Superlativos vacíos: "el mejor", "revolucionario", "único en el mercado"

## Contexto del proyecto

Este copy se genera en el marco de programas formativos de IA aplicada para directivos. Referencia principal: proyecto PROEXCA / IA360 — Liderazgo AI-First. El tono debe reflejar posicionamiento institucional, orientación a resultados y respeto por el tiempo del destinatario.

## Procedimiento

1. Lee el briefing del usuario y extrae: público, intención, datos, CTA
2. Consulta `02_context/CONSTRAINTS.md` para validar tono y restricciones
3. Redacta el `content.md` siguiendo la estructura de output
4. Verifica: ¿cada párrafo aporta? ¿los bullets son accionables? ¿el CTA es claro?
5. Guarda en `06_emailing/campaigns/YYYY-MM-DD_slug/content.md`
