# Herramientas de Decision: Matriz Multi-Criterio y Analisis Coste-Beneficio

## Por Que Estructurar Decisiones

La mayoria de decisiones estrategicas y operacionales enfrentan el mismo desafio: multiples opciones, multiples criterios, trade-offs entre ellos, y ningun criterio obviamente dominante.

Decidir "por intuicion" en estos casos lleva a:
- Sesgo hacia opciones familiares o recientes (availability bias)
- Paralisis por analisis (demasiadas variables, no hay decision)
- Decisiones no explicables (no puedes justificar por que elegiste A vs B)
- Inconsistencia (criterios cambian segun quien decide)

Estructurar la decision con herramientas analiticas:
- Explicita criterios y ponderacion (hace transparente que importa)
- Permite comparacion objetiva
- Facilita comunicacion al comite/equipo
- Documenta razonamiento (para futuras referencias)

Este archivo cubre tres herramientas:
1. **Matriz de Decision Multi-Criterio**: Comparar opciones contra criterios ponderados
2. **Analisis Coste-Beneficio**: Evaluar si una accion vale la pena (costes vs beneficios)
3. **Planificacion de Escenarios**: Testear decision bajo distintos futuros posibles

## Herramienta 1: Matriz de Decision Multi-Criterio

### Que es
Una tabla que compara multiples opciones contra multiples criterios relevantes, asignando puntajes y (opcionalmente) pesos a cada criterio, para llegar a una puntuacion total por opcion.

### Cuando usarla
- Tienes 2+ opciones mutuamente excluyentes (elegir una implica descartar las otras)
- Hay multiples criterios de decision (coste, tiempo, impacto, riesgo, etc.)
- Los criterios tienen distinta importancia (no todos pesan igual)
- Necesitas justificar la decision a un comite o stakeholders

### NO usarla cuando
- Decision simple con 1-2 criterios obvios (sobrediseño)
- Criterios no son comparables (manzanas vs naranjas)
- No hay tiempo para analisis (decision rapida requerida)

### Proceso Paso a Paso

**Paso 1: Lista todas las opciones**
Deben ser mutuamente excluyentes (si elijo A, no puedo elegir B).
Ejemplo: "¿Que mercado priorizar para proxima mision comercial?"
Opciones: Mexico / Colombia / Chile / Peru

**Paso 2: Identifica criterios de decision**
¿Que factores importan para esta decision?

Tips:
- 4-7 criterios es ideal (menos = incompleto, mas = complejo)
- Criterios deben ser independientes entre si (no redundantes)
- Deben ser medibles o evaluables de forma consistente

Ejemplo: Criterios para decision de mercado:
1. Tamaño de mercado potencial
2. Afinidad cultural/idioma
3. Facilidad logistica (distancia, vuelos directos)
4. Presencia competencia (otras regiones españolas)
5. Coste organizacion mision
6. Interes empresas canarias en ese mercado
7. Relaciones institucionales existentes

**Paso 3: Pondera criterios (opcional pero recomendado)**
¿Todos los criterios tienen la misma importancia?

Metodo simple: Asigna peso 1-5 (o 1-10) a cada criterio segun importancia.
Total debe sumar 100% (o normaliza al final).

Ejemplo:
- Tamaño mercado: peso 5 (muy importante)
- Afinidad cultural: peso 3 (importante)
- Facilidad logistica: peso 2 (algo importante)
- Competencia: peso 3
- Coste: peso 4 (muy importante)
- Interes empresas: peso 5 (muy importante)
- Relaciones institucionales: peso 3

Total: 25 → Normalizar a 100%:
- Tamaño: 20%
- Afinidad: 12%
- Logistica: 8%
- Competencia: 12%
- Coste: 16%
- Interes empresas: 20%
- Relaciones: 12%

**Paso 4: Evalua cada opcion contra cada criterio**
Escala recomendada: 1-5 o 1-10
- 1 = muy bajo/mal
- 3 = medio/aceptable
- 5 = muy alto/excelente

Importante: Ser consistente. Define que significa "5" en cada criterio antes de empezar a puntuar.

**Paso 5: Calcula puntuacion total por opcion**
Formula: Score_total = Σ (Puntaje_criterio × Peso_criterio)

**Paso 6: Analiza sensibilidad**
¿Que pasa si cambio los pesos? ¿Sigue ganando la misma opcion o es muy sensible?
Si es muy sensible, la decision es menos robusta (depende mucho de suposiciones de ponderacion).

