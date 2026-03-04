# T-03 — El agente Research OS PROEXCA

## Objetivo de aprendizaje

Conocer el agente Research OS PROEXCA: qué es, cómo funciona, cómo usarlo con el patrón GATE, cómo integrarlo con NotebookLM y Deep Research, y qué metodologías aplica para producir inteligencia defendible.

## Agenda

1. Qué es Research OS PROEXCA (y qué NO es)
2. El patrón GATE: cómo briefear al agente
3. Integración: cerebro + músculo (Research OS + NotebookLM + Deep Research)
4. Metodologías clave que aplica el agente
5. Casos de uso frecuentes (ejemplos, no límites)


## 1. Qué es Research OS PROEXCA (y qué NO es)

### **Qué es:**

**Research OS PROEXCA** es un **Senior Engagement Manager / Senior Analyst** (nivel McKinsey/BCG) especializado en inteligencia de mercado, investigación, síntesis y recomendaciones estratégicas para internacionalización de Canarias.

**Su rol es abierto:** Cubre cualquier desafío de investigación, análisis, inteligencia o síntesis que un ejecutivo de PROEXCA enfrente.

**No es:**

- No es "un generador de briefings sectoriales". Es un profesional senior con capacidades abiertas.
- No es una plantilla con campos predefinidos. Es un agente que se adapta al contexto.
- No es un buscador. Es un analista que estructura, valida, sintetiza y recomienda.

### **El problema mental que resuelve:**

"Necesito pasar de 'me suena' a 'argumento defendible' en 60-90 minutos — investigar, sintetizar, y tener una recomendación clara sin morir en documentación."

### **Su propuesta de valor:**

- **Estructura:** Convierte pregunta vaga en Research Brief con preguntas investigables.
- **Rigor:** Aplica metodología profesional (Evidence Matrix, validación de fuentes, detección de sesgos).
- **Síntesis:** Produce Executive Memos BLUF (conclusión en 30 segundos).
- **Defendibilidad:** Recomendaciones con evidencia y niveles de confianza (Alta/Media/Baja).
- **Velocidad:** De caos informativo a inteligencia accionable en 60-90 minutos.


## 2. El patrón GATE: cómo briefear al agente

Antes de cualquier análisis o investigación, **Research OS PROEXCA** necesita un brief estructurado.

### **GATE = Goal + Ambito + Type + Evidence**

#### **G — Goal (Objetivo)**

¿Para qué necesitas este análisis? ¿Qué decisión va a informar?

**Mal:** "Investígame el sector gaming."

**Bien:** "Necesito decidir si organizar una misión comercial del sector gaming canario a Alemania en Q2 2026. El objetivo es identificar oportunidades para 8-10 empresas canarias."

**Por qué importa:** El objetivo define qué es relevante y qué no. Si el objetivo es "decidir si hacer misión", necesitas viabilidad, actores, oportunidades, barreras. Si el objetivo es "preparar empresas que ya van", necesitas briefing de contexto, contactos clave, protocolo.

#### **A — Ambito (Scope)**

¿Qué SÍ investigar y qué NO? (sector, geografía, profundidad)

**Mal:** "El sector gaming alemán."

**Bien:**

- **Geografía:** Alemania (foco Berlín y Colonia).
- **Sectores:** Gaming (prioridad: serious games, mobile, VR/AR).
- **Profundidad:** Briefing ejecutivo (2 páginas) con datos clave, no análisis exhaustivo de 20 páginas.
- **Fuera de scope:** Gaming casual, mercado de consolas (empresas canarias no están en ese espacio).

**Por qué importa:** Sin scope claro, el análisis se dispersa. Defines fronteras para producir inteligencia enfocada.

#### **T — Type (Tipo)**

¿Qué formato necesitas?

Opciones frecuentes (ejemplos, no límites):

- **Research Brief:** Estructura de investigación (1 página con preguntas investigables).
- **Briefing sectorial:** Informe de inteligencia de un sector (2-4 páginas: tamaño mercado → actores → oportunidades → riesgos → recomendaciones).
- **Ficha de mercado:** Análisis de un país como destino de internacionalización.
- **Executive Memo:** Síntesis de documento complejo (de 80 páginas a 2).
- **Options Memo:** Nota de decisión comparando opciones (pros/contras, evidencia, recomendación).
- **Briefing de contexto:** Ficha preparatoria para evento, reunión o misión (lo esencial en 2 páginas).
- **Radar de tendencias:** Mapa de tendencias emergentes en un sector.

**Por qué importa:** Define formato de salida = define qué produce el agente.

#### **E — Evidence (Evidencia)**

¿Qué nivel de rigor necesitas?

Opciones:

- **Express:** Estimaciones rápidas con fuentes públicas. Nivel de confianza: Media. Tiempo: 30 min.
- **Estándar:** Datos verificados con fuentes fiables recientes (<1 año). Nivel de confianza: Alta/Media. Tiempo: 60-90 min.
- **Rigor alto:** Datos verificados con múltiples fuentes, corroboración, validación de metodología. Nivel de confianza: Alta. Tiempo: 2-3 horas.

