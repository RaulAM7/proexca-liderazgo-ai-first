# Analisis de Causa Raiz: 5 Whys + Ishikawa

## Por Que Importa la Causa Raiz

La mayoria de problemas organizacionales tienen sintomas visibles y causas subyacentes ocultas. Atacar el sintoma da alivio temporal. Atacar la causa raiz resuelve el problema de forma duradera.

**Ejemplo:**
- Sintoma: "Baja participacion en programa de ayudas"
- Causa superficial: "No hay suficiente comunicacion"
- Causa raiz: "Las empresas no confian en que cumplan requisitos porque la comunicacion historica ha sido ambigua sobre elegibilidad"

Si solo atacas "comunicar mas", envias mas emails que nadie lee. Si atacas la causa raiz (ambiguedad sobre elegibilidad), cambias EL MENSAJE de la comunicacion para aclarar requisitos de forma explicita, y eso si genera participacion.

Este archivo presenta dos tecnicas complementarias:
- **5 Whys**: Profundidad. Seguir preguntando "¿por que?" hasta llegar a causa raiz.
- **Ishikawa (Fishbone)**: Amplitud. Explorar sistematicamente todas las categorias de causas posibles.

## Tecnica 1: Los 5 Whys

### Que es
Los 5 Whys (5 Por Ques) es una tecnica iterativa de analisis que consiste en preguntar "¿por que?" sucesivamente (generalmente 5 veces, de ahi el nombre) para profundizar desde el sintoma visible hasta la causa raiz subyacente.

Origen: Desarrollado por Sakichi Toyoda (fundador Toyota) y popularizado en Toyota Production System. Usado en Lean Manufacturing, Six Sigma, y consultoria estrategica.

### Cuando usarlo
- Problema con causa no obvia
- Necesitas profundizar rapidamente (no tienes tiempo para analisis exhaustivo)
- Problema operativo o de proceso
- Quieres involucrar al equipo en diagnostico (es muy participativo)

### NO usarlo cuando
- Problema con multiples causas paralelas (usa Ishikawa)
- Problema muy complejo con interacciones no lineales
- Buscas culpables vs soluciones (5 Whys culpabiliza si no se hace bien)

### Proceso Paso a Paso

**Paso 1: Define el problema (sintoma observable)**
Debe ser especifico y verificable.
- Mal: "Las cosas no funcionan bien"
- Bien: "Solo 25 empresas han solicitado ayudas (vs 100 esperadas)"

**Paso 2: Pregunta "¿Por que?" (primera vez)**
¿Por que esta ocurriendo el problema?
Respuesta basada en hechos observables, no opiniones.

**Paso 3: Pregunta "¿Por que?" a la respuesta anterior (segunda vez)**
Toma la respuesta del paso 2 y pregunta por que ocurre ESO.

**Paso 4-6: Repite hasta llegar a causa raiz**
Generalmente 5 iteraciones, pero puede ser 3-7 segun complejidad.

**Regla de parada:** Has llegado a causa raiz cuando:
- La respuesta apunta a un proceso, politica o decision modificable (accionable)
- Seguir preguntando "¿por que?" te lleva a respuestas muy genericas ("porque asi es el mundo") o fuera de control
- El equipo tiene consenso: "aqui esta el problema real"

### Ejemplo Aplicado: Caso Institucional

**Problema:** Solo 25 empresas han solicitado ayudas de digitalizacion (vs 100 esperadas)

**Why 1:** ¿Por que solo 25 empresas han solicitado?
→ Porque pocas empresas conocen el programa

**Why 2:** ¿Por que pocas empresas conocen el programa?
→ Porque solo se envio 1 email general a base de datos y no hubo seguimiento

**Why 3:** ¿Por que solo se envio 1 email sin seguimiento?
→ Porque el equipo de comunicacion no tenia plan estructurado de campaña, solo "enviar anuncio"

