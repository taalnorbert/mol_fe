export type FilterType = "text" | "number" | "date" | "select" | "none";

export interface FilterConfig {
    type: FilterType;
    options?: string[];
}

export interface DataItem {
    id: string;
    name: string;
    description: string;
    category: "hardware" | "software";
    filterConfig: FilterConfig;
    sampleData: SampleRecord[];
}

export interface SampleRecord {
    id: string;
    value: string | number | Date;
    personName: string;
}

export interface DataCategory {
    id: "hardware" | "software";
    labelKey: string;
}

export interface DataFilter {
    dataItemId: string;
    filterType: FilterType;
    textContains?: string;
    textEquals?: string;
    numberMin?: number;
    numberMax?: number;
    numberEquals?: number;
    dateFrom?: string;
    dateTo?: string;
    dateEquals?: string;
    selectedOptions?: string[];
}

export const dataCategories: DataCategory[] = [
    { id: "hardware", labelKey: "requestCreate.form.dataCategories.hardware" },
    { id: "software", labelKey: "requestCreate.form.dataCategories.software" },
];

const hardwareData: DataItem[] = [
    { 
        id: "h1", 
        name: "Laptop", 
        description: "Hordozható számítógép munkavégzéshez", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Dell Latitude", "HP EliteBook", "Lenovo ThinkPad", "Apple MacBook Pro", "ASUS ZenBook"]
        },
        sampleData: [
            { id: "h1-1", value: "Dell Latitude 5540", personName: "Raktár A" },
            { id: "h1-2", value: "HP EliteBook 850", personName: "Raktár A" },
            { id: "h1-3", value: "Lenovo ThinkPad T14", personName: "Raktár B" },
            { id: "h1-4", value: "Apple MacBook Pro 14", personName: "Raktár C" },
            { id: "h1-5", value: "ASUS ZenBook 14", personName: "Raktár B" },
        ]
    },
    { 
        id: "h2", 
        name: "Monitor", 
        description: "Külső megjelenítő eszköz", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Dell UltraSharp", "LG UltraWide", "Samsung Curved", "BenQ Designer", "ASUS ProArt"]
        },
        sampleData: [
            { id: "h2-1", value: "Dell UltraSharp 27\"", personName: "Raktár A" },
            { id: "h2-2", value: "LG UltraWide 34\"", personName: "Raktár A" },
            { id: "h2-3", value: "Samsung Curved 32\"", personName: "Raktár B" },
            { id: "h2-4", value: "BenQ Designer 27\"", personName: "Raktár C" },
            { id: "h2-5", value: "ASUS ProArt 32\"", personName: "Raktár B" },
        ]
    },
    { 
        id: "h3", 
        name: "Billentyűzet", 
        description: "Vezetékes vagy vezeték nélküli billentyűzet", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Logitech MX Keys", "Microsoft Ergonomic", "Apple Magic Keyboard", "Razer Pro", "Keychron K2"]
        },
        sampleData: [
            { id: "h3-1", value: "Logitech MX Keys", personName: "Raktár A" },
            { id: "h3-2", value: "Microsoft Ergonomic", personName: "Raktár A" },
            { id: "h3-3", value: "Apple Magic Keyboard", personName: "Raktár C" },
            { id: "h3-4", value: "Razer Pro Type", personName: "Raktár B" },
            { id: "h3-5", value: "Keychron K2", personName: "Raktár B" },
        ]
    },
    { 
        id: "h4", 
        name: "Egér", 
        description: "Vezetékes vagy vezeték nélküli egér", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Logitech MX Master", "Microsoft Arc", "Apple Magic Mouse", "Razer DeathAdder", "Logitech Lift"]
        },
        sampleData: [
            { id: "h4-1", value: "Logitech MX Master 3S", personName: "Raktár A" },
            { id: "h4-2", value: "Microsoft Arc Mouse", personName: "Raktár A" },
            { id: "h4-3", value: "Apple Magic Mouse", personName: "Raktár C" },
            { id: "h4-4", value: "Razer DeathAdder V3", personName: "Raktár B" },
            { id: "h4-5", value: "Logitech Lift", personName: "Raktár B" },
        ]
    },
    { 
        id: "h5", 
        name: "Headset", 
        description: "Fejhallgató mikrofonnal kommunikációhoz", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Jabra Evolve2", "Poly Voyager", "Logitech Zone", "Sony WH-1000XM5", "Bose 700"]
        },
        sampleData: [
            { id: "h5-1", value: "Jabra Evolve2 85", personName: "Raktár A" },
            { id: "h5-2", value: "Poly Voyager Focus 2", personName: "Raktár A" },
            { id: "h5-3", value: "Logitech Zone Wireless", personName: "Raktár B" },
            { id: "h5-4", value: "Sony WH-1000XM5", personName: "Raktár C" },
            { id: "h5-5", value: "Bose 700 UC", personName: "Raktár B" },
        ]
    },
    { 
        id: "h6", 
        name: "Webkamera", 
        description: "Külső kamera videohívásokhoz", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Logitech Brio", "Logitech C920", "Microsoft LifeCam", "Razer Kiyo", "Elgato Facecam"]
        },
        sampleData: [
            { id: "h6-1", value: "Logitech Brio 4K", personName: "Raktár A" },
            { id: "h6-2", value: "Logitech C920 HD", personName: "Raktár A" },
            { id: "h6-3", value: "Microsoft LifeCam Studio", personName: "Raktár B" },
            { id: "h6-4", value: "Razer Kiyo Pro", personName: "Raktár C" },
            { id: "h6-5", value: "Elgato Facecam", personName: "Raktár B" },
        ]
    },
    { 
        id: "h7", 
        name: "Dokkoló állomás", 
        description: "USB-C vagy Thunderbolt dokkoló", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Dell WD19", "Lenovo ThinkPad USB-C", "HP Thunderbolt G4", "CalDigit TS4", "Anker PowerExpand"]
        },
        sampleData: [
            { id: "h7-1", value: "Dell WD19TBS", personName: "Raktár A" },
            { id: "h7-2", value: "Lenovo ThinkPad USB-C Dock", personName: "Raktár A" },
            { id: "h7-3", value: "HP Thunderbolt G4 Dock", personName: "Raktár B" },
            { id: "h7-4", value: "CalDigit TS4", personName: "Raktár C" },
            { id: "h7-5", value: "Anker PowerExpand Elite", personName: "Raktár B" },
        ]
    },
    { 
        id: "h8", 
        name: "Külső merevlemez", 
        description: "Hordozható adattároló eszköz", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Samsung T7", "SanDisk Extreme", "WD My Passport", "Seagate Backup Plus", "LaCie Rugged"]
        },
        sampleData: [
            { id: "h8-1", value: "Samsung T7 1TB", personName: "Raktár A" },
            { id: "h8-2", value: "SanDisk Extreme 2TB", personName: "Raktár A" },
            { id: "h8-3", value: "WD My Passport 4TB", personName: "Raktár B" },
            { id: "h8-4", value: "Seagate Backup Plus 5TB", personName: "Raktár C" },
            { id: "h8-5", value: "LaCie Rugged 2TB", personName: "Raktár B" },
        ]
    },
    { 
        id: "h9", 
        name: "Nyomtató", 
        description: "Irodai nyomtató", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["HP LaserJet", "Canon imageRUNNER", "Brother MFC", "Epson WorkForce", "Xerox VersaLink"]
        },
        sampleData: [
            { id: "h9-1", value: "HP LaserJet Pro M404", personName: "Raktár A" },
            { id: "h9-2", value: "Canon imageRUNNER C3226i", personName: "Raktár A" },
            { id: "h9-3", value: "Brother MFC-L8900CDW", personName: "Raktár B" },
            { id: "h9-4", value: "Epson WorkForce Pro WF-4830", personName: "Raktár C" },
            { id: "h9-5", value: "Xerox VersaLink C405", personName: "Raktár B" },
        ]
    },
    { 
        id: "h10", 
        name: "Tablet", 
        description: "Hordozható táblagép", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Apple iPad Pro", "Samsung Galaxy Tab", "Microsoft Surface Pro", "Lenovo Tab P12", "Huawei MatePad"]
        },
        sampleData: [
            { id: "h10-1", value: "Apple iPad Pro 12.9\"", personName: "Raktár C" },
            { id: "h10-2", value: "Samsung Galaxy Tab S9+", personName: "Raktár A" },
            { id: "h10-3", value: "Microsoft Surface Pro 9", personName: "Raktár B" },
            { id: "h10-4", value: "Lenovo Tab P12 Pro", personName: "Raktár B" },
            { id: "h10-5", value: "Huawei MatePad Pro", personName: "Raktár A" },
        ]
    },
    { 
        id: "h11", 
        name: "Asztali számítógép", 
        description: "Állandó telepítésű munkaállomás", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Dell OptiPlex", "HP ProDesk", "Lenovo ThinkCentre", "Apple iMac", "ASUS ExpertCenter"]
        },
        sampleData: [
            { id: "h11-1", value: "Dell OptiPlex 7010", personName: "Raktár A" },
            { id: "h11-2", value: "HP ProDesk 400 G9", personName: "Raktár A" },
            { id: "h11-3", value: "Lenovo ThinkCentre M90q", personName: "Raktár B" },
            { id: "h11-4", value: "Apple iMac 24\"", personName: "Raktár C" },
            { id: "h11-5", value: "ASUS ExpertCenter D7", personName: "Raktár B" },
        ]
    },
    { 
        id: "h12", 
        name: "Projektor", 
        description: "Prezentációs vetítő", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Epson EB", "BenQ MH", "Optoma HD", "ViewSonic PX", "Sony VPL"]
        },
        sampleData: [
            { id: "h12-1", value: "Epson EB-2265U", personName: "Raktár A" },
            { id: "h12-2", value: "BenQ MH760", personName: "Raktár A" },
            { id: "h12-3", value: "Optoma HD39HDRx", personName: "Raktár B" },
            { id: "h12-4", value: "ViewSonic PX701-4K", personName: "Raktár C" },
            { id: "h12-5", value: "Sony VPL-PHZ60", personName: "Raktár B" },
        ]
    },
    { 
        id: "h13", 
        name: "Szünetmentes tápegység", 
        description: "UPS áramellátás biztosítására", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["APC Back-UPS", "CyberPower", "Eaton 5S", "Legrand Keor", "Vertiv Edge"]
        },
        sampleData: [
            { id: "h13-1", value: "APC Back-UPS Pro 1500", personName: "Raktár A" },
            { id: "h13-2", value: "CyberPower CP1500PFCLCD", personName: "Raktár A" },
            { id: "h13-3", value: "Eaton 5S 1500i", personName: "Raktár B" },
            { id: "h13-4", value: "Legrand Keor SP 1500", personName: "Raktár C" },
            { id: "h13-5", value: "Vertiv Edge 1500", personName: "Raktár B" },
        ]
    },
    { 
        id: "h14", 
        name: "Hálózati switch", 
        description: "Ethernet hálózati kapcsoló", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Cisco Catalyst", "HP Aruba", "Netgear ProSAFE", "TP-Link JetStream", "Ubiquiti UniFi"]
        },
        sampleData: [
            { id: "h14-1", value: "Cisco Catalyst 9200", personName: "Raktár A" },
            { id: "h14-2", value: "HP Aruba 2930F", personName: "Raktár A" },
            { id: "h14-3", value: "Netgear ProSAFE XS708E", personName: "Raktár B" },
            { id: "h14-4", value: "TP-Link JetStream TL-SG3428", personName: "Raktár C" },
            { id: "h14-5", value: "Ubiquiti UniFi Pro 24", personName: "Raktár B" },
        ]
    },
    { 
        id: "h15", 
        name: "Router", 
        description: "Hálózati útválasztó", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Cisco ISR", "MikroTik", "Ubiquiti EdgeRouter", "Juniper SRX", "Fortinet FortiGate"]
        },
        sampleData: [
            { id: "h15-1", value: "Cisco ISR 4331", personName: "Raktár A" },
            { id: "h15-2", value: "MikroTik CCR2004", personName: "Raktár A" },
            { id: "h15-3", value: "Ubiquiti EdgeRouter 4", personName: "Raktár B" },
            { id: "h15-4", value: "Juniper SRX320", personName: "Raktár C" },
            { id: "h15-5", value: "Fortinet FortiGate 60F", personName: "Raktár B" },
        ]
    },
    { 
        id: "h16", 
        name: "Telefon (IP)", 
        description: "VoIP asztali telefon", 
        category: "hardware",
        filterConfig: { 
            type: "select",
            options: ["Cisco IP Phone", "Yealink T5", "Poly VVX", "Grandstream GRP", "Fanvil X"]
        },
        sampleData: [
            { id: "h16-1", value: "Cisco IP Phone 8845", personName: "Raktár A" },
            { id: "h16-2", value: "Yealink T54W", personName: "Raktár A" },
            { id: "h16-3", value: "Poly VVX 450", personName: "Raktár B" },
            { id: "h16-4", value: "Grandstream GRP2615", personName: "Raktár C" },
            { id: "h16-5", value: "Fanvil X6U", personName: "Raktár B" },
        ]
    },
];
const softwareData: DataItem[] = [
    { 
        id: "sw1", 
        name: "Microsoft 365", 
        description: "Irodai alkalmazáscsomag (Word, Excel, PowerPoint, Outlook)", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Business Basic", "Business Standard", "Business Premium", "E3", "E5"]
        },
        sampleData: [
            { id: "sw1-1", value: "Business Standard", personName: "10 db elérhető" },
            { id: "sw1-2", value: "E3", personName: "25 db elérhető" },
            { id: "sw1-3", value: "E5", personName: "5 db elérhető" },
            { id: "sw1-4", value: "Business Basic", personName: "50 db elérhető" },
            { id: "sw1-5", value: "Business Premium", personName: "15 db elérhető" },
        ]
    },
    { 
        id: "sw2", 
        name: "Adobe Creative Cloud", 
        description: "Kreatív szoftvercsomag (Photoshop, Illustrator, InDesign)", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Fotózás csomag", "Egyedi alkalmazás", "Teljes csomag", "Team csomag"]
        },
        sampleData: [
            { id: "sw2-1", value: "Teljes csomag", personName: "8 db elérhető" },
            { id: "sw2-2", value: "Fotózás csomag", personName: "20 db elérhető" },
            { id: "sw2-3", value: "Egyedi alkalmazás", personName: "30 db elérhető" },
            { id: "sw2-4", value: "Team csomag", personName: "5 db elérhető" },
            { id: "sw2-5", value: "Teljes csomag", personName: "12 db elérhető" },
        ]
    },
    { 
        id: "sw3", 
        name: "Fejlesztői eszközök", 
        description: "IDE és fejlesztői környezetek", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Visual Studio Professional", "Visual Studio Enterprise", "JetBrains All Products", "Rider", "WebStorm"]
        },
        sampleData: [
            { id: "sw3-1", value: "Visual Studio Enterprise", personName: "15 db elérhető" },
            { id: "sw3-2", value: "JetBrains All Products", personName: "10 db elérhető" },
            { id: "sw3-3", value: "Rider", personName: "8 db elérhető" },
            { id: "sw3-4", value: "WebStorm", personName: "12 db elérhető" },
            { id: "sw3-5", value: "Visual Studio Professional", personName: "20 db elérhető" },
        ]
    },
    { 
        id: "sw4", 
        name: "Vírusvédelem", 
        description: "Vállalati vírusirtó és biztonsági szoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Microsoft Defender", "ESET Endpoint", "Symantec Endpoint", "CrowdStrike Falcon", "Bitdefender GravityZone"]
        },
        sampleData: [
            { id: "sw4-1", value: "Microsoft Defender for Endpoint", personName: "100 db elérhető" },
            { id: "sw4-2", value: "ESET Endpoint Security", personName: "50 db elérhető" },
            { id: "sw4-3", value: "CrowdStrike Falcon", personName: "30 db elérhető" },
            { id: "sw4-4", value: "Bitdefender GravityZone", personName: "40 db elérhető" },
            { id: "sw4-5", value: "Symantec Endpoint Protection", personName: "25 db elérhető" },
        ]
    },
    { 
        id: "sw5", 
        name: "Projektmenedzsment", 
        description: "Projekt és feladatkezelő szoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Jira", "Asana", "Monday.com", "Microsoft Project", "Trello Premium"]
        },
        sampleData: [
            { id: "sw5-1", value: "Jira Software", personName: "Korlátlan licenc" },
            { id: "sw5-2", value: "Microsoft Project Plan 3", personName: "15 db elérhető" },
            { id: "sw5-3", value: "Asana Business", personName: "20 db elérhető" },
            { id: "sw5-4", value: "Monday.com", personName: "25 db elérhető" },
            { id: "sw5-5", value: "Trello Premium", personName: "50 db elérhető" },
        ]
    },
    { 
        id: "sw6", 
        name: "Videokonferencia", 
        description: "Videohívás és meetingszoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Microsoft Teams", "Zoom Business", "Webex", "Google Meet Enterprise", "GoToMeeting"]
        },
        sampleData: [
            { id: "sw6-1", value: "Microsoft Teams Premium", personName: "100 db elérhető" },
            { id: "sw6-2", value: "Zoom Business", personName: "30 db elérhető" },
            { id: "sw6-3", value: "Webex Enterprise", personName: "25 db elérhető" },
            { id: "sw6-4", value: "Google Meet Enterprise", personName: "20 db elérhető" },
            { id: "sw6-5", value: "GoToMeeting Professional", personName: "15 db elérhető" },
        ]
    },
    { 
        id: "sw7", 
        name: "CAD szoftver", 
        description: "Tervezői és mérnöki szoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["AutoCAD", "SolidWorks", "Fusion 360", "Revit", "SketchUp Pro"]
        },
        sampleData: [
            { id: "sw7-1", value: "AutoCAD 2025", personName: "10 db elérhető" },
            { id: "sw7-2", value: "SolidWorks Professional", personName: "8 db elérhető" },
            { id: "sw7-3", value: "Fusion 360", personName: "15 db elérhető" },
            { id: "sw7-4", value: "Revit", personName: "6 db elérhető" },
            { id: "sw7-5", value: "SketchUp Pro", personName: "12 db elérhető" },
        ]
    },
    { 
        id: "sw8", 
        name: "Adatbázis kezelő", 
        description: "Adatbázis szerver és menedzsment eszközök", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Microsoft SQL Server", "Oracle Database", "MySQL Enterprise", "PostgreSQL Enterprise", "MongoDB Atlas"]
        },
        sampleData: [
            { id: "sw8-1", value: "SQL Server Enterprise", personName: "5 db elérhető" },
            { id: "sw8-2", value: "Oracle Database EE", personName: "3 db elérhető" },
            { id: "sw8-3", value: "MySQL Enterprise", personName: "10 db elérhető" },
            { id: "sw8-4", value: "PostgreSQL Enterprise", personName: "8 db elérhető" },
            { id: "sw8-5", value: "MongoDB Atlas", personName: "Korlátlan" },
        ]
    },
    { 
        id: "sw9", 
        name: "VPN kliens", 
        description: "Távoli hozzáférést biztosító szoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Cisco AnyConnect", "GlobalProtect", "FortiClient", "OpenVPN Access Server", "NordLayer"]
        },
        sampleData: [
            { id: "sw9-1", value: "Cisco AnyConnect", personName: "200 db elérhető" },
            { id: "sw9-2", value: "GlobalProtect", personName: "150 db elérhető" },
            { id: "sw9-3", value: "FortiClient", personName: "100 db elérhető" },
            { id: "sw9-4", value: "OpenVPN Access Server", personName: "50 db elérhető" },
            { id: "sw9-5", value: "NordLayer", personName: "75 db elérhető" },
        ]
    },
    { 
        id: "sw10", 
        name: "Backup szoftver", 
        description: "Adatmentési és visszaállítási megoldás", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Veeam Backup", "Acronis Cyber Protect", "Commvault", "Veritas NetBackup", "Nakivo"]
        },
        sampleData: [
            { id: "sw10-1", value: "Veeam Backup & Replication", personName: "20 db elérhető" },
            { id: "sw10-2", value: "Acronis Cyber Protect", personName: "30 db elérhető" },
            { id: "sw10-3", value: "Commvault Complete", personName: "10 db elérhető" },
            { id: "sw10-4", value: "Veritas NetBackup", personName: "5 db elérhető" },
            { id: "sw10-5", value: "Nakivo Backup", personName: "15 db elérhető" },
        ]
    },
    { 
        id: "sw11", 
        name: "Felhő szolgáltatás", 
        description: "Cloud platform hozzáférés", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Azure subscription", "AWS Account", "Google Cloud", "IBM Cloud", "Oracle Cloud"]
        },
        sampleData: [
            { id: "sw11-1", value: "Azure Enterprise", personName: "Aktív előfizetés" },
            { id: "sw11-2", value: "AWS Enterprise", personName: "Aktív előfizetés" },
            { id: "sw11-3", value: "Google Cloud Platform", personName: "Aktív előfizetés" },
            { id: "sw11-4", value: "IBM Cloud", personName: "Aktív előfizetés" },
            { id: "sw11-5", value: "Oracle Cloud", personName: "Aktív előfizetés" },
        ]
    },
    { 
        id: "sw12", 
        name: "Dokumentumkezelő", 
        description: "Vállalati dokumentumkezelő rendszer", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["SharePoint", "Confluence", "Notion", "DocuWare", "M-Files"]
        },
        sampleData: [
            { id: "sw12-1", value: "SharePoint Online", personName: "Korlátlan" },
            { id: "sw12-2", value: "Confluence Cloud", personName: "100 db elérhető" },
            { id: "sw12-3", value: "Notion Team", personName: "50 db elérhető" },
            { id: "sw12-4", value: "DocuWare Cloud", personName: "30 db elérhető" },
            { id: "sw12-5", value: "M-Files", personName: "25 db elérhető" },
        ]
    },
    { 
        id: "sw13", 
        name: "Virtualizáció", 
        description: "Virtualizációs platform licenc", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["VMware vSphere", "Microsoft Hyper-V", "Citrix XenServer", "Proxmox VE", "Nutanix AHV"]
        },
        sampleData: [
            { id: "sw13-1", value: "VMware vSphere Enterprise Plus", personName: "10 host elérhető" },
            { id: "sw13-2", value: "Hyper-V Datacenter", personName: "15 host elérhető" },
            { id: "sw13-3", value: "Citrix XenServer Premium", personName: "8 host elérhető" },
            { id: "sw13-4", value: "Proxmox VE Enterprise", personName: "12 host elérhető" },
            { id: "sw13-5", value: "Nutanix AHV", personName: "6 host elérhető" },
        ]
    },
    { 
        id: "sw14", 
        name: "Monitoring szoftver", 
        description: "Infrastruktúra és alkalmazás monitoring", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Datadog", "Splunk", "Dynatrace", "New Relic", "Zabbix Enterprise"]
        },
        sampleData: [
            { id: "sw14-1", value: "Datadog Enterprise", personName: "Aktív előfizetés" },
            { id: "sw14-2", value: "Splunk Enterprise", personName: "10 GB/nap" },
            { id: "sw14-3", value: "Dynatrace", personName: "50 host elérhető" },
            { id: "sw14-4", value: "New Relic", personName: "Aktív előfizetés" },
            { id: "sw14-5", value: "Zabbix Enterprise", personName: "100 host elérhető" },
        ]
    },
    { 
        id: "sw15", 
        name: "Grafikai szoftver", 
        description: "Képszerkesztő és grafikai tervezőeszköz", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Figma", "Sketch", "Canva Pro", "Affinity Designer", "CorelDRAW"]
        },
        sampleData: [
            { id: "sw15-1", value: "Figma Organization", personName: "30 db elérhető" },
            { id: "sw15-2", value: "Sketch Team", personName: "15 db elérhető" },
            { id: "sw15-3", value: "Canva Pro", personName: "50 db elérhető" },
            { id: "sw15-4", value: "Affinity Designer", personName: "20 db elérhető" },
            { id: "sw15-5", value: "CorelDRAW Graphics Suite", personName: "10 db elérhető" },
        ]
    },
    { 
        id: "sw16", 
        name: "Operációs rendszer", 
        description: "Windows vagy egyéb OS licenc", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Windows 11 Pro", "Windows 11 Enterprise", "Windows Server 2022", "Red Hat Enterprise Linux", "macOS upgrade"]
        },
        sampleData: [
            { id: "sw16-1", value: "Windows 11 Pro", personName: "200 db elérhető" },
            { id: "sw16-2", value: "Windows 11 Enterprise", personName: "100 db elérhető" },
            { id: "sw16-3", value: "Windows Server 2022 Datacenter", personName: "20 db elérhető" },
            { id: "sw16-4", value: "Red Hat Enterprise Linux", personName: "50 db elérhető" },
            { id: "sw16-5", value: "macOS (Apple Silicon)", personName: "30 db elérhető" },
        ]
    },
    { 
        id: "sw17", 
        name: "E-mail kliens", 
        description: "Levelezőprogram licenc", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Microsoft Outlook", "Mozilla Thunderbird Pro", "eM Client", "Mailbird Business", "Spike"]
        },
        sampleData: [
            { id: "sw17-1", value: "Microsoft Outlook (M365)", personName: "Korlátlan" },
            { id: "sw17-2", value: "eM Client Business", personName: "30 db elérhető" },
            { id: "sw17-3", value: "Mailbird Business", personName: "25 db elérhető" },
            { id: "sw17-4", value: "Spike", personName: "40 db elérhető" },
            { id: "sw17-5", value: "Thunderbird + Extensions", personName: "Korlátlan" },
        ]
    },
    { 
        id: "sw18", 
        name: "PDF szerkesztő", 
        description: "PDF kezelő és szerkesztő szoftver", 
        category: "software",
        filterConfig: { 
            type: "select",
            options: ["Adobe Acrobat Pro", "Foxit PDF Editor", "Nitro Pro", "PDF-XChange Editor", "Smallpdf"]
        },
        sampleData: [
            { id: "sw18-1", value: "Adobe Acrobat Pro DC", personName: "40 db elérhető" },
            { id: "sw18-2", value: "Foxit PDF Editor Pro", personName: "30 db elérhető" },
            { id: "sw18-3", value: "Nitro Pro", personName: "25 db elérhető" },
            { id: "sw18-4", value: "PDF-XChange Editor", personName: "50 db elérhető" },
            { id: "sw18-5", value: "Smallpdf Team", personName: "20 db elérhető" },
        ]
    },
];

export const allMockData: DataItem[] = [...hardwareData, ...softwareData];

export const getDataByCategories = (categories: ("hardware" | "software")[]): DataItem[] => {
    if (categories.length === 0) return [];
    return allMockData.filter(item => categories.includes(item.category));
};

export const getPaginatedData = (
    data: DataItem[],
    page: number,
    itemsPerPage: number
): { items: DataItem[]; totalPages: number; totalItems: number } => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    return {
        items,
        totalPages,
        totalItems: data.length,
    };
};

export const getDataItemById = (id: string): DataItem | undefined => {
    return allMockData.find(item => item.id === id);
};
