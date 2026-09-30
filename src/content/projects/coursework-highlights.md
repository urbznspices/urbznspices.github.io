---
title: "Mission Analysis Coursework"
tagline: "Interplanetary transfer windows, multi-flyby trajectories and aircraft performance: the analysis behind the hardware."
role: "Student"
org: "UAH Mechanical & Aerospace Engineering"
dates: "2024 – 2026"
status: "Complete"
order: 9
featured: false
tools: ["MATLAB", "Python", "SciPy", "matplotlib", "Lambert solvers"]
cover: "/images/jupiter-trajectory.webp"
coverAlt: "3D plot of an optimized Earth–Jupiter trajectory with Mars flyby, deep-space maneuver and Earth flyby legs."
metrics:
  - { value: "4-leg", label: "Earth→Jupiter trajectory with flybys" }
  - { value: "2", label: "porkchop searches (Mars, Jupiter)" }
links:
  - { label: "Aircraft sizing code on GitHub", href: "https://github.com/urbznspices/Aero" }
gallery:
  - { src: "/images/porkchop-mars.webp", alt: "Earth to Mars porkchop plot of departure and arrival dates with C3 contours.", caption: "Earth→Mars porkchop plot: launch-energy contours across departure and arrival dates." }
  - { src: "/images/aero-roc.webp", alt: "Rate of climb versus altitude plot.", caption: "Aircraft performance: rate of climb versus altitude." }
---

## Astrodynamics (MAE 469)

- **Porkchop plots.** I solved Lambert's problem across grids of departure and arrival dates for **Earth→Mars** and **Earth→Jupiter** to map launch energy and find the low-cost windows.
- **Optimized Jupiter trajectory.** A four-leg mission (Earth → Mars flyby → deep-space maneuver → Earth flyby → Jupiter) propagated and visualized in 3D. It's a hands-on lesson in how gravity assists turn an impossible Δv budget into a feasible one.

## Aircraft sizing & performance (MAE 200 / 211)

Python tools for conceptual sizing and performance on two real routes, **Denver–Huntsville** and **Honolulu–Boston**: the standard atmosphere model, thrust and drag curves, rate of climb, and acceleration. [Code on GitHub →](https://github.com/urbznspices/Aero)

## Now (Fall 2026)

Mission Design capstone (Radiation Test Bed integrated product team), Systems & Controls, and graduate-level **Rocket Propulsion** and **Aircraft Stability & Control**.
