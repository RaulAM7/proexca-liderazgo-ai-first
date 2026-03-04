---
module_id: "06"
module_name: "Dirige Mejor"
direct_verb: "D"
version: 1
status: frozen
date: 2026-03-04
---

# Blueprint: Modulo 06 — Dirige Mejor

## 0. Apertura narrativa

- **Reencuadre**: "Dirigir mejor" no es trabajar mas horas ni tener mas reuniones — es operar como directivo AI-first en los 3 frentes que definen tu impacto: tomar decisiones estrategicas con datos y estructura, liderar personas con claridad y accountability, y proteger tu foco ejecutivo de la trampa de la hiperactividad improductiva. Un directivo de PROEXCA no deberia perder semanas decidiendo donde apostar, ni llegar a los 1:1 sin guion, ni salir de reuniones sin compromisos claros.
- **Frustraciones clave**:
  1. Las decisiones estrategicas se toman "sobre la marcha", sin analisis estructurado de opciones ni trade-offs — y despues se paga el coste de la mala priorizacion.
  2. El equipo esta desalineado: cada persona tira en una direccion distinta porque falta claridad sobre prioridades, y los problemas de performance se arrastran porque nadie tiene un sistema para dar feedback o hacer seguimiento.
  3. Las semanas se llenan de reuniones sin owner, sin agenda y sin follow-up, mientras las prioridades reales no avanzan.
- **Vision AI-first**: Con un sistema de IA aplicada a la direccion, produces un plan estrategico trimestral con opciones y trade-offs en una tarde, preparas 1:1s con feedback estructurado en 10 minutos, y generas tu weekly plan con kill list y bloques de foco en 5 minutos — sin consultoras para la estrategia ni coaches para cada conversacion dificil.

## 1. Mapa de retos del directivo

- **Reto 1: Estrategia sin estructura** — decidir donde apostar (mercados, sectores, iniciativas) se hace por inercia o intuicion, sin un proceso que compare opciones, mida trade-offs y produzca un roadmap accionable.
- **Reto 2: Demasiadas iniciativas, ninguna avanza** — hay 10 proyectos sobre la mesa pero sin priorizacion rigurosa. Todo es "prioritario", nadie mata nada, y la ejecucion se diluye.
- **Reto 3: Equipo desalineado y sin accountability** — falta un sistema de rituales (1:1s, seguimiento, feedback) que mantenga al equipo enfocado, comprometido y en mejora continua.
- **Reto 4: Conversaciones dificiles que se evitan** — dar feedback de bajo rendimiento, corregir comportamientos o gestionar fricciones se pospone porque no hay un guion ni un modelo que lo haga constructivo.
- **Reto 5: Reuniones que consumen pero no producen** — reuniones sin agenda, sin owner, sin compromisos claros, que se repiten cada semana por costumbre y no por necesidad.
- **Brief infografia**: Infografia de tres columnas (Estrategia | Liderazgo | Productividad) con el directivo en el centro. Cada columna muestra el "antes" (caos, inercia, reunion eterna) y el "despues" (plan claro, equipo alineado, semana con foco). Flechas de IA conectando los tres pilares.

## 2. Casos de uso clave

- **CU-01: Diagnostico estrategico y plan trimestral** — necesito decidir donde apostar este trimestre: analizar la situacion (SWOT, VRIO), generar opciones con trade-offs, y producir un plan 30/60/90 con metricas.
- **CU-02: Priorizacion y kill list** — tengo 10 iniciativas y ninguna avanza: aplicar Impact vs Effort, identificar quick wins y apuestas, y generar una kill list de lo que hay que dejar de hacer.
- **CU-03: Alineamiento de equipo** — mi equipo tira en direcciones distintas: diagnosticar desalineacion (7S), construir un mensaje de proposito (Golden Circle), y definir rituales de alineamiento.
- **CU-04: Feedback y plan de mejora** — hay baja performance o friccion en el equipo: elegir el modelo de feedback adecuado (SBI, CEDAR o COIN segun la situacion), preparar la conversacion, y definir un plan de mejora con compromisos.
- **CU-05: Desarrollo de talento** — quiero desarrollar a una persona del equipo: preparar 1:1 con coaching GROW, establecer compromisos de desarrollo, y hacer seguimiento estructurado.
- **CU-06: Reuniones eficaces** — las reuniones son eternas e improductivas: definir reglas, generar agendas con owner y tiempo, y producir follow-ups con compromisos claros.
- **CU-07: Dashboard y cadencia de accountability** — la ejecucion es inconsistente: montar un dashboard simple de seguimiento, definir una cadencia de accountability (semanal/mensual), y preparar las revisiones.

## 3. Sistema IA (agentes)

