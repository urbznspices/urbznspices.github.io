---
title: "Hooke's Law & CubeSat Deployment Simulator"
tagline: "A physics lab that runs on any school Chromebook, offline, where students tune a spring to launch a CubeSat safely."
role: "Designer & Developer"
org: "UAH IDEAS Lab · INTREPID"
dates: "Aug 2026"
status: "In classrooms · v5.2"
order: 4
featured: true
tools: ["React 19", "TypeScript", "Vite", "Canvas 2D", "Verlet integration", "WCAG 2.1 AA"]
cover: "/images/hookes-sim.webp"
coverAlt: "Screenshot of the CubeSat deployment simulator showing a spring deployer and velocity readouts."
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
---

## The problem

INTREPID students need to understand **why** a spring deployer launches a CubeSat at the speed it does before they can test one. Their classrooms also impose real constraints: budget Chromebooks, strict web filters, and sometimes no reliable internet connection. Most physics simulations online are blocked, too heavy to run, or not about spacecraft.

## What I built

A self-contained web app with three modes:

1. **Fundamentals lab.** Students drag a spring and watch Hooke's Law come alive: a live force–displacement plot whose slope is *k*, a shaded energy triangle for ½kx², and energy bars showing potential energy trading into kinetic energy.
2. **CubeSat mission challenge.** A P-POD-style pusher sled with calibrated 1U, 3U and 6U masses. Students have to choose a spring constant and compression that give **1.2–1.8 m/s** separation while keeping the peak load **≤ 15 g**. A virtual photogate times the exit, and runs can be exported to CSV so students can compare them with their own hardware tests.
3. **Theory.** A guided derivation from Hooke's 1678 result to modern deployment dynamics.

## Engineering decisions

- **Physics you can trust.** The motion uses a Verlet integrator backed by an automated physics test suite, so what students see matches closed-form spring theory.
- **Offline by design.** The whole app compiles to **one ~320 KB HTML file** with no CDN or network calls. Teachers can double-click it from a USB stick.
- **Runs on cheap hardware.** A decoupled canvas renderer holds 60 FPS on 1366×768 Chromebooks without garbage-collection stutter.
- **Accessible.** Full ARIA semantics, screen-reader announcements and keyboard controls, targeting WCAG 2.1 AA.
- **Documented for teachers.** It ships with a 45-minute teacher guide aligned to NGSS HS-PS2-1, HS-PS3-1, HS-PS3-2 and HS-ETS1-2, plus an IT deployment guide.

## Why it matters

The simulator links the classroom to the [real deployer test campaign](/projects/deployment-test-campaign). Students predict their launch velocity here, then measure it on hardware, and then have to explain the gap between the two. That is how engineering actually works.
