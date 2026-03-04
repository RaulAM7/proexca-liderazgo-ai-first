---
class_id: "P-01"
module_id: "06"
type: practice
title: "Practica: diagnostico estrategico y plan trimestral"
duration_minutes: 30
use_case_ref: "CU-01"
agent_ref: "McKinsey Strategist PROEXCA"
blueprint_version: 1
version: 1
---

# Practica: diagnostico estrategico y plan trimestral

## Objetivo practico

Generar un diagnostico estrategico completo que permita al Consejo de PROEXCA decidir, con datos y logica estructurada, si concentrar recursos en consolidar mercados europeos (Alemania, Reino Unido) o abrir mercado en Africa Occidental. Al finalizar tendras un documento ejecutivo con SWOT, VRIO, opciones valoradas y un plan 30/60/90 con metricas.

---

## Supuesto

PROEXCA cierra el primer trimestre con presupuesto limitado para el siguiente ejercicio. Solo hay margen para financiar una estrategia de expansion:

- **Opcion A — Europa consolidada:** reforzar presencia en Alemania (agroalimentario, turismo premium) y Reino Unido (servicios digitales, turismo). Hay base instalada de contactos, dos misiones comerciales previas y una feria programada en Frankfurt.
- **Opcion B — Africa Occidental:** abrir Ghana y Senegal como mercados emergentes para infraestructura, energia renovable y agroalimentario transformado. No hay presencia previa; existe interes politico del Gobierno de Canarias por diversificacion geografica.

El Director de Promocion debe presentar al Consejo un informe de recomendacion en 10 dias. Tu tarea es producir el borrador estrategico usando el agente McKinsey Strategist PROEXCA.

---

## Preparacion

Antes de empezar, ten a mano:

1. Cifras aproximadas de exportacion de Canarias a Alemania, UK, Ghana y Senegal (puedes usar datos orientativos o pedir al agente que los estime).
2. Lista de sectores prioritarios de PROEXCA (agroalimentario, turismo, servicios digitales, energia renovable, audiovisual).
3. Presupuesto estimado disponible para el trimestre (ejemplo: 180.000 EUR).
4. Numero de empresas canarias activas en cada mercado objetivo.

---

## Walkthrough paso a paso

### Paso 1 — Definir la decision y el contexto

Prompt sugerido:

```
Actua como consultor estrategico senior. PROEXCA debe decidir entre dos estrategias para el proximo trimestre con un presupuesto de 180.000 EUR:

Opcion A: consolidar Alemania y Reino Unido (agroalimentario, turismo premium, servicios digitales). Tenemos 45 empresas activas, 2 misiones previas y 1 feria programada en Frankfurt.

Opcion B: abrir Ghana y Senegal (infraestructura, energia renovable, agroalimentario transformado). No tenemos presencia previa. Hay interes politico del Gobierno de Canarias por diversificacion.

Define el marco de decision: que variables criticas debemos analizar antes de recomendar una opcion. Estructura la respuesta como lista priorizada.
```

**Lo que debes ver:** Una lista de 6-10 variables criticas (tamanio de mercado, barreras de entrada, capacidad interna, coste de oportunidad, alineamiento politico, time-to-revenue, riesgo regulatorio). Si el agente da generalidades, repite pidiendo "variables especificas para una agencia de promocion exterior insular".

---

### Paso 2 — SWOT por opcion

Prompt sugerido:

```
Genera un analisis SWOT comparado para ambas opciones. Formato tabla con dos columnas (Europa Consolidada | Africa Occidental). Incluye al menos 4 elementos por cuadrante. Basa las fortalezas en capacidades reales de una agencia de promocion exterior de Canarias con 30 personas en plantilla.
```

**Lo que debes ver:** Tabla con fortalezas diferenciadas (no genericas). En Europa deben aparecer: red de contactos existente, conocimiento regulatorio, proximidad cultural. En Africa: novedad, menor competencia de otras CCAA, apoyo politico. Las amenazas deben ser concretas: Brexit para UK, inestabilidad en Sahel, falta de logistica directa.

---

### Paso 3 — Analisis VRIO de recursos clave

Prompt sugerido:

```
Aplica el framework VRIO a los 5 recursos mas relevantes de PROEXCA para esta decision:
1. Red de contactos institucionales en Europa
2. Conocimiento sectorial en agroalimentario
3. Presupuesto limitado (180K EUR)
4. Equipo tecnico de 30 personas
5. Marca institucional Canarias

Evalua cada recurso como Valioso / Raro / Inimitable / Organizado. Indica cual opcion estrategica aprovecha mejor cada recurso.
```

**Lo que debes ver:** Tabla VRIO con evaluacion SI/NO por dimension. El resultado debe mostrar que la red de contactos europea es el recurso con mayor ventaja competitiva sostenible (V+R+I+O), mientras que para Africa el equipo no esta organizado para capturar ese mercado. Esto sesga la recomendacion, pero es el dato real.

