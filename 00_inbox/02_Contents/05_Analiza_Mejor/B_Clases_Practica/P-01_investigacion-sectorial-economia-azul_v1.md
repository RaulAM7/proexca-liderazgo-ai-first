---
class_id: "P-01"
module_id: "05"
type: practice
title: "Practica: investigacion sectorial rapida — economia azul en Europa"
duration_minutes: 30
use_case_ref: "CU-01"
agent_ref: "Research & Insights PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: investigacion sectorial rapida — economia azul en Europa

## Objetivo practico
Al terminar, tendras un briefing sectorial completo del sector de economia azul en Europa, listo para evaluar si merece la pena organizar una mision comercial.

## Supuesto (escenario realista)

El equipo de PROEXCA esta evaluando organizar una mision comercial al sector de economia azul europea en 2027. Canarias tiene empresas con capacidades en acuicultura, energia eolica marina, biotecnologia marina y turismo nautico sostenible.

Antes de comprometer presupuesto, necesitas un briefing sectorial que responda: ¿que tamano tiene este sector en Europa? ¿quienes son los actores clave? ¿que oportunidades reales hay para empresas canarias? ¿que riesgos existen?

El briefing debe ser lo suficientemente solido para presentarlo al comite de direccion y justificar (o descartar) la mision.

## Preparacion
Antes de empezar, asegurate de tener:
- El sector y la region de interes (economia azul + Europa)
- El objetivo del briefing (evaluar mision comercial)
- Las capacidades canarias en el sector (para enfocar oportunidades)
- Acceso al agente **Research & Insights PROEXCA**

## Walkthrough paso a paso

### Paso 1: Briefing GATE al agente
Prompt sugerido:
> "Necesito un briefing sectorial del sector de economia azul en Europa. Objetivo: evaluar si PROEXCA deberia organizar una mision comercial en 2027. Canarias tiene empresas en acuicultura, energia eolica marina, biotecnologia marina y turismo nautico. Profundidad: analisis completo. Enfoque: oportunidades para empresas canarias."

**Lo que debes ver:** El agente confirma el GATE y propone una estructura del briefing (resumen ejecutivo, tamano de mercado, subsectores clave, actores principales, oportunidades, riesgos, recomendaciones).

### Paso 2: Revisa la estructura propuesta
Lee la estructura. Verifica que cubre lo que necesitas para el comite.

Prompt sugerido:
> "La estructura esta bien, pero anade una seccion especifica sobre clusters y polos de economia azul en Europa (donde estan las empresas clave) y otra sobre financiacion europea disponible para este sector."

**Lo que debes ver:** Estructura actualizada con las secciones adicionales.

### Paso 3: Genera el briefing completo
Prompt sugerido:
> "Genera el briefing completo siguiendo esa estructura. Marca [DATO: verificar] donde necesites cifras exactas o datos recientes."

**Lo que debes ver:** Briefing de 5-8 paginas con todas las secciones. Datos generales del sector, actores clave nombrados, oportunidades concretas para Canarias. Algunos datos marcados para verificacion.

### Paso 4: Enfoca las oportunidades para Canarias
Prompt sugerido:
> "La seccion de oportunidades esta demasiado generica. Especifica: para cada subsector (acuicultura, eolica marina, biotech, turismo nautico), que oportunidades concretas hay en Europa y por que una empresa canaria tendria ventaja competitiva."

**Lo que debes ver:** Oportunidades desglosadas por subsector con argumentos concretos de ventaja canaria (posicion geografica, zona franca, conectividad atlantica, condiciones climaticas).

### Paso 5: Genera el resumen ejecutivo
Prompt sugerido:
> "Genera un resumen ejecutivo de 1 pagina que pueda presentarse al comite de direccion. Debe responder: si o no a la mision, por que, y con que enfoque. Conclusion primero."

**Lo que debes ver:** Resumen ejecutivo con conclusion al inicio, 3-5 argumentos clave, y recomendacion concreta (destino, subsector, formato de mision).

## Ajuste fino
- El resumen ejecutivo es lo que el comite leera primero — si no convence en 30 segundos, el resto no importa
- Verifica los `[DATO: verificar]` con fuentes oficiales (Eurostat, Comision Europea, informes sectoriales)
- Si alguna seccion se alargo demasiado, pide condensacion: "Condensa la seccion de actores clave a maximo 1 pagina con tabla"

## Resultado esperado
Tu briefing sectorial final deberia tener:
- Resumen ejecutivo (1 pagina, conclusion primero)
- Tamano y estructura del sector en Europa
- Clusters y polos de economia azul
- Oportunidades desglosadas por subsector canario
- Riesgos y barreras de entrada
- Financiacion europea disponible
- Recomendacion final sobre la mision comercial

## Errores comunes
- **Error:** No especificar el objetivo del briefing ("investigame la economia azul")
  **Fix:** Siempre di para que necesitas la investigacion — evaluar mision, preparar feria, briefing para Presidencia

- **Error:** Aceptar datos sin verificar
  **Fix:** Busca todos los `[DATO: verificar]` y confirmalos con fuentes oficiales antes de presentar

- **Error:** Briefing demasiado largo (>10 paginas)
  **Fix:** Un briefing sectorial para decision debe tener 5-8 paginas. Si es mas, pide condensar.
