# P-03 — Síntesis ejecutiva de informe complejo (CU-04)

## Objetivo práctico

Sintetizar un documento complejo de 60 páginas en un executive memo de 2 páginas, aplicando la técnica 5-3-1 (5 preguntas esenciales → 3 hallazgos clave → 1 recomendación principal) y formato BLUF, produciendo un documento que pase el "test de 30 segundos".

**Resultado esperado:** Executive memo de 2 páginas listo para Presidencia, con conclusión clara en las primeras 3 líneas y recomendaciones accionables.


## Supuesto

Eres directivo de PROEXCA. La **Presidencia** te pide un **executive memo urgente** para reunión mañana.

**Contexto:**

- Ha llegado el informe de la **Comisión Europea: "EU Trade Policy Review 2026"** (60 páginas).
- Presidencia necesita: ¿Qué significa esto para PROEXCA? ¿Qué oportunidades o riesgos hay para internacionalización de empresas canarias? ¿Qué acciones tomar?
- Tienes **3 horas** antes de la reunión. No tienes tiempo de leer 60 páginas.

**Desafío:**

- Extraer lo relevante para PROEXCA de un documento denso y técnico.
- Producir síntesis que pase el "test de 30 segundos": Presidencia lee 3 líneas y ya sabe la conclusión.
- Incluir recomendaciones accionables, no solo "resumen del informe".


## Preparación

1. **Acceso al agente:** Abre ChatGPT con el agente **Research OS PROEXCA** activo.
2. **Herramientas complementarias:**
   - **NotebookLM:** Si tienes el PDF del informe, cárgalo en NotebookLM primero para resumen preliminar.
   - **Research OS PROEXCA:** Sintetiza el resumen NotebookLM + documento original.
3. **Documento de ejemplo:** Para esta práctica, simularemos el informe "EU Trade Policy Review 2026". Si tienes un documento real (informe, estudio, propuesta), úsalo.

**Nota:** Si no tienes el documento real, puedes solicitar al agente que simule el caso con los puntos clave típicos de un informe de comercio exterior UE.


## Walkthrough paso a paso

### **PASO 1: Cargar documento en NotebookLM (opcional pero recomendado)**

**Acción:** Si tienes el PDF, cárgalo en NotebookLM para resumen preliminar.

**Prompt en NotebookLM:**

```
Resume este documento de 60 páginas en 3-5 páginas, enfocándote en:
1. Cambios clave en política comercial UE.
2. Nuevos acuerdos comerciales o negociaciones.
3. Prioridades sectoriales.
4. Implicaciones para PYMEs europeas.
5. Instrumentos de apoyo a internacionalización.
```

**Lo que debes ver:**

NotebookLM genera resumen de 3-5 páginas con puntos clave extraídos del documento original.

**Validación:** Lee el resumen NotebookLM — verifica que captura los puntos relevantes. Si está demasiado técnico o genérico, ajusta el prompt.


### **PASO 2: Briefear al agente Research OS con objetivo ejecutivo**

**Acción:** Brief al agente con el objetivo específico de Presidencia.

**Prompt específico:**

```
Necesito sintetizar el informe "EU Trade Policy Review 2026" (60 páginas) en un executive memo de 2 páginas para Presidencia de PROEXCA.

- **Goal:** Informar a Presidencia sobre qué significa este informe para PROEXCA: oportunidades/riesgos para internacionalización de empresas canarias + acciones recomendadas.

- **Ambito:** Foco en:
  1. Cambios en política comercial UE que afecten a PYMEs.
  2. Nuevos acuerdos comerciales relevantes (mercados prioritarios para Canarias: LATAM, África, Asia).
  3. Instrumentos de financiación o apoyo a internacionalización.
  4. Sectores estratégicos mencionados (tech, renovables, agroalimentario, economía azul).

- **Type:** Executive Memo formato BLUF:
  1. BLUF (3 líneas): conclusión + recomendación (test 30 segundos).
  2. Hallazgos clave (3-5 insights con implicaciones para PROEXCA).
  3. Recomendaciones accionables (qué hacer, timeline).
  4. Anexo: puntos técnicos si necesarios.

- **Evidence:** Estándar (citas al informe original por sección/página cuando sea relevante).

Tengo el resumen NotebookLM [PEGAR RESUMEN SI LO TIENES] o puedes trabajar directamente con puntos clave del informe [SI SIMULAS].

Aplica técnica 5-3-1: 5 preguntas esenciales → 3 hallazgos clave → 1 recomendación principal.
```

