# Metodología de validación de fuentes y detección de sesgos cognitivos

## Propósito de la validación de fuentes

En la era de la información abundante, el desafío NO es encontrar datos — es encontrar datos fiables. La validación de fuentes es el proceso sistemático de evaluar la calidad, credibilidad y relevancia de la información antes de usarla en análisis estratégicos.

**Principio fundamental**: Una investigación profesional se sostiene sobre la calidad de sus fuentes. Datos malos producen decisiones malas.

## Taxonomía de fuentes: Primarias vs Secundarias vs Terciarias

### Fuentes primarias

**Definición**: Información original, de primera mano, sin intermediación.

**Ejemplos:**
- Datos oficiales de organismos estadísticos (INE, Eurostat, Banco Mundial)
- Estudios peer-reviewed publicados en revistas científicas
- Informes gubernamentales
- Datos financieros de registros mercantiles
- Encuestas y estudios propios
- Entrevistas directas con expertos

**Ventajas:**
- Mayor fiabilidad
- Metodología transparente
- Datos verificables

**Desventajas:**
- Requieren más tiempo para encontrar e interpretar
- A veces no están procesados (datos brutos)

### Fuentes secundarias

**Definición**: Análisis, interpretación o síntesis de fuentes primarias.

**Ejemplos:**
- Informes de consultoras (McKinsey, BCG, Deloitte)
- Artículos de medios especializados (The Economist, Financial Times)
- Libros académicos
- Informes sectoriales de asociaciones empresariales
- Análisis de mercado de empresas de research

**Ventajas:**
- Información ya procesada y contextualizada
- Insights y patrones identificados
- Acceso más fácil

**Desventajas:**
- Posible sesgo del analista
- Metodología no siempre transparente
- Pueden estar desactualizadas

### Fuentes terciarias

**Definición**: Compilaciones o resúmenes de fuentes secundarias.

**Ejemplos:**
- Wikipedia
- Enciclopedias
- Directorios
- Agregadores de noticias
- Resúmenes ejecutivos de resúmenes

**Ventajas:**
- Rápidas para obtener contexto general
- Útiles como punto de partida

**Desventajas:**
- No son citables en análisis profesional
- Múltiples capas de interpretación
- Calidad variable

**Regla operativa**: Usa fuentes terciarias para EXPLORAR, fuentes secundarias para ANALIZAR, fuentes primarias para CITAR.

## Framework de validación de fuentes: 5 dimensiones

### 1. AUTORIDAD: ¿Quién publica?

**Preguntas clave:**
- ¿Quién es el autor/organización?
- ¿Qué credenciales tiene?
- ¿Es reconocido en su campo?
- ¿Tiene conflictos de interés?

**Escala de confianza:**
- 🟢 ALTA: Organismos internacionales, instituciones académicas, organismos estadísticos oficiales
- 🟡 MEDIA: Consultoras reconocidas, medios especializados, asociaciones sectoriales
- 🔴 BAJA: Blogs personales, sitios sin autor identificable, fuentes anónimas

### 2. RECENCIA: ¿Cuándo se publicó?

**Criterios por tipo de información:**

**Datos de mercado / económicos:**
- < 2 años: Alta confianza
- 2-5 años: Media confianza (verificar si sigue vigente)
- > 5 años: Baja confianza (solo contexto histórico)

**Regulación / legislación:**
- Verificar SIEMPRE la versión más reciente
- Las leyes cambian — un informe de 2020 puede estar obsoleto

**Tendencias tecnológicas:**
- < 1 año: Alta confianza
- 1-3 años: Media confianza
- > 3 años: Baja confianza (la tecnología evoluciona rápido)

### 3. METODOLOGÍA: ¿Cómo se obtuvo la información?

**Preguntas clave:**
- ¿Se explica cómo se recopiló la información?
- ¿Qué tamaño de muestra? (para encuestas)
- ¿Hay transparencia en los cálculos? (para proyecciones)
- ¿Es replicable el estudio?

**Señales de alerta (red flags):**
- No se menciona metodología
- "Según fuentes del sector" sin especificar
- Proyecciones sin explicar el modelo
- Encuestas sin tamaño de muestra

### 4. PROPÓSITO: ¿Por qué existe esta información?

**Tipos de propósito:**

**Informar** (neutral)
- Organismos estadísticos, estudios académicos
- Mayor confianza

**Persuadir** (con sesgo declarado)
- Informes de think tanks con ideología conocida
- Artículos de opinión
- Confianza media si el sesgo es transparente

**Vender** (comercial)
- Whitepapers de empresas tech vendiendo su solución
- Informes "gratuitos" que son marketing encubierto
- Baja confianza — verificar con fuentes independientes

**Señales de sesgo comercial:**
- El informe concluye que la solución es "comprar X producto"
- Comparativas donde siempre gana el autor del informe
- Datos positivos sin mencionar limitaciones

### 5. CORROBORACIÓN: ¿Otras fuentes dicen lo mismo?

**Regla de las múltiples fuentes:**

- 1 fuente = dato no confirmado (marcar como [VERIFICAR])
- 2 fuentes independientes = dato probablemente fiable
- 3+ fuentes independientes = dato fiable

**IMPORTANTE**: "Independientes" significa fuentes que NO se citan entre sí. Si 5 artículos repiten el mismo dato pero todos citan el mismo estudio original, cuentan como 1 fuente.

## Checklist de validación de fuentes

Antes de usar una fuente en un análisis profesional:

```
┌─────────────────────────────────────────────────────────────────┐
│ CHECKLIST DE VALIDACIÓN DE FUENTE                              │
├─────────────────────────────────────────────────────────────────┤
│ [ ] Autor/organización identificable y con credibilidad         │
│ [ ] Fecha de publicación clara y reciente                       │
│ [ ] Metodología explicada (o no necesaria para datos oficiales) │
│ [ ] Propósito de la fuente es informar (no vender)              │
│ [ ] Dato corroborado por al menos una fuente independiente      │
│ [ ] No hay señales de alerta evidentes (red flags)              │
│ [ ] La fuente es accesible (enlace / referencia completa)       │
│                                                                 │
│ Si 6-7 checks: CONFIANZA ALTA ✓                                │
│ Si 4-5 checks: CONFIANZA MEDIA ⚠                               │
│ Si < 4 checks: CONFIANZA BAJA ✗ (no usar o marcar [VERIFICAR]) │
└─────────────────────────────────────────────────────────────────┘
```

## Sesgos cognitivos en investigación: Los 6 grandes

### 1. SESGO DE CONFIRMACIÓN (Confirmation Bias)

**Qué es**: Tendencia a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando evidencia contradictoria.

**Cómo se manifiesta en investigación:**
- Buscar solo fuentes que apoyan la hipótesis inicial
- Ignorar datos que contradicen la conclusión deseada
- Recordar selectivamente solo los datos favorables

**Ejemplo:**
Investigas si "Alemania es buen mercado para gaming". Encuentras 3 fuentes positivas y 2 negativas. En el informe solo incluyes las positivas.

**Cómo evitarlo:**
- Buscar ACTIVAMENTE evidencia que contradiga tu hipótesis
- Incluir datos contradictorios en la Evidence Matrix
- Preguntarte: "¿Qué tendría que ser verdad para que mi conclusión esté equivocada?"

### 2. SESGO DE ANCLAJE (Anchoring Bias)

**Qué es**: Dar demasiado peso a la primera información que recibimos (el "ancla"), que influye desproporcionadamente en conclusiones posteriores.

**Cómo se manifiesta:**
- El primer informe que lees marca tu perspectiva
- Una cifra inicial (aunque sea imprecisa) condiciona tus estimaciones

**Ejemplo:**
Lees que el mercado gaming alemán "vale 10.000M€". Luego encuentras fuentes que dicen 8.000M€ y 12.000M€, pero tu análisis sigue "anclado" en los 10.000M€ iniciales sin verificar cuál es más preciso.

**Cómo evitarlo:**
- No fijar conclusiones tras la primera fuente
- Comparar múltiples fuentes ANTES de formar opinión
- Usar rangos en lugar de cifras únicas cuando hay variabilidad

### 3. SESGO DE SUPERVIVENCIA (Survivorship Bias)

**Qué es**: Concentrarse en los casos que "sobrevivieron" un proceso de selección, ignorando los que no lo hicieron.

**Cómo se manifiesta:**
- Analizar solo empresas exitosas, ignorando las que fracasaron
- Estudiar solo mercados donde hubo éxito, no los intentos fallidos

**Ejemplo:**
"Las 5 empresas españolas que triunfaron en Alemania hicieron X" → pero ignoras las 50 que fracasaron haciendo lo mismo.

**Cómo evitarlo:**
- Preguntar explícitamente: "¿Qué casos NO están en este análisis?"
- Buscar datos sobre fracasos, no solo éxitos
- Desconfiar de "recetas de éxito" basadas solo en ganadores

