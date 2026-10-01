---
title: "PMI Dynamometer"
tagline: "A small-motor dynamometer measuring torque, speed and power with a load cell, a Hall-effect sensor and a custom PCB, reported with propagated uncertainty."
role: "Designer · Hardware, Firmware & GUI"
org: "UAH · Measurement & Instrumentation"
category: "Instrumentation · PCB design"
dates: "Apr 2026"
status: "Complete"
order: 7
featured: false
tools: ["KiCad", "Raspberry Pi Pico 2", "HX711 load cell amp", "Hall-effect sensor", "C++", "MATLAB App"]
cover: "/images/pmi-pcb-iso.webp"
coverAlt: "3D render of the dynamometer PCB with a Raspberry Pi Pico footprint, load cell amplifier and JST connectors."
summary:
  challenge: "Build an instrument that measures a small motor's torque and speed, computes mechanical power in real time, and quantifies how much each measurement can be trusted."
  contribution: "Designed the carrier PCB, wrote the firmware and the MATLAB dashboard, and performed the calibration and uncertainty analysis."
  result: "A working dynamometer with live 5 Hz display and laptop streaming, CSV run logging, and torque estimates reported with propagated uncertainty."
metrics:
  - { value: "76.2 mm", label: "torque arm" }
  - { value: "5 Hz", label: "live update rate" }
  - { value: "2", label: "sensing chains: torque and RPM" }
---

## Overview

This dynamometer measures small-motor performance for the Measurement & Instrumentation course (MAE 311). A **load cell** on a 76.2 mm arm measures reaction torque. A **Hall-effect sensor** counts rotations for RPM. A **Raspberry Pi Pico 2** combines the two into mechanical power, shown at 5 Hz on an I²C LCD and streamed to a laptop.

## My role

I designed the **hardware, firmware and GUI**, and performed the uncertainty analysis.

## Technical approach

- **Custom PCB (KiCad).** A Pico carrier with an HX711 load-cell amplifier and keyed JST connectors, so sensors cannot be connected backwards.
- **Firmware (C++).** Calibrated load-cell reads, interrupt-driven RPM timing, and serial output.
- **MATLAB dashboard.** A MATLAB GUI app that connects over serial, plots RPM, force, torque and power live, and saves each run to CSV.
- **Uncertainty analysis.** Load-cell calibration and arm-length uncertainty propagated into the torque estimate, so each reported value carries an error bound.

## Results

A complete measurement chain from sensor to dashboard, producing torque, speed and power with stated uncertainty, and logged runs ready for post-processing.

## Lessons learned

A measurement without an uncertainty is not yet a measurement. Building the error budget alongside the hardware, rather than after it, makes clear which components limit accuracy and where design effort pays off.
