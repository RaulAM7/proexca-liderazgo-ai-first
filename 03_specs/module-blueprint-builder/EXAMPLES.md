# EXAMPLES: module-blueprint-builder

## Ejemplo 1: Modulo 03 — Impacta Comunicacion (caso rico: agentes existentes)

### Input

El usuario dice: "Quiero construir el blueprint del modulo Impacta Comunicacion."

### Proceso

1. **SCAN**: La skill encuentra en `00_inbox/02_Contents/03_Impacta_Comunicacion/`:
   - `A_Clases_Teoria/`: 5 archivos (4 1...4 2...4 3...4 5...4 7) — nombres revelan temas
   - `B_Clases_Practica/`: 3 archivos (4 4...4 6...4 8) — practicas asociadas
   - `C_Custom_Agents/`: 5 agentes populated (Email, Informes, Comunicador Institucional, RRSS, Web)
   - No hay narrativa en `0_Resumen_Multimedia_Modulo/` (placeholder vacio)

2. **EXTRACT**: Deduce 5 use cases de los nombres de archivo:
   - CU-01: Redaccion de emails directivos
   - CU-02: Redaccion de informes, briefings y memos
   - CU-03: Comunicacion institucional
   - CU-04: Copywriting para RRSS institucionales
   - CU-05: Contenido web institucional

3. **PROPOSE**: Draft con las 7 secciones populated. Section 3 propone 1 core agent + 4 sub-agents. Nota: excede el limite de 2 sub-agentes. Pregunta al usuario.

4. **ASK**: "He detectado 5 agentes pero la guia recomienda maximo 1 core + 2 sub. ¿Prefieres consolidar? Propongo: (A) Comunicador Ejecutivo (core: emails + informes) + Comunicador Institucional (sub) + Comunicador Digital (sub: RRSS + web). (B) Mantener los 5. ¿Cual prefieres?"

5. **REFINE**: Usuario elige A. Blueprint actualizado con 3 agentes.

6. **FREEZE**: `04_outputs/blueprints/03_impacta-comunicacion/blueprint_v1.md` con status: frozen.

### Output (extracto)

```yaml
---
module_id: "03"
module_name: "Impacta - Comunicacion"
direct_verb: "I"
version: 1
status: frozen
date: 2026-03-03
---
```

```markdown
## 2. Casos de uso clave
- CU-01: Emails directivos — redactar emails claros, BLUF, accionables
- CU-02: Informes y briefings — documentos ejecutivos estructurados
- CU-03: Comunicacion institucional — mensajes de alto riesgo reputacional
- CU-04: RRSS institucionales — posts alineados con voz corporativa
- CU-05: Contenido web — textos institucionales para web publica

## 3. Sistema IA (agentes)
### Agente principal
- Nombre: Comunicador Ejecutivo PROEXCA
- Rol: Director de Comunicacion + consultor senior
- Problema mental que resuelve: "¿Como escribo esto rapido, bien y sin riesgo?"
### Sub-agentes
- Comunicador Institucional: comunicaciones de alto riesgo reputacional
- Comunicador Digital: RRSS + contenido web alineado con voz corporativa
```

---

## Ejemplo 2: Modulo 05 — Analiza Mejor (caso sparse: estructura vacia)

### Input

El usuario dice: "Blueprint para Analiza Mejor."

### Proceso

1. **SCAN**: En `00_inbox/02_Contents/05_Analiza_Mejor/`:
   - `A_Clases_Teoria/`: directorio vacio
   - `B_Clases_Practica/`: directorio vacio
   - `C_Custom_Agents/`: directorio vacio
   - `0_Resumen_Multimedia_Modulo/`: placeholder vacio

2. **EXTRACT**: Sin señales directas. Lee offer design → mapea a competencia "Decidir con IA" y al GEM "Analista Estrategico PROEXCA". Lee FACTS.md para datos del modulo.

3. **PROPOSE**: Draft con muchos [UNKNOWN]:
   ```
   ## 2. Casos de uso clave
   - CU-01: [UNKNOWN — necesita input: ¿que tipo de analisis hacen los directivos PROEXCA?]
   - CU-02: [UNKNOWN — necesita input]
   ```

4. **ASK**: 5 preguntas:
   - "¿Que tipos de analisis realizan los directivos de PROEXCA en su dia a dia?"
   - "¿Trabajan con datos de internacionalizacion, estudios de mercado, informes sectoriales?"
   - "¿Necesitan analisis financiero o mas bien analisis estrategico/competitivo?"
   - "¿El agente principal debe ayudar a sintetizar documentos largos o a generar analisis nuevos?"
   - "¿Cuantos use cases crees que necesita este modulo?"

5. **REFINE**: Usuario responde. Tras 2 rondas, el blueprint tiene 6 use cases confirmados y 1 agente core.

6. **FREEZE**: `04_outputs/blueprints/05_analiza-mejor/blueprint_v1.md`
