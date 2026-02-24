// src/components/projects/projects.ts
import sitarImg from "../../assets/projects_images/Society for Integrated Circuit Technology and Applied Research.avif";
import nimsImg from "../../assets/projects_images/Nizams Institute of Medical Sciences.webp";
import iilImg from "../../assets/projects_images/Indian Immunologicals Limited.webp";
import iil2Img from "../../assets/projects_images/Indian Immunologicals Limited (IIL)2.webp";
import epeImg from "../../assets/projects_images/EPE Process Filters & Accumulators.webp";
import ncnImg from "../../assets/projects_images/National Centre for Nanoscience.avif";
import iiiImg from "../../assets/projects_images/India Bulls Centrum Park.webp";
import rcbImg from "../../assets/projects_images/Research Centre Imarat (RCI).webp";

// Group 9-20
import lodhaImg from "../../assets/projects_images/Lodha Bellezza.webp";
import colgateImg from "../../assets/projects_images/Colgate Palmolive.webp";
import lancoImg from "../../assets/projects_images/Lanco Hills.webp";
import nddbImg from "../../assets/projects_images/National Dairy Development Board (NDDB).webp";
import iitImg from "../../assets/projects_images/Indian Institute of Technology (IIT).webp";
import bhuImg from "../../assets/projects_images/Institute of Medical Science, Banaras Hindu University.webp";
import saiTrustImg from "../../assets/projects_images/Sri Satya Sai Trust.webp";
import granulesImg from "../../assets/projects_images/Granuels India Limited.webp";
import jamiaImg from "../../assets/projects_images/Jamia Millia Islamia University.webp";
import rasLifeImg from "../../assets/projects_images/RAS Life Sciences.webp";
import icleanImg from "../../assets/projects_images/Integrated Clean Room Technologies.webp";
import mrcImg from "../../assets/projects_images/MRC Iclean Systems Pvt.webp";

// Group 21-30
import rainbowImg from "../../assets/projects_images/Rainbow Hospitals.webp";
import cmsdsImg from "../../assets/projects_images/Centre for Millimeter Wave Semiconductor.webp";
import gvkImg from "../../assets/projects_images/GVK Biosciences Pvt.webp";
import mondelezImg from "../../assets/projects_images/Mondelez International.webp";
import sarvothamImg from "../../assets/projects_images/Sarvotham Care Pvt.webp";
import safePharmaImg from "../../assets/projects_images/Safe Pharma.webp";
import icleanHqImg from "../../assets/projects_images/Integrated Clean Room Technologies Pvt. Ltd..webp";
import mylanImg from "../../assets/projects_images/Mylan Labs.webp";
import steliesImg from "../../assets/projects_images/Stelies Bio Pharma.webp";
import chemoImg from "../../assets/projects_images/Chemo India Pharmulation.avif";

// Group 31-38
import kamalImg from "../../assets/projects_images/Kamal Encon Pvt. Ltd.webp";
import aigImg from "../../assets/projects_images/Asian Institute of Gastroenterology.webp";
import niabImg from "../../assets/projects_images/National Institute of Animal Biotechnology.webp";
import cclImg from "../../assets/projects_images/CCL Products India Ltd.avif";
import apHealthImg from "../../assets/projects_images/Andhra Pradesh Health & Medical Dept.webp";
import maruthiImg from "../../assets/projects_images/Maruthi Suzuki.webp";
import iitGImg from "../../assets/projects_images/IIT Guwahati.webp";

