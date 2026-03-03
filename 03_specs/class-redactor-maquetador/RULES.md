# RULES: class-redactor-maquetador

## Extension y formato

- Clases de teoria: max 1500 palabras, nivel de lectura ejecutivo, sin jerga
- Clases de practica: max 2000 palabras, incluyen walkthrough reproducible
- Cada clase DEBE tener YAML frontmatter: class_id, module_id, type, title, duration_minutes, blueprint_version, version
- Naming: T-XX para teoria, P-XX para practica
- Numeracion sigue patron de inbox (ej: prefijo "4" para modulo 03)

## Contenido de teoria

- Objetivo de aprendizaje: 1-2 frases, empezando con "Al terminar esta clase, seras capaz de..."
- Agenda: 3-5 items numerados con minutos estimados (total ~15-20 min lectura)
- Desarrollo: 3-5 subsecciones con heading + contenido escaneable (bullets, bold para vocabulario)
- Cada subseccion abre conectando con la realidad del directivo
- Puntos clave: 3-5 bullets accionables (no abstractos)
- Conexion: 1-2 frases ligando con la siguiente clase
- La PRIMERA clase de teoria de modulos 02+ debe cubrir "Que vamos a aprender" (mapea a Section 0 Apertura)
- Clases que introducen un agente deben explicar el problema que resuelve ANTES de mostrar el agente

## Contenido de practica

- Objetivo practico: 1 frase describiendo que producira el directivo
- Supuesto: 2-3 parrafos de escenario realista PROEXCA (internacionalizacion, ferias, analisis sectorial, comunicacion institucional)
- Preparacion: lista de bullets con lo que necesita antes de empezar
- Walkthrough: 4-8 pasos numerados, cada uno con:
  - Heading de accion (verbo imperativo)
  - Instrucciones (que escribir/hacer, prompts concretos)
  - Bloque "Lo que debes ver" (resultado esperado)
- Ajuste fino: 2-3 parrafos sobre como iterar/mejorar
- Resultado esperado: descripcion del output final
- Errores comunes: 3-5 pares error + fix
- Cada clase practica referencia su agente (nombre exacto del blueprint/GPT package)
- Cada clase practica referencia su use case (CU-XX del blueprint)

## Tono y estilo

- Ejecutivo, practico, directo — cero relleno
- Español
- "Sistema, no curso" — el directivo debe sentir que esta aprendiendo a operar, no a estudiar
- Filosofia: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."
- Sin platitudes: cada seccion con contenido especifico y accionable

## Trazabilidad

- Todo contenido derivado de blueprint + context files
- No inventar hechos sobre PROEXCA (usar `02_context/` para datos reales)
- No inventar metodologias (referenciar las del agente INFUSE correspondiente)

## Anti-patterns

- Parrafos academicos ("En esta leccion aprenderemos que la comunicacion...") → directos al grano
- Walkthroughs vagos ("Introduce tu consulta en el agente") → especificos ("Escribe: 'Necesito un email BLUF para [destinatario] solicitando [accion] antes de [fecha]'")
- Omitir "Lo que debes ver" en pasos de walkthrough
- Escenarios genericos ("una empresa quiere...") → PROEXCA-especificos
- Clases sin conexion entre si (deben formar un hilo narrativo)
