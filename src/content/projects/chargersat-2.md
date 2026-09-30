---
title: "ChargerSat-2"
tagline: "Leading systems and communications engineering for a 12U CubeSat built to demonstrate autonomous AI in orbit."
role: "Lead Systems Engineer & Communications Lead"
org: "UAH IDEAS Lab · i³ Lab"
dates: "Feb 2026 – Present"
status: "Phase A · MDR/SRR"
order: 1
featured: true
tools: ["NASA SE (SP-2016-6105)", "Link budgets", "Requirements & VCRM", "ICDs", "Python", "Risk management"]
cover: "/images/chargersat-cover.svg"
coverAlt: "Illustration of a CubeSat in low Earth orbit with downlink beams to ground stations."
metrics:
  - { value: "12U", label: "CubeSat bus, NASA Class D" }
  - { value: "8", label: "subsystem teams coordinated" }
  - { value: "+4.04 dB", label: "LEO X-band link margin at 50 Mbps" }
  - { value: "3", label: "mission regimes traded: LEO, cislunar, heliocentric" }
links:
  - { label: "RF Mission Workbench write-up", href: "/projects/rf-mission-workbench" }
---

## The mission

ChargerSat-2 is a 12U CubeSat under development at UAH's IDEAS Lab and i³ Lab. It has two jobs: to be a reusable spacecraft bus that later university missions can build on, and to demonstrate an AI model running on board that watches the spacecraft's own telemetry for faults. The program follows NASA Class D practice, which means it has real milestone reviews, a controlled requirements baseline, and a risk register that the Chief Engineer actually reads.

We are in **Phase A**, the stage where the architecture is still flexible and a trade study can still change the design. That makes it the most useful time to be the person who connects everything.

## My role

I hold two roles on the project.

- **Lead Systems Engineer.** I own the interfaces *between* subsystems. I break mission goals down into requirements that each team can verify, and I keep the verification matrix honest. In practice I spend a lot of time making sure the C&DH, power, structures, thermal, payload-AI and RF teams all agree on the same numbers.
- **Communications Lead.** I own the radio link from end to end: telemetry and command, the high-rate payload downlink, link budgets, ground-station planning, and the spectrum-licensing strategy.

## Closing the link

The mission is studying three regimes: a primary **500 km LEO** orbit, and more ambitious **cislunar** and **heliocentric** cases. I built the communications plan and link-margin analysis that covers all three.

For LEO, a **50 Mbps X-band downlink closes with +4.04 dB of margin** at a 5° elevation mask. That comfortably clears our 3 dB requirement. A tempting 100 Mbps option closed at only +2.03 dB, so the analysis showed it should *not* be baselined, even though it looked attractive on a slide. In deep space the X-band payload link doesn't close at all, while a low-rate S-band telemetry link does. That result shaped what the deep-space variants of the mission can realistically promise.

> The most valuable thing I've found so far wasn't in a spreadsheet. It was one line in a radio datasheet.

## The finding that reshaped the plan

While reconciling the radio hardware against NASA's Deep Space Network, I found that our baselined X-band radio **physically cannot tune into the 8400–8450 MHz deep-space band** that the DSN listens on. An accessory filter kit that had been treated as the fix only protects the DSN from interference. It doesn't move the radio into that band.

That discovery had consequences across the project:

- The cislunar architecture was re-planned around **S-band** for deep-space telemetry, or around commercial lunar ground networks, rather than assuming DSN X-band access.
- I set **FCC Part 5 Experimental licensing** as the primary regulatory path, with a documented fallback. I wrote it up as a formal regulatory baseline and added it to the risk register with owners and closure gates.
- Both issues became tracked risks. Each started red and has a mitigation plan that brings it to green by the milestone reviews.

## Other work I own

- **Universal Payload ICD.** Defines the envelope, mass, power and data interfaces that any future payload has to fit: roughly a 6.5U bay, ≤ 8.5 kg, and ≤ 42 W orbit-average.
- **Document control for Phase A.** A controlled set of documents (SEMP, communications plan, regulatory baseline, Class D risk register, configuration management plan) with automated scripts that check requirements traceability, so the documents stay consistent with each other.
- **The [RF Mission Workbench](/projects/rf-mission-workbench).** A tool I built to make communications trades quicker to run and easier to show others.

## What I'm learning

Systems engineering is mostly about **making disagreements visible early**. A link budget, an ICD or a risk entry is useful because it gives two teams one number to argue about, and it gets them arguing now instead of at integration.

*This page is a public summary. Detailed analyses, vendor data and internal documents belong to the ChargerSat-2 program and aren't reproduced here.*