**Lo que debes ver:**

El agente responde con un plan:

1. Identifica las **5 preguntas esenciales** que Presidencia necesita responder:
   - ¿Qué cambios clave en política comercial UE?
   - ¿Qué nuevos mercados/acuerdos son relevantes para Canarias?
   - ¿Qué sectores son prioritarios?
   - ¿Qué instrumentos de apoyo nuevos hay?
   - ¿Qué acciones debe tomar PROEXCA?

2. Confirma que extraerá **3 hallazgos clave** (no 20 puntos, solo los 3 que importan).

3. Confirma que producirá **1 recomendación principal** con acciones concretas.

**Validación:** Si el agente no menciona técnica 5-3-1, recuérdasela explícitamente: "Usa técnica 5-3-1: no quiero resumen completo del informe, quiero 3 hallazgos clave y 1 recomendación principal."


### **PASO 3: Generar executive memo (primera versión)**

**Acción:** El agente genera executive memo aplicando 5-3-1 + BLUF.

**Lo que debes ver:**

El agente produce un documento tipo:

```
EXECUTIVE MEMO: EU TRADE POLICY REVIEW 2026
Para: Presidencia PROEXCA
De: [Tu nombre]
Fecha: 2026-03-04

===== BLUF =====

CONCLUSIÓN: La nueva política comercial UE prioriza LATAM y África con acuerdos comerciales acelerados + instrumentos financiación reforzados (Global Gateway 300.000M€). Sectores prioritarios: tech verde, agroalimentario sostenible, economía azul.

RECOMENDACIÓN PRINCIPAL: Alinear estrategia PROEXCA 2026-2027 con prioridades UE: (1) Misiones comerciales LATAM (México, Chile, Brasil) con foco tech verde + agroalimentario. (2) Solicitar financiación Global Gateway para proyectos empresas canarias. (3) Briefing urgente a empresas sectores estratégicos sobre nuevos acuerdos.

NIVEL CONFIANZA: Alta (basado en informe oficial CE 2026).

===== HALLAZGOS CLAVE =====

**HALLAZGO 1: UE acelera acuerdos comerciales con LATAM y África — ventana de oportunidad 2026-2028**

**EVIDENCIA (del informe, sección 2.3, p.18-22):**
- Acuerdo UE-México: actualizado 2026, entrada vigor prevista Q3 2026. Nuevo capítulo PYMEs (simplificación trámites, certificación origen digital).
- Acuerdo UE-Mercosur: negociación fase final, firma prevista 2026. Sectores prioritarios: agroalimentario, tech.
- África: nueva asociación UE-Unión Africana con foco economía verde. Marruecos, Senegal, Kenia como países piloto.

**IMPLICACIÓN PARA PROEXCA:**
- Timing crítico: ventana 2026-2028 para posicionar empresas canarias en nuevos mercados antes de saturación.
- Canarias tiene ventaja geográfica (hub LATAM-África) y sectores alineados (agroalimentario, renovables).
- Si PROEXCA NO actúa en 2026, perderá ventaja first-mover vs otras regiones españolas (Cataluña, Madrid ya activadas).

**HALLAZGO 2: Global Gateway refuerza financiación a internacionalización con 300.000M€ (2026-2030)**

**EVIDENCIA (del informe, sección 4.1, p.35-40):**
- Global Gateway: programa UE de inversión internacional, presupuesto 300.000M€ para 2026-2030.
- Prioridades: infraestructura verde, transición digital, sanidad, educación.
- Mecanismo PYMEs: línea específica 30.000M€ para PYMEs europeas que participen en proyectos Global Gateway en países terceros.
- Ventanilla abierta: primeras convocatorias Q2 2026.

**IMPLICACIÓN PARA PROEXCA:**
- Financiación masiva disponible para empresas canarias que quieran internacionalizarse en mercados prioritarios.
- Sectores canarios alineados: renovables (energía solar, eólica), tech (digitalización), agroalimentario sostenible, economía azul (acuicultura).
- Barrera: PYMEs canarias NO conocen Global Gateway (bajo awareness). PROEXCA debe briefear urgentemente.

**HALLAZGO 3: Sectores estratégicos UE 2026 = sectores estratégicos Canarias (match perfecto)**

**EVIDENCIA (del informe, sección 3.2, p.28-32):**
- Sectores prioritarios política comercial UE 2026:
  1. Tech verde (renovables, movilidad sostenible, eficiencia energética).
  2. Agroalimentario sostenible (ecológico, trazabilidad, seguridad alimentaria).
  3. Economía azul (acuicultura sostenible, energía marina, biotecnología marina).
  4. Servicios digitales (ciberseguridad, cloud, IA aplicada).

**IMPLICACIÓN PARA PROEXCA:**
- Alineación perfecta con capacidades exportables de Canarias.
- Canarias tiene 200+ empresas en estos sectores (según análisis PROEXCA 2025).
- Oportunidad: posicionar Canarias como región líder en sectores estratégicos UE para LATAM y África.

===== RECOMENDACIONES ACCIONABLES =====

**RECOMENDACIÓN 1: Alinear plan misiones comerciales 2026-2027 con prioridades UE**

**ACCIONES:**
1. **Q2 2026:** Organizar misiones comerciales a:
   - México (aprovechando nuevo acuerdo UE-México, foco tech verde + agroalimentario).
   - Chile (acuerdo UE-Chile vigente, foco economía azul + renovables).
   - Marruecos (asociación UE-África, foco renovables + agroalimentario).
2. **Sectores prioritarios por misión:**
   - México: tech verde (renovables, movilidad eléctrica) + agroalimentario ecológico.
   - Chile: economía azul (acuicultura) + renovables (energía solar).
   - Marruecos: renovables (solar, eólica) + agroalimentario (trazabilidad, export).

**TIMELINE:** Lanzar convocatorias misiones en marzo 2026, ejecutar Q2-Q3 2026.

**RECOMENDACIÓN 2: Lanzar programa briefing Global Gateway para empresas canarias**

**ACCIONES:**
1. **Semana 1 (marzo):** Crear briefing ejecutivo Global Gateway (2 páginas): qué es, cómo solicitar, sectores prioritarios, calendario convocatorias.
2. **Semana 2-3:** Webinar informativo para 200+ empresas sectores estratégicos. Invitar ponente Comisión Europea (DG INTPA).
3. **Mes 2 (abril):** Servicio de apoyo a solicitudes: ayudar empresas canarias a preparar propuestas Global Gateway (partnership con consultoras especializadas UE).

**OBJETIVO:** 10-15 empresas canarias con propuestas Global Gateway presentadas en Q2 2026.

**RECOMENDACIÓN 3: Posicionar Canarias como hub UE-LATAM-África en sectores estratégicos**

**ACCIONES:**
1. **Q2 2026:** Elaborar documento de posicionamiento "Canarias: Hub Europeo para Sectores Estratégicos en LATAM y África" (20 páginas con datos, casos éxito, capacidades).
2. **Q3 2026:** Presentar documento en Bruselas (DG TRADE, DG INTPA, Comité Regiones UE).
3. **Q4 2026:** Evento internacional en Canarias: "EU-LATAM-Africa Green & Blue Economy Summit" — reunir empresas europeas, latinoamericanas y africanas + instituciones UE.

**OBJETIVO:** Posicionar Canarias en mapa institucional UE como región clave para ejecución política comercial europea en LATAM/África.

===== PRÓXIMOS PASOS INMEDIATOS =====

| Acción | Responsable | Timeline |
|--------|-------------|----------|
| Aprobar alineación estratégica con prioridades UE | Presidencia | Esta semana |
| Diseñar plan misiones 2026 (México, Chile, Marruecos) | Área Internacionalización | Semana 1-2 marzo |
| Crear briefing Global Gateway + lanzar webinar | Área Comunicación + Int. | Semana 2-4 marzo |
| Contactar DG TRADE y DG INTPA en Bruselas | Presidencia + Relaciones Institucionales | Marzo 2026 |
| Lanzar convocatorias misiones comerciales | Área Internacionalización | Finales marzo 2026 |

===== RIESGOS =====

1. **Timing:** Si PROEXCA no actúa en Q2 2026, otras regiones españolas (Cataluña, Madrid) captarán ventaja first-mover en nuevos acuerdos.
2. **Awareness bajo:** PYMEs canarias NO conocen Global Gateway. Sin briefing urgente, perderán convocatorias Q2 2026.
3. **Capacidad interna:** Ejecutar 3 misiones + programa Global Gateway + evento internacional requiere refuerzo temporal (2-3 personas) en Área Internacionalización.

===== ANEXO: PUNTOS TÉCNICOS DEL INFORME =====

**Acuerdo UE-México (detalle):**
- Capítulo PYMEs (nuevo): simplificación certificación origen (digital), ventanilla única, acceso a bases datos compradores mexicanos.
- Sectores liberalizados: servicios digitales, energías renovables, agroalimentario ecológico.
- Entrada vigor: prevista Q3 2026 (ratificación parlamentos pendiente).

**Global Gateway (detalle):**
- Presupuesto: 300.000M€ (2026-2030).
- Línea PYMEs: 30.000M€ (10% del total).
- Mecanismo: blending (50% grants UE + 50% financiación privada).
- Sectores: infraestructura verde, digital, sanidad, educación.
- Países prioritarios: LATAM (México, Brasil, Chile), África (Marruecos, Senegal, Kenia), Asia-Pacífico (Vietnam, Indonesia).

**Sectores estratégicos UE (detalle):**
- Tech verde: renovables (solar, eólica, hidroeléctrica), movilidad sostenible (eléctrica, hidrógeno), eficiencia energética.
- Agroalimentario: ecológico certificado, trazabilidad blockchain, seguridad alimentaria, reducción huella carbono.
- Economía azul: acuicultura sostenible offshore, energía marina (eólica offshore, mareomotriz), biotecnología marina (cosmética, nutracéuticos).
- Servicios digitales: ciberseguridad, cloud soberano europeo, IA aplicada a industria, e-government.

===== FUENTE =====

Comisión Europea — EU Trade Policy Review 2026 (60 páginas). Documento oficial, publicado febrero 2026.
```

