# Arboles de Problemas y Principio MECE

## Que es un Arbol de Problemas (Issue Tree)

Un arbol de problemas es una herramienta de pensamiento estructurado que descompone un problema complejo en partes mas pequeñas y manejables, organizadas jerarquicamente. Es la herramienta fundamental de consultoria estrategica (McKinsey, BCG, Bain) para abordar problemas donde no esta clara la causa o la solucion.

La clave del arbol de problemas es el **principio MECE**: Mutually Exclusive, Collectively Exhaustive (Mutuamente Excluyente, Colectivamente Exhaustivo).

**MECE significa:**
- **Mutuamente Excluyente (ME)**: Las categorias no se solapan. Cada elemento pertenece a una sola rama. No hay ambiguedad sobre donde clasificar algo.
- **Colectivamente Exhaustivo (CE)**: Las categorias cubren todas las posibilidades. No hay huecos. Nada queda fuera del analisis.

Ejemplo NO MECE: "Clientes jovenes, clientes mayores, clientes digitales" → "clientes digitales" se solapa con jovenes y mayores (no ME)

Ejemplo MECE: "Clientes 18-35 años, clientes 36-55 años, clientes 56+ años" → sin solapamiento, cubre todos (ME + CE)

## Cuando usar un Arbol de Problemas

Usa arboles de problemas cuando:
- El problema es complejo y tiene multiples dimensiones
- No esta clara la causa del problema
- Necesitas priorizar donde enfocar recursos limitados de analisis
- Tienes que estructurar una investigacion o analisis
- Necesitas comunicar un enfoque estructurado a un equipo o cliente

NO uses arboles si:
- El problema es simple y la causa es obvia
- Ya conoces la solucion y solo necesitas ejecutar
- El problema requiere creatividad divergente (brainstorming) vs pensamiento convergente

## Tipos de Arboles de Problemas

### 1. Arbol "Why" (Por que)
Pregunta clave en la raiz: "¿Por que esta ocurriendo X?"

Estructura: descompone causas posibles

Ejemplo: "¿Por que las empresas canarias no repiten en misiones comerciales?"
```
¿Por que no repiten?
├─ Experiencia negativa en mision anterior
│  ├─ Organizacion deficiente
│  ├─ Contactos poco relevantes
│  └─ ROI no cumplido expectativas
├─ Cambio en prioridades de la empresa
│  ├─ Cambio de mercado objetivo
│  ├─ Reduccion presupuesto internacionalizacion
│  └─ Cambio equipo directivo
└─ Falta de seguimiento post-mision
   ├─ No hay acompañamiento posterior
   ├─ No se miden resultados a medio plazo
   └─ No hay incentivo para segunda mision
```

### 2. Arbol "How" (Como)
Pregunta clave: "¿Como podriamos lograr X?"

Estructura: descompone opciones o caminos posibles

Ejemplo: "¿Como podriamos aumentar participacion en programa de ayudas?"
```
¿Como aumentar participacion?
├─ Mejorar awareness del programa
│  ├─ Campaña email directa
│  ├─ Eventos presenciales informativos
│  └─ Embajadores empresariales
├─ Reducir friccion en proceso solicitud
│  ├─ Simplificar formulario
│  ├─ Crear wizard guiado paso a paso
│  └─ Ofrecer soporte telefonico
└─ Aumentar atractivo del programa
   ├─ Ampliar cuantia ayudas
   ├─ Acelerar tiempo resolucion
   └─ Flexibilizar requisitos elegibilidad
```

### 3. Arbol de Segmentacion
Pregunta clave: "¿Cuales son todas las partes de X?"

Estructura: descompone un universo en segmentos

Ejemplo clasico en consultoria: Arbol de ingresos
```
Ingresos totales
├─ Ingresos Producto A
│  ├─ Clientes nuevos × precio medio × volumen
│  └─ Clientes recurrentes × precio medio × volumen
└─ Ingresos Producto B
   ├─ Clientes nuevos × precio medio × volumen
   └─ Clientes recurrentes × precio medio × volumen
```

Ejemplo institucional: "¿Cuales son todos los canales de llegada a empresas?"
```
Canales de llegada
├─ Digitales
│  ├─ Email newsletter
│  ├─ Web institucional
│  └─ LinkedIn
├─ Presenciales
│  ├─ Eventos PROEXCA
│  ├─ Visitas directas
│  └─ Ferias sectoriales
└─ Intermediados
   ├─ Clusters sectoriales
   ├─ Camaras de comercio
   └─ Asociaciones empresariales
```

