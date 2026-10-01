---
title: "INTREPID Payload PCB"
tagline: "A student payload carrier board for a NASA-funded lunar CubeSat program, taken from first schematic to a fabrication-ready release in one week."
role: "PCB Designer"
org: "UAH IDEAS Lab · INTREPID"
category: "PCB design · Education hardware"
dates: "Jul 2026"
status: "Fab package released"
order: 5
featured: true
tools: ["KiCad 10", "Feather RP2040 Adalogger", "MPU-6050 IMU", "NTC thermistor", "Arduino / C++", "CircuitPython"]
cover: "/images/intrepid-pcb-iso.webp"
coverAlt: "3D render of the INTREPID payload PCB with the Feather RP2040, IMU module, thermistor and a large free-space area."
summary:
  challenge: "High-school teams needed a payload board that fits the CubeSat envelope, survives deployer testing, can't easily be mis-wired, and still leaves room for each team's own experiment."
  contribution: "Defined the board architecture, captured the schematic, laid out the 2-layer PCB, released the fabrication package, and wrote the companion logging firmware."
  result: "A 95 × 95 mm board with IMU, temperature and SD logging, released with Gerbers, drill files and STEP models about one week after the first schematic."
metrics:
  - { value: "95 × 95 mm", label: "2-layer, 1.6 mm FR4" }
  - { value: "1 week", label: "schematic to fabrication files" }
  - { value: "3", label: "sensing chains: IMU, temperature, logging" }
  - { value: "35 g", label: "board mass in the payload budget" }
links:
  - { label: "Deployer test campaign", href: "/projects/deployment-test-campaign" }
gallery:
  - { src: "/images/intrepid-pcb-top.webp", alt: "Top view render of the INTREPID PCB.", caption: "Top view. Silkscreen zones mirror the sensor-team curriculum, and the open area is reserved for each school's experiment." }
---

## Overview

INTREPID is a 17-week, NASA-funded program run by the UAH IDEAS Lab. High-school teams design, build, code and test a lunar CubeSat payload. Every team integrates the same core functions:

- An **IMU** for deployment dynamics.
- A **thermistor** for thermal data.
- **On-board SD logging.**

Breadboards work well for learning circuits but don't survive a deployer test. The program needed a common board that fits the payload structure and is robust enough for testing, while still leaving space for student-designed additions.

## My role

I was the **PCB designer**. I owned the requirements and architecture, the schematic and layout, the fabrication release, and the companion firmware used for test logging.

## Technical approach

- **Form factor.** 95 × 95 mm on 2-layer 1.6 mm FR4, sized to the payload structure and budgeted at 35 g.
- **Processor and logging.** An Adafruit **Feather RP2040 Adalogger** gives students USB programming in CircuitPython and a microSD card on one module, which keeps part count and wiring errors down.
- **Sensing.** An **MPU-6050** on I²C for acceleration and rotation. An **NTC 10 kΩ thermistor** in a divider on A0 for temperature.
- **Layout for teaching.** Silkscreen labels each functional zone (microcontroller, IMU, thermistor), so the board doubles as a map of the curriculum. About half the area is reserved as open space for each team's own experiment.
- **Release package.** Gerbers, drill files and STEP models for integration into the CubeSat CAD.
- **Firmware.** Logs IMU data at ±8 g to CSV on the SD card. This is the same data path used in the [deployer velocity test campaign](/projects/deployment-test-campaign).

## Results

- A fabrication-ready board delivered about **one week** after the first schematic.
- A single, consistent hardware platform for every participating school, which simplifies instruction, troubleshooting and test comparison across teams.

## Lessons learned

Designing for students is designing for the least forgiving user. The decisions that mattered most were about **error-proofing**: an integrated logger module, clear zone labels and a generous open area. Those mattered more than the electrical details.
