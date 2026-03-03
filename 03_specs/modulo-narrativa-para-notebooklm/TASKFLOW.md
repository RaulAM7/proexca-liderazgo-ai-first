# TASKFLOW: modulo-narrativa-para-notebooklm

```
1. IDENTIFY   → Detectar modulo objetivo (del contexto o preguntar)
2. READ       → Cargar blueprint frozen (OBLIGATORIO)
                 - RECHAZAR si no existe o status es "draft"
3. LOAD       → Cargar GPT packages si disponibles:
                 04_outputs/gpt-packages/MM_slug/*.md
                 (para seccion 8)
4. LOAD       → Cargar class content si disponible:
                 04_outputs/clases/MM_slug/*.md
                 (para seccion 9)
5. REFERENCE  → Leer narrativa ejemplo:
                 00_inbox/.../Narrativa Generacion Multimedia Modulo Domina lo esencial.md
                 (para calibrar tono y estructura)
6. SYNTHESIZE → Aplicar receta de 9 secciones:
                 - Secciones 1-7: siempre generadas desde blueprint
                 - Seccion 8: desde GPT packages o [pendiente]
                 - Seccion 9: desde class content o [pendiente]
7. PROMPTS    → Generar 3-5 prompts NotebookLM especificos del modulo
8. PRESENT    → Mostrar narrativa al usuario
9. ITERATE    → Refinar segun feedback
10. SAVE      → Guardar en 04_outputs/narrativas/MM_slug/narrativa_v{N}.md
```

## Copy-paste prompt para invocar

> "Genera la narrativa para NotebookLM del modulo [X]. Ya tengo el blueprint frozen."
