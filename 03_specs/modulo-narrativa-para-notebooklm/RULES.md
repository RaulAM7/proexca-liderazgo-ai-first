# RULES: modulo-narrativa-para-notebooklm

## Naturaleza del documento

- La narrativa es **ESTRATEGICA**, no descriptiva — define intencion, no lista contenido
- NO es un resumen del modulo: es un documento que explica POR QUE existe el modulo y QUE transforma
- Calibrar contra la narrativa existente de Domina Lo Esencial: mismo nivel de abstraccion e intencionalidad

## Secciones obligatorias

- La seccion 4 ("Que NO es") es **obligatoria y sustantiva** — sin ella la narrativa pierde su poder de filtro
- La seccion 5 ("Que debe sentir") describe un **estado cognitivo**, no conocimiento. "Puedo trabajar con IA sin depender de nadie" es correcto; "Se 5 herramientas de IA" es incorrecto
- La seccion 7 ("Idea central") debe ser **una unica frase memorable**

## Secciones condicionales

- Secciones 8 y 9 son resumen — apuntan a artefactos, NO los reproducen
- Si GPT packages no estan disponibles: seccion 8 = `[pendiente — ejecutar custom-gpt-builder primero]`
- Si class content no esta disponible: seccion 9 = `[pendiente — ejecutar class-redactor-maquetador primero]`
- Nunca inventar nombres de agentes o clases que no existen

## Metodo DIRECT

- Referenciar DIRECT por nombre
- Explicar como el verbo de este modulo encaja en la secuencia completa
- La narrativa debe hacer sentir que el modulo es una pieza necesaria del sistema, no un curso aislado

## NotebookLM prompts

- Minimo 3, maximo 5 prompts
- Cada prompt debe ser especifico del modulo (no generico "resume este contenido")
- Al menos 1 prompt para audio/podcast generation
- Al menos 1 prompt para summary/study guide
- Los prompts deben referenciar contexto PROEXCA

## Tono y estilo

- Estrategico, intencional, confiado pero no arrogante
- Español
- 150-300 lineas totales
- Sin jerga tecnica innecesaria
- Filosofia base: "No necesitas ver mas IA. Necesitas menos IA, mejor usada."

## Anti-patterns

- Convertir la narrativa en un indice de contenidos ("En este modulo veras: clase 1, clase 2...")
- Secciones genericas que podrian aplicar a cualquier modulo de cualquier programa
- "Que debe sentir" como lista de conocimientos adquiridos
- Prompts NotebookLM genericos ("resume este documento")
- Reproducir contenido de agentes o clases en lugar de resumir y apuntar