### 4. SESGO DE DISPONIBILIDAD (Availability Bias)

**Qué es**: Sobrestimar la importancia de información que está fácilmente disponible o es reciente.

**Cómo se manifiesta:**
- Dar más peso a noticias recientes que a tendencias de largo plazo
- Preferir datos fáciles de encontrar vs datos relevantes pero difíciles de obtener

**Ejemplo:**
Una noticia viral sobre "crisis en sector X" te hace concluir que todo el sector está en crisis, ignorando datos oficiales que muestran crecimiento.

**Cómo evitarlo:**
- Distinguir entre "noticia" y "tendencia"
- Priorizar fuentes oficiales aunque sean menos accesibles
- Verificar si un evento reciente es representativo o excepcional

### 5. SESGO DE AUTORIDAD (Authority Bias)

**Qué es**: Dar demasiado peso a la opinión de figuras de autoridad, incluso fuera de su área de expertise.

**Cómo se manifiesta:**
- Citar a McKinsey sin cuestionar sus datos
- Aceptar la opinión de un CEO tech sobre economía macro sin verificar

**Ejemplo:**
"Según McKinsey, el mercado crecerá un 20%" → aceptas el dato sin verificar metodología, muestra o si McKinsey tiene conflicto de interés en ese sector.

**Cómo evitarlo:**
- La autoridad NO reemplaza la validación de metodología
- Verificar si la autoridad tiene expertise en el tema específico
- Buscar corroboración independiente incluso de fuentes prestigiosas

### 6. SESGO DE GRUPO (Groupthink)

**Qué es**: Presión para alcanzar consenso en un grupo, suprimiendo opiniones disidentes.

**Cómo se manifiesta en organizaciones:**
- "Todos en PROEXCA creen que X mercado es prioritario" → nadie cuestiona
- Investigación que busca validar la decisión ya tomada por el equipo

**Ejemplo:**
El equipo ya decidió que "vamos a Alemania". Tu investigación inconscientemente busca justificar esa decisión en lugar de evaluarla objetivamente.

**Cómo evitarlo:**
- Hacer la investigación ANTES de la decisión, no después
- Buscar activamente opiniones disidentes
- Crear espacio para "devil's advocate" (abogado del diablo)

## Red flags: Señales de alarma en fuentes

### Red flags en la fuente misma

- ❌ No hay autor identificable
- ❌ No hay fecha de publicación
- ❌ El sitio tiene diseño poco profesional / lleno de anuncios
- ❌ No se citan fuentes de los datos
- ❌ Los enlaces a "fuentes" están rotos o no existen
- ❌ El tono es sensacionalista ("revolucionario", "increíble", "secreto que no quieren que sepas")

### Red flags en los datos

- ❌ Cifras muy redondas sin rango (ej: "exactamente 1 millón")
- ❌ Proyecciones a muy largo plazo (> 10 años) con precisión absurda
- ❌ Comparaciones sin contexto ("creció un 500%" - ¿desde qué base?)
- ❌ Gráficos sin etiquetas en ejes o sin fuente
- ❌ Uso de porcentajes sin datos absolutos (ej: "aumentó un 50%" - ¿de qué cantidad?)

### Red flags en la argumentación

- ❌ Correlación presentada como causalidad ("X creció y Y también, luego X causa Y")
- ❌ Falacias lógicas evidentes
- ❌ Cherry-picking: selección de datos convenientes ignorando contexto
- ❌ Apelación a la emoción en lugar de datos

## Proceso operativo: Validación de fuente en 3 minutos

Cuando encuentras una fuente potencialmente útil:

**MINUTO 1: Verificación rápida**
- ¿Quién publica? (buscar "About" / "Quiénes somos")
- ¿Cuándo? (buscar fecha)
- ¿Propósito? (informar / vender / persuadir)

**MINUTO 2: Evaluación de contenido**
- ¿Citan fuentes?
- ¿Metodología clara?
- ¿Hay red flags evidentes?

**MINUTO 3: Decisión**
- ✅ USAR (alta/media confianza)
- ⚠ VERIFICAR (requiere corroboración)
- ❌ DESCARTAR (baja confianza / red flags múltiples)

## Integración con otros frameworks

**Source Validation → Evidence Matrix**
- Solo fuentes validadas entran en la Evidence Matrix
- El nivel de confianza de la fuente determina el nivel de confianza de la evidencia

**Bias Detection → Executive Memo**
- Los sesgos identificados en la investigación se mencionan en las limitaciones del memo
- Recomendaciones incluyen "verificar con X" si hay sesgos detectados
