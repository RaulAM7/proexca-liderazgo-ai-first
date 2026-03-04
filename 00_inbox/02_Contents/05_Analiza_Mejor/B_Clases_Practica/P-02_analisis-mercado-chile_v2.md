---
module_id: "05"
module_name: "Analiza Mejor"
class_type: "practica"
class_id: "P-02"
title: "Análisis de mercado: Chile como destino"
use_case_id: "CU-02"
agent: "Research OS PROEXCA"
blueprint_version: 2
duration_minutes: 30
status: ready
---

# P-02 — Análisis de mercado: Chile como destino de internacionalización (CU-02)

## Objetivo práctico

Producir una ficha de mercado completa sobre Chile como destino de internacionalización para empresas canarias tech, aplicando Evidence Matrix con niveles de confianza por afirmación y generando una recomendación estructurada con criterios de viabilidad.

**Resultado esperado:** Ficha de mercado de 3-4 páginas con análisis por sector, barreras identificadas, matriz de evidencia, y recomendación sobre viabilidad (Alta/Media/Baja) para diferentes perfiles de empresa.

---

## Supuesto

Eres directivo de PROEXCA. En el último mes, **5 empresas canarias del sector tecnológico** (software, servicios digitales, ciberseguridad) han preguntado por oportunidades en **Chile**.

**Contexto:**

- Chile es un mercado frecuentemente mencionado en LATAM por su estabilidad económica relativa y apertura comercial.
- PROEXCA no ha organizado una misión comercial tech a Chile en los últimos 3 años.
- Necesitas evaluar: ¿es viable? ¿Para qué perfiles de empresa? ¿Qué sectores tech tienen oportunidades reales?

**Desafío:**

- No puedes decir "sí" sin análisis — necesitas datos sobre tamaño de mercado, competencia, barreras.
- Tienes que producir una ficha que sirva tanto para decidir (¿hacemos misión?) como para briefear empresas (¿qué esperar?).
- Necesitas niveles de confianza claros: ¿qué datos son sólidos y cuáles son estimaciones?

---

## Preparación

1. **Acceso al agente:** Abre ChatGPT con el agente **Research OS PROEXCA** activo.
2. **Herramientas complementarias:**
   - Deep Research (ChatGPT) para investigación de mercado.
   - NotebookLM (opcional) si encuentras informes sectoriales de Chile (ej: ICEX, ProChile).
3. **Contexto empresas canarias:** Define perfiles de las 5 empresas:
   - 2 empresas software (desarrollo a medida, SaaS).
   - 1 empresa ciberseguridad (consultoría + SOC).
   - 1 empresa servicios digitales (transformación digital para pymes).
   - 1 empresa EdTech (plataforma e-learning).

---

## Walkthrough paso a paso

### **PASO 1: Briefear al agente con GATE + perfiles empresa**

**Acción:** Define Goal, Ambito, Type, Evidence + perfiles de empresas canarias.

**Prompt específico:**

```
Necesito una ficha de mercado sobre Chile como destino de internacionalización para empresas canarias del sector tecnológico.

- **Goal:** Evaluar viabilidad de Chile para 5 empresas canarias tech (2 software, 1 ciberseguridad, 1 servicios digitales, 1 EdTech). Decidir si organizar misión comercial y qué sectores priorizar.

- **Ambito:** Chile (todo el país, con foco en Santiago como hub tech principal). Sectores tech: software/SaaS, ciberseguridad, transformación digital, EdTech. Fuera de scope: hardware, telecomunicaciones, industria pesada.

- **Type:** Ficha de mercado (3-4 páginas) con:
  1. Datos macro de Chile (PIB, estabilidad, entorno negocio).
  2. Análisis sector tech chileno (tamaño, crecimiento, actores).
  3. Oportunidades por subsector (software, ciberseg, digital, EdTech).
  4. Barreras de entrada (regulación, competencia, cultural).
  5. Evidence Matrix con niveles de confianza.
  6. Recomendación de viabilidad por perfil de empresa.

- **Evidence:** Estándar (datos verificados <1 año, nivel confianza Alta/Media, 60-90 min).

- **Perfiles empresas canarias:**
  1. Software A: desarrollo a medida para sector financiero. 15 empleados. Experiencia España + Portugal.
  2. Software B: SaaS de gestión empresarial para pymes. 8 empleados. Sin experiencia internacional.
  3. Ciberseg: consultoría + SOC (Security Operations Center). 20 empleados. Experiencia España + marruecos.
  4. Servicios digitales: transformación digital para pymes (web, ecommerce, marketing digital). 10 empleados. Sin experiencia internacional.
  5. EdTech: plataforma e-learning para formación profesional. 12 empleados. Clientes en España.

¿Por dónde empezamos?
```

