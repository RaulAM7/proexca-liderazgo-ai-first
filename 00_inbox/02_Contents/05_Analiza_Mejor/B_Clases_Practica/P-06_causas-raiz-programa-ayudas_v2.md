---
class_id: "P-06"
module_id: "05"
type: practice
title: "Análisis de Causa Raíz con 5 Whys + Ishikawa: Programa de Ayudas con Baja Demanda"
duration_minutes: 30
use_case_ref: "CU-08"
agent_ref: "Problem Solver PROEXCA"
blueprint_version: 2
version: 2
---

# Análisis de Causa Raíz con 5 Whys + Ishikawa: Programa de Ayudas con Baja Demanda

## Objetivo práctico

Al terminar esta clase, habrás aplicado la metodología de análisis de causa raíz (5 Whys + diagrama de Ishikawa) para pasar de síntomas observables a la causa raíz real de un problema complejo, y habrás formulado una propuesta de acción enfocada — todo en una sesión de trabajo con el agente Problem Solver.

**Resultado concreto:**
Un diagrama de Ishikawa con causas categorizadas, análisis de 5 Whys por rama crítica, identificación de causa raíz, y plan de acción específico.

---

## Supuesto (escenario realista)

**Contexto:**
PROEXCA lanza un programa de ayudas a la internacionalización para pymes canarias. Presupuesto: 500.000€. Subvención: hasta 10.000€ por empresa (50% del coste de actividades de internacionalización: misiones, ferias, estudios de mercado, adaptación de producto).

**Meta inicial:**
Apoyar a 50 empresas en el primer año (gasto promedio 10.000€/empresa).

**El problema:**
A 6 meses del lanzamiento, solo 18 empresas han presentado solicitud (36% de la meta). De esas 18, solo 12 están completas y en evaluación. Las otras 6 están en borrador o abandonadas.

**Los síntomas observables:**
1. **Baja asistencia a jornadas informativas**: se organizaron 3 jornadas presenciales en distintas islas. Asistencia promedio: 15 empresas/jornada (esperaban 40).
2. **Formularios abandonados**: el sistema muestra 32 empresas que empezaron el formulario online pero no lo completaron.
3. **Quejas sobre complejidad**: 8 empresas contactaron por teléfono diciendo que el proceso era "demasiado complicado" o "no tengo claro qué documentación necesito".
4. **Comentarios informales**: algunos técnicos de PROEXCA reportan que las empresas dicen "no sabía que existía este programa" o "me enteré tarde".

**La Dirección pregunta:**
"¿Por qué el programa tiene tan baja demanda? ¿Es comunicación? ¿Es el diseño del programa? ¿Es la documentación? Necesitamos llegar a la causa raíz y actuar."

**Tu tarea:**
Aplicar análisis de causa raíz (5 Whys + Ishikawa) para encontrar la causa REAL, no quedarte en síntomas.

---

## Preparación

**Herramienta:**
Agente Problem Solver PROEXCA (ChatGPT con GPT personalizado, Claude Projects con prompt, o similar).

**Lo que necesitas tener claro antes de empezar:**
1. Los síntomas son observables (baja asistencia, formularios abandonados, quejas). La causa raíz NO.
2. 5 Whys te lleva de síntoma a causa profunda preguntando "¿por qué?" repetidamente.
3. Ishikawa (espina de pescado) categoriza causas en dimensiones: Personas, Procesos, Comunicación, Producto (diseño del programa), Entorno, Recursos.
4. Pueden existir múltiples causas raíz. No siempre es "una sola cosa".

**Duración estimada:**
30 minutos (síntomas → 5 Whys → Ishikawa → causa raíz → acción).

---

## Walkthrough paso a paso

### Paso 1: Describir síntomas al agente (5 min)

**Prompt al agente:**

```
Soy directivo de PROEXCA. Lanzamos un programa de ayudas a la internacionalización hace 6 meses. Meta: 50 empresas. Realidad: solo 18 solicitudes (36% de meta).

Los síntomas observables son:
1. Baja asistencia a jornadas informativas (15 empresas vs 40 esperadas por jornada)
2. 32 empresas empezaron formulario online pero lo abandonaron
3. Quejas telefónicas sobre complejidad del proceso y falta de claridad en documentación
4. Comentarios informales: "no sabía que existía" o "me enteré tarde"

Necesito encontrar la causa raíz con metodología estructurada (5 Whys + Ishikawa). El objetivo es identificar QUÉ está fallando realmente para actuar de forma enfocada.

¿Por dónde empezamos?
```

