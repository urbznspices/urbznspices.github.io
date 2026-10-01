---
title: "CanSat 2024: Team Shockwave"
tagline: "Led a ten-person student team through the full design lifecycle of a reentry-probe CanSat, finishing 2nd internationally and as the top U.S. team."
role: "Team Lead · Electrical & Software"
org: "UAH Space Hardware Club · Team 2078"
category: "Flight hardware · Team leadership"
dates: "Oct 2023 – Jun 2024"
status: "Flown · 2nd International"
teamSize: "10 students, 3 subteams"
order: 3
featured: true
tools: ["KiCad", "Teensy 4.1 / C++", "XBee telemetry", "Autodesk Inventor", "Python ground station", "Trade studies", "Environmental testing"]
cover: "/images/shockwave-avionics.webp"
coverAlt: "Assembled Shockwave avionics plate: Teensy 4.1, XBee radio, BMP390 and BNO055 sensors, and voltage regulators on a laser-cut mounting ring."
summary:
  challenge: "Design a nose-cone probe that protects an egg through rocket ejection at up to 725 m, descends without tumbling on an aerobrake and then a parachute, and streams live telemetry to a team-built ground station."
  contribution: "Team lead from concept through post-flight review. Mission control officer on launch day. Designed the flight PCB and contributed to electrical and software subsystems."
  result: "2nd place internationally and top U.S. team (score 99.52). Review scores of 98.3% at PDR and 98.0% at CDR. Zero telemetry packets lost in flight."
metrics:
  - { value: "2nd", label: "internationally · top U.S. team" }
  - { value: "99.52", label: "final competition score" }
  - { value: "98%", label: "PDR and CDR review scores" }
  - { value: "0", label: "telemetry packets lost in flight" }
links:
  - { label: "Official 2024 results", href: "https://www.cansatcompetition.com/winners.html" }
gallery:
  - { src: "/images/shockwave-cad.webp", alt: "Cutaway CAD model of the Shockwave CanSat showing aerobrake, release servo, camera mount, egg container, PCB and sensors, and nose cone.", caption: "Flight configuration (Autodesk Inventor): aerobrake and release servo, camera mount, spring-suspended egg container, avionics and fiberglass nose cone." }
  - { src: "/images/shockwave-nosecone.webp", alt: "Looking into the fiberglass nose cone: three batteries, wiring and the pitot tube.", caption: "Inside the fiberglass nose cone: battery pack, wiring and the retractable pitot tube." }
  - { src: "/images/shockwave-altitude.webp", alt: "Flight altitude versus packet count, showing ascent, apogee near 577 m, aerobrake descent and parachute descent.", caption: "Flight altitude from the barometer telemetry: ascent, separation near apogee (577 m), aerobrake descent and parachute release at 105 m." }
  - { src: "/images/shockwave-block.webp", alt: "Shockwave electrical block diagram showing power, sensors, microcontroller and actuators.", caption: "Electrical block diagram, rev 2.6: power tree, sensors, telemetry and actuators." }
---

## Overview

The 2024 CanSat Competition, hosted by the American Astronautical Society, asked teams to simulate the **controlled atmospheric entry of a delicate payload**: a raw hen's egg. The probe flies as the rocket's nose cone and separates near apogee, nominally 725 m. It descends on a deployable aerobrake, then releases the aerobrake at 100 m and deploys a parachute for a descent under 5 m/s. It must never tumble, and it must stream telemetry to a ground station the team builds.

Shockwave was one of two UAH teams. The design used a **passively stable aerobrake** with spill holes, a **servo-actuated carbon-fiber pin release**, a spring-suspended **fiberglass egg container**, and a fiberglass nose cone carrying the batteries and a retractable pitot tube.

## My role

I was **Team Lead** from October of my first year through the June competition. The team had ten students in three subteams (mechanical, electrical and software), each with its own lead, and a faculty advisor. I also worked inside the electrical and software subteams and served as **Mission Control Officer** on launch day.

My responsibilities:

- **Schedule and reviews.** Kept the subteams converging on the competition's graded milestones: PDR, CDR, the environmental test report, flight, and the post-flight review. At the post-flight review I presented the introduction, concept of operations and lessons learned.
- **Coordination.** Ran the cross-subteam integration of mechanical, electrical and software work into one flight article.
- **Flight avionics.** Designed the flight PCB in KiCad.

## Technical approach

**Trade studies.** Each major selection (sensors, actuators, aerobrake architecture, and egg protection) was made against the mission requirements and documented in the PDR and CDR packages.

**Flight PCB, seven revisions.** The final board was 90 × 90 mm and 2-layer, with a **Teensy 4.1** flight computer, **BMP390** barometer, **BNO055** IMU, a motor driver for the release servo, **XBee** telemetry, and 3.3 V, 5 V and 12 V regulators. Each revision addressed an issue that integration or testing had exposed.

**Environmental testing.** Before flight we verified the integrated probe against four tests, each requiring live telemetry throughout:

| Test | Condition | Pass criteria |
|---|---|---|
| Drop | 61 cm drop on non-stretch cord | Mounts and parachute attachment survive; telemetry uninterrupted |
| Thermal | 55–60 °C for 2 hours | No structural or electronic damage; mechanisms actuate on command afterward |
| Vibration | 5 cycles on an orbital sander (~233 Hz) | No damage; accelerometer data collected throughout |
| Vacuum | Chamber evacuated to simulated apogee | Deployment sequence triggers correctly on re-pressurization |

**Flight software and ground station.** A state machine sequences ascent, separation, aerobrake descent, parachute release and landing (beacon on, telemetry off). A Python ground station plots every packet live and saves it to CSV.

## Results

Shockwave placed **2nd internationally and was the top-scoring U.S. team** with **99.52** (the winning team scored 99.86). Design reviews scored **98.3% at PDR** and **98.0% at CDR**.

Flight performance, from our post-flight review:

- **Met:** nose-cone integration, separation, aerobrake deployment, egg landed intact, mylar identification, audio beacon on landing, and telemetry for the full flight. The ground station received **every packet**.
- **Within tolerance:** the aerobrake released at **105 m**, inside the ±10 m window around the 100 m requirement, and the state machine transitioned exactly as designed.
- **Off-nominal:** the rocket reached only **577 m** against a predicted 675–720 m. One aerobrake arm broke on ejection, which compromised stabilization. Parachute descent measured about **11 m/s** against the 5 m/s target.

We documented each failure with a root cause and corrective action:

| Failure | Root cause | Corrective action |
|---|---|---|
| Aerobrake arm fractured at ejection | Mechanism exceeded its test life; manufacturing error; high ejection jerk | Thicker carbon-fiber rods; dedicated flight spares separate from test articles |
| Processor reset at parachute release; GPS lost | Release shock caused a brief Teensy restart, and the GPS needed a 4 s hot start | Shock testing with the integrated mechanical system, not electronics alone |
| IMU data ended at aerobrake deployment | Intermittent short in the BNO055 connection after the ejection charge | Further shock testing of the integrated harness |

## Lessons learned

- **The schedule is a design constraint.** Graded reviews forced decisions early, which was uncomfortable but kept two subteams from diverging.
- **Test the system, not just the parts.** Each subsystem passed its own tests. Both in-flight anomalies appeared only when the mechanical shock of deployment met the electronics. That is the main reason I now push for integrated testing as early as possible.
- **Make interfaces boring.** The most effective thing I did as lead was define clear interfaces between subteams, a lesson that led directly to the systems engineering work I do now.
