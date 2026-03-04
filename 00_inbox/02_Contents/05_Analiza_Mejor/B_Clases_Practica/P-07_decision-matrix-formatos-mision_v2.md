---
class_id: "P-07"
module_id: "05"
type: practice
title: "Decision Matrix + SCQA: Elegir Formato de Misión Comercial con Estructura"
duration_minutes: 30
use_case_ref: "CU-10"
agent_ref: "Problem Solver PROEXCA"
blueprint_version: 2
version: 2
---

# Decision Matrix + SCQA: Elegir Formato de Misión Comercial con Estructura

## Objetivo práctico

Al terminar esta clase, habrás aplicado la metodología de Decision Matrix multi-criterio con análisis coste-beneficio para tomar una decisión estratégica estructurada, y habrás construido la narrativa SCQA para presentar la recomendación al comité de dirección — cerrando el ciclo completo de problem solving.

**Resultado concreto:**
Una matriz de decisión con criterios ponderados, análisis de sensibilidad, recomendación justificada, y narrativa SCQA lista para presentar.

---

## Supuesto (escenario realista)

**Contexto:**
PROEXCA organiza misiones comerciales para empresas canarias. Históricamente, el formato ha sido **100% presencial**: un grupo de 30-40 empresas viaja al destino durante 4-5 días, con agenda de reuniones B2B, visitas a ferias, networking con distribuidores locales.

**El debate interno:**
Después de la experiencia COVID y el auge de herramientas digitales, el equipo de PROEXCA debate si mantener el formato presencial puro o explorar alternativas:

1. **Presencial puro** (formato tradicional)
2. **Híbrido** (2 días presenciales + 2 días virtuales con seguimiento online)
3. **Virtual puro** (sin viaje físico, todo online durante 1 semana)

**Contexto adicional:**
- El presupuesto de misiones está ajustado (no puede crecer).
- Las empresas piden formatos más flexibles (no todas pueden viajar 5 días).
- Los datos muestran que el impacto comercial real se mide en contratos cerrados 6-12 meses después, no en la experiencia del evento.
- Hay presión interna para innovar, pero también resistencia ("lo presencial es insustituible").

**La Dirección pide:**
"Necesitamos decidir qué formato priorizar para las próximas 6 misiones. Queremos una recomendación estructurada con criterios explícitos, análisis coste-beneficio, y una narrativa clara para presentar al comité."

**Tu tarea:**
Construir una Decision Matrix multi-criterio, evaluar las 3 opciones, recomendar con justificación explícita, y preparar la narrativa SCQA para el comité.

---

## Preparación

**Herramienta:**
Agente Problem Solver PROEXCA (ChatGPT con GPT personalizado, Claude Projects con prompt, o similar).

**Lo que necesitas tener claro antes de empezar:**
1. Una Decision Matrix evalúa opciones con criterios explícitos y ponderados.
2. Los criterios deben ser relevantes para la decisión (no genéricos).
3. Las ponderaciones reflejan qué criterios son más importantes (suman 100%).
4. El análisis de sensibilidad valida si la recomendación cambia si ajustas las ponderaciones.
5. SCQA convierte el análisis en narrativa persuasiva para el comité.

**Duración estimada:**
30 minutos (criterios → matriz → análisis → recomendación → SCQA).

---

## Walkthrough paso a paso

### Paso 1: Definir opciones y criterios (5 min)

**Prompt al agente:**

```
Soy directivo de PROEXCA. Necesitamos decidir el formato para las próximas misiones comerciales. Las opciones son:

1. Presencial puro: 4-5 días en destino, agenda completa de reuniones B2B, visitas, networking.
2. Híbrido: 2 días presenciales + 2 días virtuales con seguimiento online y reuniones por videoconferencia.
3. Virtual puro: Sin viaje físico. 1 semana de evento online con reuniones B2B virtuales, webinars, matchmaking digital.

Contexto:
- Presupuesto ajustado (no puede crecer).
- Empresas piden flexibilidad (no todas pueden viajar 5 días).
- Impacto real se mide en contratos cerrados 6-12 meses después.
- Presión interna por innovar, pero resistencia ("lo presencial es insustituible").

Ayúdame a construir una Decision Matrix multi-criterio con análisis coste-beneficio y recomendación estructurada.

Primero: ¿qué criterios deberíamos usar para evaluar las 3 opciones?
```

