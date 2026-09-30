---
title: "CanSat 2024 · Team Shockwave"
tagline: "Leading ten students from a blank page to a 2nd-place international finish, as a freshman."
role: "Team Lead · Electrical & Software"
org: "UAH Space Hardware Club · Team 2078"
dates: "Oct 2023 – Jun 2024"
status: "Flown · 2nd International"
order: 3
featured: true
tools: ["KiCad", "Teensy 4.1 / C++", "XBee telemetry", "Autodesk Inventor", "Python ground station", "Trade studies"]
cover: "/images/shockwave-pcb-photo.webp"
coverAlt: "Shockwave flight PCB on a digital scale."
metrics:
  - { value: "2nd", label: "internationally · top U.S. team" }
  - { value: "99.52", label: "competition score" }
  - { value: "10", label: "engineers led" }
  - { value: "7", label: "flight PCB revisions" }
links:
  - { label: "Official 2024 results", href: "https://www.cansatcompetition.com/winners.html" }
gallery:
  - { src: "/images/shockwave-block.webp", alt: "Shockwave electrical block diagram showing power, sensors, microcontroller and actuators.", caption: "Electrical block diagram, rev 2.6: power tree, sensors, telemetry and actuators." }
  - { src: "/images/shockwave-poster.webp", alt: "Shockwave E-Week Engineering Showcase poster.", caption: "UAH E-Week Engineering Showcase poster, 2024." }
---

## The challenge

The 2024 CanSat Competition, hosted by the American Astronautical Society, asked teams to simulate a **controlled atmospheric reentry of a delicate payload**. The payload was a raw egg. Our probe rode up as the rocket's nose cone to **725 m**, separated, and descended on a deployable aerobrake. At 100 m it released the aerobrake and deployed a parachute to come down at under 5 m/s. The probe was **not allowed to tumble** at any point, and it had to stream live telemetry to a ground station we built ourselves.

## My role

I led **Team 2078 "Shockwave"**, ten engineering students across mechanical, electrical and software subteams, from October of my freshman year through the June competition. I also worked hands-on in the electrical and software subteams and served as mission control during flight.

Leading meant keeping two subteams moving in parallel against a fixed schedule of reviews: **PDR, CDR, environmental testing, flight, and post-flight review**. Each of those is a real document package that gets graded.

## Engineering

- **Trade studies.** We selected sensors, actuators and the mechanical architecture against the mission requirements and documented the rationale for each choice, rather than going with whatever part was familiar.
- **Flight PCB, seven revisions.** I designed the avionics board in KiCad and iterated it **seven times**. The final board was 90 × 90 mm and 2-layer, with a Teensy 4.1, a BMP390 barometer, a BNO055 IMU, a motor driver for the aerobrake release, XBee telemetry, and three regulators (3.3 V, 5 V and 12 V). Each revision fixed something that testing had exposed.
- **Environmental testing.** We ran drop, thermal, vibration and vacuum tests before flight so the competition wasn't the first time the hardware saw a hostile environment.

## Result

Shockwave placed **2nd internationally and was the top-scoring U.S. team**, with a score of **99.52**. The winning team scored 99.86.

## What I learned

Being team lead as a freshman taught me that **the schedule is a design constraint**. It also taught me that the most useful thing a lead can do is make the interface between two subteams boring and well-defined. That lesson led directly to the systems engineering I do now.
