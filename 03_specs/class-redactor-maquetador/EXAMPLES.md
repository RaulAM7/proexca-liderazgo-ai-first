# EXAMPLES: class-redactor-maquetador

## Ejemplo 1: Modulo 03 Impacta Comunicacion — set completo de clases

### Input

Blueprint frozen con 5 use cases, 3 agentes. Nombres de archivos en inbox: "4 1...4 2...4 3...4 4...4 5...4 6...4 7...4 8".

### Plan de clases derivado

| ID | Tipo | Titulo | Origen |
|----|------|--------|--------|
| T-01 | Teoria | Que vamos a aprender en este modulo | Blueprint Sec 0 |
| T-02 | Teoria | Teoria de comunicacion ejecutiva: los mejores del mundo | Blueprint Sec 1-2 + file "4 2" |
| T-03 | Teoria | Tu Agente de IA para redactar emails directivos | Blueprint Sec 3 + file "4 3" |
| P-01 | Practica | Practica: usando el agente para redactar emails | Blueprint Sec 4 + file "4 4" |
| T-04 | Teoria | Tu Agente para informes, briefings y memos | Blueprint Sec 3 + file "4 5" |
| P-02 | Practica | Practica: redactando documentos ejecutivos | Blueprint Sec 4 + file "4 6" |
| T-05 | Teoria | Tu Agente para comunicacion institucional | Blueprint Sec 3 + file "4 7" |
| P-03 | Practica | Practica: comunicacion institucional con IA | Blueprint Sec 4 + file "4 8" |

### Output ejemplo: T-03 (extracto)

```yaml
---
class_id: "T-03"
module_id: "03"
type: theory
title: "Tu Agente de IA para redactar emails directivos"
duration_minutes: 15
blueprint_version: 1
version: 1
---
```

```markdown
# Tu Agente de IA para redactar emails directivos

## Objetivo de aprendizaje
Al terminar esta clase, seras capaz de entender como funciona tu agente
de redaccion de emails, que metodologia aplica (BLUF + 3P), y cuando usarlo
en lugar de redactar tu mismo.

## Agenda
1. El problema real: emails directivos que no funcionan (3 min)
2. La metodologia BLUF y la regla de las 3P (5 min)
3. Tu Comunicador Ejecutivo: que hace y como piensa (5 min)
4. Cuando usar el agente y cuando no (2 min)

## Desarrollo

### El problema real
Un directivo envia entre 30 y 80 emails al dia...
[contenido ejecutivo, conectado a pain points reales]

### La metodologia BLUF y las 3P
BLUF significa "Bottom Line Up Front"...
[explicacion practica, no academica]

### Tu Comunicador Ejecutivo
Este agente aplica automaticamente BLUF y 3P...
[descripcion funcional del agente, que problema mental resuelve]

### Cuando usarlo y cuando no
Usa el agente para: emails de solicitud, informes rapidos, seguimientos...
No lo uses para: despidos, conflictos legales, comunicaciones de crisis...

## Puntos clave
- BLUF: la peticion/accion va en la primera linea, el contexto despues
- 3P: Proposito + Persona + Punto resuelven el 90% de emails directivos
- Tu agente pide 3 datos minimos antes de redactar: destinatario, accion, deadline
- Si el email es de alto riesgo, el agente te recomienda llamada o reunion

## Conexion con lo que viene
En la siguiente clase vas a usar el Comunicador Ejecutivo en un caso real:
redactar un email a la gerencia pidiendo aprobacion para un proyecto de
internacionalizacion.
```

### Output ejemplo: P-01 (extracto)

```yaml
---
class_id: "P-01"
module_id: "03"
type: practice
title: "Practica: usando el agente para redactar emails directivos"
duration_minutes: 25
use_case_ref: "CU-01"
agent_ref: "Comunicador Ejecutivo PROEXCA"
blueprint_version: 1
version: 1
---
```

```markdown
# Practica: usando el agente para redactar emails directivos

## Objetivo practico
Vas a redactar un email directivo real usando el Comunicador Ejecutivo,
aplicando BLUF y la regla de las 3P.

## Supuesto (escenario realista)
Eres directivo/a en PROEXCA y necesitas enviar un email al Director General
solicitando aprobacion para participar en una feria de internacionalizacion
en Alemania. El plazo para confirmar la inscripcion es el viernes...
[escenario detallado PROEXCA]

## Preparacion
- Acceso al Comunicador Ejecutivo PROEXCA (GEM/GPT)
- Datos del supuesto: destinatario, feria, fecha limite, presupuesto estimado

## Walkthrough paso a paso

### Paso 1: Abre el Comunicador Ejecutivo y describe tu necesidad
Escribe: "Necesito un email BLUF al Director General solicitando aprobacion
para asistir a la feria Hannover Messe 2026. Deadline de inscripcion: viernes.
Presupuesto estimado: 4.500€."

**Lo que debes ver:** El agente te pedira confirmar destinatario, clasificara
el email como "Solicitar", y propondra 3-6 asuntos fuertes.

### Paso 2: Selecciona el asunto y revisa el borrador BLUF
...
**Lo que debes ver:** Un email con la peticion en la primera linea, contexto
en 3 bullets, y proximos pasos con responsable y fecha.

## Ajuste fino
Revisa el borrador... [guia de iteracion]

## Resultado esperado
Un email de 8-12 lineas con estructura BLUF...

## Errores comunes
- No dar deadline al agente → el email sale sin urgencia → añade siempre la fecha limite
- Pedir "un email formal" sin mas contexto → resultado generico → usa los 3 datos minimos
- Aceptar el primer borrador sin ajustar tono → revisa siempre si el nivel frio/caliente es el adecuado
```

---

## Ejemplo 2: Modulo 05 Analiza Mejor — modulo sparse

### Input

Blueprint frozen con 4 use cases, 1 agente. No hay nombres de archivo en inbox.

### Plan de clases derivado (enteramente del blueprint)

| ID | Tipo | Titulo | Origen |
|----|------|--------|--------|
| T-01 | Teoria | Que vamos a aprender: analizar mejor con IA | Sec 0 |
| T-02 | Teoria | El mapa de retos del directivo en analisis | Sec 1-2 |
| T-03 | Teoria | Tu Analista Estrategico IA | Sec 3 |
| P-01 | Practica | Sintetizar un informe sectorial complejo | Sec 4, CU-01 |
| P-02 | Practica | Analizar escenarios de internacionalizacion | Sec 4, CU-02 |

Clases generadas con la misma receta, escenarios PROEXCA adaptados al dominio de analisis.
