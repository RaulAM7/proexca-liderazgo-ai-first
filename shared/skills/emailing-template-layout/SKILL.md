---
name: emailing-template-layout
description: >
  Maqueta contenido de email dentro de la plantilla HTML del módulo 06_emailing.
  Produce HTML final listo para envío y versión plain text. Usa esta skill cuando
  tengas un content.md listo y necesites generar el HTML final, cuando el usuario
  mencione "maquetar email", "generar HTML de email", "plantilla de email",
  "renderizar email", "montar el email", o cuando exista un content.md en una
  campaña que aún no tenga su HTML generado.
---

# Emailing Template Layout

Toma el copy de un `content.md` y lo maqueta dentro de la plantilla HTML base del módulo `06_emailing`, produciendo el HTML final listo para envío y una versión plain text.

## Input esperado

- **content.md** de la campaña (en `06_emailing/campaigns/YYYY-MM-DD_slug/`)
- **Plantilla base**: `06_emailing/templates/base_light.html` o `base_dark.html`
- **Variante** (light/dark) — por defecto: light

## Output

Dos archivos en la carpeta de la campaña:

1. **`email_light.html`** (o `email_dark.html`): HTML final con todo el contenido renderizado
2. **`email.txt`**: versión plain text equivalente

## Procedimiento

### 1. Leer inputs
- Abre el `content.md` de la campaña
- Abre la plantilla base seleccionada (light por defecto)
- Lee `metadata.json` si existe para subject/preheader

### 2. Mapear contenido a plantilla
Reemplaza los placeholders de la plantilla con contenido del `content.md`:

| Sección content.md | Placeholder plantilla |
|---|---|
| Metadata > Subject | `{{subject}}` y `<title>` |
| Metadata > Preheader | `{{preheader}}` |
| Hero > Título | `{{hero_title}}` |
| Hero > Subtítulo | `{{hero_subtitle}}` |
| Sección 1 > Título | `{{s1_title}}` |
| Sección 1 > Párrafo | `{{s1_paragraph}}` |
| Sección 1 > Contenido | `{{s1_content_html}}` (convertir bullets MD → `<ul><li>` HTML) |
| Sección 2 > Título | `{{s2_title}}` |
| Sección 2 > Párrafo | `{{s2_paragraph}}` |
| Sección 2 > Contenido | `{{s2_content_html}}` (convertir MD → HTML) |
| CTA Final > Título | `{{final_title}}` |
| CTA Final > Párrafo | `{{final_paragraph}}` |
| CTA > URL | `{{cta_primary_url}}` |
| CTA > Texto | `{{cta_primary_text}}` |

### 3. Adaptar HTML al contenido

- Si el contenido tiene bullets, usar `<ul>` con estilos inline:
  ```html
  <ul style="margin:0; padding-left:18px;">
    <li style="margin:0 0 10px; color:#111827; font-size:16px; line-height:1.65;">
      Texto del bullet
    </li>
  </ul>
  ```
- Si el contenido tiene numeración, usar `<ol>` con los mismos estilos
- Negritas en content.md (`**texto**`) → `<strong>texto</strong>`
- Links en content.md (`[texto](url)`) → `<a href="url" target="_blank">texto</a>`
- Mantener secciones que no apliquen vacías o eliminarlas (no dejar placeholders sin reemplazar)

### 4. Reglas de compatibilidad email

- **Estructura**: tables (`<table role="presentation">`) para layout — nunca divs para estructura
- **Estilos**: inline en elementos críticos (colores, padding, font-size) + CSS classes como refuerzo
- **Outlook**: respetar condicionales `<!--[if mso]>` existentes en la plantilla
- **Imágenes**: siempre con `alt` descriptivo, `display:block`, `border:0`
- **Links**: siempre con `target="_blank"` y `style` de color inline
- **Botones**: mantener clase `.btn` + estilos inline redundantes
- **Preheader**: siempre rellenar, ≤90 caracteres visibles, seguido de `&nbsp;&zwnj;` padding
- **Max-width**: respetar 600px del container
- **Footer**: actualizar copyright al año actual, mantener links legales

### 5. Generar plain text

Crear `email.txt` con:
- Mismo contenido que el HTML pero sin formato
- URLs completas (no acortadas) entre paréntesis: `Accede a la plataforma (https://app.edukami.ai/login)`
- Bullets con `- ` o `* `
- Separadores con `---`
- Mantener la estructura: hero → secciones → CTA → firma → footer
- Sin caracteres HTML, entidades ni tags

### 6. Verificación final

Antes de guardar, comprobar:
- [ ] Ningún placeholder `{{...}}` sin reemplazar
- [ ] Todas las imágenes tienen `alt` text
- [ ] Todos los links tienen `target="_blank"`
- [ ] Preheader presente y ≤90 caracteres
- [ ] Copyright actualizado
- [ ] Subject presente en `<title>`
- [ ] Plain text equivale al HTML en contenido
- [ ] HTML válido (tags cerrados, sin errores de anidamiento)

## Anti-patterns

- Reescribir el CSS o estructura base de la plantilla — solo reemplazar contenido
- Usar divs para layout — mantener tables
- Dejar placeholders `{{...}}` sin reemplazar en el HTML final
- Omitir estilos inline en elementos que dependen de ellos (Outlook ignora CSS classes)
- Links con texto genérico ("haz clic aquí", "más info")
- Imágenes sin alt text
- Plain text que sea un volcado HTML con tags
