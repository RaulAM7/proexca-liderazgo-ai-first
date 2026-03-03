---
class_id: "P-01"
module_id: "04"
type: practice
title: "Practica: dosier sectorial para mision comercial"
duration_minutes: 25
use_case_ref: "CU-01"
agent_ref: "Marketing Estrategico PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: dosier sectorial para mision comercial

## Objetivo practico
Al terminar, tendras un dosier sectorial completo del sector aeroespacial europeo, listo para entregar a los participantes de una mision comercial de PROEXCA.

## Supuesto (escenario realista)

PROEXCA organiza una mision comercial a Hamburgo en mayo de 2026, enfocada en el sector aeroespacial europeo. Participan 8 empresas canarias con capacidades en fabricacion de componentes, software de simulacion y mantenimiento aeronautico.

Necesitas un dosier de posicionamiento que los participantes lleven como material de referencia: contexto del sector en Europa, oportunidades para empresas canarias, datos clave de mercado y recomendaciones para los contactos en destino.

El dosier debe tener tono institucional PROEXCA, entre 8 y 12 paginas, y estar listo en 48 horas.

## Preparacion
Antes de empezar, asegurate de tener:
- El contexto de la mision (destino, fechas, sector, empresas participantes)
- Datos basicos del sector aeroespacial europeo (o disposicion a buscarlos/verificarlos)
- Acceso al agente **Marketing Estrategico PROEXCA**

## Walkthrough paso a paso

### Paso 1: Abre el agente y proporciona el briefing GATE
Inicia una conversacion con Marketing Estrategico PROEXCA y dale los 5 inputs del patron GATE:

Prompt sugerido:
> "Necesito un dosier sectorial del sector aeroespacial europeo para una mision comercial de PROEXCA a Hamburgo en mayo 2026. La audiencia son 8 empresas canarias del sector (componentes, software de simulacion, mantenimiento). Formato: 8-12 paginas, tono institucional PROEXCA."

**Lo que debes ver:** El agente confirma que tiene los inputs y propone una estructura del dosier (portada, resumen ejecutivo, secciones, datos clave, recomendaciones).

### Paso 2: Revisa y ajusta la estructura propuesta
Lee la estructura que propone el agente. Verifica que cubra los puntos que necesitas.

Prompt sugerido:
> "La estructura esta bien, pero anade una seccion especifica sobre oportunidades para pymes canarias y otra sobre empresas/clusters clave en Hamburgo para hacer contacto."

**Lo que debes ver:** Estructura actualizada con las secciones adicionales. El agente no ha empezado a redactar aun — solo la estructura.

### Paso 3: Genera el contenido seccion por seccion
Pide al agente que genere el contenido completo.

Prompt sugerido:
> "Genera el dosier completo siguiendo esa estructura. Donde necesites datos especificos que no tengas, marca [DATO: verificar] para que yo los complete despues."

**Lo que debes ver:** Dosier completo con todas las secciones redactadas. Algunas cifras marcadas como [DATO: verificar]. Tono institucional y profesional.

### Paso 4: Revisa los marcadores [DATO: verificar]
Identifica todos los puntos donde el agente ha marcado datos por verificar. Estos son los unicos puntos que requieren tu intervencion manual.

**Lo que debes ver:** Una lista clara de datos que necesitas completar o verificar con fuentes reales (cifras de comercio, nombres de empresas en destino, etc.).

### Paso 5: Ajusta tono y personaliza
Si alguna seccion suena demasiado generica o el tono no es el adecuado, pide ajustes especificos.

Prompt sugerido:
> "La seccion de oportunidades suena demasiado generica. Hazla mas especifica para empresas canarias: que tipo de componentes aeroespaciales se fabrican en Canarias, que ventaja competitiva tienen (zona franca, conectividad con Africa y America)."

**Lo que debes ver:** Seccion reescrita con enfoque especifico en las capacidades canarias.

### Paso 6: Exporta el resultado final
Copia el dosier final. Rellena los [DATO: verificar] con datos reales. Maqueta si es necesario.

**Lo que debes ver:** Un dosier de 8-12 paginas, con estructura profesional, tono PROEXCA, listo para entregar.

## Ajuste fino
- Revisa primero el resumen ejecutivo — es lo que mas se lee y lo que define la impresion inicial
- Si el agente uso datos genéricos, sustituyelos por datos reales de PROEXCA o de fuentes publicas fiables
- Pide al agente que condense si alguna seccion se alargo demasiado: "Condensa la seccion X a maximo 1 pagina"

## Resultado esperado
Tu dosier final deberia tener:
- Portada con titulo del sector + contexto de la mision
- Resumen ejecutivo (1 pagina)
- 4-6 secciones de contenido sectorial
- Seccion de oportunidades para pymes canarias
- Datos clave y fuentes
- Recomendaciones y contactos en destino

## Errores comunes
- **Error:** Dar un briefing vago ("hazme un dosier del sector aeroespacial")
  **Fix:** Usa el patron GATE completo: sector + destino + audiencia + contexto + formato

- **Error:** No revisar los marcadores [DATO: verificar] antes de entregar
  **Fix:** Haz una busqueda de "[DATO" en el documento y rellena cada uno

- **Error:** Aceptar la primera version sin pedir ajustes
  **Fix:** Siempre haz al menos 1 ronda de revision enfocada en tono + especificidad
