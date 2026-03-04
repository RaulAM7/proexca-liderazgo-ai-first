# Pensamiento Basado en Hipotesis (Hypothesis-Driven Thinking)

## Que es el Pensamiento Basado en Hipotesis

El pensamiento basado en hipotesis es un enfoque analitico que prioriza la formulacion rapida de una respuesta provisional ("hipotesis") y el diseño de pruebas especificas para validarla o refutarla, en lugar de recopilar exhaustivamente todos los datos posibles antes de llegar a una conclusion.

Es el metodo de trabajo estandar en consultoria estrategica (McKinsey lo llama "hypothesis-driven problem solving") y en investigacion cientifica. La filosofia: formula una hipotesis inteligente lo antes posible, y diseña pruebas para confirmarla o descartarla rapidamente.

**Pensamiento basado en hipotesis vs otros enfoques:**

| Enfoque | Proceso | Cuando usarlo | Riesgo |
|---------|---------|---------------|--------|
| **Basado en hipotesis** | Hipotesis → Diseño prueba → Test → Iterar | Tiempo limitado, problema complejo, multiples caminos posibles | Sesgo de confirmacion (buscar solo datos que confirmen) |
| **Exhaustivo/Data-driven** | Recopilar TODOS los datos → Analizar → Conclusion | Tiempo ilimitado, datos baratos, problema critico sin margen error | Paralisis por analisis, coste alto, lentitud |
| **Intuitivo** | Experiencia → Decision rapida | Problema ya conocido, experto con track record, contexto familiar | Puntos ciegos, no escalable, dificil de comunicar |

En contextos empresariales y organizacionales reales, casi nunca tienes tiempo/recursos para ser exhaustivo. El pensamiento basado en hipotesis maximiza aprendizaje por unidad de esfuerzo.

## Cuando Usar Pensamiento Basado en Hipotesis

**Usa hipotesis cuando:**
- El tiempo es limitado (tienes que presentar recomendacion en 2 semanas, no 6 meses)
- El problema es complejo con muchas dimensiones (sin hipotesis, no sabes ni por donde empezar)
- Los datos son caros o dificiles de obtener (no puedes "analizar todo")
- Hay multiples caminos de investigacion posibles (necesitas priorizar)
- Ya tienes intuicion o experiencia sobre el problema (aprovecha ese conocimiento)

**NO uses hipotesis cuando:**
- El problema es simple y la causa es obvia (no necesitas estructura compleja)
- Tienes que ser exhaustivo por requisito legal/normativo (auditoria, compliance)
- No hay absolutamente ningun conocimiento previo (contexto totalmente nuevo donde hipotesis seria adivinar ciegamente)

## El Concepto de "Respuesta Dia 1" (Day 1 Answer)

En McKinsey, los consultores son entrenados a tener una "Day 1 Answer" — la mejor respuesta que puedes dar el primer dia del proyecto, con la informacion limitada que tienes.

**No es:**
- Una adivninanza aleatoria
- La respuesta final
- Una excusa para no investigar

**Es:**
- Tu mejor hipotesis inicial basada en logica, experiencia, y señales preliminares
- Un punto de partida para estructurar la investigacion
- Una apuesta explicita que puedes refinar o descartar

**Ejemplo:**
- Problema: "Las empresas canarias no repiten en misiones comerciales"
- Respuesta Dia 1: "Hipotesis principal: la calidad de los contactos establecidos no es suficiente para generar oportunidades reales de negocio, por lo que las empresas no ven ROI en repetir"
- Esta hipotesis NO es la respuesta final, pero te dice donde buscar primero: calidad contactos, seguimiento post-mision, ROI percibido

## Proceso Paso a Paso: Hypothesis-Driven Analysis

### Paso 1: Formula la hipotesis inicial
Basandote en:
- Tu conocimiento del contexto
- Datos preliminares disponibles
- Patrones similares en otros casos
- Conversaciones rapidas con stakeholders

La hipotesis debe ser:
- **Especifica**: No "el problema es comunicacion" → Si "menos del 40% del target recibe informacion del programa"
- **Testeable**: Debe existir un dato/evidencia que pueda probarla o desprobarla
- **Accionable**: Si se confirma, debe llevar a una accion concreta

**Plantilla de hipotesis:**
"Creemos que [problema] es causado principalmente por [causa raiz], lo cual se evidenciaria en [manifestacion observable], y podria resolverse mediante [tipo de accion]"

