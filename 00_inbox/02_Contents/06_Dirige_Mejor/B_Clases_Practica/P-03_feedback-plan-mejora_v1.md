---
class_id: "P-03"
module_id: "06"
type: practice
title: "Practica: feedback constructivo y plan de mejora"
duration_minutes: 25
use_case_ref: "CU-04"
agent_ref: "Leader Coach PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: feedback constructivo y plan de mejora

## Objetivo practico

Preparar una conversacion de feedback estructurada con un miembro del equipo que tiene buen trato pero resultados deficientes en seguimiento post-mision comercial. Al finalizar tendras un guion de conversacion, un plan de mejora con compromisos concretos y un sistema de seguimiento.

---

## Supuesto

Maria es tecnica de promocion en PROEXCA con 4 anios de experiencia. Tiene excelente relacion con las empresas canarias y es muy valorada en las misiones comerciales por su trato cercano. Sin embargo, en los ultimos 2 trimestres ha incumplido sistematicamente el seguimiento post-mision:

- Mision agroalimentario Alemania (Q3): de 18 empresas participantes, solo 6 recibieron informe de contactos. Las otras 12 no tuvieron seguimiento. Tres empresas se quejaron formalmente.
- Mision tecnologia UK (Q4): los informes de seguimiento se entregaron 45 dias tarde. Dos oportunidades comerciales se perdieron porque los contactos britanicos ya no respondian.
- Compromiso de actualizar CRM tras cada mision: cumplimiento del 30%.

Maria reconoce el problema pero dice que "no le da tiempo" y que "las misiones nuevas siempre tapan las anteriores". El Director necesita una conversacion firme sin destruir la relacion ni la motivacion.

---

## Preparacion

Antes de empezar, ten a mano:

1. Los datos concretos de incumplimiento (fechas, numeros, quejas).
2. El contexto de la relacion (4 anios, buena actitud, valorada por empresas).
3. Lo que necesitas que cambie: seguimiento completo en plazo (15 dias post-mision).
4. Lo que no quieres: que Maria se cierre, se desmotive o lo interprete como ataque personal.

---

## Walkthrough paso a paso

### Paso 1 — Describir la situacion al agente

Prompt sugerido:

```
Soy Director de un area de promocion exterior con 8 tecnicos. Necesito dar feedback a una tecnica con este perfil:

- 4 anios en el equipo, buena actitud, excelente trato con empresas en misiones comerciales
- Problema: incumple sistematicamente el seguimiento post-mision. En los ultimos 2 trimestres:
  - Mision Alemania Q3: solo 6 de 18 empresas recibieron informe de contactos. 3 quejas formales.
  - Mision UK Q4: informes entregados 45 dias tarde. 2 oportunidades comerciales perdidas.
  - Actualizacion CRM: cumplimiento del 30%.
- Su argumento: "no me da tiempo, las misiones nuevas tapan las anteriores"
- Mi objetivo: que cambie el comportamiento sin destruir motivacion ni relacion

Analiza la situacion y recomienda que modelo de feedback es mas adecuado (SBI, CEDAR, COIN u otro). Justifica la eleccion.
```

**Lo que debes ver:** Recomendacion de un modelo concreto con justificacion. Para este caso, SBI (Situacion-Comportamiento-Impacto) o COIN (Contexto-Observacion-Impacto-Next steps) son los mas adecuados porque permiten separar hechos de juicios. Si el agente recomienda un modelo, debe explicar por que ese y no otro para esta situacion especifica.

---

### Paso 2 — Generar el guion de conversacion

Prompt sugerido:

```
Genera un guion detallado para la conversacion de feedback usando el modelo que has recomendado. Incluye:

1. Apertura: como empiezo la conversacion (frase literal)
2. Hechos: como presento los datos sin que suene a acusacion
3. Impacto: como conecto los hechos con consecuencias reales (empresas perdidas, quejas, reputacion PROEXCA)
4. Escucha: que pregunta hago para entender su perspectiva
5. Acuerdo: como llegamos a compromisos concretos
6. Cierre: como termino reforzando confianza

Para cada bloque dame la frase literal que debo decir y una nota sobre el tono. Tambien incluye 2-3 "frases trampa" que debo evitar y por que.
```

**Lo que debes ver:** Guion con frases literales, no genericas. La apertura debe ser directa pero no agresiva: "Maria, quiero hablar contigo sobre el seguimiento de las misiones comerciales. Es un tema importante y quiero que lo resolvamos juntos." Las frases trampa deben incluir ejemplos como "siempre haces..." (generalizacion), "no es tan dificil..." (minimizar), "otros del equipo si cumplen..." (comparacion). Cada trampa con explicacion de por que dania la conversacion.

---

### Paso 3 — Preparar respuestas a objeciones

Prompt sugerido:

