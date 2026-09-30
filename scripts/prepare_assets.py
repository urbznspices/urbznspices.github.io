"""Copy and resize portfolio images from their original locations into public/images.

Run from the Portfolio folder:  python scripts/prepare_assets.py
Needs Pillow + PyMuPDF (pip install pillow pymupdf). Sources are read-only.
KiCad renders are produced with kicad-cli first (see README).
"""
import os, shutil, sys
from PIL import Image, ImageOps

HOME = os.path.expanduser("~")
DL = os.path.join(HOME, "Downloads")
DOCS = os.path.join(HOME, "Documents")
PD = os.path.join(DOCS, "Professional Development")
RENDERS = sys.argv[1] if len(sys.argv) > 1 else os.path.join(PD, "Portfolio", "scripts", "renders")
OUT = os.path.join(PD, "Portfolio", "public", "images")
MEDIA = os.path.join(PD, "Portfolio", "public", "media")

IMAGES = {
    # name: (source, max_px)
    "headshot": (os.path.join(PD, "Headshots_Photos", "August ProShot.jpg"), 900),
    "intrepid-pcb-iso": (os.path.join(RENDERS, "intrepid_iso.png"), 1600),
    "intrepid-pcb-top": (os.path.join(RENDERS, "intrepid_top.png"), 1200),
    "pmi-pcb-iso": (os.path.join(RENDERS, "pmi_iso.png"), 1600),
    "deploy-traces": (os.path.join(RENDERS, "deploy_p3_0.png"), 1800),
    "deploy-aggregate": (os.path.join(RENDERS, "deploy_p4_0.png"), 1800),
    "deploy-diagnosis": (os.path.join(RENDERS, "deploy_p5_0.png"), 1800),
    "shockwave-poster": (os.path.join(DL, "Active Projects", "CanSat 2024", "Shockwave EWeek Showcase Poster.png"), 1400),
    "shockwave-pcb-photo": (os.path.join(DL, "Active Projects", "CanSat 2024", "Shockwave_EE_Photos", "Shockwave EE Photos", "PCB Scale Photo.png"), 1100),
    "shockwave-block": (os.path.join(DL, "Active Projects", "CanSat 2024", "Shockwave_EE_Photos", "Shockwave EE Photos", "Shockwave Block Diagram 2.6.png"), 1800),
    "hoomau-pcb-1": (os.path.join(DL, "Electronics & PCB", "PCB 3d 1.jpg"), 900),
    "hoomau-pcb-2": (os.path.join(DL, "Electronics & PCB", "PCB 3d 2.jpg"), 900),
    "hoomau-block": (os.path.join(DL, "Electronics & PCB", "Ho'omau Block Diagram V2.drawio1024_1.jpg"), 1200),
    "porkchop-mars": (os.path.join(DOCS, "Coursework", "Archive", "Astrodyanmics", "Astrodyanmics", "Earth_Mars_Porkchop.png"), 1200),
    "jupiter-trajectory": (os.path.join(DOCS, "Coursework", "Archive", "Astrodyanmics", "Astrodyanmics", "Mission Trajectory.png"), 1200),
    "hookes-sim": (os.path.join(RENDERS, "hookes_sim.png"), 1440),
    "circuitpython-studio": (os.path.join(RENDERS, "circuitpython_studio.png"), 1440),
    "rf-workbench": (os.path.join(RENDERS, "rf_workbench.png"), 1600),
    "aero-roc": (os.path.join(DOCS, "Coursework", "Archive", "Aero", "Aero", "RC v Alt.png"), 1000),
}

MEDIA_FILES = {
    "hookes-sim-mission.mp4": os.path.join(DL, "Active Projects", "INTREPID", "INTREPID CubeSat Launch & Hooke's Law Simulator _ UAH IDEAS Lab - Google Chrome 2026-08-13 10-58-39 (online-video-cutter.com).mp4"),
    "hookes-sim-lab.mp4": os.path.join(DL, "Active Projects", "INTREPID", "INTREPID CubeSat Launch & Hooke's Law Simulator _ UAH IDEAS Lab - Google Chrome 2026-08-13 10-58-18 (online-video-cutter.com).mp4"),
}

os.makedirs(OUT, exist_ok=True)
os.makedirs(MEDIA, exist_ok=True)
for name, (src, mx) in IMAGES.items():
    if not os.path.exists(src):
        print("MISSING", name, src); continue
    im = ImageOps.exif_transpose(Image.open(src))
    im.thumbnail((mx, mx), Image.LANCZOS)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    im = im.convert("RGBA" if has_alpha else "RGB")
    dst = os.path.join(OUT, name + ".webp")
    im.save(dst, "WEBP", quality=84, method=6)
    print(f"{name}.webp  {im.size}  {os.path.getsize(dst)//1024} KB")
for name, src in MEDIA_FILES.items():
    if os.path.exists(src):
        shutil.copyfile(src, os.path.join(MEDIA, name)); print("media", name)
    else:
        print("MISSING", name)
