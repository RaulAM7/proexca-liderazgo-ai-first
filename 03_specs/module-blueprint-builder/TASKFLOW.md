# TASKFLOW: module-blueprint-builder

```
1. IDENTIFY   → Detectar modulo objetivo (del contexto conversacional o preguntar al usuario)
2. SCAN       → Leer fuentes:
                 a. 00_inbox/02_Contents/MM_module/ (file names, C_Custom_Agents/, 0_Resumen/)
                 b. 00_inbox/00_Offer_Design/*.md (avatar, dream outcome, pain points)
                 c. 00_inbox/01_Content_Structure_.../Blueprint abstracta modulo METODO DIRECT.md
                 d. 02_context/{BRIEF,FACTS,CONSTRAINTS,GLOSSARY}.md
3. EXTRACT    → Mapear hallazgos:
                 - Use cases ← nombres de archivos teoria/practica
                 - Agentes ← C_Custom_Agents/ (si populated) + offer design (GEMs mencionados)
                 - Narrativa ← 0_Resumen_Multimedia_Modulo/ (si existe)
                 - ICP/pain points ← offer design
4. PROPOSE    → Generar draft blueprint con 7 secciones (o reducido para mod 00/01):
                 - Rellenar todo lo posible desde fuentes
                 - Marcar [UNKNOWN — necesita input] donde falte info
5. ASK        → Presentar draft al usuario
                 - Resaltar UNKNOWNs
                 - Formular max 5 preguntas dirigidas por ronda
6. REFINE     → Actualizar blueprint con respuestas del usuario
7. REPEAT     → Pasos 5-6 hasta que el usuario este satisfecho
8. FREEZE     → Cambiar status: draft → frozen
                 Guardar: 04_outputs/blueprints/MM_slug/blueprint_v{N}.md
```

## Copy-paste prompt para invocar

> "Quiero construir el blueprint del modulo [nombre/numero]. Escanea lo que haya disponible y proponme un draft."
