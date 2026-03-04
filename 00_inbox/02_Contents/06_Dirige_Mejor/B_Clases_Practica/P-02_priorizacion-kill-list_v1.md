---
class_id: "P-02"
module_id: "06"
type: practice
title: "Practica: priorizacion de 10 iniciativas a las 3 que importan"
duration_minutes: 25
use_case_ref: "CU-02"
agent_ref: "McKinsey Strategist PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: priorizacion de 10 iniciativas a las 3 que importan

## Objetivo practico

Convertir una cartera de 10 proyectos activos del area de Promocion en una lista priorizada de 3 iniciativas clave, con criterios explicitos, una kill list documentada y un plan semanal ejecutable. Al finalizar sabras que avanza, que espera y que muere.

---

## Supuesto

El area de Promocion de PROEXCA tiene 10 proyectos simultaneos. El equipo de 8 tecnicos esta saturado, los plazos se solapan y todo es "urgente". El Director necesita decidir esta semana que continua y que se detiene.

Los 10 proyectos activos:

1. Mision comercial agroalimentario Alemania (mayo)
2. Mision comercial tecnologia UK (junio)
3. Mision comercial energia renovable Marruecos (julio)
4. Feria Fruit Attraction Madrid (octubre)
5. Feria Fitur — stand Canarias (enero proximo)
6. Campania de marca "Canarias Hub Atlantico"
7. Programa de aceleracion exportadora (12 empresas)
8. Alianza institucional con ICEX para Africa
9. Estudio sectorial audiovisual — mercado europeo
10. Piloto digital de matchmaking B2B online

Presupuesto restante del ejercicio: 220.000 EUR. Capacidad del equipo: 3 proyectos a pleno rendimiento simultaneo.

---

## Preparacion

Antes de empezar, ten a mano:

1. La lista de los 10 proyectos con estado actual (% avance estimado).
2. Presupuesto comprometido en cada proyecto hasta la fecha.
3. Objetivos estrategicos del plan anual de PROEXCA (si los tienes; si no, el agente te ayudara a definirlos).
4. Restriccion de capacidad: maximo 3 proyectos a dedicacion completa.

---

## Walkthrough paso a paso

### Paso 1 — Listar iniciativas con criterios de evaluacion

Prompt sugerido:

```
Soy Director de Promocion en PROEXCA. Tengo 10 proyectos activos simultaneos con un equipo de 8 tecnicos y 220.000 EUR de presupuesto restante. Solo puedo ejecutar 3 a pleno rendimiento.

Los proyectos son:
1. Mision comercial agroalimentario Alemania (mayo) — 40% avanzado, 35K comprometidos
2. Mision comercial tecnologia UK (junio) — 20% avanzado, 15K comprometidos
3. Mision comercial energia renovable Marruecos (julio) — 10% avanzado, 5K comprometidos
4. Feria Fruit Attraction Madrid (octubre) — 15% avanzado, 20K comprometidos
5. Feria Fitur stand Canarias (enero proximo) — 5% avanzado, 10K comprometidos
6. Campania de marca "Canarias Hub Atlantico" — 30% avanzado, 25K comprometidos
7. Programa aceleracion exportadora 12 empresas — 50% avanzado, 40K comprometidos
8. Alianza institucional ICEX para Africa — 25% avanzado, 0K (solo tiempo)
9. Estudio sectorial audiovisual europeo — 60% avanzado, 18K comprometidos
10. Piloto digital matchmaking B2B — 10% avanzado, 8K comprometidos

Proporciona los 5 criterios mas relevantes para priorizar estas iniciativas en el contexto de una agencia de promocion exterior insular. Justifica cada criterio.
```

**Lo que debes ver:** Criterios como: impacto en exportaciones medible, alineamiento con sectores prioritarios, coste de abandono (sunk cost vs. coste futuro), urgencia temporal (fechas inamovibles), efecto multiplicador (una accion que desbloquea otras). Si el agente propone criterios genericos tipo "importancia estrategica", pide que los operacionalice con metricas.

---

### Paso 2 — Matriz Impacto/Esfuerzo

Prompt sugerido:

```
Clasifica los 10 proyectos en una matriz 2x2 de Impacto (alto/bajo) vs. Esfuerzo restante (alto/bajo). Para cada proyecto indica:
- Impacto: numero estimado de empresas beneficiadas y potencial de facturacion export
- Esfuerzo restante: presupuesto pendiente + horas-tecnico estimadas

Presenta el resultado como tabla y como cuadrantes: Quick Wins (alto impacto, bajo esfuerzo), Apuestas estrategicas (alto impacto, alto esfuerzo), Tareas menores (bajo impacto, bajo esfuerzo), Trampas de tiempo (bajo impacto, alto esfuerzo).
```

**Lo que debes ver:** Clasificacion clara. El programa de aceleracion (50% avanzado, 12 empresas) deberia caer en Quick Win o Apuesta estrategica. Marruecos (10% avanzado, sin base) probablemente sea Trampa de tiempo. Si todos caen en el mismo cuadrante, el analisis no es util — pide al agente que fuerce la diferenciacion.

---

### Paso 3 — Identificar Quick Wins y Apuestas estrategicas

Prompt sugerido:

