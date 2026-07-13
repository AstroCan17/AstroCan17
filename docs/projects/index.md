---
layout: default
title: Projects
description: Earth-observation software portfolio — MSI/SAR processors, synthetic raw generation, and ML embeddings.
---

# Projects

Open-source Earth-observation software developed under a proportionate, tailored **ECSS-E-ST-40C** lifecycle. Each case study below distils the technical substance of the repository; full compliance documentation lives in the respective GitHub repos.

{% include project-cards.html %}

## IPF prototype at a glance

The **Instrument Processing Facility (IPF)** prototype connects a synthetic raw-data **producer** (`s2-msi-raw-generator`), a multispectral **consumer** (`msi-processor`), and a shared **data-store** registry. The generator runs a ReferenceSentinel-2B L1B backwards through the operational radiometric chain, materialises L0 products and a calibration database, and the processor consumes those inputs for a non-tautological L0→L1B round-trip.

See the [IPF ecosystem case study]({{ site.baseurl }}/projects/ipf-ecosystem.html) for the full architecture.
