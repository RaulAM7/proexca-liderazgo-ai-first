# 06_emailing

Módulo centralizado de comunicaciones por email para el proyecto Liderazgo AI-First / PROEXCA.

## Estructura

```
06_emailing/
├── templates/
│   ├── base_light.html          # Plantilla HTML base (tema claro)
│   ├── base_dark.html           # Plantilla HTML base (tema oscuro)
│   └── assets/                  # Logos e imágenes compartidas
├── campaigns/
│   └── YYYY-MM-DD_slug/         # Una carpeta por campaña
│       ├── content.md           # Copy source (iterable sin tocar HTML)
│       ├── email_light.html     # HTML final renderizado
│       ├── email.txt            # Versión plain text
│       └── metadata.json        # Subject, preheader, variables, estado
└── README.md
```

## Crear una nueva campaña

1. Crea una carpeta en `campaigns/` con formato `YYYY-MM-DD_slug/`
2. Escribe el copy en `content.md` (usa la skill `emailing-copy` o hazlo manual)
3. Genera el HTML final con la skill `emailing-template-layout` (o manualmente reemplazando placeholders en la plantilla)
4. Genera la versión plain text (`email.txt`)
5. Rellena `metadata.json` con subject, preheader, audiencia y variables

## Plantillas

Las plantillas usan placeholders `{{variable}}`:

| Placeholder | Uso |
|---|---|
| `{{subject}}` | Asunto del email (en `<title>`) |
| `{{preheader}}` | Texto preview (oculto, ≤90 chars) |
| `{{hero_title}}` | Título principal (H1) |
| `{{hero_subtitle}}` | Subtítulo bajo el hero |
| `{{cta_primary_url}}` | URL del botón principal |
| `{{cta_primary_text}}` | Texto del botón principal |
| `{{s1_title}}` | Título sección 1 (card) |
| `{{s1_paragraph}}` | Párrafo sección 1 |
| `{{s1_content_html}}` | Contenido HTML libre sección 1 |
| `{{s2_title}}` | Título sección 2 (abierta) |
| `{{s2_paragraph}}` | Párrafo sección 2 |
| `{{s2_content_html}}` | Contenido HTML libre sección 2 |
| `{{final_title}}` | Título CTA final |
| `{{final_paragraph}}` | Párrafo CTA final |

## Skills relacionadas

- `emailing-copy`: genera el copy del email a partir de un briefing
- `emailing-template-layout`: maqueta el copy en la plantilla HTML
