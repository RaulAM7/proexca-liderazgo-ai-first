# EXAMPLES: custom-gpt-builder

## Ejemplo 1: Modulo 03 Impacta Comunicacion — agentes existentes

### Input

Blueprint frozen con 3 agentes (Comunicador Ejecutivo, Comunicador Institucional, Comunicador Digital).
Existen 5 definiciones INFUSE en `00_inbox/02_Contents/03_Impacta_Comunicacion/C_Custom_Agents/`.

### Proceso

1. **READ**: Blueprint loaded, status: frozen, version: 1
2. **INVENTORY**: 3 agentes en Seccion 3
3. **SCAN**: 5 definiciones existentes encontradas. Mapeo:
   - Comunicador Ejecutivo ← merge de "Redaccion Emails" + "Informes, Memos & Briefings"
   - Comunicador Institucional ← "Comunicador Institucional" existente
   - Comunicador Digital ← merge de "RRSS" + "Web"
4. **ENRICH**: Cada definicion existente se enriquece con:
   - Use cases del blueprint (Seccion 2) → añadidos a User Guidance
   - Prompt starters (min 4) → derivados de CU-01 a CU-05
   - Retos del directivo (Seccion 1) → integrados en Signals
5. **VALIDATE**: Los 3 paquetes pasan checklist

### Output

3 archivos en `04_outputs/gpt-packages/03_impacta-comunicacion/`:
- `comunicador-ejecutivo_v1.md` — core agent, BLUF + 3P, emails + informes
- `comunicador-institucional_v1.md` — 5-layer risk framework, comunicacion de alto riesgo
- `comunicador-digital_v1.md` — copywriting RRSS + web, voz corporativa

### Extracto de output (Comunicador Ejecutivo)

```markdown
## INFUSE Instructions

### I — Identity & Goal
Eres el Comunicador Ejecutivo PROEXCA, un consultor senior de comunicacion
ejecutiva. Tu mision: ayudar a directivos a comunicar con claridad, velocidad
y seguridad aplicando BLUF y la regla de las 3P.

### N — Navigation Rules
GATE: Antes de redactar, exige: (1) destinatario, (2) accion requerida, (3) deadline.
Si falta uno, pide solo lo minimo...

### S — Signals & Adaptation
- Usuario con prisa → borrador rapido + 3 preguntas opcionales
- Usuario confundido → plantilla + ejemplos de frases
- Usuario enfadado → frena, neutraliza tono, propone esperar
- Usuario vago → pide 3 datos minimos

## Prompt Starters
1. "Necesito redactar un email a la gerencia pidiendo aprobacion para [X]"
2. "Tengo que preparar un briefing de 1 pagina sobre la feria de [sector]"
3. "Revisa este borrador de email y hazlo mas directo"
4. "Escribe un informe ejecutivo resumiendo estos datos de mercado"
5. "Necesito un memo interno sobre la nueva politica de [tema]"
```

---

## Ejemplo 2: Modulo 05 Analiza Mejor — sin agentes existentes

### Input

Blueprint frozen con 1 agente (Analista Estrategico PROEXCA).
No existen definiciones INFUSE previas para este modulo.

### Proceso

1. **READ**: Blueprint loaded, 1 agente en Seccion 3
2. **SCAN**: `00_inbox/02_Contents/05_Analiza_Mejor/C_Custom_Agents/` vacio
3. **BUILD FROM SCRATCH**: Usando INFUSE framework + blueprint:
   - Identity: derivada de Seccion 3 ("analista estrategico, experto en sintesis")
   - Navigation: GATE = tipo de analisis + fuentes + objetivo
   - User Guidance: proceso operativo basado en use cases (CU-01 a CU-04)
   - Signals: 4 estados + señal especifica: "usuario presenta datos sin contexto"
   - End Instructions: nunca inventar datos, siempre citar fuentes
4. **VALIDATE**: Paquete pasa checklist

### Output

1 archivo en `04_outputs/gpt-packages/05_analiza-mejor/`:
- `analista-estrategico_v1.md` — agente de analisis, sintesis documental, escenarios