**Lo que debes ver:**

El agente responde con un **plan estructurado**:

1. Propone crear **Research Brief** con preguntas investigables por sección (macro → sector tech → subsectores → barreras).
2. Identifica fuentes: Banco Mundial, ProChile, ICEX Chile, Chile Global Ventures, CCS (Cámara Chilena de Comercio Electrónico).
3. Confirma que aplicará **Evidence Matrix por subsector** (software, ciberseg, digital, EdTech) con niveles de confianza.
4. Confirma que producirá **recomendación de viabilidad diferenciada por perfil** (ej: alta para Software A, media para Software B).

**Validación:** Si el agente no menciona "viabilidad diferenciada por perfil", pídelo explícitamente: "Necesito que la recomendación final evalúe viabilidad por cada perfil de empresa, no una recomendación genérica."

---

### **PASO 2: Revisar Research Brief**

**Acción:** El agente genera Research Brief. Revisa y aprueba.

**Lo que debes ver:**

```
RESEARCH BRIEF: Chile como destino tech para empresas canarias

OBJETIVO:
Evaluar viabilidad de Chile + recomendar subsectores prioritarios + viabilidad por perfil de empresa.

PREGUNTAS INVESTIGABLES:

MACRO:
1. ¿Cuál es el PIB de Chile y su tasa de crecimiento? ¿Estabilidad económica?
2. ¿Qué posición ocupa Chile en rankings de entorno de negocio? (Doing Business, GCI)
3. ¿Qué acuerdos comerciales tiene Chile con UE/España?

SECTOR TECH:
4. ¿Cuál es el tamaño del mercado tech chileno y su tasa de crecimiento?
5. ¿Cuáles son los subsectores tech con mayor dinamismo? (software, ciberseg, digital, EdTech)
6. ¿Quiénes son los actores principales? (empresas locales, competencia internacional)
7. ¿Qué demanda hay de servicios tech en Chile? (sectores compradores: banca, minería, retail, gobierno)

SUBSECTORES:
8. Software/SaaS: ¿Tamaño mercado? ¿Competencia? ¿Oportunidades para desarrollo a medida y SaaS pymes?
9. Ciberseguridad: ¿Demanda? ¿Regulación? ¿Competencia local vs internacional?
10. Servicios digitales (transformación digital pymes): ¿Madurez digital pymes chilenas? ¿Demanda?
11. EdTech: ¿Tamaño mercado educación online? ¿Regulación? ¿Competencia?

BARRERAS:
12. ¿Qué barreras regulatorias existen? (facturación, impuestos, protección datos)
13. ¿Qué barreras competitivas? (empresas chilenas establecidas, gigantes tech USA)
14. ¿Qué barreras culturales/operativas? (idioma, networking, confianza)

FUENTES PREVISTAS:
- Banco Mundial, IMF (macro)
- ProChile, ICEX Chile (sector tech)
- Chile Global Ventures (startups tech)
- CCS Cámara Chilena Comercio Electrónico
- Informes sectoriales: Ciberseguridad (CSIRT Chile), EdTech (Corfo)

FORMATO:
Ficha de mercado 3-4 páginas + Evidence Matrix + recomendación por perfil.

TIMELINE:
60-90 minutos.
```

**Validación:** Verifica que las preguntas cubren macro + sector + subsectores + barreras. Aprueba.

---

