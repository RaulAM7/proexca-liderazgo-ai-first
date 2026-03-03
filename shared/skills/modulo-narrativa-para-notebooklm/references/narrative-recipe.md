# Narrative Recipe — 9 Secciones

Guia detallada para generar cada seccion de la narrativa de modulo. Calibrada contra el ejemplo existente: narrativa del modulo "Domina Lo Esencial".

## Fuente de calibracion

Ruta del ejemplo:
`00_inbox/02_Contents/00_Modulo_Domina_Lo_Esencial_1/0_Resumen_Multimedia_Modulo/Narrativa Generacion Multimedia Modulo Domina lo esencial.md`

El ejemplo tiene ~7 secciones y ~100 lineas. La receta extiende el modelo con 2 secciones adicionales (8 y 9) para incorporar informacion de GPT packages y clases cuando estan disponibles.

---

## Seccion 1: Contexto general

**Proposito:** Posicionar este modulo dentro del viaje DIRECT. No describir contenido.

**Patron:**
- Frase de apertura que rompa expectativas ("Este programa no es un curso de...")
- Presentar Metodo DIRECT como sistema, no como curso
- Situar el verbo del modulo en la secuencia (despues de X, antes de Y)

**Ejemplo de referencia:** "Este programa no es un curso tradicional de inteligencia artificial. Es el Metodo DIRECT de EduKami para IA para Directivos AI-First..."

---

## Seccion 2: Que es [verbo DIRECT]

**Proposito:** Definir como CAPACIDAD que el directivo adquiere, no como herramienta que aprende.

**Patron:**
- Empezar diciendo lo que NO es (para filtrar)
- Definir como competencia ejecutiva
- Conectar con el dia a dia del directivo

**Ejemplo de referencia:** "DIRECT no es una metodologia academica. Es una secuencia operativa que permite a un directivo: pensar mejor, decidir mas rapido..."

---

## Seccion 3: Rol especifico del modulo

**Proposito:** Que instala en el workflow diario del directivo. Operativo, no conceptual.

**Patron:**
- Decir explicitamente que NO busca (3-4 bullets)
- Definir el objetivo concreto en terminos de capacidad instalada
- Usar formato "Este modulo existe para que el directivo..."

**Ejemplo de referencia:** "No busca que el directivo aprenda todas las herramientas... Su objetivo es instalar un stack minimo viable..."

---

## Seccion 4: Que NO es este modulo (OBLIGATORIA)

**Proposito:** Exclusiones explicitas. Filtro de expectativas. Sin esta seccion la narrativa pierde poder.

**Patron:**
- Lista explicita de 4-5 cosas que el modulo NO es
- Cierre con lo que SI es (una frase)
- Esta seccion es el "anti-pitch" — define limites para generar confianza

**Ejemplo de referencia:** "Este modulo NO es: un catalogo de herramientas, una formacion tecnica, un curso exhaustivo, un espacio para experimentar sin foco. Todo lo contrario. Es un filtro."

**REGLA:** Esta seccion nunca puede estar vacia o ser superficial.

---

## Seccion 5: Que debe sentir el directivo al terminarlo

**Proposito:** Estado COGNITIVO/EMOCIONAL objetivo — no lista de conocimientos adquiridos.

**Patron:**
- Empezar con "Al completar este modulo, el directivo NO deberia pensar: [conocimiento]"
- Continuar con "Deberia pensar: [estado cognitivo]"
- Cerrar con "Y, sobre todo: [frase de confianza]"

**Ejemplo de referencia:** "No deberia pensar: 'Ahora se mucho de IA.' Deberia pensar: 'Ahora ya puedo trabajar con IA sin perder tiempo ni depender de nadie.'"

**REGLA:** NUNCA escribir "al terminar sabra usar X herramientas" — eso es conocimiento, no estado.

---

## Seccion 6: Relacion con los siguientes modulos

**Proposito:** Conexion hacia adelante en la secuencia DIRECT.

**Patron:**
- Explicar que lo construido aqui se reutiliza en modulos siguientes
- Nombrar 2-3 modulos posteriores con ejemplo concreto de conexion
- Cerrar con frase de encaje ("Este modulo no es el destino. Es el [metafora] sobre el que se construye...")