**Validación del test de 30 segundos:**

Lee solo el **BLUF** (primeras 3 líneas). ¿Sabes ya la conclusión y la recomendación principal?

✅ **SÍ:** Pasa el test.
❌ **NO:** El BLUF no es suficientemente claro. Necesita reescritura.


### **PASO 4: Validar que pasa el test de 30 segundos**

**Acción:** Verifica que el BLUF comunica conclusión + recomendación en 3 líneas.

**Test:**

1. Tapa todo menos el BLUF.
2. Lee solo esas 3 líneas.
3. Pregunta: "¿Sé ya qué hacer?" "¿Entiendo la conclusión sin leer el resto?"

**Si NO pasa el test:**

**Prompt de ajuste:**

```
El BLUF no pasa el test de 30 segundos. Reescríbelo para que en 3 líneas esté claro:
1. Cuál es la conclusión principal del informe para PROEXCA.
2. Cuál es la acción recomendada (la MÁS importante, no 5 acciones).
3. Por qué es urgente o relevante.

Formato: [Conclusión]. [Recomendación]. [Urgencia/relevancia].
```

**Lo que debes ver:**

El agente reescribe el BLUF tipo:

```
BLUF:

La UE acelera acuerdos comerciales con LATAM y África + refuerza financiación (Global Gateway 300.000M€) en sectores donde Canarias tiene capacidades (tech verde, agroalimentario, economía azul). RECOMENDACIÓN: Alinear estrategia PROEXCA 2026 con prioridades UE: misiones comerciales México/Chile/Marruecos en Q2 2026 + briefing urgente empresas sobre Global Gateway. URGENCIA: Ventana 2026-2028 es crítica — si no actuamos ya, perdemos ventaja first-mover vs otras regiones.
```