**Por qué importa:** Define trade-off entre velocidad y rigor. Si necesitas decidir mañana, vas a express. Si vas a presentar al comité, vas a rigor alto.

### **Ejemplo GATE completo:**

**Prompt al agente:**

"Necesito un briefing del sector gaming alemán para decidir si organizar una misión comercial en Q2 2026.

- **Goal:** Decidir viabilidad de misión + identificar oportunidades para empresas canarias.
- **Ambito:** Alemania (foco Berlín y Colonia), subsectores serious games, mobile, VR/AR. Fuera de scope: gaming casual, consolas.
- **Type:** Briefing sectorial (2 páginas) con recomendación.
- **Evidence:** Estándar (datos verificados recientes, nivel confianza Alta/Media, 60-90 min).

¿Por dónde empezamos?"

**Respuesta del agente:**

"Perfecto. Voy a estructurar un Research Brief primero con las preguntas investigables. Luego investigo, valido fuentes, y produzco el briefing sectorial con recomendación y nivel de confianza. ¿Te parece bien este plan?"


## 3. Integración: cerebro + músculo (Research OS + NotebookLM + Deep Research)

**Research OS PROEXCA** no trabaja solo. Funciona como "cerebro de enfoque" integrado con herramientas de búsqueda.

### **La arquitectura:**

```
Research OS PROEXCA (cerebro de enfoque)
    ↓
    ├── Deep Research (ChatGPT/Gemini) → Búsqueda web, rastreo de fuentes, informe preliminar
    ├── NotebookLM → Procesamiento de documentos largos, síntesis, extracción de insights
    └── Búsqueda directa → Fuentes conocidas (Eurostat, ICEX, asociaciones sectoriales)
```

### **Cómo funciona:**

#### **Caso 1: Investigación desde cero (ej: sector gaming alemán)**

1. **Research OS:** Estructura Research Brief con preguntas investigables.
2. **Deep Research (ChatGPT):** Busca fuentes, genera informe preliminar de 10-15 páginas.
3. **Research OS:** Valida fuentes del informe Deep Research, detecta sesgos, aplica Evidence Matrix.
4. **Research OS:** Sintetiza en briefing sectorial (2 páginas) con recomendación y nivel de confianza.

**Ventaja:** Deep Research hace la búsqueda pesada. Research OS aplica rigor metodológico y enfoque PROEXCA.

#### **Caso 2: Síntesis de documento complejo (ej: informe 60 páginas)**

1. **NotebookLM:** Carga documento, genera resumen preliminar.
2. **Research OS:** Lee resumen NotebookLM + documento original si necesario.
3. **Research OS:** Aplica técnica 5-3-1 (5 preguntas esenciales → 3 hallazgos clave → 1 recomendación).
4. **Research OS:** Produce Executive Memo (2 páginas) con BLUF, hallazgos, implicaciones, próximos pasos.

**Ventaja:** NotebookLM procesa el documento. Research OS extrae lo accionable y estructura para decisión.

#### **Caso 3: Nota de decisión (ej: priorizar mercados LATAM)**

1. **Research OS:** Estructura options memo (opciones + criterios de evaluación).
2. **Deep Research:** Busca datos comparativos de cada mercado (México, Colombia, Chile, Perú).
3. **Research OS:** Aplica Evidence Matrix a cada opción (claims ↔ evidence ↔ confidence).
4. **Research OS:** Recomienda opción con justificación y nivel de confianza.

**Ventaja:** Deep Research aporta datos. Research OS estructura comparación y produce recomendación defendible.

### **Regla operativa:**

- **Para búsqueda → Deep Research o NotebookLM (músculo).**
- **Para estructura, validación, síntesis, recomendación → Research OS PROEXCA (cerebro).**


## 4. Metodologías clave que aplica el agente

### **Metodología 1: Research Brief**

**Qué es:** Documento de 1 página que estructura la investigación antes de empezar.

**Estructura:**

1. **Objetivo:** ¿Para qué? ¿Qué decisión va a informar?
2. **Preguntas investigables:** 5-7 preguntas específicas (no "investiga gaming", sino "¿cuál es el tamaño del mercado gaming alemán?").
3. **Fuentes previstas:** ¿Dónde buscar? (Newzoo, GAME, Statista, Gamescom).
4. **Formato de salida:** Briefing sectorial 2 páginas.
5. **Timeline:** 90 minutos.

**Ventaja:** Convierte pregunta vaga en plan de investigación estructurado.

### **Metodología 2: Evidence Matrix**

**Qué es:** Tabla que conecta afirmaciones con evidencias y niveles de confianza.

**Estructura:**

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Mercado gaming alemán: 6.200M€ | Informe Newzoo 2025 | Alta | Newzoo |
| Berlín tiene 150+ estudios | Directorio GAME + LinkedIn | Media | GAME |

**Ventaja:** Transparencia. Sabes qué datos son sólidos y cuáles verificar.

### **Metodología 3: Source Validation (Validación de fuentes)**

**Framework CRAAP:**

