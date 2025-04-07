# Work Summary

> <span style="color: white">About me: So far, I have participated in 9 CubeSat and 2 SmallSat projects. I was involved in the end-to-end production of 9 of these, and we launched them into Low Earth Orbit (LEO). The satellites are still actively continuing their missions.</span>
>
> <span style="color: red">**Note**: This document has been prepared using publicly available information from the literature and reflects concepts I have learned during my professional experience. It does not include any proprietary or confidential information.</span>

---

## Pushbroom Optical Hyperspectral Spectrometer Calibration and Pre-processing (L0-L1b)

### 1. Introduction

>The purpose of this report is to outline a detailed calibration procedure for the optical hyperspectral spectrometer to be used in spaceborne applications. Following the calibration framework provided in Baumgartner's thesis and leveraging the advanced facilities at DLR's Optical Calibration Laboratory, the objective is to ensure spectral, radiometric, and geometric fidelity of the instrument in compliance with the specified requirements. The calibration campaign will address detector-related effects, spectral response, radiometric accuracy, and geometric alignment.

### 2. Calibration Objectives
   * #### Spectral Calibration 
      * Determine the Instrument Spectral Response Function (ISRF) as a function of wavelength and pixel position.
      * Verify ISRF Full Width at Half Maximum (FWHM) meets the target.
      * Validate spectral oversampling and a spectral sampling interval.
      * Characterize and minimize smile and keystone effects to thresholds below acceptable levels.
      * Confirm pixel spectral linearity and ISRF stability under thermal and mechanical perturbations.
      * Measure and characterize spectral resolution across the full spectral range.
      * Determine wavelength calibration accuracy and precision.
      * Evaluate spectral sampling interval and spectral resolution stability.

   * #### Radiometric Calibration
      * Establish a radiometric reference achieving high multiplicative accuracy using multiple radiance levels.
      * Verify overall optical transmission and detector response consistency.
      * Ensure radiometric stability and zero-level offset stability.
      * Validate detector linearity up to the saturation level and stray light contributions.

   * #### Geometric (Spatial) Calibration
      * Characterize focal length, aperture, slit geometry, and alignment.
      * Confirm spatial sampling distance at specified orbital altitude.
      * Measure and correct spatial smile and keystone effects to below the specified threshold for design.

### 3. Methodology and Calibration Steps
   * #### Pre-Calibration Alignment
      * ##### Mechanical Alignment
         * Mount the instrument on a vibration-isolated optical table.
         * Verify alignment of optical components using a collimated reference beam.
         * Record slit orientation and grating alignment.

      * ##### Dark Signal and Offset
         * Operate the detector in a dark and thermally controlled environment.
         * Characterize dark current and offset for reserved dark pixels.

   * #### Spectral Calibration
      * ##### Wavelength Registration
         * Use a monochromator to supply narrow spectral lines across the spectrometer's bandwidth.
         * Measure ISRF profiles for each pixel and extract FWHM.

      * ##### Smile and Keystone
         * Shift the illumination spot across the Field of View (FoV) and record spectral and spatial shifts.

      * ##### Stability Tests
         * Simulate thermal and mechanical stresses and evaluate ISRF variation.

   * #### Radiometric Calibration
      * ##### Absolute Radiance Calibration
         * Illuminate the entrance slit with a calibrated integrating sphere.
         * Derive gain and offset coefficients for each pixel.

      * ##### Linearity and Noise
         * Assess signal-to-noise ratio (SNR), dark current, and readout noise.
         * Vary integration time and radiance levels to confirm detector linearity.

      * ##### Stray Light Assessment
         * Simulate high-contrast scenes and evaluate stray light suppression.

   * #### Geometric Calibration
      * ##### PSF Mapping
         * Use a collimated beam and pinhole mask to map the Point Spread Function (PSF).

      * ##### Field-of-View Verification
         * Measure FoV and ensure alignment with design specifications.

      * ##### Smile and Keystone Validation
         * Introduce distinct spectral lines across the FoV and measure detector output to quantify smile and keystone effects.

### 4. Data Analysis and Correction
   * #### Key Data Products
      * Spectral calibration files (ISRF maps, wavelength alignment).
      * Radiometric calibration files (gain, offset, linearity corrections).
      * Geometric calibration files (distortion maps, smile/keystone corrections).

   * #### Uncertainty Estimation
      * Assess calibration uncertainties based on reference standards and environmental stability.
      * Document potential sources of error, including mechanical shifts and signal noise.

   * #### Validation
      * Apply calibration files to a test dataset and verify compliance with requirements.

---