Ejemplo:
"Creemos que la baja participacion en el programa de ayudas es causada principalmente por falta de awareness (no falta de interes), lo cual se evidenciaria en que >60% del target no conoce el programa, y podria resolverse mediante campaña de comunicacion directa"

### Paso 2: Estructura la hipotesis (opcional: arbol de hipotesis)
Si hay multiples hipotesis posibles, organizalas en un arbol MECE.

Ejemplo: "¿Por que baja participacion en programa de ayudas?"
```
Hipotesis arbol:
├─ H1: No conocen el programa (awareness)
├─ H2: Conocen pero no entienden como aplicar (complejidad)
├─ H3: Conocen pero no creen que sean elegibles (percepcion requisitos)
└─ H4: Conocen pero no les interesa (beneficio percibido bajo)
```

Esto te permite trabajar en paralelo: diseñar pruebas para cada hipotesis y priorizarlas.

### Paso 3: Diseña "pruebas killer" (killer tests)
Para cada hipotesis, identifica:
- ¿Que dato/evidencia probaria definitivamente esta hipotesis?
- ¿Que dato/evidencia la desprobaria definitivamente?
- ¿Como obtengo ese dato de la forma mas rapida y barata?

**Plantilla de prueba killer:**

```
Hipotesis: [enunciado]

Prueba que CONFIRMARIA la hipotesis:
- Dato: [que necesitas observar]
- Umbral: [que valor confirmaria] (ej: >70% responde X)
- Como obtener: [metodo] (ej: encuesta 50 empresas target)
- Tiempo/coste: [estimacion]

Prueba que DESPROBARIA la hipotesis:
- Dato: [que observarias]
- Umbral: [que valor desprobaria] (ej: <20% responde X)
- Como obtener: [metodo]
- Tiempo/coste: [estimacion]

Pruebas alternativas (si la killer no es viable):
- [opciones mas rapidas/baratas aunque menos definitivas]
```

**Ejemplo aplicado:**

Hipotesis H1: "Baja participacion se debe a falta de awareness"

Prueba CONFIRMA:
- Dato: % de empresas target que conocen existencia del programa
- Umbral: <40% conoce → confirma que es problema awareness
- Como: Encuesta telefonica rapida a 100 empresas de base de datos target (3 preguntas, 5 min cada una)
- Tiempo: 3 dias

Prueba DESPROBA:
- Dato: mismo
- Umbral: >70% conoce → desproba, el problema NO es awareness (es otra cosa)

### Paso 4: Prioriza hipotesis para testear
No puedes testear todo simultaneamente. Prioriza usando matriz:

| Hipotesis | Impacto si cierta | Probabilidad (inicial) | Facilidad de testear | PRIORIDAD |
|-----------|-------------------|------------------------|---------------------|-----------|
| H1: Awareness | Alto (solucion clara) | Media | Alta (encuesta rapida) | **1** |
| H2: Complejidad | Medio (rediseño proceso) | Media | Media (test usabilidad) | **2** |
| H3: Percepcion requisitos | Alto (comunicacion mejor) | Alta | Alta (analisis documental) | **1** |
| H4: Beneficio bajo | Bajo (cambia diseño programa) | Baja | Baja (requiere estudio profundo) | 3 |

Prioridad = Impacto x Probabilidad x Facilidad

Empieza por hipotesis con mayor score de prioridad.

### Paso 5: Ejecuta las pruebas
Diseña el minimo experimento/analisis/dato que de respuesta a la pregunta.

**Principio lean:** No recopiles datos "por si acaso". Cada dato debe responder una pregunta especifica de una hipotesis especifica.

Metodos rapidos de testeo:
- **Encuestas cortas** (3-5 preguntas clave, muestra pequeña 30-100)
- **Entrevistas profundas** (5-10 stakeholders clave, conversacion estructurada)
- **Analisis de datos existentes** (logs, CRM, bases de datos — buscar patron especifico)
- **Prueba piloto small-scale** (testear solucion con 10 usuarios antes de escalar)
- **Analisis documental** (revisar materiales existentes buscando evidencia especifica)

### Paso 6: Analiza resultados e itera
Tres escenarios posibles:

**A. Hipotesis CONFIRMADA**
→ Profundiza: ¿que sub-hipotesis explican mejor esta causa?
→ Diseña solucion basada en la causa confirmada
→ Considera: ¿hay otras causas complementarias?