### **PASO 3: Investigar con Deep Research**

**Acción:** Solicita investigación con Deep Research, enfatizando Evidence Matrix por subsector.

**Prompt específico:**

```
Perfecto. Usa Deep Research para investigar. Necesito:

1. Datos macro verificados (PIB, crecimiento, rankings).
2. Tamaño mercado tech chileno con fuente verificada.
3. Análisis por subsector (software, ciberseg, digital, EdTech) con datos específicos: tamaño, crecimiento, competencia, demanda.
4. Barreras identificadas con evidencia.
5. Evidence Matrix POR SUBSECTOR: para cada subsector, quiero ver tabla [Afirmación | Evidencia | Nivel confianza | Fuente].

Tiempo: 60-90 min.
```

**Lo que debes ver:**

Deep Research tarda 3-5 minutos y genera informe preliminar de 12-15 páginas con:

- Datos macro (PIB Chile: ~300.000M USD, crecimiento ~2%, ranking Doing Business top 50).
- Mercado tech: ~15.000M USD, crecimiento 8% anual.
- Subsectores con datos:
  - Software/SaaS: 6.000M USD, crecimiento 10%.
  - Ciberseguridad: 800M USD, crecimiento 15% (el más alto).
  - Servicios digitales: 4.000M USD, crecimiento 7%.
  - EdTech: 500M USD, crecimiento 12%.
- Competencia: empresas chilenas (Mercado Libre tech, Cornershop, Betterfly) + gigantes USA (AWS, Microsoft, Google).
- Barreras: regulación protección datos (Ley 19.628), competencia alta en SaaS, confianza en proveedor local vs extranjero.

**Validación:** Verifica que cada dato clave tiene fuente citada.

---

### **PASO 4: Aplicar Evidence Matrix por subsector**

**Acción:** Solicita Evidence Matrix diferenciada por subsector.

**Prompt específico:**

```
Aplica Evidence Matrix por subsector. Quiero 4 tablas (una por subsector: software, ciberseg, digital, EdTech) con formato:

[Afirmación | Evidencia | Nivel confianza | Fuente]

Foco en afirmaciones clave: tamaño mercado, tasa crecimiento, nivel de competencia, oportunidad para empresas canarias, barreras.
```

**Lo que debes ver:**

El agente produce 4 tablas tipo:

**EVIDENCE MATRIX: SOFTWARE / SaaS**

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Mercado software Chile: 6.000M USD | Informe Chile Global Ventures 2025 | Alta | Chile Global Ventures, 2025 |
| Crecimiento 10% anual | Datos ProChile + IDC Chile | Alta | ProChile, 2025 |
| Competencia alta en SaaS pymes (20+ actores locales) | Directorio CCS + análisis mercado | Media | CCS, 2025 |
| Demanda desarrollo a medida sector financiero | 15 bancos chilenos buscan proveedores (LinkedIn + Chile Global) | Media | LinkedIn + Chile Global, 2025 |
| Barrera cultural: preferencia proveedor local vs extranjero | Encuesta CCS a 200 pymes: 65% prefiere proveedor local | Media | CCS, 2024 |

**EVIDENCE MATRIX: CIBERSEGURIDAD**

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Mercado ciberseg Chile: 800M USD | Informe CSIRT Chile 2025 | Alta | CSIRT Chile, 2025 |
| Crecimiento 15% anual (el más alto) | Datos CSIRT + Chile Global | Alta | CSIRT Chile, 2025 |
| Demanda alta: regulación obliga sectores críticos (banca, energía) | Ley 21.459 (2022) sobre ciberseguridad crítica | Alta | Gobierno Chile, 2022 |
| Competencia media: 10 empresas locales, pocos actores internacionales | Directorio CSIRT Chile | Media | CSIRT Chile, 2025 |
| Oportunidad SOC para banca y minería | 8 bancos + 12 mineras buscan SOC externo (observación ferias) | Baja | Observación Cybersecurity Summit Chile 2025 |