**Why 4:** ¿Por que no habia plan estructurado de campaña?
→ Porque cuando se diseño el programa, no se asigno presupuesto ni responsable especifico para comunicacion (se asumio que "se comunicaria solo")

**Why 5:** ¿Por que no se asigno presupuesto/responsable para comunicacion?
→ Porque el diseño del programa se enfoco 100% en el contenido de la ayuda (requisitos, cuantia) y se asumio que "si es bueno, las empresas vendran solas"

**Causa raiz identificada:**
Supuesto erroneo en diseño de programa: "si la ayuda es buena, las empresas la buscaran activamente". Falta de metodologia de diseño que incluya plan go-to-market desde el inicio.

**Accion derivada:**
- Corto plazo: Diseñar y ejecutar campaña comunicacion estructurada para programa actual (email + llamadas + eventos)
- Medio plazo: Cambiar metodologia diseño de programas → incluir obligatoriamente plan comunicacion + presupuesto + responsable antes de lanzar
- Largo plazo: Formar equipo en marketing de programas publicos (demand generation)

### Errores Comunes en 5 Whys

**Error 1: Parar demasiado pronto (en sintoma secundario)**
- Why 1: ¿Por que baja participacion? → Porque no conocen programa (STOP aqui)
- Problema: "No conocen" es SINTOMA, no causa raiz. Sigue preguntando.

**Error 2: Respuestas vagas o genericas**
- Why 3: ¿Por que no habia plan? → "Porque no somos buenos en comunicacion"
- Problema: Muy generico, no accionable. Especifica: ¿por que no somos buenos? ¿falta formacion? ¿falta presupuesto? ¿falta metodologia?

**Error 3: Buscar culpables vs causas sistemicas**
- Why 4: ¿Por que no se asigno responsable? → "Porque el director X no penso en ello"
- Problema: Culpabiliza persona. Mejor: "Porque el proceso de diseño de programas no incluye checklist de comunicacion". Eso es sistemico y modificable.

**Error 4: Respuestas basadas en suposiciones, no hechos**
- Why 2: ¿Por que pocas conocen? → "Porque no les interesa"
- Problema: Suposicion. Verifica con datos antes de asumir.

**Error 5: Seguir ramas multiples simultaneamente (pierde foco)**
Si hay multiples causas → usa Ishikawa para organizarlas, luego 5 Whys para profundizar en cada rama.

### Plantilla de Trabajo: 5 Whys

```
PROBLEMA (sintoma observable):
[Descripcion especifica y verificable del problema]

WHY 1: ¿Por que esta ocurriendo el problema?
Respuesta: ____________
Verificacion (evidencia): ____________

WHY 2: ¿Por que ocurre [respuesta Why 1]?
Respuesta: ____________
Verificacion: ____________

WHY 3: ¿Por que ocurre [respuesta Why 2]?
Respuesta: ____________
Verificacion: ____________

WHY 4: ¿Por que ocurre [respuesta Why 3]?
Respuesta: ____________
Verificacion: ____________

WHY 5: ¿Por que ocurre [respuesta Why 4]?
Respuesta: ____________
Verificacion: ____________

CAUSA RAIZ IDENTIFICADA:
[La respuesta final que es accionable y modificable]

ACCION CORRECTIVA:
- Corto plazo (atajar sintoma): ____________
- Medio plazo (resolver causa raiz): ____________
- Largo plazo (prevenir recurrencia): ____________

RESPONSABLE: ____________
PLAZO: ____________
```

## Tecnica 2: Diagrama de Ishikawa (Fishbone / Espina de Pescado)

### Que es
El diagrama de Ishikawa, tambien llamado "espina de pescado" o "diagrama de causa-efecto", es una herramienta visual que organiza sistematicamente todas las causas potenciales de un problema en categorias predefinidas.

Origen: Creado por Kaoru Ishikawa (ingeniero quimico japones) en 1960s para control de calidad en industria. Adoptado en Six Sigma, gestion de procesos, y analisis estrategico.

