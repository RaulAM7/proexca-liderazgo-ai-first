---
module_id: "05"
module_name: "Analiza Mejor"
class_type: "practica"
class_id: "P-01"
title: "Investigación sectorial: Economía azul en Europa"
use_case_id: "CU-01"
agent: "Research OS PROEXCA"
blueprint_version: 2
duration_minutes: 30
status: ready
---

# P-01 — Investigación sectorial: Economía azul en Europa (CU-01)

## Objetivo práctico

Producir un briefing sectorial completo sobre economía azul en Europa en 60-90 minutos, aplicando el ciclo Research OS completo: formular Research Brief → investigar con método → validar fuentes → sintetizar → recomendar con nivel de confianza.

**Resultado esperado:** Briefing de 2-3 páginas con recomendación sobre viabilidad de misión comercial, listo para presentar a dirección.

---

## Supuesto

Eres directivo de PROEXCA. La dirección evalúa organizar una **misión comercial del sector de economía azul a Europa** (posibles destinos: Noruega, Países Bajos, Portugal).

**Contexto:**

- Canarias tiene capacidades en acuicultura, energía marina renovable, biotecnología marina, turismo azul.
- Tienes 48 horas para producir un briefing que informe la decisión: ¿hacemos la misión? ¿A qué país? ¿Qué subsectores priorizamos?

**Desafío:**

- No tienes tiempo para investigar durante días.
- Necesitas datos actualizados, no estimaciones vagas.
- La recomendación debe ser defendible: evidencia + nivel de confianza.

---

## Preparación

1. **Acceso al agente:** Abre ChatGPT con el agente **Research OS PROEXCA** activo.
2. **Herramientas complementarias:**
   - Deep Research (ChatGPT) activado para búsqueda profunda.
   - NotebookLM (opcional si encuentras documentos largos relevantes).
3. **Contexto PROEXCA:** Ten claro qué capacidades tienen empresas canarias en economía azul (acuicultura offshore, energía marina, biotech, turismo sostenible).

---

## Walkthrough paso a paso

### **PASO 1: Formular el Research Brief con GATE**

**Acción:** Briefea al agente con el patrón GATE (Goal + Ambito + Type + Evidence).

**Prompt específico:**

```
Necesito un briefing del sector de economía azul en Europa para evaluar si organizar una misión comercial.

- **Goal:** Decidir viabilidad de misión + identificar subsectores prioritarios para empresas canarias (acuicultura offshore, energía marina renovable, biotecnología marina, turismo azul).

- **Ambito:** Europa (foco en países con mayor dinamismo: Noruega, Países Bajos, Portugal, España). Subsectores: acuicultura offshore, energías marinas renovables (eólica offshore, mareomotriz), biotecnología marina, turismo azul sostenible. Fuera de scope: pesca tradicional, transporte marítimo comercial.

- **Type:** Briefing sectorial (2-3 páginas) con recomendación sobre viabilidad de misión, país/países prioritarios y subsectores clave.

- **Evidence:** Estándar (datos verificados con fuentes recientes <1 año, nivel de confianza Alta/Media, 60-90 minutos).

¿Por dónde empezamos?
```

**Lo que debes ver:**

El agente responde con un **plan estructurado**:

1. Propone crear primero un **Research Brief** con las preguntas investigables (5-7 preguntas específicas).
2. Identifica fuentes potenciales (Comisión Europea, BlueInvest, asociaciones sectoriales como Aqua-Spark, Ocean Energy Europe).
3. Confirma formato de salida: briefing sectorial con estructura estándar (tamaño mercado → actores → oportunidades Canarias → riesgos → recomendaciones).

**Validación:** Si el agente no propone Research Brief primero, pídelo explícitamente: "Antes de investigar, ayúdame a estructurar un Research Brief con las preguntas investigables."

---

### **PASO 2: Revisar y aprobar Research Brief**

**Acción:** El agente genera el Research Brief. Revísalo y aprueba o ajusta.

**Lo que debes ver:**

El agente produce un documento de 1 página tipo:

```
RESEARCH BRIEF: Economía Azul en Europa

OBJETIVO:
Decidir viabilidad de misión comercial + identificar subsectores y países prioritarios para empresas canarias.

PREGUNTAS INVESTIGABLES:
1. ¿Cuál es el tamaño del mercado de economía azul en Europa y su tasa de crecimiento?
2. ¿Qué subsectores tienen mayor dinamismo? (acuicultura offshore, energía marina, biotech, turismo azul)
3. ¿Qué países lideran en cada subsector? (Noruega, Países Bajos, Portugal, otros)
4. ¿Qué oportunidades concretas hay para empresas canarias con capacidades en estos subsectores?
5. ¿Qué barreras de entrada existen? (regulación, competencia, financiación)
6. ¿Qué eventos clave hay en el calendario 2026? (ferias, conferencias)
7. ¿Qué nivel de competencia tienen empresas canarias frente a actores europeos?

FUENTES PREVISTAS:
- Comisión Europea (Blue Economy Report)
- BlueInvest Platform
- Ocean Energy Europe (asociación energía marina)
- Aqua-Spark, Nordic Aquafarms (acuicultura)
- Eventos: Oceanology International, Aqua Nor

FORMATO SALIDA:
Briefing sectorial 2-3 páginas con recomendación.

TIMELINE:
60-90 minutos.
```

**Validación:** Verifica que las preguntas investigables son específicas (no vagas), que las fuentes son relevantes, y que el formato de salida es claro.

**Ajuste fino (si necesario):**

Si falta algo (ej: "¿qué financiación europea hay disponible?"), pide añadir pregunta: "Incluye también: ¿Qué instrumentos de financiación europea existen para economía azul? (Horizonte Europa, BlueInvest)."

---

### **PASO 3: Investigar con Deep Research**

**Acción:** Solicita al agente que investigue usando Deep Research.

**Prompt específico:**

```
Perfecto. Usa Deep Research para investigar estas preguntas. Necesito datos verificados recientes (<1 año) y quiero que apliques Evidence Matrix: cada afirmación clave debe tener su evidencia y nivel de confianza (Alta/Media/Baja).
```

**Lo que debes ver:**

El agente activa **Deep Research**, que tarda 3-5 minutos buscando fuentes y genera un informe preliminar de 10-15 páginas.

**Resultado del Deep Research:**

- Tamaño de mercado con fuentes (ej: "Economía azul europea: 750.000M€, crecimiento 3,8% anual — Comisión Europea, Blue Economy Report 2025").
- Subsectores clave con datos (ej: "Acuicultura offshore: 180.000M€, crecimiento 6% — Aqua-Spark 2025").
- Países líderes por subsector (ej: "Noruega lidera acuicultura offshore con 40% cuota mercado europea").
- Eventos clave (ej: "Aqua Nor 2026 en Trondheim, Noruega — agosto 2026").

**Validación:** Verifica que Deep Research cite fuentes en cada dato. Si no lo hace, pide al agente: "Incluye las fuentes de cada dato clave en formato inline."

---

### **PASO 4: Validar fuentes y aplicar Evidence Matrix**

**Acción:** Solicita al agente que valide las fuentes del informe Deep Research y aplique Evidence Matrix.

**Prompt específico:**

```
Valida las fuentes del informe Deep Research con framework CRAAP (Currency, Relevance, Authority, Accuracy, Purpose). Luego aplica Evidence Matrix a las afirmaciones clave: quiero ver la tabla con [Afirmación | Evidencia | Nivel de confianza | Fuente].
```

**Lo que debes ver:**

El agente produce una **Evidence Matrix** tipo:

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Economía azul europea: 750.000M€ | Blue Economy Report 2025, CE | Alta | Comisión Europea, 2025 |
| Acuicultura offshore: crecimiento 6% anual | Informe Aqua-Spark, 120 empresas encuestadas | Alta | Aqua-Spark, 2025 |
| Noruega: 40% cuota mercado acuicultura europea | Datos producción Norway Seafood Council | Media | Norway Seafood Council, 2024 |
| Países Bajos: hub de biotech marina (200+ empresas) | Directorio Holland Marine Equipment | Media | HME + LinkedIn, 2025 |
| Canarias: 8 empresas con capacidades en acuicultura offshore | Análisis interno PROEXCA | Alta | PROEXCA, 2026 |

**Validación de fuentes:**

- **Currency:** Todas <1 año ✓
- **Authority:** Comisión Europea, asociaciones sectoriales, gobiernos ✓
- **Accuracy:** Metodología documentada en informes CE y Aqua-Spark ✓
- **Purpose:** Informes sectoriales objetivos, no comerciales ✓

**Detección de sesgos:**

