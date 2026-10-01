---
title: "Hooke's Law & CubeSat Deployment Simulator"
tagline: "An offline physics lab for school Chromebooks in which students size a spring deployer to launch a CubeSat within velocity and load limits."
role: "Designer & Developer"
org: "UAH IDEAS Lab · INTREPID"
category: "Software · STEM education"
dates: "Aug 2026"
status: "In classrooms · v5.2"
order: 4
featured: true
tools: ["React 19", "TypeScript", "Vite", "Canvas 2D", "Verlet integration", "WCAG 2.1 AA"]
cover: "/images/hookes-sim.webp"
coverAlt: "Screenshot of the CubeSat deployment simulator showing a spring deployer and velocity readouts."
summary:
  challenge: "Teach the physics of spring deployment before students test real hardware, on budget Chromebooks with strict web filters and unreliable internet."
  contribution: "Designed and built the full application: physics engine, rendering, user interface, accessibility, and the teacher and IT documentation."
  result: "A single ~320 KB HTML file that runs offline at 60 FPS, includes an NGSS-aligned 45-minute lesson, and is in use with INTREPID partner schools."
metrics:
  - { value: "≈320 KB", label: "single-file build, fully offline" }
  - { value: "60 FPS", label: "canvas physics on budget Chromebooks" }
  - { value: "1U–6U", label: "calibrated CubeSat masses" }
  - { value: "45 min", label: "NGSS-aligned lesson plan" }
demo:
  src: "/demos/hookes-law/index.html"
  label: "Launch the simulator"
  height: 760
video: "/media/hookes-sim-mission.mp4"
links:
  - { label: "Deployer test campaign", href: "/projects/deployment-test-campaign" }
---

## Overview

INTREPID students need to understand why a spring deployer launches a CubeSat at the velocity it does before they test one. Their classrooms impose real constraints: budget Chromebooks, strict web filters, and sometimes no reliable internet. Most online physics simulations are blocked, too heavy to run, or unrelated to spacecraft.

## My role

I was the **sole designer and developer**. I covered requirements gathering with the program team, the physics model, the interface, testing, accessibility, and the teacher and IT guides.

## Technical approach

The application has three modes:

1. **Fundamentals lab.** Students compress a spring and see Hooke's Law directly: a live force–displacement plot whose slope is *k*, the ½kx² energy area, and energy bars showing potential energy converting to kinetic energy.
2. **CubeSat mission challenge.** A P-POD-style pusher with calibrated 1U, 3U and 6U masses. Students choose a spring constant and compression that achieve **1.2–1.8 m/s** separation while keeping peak load **≤ 15 g**. A virtual photogate times the exit, and runs export to CSV for comparison with hardware tests.
3. **Theory.** A guided derivation from Hooke's 1678 result to modern deployment dynamics.

Key engineering decisions:

- **Verified physics.** Motion uses a Verlet integrator, checked by an automated test suite against closed-form spring solutions.
- **Offline by design.** The app compiles to **one ~320 KB HTML file** with no CDN or network requests, so teachers can run it from a USB drive.
- **Performance on low-end hardware.** A decoupled canvas renderer holds 60 FPS at 1366 × 768 without garbage-collection stutter.
- **Accessibility.** ARIA semantics, screen-reader announcements and full keyboard control, targeting WCAG 2.1 AA.
- **Documentation.** A 45-minute teacher guide aligned to NGSS HS-PS2-1, HS-PS3-1, HS-PS3-2 and HS-ETS1-2, plus an IT deployment guide.

## Results

- Deployed with INTREPID partner schools as part of the program's deployment unit.
- Links classroom prediction to [hardware measurement](/projects/deployment-test-campaign). Students predict their launch velocity in the simulator, measure it on the real deployer, and explain the difference.

## Lessons learned

Constraints should drive the architecture. Designing for the most restrictive classroom first (offline, filtered and low-powered) produced a tool that works everywhere, and it avoided an IT approval process for each school.