Estructura visual: Parece espina de pescado. La "cabeza" es el problema. Las "espinas" son categorias de causas.

### Cuando usarlo
- Problema con multiples causas posibles (no una sola cadena lineal)
- Necesitas exploracion sistematica (no quieres dejar huecos)
- Trabajo en equipo (brainstorming estructurado)
- Problema operacional, de proceso, o de servicio

### Categorias Estandar (las 6M de manufactura):
Originalmente diseñadas para produccion industrial:
1. **Manpower** (Personas)
2. **Methods** (Metodos/Procesos)
3. **Machines** (Maquinas/Tecnologia)
4. **Materials** (Materiales/Inputs)
5. **Measurement** (Medicion/Metricas)
6. **Mother Nature** (Entorno/Ambiente)

### Categorias Adaptadas para Organizaciones de Servicios/Institucionales:
Mas relevantes para PROEXCA y organizaciones no-industriales:
1. **Personas** (People): Equipo, competencias, motivacion, capacitacion
2. **Procesos** (Processes): Flujos de trabajo, procedimientos, metodologias
3. **Tecnologia** (Technology): Herramientas, sistemas, plataformas
4. **Comunicacion** (Communication): Interna y externa, canales, mensajes
5. **Recursos** (Resources): Presupuesto, tiempo, materiales
6. **Entorno** (Environment): Contexto externo, regulacion, mercado

Puedes adaptar categorias segun tu contexto. Lo importante es que sean MECE (mutuamente excluyentes, colectivamente exhaustivas).

### Proceso Paso a Paso

**Paso 1: Define problema claramente**
Escribelo en la "cabeza del pescado".
Ejemplo: "Baja participacion empresas en programa ayudas digitalizacion"

**Paso 2: Dibuja estructura base**
```
                      Personas
                         |
                         |
     Procesos -----------|----------- Comunicacion
                         |
                         |----------> PROBLEMA
                         |
  Tecnologia ------------|----------- Recursos
                         |
                         |
                      Entorno
```

**Paso 3: Brainstorming de causas por categoria**
Para CADA categoria, pregunta: "¿Que factores de [categoria] podrian estar contribuyendo al problema?"

Genera lista de causas posibles. En esta fase: cantidad > calidad. No filtres aun.

**Paso 4: Organiza causas en sub-niveles**
Algunas causas son primarias, otras secundarias (causas de las causas).

Ejemplo:
```
Comunicacion
├─ Alcance insuficiente (causa primaria)
│  ├─ Solo 1 email enviado (sub-causa)
│  └─ No hay telefono/contacto directo (sub-causa)
└─ Mensaje poco claro (causa primaria)
   ├─ No explica beneficio concreto (sub-causa)
   └─ Requisitos ambiguos (sub-causa)
```

**Paso 5: Prioriza causas criticas**
No todas las causas tienen el mismo impacto. Marca las 2-3 causas por categoria que tienen mayor probabilidad de explicar el problema.

Criterios:
- Evidencia (¿tenemos datos que lo respalden?)
- Impacto (si lo resolvemos, ¿mejora mucho?)
- Control (¿podemos modificarlo?)

**Paso 6: Valida con datos**
Para las causas priorizadas, diseña pruebas rapidas (ver Hypothesis_Driven_Thinking.md) para confirmar/desprobar.

### Ejemplo Aplicado: Caso Institucional

**Problema:** Baja participacion en programa ayudas digitalizacion (25 solicitudes vs 100 esperadas)

**Categoria 1: PERSONAS**
- Equipo comunicacion sin formacion en marketing digital
- Equipo tecnico sin tiempo asignado para soporte telefono
- Falta responsable dedicado del programa

**Categoria 2: PROCESOS**
- No hay proceso estructurado lanzamiento programas (checklist)
- Formulario solicitud muy largo (12 paginas)
- No hay seguimiento empresas que empezaron solicitud pero no terminaron