**Lo que debes ver:**

El agente confirma los síntomas y propone empezar con 5 Whys sobre el síntoma principal: "Solo 18 empresas han presentado solicitud (vs 50 esperadas)."

---

### Paso 2: Aplicar 5 Whys (7 min)

**Prompt al agente:**

```
Perfecto. Aplica 5 Whys sobre el síntoma principal: "Solo 18 empresas presentaron solicitud (vs 50 esperadas)."
```

**Lo que debes ver:**

El agente conduce la secuencia de "por qué":

```
SÍNTOMA:
Solo 18 empresas presentaron solicitud (vs 50 esperadas).

WHY 1: ¿Por qué solo 18 empresas presentaron solicitud?
→ Porque muchas empresas no completaron el formulario (32 lo abandonaron).

WHY 2: ¿Por qué abandonaron el formulario?
→ Porque el proceso les pareció complejo o no tenían claro qué documentación necesitaban.

WHY 3: ¿Por qué no tenían claro qué documentación necesitaban?
→ Porque las bases del programa son técnicas, con lenguaje administrativo, y no hay una guía paso a paso clara.

WHY 4: ¿Por qué no hay una guía paso a paso clara?
→ Porque el programa se diseñó desde la perspectiva de cumplimiento normativo (qué debe incluir legalmente), no desde la perspectiva del usuario (cómo lo entiende una pyme sin departamento de internacionalización).

WHY 5: ¿Por qué se diseñó desde cumplimiento normativo y no desde la perspectiva del usuario?
→ Porque el proceso de diseño del programa no incluyó testeo con empresas reales antes del lanzamiento. Se validó internamente (legal, financiero) pero no externamente (usabilidad, claridad).

CAUSA RAÍZ IDENTIFICADA:
El programa se diseñó sin validación externa con el usuario final (pymes), priorizando cumplimiento legal sobre claridad y usabilidad.
```

**Valida con el agente:**

```
¿Esta causa raíz explica los otros síntomas (baja asistencia a jornadas, comentarios "no sabía que existía")?
```

**Lo que debes ver:**

El agente analiza si la causa raíz identificada explica TODOS los síntomas o solo algunos. Si no explica todos, sugiere que puede haber múltiples causas raíz (y por eso necesitas Ishikawa para mapear todas las dimensiones).

---

### Paso 3: Construir diagrama de Ishikawa (10 min)

**Prompt al agente:**

```
Bien. Ahora construye un diagrama de Ishikawa (espina de pescado) para categorizar TODAS las causas posibles del problema "Baja demanda del programa de ayudas".

Usa las categorías estándar: Personas, Procesos, Comunicación, Producto (diseño del programa), Entorno, Recursos.
```

**Lo que debes ver:**

El agente produce un diagrama estructurado:

```
PROBLEMA: Baja demanda del programa de ayudas (18 solicitudes vs 50 esperadas)

CATEGORÍA 1: COMUNICACIÓN
- Las jornadas informativas se hicieron con poca antelación (2 semanas)
- El programa no se promocionó en canales donde están las pymes (newsletters sectoriales, asociaciones empresariales)
- La web de PROEXCA no destaca el programa en home (está en sección "Ayudas" genérica)
- No hubo campaña de emails directos a base de datos de empresas objetivo

CATEGORÍA 2: PRODUCTO (Diseño del programa)
- Las bases son técnicas, lenguaje administrativo, no user-friendly
- No hay guía paso a paso clara de cómo solicitar
- Requisitos de documentación no están explicados con ejemplos
- El formulario online tiene 12 secciones (percibido como largo y complejo)

CATEGORÍA 3: PROCESOS
- No se testeó el proceso de solicitud con empresas reales antes del lanzamiento
- No hay soporte proactivo (chat, línea directa de consultas)
- El sistema no guarda borradores automáticamente (las empresas pierden progreso)
- No hay recordatorios automáticos a empresas que empezaron pero no completaron

CATEGORÍA 4: PERSONAS
- El equipo de PROEXCA no tiene capacidad para hacer seguimiento individual a empresas interesadas
- Las pymes objetivo no tienen departamento de internacionalización ni experiencia en solicitar subvenciones (barrera de entrada alta)

CATEGORÍA 5: ENTORNO
- Coincidió con periodo de incertidumbre económica (empresas aplazando inversiones)
- Otros programas públicos (estatales, UE) compiten por la atención de las mismas empresas

CATEGORÍA 6: RECURSOS
- Presupuesto de comunicación del programa fue bajo (no se contrató agencia, no hubo campaña pagada)
- No se asignó personal adicional para soporte durante el periodo de lanzamiento
```