```
De la matriz anterior, selecciona las 3 iniciativas que deben recibir dedicacion completa. Justifica cada seleccion con:
- Por que esta y no otra
- Que perdemos si la retrasamos 3 meses
- Que ganamos si la ejecutamos bien este trimestre

Ademas, identifica 1-2 iniciativas que pueden avanzar en modo minimo (mantenimiento, sin dedicacion completa).
```

**Lo que debes ver:** Seleccion de 3 con justificacion solida. Las fechas inamovibles (ferias con inscripcion cerrada, misiones con vuelos reservados) pesan. El programa de aceleracion al 50% tiene alto coste de abandono (12 empresas ya comprometidas). La campania de marca puede ser modo mantenimiento si no tiene deadline externo.

---

### Paso 4 — Generar la Kill List

Prompt sugerido:

```
Genera la kill list: proyectos que se detienen, congelan o cancelan. Para cada uno indica:
- Decision: CANCELAR / CONGELAR hasta [fecha] / TRANSFERIR a [quien]
- Comunicacion: frase para informar a stakeholders afectados
- Coste hundido que aceptamos perder
- Condicion para reactivar (si aplica)

Se directo. No busques formulas para hacer todo. El objetivo es liberar capacidad real.
```

**Lo que debes ver:** Al menos 4-5 proyectos con decision firme. "Congelar" no es "hacer despacio" — debe tener fecha concreta de revision. La comunicacion a stakeholders debe ser profesional pero honesta: "Hemos decidido concentrar recursos en las 3 iniciativas con mayor retorno inmediato. Este proyecto se reactiva en Q3 si se cumplen las condiciones X." Si el agente intenta salvar todo, insiste: "Solo tengo 3 slots. Elige."

---

### Paso 5 — Plan semanal con top 3

Prompt sugerido:

```
Disenia un plan semanal para las proximas 4 semanas con las 3 iniciativas priorizadas. Para cada semana:
- Hito principal por iniciativa
- Responsable (Director / Tecnico Senior / Tecnico)
- Entregable verificable del viernes
- Reunion de seguimiento: duracion, asistentes, objetivo unico

Formato tabla: Semana | Iniciativa | Hito | Responsable | Entregable viernes
```

**Lo que debes ver:** Tabla con 12 filas (3 iniciativas x 4 semanas). Cada entregable de viernes debe ser verificable: "lista de 20 empresas confirmadas" no "avanzar en captacion". La reunion de seguimiento debe tener objetivo unico, no ser "puesta al dia general".

---

### Paso 6 — Comunicar al equipo

Prompt sugerido:

```
Redacta el mensaje que el Director enviara al equipo de 8 tecnicos comunicando:
1. Las 3 prioridades y por que se eligieron
2. Lo que se congela/cancela y por que
3. Que cambia en su dia a dia a partir del lunes
4. Que espera de cada persona

Tono: honesto, firme, respetuoso. Maximo 400 palabras. No uses eufemismos para decir "esto se para".
```

**Lo que debes ver:** Mensaje que reconoce la sobrecarga, explica la logica de priorizacion sin disculparse, y da instrucciones claras. Debe nombrar las 3 prioridades y asignar equipos. La frase sobre proyectos cancelados debe ser directa: "Hemos decidido detener X e Y" no "vamos a reevaluar la conveniencia de continuar con X e Y".

---

## Ajuste fino

- Si la matriz pone 6 proyectos en "alto impacto", los criterios de impacto no son suficientemente exigentes. Anade: "Define impacto como empresas que facturan exportacion nueva en los proximos 6 meses. No potencial teorico."
- Si la kill list tiene mas de 2 "congelar" y 0 "cancelar", el agente esta evitando la decision. Pide: "Al menos 2 deben ser cancelacion definitiva. Cuales."
- Si el plan semanal no tiene nombres, anade: "Asigna roles genericos pero especificos: no 'el equipo', sino 'Tecnico Senior de agroalimentario'."

---

## Resultado esperado

Al finalizar dispondras de:

1. Criterios de priorizacion explicitos y justificados.
2. Matriz Impacto/Esfuerzo con los 10 proyectos clasificados.
3. Top 3 iniciativas con justificacion de seleccion.
4. Kill list con decisiones, comunicacion y condiciones de reactivacion.
5. Plan semanal de 4 semanas con entregables verificables.
6. Mensaje de comunicacion al equipo listo para enviar.

Tiempo total estimado: 25 minutos.

---

## Errores comunes

1. **No matar nada.** Si la kill list solo congela y no cancela, no has priorizado. Has aplazado. Cancelar es una decision valida y necesaria.
2. **Criterios que no discriminan.** Si todos los proyectos puntuan igual, los criterios son malos. Necesitas criterios que fuercen diferencias.
3. **Confundir urgencia con importancia.** Que una feria sea en octubre no la hace prioritaria si el impacto es bajo. Fecha cercana no es igual a alta prioridad.
4. **Plan semanal sin entregable verificable.** "Trabajar en la mision" no es un entregable. "Lista de 15 empresas confirmadas con datos de contacto" si lo es.
5. **Comunicar con eufemismos.** El equipo prefiere claridad a ambiguedad. "Se para" es mejor que "se replantea el calendario".
