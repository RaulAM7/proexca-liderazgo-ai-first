---
class_id: "P-05"
module_id: "06"
type: practice
title: "Practica: reuniones que producen resultados"
duration_minutes: 25
use_case_ref: "CU-06"
agent_ref: "Time & Meetings Operator PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: reuniones que producen resultados

## Objetivo practico

Rediseñar la reunion semanal del equipo de promocion de PROEXCA: pasar de 90 minutos sin agenda ni decisiones a 45 minutos con estructura, roles y compromisos verificables. Al finalizar tendras plantilla de agenda, reglas de reunion, plantilla de seguimiento y un plan de prueba para la primera semana.

---

## Supuesto

El equipo de Promocion de PROEXCA (Director + 8 tecnicos) tiene una reunion semanal cada lunes a las 9:00. Situacion actual:

- Dura 90 minutos (programada para 60).
- No hay agenda previa. El Director pregunta "como vamos" y cada persona cuenta lo suyo.
- 3-4 asistentes no saben por que estan ahi (su trabajo no se discute esa semana).
- Se mezclan temas operativos ("hay que reservar el hotel de la mision") con temas estrategicos ("deberiamos replantearnos Africa Occidental").
- Las decisiones no se registran. La semana siguiente se repiten las mismas conversaciones.
- Dos tecnicos han comentado informalmente que "la reunion de los lunes es una perdida de tiempo".

El Director quiere rediseñar la reunion para que dure 45 minutos maximo, produzca decisiones documentadas y solo asistan quienes necesiten estar.

---

## Preparacion

Antes de empezar, ten a mano:

1. Lista de los 9 asistentes actuales y su rol (Director, 3 Tecnicos Senior, 5 Tecnicos).
2. Tipos de temas que se tratan habitualmente (operativo, estrategico, informativo).
3. Objetivo de la reunion: tomar decisiones semanales sobre las 3 iniciativas prioritarias.
4. Restriccion: 45 minutos maximo, lunes 9:00.

---

## Walkthrough paso a paso

### Paso 1 — Diagnosticar los problemas actuales

Prompt sugerido:

```
Soy Director de un equipo de 8 tecnicos en PROEXCA. Nuestra reunion semanal tiene estos problemas:
- Programada 60 min, dura 90
- Sin agenda previa
- Formato "ronda de mesa" donde cada uno cuenta lo suyo
- 3-4 asistentes sin tema relevante esa semana
- Se mezclan temas operativos con estrategicos
- Decisiones no registradas, temas repetidos semana tras semana
- Percepcion del equipo: "perdida de tiempo"

Diagnostica los problemas raiz (no los sintomas). Para cada problema raiz, indica que principio de gestion de reuniones se esta violando y cual seria la correccion.
```

**Lo que debes ver:** Diagnostico con 4-6 problemas raiz diferenciados de los sintomas. Ejemplo: el sintoma es "dura 90 min" pero el problema raiz es "no hay time-box por tema ni mecanismo de corte". Otro: el sintoma es "se repiten temas" pero el problema raiz es "no hay registro de decisiones ni owner de seguimiento". Si el agente lista los mismos sintomas que le diste, pide: "Esos son los sintomas. Cuales son las causas estructurales?"

---

### Paso 2 — Definir reglas de la nueva reunion

Prompt sugerido:

```
Disenia las reglas para la nueva reunion semanal con estas restricciones:
- Maximo 45 minutos
- Lunes 9:00
- Equipo de 9 personas (Director + 8 tecnicos)
- Objetivo: revisar avance de las 3 iniciativas prioritarias, tomar decisiones pendientes, asignar acciones

Define:
1. Quien debe asistir siempre y quien solo cuando tiene tema (criterio claro)
2. Roles fijos: facilitador, timekeeper, secretario de decisiones
3. Reglas de funcionamiento (maximo 5 reglas, formuladas como mandamientos cortos)
4. Que temas NO se tratan en esta reunion (y donde se tratan)
5. Politica de "no hay agenda no hay reunion"
```

**Lo que debes ver:** Asistencia segmentada: nucleo fijo (Director + 3 Tecnicos Senior) y asistencia por invitacion (los 5 Tecnicos solo cuando su iniciativa esta en agenda). Roles rotativos excepto facilitador (siempre el Director las primeras 4 semanas). Reglas tipo: "Sin agenda enviada el viernes a las 14:00, la reunion se cancela", "Cada tema tiene owner y time-box de 10 minutos", "Toda decision queda registrada con responsable y fecha limite". Los temas estrategicos se derivan a una reunion mensual separada.

---

### Paso 3 — Generar plantilla de agenda con roles

Prompt sugerido:

```
Genera una plantilla de agenda para la reunion semanal de 45 minutos con esta estructura:

Bloque 1 — Check-in rapido (X min): formato, quien habla, que dice
Bloque 2 — Revision de compromisos anteriores (X min): como se revisa, que pasa si no se cumplio
Bloque 3 — Decisiones pendientes (X min): como se presenta cada decision, como se vota/decide
Bloque 4 — Acciones nuevas (X min): formato de asignacion
Bloque 5 — Cierre (X min): resumen de decisiones y proximos pasos

Para cada bloque indica: duracion exacta, quien lidera, formato de participacion (ronda, solo owner, popcorn), y senal de que el bloque esta terminado.

La plantilla debe poder copiarse directamente a un documento de Google Docs o Notion.
```