- El agente advierte: "Posible sesgo de disponibilidad: Noruega aparece en muchas fuentes porque es líder visible, pero puede haber oportunidades en países menos documentados (ej: Portugal en turismo azul). Recomiendo verificar también Portugal."

**Validación:** Verifica que cada afirmación clave tiene nivel de confianza y que las fuentes son recientes y fiables.

---

### **PASO 5: Sintetizar en Briefing Sectorial**

**Acción:** Solicita al agente que sintetice en briefing sectorial con formato Executive Memo.

**Prompt específico:**

```
Sintetiza todo en un briefing sectorial de 2-3 páginas con formato Executive Memo:

1. BLUF (3 líneas): conclusión y recomendación (test de 30 segundos).
2. Hallazgos clave (3-5 insights con implicaciones para PROEXCA).
3. Análisis por subsector (acuicultura, energía marina, biotech, turismo azul): tamaño, países clave, oportunidades Canarias.
4. Recomendación con nivel de confianza (Alta/Media/Baja) y justificación.
5. Próximos pasos con timeline.
6. Anexo: Evidence Matrix + fuentes consultadas.
```

**Lo que debes ver:**

El agente produce un **briefing sectorial** tipo:

```
BRIEFING SECTORIAL: ECONOMÍA AZUL EN EUROPA
Fecha: 2026-03-04

===== BLUF =====

RECOMENDACIÓN: Organizar misión comercial de economía azul a Noruega (Trondheim) + Países Bajos (Rotterdam) en Q3 2026, enfocada en acuicultura offshore y biotech marina. Nivel de confianza: ALTA.

JUSTIFICACIÓN: Mercado europeo de 750.000M€ con crecimiento 3,8% anual. Subsectores acuicultura offshore (+6%) y biotech marina (+8%) tienen mayor dinamismo y match con capacidades canarias. Noruega lidera acuicultura, Países Bajos lidera biotech. Timing alineado con Aqua Nor 2026 (agosto, Trondheim).

===== HALLAZGOS CLAVE =====

1. **Mercado dinámico con crecimiento sostenido:** Economía azul europea vale 750.000M€ y crece 3,8% anual (CE 2025). Subsectores prioritarios: acuicultura offshore (180.000M€, +6%), energía marina (45.000M€, +12%), biotech marina (30.000M€, +8%).

   IMPLICACIÓN: Ventana de oportunidad abierta. No es mercado maduro estancado.

2. **Match con capacidades canarias:** 8 empresas canarias tienen capacidades en acuicultura offshore (tecnología jaulas, monitoreo IoT, alimentación). 5 empresas en biotech marina (cosmética, nutracéuticos). 12 empresas en turismo azul sostenible.

   IMPLICACIÓN: Portfolio exportable verificado. No es misión exploratoria, es misión comercial con empresas listas.

3. **Noruega + Países Bajos = mercados prioritarios:** Noruega lidera acuicultura offshore (40% cuota europea, 1.400 empresas). Países Bajos lidera biotech marina (200+ empresas, hub Rotterdam). Ambos países tienen financiación activa (BlueInvest, programas nacionales).

   IMPLICACIÓN: Concentrar esfuerzos en 2 países en vez de dispersar en 5.

4. **Evento clave alineado: Aqua Nor 2026 (agosto, Trondheim):** Feria líder de acuicultura europea, 30.000 visitantes, 900 expositores. Fecha: 18-21 agosto 2026.

   IMPLICACIÓN: Organizar misión antes de Aqua Nor permite briefing presencial + seguimiento en feria.

5. **Barreras manejables:** Competencia alta (empresas noruegas/holandesas establecidas), pero nichos identificados: tecnología IoT para acuicultura offshore (gap documentado en Aqua Nor 2025), biotech para cosmética marina (demanda creciente, poca oferta europea).

   IMPLICACIÓN: No es mercado de entrada fácil, pero nichos validados.

===== ANÁLISIS POR SUBSECTOR =====

**ACUICULTURA OFFSHORE:**
- Tamaño: 180.000M€, crecimiento 6% anual.
- País líder: Noruega (40% cuota europea, 1.400 empresas, concentradas en Trondheim y Bergen).
- Oportunidades Canarias: Tecnología de jaulas offshore, sistemas de monitoreo IoT, alimentación sostenible. 8 empresas canarias con capacidades verificadas.
- Barrera: Competencia alta (empresas noruegas establecidas), pero gap identificado en IoT avanzado.

**BIOTECH MARINA:**
- Tamaño: 30.000M€, crecimiento 8% anual.
- País líder: Países Bajos (200+ empresas, hub Rotterdam). También Alemania (Kiel), Francia (Bretaña).
- Oportunidades Canarias: Biotech para cosmética marina (ingredientes activos), nutracéuticos (Omega-3, colágeno marino). 5 empresas canarias con capacidades verificadas.
- Barrera: Regulación estricta (Novel Foods EU), pero empresas canarias ya cumplen.

**ENERGÍA MARINA RENOVABLE:**
- Tamaño: 45.000M€, crecimiento 12% anual (el más alto).
- Países líderes: Reino Unido (eólica offshore), Portugal (mareomotriz), Francia (eólica flotante).
- Oportunidades Canarias: Limitadas. Canarias tiene capacidades en I+D (PLOCAN, ITC) pero pocas empresas comerciales. Sector para fase posterior.

**TURISMO AZUL SOSTENIBLE:**
- Tamaño: difícil de estimar (parte de turismo general). Tendencia creciente: certificaciones sostenibles, turismo científico.
- Países líderes: Portugal (Algarve), Grecia (islas), España (Mediterráneo).
- Oportunidades Canarias: 12 empresas con oferta turismo azul (buceo científico, avistamiento cetáceos, ecoturismo marino). Mercado maduro, saturado. Prioridad baja para misión comercial.

===== RECOMENDACIÓN =====

**ACCIÓN:** Organizar misión comercial de economía azul a:
1. **Noruega (Trondheim + Bergen)** — foco acuicultura offshore.
2. **Países Bajos (Rotterdam + Den Haag)** — foco biotech marina.

**TIMING:** Q3 2026 (julio-agosto), antes de Aqua Nor 2026 (18-21 agosto, Trondheim).

**SUBSECTORES PRIORITARIOS:**
1. Acuicultura offshore (8 empresas canarias).
2. Biotech marina (5 empresas canarias).

**NIVEL DE CONFIANZA:** ALTA.

**JUSTIFICACIÓN:**
- Datos verificados con fuentes recientes y fiables (CE, Aqua-Spark, Norway Seafood Council).
- Match confirmado entre capacidades canarias y oportunidades de mercado (8+5 empresas listas).
- Timing alineado con evento clave (Aqua Nor 2026).
- Nichos identificados con gaps verificados (IoT acuicultura, cosmética biotech).

**RIESGOS:**
- Competencia alta en ambos mercados (empresas locales establecidas).
- Barrera idiomática (noruego, holandés) para networking profundo.
- Dependencia de financiación europea (BlueInvest) — si cierra convocatoria, viabilidad baja.

**MITIGACIÓN:**
- Pre-matching con empresas noruegas/holandesas antes de misión (vía asociaciones sectoriales).
- Briefing idiomático + intérpretes para reuniones clave.
- Verificar convocatorias BlueInvest antes de confirmar misión.

===== PRÓXIMOS PASOS =====

1. **Semana 1:** Contactar asociaciones sectoriales (Ocean Energy Europe, Aqua-Spark, Norway Seafood Council) para presentar PROEXCA y solicitar apoyo.
2. **Semana 2-3:** Pre-seleccionar 8+5 empresas canarias (acuicultura + biotech) + validar capacidades con fichas técnicas.
3. **Semana 4:** Diseñar agenda de misión (reuniones B2B, visitas empresas, participación Aqua Nor).
4. **Mes 2:** Lanzar convocatoria interna a empresas canarias + briefing preparatorio.
5. **Q3 2026:** Ejecutar misión (julio-agosto).

===== ANEXO: EVIDENCE MATRIX =====

[Tabla Evidence Matrix del PASO 4]

===== FUENTES CONSULTADAS =====

1. Comisión Europea — Blue Economy Report 2025
2. BlueInvest Platform — Base de datos empresas economía azul
3. Aqua-Spark — Global Aquaculture Report 2025
4. Ocean Energy Europe — Marine Energy Market Report 2025
5. Norway Seafood Council — Norwegian Aquaculture Statistics 2024
6. Holland Marine Equipment — Dutch Marine Biotech Directory 2025
7. Análisis interno PROEXCA — Capacidades empresas canarias economía azul (2026)
```