---

### Paso 4 — Opciones con trade-offs de segundo orden

Prompt sugerido:

```
Presenta 3 opciones estrategicas (no solo las dos iniciales, incluye una hibrida) con:
- Inversion requerida
- Retorno estimado a 6 y 12 meses (numero de empresas acompaniadas, acuerdos comerciales, facturacion export)
- Trade-offs de primer orden (que ganas, que pierdes)
- Trade-offs de segundo orden (consecuencias indirectas a 12-18 meses)
- Riesgo principal y mitigacion

Formato: tabla comparativa + parrafo de recomendacion.
```

**Lo que debes ver:** Tres opciones claras. La hibrida deberia proponer destinar 70-80% a Europa y 20-30% a un estudio exploratorio en Africa. Los trade-offs de segundo orden deben incluir: "si no abrimos Africa ahora, Andalucia o Valencia ocuparan ese espacio" o "si abandonamos la feria de Frankfurt, perdemos el slot para el proximo anio". La recomendacion debe ser explicita, no ambigua.

---

### Paso 5 — Plan 30/60/90 con metricas

Prompt sugerido:

```
Genera un plan de ejecucion 30/60/90 dias para la opcion recomendada. Cada bloque debe incluir:
- Acciones concretas (responsable generico: Director, Tecnico Senior, Tecnico)
- Entregable verificable
- Metrica de avance (KPI con numero objetivo)
- Dependencias criticas

Incluye una seccion de "alertas tempranas": seniales a los 30 dias que indicarian que debemos pivotar.
```

**Lo que debes ver:** Plan con 3-5 acciones por bloque temporal. Metricas como "15 empresas confirmadas para mision Alemania en dia 30", "3 acuerdos de intencion firmados en dia 60". Las alertas tempranas son clave: si no aparecen, pide explicitamente "que seniales a dia 30 nos dicen que esta estrategia no esta funcionando".

---

### Paso 6 — Documento para el Consejo

Prompt sugerido:

```
Redacta un documento ejecutivo de maximo 2 paginas para el Consejo de Administracion de PROEXCA con esta estructura:
1. Contexto y decision requerida (3 lineas)
2. Analisis realizado (resumen SWOT + VRIO en 1 parrafo)
3. Opciones evaluadas (tabla resumen)
4. Recomendacion y justificacion (1 parrafo directo)
5. Plan de ejecucion (30/60/90 resumido)
6. Recursos necesarios y riesgos
7. Decision solicitada al Consejo (frase exacta para acta)

Tono: institucional, directo, sin adjetivos innecesarios. El Consejo tiene 5 minutos para leer esto.
```

**Lo que debes ver:** Documento de 2 paginas maximo. La seccion 7 debe contener una frase tipo: "Se solicita al Consejo aprobar la asignacion de 180.000 EUR a la estrategia de consolidacion europea con ejecucion inmediata y revision a 90 dias." Si es vago, pide reformular con "redacta la frase exacta que apareceria en el acta del Consejo".

---

## Ajuste fino

- Si el SWOT es generico, anade: "Contextualiza para Canarias: insularidad, costes logisticos, zona ZEC, conectividad aerea limitada."
- Si las metricas son vagas, pide: "Convierte cada KPI a un numero concreto con fecha limite."
- Si la recomendacion es tibia ("depende de..."), insiste: "Si tuvieras que firmar esta recomendacion con tu nombre, cual seria. Elige una."

---

## Resultado esperado

Al finalizar dispondras de:

1. Marco de decision con variables criticas priorizadas.
2. SWOT comparado Europa vs. Africa.
3. VRIO de recursos clave de PROEXCA.
4. Tres opciones con trade-offs de primer y segundo orden.
5. Plan 30/60/90 con KPIs numericos.
6. Documento ejecutivo listo para Consejo de Administracion.

Tiempo total estimado: 30 minutos. Documento final directamente utilizable con revision minima.

---

## Errores comunes

1. **Aceptar un SWOT generico.** Si ves "fortaleza: buena reputacion" sin contexto PROEXCA, rechazalo. Exige especificidad insular y sectorial.
2. **Ignorar trade-offs de segundo orden.** La mayoria de decisiones fracasan por consecuencias indirectas. Si el agente solo da primer orden, fuerza la reflexion de segundo nivel.
3. **Plan sin responsable ni fecha.** Un plan que dice "gestionar contactos" no es un plan. Cada accion necesita quien, que entregable y cuando.
4. **Documento para Consejo demasiado largo.** Si supera 2 paginas, pide comprimir. Los consejeros no leen documentos largos.
5. **No incluir la frase para acta.** Sin una propuesta de acuerdo concreta, la reunion del Consejo termina sin decision. Siempre incluye la frase exacta.