**Validación:** Ahora pasa el test. Lees 3 líneas y ya sabes qué hacer.


### **PASO 5: Verificar que hallazgos tienen implicaciones explícitas**

**Acción:** Revisa que cada hallazgo incluye **IMPLICACIÓN PARA PROEXCA** (no solo "qué dice el informe").

**Error común:**

Hallazgo sin implicación:

```
HALLAZGO 1: UE acelera acuerdos con LATAM.

EVIDENCIA: Acuerdo UE-México 2026, UE-Mercosur en negociación.

[FIN DEL HALLAZGO]
```

**Problema:** OK, ¿y? ¿Qué significa eso para PROEXCA? Falta la implicación.

**Correcto:**

```
HALLAZGO 1: UE acelera acuerdos con LATAM.

EVIDENCIA: Acuerdo UE-México 2026, UE-Mercosur en negociación.

IMPLICACIÓN PARA PROEXCA:
- Timing crítico: ventana 2026-2028 para posicionar empresas canarias.
- Si no actuamos en 2026, perdemos ventaja first-mover.
```

**Validación:** Cada hallazgo debe tener sección **"IMPLICACIÓN PARA PROEXCA"**. Si falta, pide añadirla:

**Prompt:**

```
Revisa los 3 hallazgos. Cada uno debe tener sección "IMPLICACIÓN PARA PROEXCA" que responda: ¿Qué significa esto para PROEXCA? ¿Qué oportunidad o riesgo hay? ¿Qué pasa si no actuamos?
```