**Paso 7: Complementa con analisis cualitativo**
El numero mas alto no siempre es la decision correcta. Considera:
- Riesgos no capturados en criterios
- Factores politicos o estrategicos
- Opciones "no reversibles" vs "experimentales"

La matriz te da input estructurado, no la decision automatica.

### Ejemplo Aplicado: Caso Institucional

**Decision:** ¿Que mercado priorizar para proxima mision comercial? Presupuesto: 1 mision.
**Opciones:** Mexico, Colombia, Chile, Peru

**Criterios y pesos:**
| Criterio | Peso |
|----------|------|
| Tamaño mercado (PIB, poblacion relevante) | 20% |
| Interes empresas canarias (encuesta previa) | 25% |
| Coste organizacion mision | 15% |
| Facilidad logistica (vuelos, distancia) | 10% |
| Competencia otras regiones españolas | 10% |
| Relaciones institucionales PROEXCA | 20% |

**Evaluacion (escala 1-5):**

| Opcion | Tamaño mercado | Interes empresas | Coste | Logistica | Competencia | Relaciones | TOTAL |
|--------|----------------|------------------|-------|-----------|-------------|------------|-------|
| **Mexico** | 5 (130M hab) | 4 (alto) | 3 (medio) | 4 (vuelos directos) | 2 (alta competencia) | 3 (buenas) | **3.65** |
| **Colombia** | 4 (50M) | 5 (muy alto) | 4 (bajo) | 5 (vuelos directos, cerca) | 3 (media) | 4 (muy buenas) | **4.15** |
| **Chile** | 3 (19M) | 3 (medio) | 3 (medio) | 2 (lejos, sin directo) | 4 (baja competencia) | 4 (excelentes) | **3.20** |
| **Peru** | 3 (33M) | 3 (medio) | 4 (bajo) | 3 (1 escala) | 3 (media) | 3 (buenas) | **3.20** |

**Calculo detallado Colombia (ganadora):**
= (4 × 0.20) + (5 × 0.25) + (4 × 0.15) + (5 × 0.10) + (3 × 0.10) + (4 × 0.20)
= 0.80 + 1.25 + 0.60 + 0.50 + 0.30 + 0.80
= **4.15**

**Analisis sensibilidad:**
¿Que pasa si "Tamaño mercado" fuera criterio dominante (50% peso)?
→ Mexico ganaria (score 5 en tamaño)
Pero decision actual prioriza "Interes empresas" + "Relaciones" → Colombia gana

**Decision:** Priorizar **Colombia** para proxima mision. Justificacion: Combinacion optima de alto interes empresas canarias, relaciones institucionales solidas, y logistica favorable. Aunque Mexico tiene mercado mas grande, competencia de otras regiones es alta y interes empresas canarias es menor.

**Consideracion adicional (cualitativa):** Colombia permite pilotar modelo mision con coste bajo. Si funciona bien, escalar a Mexico en segundo semestre.

### Plantilla de Trabajo: Matriz Decision

```
DECISION A TOMAR:
[Enunciado claro: ¿que estamos decidiendo?]

OPCIONES (mutuamente excluyentes):
1. __________
2. __________
3. __________
4. __________

CRITERIOS Y PESOS:
| Criterio | Definicion (que mide) | Peso (%) | Escala (que significa 1-5) |
|----------|----------------------|----------|---------------------------|
| Criterio 1 | | % | 1= ... 5= ... |
| Criterio 2 | | % | 1= ... 5= ... |
| Criterio 3 | | % | 1= ... 5= ... |
| Criterio 4 | | % | 1= ... 5= ... |
| **TOTAL** | | **100%** | |

MATRIZ DE EVALUACION:
| Opcion | Criterio 1 | Criterio 2 | Criterio 3 | Criterio 4 | TOTAL |
|--------|------------|------------|------------|------------|-------|
| Opcion 1 | | | | | |
| Opcion 2 | | | | | |
| Opcion 3 | | | | | |

CALCULO SCORE TOTAL:
Opcion 1: (___×___) + (___×___) + ... = ___
Opcion 2: (___×___) + (___×___) + ... = ___
Opcion 3: (___×___) + (___×___) + ... = ___

ANALISIS SENSIBILIDAD:
¿Que pasa si cambio peso de [criterio critico]?
→ [resultado]

DECISION RECOMENDADA:
Opcion: __________
Justificacion: __________

CONSIDERACIONES CUALITATIVAS:
- Riesgo: __________
- Factor estrategico no capturado: __________
- Plan B si esta opcion falla: __________
```

