# TASKFLOW: custom-gpt-builder

```
1. IDENTIFY   → Detectar modulo objetivo (del contexto o preguntar)
2. READ       → Cargar blueprint frozen desde 04_outputs/blueprints/MM_slug/
                 - RECHAZAR si status es "draft"
3. INVENTORY  → Listar todos los agentes de la Seccion 3 del blueprint
4. SCAN       → Para cada agente, buscar definicion INFUSE existente en:
                 00_inbox/02_Contents/MM_module/C_Custom_Agents/
5. ENRICH     → Para cada agente:
                 a. Si existe definicion → usarla como base, enriquecer con blueprint
                 b. Si no existe → construir desde cero con INFUSE + blueprint
6. BUILD      → Construir las 6 secciones INFUSE (I/N/F/U/S/E) por agente
7. EXTRAS     → Añadir a cada paquete:
                 - Knowledge files strategy
                 - Capabilities config (web, code interpreter, images, canvas)
                 - Prompt starters (min 4, mapeados a use cases)
                 - Guardrails (desde 02_context/CONSTRAINTS.md)
8. VALIDATE   → Ejecutar validation checklist por agente
9. PRESENT    → Mostrar cada paquete al usuario para revision
10. SAVE      → Guardar en 04_outputs/gpt-packages/MM_slug/agent-slug_v{N}.md
```

## Copy-paste prompt para invocar

> "Ya tengo el blueprint frozen del modulo [X]. Genera los paquetes de Custom GPT para sus agentes."
