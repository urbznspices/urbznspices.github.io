---
title: "ChargerSat-2"
tagline: "Systems and communications engineering for a 12U CubeSat that will demonstrate onboard autonomous fault detection."
role: "Lead Systems Engineer & Communications Lead"
org: "UAH IDEAS Lab · i³ Lab"
category: "Spacecraft systems · RF communications"
dates: "Feb 2026 – Present"
status: "Phase A · MDR/SRR"
teamSize: "8 subsystem teams"
order: 1
featured: true
tools: ["NASA SE (SP-2016-6105)", "Link budgets", "Requirements & VCRM", "ICDs", "Python", "Risk management"]
cover: "/images/chargersat-cover.svg"
coverAlt: "Illustration of a CubeSat in low Earth orbit with downlink beams to ground stations."
hero: "/images/chargersat-team.webp"
heroAlt: "Arel Urbanozo with members of the ChargerSat-2 team at the Space & Missile Defense (SMD) Symposium, Huntsville, August 2026."
summary:
  challenge: "Take a university 12U CubeSat through NASA Class D Phase A: a reusable bus plus an onboard AI that monitors spacecraft telemetry for faults, studied for LEO, cislunar and heliocentric missions."
  contribution: "Lead Systems Engineer for interfaces, requirements and verification across eight subsystem teams. Communications Lead for the full RF link, from link budget to licensing strategy."
  result: "Baselined a 50 Mbps X-band LEO downlink at +4.04 dB margin. Identified a frequency-band constraint that re-planned the cislunar architecture. Authored the Universal Payload ICD."
metrics:
  - { value: "12U", label: "CubeSat bus, NASA Class D" }
  - { value: "8", label: "subsystem teams coordinated" }
  - { value: "+4.04 dB", label: "LEO X-band link margin at 50 Mbps" }
  - { value: "3", label: "mission regimes traded: LEO, cislunar, heliocentric" }
---

## Overview

ChargerSat-2 is a 12U CubeSat in development at UAH's IDEAS Lab and i³ Lab. It has two objectives:

1. Provide a **reusable spacecraft bus** that future university missions can build on.
2. Demonstrate an **onboard AI model** that monitors the spacecraft's own telemetry for faults.

The program follows NASA Class D practice for a technology demonstration: formal milestone reviews, a controlled requirements baseline, configuration management and an actively managed risk register. It is in **Phase A**, where the architecture is still open and trade studies drive the design.

## My role

I hold two positions and report to the Chief Engineer and Mission Manager.

- **Lead Systems Engineer.** I own the interfaces between subsystems. I decompose mission objectives into verifiable requirements and maintain the verification matrix. I also keep the C&DH, power, structures, thermal, harness, payload-AI and RF teams working from one consistent set of numbers.
- **Communications Lead.** I own the RF link end to end: telemetry and command, the high-rate payload downlink, link budgets, ground-station planning and spectrum licensing strategy.

## Technical approach

### Communications architecture and link analysis

The mission studies three regimes: a primary **500 km LEO** orbit, and **cislunar** and **heliocentric** variants. I wrote the communications plan and the link-margin analysis covering all three. It evaluates each candidate data rate against a 3 dB margin requirement at a 5° elevation mask.

| Case | Result | Decision |
|---|---|---|
| LEO X-band, 50 Mbps | **+4.04 dB** | Baselined |
| LEO X-band, 100 Mbps | +2.03 dB | Rejected: fails 3 dB requirement |
| Deep space X-band payload link | Does not close | Not viable for deep-space variants |
| Deep space S-band telemetry, low rate | Closes | Carried forward for deep-space variants |

The 100 Mbps option was attractive on paper. The analysis kept it from being baselined before it became a commitment.

### Frequency allocation finding

While reconciling the radio hardware against NASA's Deep Space Network, I found that the baselined X-band radio **cannot tune into the 8400–8450 MHz deep-space allocation** the DSN uses. An accessory that had been treated as the fix only protects the DSN from interference. It does not move the radio into that band.

The consequences:

- The cislunar architecture was re-planned around **S-band** telemetry or commercial lunar ground networks, rather than assuming DSN X-band access.
- I set **FCC Part 5 Experimental licensing** as the primary regulatory path, with a documented fallback, and captured it in a formal regulatory baseline.
- Both issues entered the risk register with owners, mitigation plans and closure gates tied to the milestone reviews.

### Interfaces and documentation

- **Universal Payload ICD.** Defines the envelope, mass, power and data interfaces any future payload must meet: roughly a 6.5U bay, ≤ 8.5 kg, ≤ 42 W orbit-average power, and CAN/CSP and SpaceWire data interfaces.
- **Phase A document set.** A controlled set comprising the SEMP, communications plan, regulatory baseline, Class D risk register and configuration management plan. Automated checks keep requirements traceability consistent across documents.

## Results

- A baselined LEO downlink architecture with quantified margin, and a clear rationale for rejecting the higher-rate option.
- An early, documented resolution of a frequency-allocation issue that would otherwise have surfaced much later in the design.
- A payload interface standard and controlled document baseline supporting the program's Phase A MDR/SRR gate review.

## Lessons learned

Systems engineering is largely about **surfacing disagreements early**. A link budget, an ICD or a risk entry is valuable because it gives two teams one number to work from, and it moves the conversation forward from integration to Phase A, when changes are still cheap.

*This page is a public summary. Detailed analyses, vendor data and internal documents belong to the ChargerSat-2 program and aren't reproduced here.*