```
Maria probablemente respondera con estas objeciones:
1. "No me da tiempo, las misiones nuevas siempre tapan las anteriores"
2. "Nadie me ha ensenado un proceso claro de seguimiento"
3. "Las empresas tampoco responden, no es solo culpa mia"
4. "El CRM es muy complicado y lento"

Para cada objecion, genera:
- Respuesta empatica pero firme (frase literal)
- Pregunta que mueva la conversacion hacia soluciones
- Limite claro: que es negociable y que no
```

**Lo que debes ver:** Respuestas que validan la emocion sin aceptar la excusa. Ejemplo para objecion 1: "Entiendo que la carga es alta. Eso es real. Y precisamente por eso necesitamos un proceso que asegure el seguimiento sin depender solo de tu memoria o tu voluntad. Que necesitarias para que el seguimiento de cada mision este cerrado en 15 dias?" Lo no negociable debe ser claro: el plazo de 15 dias y la cobertura del 100% de empresas.

---

### Paso 4 — Plan de mejora con compromisos y plazos

Prompt sugerido:

```
Genera un plan de mejora para Maria con esta estructura:
- Periodo: 90 dias (3 meses)
- Objetivo: seguimiento completo de todas las empresas participantes en mision comercial en un plazo maximo de 15 dias habiles post-mision
- Metricas: % empresas con informe entregado, dias de demora, actualizacion CRM
- Hitos mensuales con metas progresivas (no exigir 100% desde el dia 1)
- Apoyos que el Director se compromete a dar (herramientas, tiempo protegido, formacion)
- Consecuencia clara si no se cumple a los 90 dias

Formato: documento que ambas partes puedan firmar.
```

**Lo que debes ver:** Plan con metas progresivas realistas. Mes 1: 70% empresas con seguimiento en plazo. Mes 2: 85%. Mes 3: 100%. Los apoyos del Director deben ser concretos: "bloquear 2 horas diarias post-mision para seguimiento, sin reuniones", "sesion de formacion CRM de 2 horas", "plantilla de informe estandarizada". La consecuencia a 90 dias debe ser explicita pero proporcional.

---

### Paso 5 — Definir sistema de seguimiento

Prompt sugerido:

```
Disenia el sistema de seguimiento para este plan de mejora:
- Frecuencia de check-ins entre Director y Maria
- Que se revisa en cada check-in (metricas concretas)
- Formato: presencial, duracion, agenda fija
- Seniales de alerta temprana (que indica que no va bien antes de que sea tarde)
- Seniales de exito (que indica que podemos espaciar el seguimiento)
- Cuando y como se cierra formalmente el plan de mejora

Hazlo practico: que no requiera mas de 15 minutos semanales del Director.
```

**Lo que debes ver:** Check-ins semanales de 15 minutos las primeras 4 semanas, luego quincenales si hay progreso. Agenda fija: revisar numeros (% seguimiento), identificar bloqueos, ajustar. Alerta temprana: si en semana 2 el % no sube del 50%, hay que escalar. Exito: 3 semanas consecutivas al 90%+ permite pasar a seguimiento quincenal. Cierre formal con reconocimiento explicito si se cumplen los 90 dias.

---

## Ajuste fino

- Si el guion es demasiado suave y evita los datos duros, anade: "Incluye los numeros exactos en la conversacion. No digas 'ha habido problemas', di '6 de 18 empresas sin informe y 3 quejas formales'."
- Si el plan de mejora no tiene consecuencias, pide: "Que pasa si a los 90 dias seguimos en 50%. Se explicito."
- Si las respuestas a objeciones son condescendientes, ajusta: "Reescribe con tono de igual a igual, no de jefe a subordinado. Maria es profesional con 4 anios de experiencia."

---

## Resultado esperado

Al finalizar dispondras de:

1. Modelo de feedback seleccionado y justificado.
2. Guion de conversacion con frases literales y frases a evitar.
3. Respuestas preparadas para las 4 objeciones mas probables.
4. Plan de mejora de 90 dias con metas progresivas y apoyos.
5. Sistema de seguimiento semanal de 15 minutos.

Tiempo total estimado: 25 minutos. Todo listo para la conversacion de maniana.

---

## Errores comunes

1. **Dar feedback sin datos.** "Siento que no cumples" no es feedback. "6 de 18 empresas sin informe" si lo es. Sin numeros, la conversacion degenera en opiniones.
2. **Confundir firmeza con agresividad.** Ser firme es decir "el plazo de 15 dias no es negociable". Ser agresivo es decir "esto es inaceptable". La diferencia esta en el juicio de valor.
3. **Plan de mejora sin apoyos del Director.** Si solo pides cambio sin ofrecer nada (tiempo, herramientas, formacion), el plan fracasa. El compromiso es bidireccional.
4. **No definir consecuencias.** Un plan sin consecuencia clara es una sugerencia. Maria necesita saber que pasa si cumple y que pasa si no.
5. **Seguimiento que se diluye.** Las dos primeras semanas haces check-in. La tercera se te olvida. La cuarta ya no lo retomas. Define las fechas en calendario desde el dia 1.
