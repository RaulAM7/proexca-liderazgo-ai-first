# QA: class-redactor-maquetador

## Checks por clase

- [ ] YAML frontmatter completo (class_id, module_id, type, title, duration_minutes, blueprint_version, version)
- [ ] Naming correcto: T-XX para teoria, P-XX para practica
- [ ] Clase de teoria: word count <= 1500
- [ ] Clase de practica: word count <= 2000
- [ ] Todo el contenido en español
- [ ] No hay hechos PROEXCA inventados
- [ ] No hay jerga sin explicacion inline

## Checks especificos de teoria

- [ ] Tiene Objetivo de aprendizaje (empieza con "Al terminar...")
- [ ] Tiene Agenda con timing
- [ ] Tiene Desarrollo con subsecciones headed
- [ ] Subsecciones son escaneables (bullets, bold, no muros de texto)
- [ ] Tiene Puntos clave (3-5 bullets accionables)
- [ ] Tiene Conexion con la siguiente clase
- [ ] Tono ejecutivo, no academico

## Checks especificos de practica

- [ ] Tiene Objetivo practico
- [ ] Tiene Supuesto con escenario PROEXCA realista
- [ ] Tiene Preparacion (lista de inputs necesarios)
- [ ] Tiene Walkthrough con pasos numerados (4-8)
- [ ] Cada paso tiene heading de accion (verbo imperativo)
- [ ] Cada paso tiene "Lo que debes ver" (resultado esperado)
- [ ] Tiene Ajuste fino
- [ ] Tiene Resultado esperado
- [ ] Tiene Errores comunes (min 3 pares error + fix)
- [ ] Referencia nombre del agente del blueprint/GPT package
- [ ] Referencia use case ID (CU-XX)

## Checks a nivel del set de clases

- [ ] Al menos 1 T-01 "apertura/que vamos a aprender" por modulo
- [ ] Cada use case del blueprint tiene al menos 1 clase practica
- [ ] Cada agente tiene al menos 1 clase de teoria que lo introduce
- [ ] Orden coherente (teoria antes de practica para el mismo tema)
- [ ] Hilo narrativo entre clases (Conexion de cada T apunta a la siguiente)
- [ ] Archivos guardados en ruta correcta: `04_outputs/clases/MM_slug/`

## Checks de la skill (post skill-creator)

- [ ] SKILL.md bajo 500 lineas
- [ ] Receta vive en references/class-recipe.md
- [ ] Templates en references/theory-template.md y references/practice-template.md
- [ ] Descripcion es "pushy" para triggering
- [ ] Procedimiento paso-a-paso e imperativo
