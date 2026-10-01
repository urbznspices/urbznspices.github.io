---
title: "CircuitPython Studio"
tagline: "A Chrome extension that gives students a code editor, serial console and live data plotter for microcontroller work, with no internet or software installs."
role: "Designer & Developer"
org: "UAH IDEAS Lab · INTREPID"
category: "Software · STEM education"
dates: "Aug 2026"
status: "Pilot"
order: 6
featured: false
tools: ["JavaScript", "Chrome Manifest V3", "Web Serial API", "File System Access API", "Canvas"]
cover: "/images/circuitpython-studio.webp"
coverAlt: "CircuitPython Studio editor with code panel, serial console and live plot."
summary:
  challenge: "Students had RP2040 boards but school Chromebooks block desktop editors, drivers and most web IDEs, leaving no reliable way to program boards or capture sensor data."
  contribution: "Designed and built the extension: editor and board sync, serial REPL, live plotter with CSV export, and the architecture documentation."
  result: "An offline Manifest V3 extension that makes zero network requests, writes code directly to the board, and records sensor data at up to 200 Hz for test analysis."
metrics:
  - { value: "0", label: "network requests" }
  - { value: "115200", label: "baud serial REPL" }
  - { value: "60 FPS", label: "live sensor plotter" }
  - { value: "50–200 Hz", label: "board data rates handled smoothly" }
---

## Overview

School Chromebooks block most of what a hardware class needs: desktop editors, USB drivers and many web IDEs. INTREPID students had RP2040 boards on their desks and no dependable way to program them or record their data.

## My role

I was the **sole designer and developer**, from requirements through architecture, implementation and documentation.

## Technical approach

CircuitPython Studio is a **Manifest V3 Chrome extension** that runs entirely offline under its own `chrome-extension://` origin, so web filters have no site to block.

- **Editor with direct board sync.** Students select the `CIRCUITPY` drive once through the File System Access API. After that, `Ctrl+S` writes `code.py` to the board, which reloads automatically.
- **Serial REPL.** A built-in terminal over the Web Serial API at 115200 baud, with clear handling of common faults such as a busy port.
- **Live plotter.** Streams numeric output to a 60 FPS canvas plot with RFC 4180 CSV export. Students use it to capture IMU and thermistor data during tests.
- **Templates.** Starter programs so students begin from working code.

**Architecture.** Plain JavaScript with no framework and no build step. An application controller coordinates four independent modules (serial, file manager, plotter and editor) through lightweight callbacks. The serial layer uses non-blocking stream readers with careful lock release, so unplugging a board mid-stream does not hang the app. Rendering is throttled with `requestAnimationFrame` to stay smooth at 50–200 Hz input. An architecture guide documents the design for future maintainers.

## Results

- Piloting with INTREPID classes for programming payload boards and capturing test data.
- No IT installation or network access required at partner schools.

## Lessons learned

The best classroom tool is the one IT never has to approve. Starting from the deployment constraint, rather than the feature list, determined nearly every architectural choice.