## Proceso Paso a Paso para Construir un Arbol MECE

### Paso 1: Define la pregunta raiz con precision
Mala: "Analizar el programa de ayudas"
Buena: "¿Por que el programa de ayudas tiene solo 30% de la demanda esperada?"

La pregunta debe ser especifica, accionable, y con un objetivo claro.

### Paso 2: Identifica el tipo de arbol
¿Es un problema de diagnostico? → Why
¿Es un problema de solucion? → How
¿Es un problema de cobertura? → Segmentacion

### Paso 3: Genera dimensiones nivel 1 (branches principales)
Haz una lista de categorias principales que:
- Cubran todas las posibilidades (CE)
- No se solapen entre si (ME)

Frameworks utiles para nivel 1:
- **Problema organizacional**: Personas / Procesos / Tecnologia / Entorno
- **Problema de mercado**: Oferta / Demanda / Competencia / Regulacion
- **Problema de programa**: Diseño / Comunicacion / Ejecucion / Seguimiento
- **Analisis estrategico**: Interno / Externo
- **Analisis temporal**: Antes / Durante / Despues

### Paso 4: Testea MECE en nivel 1
Pregunta critica 1: "¿Hay algo que no encaja en ninguna categoria?" (test CE)
Pregunta critica 2: "¿Hay algo que encaja en mas de una?" (test ME)

Si falla, reformula categorias.

### Paso 5: Descompone ramas prioritarias a nivel 2, 3...
No es necesario bajar todos los niveles de todas las ramas. Prioriza:
- ¿Que rama tiene mas probabilidad de contener la respuesta?
- ¿Que rama tiene mas impacto si se resuelve?
- ¿Que rama es mas facil de analizar con datos disponibles?

Profundiza selectivamente.

### Paso 6: Identifica hipotesis y plan de analisis
Para cada rama terminal relevante:
- ¿Que dato necesitamos para confirmar/descartar esta hipotesis?
- ¿Como obtenemos ese dato?
- ¿Cual es el "killer test" — el dato que nos daria la respuesta definitiva?

## Errores Comunes al Construir Arboles MECE

### Error 1: Categorias que se solapan (viola ME)
Ejemplo: "Marketing digital / Email marketing / Redes sociales"
→ Email marketing es parte de marketing digital (se solapa)

Correccion: "Marketing digital (email + RRSS + web) / Marketing offline / Marketing intermediado"

### Error 2: Categorias que no cubren todo (viola CE)
Ejemplo: "Clientes grandes / Clientes pequeños"
→ ¿Que pasa con clientes medianos?

Correccion: "Clientes grandes (>100 empleados) / Medianos (10-100) / Pequeños (<10)"

### Error 3: Mezclar niveles logicos
Ejemplo: "Problema de presupuesto / Problema de personal / Falta de formacion"
→ "Falta de formacion" es un sub-problema de "personal" (no mismo nivel)

Correccion: Nivel 1: Presupuesto / Personal / Tecnologia
Nivel 2 bajo Personal: Numero / Capacitacion / Motivacion

### Error 4: Ser demasiado exhaustivo
No necesitas un arbol perfecto de 47 ramas. Necesitas un arbol util que te diga donde enfocar.

Regla practica: 3-5 ramas nivel 1, profundizar 2-3 niveles solo en ramas criticas.

### Error 5: Confundir arbol con lista
Un arbol tiene jerarquia y estructura logica. Una lista es plana.

Mal: "Causas del problema: falta de presupuesto, falta de personal, mal marketing, tecnologia vieja..."

Bien: Organizar en jerarquia logica con relacion padre-hijo clara.

## Plantilla de Trabajo

```
PREGUNTA RAIZ: [Escribe aqui la pregunta especifica que quieres responder]

TIPO DE ARBOL: [ ] Why  [ ] How  [ ] Segmentacion

NIVEL 1 (verificar MECE):
├─ Dimension 1: __________
├─ Dimension 2: __________
├─ Dimension 3: __________
└─ Dimension 4: __________

Test MECE:
- ¿Algo queda fuera? → [si/no, especifica]
- ¿Algo encaja en mas de una? → [si/no, especifica]

PRIORIZACION (que rama profundizar):
Rama prioritaria: ________
Razon: [impacto alto / probabilidad alta / datos disponibles]

NIVEL 2 bajo rama prioritaria:
├─ Sub-dimension 1: __________
├─ Sub-dimension 2: __________
└─ Sub-dimension 3: __________

HIPOTESIS Y PRUEBAS:
Para [rama terminal], necesitamos verificar:
- Dato requerido: __________
- Como obtenerlo: __________
- Killer test: __________
```

