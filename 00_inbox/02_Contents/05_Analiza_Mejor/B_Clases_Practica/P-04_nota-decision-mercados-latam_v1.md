---
class_id: "P-04"
module_id: "05"
type: practice
title: "Practica: nota de decision — priorizar mercados LATAM"
duration_minutes: 30
use_case_ref: "CU-05"
agent_ref: "Analista Estrategico PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: nota de decision — priorizar mercados LATAM

## Objetivo practico
Al terminar, tendras una nota de decision completa con analisis comparativo de 4 mercados LATAM y una recomendacion estructurada, lista para presentar al comite.

## Supuesto (escenario realista)

PROEXCA tiene presupuesto para organizar 2 misiones comerciales a America Latina en 2027. Las opciones sobre la mesa son Mexico, Colombia, Chile y Peru. Cada mercado tiene sus ventajas y riesgos para las empresas canarias.

El comite de direccion necesita una nota de decision que compare los 4 mercados con criterios claros y proponga los 2 mas adecuados. No quieren una opinion — quieren un analisis estructurado que justifique la eleccion.

Hasta ahora, este tipo de comparaciones se hacian en conversaciones informales. Esta vez quieres un documento profesional que registre el analisis y la recomendacion.

## Preparacion
Antes de empezar, asegurate de tener:
- Las opciones a comparar (Mexico, Colombia, Chile, Peru)
- Los criterios de decision (o disposicion a definirlos con el agente)
- El contexto (presupuesto para 2 misiones, sectores de interes de las empresas canarias)
- Acceso al agente **Analista Estrategico PROEXCA**

## Walkthrough paso a paso

### Paso 1: Define las opciones y los criterios
Prompt sugerido:
> "Necesito una nota de decision para el comite de PROEXCA. Decision: elegir 2 mercados LATAM para misiones comerciales en 2027. Opciones: Mexico, Colombia, Chile, Peru. Criterios: (1) tamano de mercado para sectores canarios clave, (2) facilidad de entrada (regulacion, acuerdos), (3) presencia previa de PROEXCA o empresas canarias, (4) conectividad desde Canarias, (5) coste estimado de la mision. Formato: tabla comparativa + analisis + recomendacion."

**Lo que debes ver:** El agente confirma las 4 opciones y los 5 criterios, y propone la estructura de la nota de decision.

### Paso 2: Genera la nota completa
Prompt sugerido:
> "Genera la nota de decision completa. Incluye: (1) contexto (1 parrafo), (2) tabla comparativa de 4 paises x 5 criterios con puntuacion, (3) analisis de cada pais en 1 parrafo, (4) riesgos de cada opcion, (5) recomendacion de los 2 mercados seleccionados con justificacion. Marca [DATO: verificar] donde necesites cifras reales."

**Lo que debes ver:** Nota de 3-4 paginas con tabla comparativa prominente, analisis por pais, y recomendacion clara al final. Puntuaciones en la tabla para facilitar comparacion visual.

### Paso 3: Desafia la recomendacion
Es importante que el analisis sea robusto. Desafia al agente.

Prompt sugerido:
> "Has recomendado [X] y [Y]. ¿Que pasaria si eligieramos [Z] en lugar de [Y]? Dame los 3 argumentos mas fuertes a favor y en contra de ese cambio."

**Lo que debes ver:** Contra-analisis con argumentos a favor y en contra. Esto te da las respuestas listas para cuando el comite pregunte "¿por que no elegimos Peru?".

### Paso 4: Genera el resumen ejecutivo
Prompt sugerido:
> "Genera un resumen ejecutivo de 1/2 pagina para el comite. Conclusion primero: que 2 mercados recomiendas y por que, en 3 lineas. Luego los 3 datos mas relevantes que justifican la eleccion."

**Lo que debes ver:** Resumen ultra-conciso con la recomendacion al inicio y los datos clave que la soportan.

### Paso 5: Prepara las respuestas a objeciones
Prompt sugerido:
> "El comite probablemente preguntara: (1) ¿por que no los 4 mercados? (2) ¿no es Mexico demasiado grande para nosotros? (3) ¿tenemos datos de que hay demanda real? Preparame respuestas breves para cada una."

**Lo que debes ver:** 3 respuestas concisas y fundamentadas, listas para usar en la reunion del comite.

## Ajuste fino
- La tabla comparativa es el corazon de la nota — si los criterios o puntuaciones no convencen, el documento no funciona
- Verifica que la recomendacion se sostiene con los datos de la tabla — no debe haber desconexion
- Si el comite tiene sus propios criterios, ajustalos antes de generar la tabla

## Resultado esperado
Tu nota de decision final deberia tener:
- Resumen ejecutivo (1/2 pagina, conclusion primero)
- Contexto de la decision (1 parrafo)
- Tabla comparativa (4 paises x 5 criterios con puntuacion)
- Analisis por pais (1 parrafo cada uno)
- Riesgos por opcion
- Recomendacion con justificacion
- Respuestas preparadas para objeciones del comite

## Errores comunes
- **Error:** Tabla comparativa sin criterios claros
  **Fix:** Los criterios deben ser especificos y medibles. "Atractivo del mercado" es vago. "Tamano del sector tech en USD" es concreto.

- **Error:** Recomendacion sin justificacion
  **Fix:** Cada recomendacion debe apuntar a los datos de la tabla que la soportan.

- **Error:** No preparar respuestas a objeciones
  **Fix:** El comite siempre pregunta. Si no tienes respuestas, la recomendacion pierde credibilidad.
