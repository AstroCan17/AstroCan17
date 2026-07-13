---
layout: default
---

<script>
  window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

# Would you like to see my blood, sweat, and tears so far? :muscle: Go ahead, Houston … :satellite: :satellite:

> **Satellite Image Processing & Cal/Val Engineer · Remote Sensing Engineer** — 11 satellite
> missions across design, manufacturing, test, launch, on-orbit calibration/validation, and
> ground-segment software. Pushbroom multispectral & hyperspectral (SWIR) optical instruments,
> L0→L2 processing, and Earth-observation ML.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![MATLAB](https://img.shields.io/badge/MATLAB-E16737?style=for-the-badge&logo=mathworks&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![GDAL](https://img.shields.io/badge/GDAL-5CAE58?style=for-the-badge&logo=gdal&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Dask](https://img.shields.io/badge/Dask-FC6E6B?style=for-the-badge&logo=dask&logoColor=white)
![Qt](https://img.shields.io/badge/Qt-41CD52?style=for-the-badge&logo=qt&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![ESA](https://img.shields.io/badge/ESA-Sentinel%201%2F2%2F5P%20·%20Harmony-003247?style=for-the-badge)
![USGS](https://img.shields.io/badge/USGS-Landsat%207%2F8%2F9-006633?style=for-the-badge)
![NASA](https://img.shields.io/badge/NASA-ASTER%20·%20MRO-0B3D91?style=for-the-badge)

**Find me:** [LinkedIn](<!-- TODO: LinkedIn URL -->) · [Email](mailto:candenizkaya17@gmail.com) · Berlin · [GitHub](https://github.com/AstroCan17)

> :red_circle: **Note:** This profile is prepared using publicly available information from the
> literature and reflects concepts I have learned during my professional experience. It does **not**
> include any proprietary or confidential information.

### Mission Patches

<div align="center">
    <img src="{{ site.baseurl }}/mission_patches/Connecta%20T1.1%20Mission%20Patch.jpg" width="170" alt="Connecta T1.1">
    <img src="{{ site.baseurl }}/mission_patches/Connecta%20T1.2%20Mission%20Patch.jpg" width="170" alt="Connecta T1.2">
    <img src="{{ site.baseurl }}/mission_patches/Connecta%20T2.1%20Mission%20Patch.jpg" width="170" alt="Connecta T2.1">
    <img src="{{ site.baseurl }}/mission_patches/Connecta%20T3.1%20%26%20T3.2%20ISL%20Twin%20Cubesats%20Mission%20Patch.jpg" width="170" alt="Connecta T3.1 & T3.2">
</div>

---

## :artificial_satellite: Featured Projects

### [eo-data-embedding](https://github.com/AstroCan17/eo-data-embedding) — multi-modal geospatial embedding search & change detection

[![CI](https://github.com/AstroCan17/eo-data-embedding/actions/workflows/ci.yml/badge.svg)](https://github.com/AstroCan17/eo-data-embedding/actions/workflows/ci.yml)
[![docs](https://github.com/AstroCan17/eo-data-embedding/actions/workflows/docs.yml/badge.svg)](https://astrocan17.github.io/eo-data-embedding/)
[![license](https://img.shields.io/badge/license-Apache--2.0-green)](https://github.com/AstroCan17/eo-data-embedding/blob/main/LICENSE)
[![ECSS](https://img.shields.io/badge/ECSS--E--ST--40C-tailored-5b2c8f)](https://github.com/AstroCan17/eo-data-embedding/tree/main/compliance)

Embed Sentinel-1/2 imagery **once** with a frozen **Clay v1.5** Vision Transformer, then run every
downstream task cheaply over the stored vectors — **similarity search**, **few-shot classification**
and **bitemporal change detection** — with no per-task fine-tuning and no GPU at query time. Ships a
plug-and-play **CPU-only demo** (`eo-data-embedding demo`).

Developed following a **proportionate, tailored ECSS software-engineering lifecycle** for
Earth-observation ML data-processing software (ECSS-E-ST-40C engineering + DRD set, ECSS-E-HB-40-02A
ML V&V, ECSS-Q-ST-80C product assurance), with honest evaluation — negative results reported, not hidden.

:link: [Repository](https://github.com/AstroCan17/eo-data-embedding) ·
:books: [Documentation](https://astrocan17.github.io/eo-data-embedding/) ·
:test_tube: [V&V report](https://github.com/AstroCan17/eo-data-embedding/blob/main/compliance/drd/vv-report.md)

> :construction: **More to come** — additional EO processing repos (multispectral L0–L2,
> georeferencing) are being reworked to the same ECSS-tailored lifecycle and consolidated under
> [`eopf-data-processor`](https://github.com/AstroCan17/eopf-data-processor).

---

## :toolbox: Skills & Tools

- **Languages:** Python · C · MATLAB
- **EO / imaging:** GDAL · rasterio · OpenCV · scikit-image · NumPy · Earth Engine API · Py6S
- **ML / DL:** PyTorch · Keras · CNNs · R-CNN / YOLO / SSD
- **Infra / engineering:** Docker · Kubernetes · Dask (distributed) · CI/CD · Git · Pytest · PEP 8 · GPU programming · Linux / shell
- **GIS / tooling:** ENVI · ArcMap · QGIS · Global Mapper · PCI Geomatica · Qt Designer
- **Products:** Sentinel-1 (SAR) · Sentinel-2 A/B · Sentinel-5P · Landsat 7/8/9 · ASTER · MRO CTX / HiRISE
- **Domains:** AOCS · System Engineering · Optical Design · Optoelectronics · Mission Planning

Comprehensive understanding of the entire data-processing and mission-planning lifecycle, from design
to deployment — ensuring high-quality data products and efficient satellite operations.

---

## :microscope: Deep dives

The detail below is the substance of my day-to-day work — collapsed to keep this page scannable.
Click any section to expand.

<details>
<summary><b>Ground-segment Cal/Val — Pushbroom hyperspectral spectrometer (L0–L1b)</b></summary>

<br>

I perform laboratory calibration of optical hyperspectral spectrometers for spaceborne applications.
Following Baumgartner's calibration framework and utilizing DLR's Optical Calibration Laboratory
facilities, I ensure the instrument meets its spectral, radiometric, and geometric fidelity
requirements. The campaign systematically characterizes detector-related effects, spectral response,
radiometric accuracy, and geometric alignment, validating that the instrument will perform to mission
specification on orbit.

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

</details>

<details>
<summary><b>Multispectral high-resolution camera — preprocessing pipeline (L0–L2)</b></summary>

<br>

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

</details>

<details>
<summary><b>On-orbit radiometric, spatial & geometric calibration — NUC / MTF / TOA</b></summary>

<br>

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

</details>

<details>
<summary><b>Remote-sensing applications & deep learning</b></summary>

<br>

- **ESA / USGS / NASA products:** Sentinel-1 (SAR), Sentinel-2 A/B, Sentinel-5P, Landsat 7/8/9, ASTER,
  MRO CTX & HiRISE.
- **Applications:** metallic-mineral exploration · fault-line detection · natural-disaster analysis ·
  NDVI/NDWI/NBR · image segmentation · surface-deformation detection · lineament extraction.
- **ATBD depth:** Sentinel-5P TROPOMI ATBD and Sentinel-2 ATBD.
- **Tooling (Qt Designer):** image-processing pipeline tools; image database search & download utilities.
- **ASTER:** VNIR/SWIR/TIR channels for mineral & mineral-group identification (mining applications).
- **Deep learning (Python, OpenCV, Keras):** object detection via color segmentation, template matching,
  corner/edge/contour detection; feature matching; watershed; pedestrian and face/cat-face recognition;
  CNNs for real-time digit classification and object detection; pyramid representation, sliding window,
  non-maximum suppression, region proposals; R-CNN, YOLO and SSD.

</details>

---

## :beer: Goofing Around Berlin

I just moved to Berlin and I'm practically glued to my computer chair. If anyone's bored and wants to
grab a coffee or beer to chat about satellites, space, rock music, Elon Musk's wife, astrophysics,
parallel universes, or Laika the dog — feel free to get in touch! :sunglasses:
