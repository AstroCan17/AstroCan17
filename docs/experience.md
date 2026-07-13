---
layout: default
title: Experience
description: Satellite ground segment, payload data processing, Cal/Val, and Earth-observation ML experience across 16 satellite missions.
math: true
---

# Experience

> **Satellite Ground Segment Architect — Payload Data Processing — AI Data Processing** — {% include mission-count.html %} satellite
> missions across Phase 0–E, combining system engineering with hands-on L0–L2 payload data processing,
> laboratory and on-orbit Cal/Val, and ECSS-compliant software delivery.

> :red_circle: **Note:** This profile is prepared using publicly available information from the
> literature and reflects concepts I have learned during my professional experience. It does **not**
> include any proprietary or confidential information.

## Professional summary

Operational satellite ground segment system engineer with **ESA Harmony / EOF-EOS (PDGS)** experience
in ECSS-compliant environments. Contributed across **{% include mission-count.html %} satellite missions** covering the full
Phase 0–E lifecycle — requirements decomposition (URD/MRD/SRD), MBSE-based architecture (UML/SysML),
interface control, and IV&V. Designed and developed **L0–L2 payload data processing chains** with
system-level sizing and trade-offs (throughput, latency, compute capacity), and implemented
containerized pipelines using Docker and Kubernetes. Deep mastery of the radiometric chain, proven by
building the **exact inverse of the Sentinel-2 MSI L0→L1B chain** in the open-source
[Sentinel-2 MSI Synthetic Raw Data Generator]({{ site.baseurl }}/projects/s2-msi-raw-generator.html) project.

<div class="hero-cta">
  <a class="btn btn-primary" href="{{ site.baseurl }}/projects/">View projects</a>
  <a class="btn" href="https://www.linkedin.com/in/candenizkaya/">LinkedIn</a>
</div>