## Pushbroom Multispectral High-Resolution Camera Calibration and Pre-processing (L0-L2)

   * For my calibration work, you can find my own demo satellite image preprocessing and calibration & validation pipeline in my Google Drive Folder. This is a demo calibration and preprocessing pipeline starting from **Level-0 (raw)** to **Level-2 (science ready dataset)**. I did not include decoding code and some pansharpening methods due to NDA. Besides, when I have time, I will include the unit tests for the functions, different pansharpening methods, and atmospheric correction algorithms. Also, I am currently working on the MTF sharpening algorithm. If I can complete it in a couple days, I will upload it.  Moreover, I can summarize my work below:

   * **Note**: During my time at Plan-S Satellite and Space Technologies, I contributed to calibration activities for a CubeSat equipped with a multispectral camera. The camera, developed by Dragonfly Aerospace, offers high resolution multispectral imaging capabilities. I also contributed to the design phase of an advanced High Resolution EO satellite constellation project, focusing on optical design and imaging systems. My role involved following the optical component development process and participating in software development for onboard AI processing using NVIDIA Jetson platforms.

### Radiometric, Spatial, and Geometric Calibration
   * I send commands to take pictures of pseudo-invariant sites such as the Mauritania Desert, Dome-C, or Antarctic for the flatfield image at different TDI stages and exposure times. I follow the USGS Test Sites Catalog.
   * I use images taken at night during passes over the Atlantic Ocean, ensuring there are no clouds and no light, as darkfield images.

   * #### Non Uniformity Correction (NUC)
      * Calculate the mean of each column for the flatfield and darkfield images. Call the results for each column `flatfield_desired` and `darkfield_desired`.
      * Calculate gain and offset as:
         $$
         gain = \frac{\overline{flatfield_{desired}} - \overline{darkfield_{desired}}}{flatfield_{desired} - darkfield_{desired}}
         $$
         $$
         offset = \overline{flatfield_{desired}} - gain \cdot flatfield_{desired}
         $$
      * Apply non-uniformity correction and flatfielding simultaneously (NUC). A `dark_offset` parameter is taken from laboratory results:
         $$
         NUC_{frame} = img \cdot gain + offset - dark_{offset}
         $$

   * #### Bad Pixel Correction
      * Calculate the global variance of the pixels as a threshold.
      * Identify pixels exceeding the threshold.
      * Replace bad pixels with the average value of neighboring pixels.

   * #### Denoising
      * Implement a Butterworth low-pass filter with parameters chosen by trial and error.

   * #### Image Restoration
      * In the worst-case scenario, relying on the satellite's internal clock for image capture can introduce a 1-second timing offset, leading to a positional deviation of up to 7 km. Therefore, I use structures like take-off runways and bridges as MTF targets if I cannot capture dedicated MTF targets like Baotou.

      * ##### MTF Calculation and PSF Sharpening
         * Identify a suitable edge (close to main scan or cross-scan axes) with sufficient contrast and low noise.
         * Construct the Edge Spread Function (ESF) from the edge.
         * Derive the Line Spread Function (LSF) by differentiating the ESF.
         * Take the normalized Fourier transform of the LSF to obtain the MTF.
         * The PSF is derived from the MTF (Fourier Transform of the PSF).
         * If the PSF is noisy or inaccurate, consider simulating a PSF model.
         * Normalize the PSF kernel and convolve the image. Alternatively, use Wiener deconvolution.

   * #### Band Registration
      * Because of subpixel alignment issues:
         1. Convert images to 8-bit and apply CLAHE to create dummy bands.
         2. Use the selected reference band to find keypoints and descriptors of the other bands with SIFT.
         3. Match keypoints with a FLANN-based matcher.
         4. Calculate the homography matrix.
         5. Warp the bands relative to the reference band using the homography matrix.

   * #### Georeferencing
      * Use Sentinel-2 bands as a reference for image-to-image georeferencing.
      * Estimate coordinates of the image scene using TLE information.
      * Download Sentinel-2 images from Google Earth Engine for those coordinates.
      * Apply the same feature matching and warping method used in band registration.
      * Copy the corner coordinates, CRS, and transform from Sentinel-2 to the T2.1 bands.

   * #### Top of Atmospheric (TOA) Conversion
      * The result of NUC is still in Digital Numbers. Convert to radiometric units using radiometric gain/offset for each band. The Sentinel-2 TOA Reflectance equation can be applied:
         $$
         Radiance_{TOA} = (NUC_{frame} - radiance_{offset}) \cdot radiance_{gain}
         $$

   * #### Atmospheric Correction
      * Familiar with MODTRAN and LibRadTran atmospheric models.
      * Used FLAASH model on ENVI for Landsat 8 OLI dataset.
      * Because of MODTRAN licensing, follow the atmospheric correction algorithm indicated in **Landsat 8-9 Calibration and Validation (Cal/Val) Algorithm Description Document (ADD), page 776**.
      * Work in progress on atmospheric modeling.

---

End of Work Summary