**Valida con el agente:**

```
¿Estas causas explican los 4 síntomas que observamos? ¿Falta alguna categoría o causa?
```

**Lo que debes ver:**

El agente revisa si las causas del diagrama explican:
1. Baja asistencia a jornadas → SÍ (comunicación tardía, canales inadecuados)
2. Formularios abandonados → SÍ (complejidad del producto, proceso sin soporte)
3. Quejas de complejidad → SÍ (diseño del producto no user-friendly)
4. "No sabía que existía" → SÍ (comunicación insuficiente, canales inadecuados)

---

### Paso 4: Identificar causas raíz prioritarias (5 min)

**Prompt al agente:**

```
Perfecto. Ahora identifica las causas RAÍZ (no síntomas secundarios) del diagrama de Ishikawa. Prioriza por:
- Impacto: si resolvemos esta causa, ¿cuánto mejora el problema?
- Control: ¿está bajo control de PROEXCA?
- Facilidad: ¿podemos actuar sobre esto en los próximos 3 meses?
```

**Lo que debes ver:**

El agente produce una tabla de priorización:

```
| Causa Raíz                                      | Categoría      | Impacto | Control | Facilidad | Prioridad |
|-------------------------------------------------|----------------|---------|---------|-----------|-----------|
| Bases técnicas sin guía user-friendly          | Producto       | Alto    | Alto    | Alta      | 1         |
| Comunicación tardía y canales inadecuados       | Comunicación   | Alto    | Alto    | Alta      | 2         |
| Formulario percibido como complejo (12 secciones)| Producto      | Medio   | Alto    | Media     | 3         |
| Sin testeo previo con usuarios reales           | Procesos       | Alto    | Alto    | Baja*     | 4         |
| Sin soporte proactivo (chat, seguimiento)       | Procesos       | Medio   | Alto    | Media     | 5         |
| Pymes sin experiencia en subvenciones           | Personas       | Medio   | Bajo    | Baja      | 6         |

*Baja facilidad porque ya se lanzó el programa (pero aprendizaje para futuros programas).
```

**Interpretación:**

Las 3 causas raíz prioritarias son:
1. **Bases técnicas sin guía clara** → Producto mal diseñado desde perspectiva del usuario
2. **Comunicación tardía y canales inadecuados** → Las empresas objetivo no se enteraron o se enteraron tarde
3. **Formulario complejo** → Barrera de entrada alta, abandono

---

### Paso 5: Propuesta de acción enfocada (3 min)

**Prompt al agente:**

```
Bien. Ahora propón acciones específicas para las 3 causas raíz prioritarias. Las acciones deben ser concretas, con responsable y plazo.
```

**Lo que debes ver:**

El agente produce un plan de acción:

```
ACCIÓN 1: Crear guía paso a paso user-friendly (Causa raíz 1)
- Qué: Documento de 2 páginas + video de 5 min explicando cómo solicitar, qué documentación, ejemplos reales
- Responsable: Equipo de Comunicación + Asesor técnico
- Plazo: 2 semanas
- Métrica: Reducir formularios abandonados de 32 a <15 en los próximos 2 meses

ACCIÓN 2: Relanzar comunicación en canales adecuados (Causa raíz 2)
- Qué: Campaña de emails directos a base de datos (segmentada por sector), posts en newsletters de asociaciones empresariales, webinar online (no presencial)
- Responsable: Equipo de Comunicación + Relaciones Institucionales
- Plazo: 1 mes (campaña sostenida durante 3 meses)
- Métrica: Aumentar solicitudes de 18 a 35 en los próximos 3 meses

ACCIÓN 3: Simplificar formulario (Causa raíz 3)
- Qué: Reducir de 12 secciones a 6 (fusionar secciones redundantes), añadir tooltips explicativos, guardar borradores automáticamente
- Responsable: Equipo de Desarrollo (IT) + Asesor técnico
- Plazo: 1 mes
- Métrica: Aumentar tasa de completado de formularios de 37% (12/32) a >60%

ACCIÓN 4 (Aprendizaje para futuros programas):
- Qué: Testear diseño de futuros programas con 10 empresas reales ANTES del lanzamiento oficial
- Responsable: Dirección de Programas
- Plazo: Implementar en el próximo programa (Q4 2026)
```