**EVIDENCE MATRIX: SERVICIOS DIGITALES (transformación digital pymes)**

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Mercado servicios digitales: 4.000M USD | Estimación CCS + ProChile | Media | CCS, 2025 |
| Madurez digital pymes chilenas: baja (40% sin web propia) | Encuesta CCS a 500 pymes | Alta | CCS, 2024 |
| Demanda transformación digital post-pandemia | Programa Digitaliza tu Pyme (Corfo): 10.000 solicitudes 2024 | Alta | Corfo, 2024 |
| Competencia alta: 200+ agencias digitales en Santiago | Directorio agencias + LinkedIn | Media | LinkedIn, 2025 |
| Barrera: precio — empresas canarias más caras que locales | Comparativa precios: empresa canaria 30% más cara | Baja | Estimación sin fuente verificada |

**EVIDENCE MATRIX: EDTECH**

| Afirmación | Evidencia | Nivel confianza | Fuente |
|-----------|-----------|----------------|--------|
| Mercado EdTech Chile: 500M USD | Informe EdTech Latam + ProChile | Media | EdTech Latam, 2024 |
| Crecimiento 12% anual | Datos EdTech Latam | Media | EdTech Latam, 2024 |
| Demanda formación profesional online (certificaciones tech) | Programa Sence (formación empleados): 80.000 participantes online 2024 | Alta | Sence Chile, 2024 |
| Competencia alta: plataformas USA (Coursera, Udemy) + locales (EducaChile) | Observación mercado | Baja | Observación |
| Regulación: plataformas extranjeras deben registrarse en Sence | Normativa Sence | Alta | Sence, 2024 |

**Validación:** Verifica que cada subsector tiene su matriz con niveles de confianza. Identifica dónde hay **Baja confianza** — esos datos necesitan verificación adicional o marcarse como "estimación".

---

### **PASO 5: Sintetizar en Ficha de Mercado**

**Acción:** Solicita ficha de mercado con estructura clara + recomendación por perfil.

**Prompt específico:**

```
Sintetiza en Ficha de Mercado de Chile (3-4 páginas):

1. BLUF (3 líneas): ¿Es viable Chile? ¿Para quién?
2. Datos macro (PIB, estabilidad, acuerdos comerciales).
3. Análisis sector tech general (tamaño, crecimiento).
4. Análisis por subsector (software, ciberseg, digital, EdTech): tamaño, oportunidades, competencia, barreras.
5. Recomendación de viabilidad POR PERFIL DE EMPRESA (Alta/Media/Baja) con justificación para cada una de las 5 empresas canarias.
6. Próximos pasos.
7. Anexo: Evidence Matrix (las 4 tablas).
```

**Lo que debes ver:**

El agente produce ficha tipo:

```
FICHA DE MERCADO: CHILE — SECTOR TECNOLÓGICO
Fecha: 2026-03-04

===== BLUF =====

VIABILIDAD GENERAL: MEDIA-ALTA. Chile es mercado viable para empresas tech canarias con experiencia internacional y capacidad de competir en precio/diferenciación. Subsectores prioritarios: ciberseguridad (viabilidad ALTA) y software a medida sector financiero (viabilidad ALTA). SaaS pymes y servicios digitales: viabilidad MEDIA (competencia alta, barrera precio). EdTech: viabilidad MEDIA (regulación compleja).

RECOMENDACIÓN: Organizar misión comercial enfocada en ciberseguridad + software financiero. Empresas Software A y Ciberseg: viabilidad ALTA. Software B, Servicios Digitales, EdTech: viabilidad MEDIA (requieren adaptación).

===== DATOS MACRO =====

- **PIB:** 300.000M USD (2024), crecimiento ~2% anual.
- **Población:** 19 millones, concentración Santiago (40%).
- **Estabilidad económica:** Media (inflación controlada ~4%, pero tensiones sociales post-2019).
- **Acuerdos comerciales:** Tratado UE-Chile vigente desde 2003. Sin aranceles para servicios digitales.
- **Entorno de negocio:** Ranking Doing Business: top 50 mundial (mejor de LATAM históricamente). Facilidad registro empresa: 6 días.
- **Idioma:** Español (ventaja para empresas canarias vs competencia USA/Europa no hispanohablante).

**FUENTES:** Banco Mundial 2024, ProChile 2025.

===== SECTOR TECH CHILE =====

- **Tamaño mercado:** 15.000M USD (2024), crecimiento 8% anual.
- **Composición:** Software/SaaS (40%), Servicios digitales (27%), Telecomunicaciones (20%), Ciberseguridad (5%), EdTech (3%), otros (5%).
- **Hub principal:** Santiago (80% empresas tech).
- **Actores clave:** Empresas locales (Mercado Libre tech, Cornershop, Betterfly) + gigantes USA (AWS, Microsoft, Google) + startups (200+ en Chile Global Ventures).
- **Sectores compradores:** Banca (30% demanda tech), Minería (20%), Retail (15%), Gobierno (10%), otros (25%).

**NIVEL CONFIANZA:** Alta (fuentes: Chile Global Ventures 2025, ProChile 2025).

===== ANÁLISIS POR SUBSECTOR =====

**1. SOFTWARE / SaaS**

- **Tamaño:** 6.000M USD, crecimiento 10% anual.
- **Oportunidades:**
  - **Desarrollo a medida sector financiero:** 15 bancos chilenos buscan proveedores para core banking, pagos, compliance. Demanda alta, competencia media (5-6 actores internacionales establecidos).
  - **SaaS para pymes:** Mercado saturado (20+ actores locales: Defontana, Nubox, Buk). Competencia muy alta.
- **Competencia:** Alta en SaaS pymes, Media en desarrollo a medida financiero.
- **Barreras:**
  - Cultural: preferencia proveedor local (65% pymes prefieren local según CCS 2024). Empresas con experiencia internacional tienen ventaja.
  - Precio: empresas extranjeras percibidas como más caras (+30% estimado vs locales).
- **Nivel confianza:** Alta (fuentes: Chile Global Ventures, CCS, ProChile).

**2. CIBERSEGURIDAD**

- **Tamaño:** 800M USD, crecimiento 15% anual (el más alto).
- **Oportunidades:**
  - **SOC (Security Operations Center) para banca y minería:** Ley 21.459 (2022) obliga sectores críticos a tener ciberseguridad robusta. 8 bancos + 12 mineras buscan SOC externo.
  - **Consultoría compliance:** Demanda alta para cumplir regulación.
- **Competencia:** Media. 10 empresas locales, pocos actores internacionales establecidos. Ventana abierta.
- **Barreras:**
  - Regulación: empresas extranjeras deben registrarse en CSIRT Chile.
  - Confianza: sector crítico, necesitan referencias y casos de éxito.
- **Nivel confianza:** Alta (fuentes: CSIRT Chile 2025, Gobierno Chile).

**3. SERVICIOS DIGITALES (transformación digital pymes)**

- **Tamaño:** 4.000M USD, crecimiento 7% anual.
- **Oportunidades:**
  - **Transformación digital pymes:** Madurez digital baja (40% pymes sin web propia según CCS 2024). Programa Digitaliza tu Pyme (Corfo): 10.000 solicitudes 2024.
- **Competencia:** Muy alta. 200+ agencias digitales en Santiago. Mercado fragmentado.
- **Barreras:**
  - Precio: empresas canarias más caras (~30%) que agencias locales (estimación).
  - Diferenciación: difícil justificar precio premium sin propuesta de valor clara.
- **Nivel confianza:** Media (fuentes: CCS, Corfo). Estimación precio sin fuente verificada (confianza BAJA en ese dato).

**4. EDTECH**

- **Tamaño:** 500M USD, crecimiento 12% anual.
- **Oportunidades:**
  - **Formación profesional online:** Programa Sence (formación empleados): 80.000 participantes online 2024. Demanda certificaciones tech (programación, data, ciberseg).
- **Competencia:** Alta. Plataformas USA (Coursera, Udemy) + locales (EducaChile, Platzi).
- **Barreras:**
  - Regulación: plataformas extranjeras deben registrarse en Sence. Proceso burocrático (3-6 meses).
  - Localización: contenido debe adaptarse a contexto chileno (casos, ejemplos, normativa local).
- **Nivel confianza:** Media (fuentes: EdTech Latam 2024, Sence).

===== RECOMENDACIÓN DE VIABILIDAD POR PERFIL =====

**EMPRESA 1: Software A (desarrollo a medida sector financiero)**

- **Viabilidad:** ALTA.
- **Justificación:**
  - Match perfecto: experiencia sector financiero + experiencia internacional (España/Portugal).
  - Demanda verificada: 15 bancos chilenos buscan proveedores desarrollo a medida.
  - Competencia media (5-6 actores), no saturado.
  - Barrera precio manejable con diferenciación (experiencia europea).
- **Recomendación:** Prioridad 1 para misión comercial. Pre-matching con bancos chilenos vía ProChile.

**EMPRESA 2: Software B (SaaS gestión pymes)**

- **Viabilidad:** MEDIA.
- **Justificación:**
  - Mercado existe (SaaS pymes: 6.000M USD).
  - PERO: competencia muy alta (20+ actores locales establecidos: Defontana, Nubox, Buk).
  - Sin experiencia internacional = barrera cultural alta (preferencia proveedor local).
  - Barrera precio: empresas locales más baratas.
- **Recomendación:** Viable SI se diferencia claramente (ej: vertical específica no cubierta: pymes turismo, pymes exportadoras). Requiere adaptación producto + estrategia precio competitiva. No prioridad 1.

**EMPRESA 3: Ciberseg (consultoría + SOC)**

- **Viabilidad:** ALTA.
- **Justificación:**
  - Crecimiento más alto (15% anual).
  - Demanda verificada: Ley 21.459 obliga sectores críticos (banca, minería) a ciberseguridad robusta.
  - Competencia media (10 actores locales, pocos internacionales).
  - Experiencia internacional (España/Marruecos) = ventaja competitiva vs actores locales.
  - Barrera regulatoria manejable (registro CSIRT Chile).
- **Recomendación:** Prioridad 1 para misión comercial. Enfoque banca + minería. Pre-matching vía CSIRT Chile.

**EMPRESA 4: Servicios Digitales (transformación digital pymes)**

- **Viabilidad:** MEDIA-BAJA.
- **Justificación:**
  - Demanda existe (40% pymes sin web, programa Digitaliza tu Pyme con 10.000 solicitudes).
  - PERO: competencia MUY alta (200+ agencias en Santiago).
  - Sin experiencia internacional = barrera cultural.
  - Barrera precio crítica: empresas canarias +30% más caras que locales, difícil justificar.
- **Recomendación:** Viable SI se enfoca en nicho específico (ej: pymes exportadoras que necesitan web + ecommerce internacional, donde experiencia europea es valor). Requiere estrategia precio competitiva. No prioridad 1.

**EMPRESA 5: EdTech (plataforma e-learning)**

- **Viabilidad:** MEDIA.
- **Justificación:**
  - Demanda verificada: Sence 80.000 participantes online, certificaciones tech en demanda.
  - Mercado crecimiento alto (12% anual).
  - PERO: competencia alta (Coursera, Udemy, Platzi).
  - Barrera regulatoria significativa: registro Sence (3-6 meses proceso).
  - Requiere localización contenido (casos chilenos, normativa local).
- **Recomendación:** Viable SI la empresa está dispuesta a invertir en: (1) registro Sence, (2) localización contenido, (3) alianza con institución local (universidad, centro formación). Timing largo (6-12 meses entrada). No prioridad 1 para misión comercial inmediata.

===== RESUMEN VIABILIDAD =====

| Empresa | Subsector | Viabilidad | Prioridad misión |
|---------|-----------|-----------|-----------------|
| Software A (finanzas) | Software a medida | ALTA | 1 |
| Ciberseg | Ciberseguridad | ALTA | 1 |
| Software B (SaaS pymes) | SaaS | MEDIA | 2 |
| EdTech | EdTech | MEDIA | 2 |
| Servicios Digitales | Digital pymes | MEDIA-BAJA | 3 |

===== PRÓXIMOS PASOS =====

**SI DECISIÓN = ORGANIZAR MISIÓN COMERCIAL:**

1. **Semana 1:** Contactar ProChile (Oficina Económica y Comercial de Chile en España) + CSIRT Chile para presentar PROEXCA y solicitar apoyo.
2. **Semana 2:** Pre-seleccionar 2 empresas (Software A + Ciberseg) como prioridad 1. Briefing preparatorio con ambas.
3. **Semana 3-4:** Pre-matching con actores chilenos:
   - Software A → contacto con 5 bancos chilenos vía ProChile.
   - Ciberseg → contacto con banca + minería vía CSIRT Chile.
4. **Mes 2:** Diseñar agenda misión (reuniones B2B, visita Chile Global Ventures, participación evento tech).
5. **Q2 2026:** Ejecutar misión (Santiago, 4-5 días).

**SI DECISIÓN = EVALUAR MÁS:**

1. Verificar dato "precio +30%" (actualmente nivel confianza BAJA). Solicitar cotizaciones comparativas.
2. Contactar empresas canarias que hayan exportado a Chile (si existen) para validar barreras culturales.
3. Explorar programas de financiación ICEX para reducir riesgo empresas.

===== ANEXO: EVIDENCE MATRIX =====

[Incluir las 4 tablas del PASO 4]

===== FUENTES CONSULTADAS =====

1. Banco Mundial — Chile Economic Overview 2024
2. ProChile — Tech Sector Report 2025
3. Chile Global Ventures — Startups & Tech Ecosystem 2025
4. CCS Cámara Chilena Comercio Electrónico — Encuesta Digitalización Pymes 2024
5. CSIRT Chile — Cybersecurity Market Report 2025
6. Gobierno Chile — Ley 21.459 Ciberseguridad Crítica (2022)
7. Corfo — Programa Digitaliza tu Pyme (2024)
8. Sence Chile — Formación Online Report 2024
9. EdTech Latam — Chile EdTech Market 2024
```