## Career timeline

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-period">February 2026 – June 2026 · Remote / Berlin</div>
    <p class="timeline-role">Ground Segment System &amp; AI Data Processing Lead Engineer</p>
    <p class="timeline-org">Cosmic DynamiX</p>
    <ul>
      <li>Created high-to-low level architecture of satellite ground segment system components through Phases 0–D, including URD/MRD/SRD decomposition and MBSE-based design (UML/SysML).</li>
      <li>Developed satellite ground segment data processor pipeline (L0–L2) and AI/ML pipeline for CNNs and Spiking Neural Networks (SNNs).</li>
      <li>Integrated CNNs and SNNs into YOLO framework for EO data processing — end-to-end AI-based chain for small ground-target detection on HR imagery.</li>
      <li>Led technical planning: data volumes, throughput, latency, GPU/memory trade-offs; defined QA/QC and traceability for AI outputs.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">June 2025 – February 2026 · Hybrid Italy / Berlin</div>
    <p class="timeline-role">Ground Segment System &amp; Instrument Engineer (ESA Harmony / EOF-GEP)</p>
    <p class="timeline-org">European Space Agency (ESA) – ESRIN c/o Starion</p>
    <ul>
      <li>Payload data ground segment system engineering across Phases 0–D; URD/MRD/SRD decomposition and MBSE architectural design.</li>
      <li>Member of the <strong>Ground Segment Review Board</strong> and core contributor to the Data, Innovation, and Science Cluster (DISC).</li>
      <li>Review Board member for the Harmony End-to-End Performance Simulator (HEEPS) — system-level and algorithm-focused reviews per ECSS.</li>
      <li>Led technical planning for payload data processors: downlink volumes, throughput, latency, compute capacity, C++ vs Python trade-offs.</li>
      <li>Cross-verification testing for SAR and Multispectral Imager processors (L1/L2/L3); IV&V planning, change control, CCSDS and PUS standards.</li>
      <li>Contributed to EOPF transition: Zarr adoption, Master ICD updates, Sentinel-1 ingestion; data processing focal point at ATBD decision meetings.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">February 2025 – June 2025 · Berlin</div>
    <p class="timeline-role">Satellite System Consultant &amp; Data Quality Engineer (Freelance)</p>
    <p class="timeline-org">Freelance</p>
    <ul>
      <li><strong>Hyperspectral spectrometer (confidential):</strong> radiative-transfer reference scenes, GUM uncertainty budget, Shannon-based band ranking, optical-system SNR model, trade-space sweeps (GSD, swath, MTF, SNR, NEΔL, CE90), Cal/Val matrix aligned with QA4EO.</li>
      <li><strong>VHR nanosatellite PDGS (confidential):</strong> L0–L2 processor in Python — radiometric calibration, geometric correction, atmospheric correction (RT LUT), QC gates and acceptance reporting.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">August 2024 – January 2025 · Berlin</div>
    <p class="timeline-role">Satellite Image Processing &amp; Cal/Val Engineer</p>
    <p class="timeline-org">AIRMO GmbH</p>
    <ul>
      <li>Led SWIR/RGB sensor calibration for a GHG satellite mission: test planning, execution, verification reporting.</li>
      <li>Developed and maintained L0–L2 payload data processor with calibration validation and automated quality checks.</li>
      <li>Developed methane tracking algorithm; produced traceable calibration documentation for stakeholder reviews.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">October 2022 – February 2024 · Ankara</div>
    <p class="timeline-role">Satellite Image Processing &amp; Cal/Val Engineer — System Engineering Team</p>
    <p class="timeline-org">Plan-S Satellite and Space</p>
    <ul>
      <li>Designed end-to-end containerized L0–L2 ground segment pipeline with GPU-accelerated band processing, automated QA/QC, metadata generation, and full product lineage tracking.</li>
      <li>Ground segment support across <strong>12 CubeSat missions</strong> — lab calibration, on-orbit commissioning, routine performance monitoring (<a href="#mission-registry">mission registry</a>).</li>
      <li><strong>CONNECTA T2.1</strong> (3.25 m GSD): full multispectral CubeSat lifecycle; L0–L2 processor (NUC, MTF, denoising, georeferencing, atmospheric correction).</li>
      <li><strong>CONNECTA T3.1 &amp; T3.2:</strong> lab Cal/Val of COTS SWIR camera for twin ISL CubeSats.</li>
      <li>Built operator-facing Qt GUI and CLI/API; Docker-containerized execution, versioned YAML/JSON config, automated PDF Data Quality Reports.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">October 2020 – February 2022 · Ankara</div>
    <p class="timeline-role">Research Assistant</p>
    <p class="timeline-org">TÜBİTAK Space Technologies Research Institute</p>
    <ul>
      <li>Science Team Member — Turkish Lunar Rover Mission: DEM extraction and ML prototypes for landing-site analysis.</li>
      <li>Remote sensing across Sentinel-1/2, Landsat-7/8/9, ASTER, MRO CTX &amp; HiRISE.</li>
      <li>Structural investigation of Thaumasia Planum, Mars (ongoing scientific research).</li>
      <li>BSc thesis: lineament extraction from Landsat-8 via PCA — Izmir–Balıkesir Transfer Zone and North Anatolian Fault Zone.</li>
    </ul>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">June 2021 – September 2022 · Çanakkale</div>
    <p class="timeline-role">Project Planning and Contract Engineer</p>
    <p class="timeline-org">DLSY Joint Venture (1915 Çanakkale Bridge, $4.5B)</p>
    <ul>
      <li>Managed procurement and leasing contracts; structured stakeholder coordination and documentation discipline.</li>
    </ul>
  </div>
</div>

---

## Competency depth

The sections below expand on four core competency areas referenced in the timeline above.

{% include competency-nav.html local=true %}

<h3 id="system-engineering" class="competency-section">System Engineering</h3>

Ground-segment and payload-data system engineering across Phase 0–E in ECSS-compliant environments.

