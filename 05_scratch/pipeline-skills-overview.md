# Pipeline de Produccion de Modulos — Diagramas

> Abrir en cualquier visor Mermaid (GitHub, Obsidian, mermaid.live, VS Code preview).

---

## 1. Pipeline principal

```mermaid
flowchart LR
    subgraph ENTRADA
        INB[(00_inbox\nraw material)]
        CTX[(02_context\nconstraints, glossary)]
        OFR[(offer design\navatar, pain points)]
    end

    subgraph "FASE 1"
        S1[module-blueprint-builder\nmedium / interactive]
    end

    subgraph "FASE 2 — paralelo"
        S2[custom-gpt-builder\nmedium]
        S3[class-redactor-maquetador\nheavy]
    end

    subgraph "FASE 3"
        S4[modulo-narrativa-para-notebooklm\nlight]
    end

    INB --> S1
    CTX --> S1
    OFR --> S1

    S1 -- "blueprint\n(status: frozen)" --> S2
    S1 -- "blueprint\n(status: frozen)" --> S3
    S1 -- "blueprint\n(status: frozen)" --> S4

    S2 -- "GPT packages\n(recomendado)" --> S4
    S3 -- "class files\n(recomendado)" --> S4

    S2 -. "GPT packages\n(opcional)" .-> S3

    style S1 fill:#4a90d9,color:#fff
    style S2 fill:#f5a623,color:#fff
    style S3 fill:#f5a623,color:#fff
    style S4 fill:#7ed321,color:#fff
```

---

## 2. Contrato de datos

```mermaid
flowchart TD
    BP["blueprint_v{N}.md\n─────────────────\nYAML frontmatter\n7 secciones DIRECT\nstatus: frozen"]

    GPT["agent-slug_v{N}.md\n─────────────────\n6 secciones INFUSE\nknowledge files\ncapabilities\nprompt starters\nguardrails\nvalidation checklist"]

    CLS["T-XX / P-XX_v{N}.md\n─────────────────\ntheory: max 1500 pal\npractice: max 2000 pal\nwalkthrough reproducible"]

    NAR["narrativa_v{N}.md\n─────────────────\n9 secciones\n3-5 prompts NotebookLM\n150-300 lineas"]

    BP -->|"obligatorio"| GPT
    BP -->|"obligatorio"| CLS
    BP -->|"obligatorio"| NAR
    GPT -->|"recomendado"| NAR
    CLS -->|"recomendado"| NAR

    style BP fill:#4a90d9,color:#fff
    style GPT fill:#f5a623,color:#fff
    style CLS fill:#f5a623,color:#fff
    style NAR fill:#7ed321,color:#fff
```

---

## 3. Rutas de salida

```mermaid
flowchart LR
    OUT[04_outputs]

    OUT --> BPD[blueprints/\nMM_slug/\nblueprint_v1.md]
    OUT --> GPTD[gpt-packages/\nMM_slug/\nagent-slug_v1.md]
    OUT --> CLSD[clases/\nMM_slug/\nT-01_titulo_v1.md\nP-01_titulo_v1.md]
    OUT --> NARD[narrativas/\nMM_slug/\nnarrativa_v1.md]

    S1((Skill 1)) --> BPD
    S2((Skill 2)) --> GPTD
    S3((Skill 3)) --> CLSD
    S4((Skill 4)) --> NARD

    style S1 fill:#4a90d9,color:#fff
    style S2 fill:#f5a623,color:#fff
    style S3 fill:#f5a623,color:#fff
    style S4 fill:#7ed321,color:#fff
```

---

## 4. Routing de secciones del blueprint

```mermaid
flowchart LR
    subgraph "Blueprint (7 secciones)"
        SEC0["S0 Apertura narrativa"]
        SEC1["S1 Mapa de retos"]
        SEC2["S2 Casos de uso"]
        SEC3["S3 Sistema IA / agentes"]
        SEC4["S4 Casos practicos"]
        SEC5["S5 Toolkit"]
        SEC6["S6 Sintesis"]
    end

    S2[custom-gpt-builder]
    S3[class-redactor-maquetador]
    S4[modulo-narrativa]

    SEC0 --> S3
    SEC1 --> S2
    SEC1 --> S3
    SEC2 --> S2
    SEC2 --> S3
    SEC3 --> S2
    SEC4 --> S2
    SEC4 --> S3
    SEC5 --> S2
    SEC5 --> S3
    SEC6 --> S4

    style S2 fill:#f5a623,color:#fff
    style S3 fill:#f5a623,color:#fff
    style S4 fill:#7ed321,color:#fff
```

---

## 5. Mapa completo de skills del repo (12 skills)

```mermaid
flowchart TD
    subgraph "Infraestructura"
        ICB[initial-context-building\nheavy/bootstrap]
        DC[distill-context\nheavy/manual]
        WS[write-spec\nlight]
        SO[ship-output\nlight]
        QR[qa-review\nlight]
        SC[skill-creator\nstrategic/heavy]
    end

    subgraph "Emailing"
        EC[emailing-copy\nlight]
        ETL[emailing-template-layout\nlight]
    end

    subgraph "Pipeline Modulos"
        MBB[module-blueprint-builder\nmedium/interactive]
        CGB[custom-gpt-builder\nmedium]
        CRM[class-redactor-maquetador\nheavy]
        MN[modulo-narrativa-para-notebooklm\nlight]
    end

    MBB --> CGB
    MBB --> CRM
    CGB --> MN
    CRM --> MN
    MBB --> MN

    EC --> ETL

    style MBB fill:#4a90d9,color:#fff
    style CGB fill:#f5a623,color:#fff
    style CRM fill:#f5a623,color:#fff
    style MN fill:#7ed321,color:#fff
    style EC fill:#9b59b6,color:#fff
    style ETL fill:#9b59b6,color:#fff
```

---

## 6. Degradacion graceful (Skill 4)

```mermaid
stateDiagram-v2
    state "Inputs disponibles" as check

    state "Narrativa completa\n(9/9 secciones)" as full
    state "Narrativa parcial\nS8 = [pendiente GPT]" as noGPT
    state "Narrativa parcial\nS9 = [pendiente clases]" as noCLS
    state "Narrativa minima\nS8 + S9 = [pendiente]" as minimal

    check --> full: blueprint + GPTs + clases
    check --> noGPT: blueprint + clases
    check --> noCLS: blueprint + GPTs
    check --> minimal: solo blueprint
```