**Lo que debes ver:** Agenda con tiempos que sumen 45 minutos exactos. Ejemplo: Check-in 5 min (cada persona 30 segundos: "mi prioridad esta semana es X, necesito ayuda con Y"), Compromisos 10 min (solo se revisan los que estaban en el acta anterior, semaforo verde/amarillo/rojo), Decisiones 20 min (maximo 2-3 decisiones, cada una con owner que presenta en 3 min + 3 min debate + 1 min decision), Acciones 5 min, Cierre 5 min. Si los tiempos no cuadran, pide ajuste.

---

### Paso 4 — Producir plantilla de seguimiento con compromisos

Prompt sugerido:

```
Genera una plantilla de acta/seguimiento para usar despues de cada reunion. Debe incluir:

1. Fecha y asistentes
2. Decisiones tomadas (formato: Decision | Owner | Fecha limite | Estado)
3. Acciones asignadas (formato: Accion | Responsable | Plazo | Dependencia)
4. Temas aparcados para proxima reunion o reunion estrategica mensual
5. Proxima reunion: fecha, agenda preliminar

Requisitos:
- Completarla debe tomar maximo 5 minutos
- El secretario la envia antes de las 10:00 del mismo lunes
- Formato tabla simple (Google Sheets o Notion)

Genera la plantilla lista para copiar.
```

**Lo que debes ver:** Plantilla minimalista con tablas claras. La columna "Estado" debe tener opciones predefinidas: Pendiente / En curso / Completado / Bloqueado. La seccion de "temas aparcados" es critica — sin ella, los temas estrategicos vuelven a colarse en la reunion operativa. El envio antes de las 10:00 es clave: si no se envia rapido, no se envia nunca.

---

### Paso 5 — Diseñar la prueba de una semana

Prompt sugerido:

```
Disenia un plan para probar la nueva reunion durante 1 semana (un unico lunes). Incluye:

Antes de la reunion:
- Que hace el Director el viernes anterior (enviar agenda, asignar roles)
- Que comunicacion previa al equipo (como presentar el cambio sin que parezca imposicion)

Durante la reunion:
- Script de apertura del Director (frase literal para explicar el nuevo formato)
- Que hacer si alguien se sale del tema (frase de redireccion)
- Que hacer si se pasa el time-box (frase de corte)
- Que hacer si alguien dice "esto no se puede resolver en 10 minutos"

Despues de la reunion:
- Encuesta de 3 preguntas al equipo (literal)
- Que medir para decidir si el formato funciona
- Ajustes posibles para la semana 2
```

**Lo que debes ver:** Comunicacion previa honesta: "Vamos a probar un formato nuevo durante 4 semanas. Si no funciona, lo ajustamos. Pero le damos una oportunidad real." Script de apertura: "Hoy probamos algo nuevo. La reunion dura 45 minutos. Vamos a seguir esta agenda. Os pido que confieis en el proceso esta primera vez." Frases de redireccion: "Ese tema es importante. Lo anoto en temas aparcados y lo tratamos el jueves en bilateral." Las 3 preguntas de encuesta: "La reunion fue util para tu trabajo? (Si/No)", "Sobro o falto algo? (texto libre)", "Seguimos con este formato la proxima semana? (Si/No/Con ajustes)".

---

## Ajuste fino

- Si la agenda suma mas de 45 minutos, pide: "Recorta. Que bloque puede perder 5 minutos sin perder valor?"
- Si las reglas son mas de 5, pide: "Reduce a 5. Cuales son las innegociables?"
- Si el plan de prueba no incluye que hacer cuando alguien resiste el cambio, anade: "Que hago si un Tecnico Senior dice en la reunion 'esto es demasiado rigido, antes funcionabamos bien'? Dame la respuesta literal."

---

## Resultado esperado

Al finalizar dispondras de:

1. Diagnostico de problemas raiz de la reunion actual.
2. Reglas de la nueva reunion con criterios de asistencia y roles.
3. Plantilla de agenda de 45 minutos lista para copiar.
4. Plantilla de seguimiento/acta de 5 minutos lista para usar.
5. Plan de prueba completo para el proximo lunes.

Tiempo total estimado: 25 minutos.

---

## Errores comunes

1. **Diseñar la reunion perfecta sin probarla.** No pierdas 2 semanas perfeccionando la plantilla. Prueba el lunes, ajusta el martes, repite. La iteracion rapida gana al diseño perfecto.
2. **No asignar roles.** Si nadie es timekeeper, nadie controla el tiempo. Si nadie es secretario, no hay acta. Los roles no son burocracia — son infraestructura.
3. **Permitir "un minutito mas".** Cada excepcion al time-box entrena al equipo en que los limites no son reales. Las primeras 4 semanas, cortar a tiempo es mas importante que terminar el tema.
4. **No enviar agenda previa.** Si la agenda llega el lunes a las 8:55, nadie la ha leido. Viernes a las 14:00 es el limite. Sin agenda, la reunion se cancela. Esta regla debe cumplirse la primera semana o pierde credibilidad.
5. **Confundir reunion operativa con estrategica.** "Deberiamos replantearnos Africa Occidental" no cabe en 45 minutos operativos. Crear una reunion estrategica mensual de 90 minutos es la solucion, no estirar la semanal.