## Herramienta 2: Analisis Coste-Beneficio

### Que es
Un analisis que compara los costes (inversiones, recursos, riesgos) de una accion contra los beneficios (ganancias, ahorros, impactos positivos) para determinar si vale la pena hacerla.

Variante simple: Lista costes vs beneficios
Variante avanzada: Calculo Valor Actual Neto (NPV) con flujos futuros descontados

### Cuando usarlo
- Decision de "hacer o no hacer" (vs decision entre opciones)
- Inversion significativa (tiempo, dinero, recursos)
- Necesitas justificar ROI a comite o financiadores
- Beneficios ocurren en el futuro (no inmediatos)

### Proceso Paso a Paso (Version Simple)

**Paso 1: Lista TODOS los costes**
Categorias:
- **Costes directos**: Dinero que sale (presupuesto, contrataciones, proveedores)
- **Costes indirectos**: Tiempo equipo (valorado), overhead, costes oportunidad
- **Costes intangibles**: Riesgo reputacional, fatiga equipo, complejidad añadida

**Paso 2: Lista TODOS los beneficios**
Categorias:
- **Beneficios directos tangibles**: Ingresos, ahorros medibles, eficiencia (tiempo ahorrado)
- **Beneficios indirectos tangibles**: Reduccion errores, mejora satisfaccion cliente (medible)
- **Beneficios intangibles**: Mejora reputacion, aprendizaje equipo, posicionamiento estrategico

**Paso 3: Cuantifica lo que puedas**
No todo es monetizable, pero intenta:
- Costes: casi siempre monetizables
- Beneficios tangibles: monetizar (ingresos, ahorro en €)
- Beneficios intangibles: describir cualitativamente + asignar valor relativo (Alto/Medio/Bajo)

**Paso 4: Calcula ratio Beneficio/Coste**
Si beneficios y costes estan en €:
- Ratio B/C > 1.0 → Beneficios superan costes (potencialmente vale la pena)
- Ratio B/C < 1.0 → Costes superan beneficios (probablemente no vale la pena)

**Paso 5: Considera horizonte temporal**
¿Cuando se materializan beneficios?
- Beneficios inmediatos (<6 meses) vs largo plazo (2+ años)
- Si beneficios son a largo plazo, aplica descuento (vale menos un euro en 3 años que hoy)

**Paso 6: Analiza escenarios (mejor/base/peor)**
Beneficios y costes son estimaciones con incertidumbre.
- Escenario base: Estimacion mas probable
- Escenario mejor: Si todo sale bien (beneficios altos, costes bajos)
- Escenario peor: Si salen mal las cosas (beneficios bajos, costes altos)

Decision robusta: B/C > 1.0 incluso en escenario peor

### Ejemplo Aplicado: Caso Institucional

**Decision:** ¿Implementar CRM para gestion de relacion con empresas participantes en programas PROEXCA?

**COSTES (año 1):**
- Licencia CRM (100 usuarios): 15.000 €/año
- Implantacion y configuracion: 25.000 € (one-time)
- Formacion equipo (40 personas, 2 dias): 10.000 €
- Migracion datos desde Excel: 5.000 €
- Tiempo equipo interno (configuracion, testeo): 200 horas × 40 €/hora = 8.000 €
- **TOTAL AÑO 1: 63.000 €**

**COSTES (años 2-3):**
- Licencia: 15.000 €/año
- Mantenimiento: 3.000 €/año
- **TOTAL AÑOS 2-3: 18.000 €/año**

**BENEFICIOS (año 1 - parcial, solo 6 meses efectivos):**
- Ahorro tiempo gestion contactos: 500 horas/año × 40 €/hora = 20.000 € (pero solo 10.000 € en año 1)
- Reduccion emails perdidos/olvidados: evitar perder 2 oportunidades colaboracion = 5.000 €
- **TOTAL AÑO 1: 15.000 €**

**BENEFICIOS (años 2-3):**
- Ahorro tiempo: 20.000 €/año
- Reduccion errores comunicacion: 10.000 €/año
- Mejora tasa conversion programas (5% incremento participacion por mejor seguimiento): 30.000 €/año
- **TOTAL AÑOS 2-3: 60.000 €/año**

**BENEFICIOS INTANGIBLES:**
- Mejora satisfaccion empresas (comunicacion mas personalizada)
- Base de conocimiento institucional (no se pierde info cuando alguien se va)
- Mejora coordinacion entre departamentos