**Validación:** Verifica que el briefing pasa el **test de 30 segundos** (lees el BLUF y ya sabes la conclusión).

---

### **PASO 6: Ajustar y finalizar**

**Acción:** Revisa el briefing y solicita ajustes si necesario.

**Ajustes típicos:**

- **Reducir extensión:** "Acorta el briefing a 2 páginas máximo, mueve el análisis detallado por subsector al anexo."
- **Aumentar rigor en un punto:** "Verifica el dato de '200+ empresas biotech en Países Bajos' con fuente adicional, necesito confianza Alta."
- **Añadir comparativa:** "Incluye una tabla comparativa Noruega vs Países Bajos vs Portugal (tamaño mercado, empresas, eventos, barreras)."

**Prompt de ajuste:**

```
Acorta a 2 páginas máximo. Mueve el análisis detallado por subsector al anexo. Añade una tabla comparativa Noruega vs Países Bajos (tamaño mercado acuicultura/biotech, eventos clave 2026, nivel de competencia).
```

**Lo que debes ver:**

El agente ajusta el briefing según indicaciones y produce la versión final.

---

## Resultado esperado

**Documento final:**

- **Briefing sectorial de 2-3 páginas** (versión completa) o **2 páginas** (versión ejecutiva).
- **BLUF claro** que pasa test de 30 segundos.
- **Recomendación defendible:** acción + justificación + nivel de confianza.
- **Evidence Matrix en anexo** con fuentes verificadas.
- **Listo para presentar a dirección** en reunión o por email.