### Agente principal
- **Nombre**: McKinsey Strategist PROEXCA
- **Rol**: Director de Estrategia senior con experiencia en diagnostico organizacional, priorizacion estrategica y planificacion ejecutiva
- **Problema mental que resuelve**: "Necesito tomar una decision estrategica importante y no tengo un proceso estructurado para analizar opciones, medir trade-offs y producir un plan accionable."
- **CUs que cubre**: CU-01 (diagnostico y plan trimestral), CU-02 (priorizacion y kill list), CU-03 (alineamiento de equipo)
- **Logica de agrupacion**: Estos 3 use cases comparten la misma naturaleza — analisis estrategico y toma de decisiones a nivel organizacional. Requieren frameworks analiticos (SWOT, VRIO, 7S, Impact/Effort), producen artefactos de direccion (planes, roadmaps, matrices de priorizacion, mensajes de alineamiento), y su interlocutor es el directivo en su rol de estratega. El flujo es: situacion actual → diagnostico → opciones → decision → plan.

### Sub-agente 1
- **Nombre**: Leader Coach PROEXCA
- **Rol**: VP de Personas y Executive Coach senior con experiencia en desarrollo de equipos, feedback ejecutivo y coaching de alto rendimiento
- **Problema mental que resuelve**: "Tengo que gestionar personas — dar feedback, desarrollar talento, hacer seguimiento — y no tengo un sistema que me ayude a hacerlo con consistencia y calidad."
- **CUs que cubre**: CU-04 (feedback y plan de mejora), CU-05 (desarrollo de talento), CU-07 (dashboard y accountability)
- **Logica de agrupacion**: Estos 3 use cases comparten la misma naturaleza — gestion y desarrollo de personas. Trabajan con la dimension humana del liderazgo: conversaciones dificiles, coaching individual, y seguimiento de compromisos. Requieren frameworks de personas (SBI/CEDAR/COIN, GROW, 1:1 operating system) y producen artefactos de liderazgo (scripts de feedback, planes de desarrollo, dashboards de seguimiento). El flujo es: situacion de la persona → diagnostico → intervencion → compromisos → seguimiento.

### Sub-agente 2 (mini)
- **Nombre**: Time & Meetings Operator PROEXCA
- **Rol**: Chief of Staff / especialista en productividad ejecutiva y gestion de reuniones
- **Problema mental que resuelve**: "Mis semanas se llenan de reuniones y tareas reactivas, y necesito un sistema minimo para proteger mi foco y hacer que las reuniones produzcan resultados."
- **CUs que cubre**: CU-02 (priorizacion — componente de kill list y weekly plan), CU-06 (reuniones eficaces)
- **Logica de agrupacion**: Estos use cases comparten la dimension de productividad ejecutiva — gestion del tiempo y de las reuniones. Son operativos, de alta frecuencia (semanal) y de scope individual (el directivo y su agenda). Requieren frameworks de productividad (Eisenhower, Kanban personal, 80/20, SMART) y producen artefactos de ejecucion (weekly plans, agendas, follow-ups). Este agente es deliberadamente pequeño — la productividad es un mini-pilar, no el foco del modulo.

## 4. Casos practicos guiados

- **Clase practica CU-01**: "Diagnostico estrategico: donde apostar el proximo trimestre"
  - Supuesto realista: PROEXCA debe decidir si reforzar la presencia en mercados europeos consolidados (Alemania, Reino Unido) o abrir nuevos mercados en Africa Occidental. Hay presupuesto para una estrategia, no para ambas. El directivo necesita un analisis estructurado para presentar al Consejo.
  - Walkthrough: definir la decision + contexto → SWOT del escenario → analisis VRIO de capacidades → opciones con trade-offs (2o orden) → plan 30/60/90 con metricas → documento listo para Consejo.

- **Clase practica CU-02**: "Priorizacion: de 10 iniciativas a las 3 que importan"
  - Supuesto realista: El area de promocion exterior tiene 10 proyectos activos (3 misiones comerciales, 2 ferias, campana de marca, programa de aceleracion, alianza institucional, estudio sectorial, piloto digital). Todo es "urgente". El directivo necesita decidir que avanza, que espera y que muere.
  - Walkthrough: listar iniciativas + criterios → matriz Impact vs Effort → identificar quick wins + apuestas estrategicas → generar kill list → weekly plan con las 3 prioridades → comunicar decisiones al equipo.

- **Clase practica CU-04**: "Feedback constructivo: gestionar bajo rendimiento"
  - Supuesto realista: Un miembro del equipo lleva dos trimestres sin cumplir compromisos de seguimiento con empresas despues de misiones comerciales. La relacion es buena pero el resultado no. El directivo necesita preparar una conversacion de feedback que sea firme pero constructiva.
  - Walkthrough: describir situacion y objetivo → elegir modelo (SBI vs CEDAR vs COIN — el agente recomienda segun contexto) → generar script de conversacion → preparar plan de mejora con compromisos y plazos → definir seguimiento.

- **Clase practica CU-05**: "Desarrollo de talento: coaching con GROW"
  - Supuesto realista: Una persona del equipo tiene alto potencial y quiere asumir mas responsabilidad en la coordinacion de misiones comerciales. El directivo quiere estructurar su desarrollo, no solo "darle mas trabajo".
  - Walkthrough: definir perfil y aspiracion → preparar 1:1 con estructura GROW → generar preguntas de coaching → establecer compromisos de desarrollo con timeline → configurar cadencia de seguimiento.