- **C — Currency (Actualidad):** ¿Cuándo? (<1 año para tech, <2 años para tradicionales)
- **R — Relevance (Relevancia):** ¿Es pertinente para tu pregunta?
- **A — Authority (Autoridad):** ¿Quién publica? (Newzoo > blog random)
- **A — Accuracy (Precisión):** ¿Metodología documentada?
- **P — Purpose (Propósito):** ¿Para qué se publicó? (¿objetivo? ¿comercial?)

**Detección de sesgos cognitivos:**

- **Confirmación:** ¿Solo buscas datos que confirman tu hipótesis?
- **Anclaje:** ¿Te quedas con el primer dato que ves?
- **Supervivencia:** ¿Solo ves los casos de éxito?
- **Disponibilidad:** ¿Asumes que lo más visible es lo más relevante?

**Ventaja:** Evitas basar decisiones en datos débiles o sesgados.

### **Metodología 4: Executive Memo (Síntesis ejecutiva)**

**Estructura BLUF (Bottom Line Up Front):**

1. **BLUF (3 líneas):** Conclusión y recomendación. Test de 30 segundos: lees esto y ya sabes la decisión.
2. **Hallazgos clave:** 3-5 insights con implicaciones explícitas.
3. **Recomendaciones:** Qué hacer, nivel de confianza, justificación.
4. **Próximos pasos:** Timeline y acciones concretas.
5. **Anexo:** Datos de soporte, fuentes, tablas.

**Técnica 5-3-1:**

- 5 preguntas investigables → 3 hallazgos clave → 1 recomendación principal.

**Ventaja:** Del caos informativo a documento accionable que pasa test de 30 segundos.


## 5. Casos de uso frecuentes (ejemplos, no límites)

El agente cubre cualquier desafío de investigación/análisis, pero estos son los más frecuentes en PROEXCA:

### **CU-01: Investigación sectorial rápida**

**Input:** "Analiza el sector [X] en [país/región] para [objetivo]"

**Output:** Briefing sectorial (2-4 páginas): tamaño mercado → actores → oportunidades → riesgos → recomendaciones.

**Ejemplo:** Economía azul en Europa para evaluar misión comercial.

### **CU-02: Análisis de mercado internacional**

**Input:** "Evalúa [país] como destino de internacionalización para [sector canario]"

**Output:** Ficha de mercado con viabilidad, barreras, oportunidades, recomendación.

**Ejemplo:** Chile como destino para empresas tech canarias.

### **CU-03: Monitoreo de tendencias**

**Input:** "¿Qué tendencias emergentes en [sector] deberían estar en nuestro radar?"

**Output:** Radar de tendencias clasificadas por relevancia y madurez (emergente/crecimiento/madurez/declive).

**Ejemplo:** Tendencias en IA aplicada a internacionalización.

### **CU-04: Síntesis ejecutiva de documentos**

**Input:** "Sintetiza este informe de 80 páginas en un executive memo de 2 páginas"

**Output:** BLUF + hallazgos clave + implicaciones + recomendaciones.

**Ejemplo:** Informe Comisión Europea sobre comercio exterior → memo para Presidencia.

### **CU-05: Nota de decisión**

**Input:** "Ayúdame a decidir entre [opción A] y [opción B] para [objetivo]"

**Output:** Options memo con pros/contras, evidencia, nivel de confianza, recomendación.

**Ejemplo:** Priorizar mercados LATAM (México vs Colombia vs Chile vs Perú).

### **CU-06: Briefing de contexto**

**Input:** "Prepárame para [evento/reunión/misión] sobre [tema]"

**Output:** Briefing de contexto (2 páginas): lo esencial + actores clave + temas sensibles + preguntas estratégicas.

**Ejemplo:** Reunión con agencia de inversión de Chile.


## Puntos clave

1. **Research OS PROEXCA:** Senior Analyst de rol abierto, no plantilla. Cubre cualquier desafío de investigación/análisis.
2. **Patrón GATE:** Goal + Ambito + Type + Evidence. Brief estructurado antes de investigar.
3. **Integración:** Research OS (cerebro) + Deep Research/NotebookLM (músculo) = sistema completo.
4. **Metodologías:** Research Brief, Evidence Matrix, Source Validation (CRAAP + sesgos), Executive Memo (BLUF).
5. **6 casos de uso frecuentes:** Investigación sectorial, mercados, tendencias, síntesis, decisión, briefings.


## Conexión con lo que viene

Clases prácticas con casos reales de PROEXCA:

- **P-01:** Investigación sectorial — economía azul en Europa. Aplicarás ciclo completo: formular Research Brief → investigar con Deep Research → validar fuentes → sintetizar en briefing → recomendar con nivel de confianza.

- **P-02:** Análisis de mercado — Chile como destino. Aplicarás Evidence Matrix: afirmaciones ↔ evidencias ↔ niveles de confianza.

- **P-03:** Síntesis ejecutiva — documento de 60 páginas → executive memo de 2 páginas. Aplicarás técnica 5-3-1 y formato BLUF.

- **P-04:** Nota de decisión — priorizar mercados LATAM. Aplicarás options memo con recomendación defendible.

Teoría completa. Ahora toca práctica real.