**ANALISIS 3 AÑOS:**
| Año | Costes | Beneficios | Neto |
|-----|--------|------------|------|
| 1 | 63.000 | 15.000 | -48.000 |
| 2 | 18.000 | 60.000 | +42.000 |
| 3 | 18.000 | 60.000 | +42.000 |
| **TOTAL** | **99.000** | **135.000** | **+36.000** |

**Ratio B/C (3 años):** 135.000 / 99.000 = **1.36** → Beneficios 36% superiores a costes

**Punto de equilibrio (breakeven):** Mitad del año 2

**ANALISIS DE ESCENARIOS:**

| Escenario | Supuesto | B/C ratio | Decision |
|-----------|----------|-----------|----------|
| **Peor caso** | Beneficios 50% menores (adopcion lenta) | 0.68 | NO viable |
| **Base** | Supuestos actuales | 1.36 | Viable |
| **Mejor caso** | Beneficios 50% mayores (adopcion rapida) | 2.04 | Muy viable |

**DECISION:** Proceder con implementacion CRM, PERO:
- Fase piloto (30 usuarios, 3 meses) antes de full rollout → reduce riesgo escenario peor
- KPIs seguimiento: % adopcion equipo, horas ahorradas/mes, tasa conversion programas
- Checkpoint mes 6: Si no vemos adopcion >70%, pausar y revisar

### Plantilla de Trabajo: Coste-Beneficio

```
DECISION:
[¿Que accion estamos evaluando?]

HORIZONTE TEMPORAL: ___ años

COSTES:
| Categoria | Año 1 | Año 2 | Año 3 | TOTAL |
|-----------|-------|-------|-------|-------|
| Costes directos (€) | | | | |
| Costes indirectos (€) | | | | |
| Costes intangibles (descripcion) | | | | |
| **TOTAL COSTES** | | | | |

BENEFICIOS:
| Categoria | Año 1 | Año 2 | Año 3 | TOTAL |
|-----------|-------|-------|-------|-------|
| Beneficios directos (€) | | | | |
| Beneficios indirectos (€) | | | | |
| Beneficios intangibles (descripcion) | | | | |
| **TOTAL BENEFICIOS** | | | | |

ANALISIS:
- Ratio B/C: ___ / ___ = ___
- Neto (B - C): ___
- Punto equilibrio: Año ___, mes ___

ESCENARIOS:
| Escenario | Supuesto | B/C | Viable? |
|-----------|----------|-----|---------|
| Peor caso | | | |
| Base | | | |
| Mejor caso | | | |

DECISION:
[ ] Proceder (B/C > 1.0 incluso en caso base)
[ ] Proceder con condiciones (piloto, checkpoints)
[ ] No proceder (B/C < 1.0)

PLAN MITIGACION RIESGOS (si proceder):
- Riesgo 1: _____ → Mitigacion: _____
- Riesgo 2: _____ → Mitigacion: _____
```

## Herramienta 3: Planificacion de Escenarios (Scenario Planning)

### Que es
Tecnica que testea una decision bajo multiples futuros posibles (escenarios), para evaluar robustez de la decision ante incertidumbre.

No predice EL futuro, sino que explora multiples futuros y como tu decision se comportaria en cada uno.

### Cuando usarlo
- Alta incertidumbre sobre factores clave (mercado, regulacion, tecnologia)
- Decision estrategica con impacto largo plazo
- Quieres testear robustez (¿la decision funciona en distintos contextos?)
- Necesitas preparar planes contingencia

### Proceso Paso a Paso (Version Simple: 3 Escenarios)

**Paso 1: Identifica 1-2 variables criticas de incertidumbre**
Ejemplo decision: "¿Priorizamos sector agroalimentario o tech para proximos 2 años?"
Variables criticas:
- Evolucion demanda post-COVID (¿vuelve normalidad o "new normal"?)
- Regulacion comercio UE-LATAM (¿nuevos acuerdos o proteccionismo?)

**Paso 2: Define 3 escenarios (Optimista / Base / Pesimista)**
No son probabilidades (no es "hay 33% de cada"), son mundos posibles.

Ejemplo:
- **Escenario Optimista**: Recuperacion rapida demanda + nuevos acuerdos comerciales UE-LATAM
- **Escenario Base**: Recuperacion gradual + status quo regulatorio
- **Escenario Pesimista**: Demanda estancada + aumento barreras comerciales

