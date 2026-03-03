# RULES: module-blueprint-builder

## Estructura

- El blueprint DEBE seguir la estructura de 7 secciones del template abstracto (secciones 0-6) para modulos 02+
- Modulos 00 y 01 usan estructura reducida (sin infografia, sin tabla de 6-8 use cases)
- YAML frontmatter obligatorio: `module_id`, `module_name`, `direct_verb`, `version`, `status`, `date`

## Contenido

- **Nunca inventar use cases**: extraer de fuentes existentes o pedir al usuario
- **Nunca inventar agentes**: derivar de C_Custom_Agents/ existentes, offer design, o confirmacion del usuario
- Marcar todo dato no confirmado como `[UNKNOWN — necesita input]`
- Max 6-8 use cases por modulo (restriccion del template)
- Max 1 agente core + 2 sub-agentes por modulo (principio "menos agentes, mas potentes")
- Todo el contenido en español

## Versionado

- Nunca sobreescribir: siempre incrementar version (v1, v2, v3...)
- Solo la version mas reciente con `status: frozen` es consumida por skills downstream
- No se permite `status: frozen` si quedan markers `[UNKNOWN]`

## Tono

- Estrategico y orientado a accion, no academico
- Alineado con la filosofia: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."
- Cada seccion debe aportar informacion accionable para las skills downstream

## Anti-patterns

- Copiar el template abstracto sin adaptar al modulo concreto
- Inventar use cases plausibles en lugar de marcar [UNKNOWN]
- Producir blueprints con mas de 8 use cases o mas de 3 agentes
- Mezclar contenido de modulos distintos en un blueprint
- Congelar un blueprint con UNKNOWNs pendientes
