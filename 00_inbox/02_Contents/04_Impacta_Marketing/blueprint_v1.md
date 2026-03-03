---
module_id: "04"
module_name: "Impacta - Marketing"
direct_verb: "I"
version: 1
status: frozen
date: 2026-03-03
---

# Blueprint: Modulo 04 — Impacta Marketing

## 0. Apertura narrativa

- **Reencuadre**: "Impactar mejor" en marketing no es publicar mas — es producir materiales de promocion e internacionalizacion con la velocidad y precision que tu rol exige. Un directivo de PROEXCA no deberia tardar dias en preparar un dosier sectorial o un pitch para inversores.
- **Frustraciones clave**:
  1. Preparar materiales de marketing (dosieres, pitch decks, contenidos para ferias) consume demasiado tiempo y depende de terceros o agencias.
  2. Los materiales que se producen internamente son inconsistentes en calidad, tono y marca — cada persona lo hace distinto.
  3. Cuando llega una feria, mision comercial o evento, la produccion de contenido se convierte en una emergencia con plazos imposibles.
- **Vision AI-first**: Con un sistema de IA aplicada al marketing, produces un dosier sectorial en 30 minutos en lugar de 3 dias, generas pitch decks adaptados al interlocutor, y mantienes una voz de marca coherente en todos los canales — sin depender de agencias externas para cada pieza.

## 1. Mapa de retos del directivo

- **Reto 1: Produccion lenta de materiales de marketing** — cada dosier, pitch o contenido para feria requiere multiples borradores, revisiones y aprobaciones que dilatan los tiempos.
- **Reto 2: Dependencia de terceros para contenido promocional** — el directivo delega a agencias o equipos internos saturados, perdiendo control sobre el mensaje y los plazos.
- **Reto 3: Inconsistencia de marca y mensaje** — diferentes personas producen materiales con tonos, formatos y niveles de calidad dispares.
- **Reto 4: Urgencia recurrente ante eventos y misiones** — ferias, misiones comerciales y visitas de inversores generan picos de demanda de contenido que desbordan la capacidad.
- **Brief infografia**: Infografia circular con el directivo en el centro rodeado de 4 escenarios de presion (feria inminente, pitch urgente, dosier pendiente, campana sin contenido), mostrando como la IA reduce cada uno a un flujo controlado.

## 2. Casos de uso clave

- **CU-01: Dosieres sectoriales** — producir informes de posicionamiento sectorial para misiones comerciales e internacionalizacion (aeroespacial, audiovisual, gaming, economia azul, etc.)
- **CU-02: Pitch decks y propuestas** — generar presentaciones persuasivas adaptadas al perfil del interlocutor (inversor, empresa, institucion)
- **CU-03: Contenido para ferias y eventos** — crear notas de prensa, fichas de stand, guiones de presentacion y materiales promocionales para ferias internacionales
- **CU-04: Campanas de email marketing** — disenar comunicaciones promocionales de programas, convocatorias y oportunidades de internacionalizacion
- **CU-05: Contenido para redes sociales (marketing)** — generar posts promocionales orientados a captar atencion sobre servicios, programas y logros de internacionalizacion
- **CU-06: Activos visuales con IA** — producir imagenes, graficos e infografias para materiales de marketing usando herramientas de generacion visual

## 3. Sistema IA (agentes)

### Agente principal
- **Nombre**: Marketing Estrategico PROEXCA
- **Rol**: Director de Marketing de internacionalizacion + estratega de contenido institucional
- **Problema mental que resuelve**: "Necesito producir dosieres, pitches y materiales de feria con calidad profesional y en horas, no en semanas."
- **CUs que cubre**: CU-01 (dosieres), CU-02 (pitch decks), CU-03 (contenido ferias/eventos)
- **Logica de agrupacion**: Estos 3 use cases comparten la misma naturaleza — documentos estrategicos largos, orientados a un interlocutor externo especifico, con alto nivel de personalizacion y tono institucional. Requieren las mismas metodologias (estructura persuasiva, adaptacion al perfil, coherencia de marca).

### Sub-agente 1
- **Nombre**: Marketing Digital PROEXCA
- **Rol**: Especialista en comunicacion digital promocional + campanas
- **Problema mental que resuelve**: "Necesito mantener activos los canales digitales de promocion con contenido constante y coherente, sin que sea un trabajo a tiempo completo."
- **CUs que cubre**: CU-04 (email marketing), CU-05 (RRSS marketing), CU-06 (activos visuales)
- **Logica de agrupacion**: Estos 3 use cases son contenido digital de ciclo corto — piezas frecuentes, multiformato, orientadas a engagement y conversion. Comparten tono mas agil que los documentos estrategicos, formatos mas compactos, y la necesidad de generar volumen con consistencia.