- **Requirements & architecture** — URD/MRD/SRD decomposition; MBSE-based design (UML/SysML); interface control documents and Master ICD maintenance.
- **Review & IV&V** — Ground Segment Review Board (ESA Harmony); HEEPS simulator reviews; cross-verification testing for SAR and multispectral processors (L1/L2/L3); change control and traceability.
- **Sizing & trade-offs** — downlink volumes, throughput, latency, compute capacity; C++ vs Python processor implementation trade-offs; GPU/memory planning for AI pipelines.
- **Standards & transition** — CCSDS, PUS; EOPF transition (Zarr adoption, Sentinel-1 ingestion); PDR/CDR/QR lifecycle participation.
- **Container orchestration** — Docker and Kubernetes for ground-segment deployment patterns.

Related open-source work: [IPF ecosystem]({{ site.baseurl }}/projects/ipf-ecosystem.html) · [sar-processor]({{ site.baseurl }}/projects/sar-processor.html)

<h3 id="cal-val" class="competency-section">Cal/Val</h3>

Laboratory and on-orbit calibration for pushbroom optical instruments — hyperspectral, multispectral, and SWIR.

#### Ground-segment Cal/Val — Pushbroom hyperspectral spectrometer (L0–L1b)

I perform laboratory calibration of optical hyperspectral spectrometers for spaceborne applications,
ensuring the instrument meets its spectral, radiometric, and geometric fidelity requirements. The
campaign systematically characterizes detector-related effects, spectral response, radiometric accuracy,
and geometric alignment, validating that the instrument will perform to mission specification on orbit.

**Calibration objectives**

- **Spectral** — determine the Instrument Spectral Response Function (ISRF) vs. wavelength and pixel
  position; verify ISRF FWHM; validate spectral oversampling and sampling interval; minimize smile and
  keystone; confirm spectral linearity and ISRF stability under thermal/mechanical perturbation;
  determine wavelength calibration accuracy.
- **Radiometric** — establish a radiometric reference with high multiplicative accuracy over multiple
  radiance levels; verify optical transmission and detector-response consistency; ensure radiometric
  and zero-level offset stability; validate detector linearity up to saturation and stray-light
  contributions.
- **Geometric** — characterize focal length, aperture, slit geometry and alignment; confirm spatial
  sampling distance at orbital altitude; correct spatial smile/keystone below the design threshold.

**Methodology & steps**

- *Pre-calibration alignment* — mount on a vibration-isolated optical table; verify optical components
  with a collimated reference beam; record slit orientation and grating alignment. Operate the detector
  in a dark, thermally controlled environment and characterize dark current and offset for reserved
  dark pixels.
- *Spectral* — use a monochromator to supply narrow spectral lines across the spectrometer's bandwidth;
  measure ISRF profiles per pixel and extract FWHM. Shift the illumination spot across the FoV to record
  spectral/spatial shifts (smile/keystone). Simulate thermal and mechanical stresses to evaluate ISRF
  variation.
- *Radiometric* — illuminate the entrance slit with a calibrated integrating sphere; derive per-pixel
  gain and offset. Assess SNR, dark current and readout noise; vary integration time and radiance to
  confirm linearity. Simulate high-contrast scenes to evaluate stray-light suppression.
- *Geometric* — map the Point Spread Function with a collimated beam and pinhole mask; measure FoV
  against design; quantify smile/keystone with distinct spectral lines across the FoV.

**Data products & validation** — spectral (ISRF maps, wavelength alignment), radiometric (gain, offset,
linearity) and geometric (distortion maps, smile/keystone) calibration files; uncertainty estimation
against reference standards and environmental stability; validation by applying calibration files to a
test dataset and verifying requirement compliance.

#### On-orbit radiometric, spatial & geometric calibration — NUC / MTF / TOA

I command captures of pseudo-invariant sites (Mauritania Desert, Dome-C, Antarctic) for flatfield
images at different TDI stages and exposure times (following the USGS Test Sites Catalog), and night
passes over the Atlantic (no clouds, no light) as darkfield images.