**Paso 3: Evalua tu decision en cada escenario**
Para cada escenario, pregunta:
- ¿Como se comportaria mi decision en ese mundo?
- ¿Que resultados obtendria? (impacto alto/medio/bajo)
- ¿Que riesgos enfrentaria?

**Paso 4: Identifica decision robusta o flexible**
- **Decision robusta**: Funciona aceptablemente en todos los escenarios
- **Decision flexible**: Permite pivotar facilmente si cambia escenario
- **Decision "apuesta"**: Solo funciona en un escenario (alto riesgo)

**Paso 5: Diseña planes contingencia**
"Si vemos señales de escenario X materializandose, entonces haremos Y"

### Ejemplo Aplicado: Decision de Priorizacion Sectorial

**Decision:** ¿Priorizar agroalimentario o tech para programas PROEXCA proximos 2 años?

**Variables criticas:**
1. Evolucion demanda internacional post-COVID
2. Disponibilidad talento digital en Canarias

**3 Escenarios:**

**Escenario A (Optimista "New Normal Digital"):**
- Demanda agroalimentario se recupera + boom e-commerce → empresas agroalimentarias necesitan digitalizarse
- Talento digital atrae a Canarias (teletrabajo, hub tech)
- Resultado: AMBOS sectores en crecimiento, sinergia entre ellos

**Escenario B (Base "Recuperacion Gradual"):**
- Agroalimentario recupera lentamente
- Tech crece moderadamente
- Recursos PROEXCA limitados, hay que elegir
- Resultado: Elegir uno significa sacrificar otro (trade-off real)

**Escenario C (Pesimista "Fragmentacion"):**
- Agroalimentario golpeado por barreras comerciales
- Tech sufre por falta talento local + competencia Madrid/Barcelona
- Resultado: Ambos sectores dificiles, ningun "ganador claro"

**Evaluacion Opciones en cada Escenario:**

| Opcion | Escenario A (Optimista) | Escenario B (Base) | Escenario C (Pesimista) |
|--------|------------------------|-------------------|------------------------|
| **Priorizar Agro** | Impacto MEDIO (pierde oportunidad tech) | Impacto ALTO (juega a fortaleza) | Impacto BAJO (sector golpeado) |
| **Priorizar Tech** | Impacto ALTO (sector en boom) | Impacto MEDIO (crecimiento moderado) | Impacto BAJO (falta talento) |
| **Estrategia DUAL** | Impacto ALTO (aprovechar sinergia) | Impacto BAJO (recursos dispersos) | Impacto MEDIO (diversificacion) |

**Analisis:**
- Ninguna opcion "gana" en los 3 escenarios
- "Priorizar Tech" tiene mayor upside en escenario optimista pero bajo en pesimista
- "Priorizar Agro" mas estable pero menor upside
- "Estrategia Dual" robusta pero requiere mas recursos

**Decision (con flexibilidad):**
Opcion: **Empezar Dual (60% Agro / 40% Tech) año 1, con checkpoints trimestrales**

Señales a monitorear + planes contingencia:
- Si vemos: "Boom e-commerce agroalimentario" (señal escenario A) → Aumentar Tech a 50% (sinergia)
- Si vemos: "Barreras comerciales aumentan" (señal escenario C) → Pivotar a Tech 70% (agro menos viable)
- Si vemos: "Falta talento tech persistente" → Pivotar a Agro 80%

## Resumen Ejecutivo: Cuando Usar Cada Herramienta

| Herramienta | Situacion | Pregunta que responde | Output |
|-------------|-----------|----------------------|---------|
| **Matriz Multi-Criterio** | Multiples opciones, multiples criterios | ¿Cual opcion es mejor considerando todo? | Score por opcion, ranking |
| **Coste-Beneficio** | Decision hacer/no hacer, inversion significativa | ¿Vale la pena hacer esto? | Ratio B/C, breakeven, ROI |
| **Escenarios** | Alta incertidumbre, decision largo plazo | ¿Como se comporta mi decision en distintos futuros? | Robustez, planes contingencia |

**Combinar herramientas:**
- Matriz + Coste-Beneficio: Usa matriz para ranking, luego C-B para validar que opcion ganadora tiene ROI positivo
- Matriz + Escenarios: Evalua matriz en cada escenario (¿cambia ranking?)
- Las tres: Decision compleja con multiples opciones (matriz), inversion alta (C-B), incertidumbre (escenarios)

**Principio general:** La herramienta es medio, no fin. El objetivo es claridad de pensamiento y decision defendible, no perfeccion matematica.