---

## Ajuste fino

### Si el agente identifica causas que NO son raíz:

```
"Baja asistencia a jornadas" no es causa raíz, es síntoma. ¿Cuál es la causa de la baja asistencia?
```

**Lo que debes ver:**

El agente profundiza: "Baja asistencia porque comunicación tardía y canales inadecuados" (ESA es la causa raíz).

### Si las acciones son demasiado genéricas:

```
"Mejorar comunicación" es vago. ¿Qué significa específicamente? ¿Qué canales? ¿Qué mensaje? ¿Qué plazo?
```

**Lo que debes ver:**

El agente especifica: "Campaña de emails directos a 500 empresas de la base de datos, segmentada por sector, con asunto 'Hasta 10.000€ para internacionalizar tu empresa', enviada cada 15 días durante 3 meses."

---

## Resultado esperado

Al terminar esta clase práctica, tienes:

1. **Análisis de 5 Whys** que te lleva de síntoma a causa raíz profunda
2. **Diagrama de Ishikawa** con causas categorizadas en 6 dimensiones
3. **Tabla de priorización** de causas raíz por impacto × control × facilidad
4. **Plan de acción específico** con 3-4 acciones concretas, responsables, plazos y métricas
5. **Aprendizaje para el futuro**: testear con usuarios antes de lanzar

**Este es el diagnóstico completo.** Ahora sabes QUÉ está fallando y QUÉ hacer. Antes de esto, tenías síntomas pero no causas.

---

## Errores comunes

### Error 1: Confundir síntoma con causa raíz

"La causa raíz es que hay formularios abandonados."

**Por qué es error:**
"Formularios abandonados" es un síntoma observable. La causa raíz es POR QUÉ los abandonan (complejidad, falta de claridad, etc.).

**Cómo evitarlo:**
Pregunta "¿por qué?" hasta llegar a algo que ya no tiene "por qué" más profundo. Esa es la raíz.

### Error 2: Parar en el primer "por qué"

"¿Por qué baja demanda? → Porque el formulario es complejo. Ya está."

**Por qué es error:**
No has profundizado. ¿Por qué el formulario es complejo? ¿Por qué no se simplificó antes del lanzamiento? Sigue preguntando.

**Cómo evitarlo:**
Aplicar 5 Whys completos (puede ser 4 o 6, no es mágico, pero no pares en el primero).

### Error 3: Proponer acciones sin priorizar causas

"Vamos a actuar sobre las 10 causas del diagrama de Ishikawa."

**Por qué es error:**
No tienes recursos para actuar sobre todo. Y no todas las causas tienen el mismo impacto.

**Cómo evitarlo:**
Priorizar. Enfocarse en las 3 causas raíz con mayor impacto × control × facilidad.

### Error 4: Acciones genéricas

"Mejorar comunicación. Simplificar proceso."

**Por qué es error:**
No son accionables. ¿Qué significa "mejorar"? ¿Quién lo hace? ¿Cuándo?

**Cómo evitarlo:**
Cada acción debe tener: Qué (específico), Quién (responsable), Cuándo (plazo), Cómo medir (métrica).

### Error 5: No validar si las causas explican TODOS los síntomas

"Ya tenemos la causa raíz: diseño del programa."

**Por qué es error:**
Esa causa puede explicar "formularios abandonados" pero no explica "no sabía que existía" (eso es comunicación).

**Cómo evitarlo:**
Validar que las causas raíz identificadas explican los 4 síntomas observables. Si no, hay más causas raíz que identificar.

---

## Conexión con lo próximo

En la siguiente clase práctica (P-07) aplicarás otra metodología: **Decision Matrix + Cost-Benefit + SCQA** para elegir entre 3 formatos de misión comercial (presencial, híbrida, virtual) y presentar la recomendación al comité de dirección.

Ahí cerrarás el ciclo completo de problem solving: definir → descomponer → diagnosticar → decidir → comunicar.
