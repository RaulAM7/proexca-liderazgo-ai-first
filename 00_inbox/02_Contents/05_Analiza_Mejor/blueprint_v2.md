---
module_id: "05"
module_name: "Analiza Mejor"
direct_verb: "E"
version: 2
status: frozen
date: 2026-03-04
---

# Blueprint: Modulo 05 — Analiza Mejor

## 0. Apertura narrativa

- **Reencuadre**: "Analizar mejor" tiene dos caras. Primera: convertir el ruido informativo en inteligencia accionable — pasar de "me suena" a "argumento defendible" en 60-90 minutos, sin morir en documentacion. Segunda: pensar con estructura cuando llegan problemas complejos — descomponer, formular hipotesis, encontrar causas raiz y decidir con claridad. Un directivo de PROEXCA no deberia tardar semanas en investigar un mercado ni tomar decisiones estrategicas sin metodologia.
- **Frustraciones clave**:
  1. Investigar un sector o mercado para una mision comercial requiere dias de busqueda fragmentada en fuentes dispersas, y el resultado nunca esta tan actualizado como necesitas.
  2. Los documentos complejos (informes, estudios, propuestas) se acumulan sin que nadie los sintetice en algo accionable — del caos de informacion a un insight claro hay un abismo.
  3. Cuando aparece un problema complejo (un programa que no funciona, un mercado que no responde, una decision con multiples variables), el analisis se hace sobre la marcha, sin estructura, sin descomponer, sin hipotesis — y la decision sale mas por intuicion que por metodo.
- **Vision AI-first**: Con un sistema de IA aplicada al analisis, produces un briefing sectorial completo en 30 minutos, sintetizas un informe de 80 paginas en una nota ejecutiva de 2, y cuando llega un problema complejo lo descompones en un arbol MECE con hipotesis testeables y llegas a una recomendacion estructurada en la misma sesion — sin consultoras, sin semanas de espera.

## 1. Mapa de retos del directivo

- **Reto 1: Research lento y fragmentado** — investigar un sector, pais o tendencia requiere buscar en multiples fuentes, cruzar datos y sintetizar, consumiendo dias de trabajo para cada necesidad.
- **Reto 2: Sobrecarga de documentos sin procesar** — informes, estudios, propuestas y PDFs que se acumulan porque nadie tiene tiempo de leerlos, sintetizarlos y extraer lo relevante.
- **Reto 3: De la informacion al insight hay un salto que nadie da** — tener datos no es tener inteligencia. Falta el paso de: dato → insight → implicacion → decision. Los directivos se quedan en el dato.
- **Reto 4: Problemas complejos resueltos sin estructura** — cuando llega un problema real (un programa que no funciona, un mercado que no responde), se aborda de forma reactiva: parches, opiniones, reuniones sin conclusion. Falta descomposicion, hipotesis, causas raiz.
- **Reto 5: Dependencia de consultoras para inteligencia y analisis** — cada necesidad de research profundo o analisis estrategico implica encargar un estudio externo, con plazos largos y costes elevados.
- **Brief infografia**: Infografia dividida en dos mitades: izquierda = "Research OS" (escritorio con informes caóticos → panel de inteligencia claro), derecha = "Problem Solving" (problema nebuloso → arbol de decision estructurado). En el centro, el directivo que pasa de abrumado a decidido.

## 2. Casos de uso clave

### Pilar 1: Research OS (Investigacion + Sintesis + Decision)
- **CU-01: Investigacion sectorial rapida** — investigar un sector especifico para misiones comerciales, ferias o informes internos. Del caos de fuentes a un briefing defendible en 60 minutos.
- **CU-02: Analisis de mercados internacionales** — analizar paises o regiones como destino de internacionalizacion: tamano, competidores, regulacion, oportunidades para empresas canarias.
- **CU-03: Monitoreo de tendencias y competidores** — detectar tendencias emergentes y mapear competidores en mercados objetivo.
- **CU-04: Sintesis ejecutiva de documentos** — procesar documentos complejos y producir resumenes ejecutivos accionables. De 80 paginas a 2.
- **CU-05: Notas de decision y analisis de escenarios** — elaborar analisis comparativos de opciones y recomendaciones estructuradas. Matriz de evidencia (claims ↔ pruebas ↔ confianza).
- **CU-06: Briefings de contexto para eventos internacionales** — preparar notas de contexto y fichas para misiones, ferias y reuniones con delegaciones.

### Pilar 2: Problem Solving (Pensamiento estructurado + Decision)
- **CU-07: Descomposicion de problemas (Issue Trees MECE)** — descomponer un problema complejo en partes mutuamente excluyentes y colectivamente exhaustivas. Ver el arbol completo antes de decidir donde actuar.
- **CU-08: Analisis de causas raiz (5 Whys + Ishikawa)** — cuando hay sintomas pero no problema claro, llegar a la causa raiz real en vez de poner parches.
- **CU-09: Analisis hypothesis-driven** — formular hipotesis primero, disenar tests rapidos, no perderse en analisis. Pensar como un consultor senior, no como un recopilador.
- **CU-10: Decision Matrix + Cost-Benefit** — cuando hay opciones reales sobre la mesa, evaluarlas con estructura: criterios ponderados, costes vs beneficios, escenarios.
- **CU-11: Narrativa SCQA para comunicar analisis** — convertir el analisis en una historia convincente: Situation → Complication → Question → Answer. Del arbol al mensaje para el comite.