**Tiempo invertido:** 60-90 minutos (vs 2-3 días con método tradicional).

**Diferencial:**

- No es un informe genérico copiado de internet.
- Es un análisis estructurado con metodología profesional (Research Brief, Evidence Matrix, BLUF).
- Tiene recomendación con nivel de confianza explícito.
- Fuentes verificadas y documentadas.

---

## Errores comunes

### **Error 1: Prompt vago sin GATE**

**Mal:** "Investígame la economía azul en Europa."

**Por qué falla:** El agente no sabe qué investigar (¿todo? ¿qué profundidad?), para qué (¿decisión? ¿contexto?), ni qué formato producir.

**Solución:** Usa siempre GATE (Goal + Ambito + Type + Evidence).

### **Error 2: No solicitar Evidence Matrix**

**Mal:** Aceptas el informe Deep Research sin validar fuentes ni niveles de confianza.

**Por qué falla:** No sabes qué datos son sólidos. Presentas recomendación y alguien pregunta "¿de dónde sale este dato?", no puedes responder.

**Solución:** Solicita explícitamente Evidence Matrix con niveles de confianza.

### **Error 3: No revisar el BLUF**

**Mal:** El briefing empieza con "Introducción: La economía azul es un sector emergente..."

**Por qué falla:** No pasa test de 30 segundos. El lector no sabe la conclusión hasta página 2.

**Solución:** El BLUF debe estar PRIMERO. Conclusión + recomendación en 3 líneas.

### **Error 4: Aceptar datos sin fuente**

**Mal:** El informe dice "El mercado de economía azul vale 750.000M€" sin citar fuente.

**Por qué falla:** No es defendible. Si alguien pregunta "¿quién dice eso?", no tienes respuesta.

**Solución:** Exige que cada dato clave tenga fuente inline (formato: "750.000M€ — CE 2025").

### **Error 5: No definir próximos pasos**

**Mal:** El briefing termina con la recomendación, sin timeline ni acciones concretas.

**Por qué falla:** La recomendación queda en el aire. Nadie sabe qué hacer mañana.

**Solución:** Incluye siempre sección "Próximos pasos" con timeline y acciones (semana 1, semana 2, mes 2).

---

## Conexión con próximas clases

**Siguiente práctica:**

- **P-02:** Análisis de mercado — Chile como destino. Aplicarás Evidence Matrix con mayor profundidad (afirmaciones ↔ evidencias ↔ niveles de confianza por país y sector).

**Qué has aprendido aquí:**

- Ciclo Research OS completo: formular → investigar → validar → sintetizar → recomendar.
- Patrón GATE para briefear al agente.
- Integración Research OS + Deep Research.
- Evidence Matrix para conectar afirmaciones con evidencias.
- Formato Executive Memo con BLUF.

**Próximo nivel:**

- Análisis comparativos de múltiples mercados.
- Notas de decisión con opciones evaluadas.
- Síntesis ejecutiva de documentos complejos.