- **Clase practica CU-06**: "Reuniones que producen: redisenar la weekly del equipo"
  - Supuesto realista: La reunion semanal del equipo de promocion dura 90 minutos, no tiene agenda fija, y la mitad de los asistentes no sabe por que esta ahi. El directivo quiere redisenarla para que dure 45 minutos y produzca decisiones.
  - Walkthrough: diagnosticar problemas de la reunion actual → definir reglas (owner, agenda, time-box) → generar agenda tipo con roles → producir template de follow-up con compromisos → probar una semana y ajustar.

## 5. Toolkit ejecutiva

- **Agentes**:
  - McKinsey Strategist PROEXCA (core — diagnostico estrategico, priorizacion, alineamiento)
  - Leader Coach PROEXCA (sub — feedback, coaching, desarrollo, accountability)
  - Time & Meetings Operator PROEXCA (mini — weekly plan, reuniones, kill list)

- **Prompts curados**:
  - → McKinsey Strategist:
    - "Diagnostico estrategico express" — genera SWOT + VRIO + opciones con trade-offs para una decision concreta
    - "Plan 30/60/90" — genera roadmap trimestral con metricas a partir de prioridades definidas
    - "Matriz de priorizacion" — genera Impact vs Effort de N iniciativas con recomendacion de foco
    - "Alineamiento 7S" — diagnostica desalineacion organizacional y propone acciones correctivas
  - → Leader Coach:
    - "Prepara mi 1:1" — genera agenda de 1:1 con temas, preguntas y compromisos pendientes
    - "Script de feedback" — genera conversacion estructurada (SBI/CEDAR/COIN) para una situacion concreta
    - "Sesion GROW" — genera preguntas de coaching para una sesion de desarrollo individual
    - "Dashboard de equipo" — genera template de seguimiento con compromisos, plazos y status
  - → Time & Meetings Operator:
    - "Weekly plan" — genera plan semanal con 3 prioridades, kill list y bloques de foco
    - "Agenda de reunion" — genera agenda con owner, tiempo por tema y espacio de decisiones
    - "Follow-up de reunion" — genera resumen con decisiones, compromisos y proximos pasos

- **Mini-playbooks**:
  - Si necesitas decidir una apuesta estrategica → usa "Diagnostico express" + "Plan 30/60/90" (secuencia: diagnostico primero, plan despues)
  - Si tienes demasiadas iniciativas → usa "Matriz de priorizacion" y genera kill list con Time Operator
  - Si el equipo esta desalineado → usa "Alineamiento 7S" + "Prepara mi 1:1" para cascadear el mensaje
  - Si necesitas dar feedback dificil → usa "Script de feedback" con el contexto concreto
  - Si quieres desarrollar a alguien → usa "Sesion GROW" + "Dashboard de equipo" para seguimiento
  - Si las reuniones no funcionan → usa "Agenda de reunion" + "Follow-up" y aplica una semana de prueba

## 6. Sintesis operativa

- **Problemas que resuelve este modulo**:
  - Decisiones estrategicas sin estructura ni proceso
  - Exceso de iniciativas sin priorizacion ni kill list
  - Equipos desalineados sin rituales de alineamiento
  - Feedback que se evita o se da sin estructura
  - Desarrollo de personas sin sistema de coaching
  - Reuniones improductivas sin agenda, owner ni follow-up
  - Ejecucion inconsistente sin dashboard ni cadencia de accountability

- **Cuando usar IA aqui**:
  - Al inicio de cada trimestre: diagnostico estrategico + plan 30/60/90
  - Cada semana: weekly plan + agendas + follow-ups
  - Antes de cada 1:1: preparacion con agenda y compromisos pendientes
  - Cuando hay un problema de performance: script de feedback + plan de mejora
  - Cuando el equipo pierde foco: priorizacion + kill list + mensaje de alineamiento

- **Que NO hacer**:
  - No delegar la decision estrategica a la IA — el agente estructura opciones y trade-offs, tu decides
  - No usar scripts de feedback como mensaje automatico — el script es preparacion, la conversacion es humana
  - No confundir productividad con hiperactividad — el weekly plan sirve para hacer menos cosas, no mas
  - No sustituir la relacion personal por dashboards — el seguimiento informa la conversacion, no la reemplaza
  - No aplicar todos los frameworks a la vez — usa el que necesitas para la situacion concreta

- **Encaje en DIRECT**: Este modulo es el cierre del metodo DIRECT — la "D" final que conecta todo con el rol directivo. Llega despues de Analiza porque una vez que sabes investigar y analizar con IA, necesitas la capacidad de dirigir con la misma estructura y velocidad. McKinsey Strategist se alimenta de los outputs de Research & Insights y Analista Estrategico (modulo 05) para tomar decisiones informadas. Leader Coach complementa al Comunicador Ejecutivo (modulo 03) llevando la comunicacion al terreno del liderazgo de personas. Sin este modulo, tienes herramientas pero no sistema de direccion — produces materiales, analizas datos, pero no conviertes nada de eso en prioridades, accountability ni desarrollo de equipo.
