---
title: "CircuitPython Studio"
tagline: "A Chrome extension that gives students a code editor, serial console and live plotter, with no internet or installs required."
role: "Designer & Developer"
org: "UAH IDEAS Lab · INTREPID"
dates: "Aug 2026"
status: "Pilot"
order: 6
featured: false
tools: ["JavaScript", "Chrome Manifest V3", "Web Serial API", "File System Access API", "Canvas"]
cover: "/images/circuitpython-studio.webp"
coverAlt: "CircuitPython Studio editor with code panel, serial console and live plot."
metrics:
  - { value: "0", label: "network requests" }
  - { value: "115200", label: "baud serial REPL" }
  - { value: "60 FPS", label: "live sensor plotter" }
  - { value: "Ctrl+S", label: "save straight to the board" }
---

## The problem

School Chromebooks block most of what a hardware class needs. There are no desktop editors, no drivers, and web IDEs often get stopped by content filters. Our students had RP2040 boards on their desks and no good way to program them or see their data.

## The solution

**CircuitPython Studio** is a Manifest V3 Chrome extension that runs entirely offline under its own `chrome-extension://` origin. That means filters that block websites have nothing to block.

- **Editor with direct board sync.** Students select the `CIRCUITPY` drive once through the File System Access API. After that, `Ctrl+S` writes `code.py` straight to the board and it reloads.
- **Serial REPL.** A built-in terminal over the Web Serial API at 115200 baud, with friendly error handling for "port busy" and similar problems.
- **Live plotter.** Streams numeric sensor output to a 60 FPS canvas plot and exports it to CSV, which is how students capture IMU and thermistor data during tests.
- **Templates.** Built-in starter code so students begin from working examples.

## Architecture

It is plain JavaScript with no framework and no build step. An app controller coordinates four separate modules (serial, file manager, plotter and code editor) through lightweight event callbacks. The serial layer uses non-blocking stream readers with careful lock release, so unplugging a board mid-stream doesn't deadlock the app. The plotter throttles rendering with `requestAnimationFrame` to stay smooth when boards output data at 50–200 Hz, and CSV export follows RFC 4180. All of it is documented in an architecture guide so the next maintainer can extend it safely.

## Takeaway

The best tool for a classroom is the one IT doesn't have to approve. I designed backwards from the constraint, not from the feature list.