## 4. Casos practicos guiados

- **Clase practica CU-01**: "Dosier sectorial para mision comercial"
  - Supuesto realista: PROEXCA prepara una mision comercial al sector aeroespacial europeo. Necesitas un dosier de posicionamiento de Canarias en 48h.
  - Walkthrough: contexto del sector → briefing al agente con datos clave → generacion de estructura + contenido → revision y ajuste de tono institucional → dosier final listo para imprimir.

- **Clase practica CU-02**: "Pitch deck para inversor internacional"
  - Supuesto realista: Un fondo de inversion nordico quiere conocer el ecosistema tech de Canarias. Necesitas un pitch adaptado a su perfil.
  - Walkthrough: perfil del interlocutor → briefing al agente → generacion de deck (narrativa + datos + CTA) → ajuste cultural → presentacion lista.

- **Clase practica CU-03**: "Kit de materiales para feria internacional"
  - Supuesto realista: PROEXCA participa en una feria de economia azul en Lisboa. Necesitas nota de prensa + ficha de stand + guion de presentacion.
  - Walkthrough: datos del evento → briefing al agente con contexto → generacion de 3 piezas coordinadas → revision de coherencia → materiales finales.

- **Clase practica CU-04**: "Campana de email para convocatoria de internacionalizacion"
  - Supuesto realista: Lanzar una convocatoria para empresas canarias interesadas en exportar al mercado latinoamericano. Necesitas un email que convenza a directivos ocupados.
  - Walkthrough: objetivo + audiencia → briefing → generacion de copy (subject + body + CTA) → revision de tono → email listo.

## 5. Toolkit ejecutiva

- **Agentes**:
  - Marketing Estrategico PROEXCA (core — dosieres, pitches, ferias)
  - Marketing Digital PROEXCA (sub — emails, RRSS, visual)

- **Prompts curados**:
  - → Marketing Estrategico:
    - "Dosier sectorial express" — genera estructura + contenido de dosier sectorial dado sector + pais + contexto
    - "Pitch adaptado" — genera pitch deck adaptado al perfil del interlocutor (tipo + sector + objetivo)
    - "Kit feria" — genera pack coordinado (nota de prensa + ficha + guion) para un evento dado
  - → Marketing Digital:
    - "Email promo" — genera email de campana con subject, preheader, body y CTA
    - "Post LinkedIn institucional" — genera post promocional para RRSS con tono institucional
    - "Brief creativo visual" — genera briefing para la produccion de activos visuales (imagen, infografia, banner)

- **Mini-playbooks**:
  - Si tienes una feria en <2 semanas → usa "Kit feria" + revisa tono con CONSTRAINTS
  - Si necesitas un dosier y no tienes datos → usa primero Research & Insights (modulo 05) y luego "Dosier sectorial express"
  - Si el pitch es para un publico no hispanohablante → genera en español, luego usa "Traduccion ejecutiva" del toolkit general

## 6. Sintesis operativa

- **Problemas que resuelve este modulo**:
  - Produccion lenta de materiales de marketing
  - Dependencia de agencias/terceros para contenido promocional
  - Inconsistencia de marca entre materiales
  - Emergencias de contenido ante ferias y eventos

- **Cuando usar IA aqui**:
  - Antes de cualquier mision comercial o feria: dosieres + pitch + materiales
  - Para convocatorias y campanas: emails + RRSS
  - Para presentaciones a inversores o instituciones
  - Para contenido visual de soporte (briefings, no diseño final)

- **Que NO hacer**:
  - No publicar contenido generado sin revision humana del tono institucional
  - No usar IA para datos de mercado sin verificar fuentes (para eso esta el modulo 05 — Analiza Mejor)
  - No sustituir la estrategia de marketing por generacion de contenido — la IA ejecuta, tu decides la estrategia
  - No generar activos visuales finales sin supervision de diseño — la IA produce briefings y borradores, no piezas finales de marca

- **Encaje en DIRECT**: Este modulo es la segunda mitad del verbo "I" (Impacta). Mientras el modulo 03 (Comunicacion) se centra en la comunicacion ejecutiva interna y institucional, el modulo 04 (Marketing) se centra en la promocion exterior y la internacionalizacion. Juntos cubren el ciclo completo de "impactar mejor": desde comunicar internamente con claridad hasta promocionar externamente con efectividad. El agente de Marketing complementa al Comunicador Ejecutivo — uno mira hacia dentro, otro hacia fuera.