**Validación:** Verifica que hay **recomendación diferenciada por perfil** (no genérica), y que cada recomendación tiene justificación con evidencia.

---

### **PASO 6: Ajustar según necesidad**

**Acción:** Solicita ajustes si necesario.

**Ajustes típicos:**

- **Verificar dato débil:** "El dato de 'precio +30%' tiene nivel de confianza BAJA. Busca fuente adicional o márcalo explícitamente como estimación no verificada."
- **Añadir comparativa con otro país:** "Incluye tabla comparativa Chile vs México vs Colombia (tamaño mercado tech, barreras, competencia)."
- **Briefing para empresa específica:** "Extrae un briefing de 1 página solo para la empresa Ciberseg con foco en oportunidades SOC banca/minería."

**Prompt de ajuste:**

```
Marca explícitamente el dato "precio +30%" como [ESTIMACIÓN NO VERIFICADA] con recomendación de verificar con cotizaciones reales antes de tomar decisión.

Añade tabla comparativa Chile vs México (tamaño mercado tech, crecimiento, subsector ciberseg, barreras entrada, nivel competencia).
```

**Lo que debes ver:**

El agente ajusta la ficha y añade:

| Criterio | Chile | México |
|---------|-------|--------|
| Tamaño mercado tech | 15.000M USD | 25.000M USD |
| Crecimiento anual | 8% | 10% |
| Ciberseguridad (tamaño) | 800M USD | 1.500M USD |
| Ciberseguridad (crecimiento) | 15% | 18% |
| Regulación ciberseg | Ley 21.459 (obligatoria sectores críticos) | NOM-151 (obligatoria sector financiero) |
| Competencia ciberseg | Media (10 locales, pocos internacionales) | Alta (30+ locales, muchos internacionales) |
| Barrera entrada | Media (registro CSIRT) | Alta (registro + certificaciones locales) |
| Idioma | Español | Español |
| Estabilidad económica | Media | Media |