## 3. Sistema IA (agentes)

### Agente principal
- **Nombre**: Research OS PROEXCA
- **Rol**: Senior Engagement Manager de investigacion e inteligencia de mercado (nivel McKinsey), con capacidad de investigar fuentes, sintetizar informacion compleja y producir recomendaciones estructuradas
- **Problema mental que resuelve**: "Necesito pasar de 'me suena' a 'argumento defendible' en 60-90 minutos — investigar, sintetizar, y tener una recomendacion clara sin morir en documentacion."
- **CUs que cubre**: CU-01 (investigacion sectorial), CU-02 (mercados), CU-03 (tendencias), CU-04 (sintesis ejecutiva), CU-05 (notas de decision), CU-06 (briefings)
- **Logica de agrupacion**: Todos estos CUs forman el ciclo completo de inteligencia: buscar → procesar → sintetizar → recomendar. Separar investigacion de analisis fragmenta artificialmente un flujo que el directivo vive como uno solo. El agente es un Senior Analyst con capacidades abiertas — estos CUs son ejemplos frecuentes, no limites.
- **Integracion**: Funciona como "cerebro de enfoque". El musculo de busqueda lo aportan NotebookLM + Deep Research (Gemini/ChatGPT); el agent dirige, estructura y sintetiza.

### Sub-agente 1
- **Nombre**: Problem Solver PROEXCA
- **Rol**: Senior Strategy Consultant especializado en problem solving estructurado, analisis de causas raiz y decision-making con rigor metodologico
- **Problema mental que resuelve**: "Tengo un problema complejo y no se por donde empezar. Necesito descomponerlo, entender las causas reales, formular hipotesis y llegar a una recomendacion que pueda defender ante el comite."
- **CUs que cubre**: CU-07 (issue trees MECE), CU-08 (causas raiz), CU-09 (hypothesis-driven), CU-10 (decision matrix), CU-11 (narrativa SCQA)
- **Logica de agrupacion**: Todos estos CUs forman el ciclo completo de problem solving: descomponer → diagnosticar → hipotesis → evaluar → comunicar. Son la columna vertebral del pensamiento estructurado. El agente es un Strategy Consultant con capacidades abiertas — estos CUs son ejemplos frecuentes, no limites.

## 4. Casos practicos guiados

### Pilar 1: Research OS

- **Clase practica CU-01**: "Investigacion sectorial rapida: economia azul en Europa"
  - Supuesto realista: PROEXCA necesita un briefing del sector de economia azul europeo para evaluar si organizar una mision comercial. Tienes 48 horas.
  - Walkthrough: formular pregunta investigable → briefing al agente con scope + objetivo → generacion de informe de inteligencia → validacion de fuentes y sesgos → del caos al insight → informe final listo para decision.

- **Clase practica CU-02**: "Analisis de mercado: Chile como destino de internacionalizacion"
  - Supuesto realista: Varias empresas canarias preguntan por oportunidades en Chile. Necesitas un analisis rapido.
  - Walkthrough: definir sectores + preguntas clave → briefing → generacion de ficha de mercado con matriz de evidencia (claims ↔ pruebas ↔ confianza) → ajustes → ficha lista.

- **Clase practica CU-04**: "Sintesis ejecutiva de un informe complejo"
  - Supuesto realista: Has recibido un informe de 60 paginas de la Comision Europea sobre comercio exterior. Necesitas una sintesis de 2 paginas para Presidencia.
  - Walkthrough: cargar documento → briefing con objetivo → generacion de sintesis (insight → implicacion → recomendacion) → ajuste de enfoque → executive memo listo.

- **Clase practica CU-05**: "Nota de decision: priorizar mercados LATAM"
  - Supuesto realista: Hay presupuesto para 2 misiones comerciales a LATAM. Las opciones son Mexico, Colombia, Chile y Peru. Necesitas un analisis comparativo.
  - Walkthrough: definir criterios + opciones → briefing → analisis comparativo con niveles de confianza → recomendacion estructurada → nota de decision lista.

### Pilar 2: Problem Solving

- **Clase practica CU-07**: "Descomponer un problema: por que las empresas canarias no repiten en misiones comerciales"
  - Supuesto realista: PROEXCA detecta que solo el 30% de empresas repiten en misiones comerciales. La direccion quiere entender por que y que hacer.
  - Walkthrough: definir el problema → construir issue tree MECE (costes, resultados, experiencia, alternativas, follow-up) → identificar ramas prioritarias → formular hipotesis por rama → plan de analisis.