## Ejemplo Aplicado: Caso Institucional

**Situacion**: PROEXCA organiza misiones comerciales a mercados internacionales. En los ultimos 2 años, solo el 25% de empresas participantes repiten en una segunda mision (vs 60% historico). La Direccion necesita entender por que.

**Paso 1: Pregunta raiz**
"¿Por que las empresas canarias no repiten en misiones comerciales organizadas por PROEXCA?"

**Paso 2: Tipo de arbol**
Why tree (diagnostico de causas)

**Paso 3 y 4: Nivel 1 MECE**
```
¿Por que no repiten en misiones?
├─ A. Experiencia negativa en mision anterior
├─ B. Cambio en situacion/prioridades de la empresa
├─ C. Barrera estructural para repetir (proceso/coste)
└─ D. Falta de seguimiento post-mision PROEXCA
```

Test MECE:
- CE: ¿Algo queda fuera? → Podria haber "competencia de otras entidades" pero cae en B (priorizan otra cosa)
- ME: ¿Solapamiento? → No, cada categoria es distinta

**Paso 5: Profundizar rama A (experiencia negativa)**
```
A. Experiencia negativa en mision anterior
├─ A1. Organizacion logistica deficiente
│   ├─ Hoteles/transporte problematicos
│   ├─ Agenda desorganizada o cambiante
│   └─ Falta de informacion previa clara
├─ A2. Calidad de contactos establecidos baja
│   ├─ Contactos no relevantes para sector empresa
│   ├─ Contactos poco cualificados (no decisores)
│   └─ Numero insuficiente de reuniones
└─ A3. ROI percibido bajo
    ├─ Sin contratos cerrados post-mision
    ├─ Sin continuidad contactos despues
    └─ Coste de participacion alto vs resultado
```

**Paso 6: Hipotesis y plan de analisis**

Rama A2 (calidad contactos) → Hipotesis prioritaria

**Hipotesis**: "Las empresas no repiten porque los contactos establecidos no son relevantes o decisores"

**Killer test**:
- Dato: % de contactos post-mision que derivaron en al menos 1 reunion de negocio seria
- Como obtener: Encuesta a empresas no repetidoras ultimos 2 años (30 empresas, pregunta directa)
- Pregunta clave: "De los contactos establecidos en la mision, ¿cuantos derivaron en reuniones de negocio posteriores?" 0 / 1-3 / 4+

Si <50% de empresas tuvo al menos 1 reunion seria → confirmamos hipotesis A2

**Accion derivada**: Si se confirma A2 → revisar proceso de seleccion previa de contactos, exigir nivel minimo (Director/VP+), reducir numero contactos pero subir calidad

## Cuando Combinar con Otras Herramientas

**Arbol MECE + Hipotesis**: Usa el arbol para generar hipotesis, luego prioriza cual testear primero

**Arbol MECE + 5 Whys**: Usa 5 Whys para profundizar en una rama especifica del arbol

**Arbol MECE + Ishikawa**: Usa Ishikawa para el nivel 1 (categorias predefinidas: Personas, Procesos, etc), luego arbol para profundizar

**Arbol MECE + Matriz Decision**: Si es un arbol "How", cada rama nivel 1 puede ser una opcion en la matriz

## Resumen Ejecutivo

- Arbol de problemas = descomposicion jerarquica de problema complejo
- MECE = Mutuamente Excluyente + Colectivamente Exhaustivo (sin solapamientos, sin huecos)
- 3 tipos: Why (diagnostico), How (solucion), Segmentacion (cobertura)
- No busques perfeccion, busca utilidad: 3-5 ramas nivel 1, profundiza selectivamente
- Test MECE riguroso en nivel 1, mas flexible en niveles inferiores
- El arbol es medio, no fin: objetivo es identificar donde enfocar analisis
- Combina con hipotesis, 5 Whys, Ishikawa segun necesidad del caso