**Non-Uniformity Correction (NUC)** — mean each column of flatfield/darkfield (`flatfield_desired`,
`darkfield_desired`), then:

$$ gain = \frac{\overline{flatfield_{desired}} - \overline{darkfield_{desired}}}{flatfield_{desired} - darkfield_{desired}} $$

$$ offset = \overline{flatfield_{desired}} - gain \cdot flatfield_{desired} $$

Apply NUC and flatfielding simultaneously with a lab-derived `dark_offset`, and store gain/offset in a
Calibration Key Data (CKD) container:

$$ NUC_{frame} = img \cdot gain + offset - dark_{offset} $$

**Bad-pixel correction** — global pixel variance as threshold; replace flagged pixels with neighbour
average. **Denoising** — Butterworth low-pass (parameters by trial).

**Image restoration / MTF** — internal-clock timing offset can introduce up to ~7 km positional
deviation, so I use runways and bridges as MTF targets when dedicated targets (e.g. Baotou) aren't
available. Build the Edge Spread Function from a high-contrast edge → differentiate to the Line Spread
Function → normalized Fourier transform → MTF; derive PSF from the MTF (or simulate a PSF model when
noisy); normalize the PSF kernel and convolve, or use Wiener deconvolution.

**Band registration** — convert to 8-bit + CLAHE dummy bands; SIFT keypoints/descriptors vs. a
reference band; FLANN matcher; homography; warp bands to the reference.

**Georeferencing** — Sentinel-2 bands as image-to-image reference; estimate scene coordinates from TLE;
download Sentinel-2 from Earth Engine; feature-match & warp; copy corner coordinates, CRS and transform.

**TOA conversion** — convert NUC Digital Numbers to radiance with per-band radiometric gain/offset:

$$ Radiance_{TOA} = (NUC_{frame} - radiance_{offset}) \cdot radiance_{gain} $$

**Atmospheric correction** — Py6S; familiar with MODTRAN and LibRadTran; used FLAASH (ENVI) on Landsat-8
OLI; due to MODTRAN licensing, follow the Landsat 8–9 Cal/Val ADD (p. 776). **Mathematical modeling &
SNR** — optics+sensor integrated modeling to compute total photons collected as a function of attitude
(roll, pitch, yaw).

Mission examples: CONNECTA T2.1/T3.x CubeSats · GHG monitoring mission (AIRMO) · hyperspectral spectrometer Cal/Val matrix (QA4EO-aligned).

<h3 id="remote-sensing-ai" class="competency-section">Remote Sensing &amp; AI/ML</h3>

Earth-observation science and machine-learning pipelines across operational and research missions.

- **ESA / USGS / NASA products:** Sentinel-1 (SAR), Sentinel-2 A/B, Sentinel-5P, Landsat 7/8/9, ASTER,
  MRO CTX & HiRISE.
- **Applications:** metallic-mineral exploration · fault-line detection · natural-disaster analysis ·
  NDVI/NDWI/NBR · image segmentation · surface-deformation detection · lineament extraction.
- **Tooling (Qt Designer):** image-processing pipeline tools; image database search & download utilities.
- **ASTER:** VNIR/SWIR/TIR channels for mineral & mineral-group identification (mining applications).
- **Deep learning (Python, OpenCV, Keras, PyTorch):** object detection via color segmentation, template matching,
  corner/edge/contour detection; feature matching; watershed; CNNs for real-time digit classification and object detection;
  pyramid representation, sliding window, non-maximum suppression, region proposals; R-CNN, YOLO and SSD;
  Spiking Neural Networks (SNNs) integrated into EO target-detection chains.
- **Research:** Turkish Lunar Rover Mission — DEM extraction and ML prototypes for landing-site analysis;
  planetary geology (Thaumasia Planum, Mars); BSc thesis lineament extraction (Landsat-8 PCA).

Related open-source work: [eo-data-embedding]({{ site.baseurl }}/projects/eo-data-embedding.html)

