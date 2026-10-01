---
title: "Ho'omau CanSat Avionics"
tagline: "Electrical subsystem and flight PCB for a two-month Space Hardware Club CanSat, my first flight board, refined over three schematic revisions."
role: "Electrical / PCB Designer"
org: "UAH Space Hardware Club"
category: "PCB design · Avionics"
dates: "Aug – Nov 2023"
status: "Complete"
order: 8
featured: false
tools: ["KiCad", "Raspberry Pi Pico", "BMP390", "LSM6DSOX", "XBee", "MOSFET drivers"]
cover: "/images/hoomau-pcb-2.webp"
coverAlt: "3D render of the Ho'omau CanSat PCB with battery holders, Pico and sensor modules."
summary:
  challenge: "Deliver a complete CanSat electrical subsystem (sensing, telemetry, logging and release actuation) within a two-month build cycle."
  contribution: "Owned the electrical subsystem: block diagram, three schematic revisions, and the 2-layer PCB layout."
  result: "A flight board integrating flight computer, sensors, telemetry, backup logging and four actuator channels. It became the foundation for the Shockwave avionics the following semester."
metrics:
  - { value: "3", label: "schematic revisions" }
  - { value: "2-layer", label: "PCB" }
  - { value: "4", label: "MOSFET-driven release channels" }
links:
  - { label: "CanSat 2024: Team Shockwave", href: "/projects/cansat-shockwave" }
gallery:
  - { src: "/images/hoomau-block.webp", alt: "Ho'omau electrical block diagram.", caption: "Electrical block diagram, V2." }
  - { src: "/images/hoomau-pcb-1.webp", alt: "Alternate render of the Ho'omau PCB.", caption: "Earlier layout iteration." }
---

## Overview

Ho'omau ("to persevere") was the Space Hardware Club's two-month CanSat, a fast-paced introduction to building flight hardware. I took on the electrical subsystem in my first semester at UAH.

## My role

**Electrical and PCB designer**, responsible for the block diagram, schematic and board layout.

## Technical approach

- **Flight computer and sensing.** A **Raspberry Pi Pico** with a **BMP390** barometer for altitude and an **LSM6DSOX** IMU for attitude.
- **Telemetry and logging.** **XBee** radio to the ground station, plus an **OpenLog** for on-board backup logging.
- **Actuation and power.** **Four MOSFET channels** driving release mechanisms and servos, an L7805 5 V regulator, and buzzers for recovery.
- **Iteration.** Three schematic revisions and a 2-layer layout in KiCad, each revision tightening the power tree, decoupling and connector assignments.

## Results

A complete electrical subsystem delivered within the two-month program.

## Lessons learned

Power-tree planning, disciplined decoupling and giving every connector a defined purpose carried directly into the seven-revision [Shockwave flight board](/projects/cansat-shockwave) the following semester.