**Categoria 3: TECNOLOGIA**
- Base de datos empresas desactualizada (30% emails rebotan)
- Sistema formulario online no mobile-friendly
- No hay CRM para trackear pipeline solicitudes

**Categoria 4: COMUNICACION**
- Solo 1 email enviado (sin recordatorios)
- Mensaje email generico (no personalizado por sector)
- No explica beneficio concreto, solo requisitos
- No hay llamadas proactivas
- No hay eventos informativos presenciales

**Categoria 5: RECURSOS**
- No se asigno presupuesto para comunicacion del programa
- No se asigno tiempo equipo para llamadas seguimiento
- Solo 3 meses ventana solicitud (poco tiempo)

**Categoria 6: ENTORNO**
- Contexto post-COVID: empresas saturadas programas ayudas publicas (fatiga)
- Competencia: otras entidades lanzaron programas similares mismo periodo
- Empresas priorizan liquidez inmediata vs inversion digitalizacion

**Priorizacion (causas criticas marcadas con **):**

Personas:
- Falta responsable dedicado **

Procesos:
- Formulario muy largo **
- No hay seguimiento abandonos

Tecnologia:
- Base datos desactualizada **

Comunicacion:
- Solo 1 email sin seguimiento **
- Mensaje no explica beneficio concreto **

Recursos:
- No presupuesto comunicacion **

Entorno:
- Fatiga programas COVID

**Top 3 causas raiz priorizadas para atacar:**
1. Comunicacion insuficiente (solo 1 email) + mensaje poco claro
2. Formulario demasiado complejo (12 paginas)
3. Base datos desactualizada (30% emails rebotan)

**Acciones derivadas:**
1. Campaña comunicacion: 3 emails + 50 llamadas + 2 webinars. Mensaje reformulado (caso de exito + beneficio concreto)
2. Simplificar formulario a 4 paginas + wizard guiado
3. Actualizar base datos (verificacion emails + telefono)

### Plantilla de Trabajo: Ishikawa

```
PROBLEMA:
[Descripcion clara y especifica]

CATEGORIA: PERSONAS
Causas posibles:
- [ ] _______________
- [ ] _______________
- [ ] _______________ **PRIORITARIA

CATEGORIA: PROCESOS
Causas posibles:
- [ ] _______________
- [ ] _______________ **PRIORITARIA
- [ ] _______________

CATEGORIA: TECNOLOGIA
Causas posibles:
- [ ] _______________
- [ ] _______________

CATEGORIA: COMUNICACION
Causas posibles:
- [ ] _______________ **PRIORITARIA
- [ ] _______________
- [ ] _______________

CATEGORIA: RECURSOS
Causas posibles:
- [ ] _______________
- [ ] _______________

CATEGORIA: ENTORNO
Causas posibles:
- [ ] _______________
- [ ] _______________

TOP 3 CAUSAS RAIZ PRIORIZADAS:
1. [Categoria]: [Causa] - Impacto: [Alto/Medio] - Evidencia: [Si/Parcial/Asumir] - Control: [Alto/Medio/Bajo]
2. [Categoria]: [Causa] - Impacto: ...
3. [Categoria]: [Causa] - Impacto: ...

ACCIONES CORRECTIVAS:
Por cada causa raiz:
- Causa 1: Accion ___________ | Responsable: ___ | Plazo: ___
- Causa 2: Accion ___________ | Responsable: ___ | Plazo: ___
- Causa 3: Accion ___________ | Responsable: ___ | Plazo: ___
```

## Como Combinar 5 Whys + Ishikawa

Son tecnicas complementarias:
- **Ishikawa = AMPLITUD**: Exploracion sistematica de todas las categorias de causas posibles
- **5 Whys = PROFUNDIDAD**: Profundizacion en una cadena causal hasta causa raiz

**Estrategia combinada:**

