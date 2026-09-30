---
title: "Deployer Velocity Test Campaign"
tagline: "The IMU said 0.79 m/s. The photogate said 1.08. Finding out why meant thinking about structures, not software."
role: "Test Lead & Analyst"
org: "UAH IDEAS Lab · INTREPID"
dates: "Jul – Aug 2026"
status: "Report delivered"
order: 2
featured: true
tools: ["CircuitPython", "MPU-6050 @ 997 Hz", "Photogate", "Python / NumPy", "Signal analysis"]
cover: "/images/deploy-diagnosis.webp"
coverAlt: "Four-panel structural diagnosis figure: pulse shape versus ideal spring, structural ring-down, pusher contact duration by run, and energy accounting."
metrics:
  - { value: "n = 7", label: "instrumented deployments" }
  - { value: "73%", label: "velocity the IMU actually captured" }
  - { value: "5.7×", label: "narrower pulse than spring theory allows" }
  - { value: "6.1%", label: "run-to-run spread (systematic, not noise)" }
gallery:
  - { src: "/images/deploy-traces.webp", alt: "Seven Z-axis acceleration traces with the ideal spring profile overlaid.", caption: "Figure 1: every run shows a sharp spike and ring-down, not the smooth half-cosine a spring produces." }
  - { src: "/images/deploy-aggregate.webp", alt: "Peak-aligned aggregate of seven runs with per-axis comparison.", caption: "Figure 2: the sideways X-axis peaks reach 71% of Z, yet contribute only 6.6% of the impulse. That signature points to an impact." }
---

## The setup

INTREPID students deploy their CubeSat payloads from a spring-loaded, P-POD-style deployer, and they are graded on the separation velocity. Before putting that in front of high-schoolers, we needed to know the deployer, and the way we measured it, could be trusted.

The test article was a **1.17 kg** CubeSat mass model on a **1594 N/m** spring compressed **28.9 mm**. The expected separation velocity was **1.067 m/s**. Each run was measured two ways: a **photogate**, which gives ground truth, and the flight-style **MPU-6050 IMU** sampling at **997 Hz**, which integrates acceleration to get velocity.

## What we saw

The deployer itself was fine. The photogate read **1.08 m/s**, so the spring was delivering essentially all of its stored energy.

The IMU consistently reported only **0.786 m/s**, which is **73%** of the true value, with a tight **6.1%** spread across seven runs. A spread that small meant this wasn't noise. Something was systematically wrong.

## Detective work

The easy explanations were "bad sensor" or "bad firmware." The data didn't support either one.

1. **The pulse was the wrong shape.** A spring's peak acceleration and pulse length are locked together by ω = √(k/m). The measured pulse was **1.4× taller and 5.7× narrower** than theory at the same time. A spring can't do both, so the IMU wasn't recording a spring.
2. **The sideways axis gave it away.** Cross-rail acceleration peaked at **71%** of the deployment axis but integrated to only **6.6%** of the impulse. A large, symmetric kick that cancels out to almost nothing is the signature of an *impact*.
3. **I ruled out the obvious suspect.** A compliant electronics mount was the leading hypothesis. Ring-down analysis gave a mount natural frequency of **73.6 Hz** (ζ ≈ 0.066). At the push frequency the transmissibility is **1.03**, meaning the mount passes the push through almost perfectly. So the mount wasn't filtering the signal.
4. **I found the real mechanism.** Measuring how long the pusher actually stayed in contact showed it separated at **49%** of the required stroke time. The article was being *struck* and then ringing, instead of being pushed smoothly.

Along the way, the analysis also caught a **firmware configuration error**: the test mass was logged as 0.45 kg instead of 1.17 kg. That error had silently skewed every "expected" value in the file headers.

## Outcome

The report's conclusion was that this is a **fixture and structural issue, not a firmware defect**. It also noted that the validation gates built into the logger were what surfaced the discrepancy in the first place. The fix list for the next campaign covers the pusher interface and the configuration error, and it includes a clear go/no-go for letting students rely on IMU-derived velocity.

## What I learned

Good test engineering is mostly about **disbelieving your first explanation**. Writing down what the physics *requires*, and then checking where the data breaks it, turned "the sensor is bad" into a specific mechanical fix.
