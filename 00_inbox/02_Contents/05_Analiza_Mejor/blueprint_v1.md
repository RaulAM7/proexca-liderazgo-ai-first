---
module_id: "05"
module_name: "Analiza Mejor"
direct_verb: "E"
version: 1
status: frozen
date: 2026-03-03
---

# Blueprint: Modulo 05 — Analiza Mejor

## 0. Apertura narrativa

- **Reencuadre**: "Analizar mejor" no es leer mas informes — es tener la capacidad de investigar cualquier sector, mercado o tendencia en minutos, y convertir esa informacion en inteligencia accionable para decisiones de internacionalizacion. Un directivo de PROEXCA no deberia tardar semanas en preparar un briefing sectorial ni depender de consultoras para entender un mercado.
- **Frustraciones clave**:
  1. Investigar un sector o mercado para una mision comercial requiere dias de busqueda fragmentada en fuentes dispersas, y el resultado nunca esta tan actualizado como necesitas.
  2. Los documentos complejos (informes de competidores, estudios sectoriales, propuestas de colaboracion) se acumulan sin que nadie los sintetice en algo accionable.
  3. Cuando hay que tomar una decision estrategica (a que mercado ir, que sector priorizar, que oportunidad perseguir), la informacion esta dispersa y el analisis depende del criterio individual sin estructura.
- **Vision AI-first**: Con un sistema de IA aplicada al analisis e investigacion, produces un briefing sectorial completo en 30 minutos, sintetizas un informe de 80 paginas en una nota ejecutiva de 2, y analizas escenarios de decision con datos estructurados — sin depender de consultoras externas para cada necesidad de inteligencia.

## 1. Mapa de retos del directivo

- **Reto 1: Research lento y fragmentado** — investigar un sector, pais o tendencia requiere buscar en multiples fuentes, cruzar datos y sintetizar, consumiendo dias de trabajo para cada necesidad.
- **Reto 2: Sobrecarga de documentos sin procesar** — informes, estudios, propuestas y PDFs que se acumulan porque nadie tiene tiempo de leerlos, sintetizarlos y extraer lo relevante.
- **Reto 3: Analisis ad hoc sin estructura** — cuando llega una decision estrategica, el analisis se hace sobre la marcha, sin metodologia y sin comparar escenarios de forma sistematica.
- **Reto 4: Dependencia de consultoras para inteligencia de mercado** — cada necesidad de research profundo implica encargar un estudio externo, con plazos largos y costes elevados.
- **Brief infografia**: Infografia de flujo con el directivo frente a un escritorio lleno de informes, PDFs y pestañas de navegador abiertas, mostrando como la IA transforma ese caos en un panel claro de inteligencia accionable.

## 2. Casos de uso clave

- **CU-01: Investigacion sectorial rapida** — investigar un sector especifico (aeroespacial, audiovisual, gaming, economia azul, agroalimentario) para misiones comerciales, ferias o informes internos
- **CU-02: Analisis de mercados internacionales** — analizar paises o regiones como destino de internacionalizacion: tamano de mercado, competidores, regulacion, oportunidades para empresas canarias
- **CU-03: Monitoreo de tendencias y competidores** — detectar tendencias emergentes en sectores estrategicos y mapear competidores o actores clave en mercados objetivo
- **CU-04: Sintesis ejecutiva de documentos** — procesar documentos complejos (informes, estudios, propuestas, PDFs) y producir resumenes ejecutivos accionables
- **CU-05: Notas de decision y analisis de escenarios** — elaborar analisis comparativos de opciones y recomendaciones estructuradas para decisiones estrategicas
- **CU-06: Briefings de contexto para eventos internacionales** — preparar notas de contexto, fichas de pais y materiales de preparacion para misiones, ferias y reuniones con delegaciones

## 3. Sistema IA (agentes)

### Agente principal
- **Nombre**: Research & Insights PROEXCA
- **Rol**: Investigador senior de inteligencia de mercado + analista de fuentes abiertas
- **Problema mental que resuelve**: "Necesito investigar un sector, pais o tendencia y tener un briefing claro en horas, no en semanas."
- **CUs que cubre**: CU-01 (investigacion sectorial), CU-02 (mercados internacionales), CU-03 (tendencias y competidores)
- **Logica de agrupacion**: Estos 3 use cases comparten la misma naturaleza — investigacion y recopilacion de inteligencia desde fuentes externas. Requieren capacidad de busqueda, sintesis de fuentes multiples, y produccion de informes de inteligencia con datos verificables. El flujo es: fuentes externas → procesamiento → inteligencia accionable.