1. **Paso 1:** Usa Ishikawa para generar mapa completo de causas posibles (brainstorming estructurado)

2. **Paso 2:** Prioriza 2-3 causas del Ishikawa que parecen mas criticas

3. **Paso 3:** Para CADA causa priorizada, aplica 5 Whys para profundizar hasta la causa raiz

4. **Paso 4:** Valida causas raiz con datos (ver Hypothesis_Driven_Thinking.md)

5. **Paso 5:** Diseña acciones correctivas por causa raiz confirmada

**Ejemplo:**

Ishikawa identifica: "Comunicacion: solo 1 email enviado" como causa prioritaria.

Aplicas 5 Whys:
- Why 1: ¿Por que solo 1 email? → Porque no habia plan de campaña
- Why 2: ¿Por que no plan? → Porque no se asigno responsable comunicacion
- Why 3: ¿Por que no responsable? → Porque diseño de programa no incluye plan go-to-market
- Why 4: ¿Por que diseño no incluye GTM? → Porque metodologia actual se enfoca solo en contenido ayuda, no en demand generation
- Causa raiz: Falta metodologia diseño de programas que integre go-to-market desde inicio

Accion: Rediseñar metodologia con checklist que incluya: responsable comunicacion, presupuesto, plan lanzamiento, metricas de exito.

## Errores Comunes en Ishikawa

**Error 1: Categorias que se solapan (no MECE)**
Ejemplo: "Personas / Formacion / Motivacion" → Formacion y Motivacion son sub-categorias de Personas

Solucion: Usa estructura jerarquica. Personas (nivel 1) → Formacion/Motivacion (nivel 2)

**Error 2: Listar causas sin evidencia (brainstorming sin validacion)**
Ishikawa genera HIPOTESIS de causas. No asumas que todas son ciertas. Valida las prioritarias con datos.

**Error 3: Incluir demasiadas causas (lista interminable)**
Si tienes 40 causas listadas, el diagrama no es util. Prioriza. Marca las 5-7 causas mas criticas y enfocate en esas.

**Error 4: Quedarse en descripcion, no llegar a causa raiz**
"Problema: baja participacion. Causa: pocas empresas aplican."
Eso es descripcion del problema, no causa. Usa 5 Whys para profundizar.

## Cuando Usar Cual

| Situacion | Herramienta recomendada |
|-----------|------------------------|
| Causa parece unica y lineal | 5 Whys |
| Causas multiples y paralelas | Ishikawa |
| Exploracion inicial (no sabes cuantas causas) | Ishikawa primero |
| Ya identificaste causa, necesitas profundizar | 5 Whys |
| Trabajo en equipo (brainstorming) | Ishikawa |
| Analisis individual rapido | 5 Whys |
| Problema operacional repetitivo | 5 Whys |
| Problema complejo sistemico | Ishikawa + 5 Whys combinados |

## Resumen Ejecutivo

- **Analisis causa raiz** = ir mas alla del sintoma, encontrar la causa subyacente modificable
- **5 Whys**: Tecnica de profundidad. Preguntar "¿por que?" 5 veces (o 3-7) hasta llegar a causa raiz accionable
- **Ishikawa**: Tecnica de amplitud. Explorar sistematicamente causas en 6 categorias (Personas, Procesos, Tecnologia, Comunicacion, Recursos, Entorno)
- **Errores 5 Whys**: Parar demasiado pronto, respuestas vagas, culpar personas vs sistemas, no validar con datos
- **Errores Ishikawa**: Categorias no MECE, listas interminables sin priorizar, quedarse en descripcion vs causa raiz
- **Estrategia combinada**: Ishikawa para generar mapa completo → Priorizar causas criticas → 5 Whys para profundizar en cada una → Validar con datos → Acciones correctivas
- **Objetivo final**: Acciones que resuelven causa raiz (impacto duradero) vs acciones que alivian sintoma (temporal)
