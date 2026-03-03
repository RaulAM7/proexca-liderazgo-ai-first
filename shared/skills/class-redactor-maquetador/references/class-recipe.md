# Class Recipe

Receta completa para producir clases de teoria y practica del programa "Liderazgo Inteligente".

## Principios generales

- **"Sistema, no curso"** — el directivo debe sentir que esta aprendiendo a operar, no a estudiar
- **Ejecutivo** — cada frase justifica su existencia. Cero relleno.
- **Escaneable** — headings claros, bullets, bold para vocabulario. Un directivo debe poder extraer valor en 5 minutos de escaneo rapido.
- **Trazable** — todo contenido derivable del blueprint + context files. Nada inventado.
- **Conectado** — cada clase cierra enlazando con la siguiente. El modulo es un hilo, no piezas sueltas.

## Receta de TEORIA (T-XX)

**Limite:** Max 1500 palabras. Duracion lectura: ~15-20 min.

### 1. Objetivo de aprendizaje
1-2 frases empezando con "Al terminar esta clase, seras capaz de..."
- Concreto y verificable (no "entenderas mejor", sino "podras identificar 3 use cases donde IA reduce tu tiempo de produccion")

### 2. Agenda
3-5 items numerados con minutos estimados:
```
1. Por que esto importa para tu rol (3 min)
2. Los 3 retos que enfrentas hoy (5 min)
3. Como la IA los resuelve (5 min)
4. Tu agente: que hace y por que (5 min)
```

### 3. Desarrollo
3-5 subsecciones headed. Cada una:
- **Abre** conectando con la realidad del directivo (no con teoria abstracta)
- **Core:** 2-3 parrafos o listas de bullets con contenido sustantivo
- **Callout box** para concepto clave (si aplica) — formato: `> **Concepto clave:** [texto]`
- **Cierra** conectando con la siguiente subseccion

### 4. Puntos clave (takeaways)
3-5 bullets accionables. Test: ¿el directivo puede hacer algo con esto manana? Si no, reescribir.

### 5. Conexion con lo que viene
1-2 frases enlazando con la siguiente clase. Generar anticipacion sin spoilers.

---

## Receta de PRACTICA (P-XX)

**Limite:** Max 2000 palabras. Duracion: ~25-30 min.

### 1. Objetivo practico
1 frase describiendo que PRODUCIRA el directivo:
- "Al terminar, tendras un dosier sectorial completo listo para enviar"
- No "practicaras el uso del agente" — concreto y entregable.

### 2. Supuesto (escenario realista)
2-3 parrafos de contexto PROEXCA. Debe incluir:
- Quien eres en el escenario (rol)
- Que situacion enfrentas (evento, deadline, necesidad)
- Que necesitas producir (output concreto)
- Por que es urgente o importante

Sectores/contextos validos: internacionalizacion, ferias comerciales, misiones comerciales, analisis sectorial (aeroespacial, audiovisual, gaming, economia azul), comunicacion con inversores, promocion de Canarias.

### 3. Preparacion (inputs necesarios)
Lista de bullets: que necesita tener listo antes de empezar:
- Datos del contexto (sector, pais, evento, destinatario)
- Acceso al agente correspondiente
- Documentos de referencia (si aplica)

### 4. Walkthrough paso a paso
4-8 pasos numerados. **Cada paso:**

```markdown
### Paso N: [Verbo imperativo — accion concreta]
[Instrucciones: que escribir, que prompt usar, que configurar]

Prompt sugerido:
> "[Prompt concreto que el directivo copia y pega]"

**Lo que debes ver:** [Descripcion del resultado esperado — que aparece, que formato tiene, que contiene]
```

Reglas:
- Verbos imperativos: "Abre", "Escribe", "Revisa", "Ajusta", "Exporta"
- Prompts concretos y copiables — no "escribe tu consulta"
- "Lo que debes ver" en CADA paso — el directivo necesita saber si va bien
- Si un paso tiene opciones, mostrar la recomendada primero

### 5. Ajuste fino
2-3 parrafos sobre como iterar y mejorar el resultado:
- Que revisar primero (tono, datos, estructura)
- Como pedir al agente que corrija
- Cuando parar de iterar

### 6. Resultado esperado
Descripcion del output final. Idealmente con estructura visible:
```
Tu dosier final deberia tener:
- Portada con titulo del sector + contexto de la mision
- Resumen ejecutivo (1 pagina)
- 3-5 secciones de contenido sectorial
- Datos clave y fuentes
- Recomendaciones para la mision
```

### 7. Errores comunes
3-5 pares error + fix:
```
- **Error:** Dar al agente un prompt vago ("hazme un dosier del sector")
  **Fix:** Especificar: sector, pais, evento, audiencia, longitud deseada

- **Error:** No revisar datos antes de enviar
  **Fix:** Siempre verificar cifras y fuentes contra documentos internos
```

---

## YAML Frontmatter

### Teoria
```yaml
---
class_id: "T-01"
module_id: "04"
type: theory
title: "Que vamos a aprender en este modulo"
duration_minutes: 15
blueprint_version: 1
version: 1
---
```

### Practica
```yaml
---
class_id: "P-01"
module_id: "04"
type: practice
title: "Practica: dosier sectorial para mision comercial"
duration_minutes: 25
use_case_ref: "CU-01"
agent_ref: "Marketing Estrategico PROEXCA"
blueprint_version: 1
version: 1
---
```