**Lo que debes ver:**

El agente propone criterios relevantes:

```
CRITERIOS PROPUESTOS:

1. COSTE (por misión)
   - Coste directo de organización (logística, coordinación, viajes del equipo PROEXCA)
   - Coste para las empresas participantes (viaje, alojamiento, inscripción)

2. IMPACTO COMERCIAL (contratos esperados)
   - Número esperado de contratos cerrados en los 12 meses siguientes
   - Calidad de los contactos B2B generados

3. ESCALABILIDAD (número de empresas)
   - ¿Cuántas empresas pueden participar sin degradar la experiencia?

4. FLEXIBILIDAD (accesibilidad)
   - ¿Qué % de empresas objetivo pueden participar? (algunas no pueden viajar 5 días)

5. VIABILIDAD OPERATIVA (complejidad de organización)
   - Recursos de equipo PROEXCA necesarios
   - Riesgo de ejecución (logística, tecnología, coordinación)

6. SATISFACCIÓN/EXPERIENCIA (percepción de valor)
   - ¿Cómo perciben las empresas el formato?
   - Net Promoter Score (NPS) esperado

¿Estos criterios cubren la decisión? ¿Falta alguno? ¿Alguno sobra?
```

**Tu respuesta (ejemplo):**

```
Perfecto. Los 6 criterios cubren bien la decisión. Ahora necesito ponderarlos. Mi prioridad es:
1. Impacto comercial (lo que realmente importa a largo plazo): 35%
2. Coste (presupuesto ajustado): 25%
3. Flexibilidad (accesibilidad para más empresas): 20%
4. Escalabilidad: 10%
5. Viabilidad operativa: 5%
6. Satisfacción/Experiencia: 5%

Total: 100%
```

**Lo que debes ver:**

El agente confirma las ponderaciones y pasa a construir la matriz.

---

### Paso 2: Construir la Decision Matrix (10 min)

**Prompt al agente:**

```
Perfecto. Ahora construye la Decision Matrix. Evalúa cada opción (Presencial, Híbrida, Virtual) en cada criterio con escala 1-10 (1=muy bajo, 10=muy alto). Usa datos estimados basados en el contexto que te di.
```

**Lo que debes ver:**

El agente produce la matriz:

```
| Criterio                     | Peso | Presencial | Híbrida | Virtual |
|------------------------------|------|------------|---------|---------|
| 1. Impacto comercial         | 35%  | 9          | 7       | 4       |
| 2. Coste (bajo=mejor)        | 25%  | 3          | 6       | 9       |
| 3. Flexibilidad/Acceso       | 20%  | 4          | 7       | 10      |
| 4. Escalabilidad             | 10%  | 5          | 7       | 10      |
| 5. Viabilidad operativa      | 5%   | 6          | 5       | 8       |
| 6. Satisfacción/Experiencia  | 5%   | 9          | 7       | 3       |
|------------------------------|------|------------|---------|---------|
| **SCORE PONDERADO**          |      | **6.30**   | **6.70**| **6.65**|

INTERPRETACIÓN DE SCORES:

PRESENCIAL PURO:
- Máximo impacto comercial (9/10): reuniones cara a cara, networking real, confianza
- Coste muy alto (3/10): viajes, alojamiento, logística cara
- Baja flexibilidad (4/10): solo empresas que pueden viajar 5 días
- Score total: 6.30

HÍBRIDA:
- Impacto comercial medio-alto (7/10): combina presencial (para relaciones clave) + virtual (para seguimiento)
- Coste medio (6/10): reduce viajes pero mantiene presencial
- Flexibilidad media-alta (7/10): más empresas pueden participar (solo 2 días presenciales)
- Score total: 6.70 (GANADORA)

VIRTUAL PURA:
- Impacto comercial bajo (4/10): difícil cerrar contratos sin encuentro presencial
- Coste muy bajo (9/10): sin viajes, solo plataforma digital
- Flexibilidad máxima (10/10): cualquier empresa puede participar
- Score total: 6.65
```