export interface Project {
  id: number;
  name: string; // Client Name
  description: string; // Scope of Work
  projectType: string; // Type of work
  location: string;
  category: string;
  value: string; // Added Value field
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Society for Integrated Circuit Technology and Applied Research (SITAR)",
    description: "FLP Lights & power socket works, Armored cable laying 25Kms, earthing & AHU works",
    projectType: "Class 100 area",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 60 Lks",
    image: sitarImg
  },
  {
    id: 2,
    name: "Nizams Institute of Medical Sciences",
    description: "FLP Lights & power socket works, Armored cable laying 16Kms, Cable tray works",
    projectType: "Operation Theatres",
    location: "Hyderabad",
    category: "Healthcare",
    value: "Rs. 35 Lks",
    image: nimsImg
  },
  {
    id: 3,
    name: "Indian Immunologicals Limited (IIL)",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works",
    projectType: "Lab area for R&D",
    location: "Gachibowli, Hyd",
    category: "Industrial",
    value: "Rs. 55 Lks",
    image: iilImg
  },
  {
    id: 4,
    name: "Indian Immunologicals Limited (IIL)",
    description: "Installation of Cables 170 Kms, light fittings, PCC & MCC Panels, AHU, DB works",
    projectType: "Lab area for QA, QC, AH&HH",
    location: "Karakapatla, Hyd",
    category: "Industrial",
    value: "Rs. 77 Lks",
    image: iil2Img
  },
  {
    id: 5,
    name: "EPE Process Filters & Accumulators Pvt. Ltd.",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Lan & Telephone, lightning and lighting works",
    projectType: "New Unit Expantion",
    location: "Gandhinagar, Hyd",
    category: "Industrial",
    value: "Rs. 45 Lks",
    image: epeImg
  },
  {
    id: 6,
    name: "National Centre for Nanoscience and Nanotechnology (NCNNUM)",
    description: "FLP Lights & power socket works, Armored cable laying 20Kms, earthing & AHU works",
    projectType: "Class 100 area",
    location: "Mumbai",
    category: "Healthcare",
    value: "Rs. 38 Lks",
    image: ncnImg
  },
  {
    id: 7,
    name: "Research Centre Imarat (RCI)",
    description: "Supply and installation of FLP Lights & power socket works, Armored cable laying 27Kms, earthing, AHU works",
    projectType: "Class 100 area",
    location: "Balapur, Hyd",
    category: "Industrial",
    value: "Rs. 70 Lks",
    image: rcbImg
  },
  {
    id: 8,
    name: "India Bulls Centrum Park",
    description: "Internal wiring 210Kms, DBs fixing, switch & sockets fixing etc..",
    projectType: "Flats Internal Works",
    location: "Lower tankbund, Hyd",
    category: "Residential",
    value: "Rs. 40 Lks",
    image: iiiImg
  },
  {
    id: 9,
    name: "Lodha Bellezza",
    description: "External cables laying 155 Kms, HT Yard, HT&LT panels, Transformers, Cable trays 22 Kms, DB works, Circuit wiring, LAN, Telephone & TV woks, Earthing & Lightning works",
    projectType: "External Works Tower 7A & 7B",
    location: "KPHB, Hyd",
    category: "Residential",
    value: "Rs. 90 Lks",
    image: lodhaImg
  },
  {
    id: 10,
    name: "Colgate Palmolive",
    description: "Supply & installation of Cables 35Kms, light fittings, AHU, DB works and Cable tray works",
    projectType: "Lab for QA & QC",
    location: "Sanand, Gujarath",
    category: "Industrial",
    value: "Rs. 35 Lks",
    image: colgateImg
  },
  {
    id: 11,
    name: "Lanco Hills",
    description: "External cables laying 155 Kms, HT Yard, HT&LT panels, Transformers, Cable trays 22 Kms, DB works, Earthing & Lightning works",
    projectType: "External Works Tower 6&7",
    location: "Manikonda, Hyd",
    category: "Residential",
    value: "Rs. 42 Lks",
    image: lancoImg
  },
  {
    id: 12,
    name: "National Dairy Development Board (NDDB)",
    description: "Supply & installation of Cables 60Kms, light fittings, AHU, DB works, BMS and Cable tray works",
    projectType: "Lab Area",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 65 Lks",
    image: nddbImg
  },
  {
    id: 13,
    name: "Indian Institute of Technology (IIT)",
    description: "Supply & installation of Cables 75Kms, light fittings, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "New Delhi",
    category: "Assembly",
    value: "Rs. 50 Lks",
    image: iitImg
  },
  {
    id: 14,
    name: "Institute of Medical Science, Banaras Hindu University (IMS, BHU)",
    description: "Supply & installation of Cables 220 Kms, light fittings, AHU, DB works, internal wiring, Cable tray works, BMS, FAS, ACS, CCTV, LAN & Telephone works",
    projectType: "Medical College & Hostel",
    location: "Varanasi, UP",
    category: "Healthcare",
    value: "Rs. 190 Lks",
    image: bhuImg
  },
  {
    id: 15,
    name: "Sri Satya Sai Trust",
    description: "Supply & installation of Cables 22Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Museum",
    location: "Puttaparthi",
    category: "Assembly",
    value: "Rs. 42 Lks",
    image: saiTrustImg
  },
  {
    id: 16,
    name: "Granuels India Limited",
    description: "Supply & installation of Cables 55Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Gagilapur, Hyd",
    category: "Industrial",
    value: "Rs. 120 Lks",
    image: granulesImg
  },
  {
    id: 17,
    name: "Jamia Millia Islamia University",
    description: "Supply & installation of Cables 60Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Medical College Lab Area",
    location: "New Delhi",
    category: "Assembly",
    value: "Rs. 70 Lks",
    image: jamiaImg
  },
  {
    id: 18,
    name: "RAS Life Sciences",
    description: "Supply & installation of Cables 35Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Karakapatla, Hyd",
    category: "Industrial",
    value: "Rs. 40 Lks",
    image: rasLifeImg
  },
  {
    id: 19,
    name: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)",
    description: "Supply and installation of external and internal cable works, cable tray works, earthing, panel and DB works",
    projectType: "New Unit Expantion",
    location: "Baroda, Gujarath",
    category: "Industrial",
    value: "Rs. 85 Lks",
    image: icleanImg
  },
  {
    id: 20,
    name: "MRC Iclean Systems Pvt. Ltd.",
    description: "Supply and installation of external and internal cable works, cable tray works, earthing, panel and DB works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 62 Lks",
    image: mrcImg
  },
  {
    id: 21,
    name: "Rainbow Hospitals",
    description: "FLP Lights & power socket works, Armored cable laying 20Kms, Cable tray works",
    projectType: "Operation Theatres",
    location: "Bangalore",
    category: "Healthcare",
    value: "Rs. 38 Lks",
    image: rainbowImg
  },
  {
    id: 22,
    name: "Centre for Millimeter Wave Semiconductor Devices & Systems (CMSDS)",
    description: "FLP Lights & power socket works, Armored cable laying 35Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "Class 100 Area",
    location: "Baruipur, Kolkata",
    category: "Industrial",
    value: "Rs. 170 Lks",
    image: cmsdsImg
  },
  {
    id: 23,
    name: "GVK Biosciences Pvt. Ltd.",
    description: "Supply & installation of Cables 70Kms, power & lighting, AHU, DB works, Cable tray works, Panel and HT works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 110 Lks",
    image: gvkImg
  },
  {
    id: 24,
    name: "Mondelez International",
    description: "Supply & installation of Cables 20Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Sri city, Nellore",
    category: "Industrial",
    value: "Rs. 30 Lks",
    image: mondelezImg
  },
  {
    id: 25,
    name: "Sarvotham Care Pvt. Ltd.",
    description: "Supply & installation of Cables 42Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 56 Lks",
    image: sarvothamImg
  },
  {
    id: 26,
    name: "Safe Pharma",
    description: "Lights & power socket works, Armored cable laying 35Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "Clean Room Lab Area",
    location: "Narasarao pet, AP",
    category: "Industrial",
    value: "Rs. 105 Lks",
    image: safePharmaImg
  },
  {
    id: 27,
    name: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)",
    description: "Internal wiring 210Kms, DBs fixing, switch & sockets fixing, LAN, Telephone, CCTV, ACS, FAS, cable tray works",
    projectType: "Corporate Office",
    location: "Kompally, Hyd",
    category: "Commercial",
    value: "Rs. 85 Lks",
    image: icleanHqImg
  },
  {
    id: 28,
    name: "Mylan Labs",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works, CCTV, ACS, FAS, LAN and Telephone works",
    projectType: "New Unit Expantion",
    location: "Lusaka, Zambia",
    category: "Industrial",
    value: "Rs. 135 Lks",
    image: mylanImg
  },
  {
    id: 29,
    name: "Stelies Bio Pharma",
    description: "Supply & installation of Cables 45Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "New Unit Expantion",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 82 Lks",
    image: steliesImg
  },
  {
    id: 30,
    name: "Chemo India Pharmulation Pvt. Ltd.",
    description: "Supply & installation of Cables 36Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 65 Lks",
    image: chemoImg
  },
  {
    id: 31,
    name: "Kamal Encon Pvt. Ltd.",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works, CCTV, ACS, FAS, LAN and Telephone works",
    projectType: "New Unit Expantion",
    location: "New Delhi",
    category: "Industrial",
    value: "Rs. 126 Lks",
    image: kamalImg
  },
  {
    id: 32,
    name: "Asian Institute of Gastroenterology (AIG)",
    description: "Lights & power socket works, Armored cable laying 33Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "New Unit Expansions",
    location: "Gachibowli, Hyd",
    category: "Healthcare",
    value: "Rs. 52 Lks",
    image: aigImg
  },
  {
    id: 33,
    name: "National Institute of Animal Biotechnology (NIAB)",
    description: "Lights & power socket works, Armored cable laying 55Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "New Unit Expansions",
    location: "Gachibowli, Hyd",
    category: "Healthcare",
    value: "Rs. 215 Lks",
    image: niabImg
  },
  {
    id: 34,
    name: "CCL Products India Ltd",
    description: "Supply & installation of Cables 18Kms, power & lighting Works",
    projectType: "Clean Room Lab",
    location: "Sulluripet, AP",
    category: "Industrial",
    value: "Rs. 28 Lks",
    image: cclImg
  },
  {
    id: 35,
    name: "Andhra Pradesh Health & Medical Dept.",
    description: "Supply & installation of Cables 35Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Operation Theaters",
    location: "All District Head Quarters",
    category: "Healthcare",
    value: "Rs. 120 Lks",
    image: apHealthImg
  },
  {
    id: 36,
    name: "Maruthi Suzuki",
    description: "Lights & power socket works, Armored cable laying 80Kms, earthing, AHU works, CCTV, BMS, CS, FAS, LAN & Telephone works",
    projectType: "Battery Production Plant",
    location: "Becharaji, Gujarath",
    category: "Industrial",
    value: "Rs. 446 Lks",
    image: maruthiImg
  },
  {
    id: 37,
    name: "National Diary Development Board",
    description: "Supply and installation of cables 60Kms, point wiring, DGs, UPS, control panels light fittings etc...",
    projectType: "Animal IVF Labs",
    location: "Chiplima, Odisha",
    category: "Industrial",
    value: "Rs. 465 Lks",
    image: nddbImg
  },
  {
    id: 38,
    name: "IIT Guwahati",
    description: "Lights & power socket works, Armored cable laying 33Kms, earthing, AHU works, CCTV, BMS, CS, FAS, LAN & Telephone works",
    projectType: "Testing Laboratory",
    location: "IIT Guwahati",
    category: "Assembly",
    value: "N/A", // Value was not in text
    image: iitGImg
  }
];