- **Clase practica CU-08**: "Analisis de causas raiz: el programa de ayudas tiene baja demanda"
  - Supuesto realista: Un programa de ayudas a la internacionalizacion tiene un 40% menos de solicitudes de lo esperado. Hay sintomas pero no problema claro.
  - Walkthrough: describir sintomas → aplicar 5 Whys → construir diagrama Ishikawa (personas, proceso, comunicacion, producto, entorno) → llegar a causa raiz → propuesta de accion.

- **Clase practica CU-10**: "Decision Matrix: elegir entre 3 formatos de mision comercial"
  - Supuesto realista: PROEXCA debate entre 3 formatos de mision comercial (presencial pura, hibrida, virtual). Necesitan decidir con estructura.
  - Walkthrough: listar opciones y criterios (coste, impacto, viabilidad, ROI) → construir decision matrix ponderada → cost-benefit por opcion → recomendacion → narrativa SCQA para presentar al comite.

## 5. Toolkit ejecutiva

- **Agentes**:
  - Research OS PROEXCA (core — investigacion, sintesis, inteligencia, decision informada)
  - Problem Solver PROEXCA (sub — descomposicion, causas raiz, hipotesis, decision estructurada)

- **Prompts curados**:
  - → Research OS:
    - "Briefing sectorial express" — genera informe de inteligencia de un sector dado pais/region + contexto
    - "Ficha de mercado" — genera analisis de un pais como destino de internacionalizacion
    - "Radar de tendencias" — genera mapa de tendencias emergentes en un sector
    - "Sintesis ejecutiva" — procesa documento complejo → executive memo accionable
    - "Nota de decision" — genera analisis comparativo con recomendacion + niveles de confianza
    - "Briefing de contexto" — genera ficha preparatoria para evento internacional
  - → Problem Solver:
    - "Issue Tree MECE" — descompone un problema en arbol estructurado
    - "Causas raiz" — aplica 5 Whys + Ishikawa para llegar a la causa real
    - "Hypothesis-driven" — formula hipotesis + diseña tests rapidos
    - "Decision Matrix" — evalua opciones con criterios ponderados + cost-benefit
    - "Narrativa SCQA" — convierte analisis en historia convincente para comite

- **Mini-playbooks**:
  - Si tienes una mision comercial en <1 mes → usa "Briefing sectorial express" + "Briefing de contexto" (secuencia: research primero, contexto despues)
  - Si recibes un informe largo y necesitas sintesis para manana → usa "Sintesis ejecutiva" directamente
  - Si necesitas decidir entre mercados/sectores → usa "Nota de decision" con criterios claros
  - Si un programa no funciona y no sabes por que → usa "Causas raiz" (5 Whys + Ishikawa)
  - Si tienes un problema complejo con multiples variables → empieza con "Issue Tree MECE", luego "Hypothesis-driven"
  - Si necesitas presentar un analisis al comite → termina siempre con "Narrativa SCQA"
  - Si el research necesita traducirse a materiales → usa Research OS primero, luego Marketing Estrategico (modulo 04)

## 6. Sintesis operativa

- **Problemas que resuelve este modulo**:
  - Research lento y fragmentado → inteligencia en 60 minutos
  - Sobrecarga de documentos sin procesar → sintesis ejecutiva inmediata
  - De dato a insight a decision: el salto que nadie da → metodologia clara
  - Problemas complejos resueltos sin estructura → issue trees, hipotesis, causas raiz
  - Dependencia de consultoras → capacidad interna de analisis senior

- **Cuando usar IA aqui**:
  - Antes de cualquier mision comercial: investigacion sectorial + briefing de contexto
  - Cuando recibes documentos complejos que necesitan sintesis rapida
  - Para decisiones estrategicas que requieren comparar opciones con datos
  - Cuando hay un problema complejo: descomposicion MECE + hipotesis + causas raiz
  - Para preparar presentaciones al comite con narrativa SCQA

- **Que NO hacer**:
  - No tomar datos generados por IA como factuales sin verificar fuentes — la IA sintetiza y estructura, tu verificas
  - No sustituir la deliberacion estrategica por un output de IA — el analisis informa la decision, no la reemplaza
  - No usar para datos confidenciales o clasificados sin las precauciones adecuadas
  - No saltar a soluciones sin descomponer el problema primero — el issue tree va ANTES de la recomendacion
  - No confundir "tener un arbol MECE" con "tener la respuesta" — el arbol es el mapa, luego hay que recorrerlo

- **Encaje en DIRECT**: Este modulo es el verbo "E" (Entiende) del metodo DIRECT. Tiene dos pilares: Research OS (investigar + sintetizar + recomendar) y Problem Solving (descomponer + diagnosticar + decidir). Research OS alimenta a Marketing Estrategico (modulo 04) con datos, y Problem Solver alimenta las decisiones que se ejecutan en Dirige Mejor (modulo 06). Sin este modulo, produces materiales sin datos y tomas decisiones sin estructura.