**Valida con el agente:**

```
¿Los scores reflejan el contexto realista de PROEXCA? ¿Alguna justificación parece débil?
```

**Lo que debes ver:**

El agente ajusta si detectas inconsistencias. Ejemplo: si crees que el impacto comercial de híbrida debería ser más alto (8 en vez de 7), lo ajusta y recalcula.

---

### Paso 3: Análisis coste-beneficio por opción (5 min)

**Prompt al agente:**

```
Bien. Ahora haz un análisis coste-beneficio detallado de las 3 opciones. Usa datos estimados:
- Presencial: coste por misión 80.000€ (40 empresas, 2.000€/empresa)
- Híbrida: coste por misión 50.000€ (50 empresas, 1.000€/empresa)
- Virtual: coste por misión 15.000€ (100 empresas, 150€/empresa)

Beneficio: contratos generados x 12 meses. Valor promedio contrato: 30.000€.
```

**Lo que debes ver:**

El agente produce tabla de coste-beneficio:

```
| Opción      | Coste/misión | Empresas | Contratos esperados* | Valor total contratos | ROI        |
|-------------|--------------|----------|----------------------|-----------------------|------------|
| Presencial  | 80.000€      | 40       | 12 (30% de empresas) | 360.000€              | 4.5x       |
| Híbrida     | 50.000€      | 50       | 10 (20% de empresas) | 300.000€              | 6.0x       |
| Virtual     | 15.000€      | 100      | 8 (8% de empresas)   | 240.000€              | 16.0x      |

*Contratos esperados basados en tasa de conversión histórica ajustada por formato.

ANÁLISIS:
- **Presencial**: Máximo impacto por empresa, pero coste alto. ROI bueno (4.5x) pero alcance limitado.
- **Híbrida**: Balance coste-impacto. ROI excelente (6.0x), alcance medio, mantiene calidad de contactos.
- **Virtual**: ROI máximo (16.0x) por bajo coste, pero impacto por empresa muy bajo. Riesgo de "evento genérico sin conversión".
```

---

### Paso 4: Recomendación estructurada (3 min)

**Prompt al agente:**

```
Perfecto. Ahora dame la recomendación estructurada con justificación explícita. Incluye:
1. Opción recomendada
2. Por qué (basado en matriz + coste-beneficio)
3. Riesgos identificados
4. Próximos pasos
```

**Lo que debes ver:**

El agente produce recomendación:

```
RECOMENDACIÓN: Formato HÍBRIDO

JUSTIFICACIÓN:
1. Score más alto en Decision Matrix (6.70 vs 6.30 presencial, 6.65 virtual)
2. Mejor balance coste-impacto: ROI de 6.0x (superior a presencial 4.5x)
3. Mayor alcance: 50 empresas vs 40 presencial (25% más)
4. Mantiene impacto comercial alto (7/10): lo presencial para relaciones clave, lo virtual para seguimiento
5. Flexibilidad: más empresas pueden participar (solo 2 días presenciales vs 5)

RIESGOS IDENTIFICADOS:
- Complejidad operativa: coordinar presencial + virtual requiere más planificación (mitigación: piloto en 1 misión antes de escalar)
- Resistencia interna: el equipo está acostumbrado al formato presencial puro (mitigación: formación y comunicación clara del cambio)
- Riesgo de ejecución tecnológica: la parte virtual depende de plataforma digital estable (mitigación: contratar proveedor con experiencia)

PRÓXIMOS PASOS:
1. Diseñar piloto de formato híbrido en 1 misión (Q2 2026)
2. Medir impacto vs formato presencial (contratos cerrados 12 meses después, NPS, coste)
3. Iterar formato según aprendizajes del piloto
4. Escalar a 6 misiones en 2027 si piloto exitoso
```

