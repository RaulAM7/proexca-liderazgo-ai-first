---
class_id: "P-03"
module_id: "05"
type: practice
title: "Practica: sintesis ejecutiva de un informe complejo"
duration_minutes: 25
use_case_ref: "CU-04"
agent_ref: "Analista Estrategico PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: sintesis ejecutiva de un informe complejo

## Objetivo practico
Al terminar, tendras una sintesis ejecutiva de 2 paginas de un informe complejo, lista para presentar a Presidencia o al comite de direccion.

## Supuesto (escenario realista)

Has recibido un informe de 60 paginas de la Comision Europea sobre politica comercial exterior y oportunidades para regiones ultraperifericas. El informe es denso, tecnico y cubre muchos mas temas de los que te interesan.

Presidencia de PROEXCA te ha pedido una sintesis para la reunion del comite del jueves. Necesitas extraer solo lo relevante para Canarias y la internacionalizacion, y presentarlo en un formato que un directivo pueda leer en 5 minutos.

No tienes tiempo de leer las 60 paginas linea a linea. Necesitas un sistema que lo procese y te devuelva lo esencial.

## Preparacion
Antes de empezar, asegurate de tener:
- El documento a sintetizar (PDF, texto, o pegar el contenido)
- Claro para quien es la sintesis (Presidencia, equipo, etc.)
- Que enfoque necesitas (todo el informe vs solo lo relevante para Canarias)
- Acceso al agente **Analista Estrategico PROEXCA**

## Walkthrough paso a paso

### Paso 1: Comparte el documento y define el objetivo
Prompt sugerido:
> "Te comparto un informe de la Comision Europea sobre politica comercial y regiones ultraperifericas (60 paginas). Necesito una sintesis ejecutiva de 2 paginas para el comite de direccion de PROEXCA. Enfoque: solo lo relevante para Canarias y la internacionalizacion de empresas canarias. Formato: conclusion primero (BLUF), hallazgos clave en bullets, implicaciones para PROEXCA, y acciones recomendadas."

(Pega el contenido del informe o adjunta el PDF)

**Lo que debes ver:** El agente confirma que ha procesado el documento y propone la estructura de la sintesis.

### Paso 2: Genera la sintesis
Prompt sugerido:
> "Genera la sintesis completa. Recuerda: conclusion primero. El directivo de Presidencia debe tener el mensaje clave en las primeras 3 lineas."

**Lo que debes ver:** Sintesis de 2 paginas con: conclusion al inicio (1-2 frases), 5-7 hallazgos clave en bullets, seccion de implicaciones para PROEXCA, y 3-4 acciones recomendadas.

### Paso 3: Verifica completitud
Prompt sugerido:
> "¿He perdido alguna seccion del informe original que sea relevante para Canarias? Lista las secciones del informe que has descartado y por que."

**Lo que debes ver:** Lista de secciones incluidas y descartadas con justificacion. Esto te permite verificar que no se ha omitido algo importante.

### Paso 4: Ajusta para la audiencia
Prompt sugerido:
> "La sintesis es para Presidencia. Revisa el tono: debe ser diplomatico pero directo. Y asegurate de que las acciones recomendadas son realistas para PROEXCA — no teoricas."

**Lo que debes ver:** Sintesis ajustada con tono apropiado para Presidencia y recomendaciones accionables.

## Ajuste fino
- Lee la primera linea de la sintesis — si no te dice la conclusion, hay que reescribirla
- Verifica que los hallazgos clave no repiten el mismo punto con diferentes palabras
- Las acciones recomendadas deben ser concretas: "Contactar con DG TRADE para..." no "Explorar oportunidades"

## Resultado esperado
Tu sintesis ejecutiva final deberia tener:
- Conclusion en las primeras 3 lineas (BLUF)
- 5-7 hallazgos clave en bullets accionables
- Implicaciones especificas para PROEXCA
- 3-4 acciones recomendadas concretas
- Longitud: 2 paginas maximo
- Tono apropiado para Presidencia

## Errores comunes
- **Error:** Sintesis que es un mini-informe (8+ paginas)
  **Fix:** 2 paginas. Si no cabe, elimina lo menos relevante. El comite no leera mas de 2.

- **Error:** Conclusion al final del documento
  **Fix:** BLUF: la conclusion va en las primeras 3 lineas. Siempre.

- **Error:** Hallazgos genericos que no conectan con PROEXCA
  **Fix:** Cada hallazgo debe responder: "¿y esto que significa para la internacionalizacion de empresas canarias?"