**B. Hipotesis DESPROBADA**
→ Descartala y pasa a siguiente hipotesis prioritaria
→ Aprendizaje: ahora sabes que NO es el problema (valioso)

**C. Hipotesis PARCIALMENTE confirmada / Resultados mixtos**
→ Refina hipotesis: quiza la causa existe pero no es principal, o existe en segmento especifico
→ Formula nueva hipotesis basada en aprendizaje

### Paso 7: Sintetiza hallazgos
Al final del proceso, tienes:
- Hipotesis iniciales (que pensabas)
- Pruebas ejecutadas (que hiciste)
- Resultados (que encontraste)
- Hipotesis refinada final (que ahora crees)
- Recomendacion (que hay que hacer)

Comunica todo esto con SCQA (ver archivo SCQA_Pyramid_Principle.md).

## Trampa del Sesgo de Confirmacion

El mayor riesgo del pensamiento basado en hipotesis es el **sesgo de confirmacion**: buscar solo evidencia que confirme tu hipotesis inicial, ignorando evidencia contradictoria.

**Como evitarlo:**

1. **Diseña pruebas que puedan DESPROBAR tu hipotesis**
   - No solo busques confirmar, diseña activamente el test que desprobaria
   - Pregunta: "¿que me demostraria que estoy equivocado?"

2. **Testea hipotesis alternativas**
   - Si tu hipotesis principal es A, testea tambien B y C
   - Compara explicaciones alternativas del mismo fenomeno

3. **Triangulacion de fuentes**
   - No te bases en un solo dato o una sola fuente
   - Cruza: encuestas + entrevistas + datos cuantitativos

4. **Devil's advocate**
   - Asigna a alguien del equipo el rol de cuestionar la hipotesis
   - O juega tu mismo: "si esta hipotesis fuera falsa, ¿que estaria pasando?"

5. **Revisiones intermedias**
   - Cada 2-3 dias, revisa: ¿los datos apoyan mi hipotesis inicial o deberia pivotar?

## Plantilla de Trabajo

```
PROBLEMA A RESOLVER:
[Enunciado claro del problema o pregunta clave]

RESPUESTA DIA 1 (hipotesis inicial):
Creemos que [problema] es causado principalmente por [causa raiz],
lo cual se evidenciaria en [manifestacion observable],
y podria resolverse mediante [tipo de accion].

HIPOTESIS ALTERNATIVAS (si aplica):
- H1: [hipotesis principal]
- H2: [alternativa 1]
- H3: [alternativa 2]

PRUEBA KILLER PARA H1:
- Dato que confirmaria: [especifico + umbral]
- Dato que desprobaria: [especifico + umbral]
- Metodo para obtener dato: [como]
- Tiempo/coste estimado: [cuanto]
- Prioridad: [Alta/Media/Baja] porque [razon]

EJECUCION:
Fecha inicio: ___
Responsable: ___
Metodo: [encuesta / entrevistas / analisis datos / piloto / documental]
Muestra: [cuantos, quienes]

RESULTADOS:
Dato obtenido: [numero, %, hallazgo]
Interpretacion: [Confirma / Desproba / Mixto]

HIPOTESIS REFINADA:
Basado en resultados, ahora creemos que [version actualizada]

SIGUIENTE PASO:
[ ] Testear sub-hipotesis de H1 confirmada
[ ] Pasar a testear H2 (H1 desprobada)
[ ] Diseñar solucion (hipotesis suficientemente confirmada)
[ ] Necesitamos mas datos (resultados mixtos)
```

## Ejemplo Aplicado: Caso Institucional

**Contexto:** PROEXCA lanza programa de ayudas para digitalizacion de pymes exportadoras. Presupuesto: 500K. Empresas elegibles: ~200. Demanda real: solo 25 solicitudes en 3 meses (vs 100 esperadas). Direccion necesita diagnostico rapido (tiene comite en 2 semanas) y decidir si ampliar comunicacion, cambiar requisitos, o rediseñar programa.

### Paso 1: Respuesta Dia 1
"Hipotesis principal: La baja demanda se debe a que las empresas target no conocen el programa (problema de awareness), no a que no les interese. Esto se evidenciaria en que >60% de empresas elegibles no han oido hablar del programa. Solucion: campaña comunicacion directa (email + llamadas)."

