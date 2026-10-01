---
title: "Mission Analysis Coursework"
tagline: "Interplanetary transfer-window analysis, a multi-flyby Jupiter trajectory, and conceptual aircraft sizing from UAH aerospace coursework."
role: "Student"
org: "UAH Mechanical & Aerospace Engineering"
category: "Astrodynamics · Analysis"
dates: "2024 – 2026"
status: "Complete"
order: 9
featured: false
tools: ["MATLAB", "Python", "SciPy", "matplotlib", "Lambert solvers"]
cover: "/images/jupiter-trajectory.webp"
coverAlt: "3D plot of an optimized Earth–Jupiter trajectory with Mars flyby, deep-space maneuver and Earth flyby legs."
summary:
  challenge: "Apply orbital mechanics and flight performance theory to realistic mission and vehicle design problems."
  contribution: "Wrote the solvers and analysis tools in MATLAB and Python and produced the visualizations."
  result: "Launch-energy maps for Mars and Jupiter transfers, a four-leg gravity-assist trajectory, and sizing tools for two commercial routes."
metrics:
  - { value: "4-leg", label: "Earth→Jupiter trajectory with flybys" }
  - { value: "2", label: "porkchop searches (Mars, Jupiter)" }
links:
  - { label: "Aircraft sizing code on GitHub", href: "https://github.com/urbznspices/Aero" }
gallery:
  - { src: "/images/porkchop-mars.webp", alt: "Earth to Mars porkchop plot of departure and arrival dates with C3 contours.", caption: "Earth→Mars porkchop plot: launch-energy contours across departure and arrival dates." }
  - { src: "/images/aero-roc.webp", alt: "Rate of climb versus altitude plot.", caption: "Aircraft performance: rate of climb versus altitude." }
---

## Overview

These are selected analysis projects from UAH aerospace coursework that complement my hardware and systems work.

## Technical approach

### Astrodynamics (MAE 469)

- **Porkchop plots.** Solved Lambert's problem across grids of departure and arrival dates for **Earth→Mars** and **Earth→Jupiter** to map launch energy and identify low-cost windows.
- **Gravity-assist trajectory.** A four-leg mission (Earth → Mars flyby → deep-space maneuver → Earth flyby → Jupiter), propagated and visualized in 3D. It shows how flybys turn an infeasible Δv budget into a feasible one.

### Aircraft sizing and performance (MAE 200 / 211)

Python tools for conceptual sizing and performance on two routes, **Denver–Huntsville** and **Honolulu–Boston**: a standard atmosphere model, thrust and drag curves, rate of climb, and acceleration. [Code on GitHub →](https://github.com/urbznspices/Aero)

## Current coursework (Fall 2026)

- Mission Design capstone (Radiation Test Bed integrated product team)
- Systems & Controls
- Graduate-level **Rocket Propulsion**
- Graduate-level **Aircraft Stability & Control**