**Conclusión comparativa:** Chile es mercado más pequeño que México, pero con menos competencia en ciberseguridad y barrera de entrada más baja. Para empresa Ciberseg sin experiencia LATAM, Chile es mejor entrada (viabilidad ALTA) antes de México (viabilidad MEDIA).

---

## Resultado esperado

**Documento final:**

- **Ficha de mercado de 3-4 páginas** con análisis estructurado.
- **Evidence Matrix por subsector** (4 tablas) con niveles de confianza.
- **Recomendación diferenciada por perfil de empresa** (no genérica).
- **Datos con fuentes verificadas** (nivel confianza Alta/Media).
- **Datos débiles marcados explícitamente** (ej: [ESTIMACIÓN NO VERIFICADA]).
- **Listo para decidir** (¿hacemos misión?) y **briefear empresas** (¿qué esperar?).

**Tiempo invertido:** 60-90 minutos (vs 3-5 días con método tradicional + encargo consultora).

**Diferencial clave:**

- Recomendación diferenciada por perfil — no es "Chile es viable" genérico, es "viable ALTA para Software A y Ciberseg, MEDIA para Software B y EdTech, BAJA para Servicios Digitales" con justificación por cada una.
- Evidence Matrix por subsector — transparencia total sobre qué datos son sólidos y cuáles verificar.