### Sub-agente 1
- **Nombre**: Analista Estrategico PROEXCA
- **Rol**: Director de analisis estrategico + consultor de decision
- **Problema mental que resuelve**: "Tengo demasiada informacion y necesito convertirla en una sintesis clara, un analisis de opciones o una recomendacion estructurada para decidir."
- **CUs que cubre**: CU-04 (sintesis ejecutiva), CU-05 (notas de decision), CU-06 (briefings de contexto)
- **Logica de agrupacion**: Estos 3 use cases comparten la misma naturaleza — procesamiento y analisis de informacion existente para producir outputs de decision. Trabajan con informacion ya disponible (documentos internos, briefings, datos recopilados) y la transforman en artefactos de alto valor para el directivo. El flujo es: informacion existente → analisis → artefacto de decision.

## 4. Casos practicos guiados

- **Clase practica CU-01**: "Investigacion sectorial rapida: economia azul en Europa"
  - Supuesto realista: PROEXCA necesita un briefing del sector de economia azul europeo para evaluar si organizar una mision comercial. Tienes 48 horas.
  - Walkthrough: definir scope → briefing al agente → generacion de informe de inteligencia → verificacion de datos → informe final listo para decision.

- **Clase practica CU-02**: "Analisis de mercado: Chile como destino de internacionalizacion"
  - Supuesto realista: Varias empresas canarias preguntan por oportunidades en Chile. Necesitas un analisis rapido del mercado chileno para los sectores relevantes.
  - Walkthrough: definir sectores + pais → briefing → generacion de ficha de mercado → ajustes → ficha lista para las empresas.

- **Clase practica CU-04**: "Sintesis ejecutiva de un informe complejo"
  - Supuesto realista: Has recibido un informe de 60 paginas de la Comision Europea sobre comercio exterior. Necesitas una sintesis de 2 paginas para Presidencia.
  - Walkthrough: cargar documento → briefing al agente con objetivo → generacion de sintesis → ajuste de enfoque → sintesis lista.

- **Clase practica CU-05**: "Nota de decision: priorizar mercados LATAM"
  - Supuesto realista: Hay presupuesto para 2 misiones comerciales a LATAM. Las opciones son Mexico, Colombia, Chile y Peru. Necesitas un analisis comparativo con recomendacion.
  - Walkthrough: definir criterios → briefing → generacion de analisis comparativo → revision de datos → nota de decision lista para presentar.

## 5. Toolkit ejecutiva

- **Agentes**:
  - Research & Insights PROEXCA (core — investigacion sectorial, mercados, tendencias)
  - Analista Estrategico PROEXCA (sub — sintesis, analisis, briefings de decision)

- **Prompts curados**:
  - → Research & Insights:
    - "Briefing sectorial express" — genera informe de inteligencia de un sector dado pais/region + contexto
    - "Ficha de mercado" — genera analisis de un pais como destino de internacionalizacion
    - "Radar de tendencias" — genera mapa de tendencias emergentes en un sector especifico
  - → Analista Estrategico:
    - "Sintesis ejecutiva" — procesa un documento complejo y genera resumen accionable de 1-2 paginas
    - "Nota de decision" — genera analisis comparativo de opciones con recomendacion estructurada
    - "Briefing de contexto" — genera ficha preparatoria para mision, feria o reunion internacional

- **Mini-playbooks**:
  - Si tienes una mision comercial en <1 mes → usa "Briefing sectorial express" + "Briefing de contexto" (secuencia: research primero, analisis despues)
  - Si recibes un informe largo y necesitas sintesis para manana → usa "Sintesis ejecutiva" directamente
  - Si necesitas decidir entre mercados/sectores → usa "Nota de decision" con criterios claros
  - Si el research necesita traducirse a materiales → usa Research primero, luego Marketing Estrategico (modulo 04)

## 6. Sintesis operativa

- **Problemas que resuelve este modulo**:
  - Research lento y fragmentado
  - Sobrecarga de documentos sin procesar
  - Analisis sin estructura para decisiones estrategicas
  - Dependencia de consultoras para inteligencia de mercado

- **Cuando usar IA aqui**:
  - Antes de cualquier mision comercial: investigacion sectorial + briefing de contexto
  - Cuando recibes documentos complejos que necesitan sintesis rapida
  - Para decisiones estrategicas que requieren comparar opciones con datos
  - Para monitorear tendencias y competidores en sectores estrategicos

- **Que NO hacer**:
  - No tomar datos generados por IA como factuales sin verificar fuentes — la IA sintetiza y estructura, tu verificas
  - No sustituir la deliberacion estrategica por un output de IA — el analisis informa la decision, no la reemplaza
  - No usar para datos confidenciales o clasificados de PROEXCA sin las precauciones adecuadas
  - No confundir research (investigar fuentes) con analisis (procesar informacion existente) — son agentes distintos por una razon

- **Encaje en DIRECT**: Este modulo es el verbo "E" (Entiende) del metodo DIRECT. Llega despues de Impacta porque una vez que sabes comunicar y promocionar con IA, necesitas la capacidad de investigar y analizar con la misma velocidad. Research & Insights alimenta a Marketing Estrategico (modulo 04) con datos, y Analista Estrategico alimenta las decisiones que se ejecutan en Dirige Mejor (modulo 06). Sin este modulo, produces materiales sin datos y tomas decisiones sin analisis.