**Ejemplo de referencia:** "Las herramientas y conceptos vistos aqui se reutilizan constantemente en: comunicacion ejecutiva, analisis estrategico, toma de decisiones..."

---

## Seccion 7: Idea central que debe quedar grabada

**Proposito:** UNA frase memorable. El takeaway definitivo del modulo.

**Patron:**
- Maximo 2 lineas
- Formato en negrita
- Debe poder repetirse de memoria

**Ejemplo de referencia:** "No necesitas ver mas IA. Necesitas menos IA, mejor usada."

---

## Seccion 8: Resumen de agentes y toolkit

**Proposito:** Breve resumen de los agentes del modulo y su toolkit. Desde GPT packages.

**Patron (si GPT packages disponibles):**
- Frase introductoria ("Este modulo equipa al directivo con N agentes:")
- Lista de agentes con nombre + funcion en 1 linea cada uno
- Mencion del banco de prompts y mini-playbooks

**Patron (si GPT packages NO disponibles):**
```
[pendiente — ejecutar custom-gpt-builder primero]

El blueprint define N agente(s) con enfoque en [area]. Los detalles estaran disponibles tras ejecutar custom-gpt-builder.
```

**REGLA:** Resumir y apuntar, NO reproducir el contenido de los GPT packages.

---

## Seccion 9: Resumen de clases y casos practicos

**Proposito:** Breve resumen del contenido de clases. Desde class content.

**Patron (si class content disponible):**
- Frase introductoria ("N clases de teoria + N clases practicas...")
- Resumen en 2-3 lineas de que cubren las teorias
- Resumen en 2-3 lineas de que cubren las practicas (con escenarios)

**Patron (si class content NO disponible):**
```
[pendiente — ejecutar class-redactor-maquetador primero]

El blueprint sugiere ~N clases de teoria y ~N practicas cubriendo: [temas]. Los contenidos completos estaran disponibles tras ejecutar class-redactor-maquetador.
```

**REGLA:** Resumir y apuntar, NO reproducir el contenido de las clases.

---

## Seccion final: Prompts sugeridos para NotebookLM

**Proposito:** 3-5 prompts listos para copiar-pegar en NotebookLM.

**Requisitos:**
- Minimo 3, maximo 5
- Al menos 1 para audio/podcast generation
- Al menos 1 para summary/study guide
- ESPECIFICOS del modulo (no genericos)
- Referenciar contexto PROEXCA
- Suficientemente detallados para producir output de calidad

**Patron:**
```
1. "Genera un podcast de X minutos donde dos expertos discuten [tema especifico del modulo], usando ejemplos del contexto de PROEXCA y la internacionalizacion."
2. "Crea un resumen de estudio de X minutos que explique [aspecto concreto del modulo]."
3. "Genera una conversacion tipo entrevista donde un directivo de PROEXCA cuenta [experiencia concreta con las capacidades del modulo]."
```

---

## Output Schema completo

```markdown
---
module_id: "MM"
module_name: "[Nombre]"
direct_verb: "[Letra]"
purpose: "NotebookLM multimedia generation"
blueprint_version: N
gpt_packages_version: N  # o "N/A"
class_content_version: N  # o "N/A"
version: 1
---

# Narrativa para generacion multimedia: Modulo MM — [Nombre]

## 1. Contexto general
[...]

## 2. Que es [verbo]
[...]

## 3. Rol especifico del modulo
[...]

## 4. Que NO es este modulo
[...]

## 5. Que debe sentir el directivo al terminarlo
[...]

## 6. Relacion con los siguientes modulos
[...]

## 7. Idea central que debe quedar grabada
[...]

## 8. Resumen de agentes y toolkit
[...]

## 9. Resumen de clases y casos practicos
[...]

---

## Prompts sugeridos para NotebookLM
1. "[...]"
2. "[...]"
3. "[...]"
```

---

## Longitud objetivo

150-300 lineas totales. Consistente con el ejemplo existente (~100 lineas en 7 secciones) + las 2 secciones nuevas + prompts.
