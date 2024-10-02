# Motor Models and Control Notebooks

This repository contains models and control notebooks for different types of electric motors, including Permanent Magnet Synchronous Motors (PMSM), Induction Motors (IM), and Synchronous Reluctance Motors (SyRM). These notebooks are designed for educational purposes to help students and researchers explore various motor control techniques.

## Table of Contents

1. [Permanent Magnet Synchronous Motor (PMSM) Control Models](#pmsm-control-models)
2. [Induction Motor (IM) Control Models](#induction-motor-control-models)
3. [Synchronous Reluctance Motor (SyRM) Control Models](#synchronous-reluctance-motor-control-models)
4. [Disclaimer](#disclaimer)

---

## PMSM Control Models

The following notebooks demonstrate various control methods for a 2.2-kW Permanent Magnet Synchronous Motor (PMSM):

1. **[Sensorless Current-Vector Control of a 2.2-kW PMSM Drive](pmsm_model/pmsm_2kw__current_vector_control_.ipynb)**  
   Implements sensorless current-vector control for efficient torque control in PMSM.

2. **[Sensorless Current-Vector Control with Diode Bridge Rectifier](pmsm_model/pmsm_2kw_diode_current_vector.ipynb)**  
   Demonstrates current-vector control using a diode bridge rectifier to manage power conversion.

3. **[Observer-Based V/Hz Control of PMSM Drive](pmsm_model/pmsm_2kw_observer_based_V_Hz.ipynb)**  
   A basic V/Hz control method with state observer-based feedback.

4. **[Observer-Based V/Hz Control with Two-Mass System](pmsm_model/pmsm_2kw_two_mass_observer_based_V_Hz_.ipynb)**  
   Simulates a two-mass system integrated with observer-based V/Hz control.

5. **[Sensorless Flux-Vector Control](pmsm_model/pmsm_2kw_flux_vector_control.ipynb)**  
   Provides sensorless control of flux-vector for high-performance control.

6. **[Sensorless Vector Control with Square-Wave Injection](pmsm_model/pmsm_2kw_Square_wave_signal_injection.ipynb)**  
   Utilizes square-wave signal injection to enhance sensorless control accuracy.

---

## Induction Motor Control Models

The following notebooks detail control techniques for a 2.2-kW Induction Motor (IM):

1. **[Current-Vector Control of a 2.2-kW Induction Motor Drive](induction_model/2_2_kW_induction_motor_current_vector_control.ipynb)**  
   Explores current-vector control for torque regulation.

2. **[Sensorless Current-Vector Control with Magnetic Saturation](induction_model/2_2_kW_induction_motor_current_vector_control_magnetic_saturation.ipynb)**  
   Incorporates machine magnetic saturation into the current-vector control model.

3. **[V/Hz Control with Six-Step Overmodulation](induction_model/2_2_kW_induction_motor_V_Hz_control_6_step_mode.ipynb)**  
   Demonstrates V/Hz control with six-step overmodulation enabled.

4. **[V/Hz Control with Diode Bridge Rectifier](induction_model/2_2_kW_induction_motor_diode_V_Hz_control_bridge.ipynb)**  
   Includes diode bridge rectifier in the V/Hz control scheme.

5. **[V/Hz Control with LC Filter](induction_model/2_2_kW_induction_motor_V_Hz_control_LC_filter.ipynb)**  
   Adds an LC filter to the V/Hz control for smoothing the output.

6. **[Observer-Based V/Hz Control](induction_model/2_2_kW_induction_motor_observer_based_V_Hz_control_.ipynb)**  
   Utilizes observer-based feedback in the V/Hz control of the induction motor.

7. **[Sensorless Flux-Vector Control](induction_model/2_2_kW_induction_motor__sensorless_flux_vector_control.ipynb)**  
   Sensorless flux-vector control for efficient torque production in induction motors.

---

## Synchronous Reluctance Motor Control Models

The following notebooks focus on control strategies for a 6.7-kW Synchronous Reluctance Motor (SyRM):

1. **[Sensorless Current-Vector Control of a 6.7-kW SyRM Drive](SyRM/6_7_kW_SyRM_drive_sensorless_current_vector_control.ipynb)**  
   Implements sensorless current-vector control for SyRM.

2. **[Observer-Based V/Hz Control of a Saturated 6.7-kW SyRM Drive](SyRM/6_7_kW_SyRM_drive_observer_based_V_Hz_control.ipynb)**  
   Simulates observer-based V/Hz control of the saturated SyRM drive.

3. **[Sensorless Stator-Flux-Vector Control of a Saturated 6.7-kW SyRM Drive](SyRM/6_7_kW_SyRM_drive_sensorless_stator_flux_vector_control.ipynb)**  
   Demonstrates sensorless stator-flux-vector control for torque and speed regulation.

4. **[Sensorless Vector Control with Square-Wave Signal Injection](SyRM/6_7_kW_SyRM_drive_sensorless_vector_control_square_wave_signal_injection.ipynb)**  
   Utilizes square-wave signal injection in sensorless vector control of the SyRM.

---

## Disclaimer

All the notebooks and models in this repository are for **educational purposes only**. They are intended to support learning about motor control techniques, drive systems, and motor dynamics. The code and models provided may not reflect the complexities and safety considerations needed for practical industrial implementations.

The models are simplified versions of real-world systems and are designed for study, research, and educational use only. Please do not use them in critical or commercial applications without thorough testing and verification.

---

Feel free to explore and use these resources for your learning, and I hope they will aid in your understanding of motor control techniques!

---
