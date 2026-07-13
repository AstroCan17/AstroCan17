---
layout: default
title: sar-processor
description: Sensor-agnostic spaceborne SAR ground-segment forward processor on EOPF CPM.
---

# sar-processor

<div class="case-study-meta">
  <span><strong>Status:</strong> Skeleton (pre-SRR)</span>
  <span><strong>Stack:</strong> Python · EOPF CPM 2.8.1 · Zarr</span>
  <span><strong>Reference profile:</strong> Sentinel-1 C-SAR</span>
</div>

## Overview

**sar-processor** is a **generic spaceborne SAR ground-segment forward processor**: downlinked raw Level-0 SAR instrument source packets → focused **L1 SLC** → detected/projected **L1 GRD** (L2 ocean products TBC). The processing chain is sensor-agnostic and driven by a per-sensor profile; the first instantiated profile is a C-band SAR with **Sentinel-1 C-SAR** as the public reference dataset.

Built on the ESA **EOPF Core Python Modules** (`eopf == 2.8.1`): each processing stage is an `EOProcessingUnit`, products are EOPF `EOProduct` objects, outputs are cloud-native **Zarr**. Sibling project of [`msi-processor`](https://github.com/AstroCan17/msi-processor), reusing platform machinery (CI, documentation toolchain, package layout, single pipeline driver).

> **Status: skeleton (pre-SRR).** The ECSS document tree is in place with the full tailored DRL; technical content (requirements, algorithms, product type codes) lands at SRR/PDR.

## Architecture

```mermaid
flowchart LR
    L0[/"L0 SAR source packets"/] --> Decode[Decode & format]
    Decode --> Focus[Range-Doppler focus]
    Focus --> SLC[/"L1 SLC"/]
    SLC --> GRD[Multilook + projection]
    GRD --> GRDout[/"L1 GRD"/]
```

The sensor profile layer (`sar_processor/sensors/`) parameterises the generic computing stages (`sar_processor/computing/`) for each mission; the platform layer (`sar_processor/common/`) provides shared types, metrics, and pipeline orchestration identical in spirit to the MSI processor.

## Key technical work

- **ECSS document tree** — full tailored DRL in `compliance/`; Sphinx site with symlinks from `docs/compliance/`.
- **Package layout** — `sar_processor/common/` (platform), `computing/` (stages), `sensors/` (profiles), `exceptions/`.
- **Pipeline driver** — `scripts/run_pipeline.py` with mode-only CLI: `nominal` | `calibration`.
- **Codespaces integration** — public code + private `ipf-data` dataset repo for SAR release tag `datasets-sar-v1`.
- **Test harness** — `pytest -m unit` / `-m integration` markers; pre-commit hooks.

## Planned processing chain

| Stage | Output | Notes |
|-------|--------|-------|
| L0 decode | Parsed SAR packets | Sensor-profile dependent |
| Range processing | Range-compressed data | Reference: Sentinel-1 IW/EW |
| Azimuth focusing | L1 SLC | TOPSAR / ScanSAR modes TBC |
| GRD generation | L1 GRD | Multilook + ground projection |
| L2 ocean | TBC | Wind / wave products at PDR |

## Links

- [GitHub repository](https://github.com/AstroCan17/sar-processor)
- [Software Development Plan](https://github.com/AstroCan17/sar-processor/blob/main/compliance/software-development-plan.md)
- [msi-processor (sibling)]({{ site.baseurl }}/projects/msi-processor.html)

[← All projects]({{ site.baseurl }}/projects/)