### Paso 2: Hipotesis alternativas
- H1: No conocen programa (awareness)
- H2: Conocen pero perciben requisitos como demasiado restrictivos (complejidad)
- H3: Conocen pero 500K de ayuda no es suficiente incentivo vs esfuerzo solicitud (beneficio bajo)
- H4: Conocen pero no confian en que seran seleccionados (credibilidad)

### Paso 3: Pruebas killer

**Para H1 (awareness):**
- Confirmaria: <40% de empresas elegibles conoce programa
- Desprobaria: >70% conoce programa
- Metodo: Llamadas telefonicas a muestra 50 empresas base de datos. Pregunta 1: "¿Ha oido hablar del programa de ayudas digitalizacion PROEXCA?" Si/No. Si Si → preguntar por que no aplicaron.
- Tiempo: 3 dias (1 persona, 15 min/llamada)

**Para H2 (complejidad):**
- Confirmaria: Entre empresas que SI conocen programa, >60% menciona requisitos como razon para no aplicar
- Desprobaria: <20% menciona requisitos
- Metodo: Misma llamada, pregunta 2 (solo si conocen programa): "¿Por que no ha solicitado la ayuda?" [multiple choice: no cumple requisitos / proceso muy complejo / no le interesa / planea hacerlo / otro]
- Tiempo: incluido en mismo ejercicio H1

### Paso 4: Priorizacion
| Hipotesis | Impacto | Prob | Facilidad | PRIORIDAD |
|-----------|---------|------|-----------|-----------|
| H1 | Alto | Alta | Alta | **1** |
| H2 | Alto | Media | Alta | **1** |
| H3 | Medio | Baja | Media | 2 |
| H4 | Bajo | Baja | Media | 3 |

Decisión: Testear H1 y H2 simultaneamente (mismo metodo, mismas llamadas).

### Paso 5: Ejecucion
Semana 1: Equipo ejecuta 50 llamadas

**Resultados:**
- 42/50 empresas contactadas (84% tasa respuesta)
- Pregunta 1: ¿Conoce programa? → 18/42 = 43% conoce
- De los 18 que conocen, pregunta 2 por que no aplicaron:
  - 11 (61%): "Proceso parecia muy complicado, no teniamos tiempo"
  - 4 (22%): "No estabamos seguros de cumplir requisitos"
  - 3 (17%): "No nos parecia suficiente ayuda vs esfuerzo"

### Paso 6: Interpretacion
- H1 (awareness): PARCIALMENTE confirmada. 43% conoce = ni muy bajo ni muy alto. Hay gap de awareness, pero no explica toda la baja demanda.
- H2 (complejidad): CONFIRMADA. Entre los que conocen, 61% cita complejidad como barrera principal.

**Hipotesis refinada:**
"La baja demanda tiene causa doble: (1) gap de awareness moderado (57% no conoce programa), y (2) percepcion de complejidad alta entre los que si conocen (61% ve proceso como muy complicado). Ambos factores contribuyen. Solucion: comunicacion directa + simplificacion proceso solicitud."

### Paso 7: Recomendacion
**Accion 1 (inmediata):** Campaña email + llamadas a las 24 empresas de la muestra que no conocian programa → explicar beneficio + ofrecer soporte para solicitud → objetivo: 10 solicitudes adicionales en 3 semanas

**Accion 2 (medio plazo):** Simplificar formulario solicitud (de 12 paginas a 4 + wizard guiado paso a paso) → pilotar con 20 empresas antes de relanzar programa segunda convocatoria

**Accion 3 (si A1+A2 no suficiente):** Considerar aumentar cuantia ayuda o flexibilizar requisitos (pero solo si tras A1+A2 persiste baja demanda, no antes)

## Resumen Ejecutivo

- Pensamiento basado en hipotesis = formular respuesta provisional rapida + diseñar pruebas especificas para validarla/refutarla
- Ventaja: maximiza aprendizaje por unidad de esfuerzo, evita paralisis por analisis
- Respuesta Dia 1: mejor hipotesis con informacion limitada, punto de partida (no respuesta final)
- Proceso: Hipotesis → Prueba killer → Testear → Confirmar/Desprobar/Refinar → Iterar
- Prueba killer = dato especifico que probaria o desprobaria hipotesis de forma definitiva
- Riesgo principal: sesgo de confirmacion → mitigar con pruebas que puedan desprobar, hipotesis alternativas, triangulacion
- Priorizar hipotesis: Impacto x Probabilidad x Facilidad de testear
- No busques certeza 100%, busca confianza suficiente para actuar
