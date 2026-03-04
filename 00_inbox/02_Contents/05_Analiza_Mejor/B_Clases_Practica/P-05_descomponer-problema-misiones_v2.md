---
class_id: "P-05"
module_id: "05"
type: practice
title: "Descomponer un Problema con Issue Tree MECE: Por Qué las Empresas No Repiten en Misiones"
duration_minutes: 30
use_case_ref: "CU-07"
agent_ref: "Problem Solver PROEXCA"
blueprint_version: 2
version: 2
---

# Descomponer un Problema con Issue Tree MECE: Por Qué las Empresas No Repiten en Misiones

## Objetivo práctico

Al terminar esta clase, habrás aplicado la metodología de Issue Trees MECE para descomponer un problema complejo real de PROEXCA, identificar las ramas prioritarias del problema, formular hipótesis por rama, y diseñar un plan de análisis estructurado — todo en una sesión de trabajo con el agente Problem Solver.

**Resultado concreto:**
Un árbol de problemas MECE visual, con hipótesis priorizadas por rama y un plan de acción para validarlas.

---

## Supuesto (escenario realista)

**Contexto:**
PROEXCA organiza 12 misiones comerciales al año. Cada misión lleva entre 30-50 empresas canarias a mercados internacionales (ferias, B2B, networking). El coste por empresa oscila entre 800€ y 1.500€ dependiendo del destino.

**El problema:**
El departamento de Análisis detecta que solo el **30% de las empresas repiten** en misiones comerciales (es decir, 7 de cada 10 empresas participan una sola vez y no vuelven).

**Por qué importa:**
- Coste de captación alto: si cada empresa solo participa una vez, el esfuerzo comercial y administrativo es constante y creciente.
- Pérdida de tracción: las empresas que repiten son las que mejor aprovechan las misiones (acumulan relaciones, cierran contratos en segundas/terceras visitas).
- Señal de alarma: si no repiten, puede haber un problema estructural con el formato, el valor percibido, o la experiencia.

**La Dirección pregunta:**
"¿Por qué las empresas no repiten? ¿Qué podemos hacer para aumentar la tasa de repetición al 50% en 2 años?"

**Tu tarea:**
Descomponer el problema con un Issue Tree MECE para identificar DÓNDE está el problema antes de proponer soluciones.

---

## Preparación

**Herramienta:**
Agente Problem Solver PROEXCA (ChatGPT con GPT personalizado, Claude Projects con prompt, o similar).

**Lo que necesitas tener claro antes de empezar:**
1. El problema no es "tenemos baja repetición" (eso es el síntoma). El problema es "no sabemos POR QUÉ no repiten".
2. Descomponer significa dividir el problema en dimensiones mutuamente excluyentes (no se solapan) y colectivamente exhaustivas (cubren todo).
3. No buscas soluciones todavía. Primero: entender dónde está el problema. Luego: hipótesis. Luego: soluciones.

**Duración estimada:**
30 minutos (descomposición + hipótesis + plan).

---

## Walkthrough paso a paso

### Paso 1: Definir el problema con claridad (5 min)

**Prompt al agente:**

```
Soy directivo de PROEXCA. Organizamos 12 misiones comerciales al año para empresas canarias. Detectamos que solo el 30% de empresas repiten (7 de cada 10 participan una vez y no vuelven).

El problema: no sabemos por qué no repiten. Necesito descomponer este problema con un árbol MECE para identificar dónde está el problema antes de proponer soluciones.

Ayúdame a clarificar el problema primero: ¿qué información necesitas para empezar la descomposición?
```

**Lo que debes ver:**

El agente te hará preguntas para clarificar el problema:
- ¿Qué resultado exitoso se vería como? (Ej: 50% de repetición en 2 años)
- ¿Qué sabes hasta ahora? (Ej: encuestas post-misión, datos de satisfacción, comentarios informales)
- ¿Qué supuestos tienes? (Ej: asumimos que las empresas que repiten son las que más valor obtienen)
- ¿Hay diferencias por sector, tamaño de empresa, o destino?

**Tu respuesta (ejemplo):**

```
- Resultado exitoso: aumentar tasa de repetición del 30% al 50% en 2 años.
- Lo que sabemos: las encuestas post-misión tienen satisfacción de 7.5/10 promedio. No tenemos datos estructurados de por qué no repiten (nunca lo preguntamos directamente).
- Supuestos: asumimos que si una empresa no repite es porque no vio valor suficiente, pero no sabemos si el problema es coste, resultados, experiencia, o algo más.
- No hemos detectado diferencias claras por sector o destino (pero no lo hemos analizado a fondo).
```

**Lo que debes ver:**

El agente resume el problema claramente y propone empezar la descomposición.

---

### Paso 2: Construir el árbol MECE (Nivel 1) (10 min)

**Prompt al agente:**

