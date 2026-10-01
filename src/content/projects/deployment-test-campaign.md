---
title: "Deployer Velocity Test Campaign"
tagline: "Characterized a CubeSat spring deployer and traced a 27% IMU velocity under-read to a structural fixture issue rather than a sensor or firmware fault."
role: "Test Lead & Analyst"
org: "UAH IDEAS Lab · INTREPID"
category: "Test & analysis"
dates: "Jul – Aug 2026"
status: "Report delivered"
order: 2
featured: true
tools: ["CircuitPython", "MPU-6050 @ 997 Hz", "Photogate", "Python / NumPy", "Signal analysis", "Structural dynamics"]
cover: "/images/deploy-diagnosis.webp"
coverAlt: "Four-panel structural diagnosis figure: pulse shape versus ideal spring, structural ring-down, pusher contact duration by run, and energy accounting."
summary:
  challenge: "Before high-school teams are graded on separation velocity, verify that the program's spring deployer and the IMU-based measurement method can both be trusted."
  contribution: "Planned and ran a seven-run instrumented campaign, performed the signal and structural analysis, and wrote the test report."
  result: "Deployer confirmed at 1.08 m/s against 1.067 m/s predicted. IMU error isolated to fixture impact. A firmware configuration error was caught and a go/no-go criterion defined for student use."
metrics:
  - { value: "n = 7", label: "instrumented deployments" }
  - { value: "73%", label: "of true velocity captured by the IMU" }
  - { value: "5.7×", label: "narrower pulse than spring theory allows" }
  - { value: "6.1%", label: "run-to-run spread (systematic, not noise)" }
gallery:
  - { src: "/images/deploy-traces.webp", alt: "Seven Z-axis acceleration traces with the ideal spring profile overlaid.", caption: "Z-axis acceleration for all seven runs against the ideal spring profile. Every run shows a sharp spike and ring-down instead of a smooth half-cosine." }
  - { src: "/images/deploy-aggregate.webp", alt: "Peak-aligned aggregate of seven runs with per-axis comparison.", caption: "Peak-aligned aggregate. Cross-axis (X) peaks reach 71% of Z but contribute only 6.6% of the impulse, a signature of impact." }
---

## Overview

INTREPID student teams deploy their CubeSat payloads from a spring-loaded, P-POD-style deployer, and separation velocity is one of their graded results. Before putting that measurement in front of students, the program needed evidence that the deployer performs as designed and that the flight-style IMU measurement is accurate.

## My role

I was the **test lead and analyst**. I configured the instrumentation, ran the campaign, reduced the data and wrote the report, including the structural diagnosis and the recommendations for the next campaign.

## Technical approach

**Test article and instrumentation.** A **1.17 kg** CubeSat mass model on a **1594 N/m** spring compressed **28.9 mm**, giving a predicted separation velocity of **1.067 m/s**. Each run was measured two ways:

- A **photogate** as the ground-truth exit velocity.
- An **MPU-6050 IMU** sampling at **997 Hz**, with acceleration integrated to velocity. This is the method students would use.

**Analysis.** The IMU consistently read low, so the analysis tested each candidate explanation against what the physics requires:

1. **Pulse shape.** For a spring, peak acceleration and pulse duration are coupled through ω = √(k/m). The measured pulse was **1.4× taller and 5.7× narrower** than theory at the same time, which a spring cannot produce.
2. **Cross-axis signature.** Cross-rail acceleration peaked at **71%** of the deployment axis but integrated to only **6.6%** of the impulse. A large, symmetric, self-cancelling response points to an impact rather than a push.
3. **Mount compliance (ruled out).** Ring-down analysis gave the electronics mount a natural frequency of **73.6 Hz** (ζ ≈ 0.066). At the push frequency the transmissibility is **1.03**, so the mount passes the push through essentially unchanged.
4. **Contact duration.** The pusher separated from the article at **49%** of the theoretical stroke time. The article was being struck and then ringing, not pushed smoothly.

## Results

| Quantity | Value |
|---|---|
| Photogate velocity (truth) | **1.08 m/s**, consistent with 1.067 m/s predicted |
| IMU-integrated velocity | **0.786 m/s**, 73% of truth |
| Run-to-run spread | **6.1%**, indicating a systematic error |

- **Conclusion:** the deployer delivers its stored energy as designed. The IMU discrepancy is a **fixture and structural interaction, not a sensor or firmware defect**.
- **Additional finding:** the logger configuration recorded the test mass as 0.45 kg instead of 1.17 kg, which had skewed every "expected" value in the file headers. The logger's built-in validation gates helped surface the discrepancy.
- **Recommendations:** pusher-interface changes, the configuration fix, and an explicit go/no-go criterion for when students may rely on IMU-derived velocity.

## Lessons learned

Write down what the physics requires before you interpret the data. Checking each hypothesis against a hard constraint, such as the spring relation, the impulse balance or the transmissibility, turned "the sensor is bad" into a specific mechanical fix. It also kept the team from changing firmware that was working correctly.