---

## Errores comunes

### **Error 1: Recomendación genérica sin diferenciar perfiles**

**Mal:** "Chile es viable para empresas tech canarias."

**Por qué falla:** No es accionable. No sabes a quién recomendar la misión. Las 5 empresas tienen perfiles diferentes — la viabilidad no es igual para todas.

**Solución:** Exige recomendación diferenciada por perfil con justificación.

### **Error 2: Aceptar estimaciones sin marcarlas**

**Mal:** El informe dice "empresas canarias son 30% más caras" sin fuente, y lo presentas como dato verificado.

**Por qué falla:** Si alguien pregunta "¿de dónde sale ese 30%?", no tienes respuesta. Pierdes credibilidad.

**Solución:** Marca estimaciones sin fuente como [ESTIMACIÓN NO VERIFICADA] y recomienda verificar.

### **Error 3: No aplicar Evidence Matrix por subsector**

**Mal:** Produces ficha con datos agregados, sin desglosar por subsector.

**Por qué falla:** La viabilidad NO es igual para software, ciberseg, digital y EdTech. Necesitas Evidence Matrix diferenciada.

**Solución:** Solicita explícitamente Evidence Matrix por subsector (4 tablas).

### **Error 4: No incluir barreras**

**Mal:** Ficha solo muestra oportunidades, no barreras.

**Por qué falla:** Presentas Chile como "El Dorado tech", empresas llegan y se estrellan con barreras no anticipadas (precio, competencia, regulación).

**Solución:** Sección "Barreras" es obligatoria en ficha de mercado. Siempre incluir.

### **Error 5: No definir próximos pasos según decisión**

**Mal:** Ficha termina con recomendación, sin próximos pasos.

**Por qué falla:** Recomendación queda en el aire. Nadie sabe qué hacer mañana.

**Solución:** Incluye "Próximos pasos SI decisión = SÍ" y "Próximos pasos SI decisión = EVALUAR MÁS".

---

## Conexión con próximas clases

**Siguiente práctica:**

- **P-03:** Síntesis ejecutiva — documento de 60 páginas → executive memo de 2 páginas. Aplicarás técnica 5-3-1 y formato BLUF.

**Qué has aprendido aquí:**

- Evidence Matrix diferenciada por subsector/segmento.
- Recomendación de viabilidad diferenciada por perfil de empresa (no genérica).
- Manejo de datos con diferentes niveles de confianza (Alta/Media/Baja).
- Marcar estimaciones no verificadas explícitamente.
- Análisis comparativo de mercados (Chile vs México).

**Próximo nivel:**

- Síntesis de documentos complejos (de 60 páginas a 2).
- Notas de decisión con múltiples opciones evaluadas (priorizar mercados).