### **PASO 6: Ajustar extensión si es necesario (máximo 2 páginas)**

**Acción:** Verifica extensión. Si supera 2 páginas (versión ejecutiva), ajusta.

**Prompt de ajuste:**

```
Reduce a 2 páginas máximo. Estructura:
- BLUF (3 líneas).
- Hallazgos clave (3 hallazgos, máximo 5 líneas cada uno).
- Recomendaciones (3 recomendaciones, máximo 4 líneas cada una).
- Próximos pasos (tabla).
- Mueve "Anexo: Puntos técnicos" a documento separado (no incluir en memo ejecutivo).
```

**Lo que debes ver:**

El agente condensa el memo a 2 páginas. El anexo técnico se separa como documento adicional opcional.


## Resultado esperado

**Documento final:**

- **Executive memo de 2 páginas** (versión ejecutiva) + **anexo técnico opcional** (2-3 páginas).
- **BLUF claro:** Pasa test de 30 segundos.
- **3 hallazgos clave** con implicaciones explícitas para PROEXCA.
- **1 recomendación principal** desglosada en 3 acciones concretas con timeline.
- **Próximos pasos inmediatos** en formato tabla (acción, responsable, timeline).
- **Listo para Presidencia** — puede leerlo en 3 minutos y decidir.

**Tiempo invertido:** 90 minutos (vs imposible leer 60 páginas en 3 horas + sintetizar).

**Diferencial clave:**

- No es un resumen del informe (eso lo hace NotebookLM).
- Es una **síntesis ejecutiva con implicaciones y recomendaciones** para PROEXCA.
- Técnica 5-3-1: de 60 páginas a 3 hallazgos y 1 recomendación principal.
- Formato BLUF: conclusión primero, detalles después.


## Errores comunes

### **Error 1: Resumen en vez de síntesis ejecutiva**

**Mal:** El memo resume el informe página por página ("en la sección 1 dice X, en la sección 2 dice Y").

**Por qué falla:** Presidencia no necesita resumen, necesita: ¿qué significa esto para PROEXCA? ¿qué hacer?

**Solución:** Técnica 5-3-1. No resumas todo, extrae 3 hallazgos clave y 1 recomendación principal.

### **Error 2: BLUF al final (no al principio)**

**Mal:** El memo empieza con "Introducción" o "Contexto del informe", y la conclusión está en página 2.

**Por qué falla:** No pasa test de 30 segundos. Presidencia tiene que leer 2 páginas para saber la conclusión.

**Solución:** BLUF PRIMERO. Conclusión + recomendación en las primeras 3 líneas.

### **Error 3: Hallazgos sin implicaciones**

**Mal:** "Hallazgo 1: La UE firma acuerdo con México." [FIN]

**Por qué falla:** OK, ¿y? Falta responder "¿qué significa eso para PROEXCA?"

**Solución:** Cada hallazgo debe tener sección "IMPLICACIÓN PARA PROEXCA".

### **Error 4: Recomendaciones vagas**

**Mal:** "Recomendación: aprovechar oportunidades en LATAM."

**Por qué falla:** No es accionable. ¿Cómo? ¿Cuándo? ¿Quién?

**Solución:** Recomendaciones con acciones concretas, responsables y timeline.

### **Error 5: Memo de 5 páginas**

**Mal:** El memo tiene 5 páginas porque incluyes todos los detalles.

**Por qué falla:** Presidencia no tiene tiempo de leer 5 páginas. Necesita 2 páginas máximo.

**Solución:** Memo ejecutivo 2 páginas. Detalles técnicos → anexo separado opcional.


## Conexión con próximas clases

**Siguiente práctica:**

- **P-04:** Nota de decisión — priorizar mercados LATAM. Aplicarás options memo con múltiples opciones evaluadas, Evidence Matrix comparativa, y recomendación defendible.

**Qué has aprendido aquí:**

- Técnica 5-3-1: de 60 páginas a 3 hallazgos y 1 recomendación.
- Formato BLUF: conclusión primero (test 30 segundos).
- Implicaciones explícitas: no solo "qué dice el informe", sino "qué significa para PROEXCA".
- Integración NotebookLM + Research OS: músculo (resumen) + cerebro (síntesis con implicaciones).

**Próximo nivel:**

- Notas de decisión con múltiples opciones evaluadas (options memo).
- Análisis comparativo con criterios ponderados.
- Recomendación con nivel de confianza y justificación.
