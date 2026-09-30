---
title: "INTREPID Payload PCB"
tagline: "A carrier board that high-schoolers can plug into, log from and build on, taken from schematic to fab files in a week."
role: "PCB Designer"
org: "UAH IDEAS Lab · INTREPID"
dates: "Jul 2026"
status: "Fab package released"
order: 5
featured: true
tools: ["KiCad 10", "Feather RP2040 Adalogger", "MPU-6050 IMU", "NTC thermistor", "Arduino / C++", "CircuitPython"]
cover: "/images/intrepid-pcb-iso.webp"
coverAlt: "3D render of the INTREPID payload PCB with the Feather RP2040, IMU module, thermistor and a large free-space area."
metrics:
  - { value: "95 × 95 mm", label: "2-layer, 1.6 mm FR4" }
  - { value: "1 week", label: "schematic → Gerbers" }
  - { value: "3", label: "sensing chains: IMU, temperature, logging" }
  - { value: "35 g", label: "board mass in the payload budget" }
gallery:
  - { src: "/images/intrepid-pcb-top.webp", alt: "Top view render of the INTREPID PCB.", caption: "Top view: the labeled zones mirror the sensor-team curriculum, and the large \"Free Space\" area is left for each school's own experiments." }
---

## The brief

Every INTREPID school team integrates the same core sensors into a lunar CubeSat payload: an **IMU** for deployment dynamics, a **thermistor** for thermal data, and on-board **SD logging**. Breadboards are great for learning, but they don't survive a deployer test. Students needed a real board that fits the payload envelope, that they can't wire wrong, and that still leaves room for their own ideas.

## Design

- **Form factor.** 95 × 95 mm, sized to the payload structure, on 2-layer 1.6 mm FR4.
- **Brains and logging.** An Adafruit **Feather RP2040 Adalogger** gives students USB programming in CircuitPython and a microSD card on the same module.
- **Sensing.** An **MPU-6050** on I²C for acceleration and rotation, and an **NTC 10 kΩ thermistor** in a divider circuit on A0 for temperature.
- **Teaching layout.** The silkscreen labels each functional zone (Microcontroller, IMU, Thermistor), so the board doubles as a map of the curriculum. About half the board is a deliberate **"Free Space"** area for each team's own experiment.
- **Release.** A full Gerber and drill package with STEP models for integration into the CubeSat CAD. It went from first schematic to fabrication files in about a week.

## Firmware

I wrote the companion firmware that logs IMU data at ±8 g to a CSV file on the SD card. It is the same data path the students go on to use in the [deployer test campaign](/projects/deployment-test-campaign).