```
Perfecto. Ahora ayúdame a construir el árbol MECE para descomponer "Por qué las empresas no repiten en misiones comerciales".

Empieza con las dimensiones principales (nivel 1). Asegúrate de que sean mutuamente excluyentes y colectivamente exhaustivas.
```

**Lo que debes ver:**

El agente propone un árbol de nivel 1 (dimensiones principales). Ejemplo:

```
¿Por qué las empresas NO repiten en misiones comerciales?

1. COSTE
   - El coste es demasiado alto en relación con el valor percibido

2. RESULTADOS
   - No obtuvieron los resultados esperados de la misión

3. EXPERIENCIA DEL PROCESO
   - La experiencia (antes, durante, después) no fue satisfactoria

4. ALTERNATIVAS
   - Encontraron formas más efectivas de internacionalizarse

5. SEGUIMIENTO POST-MISIÓN
   - No hay seguimiento ni incentivos para repetir
```

**Valida con el agente:**

```
¿Estas dimensiones cubren todo el espacio del problema? ¿Hay solapamientos? ¿Falta algo?
```

**Lo que debes ver:**

El agente valida que:
- Las 5 dimensiones NO se solapan (son mutuamente excluyentes).
- Cubren todo el espacio del problema (son colectivamente exhaustivas).
- Si detectas solapamiento, lo ajusta. Si falta algo, lo añade.

---

### Paso 3: Profundizar en ramas críticas (Nivel 2) (5 min)

**Prompt al agente:**

```
Bien. Ahora profundiza en las ramas 2 (RESULTADOS) y 3 (EXPERIENCIA DEL PROCESO) con nivel 2.
```

**Lo que debes ver:**

El agente descompone las ramas seleccionadas:

```
2. RESULTADOS
   2.1. No generaron contactos comerciales de calidad
   2.2. No cerraron contratos ni acuerdos
   2.3. El ROI percibido fue bajo (coste vs beneficio)
   2.4. Las expectativas eran irrealistas desde el inicio

3. EXPERIENCIA DEL PROCESO
   3.1. Proceso de inscripción complejo o largo
   3.2. Comunicación antes de la misión insuficiente (preparación)
   3.3. Organización durante la misión deficiente (logística, agenda)
   3.4. Falta de soporte post-misión (no hay follow-up)
```

**Valida:**

```
¿Estas sub-ramas cubren las dimensiones 2 y 3 completamente?
```

**Lo que debes ver:**

El agente confirma o ajusta.

---

### Paso 4: Identificar ramas prioritarias (5 min)

**Prompt al agente:**

```
Basándote en el árbol MECE, ¿cuáles son las ramas más probables de explicar el problema de baja repetición? Prioriza por:
- Impacto potencial (si esta rama es el problema, ¿qué tan grande es el efecto?)
- Probabilidad (basado en lo que sabemos, ¿qué tan probable es que esta sea la causa?)
- Facilidad de testear (¿podemos validar esta hipótesis rápido?)
```

**Lo que debes ver:**

El agente produce una tabla de priorización:

```
| Rama                          | Impacto | Probabilidad | Facilidad | Prioridad |
|-------------------------------|---------|--------------|-----------|-----------|
| 2.3. ROI percibido bajo       | Alto    | Alta         | Media     | 1         |
| 2.1. Contactos no de calidad  | Alto    | Media        | Alta      | 2         |
| 3.4. Falta de follow-up       | Medio   | Alta         | Alta      | 3         |
| 4. Alternativas más efectivas | Alto    | Media        | Baja      | 4         |
| 1. Coste demasiado alto       | Medio   | Media        | Alta      | 5         |
```

**Interpretación:**
Las 3 ramas prioritarias son:
1. **ROI percibido bajo** (no ven que el coste justifique el beneficio)
2. **Contactos no de calidad** (las reuniones B2B no generan valor)
3. **Falta de follow-up** (no hay recordatorio ni incentivo para repetir)

---

### Paso 5: Formular hipótesis por rama prioritaria (5 min)

**Prompt al agente:**

```
Perfecto. Ahora formula hipótesis testeables para las 3 ramas prioritarias. Las hipótesis deben ser específicas y testeables (no vagas).
```

**Lo que debes ver:**

El agente produce hipótesis específicas:

```
HIPÓTESIS 1 (Rama 2.3 - ROI percibido bajo):
"Las empresas que no repiten no cierran ningún contrato en los 6 meses siguientes a la misión, por lo que perciben el coste (800-1.500€) como pérdida neta."

Prueba killer:
- Encuestar a 20 empresas que no repitieron: ¿cerraste algún contrato derivado de la misión en los 6 meses siguientes? ¿Cuánto facturaste como resultado directo?
- Si >80% responde "cero contratos", hipótesis validada.

HIPÓTESIS 2 (Rama 2.1 - Contactos no de calidad):
"Las empresas reportan que las reuniones B2B no están bien pre-cualificadas: los contactos no son decision-makers o no tienen encaje con su perfil de producto/servicio."

Prueba killer:
- Analizar evaluaciones post-misión de las últimas 3 misiones: ¿qué % de empresas menciona "contactos no relevantes" como problema?
- Entrevistar a 10 empresas: ¿las reuniones B2B fueron con decision-makers? ¿el perfil era adecuado?
- Si >60% confirma falta de encaje, hipótesis validada.

HIPÓTESIS 3 (Rama 3.4 - Falta de follow-up):
"Las empresas que participan en una misión no reciben recordatorios, incentivos, ni invitaciones personalizadas para la siguiente misión. Se olvidan de PROEXCA como opción."

Prueba killer:
- Revisar protocolo de seguimiento post-misión: ¿existe? ¿se ejecuta?
- Preguntar a 10 empresas que no repitieron: ¿recibiste alguna comunicación de PROEXCA después de la misión? ¿te invitaron a la siguiente?
- Si >70% responde "no recibí nada", hipótesis validada.
```

---

## Ajuste fino

### Si el árbol no te convence:

```
Creo que falta una dimensión: las empresas pueden no repetir porque su situación interna cambió (crisis, cambio de estrategia, prioridades). ¿Cómo integramos esto en el árbol?
```

**Lo que debes ver:**

El agente ajusta el árbol añadiendo una dimensión adicional o sub-rama.

### Si las hipótesis son demasiado vagas:

```
La hipótesis "ROI percibido bajo" es vaga. ¿Puedes hacerla más específica y testeable?
```

**Lo que debes ver:**

El agente reformula con números específicos y criterios claros de validación/descarte.

---

## Resultado esperado

Al terminar esta clase práctica, tienes:

1. **Árbol de problemas MECE visual** con 2 niveles (dimensiones principales + sub-ramas críticas)
2. **Tabla de priorización** de ramas por impacto × probabilidad × facilidad
3. **3 hipótesis testeables** específicas para las ramas prioritarias
4. **Plan de pruebas killer** por hipótesis (qué dato probaría/desprobaría cada una)
5. **Próximos pasos claros**: ejecutar pruebas, analizar resultados, recomendar acciones

**Este es el mapa del problema.** Ahora sabes DÓNDE buscar. Antes de esto, no lo sabías.

---

## Errores comunes

### Error 1: Saltar directamente a soluciones

"El problema es que no hacemos follow-up. Propongo un email automatizado cada 3 meses."

**Por qué es error:**
No has validado que el problema sea falta de follow-up. Puede que el problema sea ROI bajo, y el email no cambie nada.

**Cómo evitarlo:**
Descomponer primero. Hipótesis después. Soluciones al final.

### Error 2: Árbol con categorías que se solapan

"Dimensión 1: Coste alto. Dimensión 2: ROI bajo."

**Por qué es error:**
"ROI bajo" puede incluir "coste alto". No son mutuamente excluyentes.

**Cómo evitarlo:**
Validar MECE con el agente. Preguntar: "¿Estas categorías se solapan?"

### Error 3: Hipótesis no testeables

"El problema es que la experiencia no es buena."

**Por qué es error:**
"No es buena" es subjetivo y no testeable. ¿Qué dato probaría o desprobaría esto?

**Cómo evitarlo:**
El agente te empujará a especificar. Ej: "Menos del 40% de empresas reporta satisfacción >8/10 en logística."

### Error 4: No priorizar ramas

"Voy a investigar todas las ramas del árbol."

**Por qué es error:**
Parálisis por análisis. No tienes recursos para investigar todo.

**Cómo evitarlo:**
Priorizar por impacto × probabilidad × facilidad. Empieza con las 3 ramas top. Si las validas/descartas y no encuentras respuesta, vas a las siguientes.

### Error 5: Confundir "tener el árbol" con "tener la respuesta"

"Ya tenemos el árbol MECE. Problema resuelto."

**Por qué es error:**
El árbol es el mapa, no el territorio. Ahora tienes que recorrerlo (testear hipótesis).

**Cómo evitarlo:**
El árbol MECE es Fase 2 del ciclo de problem solving. Faltan: hipótesis (Fase 3), pruebas (Fase 4), recomendación (Fase 5), SCQA (Fase 6).

---

## Conexión con lo próximo

En la siguiente clase práctica (P-06) aplicarás otra metodología: **5 Whys + Ishikawa** para análisis de causa raíz. Contexto: un programa de ayudas con baja demanda donde hay síntomas pero no problema claro.

Luego, en P-07, aplicarás **Decision Matrix + SCQA** para elegir entre 3 formatos de misión comercial y presentar la recomendación al comité.

El ciclo completo de problem solving se construye paso a paso.