<h3 id="software-data-processing" class="competency-section">Software Data Processing Development</h3>

End-to-end payload data ground-segment software from raw instrument packets to science-ready products.

#### Multispectral high-resolution camera — preprocessing pipeline (L0–L2)

Responsible for developing the calibration, validation and preprocessing **ground-segment software**
from **Level-0 (raw)** to **Level-2 (science-ready)** for pushbroom multispectral optical instruments.

- **Level 0** — decoding; missing-package check and flag generation.
- **Level 1** — Non-Uniformity Correction (gain/offset key data); dark-current correction; denoising
  (filters / designed digital signal filters); radiometric conversion from lab or on-orbit key data;
  MTF compensation / PSF deconvolution; band co-registration (sensor acquisition model or keypoint
  extraction & matching); georeferencing (GDAL/rasterio; central-pixel metadata coordinate, or — when
  GNSS is missing — Sentinel-2 reference via TLE + Google Earth Engine, then image-to-image keypoint
  matching); geolocation-accuracy (CE95); orthorectification.
- **Level 2** — atmospheric correction (Py6S).
- **Additional** — pansharpening (Simple Brovey, Gram-Schmidt, ESRI); image-quality report (PSNR, RMSE,
  SSIM, MSE, GIQE, CE95, radiometric accuracy) generated to PDF.

| Requirements | Testing & development framework |
|-------------|-----------------------------------|
| Python 3.x, NumPy, OpenCV, GDAL, rasterio, scikit-image, matplotlib, Earth Engine API | Docker · Kubernetes · Dask (distributed) · Pytest · unit-test coverage · comprehensive logging |

Operator-facing **Qt GUI and CLI/API**; Docker-containerized execution; versioned YAML/JSON configuration;
automated PDF Data Quality Reports.

Related open-source work: [msi-processor]({{ site.baseurl }}/projects/msi-processor.html) · [Sentinel-2 MSI Synthetic Raw Data Generator]({{ site.baseurl }}/projects/s2-msi-raw-generator.html) · [IPF ecosystem]({{ site.baseurl }}/projects/ipf-ecosystem.html)

---

## Mission registry {#mission-registry}

{% include mission-count.html %} satellite missions across Phase 0–E — public missions named below; confidential programmes listed without proprietary detail.

{% include missions-grid.html %}

---

## Skills

<div class="skills-grid">
  <div class="skill-block">
    <strong>Systems &amp; ground segment</strong>
    <span>ECSS · URD/MRD/SRD · MBSE (UML/SysML) · IV&amp;V · ICD · CCSDS/PUS · PDR/CDR/QR</span>
  </div>
  <div class="skill-block">
    <strong>Languages &amp; software</strong>
    <span>Python · C++ · MATLAB · SQL · Linux · Git · Bash</span>
  </div>
  <div class="skill-block">
    <strong>EO / imaging</strong>
    <span>GDAL · rasterio · OpenCV · ENVI/IDL · ESA SNAP · Py6S · MODTRAN · QA4EO · GIQE</span>
  </div>
  <div class="skill-block">
    <strong>ML / DL</strong>
    <span>PyTorch · Keras · CNNs · SNNs · YOLO · R-CNN / SSD · FAISS</span>
  </div>
  <div class="skill-block">
    <strong>Infra / DevOps</strong>
    <span>Docker · Kubernetes · CI/CD · Dask · Pytest · AWS (S3, EC2)</span>
  </div>
  <div class="skill-block">
    <strong>GIS / tools</strong>
    <span>QGIS · ArcGIS · STK · Qt Designer · Google Earth Engine</span>
  </div>
  <div class="skill-block">
    <strong>Standards &amp; formats</strong>
    <span>EOPF · CEOS · Zarr · STAC · COG · DIMAP · OGC</span>
  </div>
  <div class="skill-block">
    <strong>Products</strong>
    <span>Sentinel-1/2/5P · Landsat 7/8/9 · ASTER · MRO CTX / HiRISE</span>
  </div>
</div>
