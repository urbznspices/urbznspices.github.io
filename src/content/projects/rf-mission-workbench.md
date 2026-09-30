---
title: "RF Mission Workbench"
tagline: "A mission-planning tool for ChargerSat-2: propagate the orbit, find every ground-station pass, and schedule the downlinks that fit the power budget."
role: "Designer & Developer"
org: "UAH IDEAS Lab · ChargerSat-2"
dates: "Sep 2026"
status: "Internal tool · Phase A"
order: 1.5
featured: true
draft: true
tools: ["Python 3.12", "NumPy / SciPy", "MILP optimization", "Starlette API", "Svelte 5", "Three.js"]
cover: "/images/rf-workbench.webp"
coverAlt: "RF Mission Workbench showing a 3D globe with a satellite ground track, five ground stations and a link-margin panel."
metrics:
  - { value: "29", label: "ground stations modeled" }
  - { value: "MILP", label: "downlink scheduler" }
  - { value: "124", label: "automated front-end tests" }
  - { value: "3D", label: "interactive globe replay" }
demo:
  src: "/demos/rf-workbench/index.html"
  label: "Open the workbench"
  height: 780
---

<!-- DRAFT until PI sign-off. While draft, astro.config.mjs also strips /demos/rf-workbench from the build.
     To publish: set `draft: false`. -->

## Why I built it

Link budgets in a spreadsheet tell you whether a link *can* close. They don't tell you how many minutes a day you actually get, whether those passes land in eclipse when the battery is low, or which stations to buy time on. For ChargerSat-2's communications trades I needed answers at the level of the whole mission, and I needed them fast enough to rerun during a review.

## What it does

1. **Orbit and geometry.** Propagates the spacecraft and computes access windows, elevation, range and link margin against a registry of **29 ground stations** built from public sources.
2. **Power-aware.** Models eclipse, solar input and spacecraft mode loads, so a pass only counts if the power budget can support transmitting during it.
3. **Optimal scheduling.** Uses a **mixed-integer linear program** to choose which passes to use, maximizing data downlinked within the power, duty-cycle and station constraints.
4. **Seeing it.** A Svelte and Three.js front end replays the scenario on a 3D globe, with a contact Gantt chart, sky plot, link-margin waterfall, power flow, and an auto-generated mission-day report.

## Architecture

A Python engine (NumPy/SciPy) sits behind a Starlette JSON API and feeds a Vite/Svelte client that does no physics itself: every number on screen comes from the engine. That separation made it straightforward to test. The web client alone has 124 automated tests.

## The demo on this site

GitHub Pages can't run the Python engine, so the embedded version is a **read-only replay** of a representative, generic 12U scenario that was precomputed with the real engine. No program-internal hardware data is included.
