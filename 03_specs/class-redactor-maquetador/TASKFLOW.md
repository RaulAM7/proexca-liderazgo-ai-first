# TASKFLOW: class-redactor-maquetador

```
1. IDENTIFY   → Detectar modulo objetivo (del contexto o preguntar)
2. READ       → Cargar blueprint frozen desde 04_outputs/blueprints/MM_slug/
                 - RECHAZAR si status es "draft"
3. SCAN       → Leer nombres de archivos existentes en:
                 00_inbox/02_Contents/MM_module/A_Clases_Teoria/
                 00_inbox/02_Contents/MM_module/B_Clases_Practica/
                 (para inferir titulos y orden)
4. LOAD       → Opcionalmente leer GPT packages de:
                 04_outputs/gpt-packages/MM_slug/*.md
                 (para referenciar agentes en clases practicas)
5. DERIVE     → Mapear secciones del blueprint a lista de clases:
                 - Section 0 → T-01 (apertura)
                 - Sections 1-3 → T-XX (teoria por tema/agente)
                 - Section 4 → P-XX (practica por walkthrough)
6. PLAN       → Presentar plan de clases al usuario:
                 - Titulo, tipo (T/P), orden, duracion estimada
7. APPROVE    → Usuario confirma o ajusta el plan
8. GENERATE   → Para cada clase, aplicar receta correspondiente:
                 - Teoria → references/theory-template.md
                 - Practica → references/practice-template.md
9. REVIEW     → Presentar clases generadas al usuario
10. ITERATE   → Refinar segun feedback
11. SAVE      → Guardar en 04_outputs/clases/MM_slug/{T,P}-XX_titulo_v{N}.md
```

## Copy-paste prompt para invocar

> "Ya tengo el blueprint frozen del modulo [X]. Genera las clases (teoria y practica)."