---

### Paso 5: Construir narrativa SCQA para el comité (7 min)

**Prompt al agente:**

```
Perfecto. Ahora construye la narrativa SCQA (Situation-Complication-Question-Answer) para presentar esta recomendación al comité de dirección. Debe ser persuasiva, clara, y lista para presentar en 5 minutos.
```

**Lo que debes ver:**

El agente produce narrativa estructurada:

```
NARRATIVA SCQA: Decisión sobre Formato de Misiones Comerciales

---

**SITUATION (Contexto compartido):**

PROEXCA organiza 12 misiones comerciales al año para empresas canarias, con formato 100% presencial (4-5 días en destino). Históricamente, este formato ha generado impacto comercial alto: 30% de empresas cierran contratos en los 12 meses siguientes.

---

**COMPLICATION (Problema o tensión):**

Sin embargo, enfrentamos tres tensiones:

1. **Coste creciente**: El formato presencial cuesta 80.000€/misión. Con presupuesto ajustado, no podemos aumentar el número de misiones ni de empresas participantes.

2. **Accesibilidad limitada**: Solo participan empresas que pueden viajar 5 días (≈40/misión). Muchas pymes con potencial quedan fuera por restricciones de tiempo o coste.

3. **Presión por innovar**: Después de COVID, las empresas piden formatos más flexibles. Hay herramientas digitales probadas para B2B internacional (matchmaking, videoconferencias).

Si mantenemos el formato actual, limitamos impacto. Si vamos 100% virtual, arriesgamos calidad de relaciones.

---

**QUESTION (Pregunta clave):**

¿Qué formato de misión comercial maximiza impacto comercial, alcance y eficiencia de recursos?

---

**ANSWER (Recomendación + Justificación):**

**Recomendamos formato HÍBRIDO: 2 días presenciales + 2 días virtuales.**

**Por qué:**

1. **Mayor ROI**: 6.0x vs 4.5x del formato presencial. Coste 50.000€/misión (vs 80.000€), generando 300.000€ en contratos.

2. **Mayor alcance**: 50 empresas/misión vs 40 presencial (+25%). Más pymes pueden participar (solo 2 días presenciales).

3. **Mantiene impacto comercial**: Score 7/10 en impacto (vs 9/10 presencial, 4/10 virtual). Lo presencial se usa para relaciones clave, lo virtual para seguimiento.

4. **Flexible y escalable**: Reduce barreras de entrada sin sacrificar calidad de contactos.

**Análisis de sensibilidad:**
Incluso si priorizas impacto comercial al 50% (vs 35% actual), híbrida sigue siendo la opción recomendada.

**Riesgos y mitigación:**
- Complejidad operativa → Piloto en 1 misión antes de escalar
- Resistencia interna → Formación del equipo
- Riesgo tecnológico → Contratar proveedor con experiencia

**Próximos pasos:**
1. Diseñar piloto formato híbrido (Q2 2026)
2. Medir impacto vs presencial (contratos, NPS, coste)
3. Escalar a 6 misiones en 2027 si exitoso

**Decisión requerida hoy:**
Aprobar piloto formato híbrido para 1 misión en Q2 2026.

---
```

**Valida:**

```
¿La narrativa es clara? ¿Persuasiva? ¿Lista para presentar al comité?
```

**Lo que debes ver:**

El agente confirma o ajusta según tu feedback. Puedes pedir versión más corta (3 min) o más técnica (añadir datos de benchmarking).

---

## Ajuste fino

### Si quieres analizar sensibilidad de ponderaciones:

```
¿Qué pasa si el comité prioriza coste sobre impacto comercial? Cambia la ponderación a: Coste 40%, Impacto 25%. ¿Cambia la recomendación?
```

**Lo que debes ver:**

El agente recalcula la matriz con nuevas ponderaciones y te dice si la recomendación cambia o se mantiene.

### Si necesitas comparar escenarios (mejor/base/peor caso):

