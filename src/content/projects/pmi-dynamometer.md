---
title: "PMI Dynamometer"
tagline: "Measuring torque and speed with a load cell, a Hall sensor and a custom PCB, and being honest about the uncertainty."
role: "Designer · Hardware, Firmware & GUI"
org: "UAH · Measurement & Instrumentation"
dates: "Apr 2026"
status: "Complete"
order: 7
featured: false
tools: ["KiCad", "Raspberry Pi Pico 2", "HX711 load cell amp", "Hall-effect sensor", "C++", "MATLAB App"]
cover: "/images/pmi-pcb-iso.webp"
coverAlt: "3D render of the dynamometer PCB with a Raspberry Pi Pico footprint, load cell amplifier and JST connectors."
metrics:
  - { value: "0.0762 m", label: "torque arm" }
  - { value: "5 Hz", label: "live update rate" }
  - { value: "2", label: "sensing chains: torque and RPM" }
---

## What it does

This is a small-motor dynamometer. A **load cell** on a 76.2 mm arm measures reaction torque, a **Hall-effect sensor** counts rotations for RPM, and a **Raspberry Pi Pico 2** combines the two into mechanical power. The results update at 5 Hz on an I²C LCD and stream to a laptop.

## What I built

- **Custom PCB (KiCad).** A carrier for the Pico with an HX711 load-cell amplifier and keyed JST connectors, so the sensors can't be plugged in backwards.
- **Firmware.** Calibrated load-cell reads, interrupt-driven RPM timing, and serial output.
- **MATLAB dashboard.** A GUI app that connects over serial, plots RPM, force, torque and power live, and saves runs to CSV.
- **Uncertainty analysis.** Propagated the load-cell and arm-length uncertainty into the torque estimate, because a dynamometer number without an error bar isn't a measurement.
