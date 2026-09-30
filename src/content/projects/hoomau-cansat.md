---
title: "Ho'omau CanSat Avionics"
tagline: "My first flight board, and three schematic revisions of learning why datasheets matter."
role: "Electrical / PCB Designer"
org: "UAH Space Hardware Club"
dates: "Aug – Nov 2023"
status: "Complete"
order: 8
featured: false
tools: ["KiCad", "Raspberry Pi Pico", "BMP390", "LSM6DSOX", "XBee", "MOSFET drivers"]
cover: "/images/hoomau-pcb-2.webp"
coverAlt: "3D render of the Ho'omau CanSat PCB with battery holders, Pico and sensor modules."
metrics:
  - { value: "3", label: "schematic revisions" }
  - { value: "2-layer", label: "PCB" }
  - { value: "4", label: "MOSFET-driven release channels" }
gallery:
  - { src: "/images/hoomau-block.webp", alt: "Ho'omau electrical block diagram.", caption: "Block diagram, V2." }
  - { src: "/images/hoomau-pcb-1.webp", alt: "Alternate render of the Ho'omau PCB.", caption: "Earlier layout iteration." }
---

## Context

Ho'omau ("to persevere") was the Space Hardware Club's two-month CanSat, a fast-paced introduction to building flight hardware. I took on the electrical subsystem during my first semester at UAH.

## The board

- A **Raspberry Pi Pico** flight computer, with a **BMP390** for altitude and an **LSM6DSOX** IMU for attitude.
- **XBee** telemetry to the ground, plus an **OpenLog** for on-board backup logging.
- **Four MOSFET channels** driving the release mechanisms and servos, an L7805 5 V regulator, and buzzers for recovery.

I went through **three schematic revisions** and a 2-layer layout in KiCad. The lessons from this board — power-tree planning, decoupling, and giving every connector a job — went straight into the seven-revision [Shockwave flight board](/projects/cansat-shockwave) the following semester.