```
¿Qué pasa si el formato híbrido tiene un impacto comercial más bajo de lo esperado (5/10 en vez de 7/10)? ¿Sigue siendo la mejor opción?
```

**Lo que debes ver:**

El agente ajusta el escenario pesimista y recalcula. Te dice si la recomendación es robusta o frágil.

---

## Resultado esperado

Al terminar esta clase práctica, tienes:

1. **Decision Matrix multi-criterio** con 6 criterios ponderados y 3 opciones evaluadas
2. **Análisis coste-beneficio** con ROI por opción
3. **Recomendación estructurada** con justificación explícita basada en datos
4. **Análisis de riesgos** identificados con mitigaciones
5. **Narrativa SCQA** lista para presentar al comité en 5 minutos

**Esta es la decisión defendible.** Tienes criterios explícitos, ponderaciones transparentes, análisis de sensibilidad, y narrativa persuasiva. Cualquier pregunta del comité tiene respuesta estructurada.

---

## Errores comunes

### Error 1: Criterios genéricos o redundantes

"Criterio 1: Calidad. Criterio 2: Excelencia. Criterio 3: Efectividad."

**Por qué es error:**
Son términos vagos que se solapan. No son operacionales.

**Cómo evitarlo:**
Criterios específicos y medibles: "Impacto comercial (contratos cerrados)", "Coste (€/misión)", "Escalabilidad (empresas participantes)".

### Error 2: Ponderaciones sin justificar

"Todos los criterios pesan 16.7% (6 criterios, peso igual)."

**Por qué es error:**
No todos los criterios son igual de importantes. Si el comité prioriza impacto sobre coste, las ponderaciones deben reflejarlo.

**Cómo evitarlo:**
Explicitar qué criterio es más importante y por qué. Validar ponderaciones con stakeholders antes de calcular scores.

### Error 3: Scores sin justificación

"Presencial: 9/10 en impacto. Porque sí."

**Por qué es error:**
El score debe estar justificado con datos o razonamiento explícito.

**Cómo evitarlo:**
"Presencial: 9/10 en impacto porque datos históricos muestran 30% de conversión a contratos vs 8% virtual. Reuniones cara a cara generan confianza."

### Error 4: No hacer análisis de sensibilidad

"Híbrida es la mejor opción. Fin."

**Por qué es error:**
¿Y si cambias las ponderaciones? ¿Sigue siendo la mejor? Si la recomendación es frágil (cambia con pequeños ajustes), necesitas reconocerlo.

**Cómo evitarlo:**
Analizar al menos 1 escenario alternativo (cambiar ponderaciones o scores). Si la recomendación se mantiene, es robusta.

### Error 5: SCQA sin estructura piramidal

"Situation: contexto largo de 5 párrafos. Complication: otro párrafo. Question: una frase. Answer: 'recomendamos híbrida'."

**Por qué es error:**
SCQA no es solo orden (S-C-Q-A). Es estructura piramidal: **Answer primero** (recomendación), luego argumentos, luego detalles.

**Cómo evitarlo:**
En la sección Answer, empieza con la recomendación clara. Luego 3-4 argumentos clave. Luego datos de soporte. Principio de la pirámide.

---

## Conexión con lo próximo

**Has cerrado el ciclo completo de problem solving del Módulo 05:**

- **P-05**: Descomponer problema con Issue Tree MECE (identificar DÓNDE está el problema)
- **P-06**: Análisis de causa raíz con 5 Whys + Ishikawa (identificar POR QUÉ pasa el problema)
- **P-07**: Decision Matrix + SCQA (DECIDIR entre opciones y COMUNICAR al comité)

**Próximos módulos:**

- **Módulo 06 (Dirige Mejor)**: Tomar estas decisiones estructuradas y ejecutarlas con gestión de equipos, proyectos y cultura AI-first.
- **Módulo 07 (Aprende Rápido)**: Sistematizar el aprendizaje continuo con documentación, evaluación y mejora de agentes.

El pensamiento estructurado que aplicaste aquí es la base de todo lo que viene.
