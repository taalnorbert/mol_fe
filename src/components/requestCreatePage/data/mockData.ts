export type FilterType = "text" | "number" | "date" | "select" | "none";

export interface FilterConfig {
    type: FilterType;
    options?: string[];
}

export interface DataItem {
    id: string;
    name: string;
    description: string;
    category: "student" | "employee";
    filterConfig: FilterConfig;
    sampleData: SampleRecord[];
}

export interface SampleRecord {
    id: string;
    value: string | number | Date;
    personName: string;
}

export interface DataCategory {
    id: "student" | "employee";
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
    { id: "student", labelKey: "requestCreate.form.dataCategories.student" },
    { id: "employee", labelKey: "requestCreate.form.dataCategories.employee" },
];

const studentData: DataItem[] = [
    { 
        id: "s1", 
        name: "Neptun kód", 
        description: "A hallgató Neptun rendszerbeli azonosítója", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s1-1", value: "ABC123", personName: "Kiss Péter" },
            { id: "s1-2", value: "DEF456", personName: "Nagy Anna" },
            { id: "s1-3", value: "GHI789", personName: "Szabó János" },
            { id: "s1-4", value: "JKL012", personName: "Tóth Éva" },
            { id: "s1-5", value: "MNO345", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s2", 
        name: "Teljes név", 
        description: "A hallgató hivatalos teljes neve", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s2-1", value: "Kiss Péter", personName: "Kiss Péter" },
            { id: "s2-2", value: "Nagy Anna", personName: "Nagy Anna" },
            { id: "s2-3", value: "Szabó János", personName: "Szabó János" },
            { id: "s2-4", value: "Tóth Éva", personName: "Tóth Éva" },
            { id: "s2-5", value: "Kovács Márk", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s3", 
        name: "Születési év", 
        description: "A hallgató születési éve", 
        category: "student",
        filterConfig: { type: "number" },
        sampleData: [
            { id: "s3-1", value: 2000, personName: "Kiss Péter" },
            { id: "s3-2", value: 2001, personName: "Nagy Anna" },
            { id: "s3-3", value: 2002, personName: "Szabó János" },
            { id: "s3-4", value: 2003, personName: "Tóth Éva" },
            { id: "s3-5", value: 2004, personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s4", 
        name: "Születési hely", 
        description: "A hallgató születési helye", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s4-1", value: "Budapest", personName: "Kiss Péter" },
            { id: "s4-2", value: "Debrecen", personName: "Nagy Anna" },
            { id: "s4-3", value: "Szeged", personName: "Szabó János" },
            { id: "s4-4", value: "Pécs", personName: "Tóth Éva" },
            { id: "s4-5", value: "Győr", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s5", 
        name: "Anyja neve", 
        description: "A hallgató anyjának leánykori neve", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s5-1", value: "Horváth Mária", personName: "Kiss Péter" },
            { id: "s5-2", value: "Fekete Katalin", personName: "Nagy Anna" },
            { id: "s5-3", value: "Molnár Ágnes", personName: "Szabó János" },
            { id: "s5-4", value: "Varga Ilona", personName: "Tóth Éva" },
            { id: "s5-5", value: "Balogh Eszter", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s6", 
        name: "Lakcím", 
        description: "A hallgató állandó lakcíme", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s6-1", value: "1111 Budapest, Fő utca 1.", personName: "Kiss Péter" },
            { id: "s6-2", value: "4024 Debrecen, Piac utca 5.", personName: "Nagy Anna" },
            { id: "s6-3", value: "6720 Szeged, Kárász utca 10.", personName: "Szabó János" },
            { id: "s6-4", value: "7621 Pécs, Király utca 3.", personName: "Tóth Éva" },
            { id: "s6-5", value: "9021 Győr, Baross Gábor út 8.", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s7", 
        name: "E-mail cím", 
        description: "A hallgató elsődleges e-mail címe", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s7-1", value: "kiss.peter@student.uni.hu", personName: "Kiss Péter" },
            { id: "s7-2", value: "nagy.anna@student.uni.hu", personName: "Nagy Anna" },
            { id: "s7-3", value: "szabo.janos@student.uni.hu", personName: "Szabó János" },
            { id: "s7-4", value: "toth.eva@student.uni.hu", personName: "Tóth Éva" },
            { id: "s7-5", value: "kovacs.mark@student.uni.hu", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s8", 
        name: "Telefonszám", 
        description: "A hallgató telefonszáma", 
        category: "student",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "s8-1", value: "+36 30 123 4567", personName: "Kiss Péter" },
            { id: "s8-2", value: "+36 20 234 5678", personName: "Nagy Anna" },
            { id: "s8-3", value: "+36 70 345 6789", personName: "Szabó János" },
            { id: "s8-4", value: "+36 30 456 7890", personName: "Tóth Éva" },
            { id: "s8-5", value: "+36 20 567 8901", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s9", 
        name: "Szak megnevezése", 
        description: "A hallgató aktív szakjának megnevezése", 
        category: "student",
        filterConfig: { 
            type: "select",
            options: ["Mérnökinformatikus", "Gazdaságinformatikus", "Programtervező informatikus", "Villamosmérnök", "Gépészmérnök"]
        },
        sampleData: [
            { id: "s9-1", value: "Mérnökinformatikus", personName: "Kiss Péter" },
            { id: "s9-2", value: "Gazdaságinformatikus", personName: "Nagy Anna" },
            { id: "s9-3", value: "Programtervező informatikus", personName: "Szabó János" },
            { id: "s9-4", value: "Villamosmérnök", personName: "Tóth Éva" },
            { id: "s9-5", value: "Gépészmérnök", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s10", 
        name: "Képzési szint", 
        description: "A képzés szintje (BSc, MSc, PhD, stb.)", 
        category: "student",
        filterConfig: { 
            type: "select",
            options: ["BSc", "MSc", "PhD", "OKJ", "Felsőoktatási szakképzés"]
        },
        sampleData: [
            { id: "s10-1", value: "BSc", personName: "Kiss Péter" },
            { id: "s10-2", value: "MSc", personName: "Nagy Anna" },
            { id: "s10-3", value: "BSc", personName: "Szabó János" },
            { id: "s10-4", value: "PhD", personName: "Tóth Éva" },
            { id: "s10-5", value: "MSc", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s11", 
        name: "Tagozat", 
        description: "A hallgató tagozata (nappali, levelező, stb.)", 
        category: "student",
        filterConfig: { 
            type: "select",
            options: ["Nappali", "Levelező", "Esti", "Távoktatás"]
        },
        sampleData: [
            { id: "s11-1", value: "Nappali", personName: "Kiss Péter" },
            { id: "s11-2", value: "Nappali", personName: "Nagy Anna" },
            { id: "s11-3", value: "Levelező", personName: "Szabó János" },
            { id: "s11-4", value: "Nappali", personName: "Tóth Éva" },
            { id: "s11-5", value: "Esti", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s12", 
        name: "Aktív félév", 
        description: "A hallgató aktuális aktív féléve", 
        category: "student",
        filterConfig: { type: "number" },
        sampleData: [
            { id: "s12-1", value: 3, personName: "Kiss Péter" },
            { id: "s12-2", value: 5, personName: "Nagy Anna" },
            { id: "s12-3", value: 2, personName: "Szabó János" },
            { id: "s12-4", value: 7, personName: "Tóth Éva" },
            { id: "s12-5", value: 4, personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s13", 
        name: "Hallgatói státusz", 
        description: "A hallgató jelenlegi státusza (aktív, passzív, stb.)", 
        category: "student",
        filterConfig: { 
            type: "select",
            options: ["Aktív", "Passzív", "Végzett", "Törölve"]
        },
        sampleData: [
            { id: "s13-1", value: "Aktív", personName: "Kiss Péter" },
            { id: "s13-2", value: "Aktív", personName: "Nagy Anna" },
            { id: "s13-3", value: "Passzív", personName: "Szabó János" },
            { id: "s13-4", value: "Aktív", personName: "Tóth Éva" },
            { id: "s13-5", value: "Végzett", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s14", 
        name: "Beiratkozás dátuma", 
        description: "A hallgató beiratkozásának dátuma", 
        category: "student",
        filterConfig: { type: "date" },
        sampleData: [
            { id: "s14-1", value: "2022-09-01", personName: "Kiss Péter" },
            { id: "s14-2", value: "2021-09-01", personName: "Nagy Anna" },
            { id: "s14-3", value: "2023-02-01", personName: "Szabó János" },
            { id: "s14-4", value: "2020-09-01", personName: "Tóth Éva" },
            { id: "s14-5", value: "2022-02-01", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s15", 
        name: "Kar megnevezése", 
        description: "A hallgató karjának megnevezése", 
        category: "student",
        filterConfig: { 
            type: "select",
            options: ["Informatikai Kar", "Műszaki Kar", "Gazdaságtudományi Kar", "Természettudományi Kar", "Bölcsészettudományi Kar"]
        },
        sampleData: [
            { id: "s15-1", value: "Informatikai Kar", personName: "Kiss Péter" },
            { id: "s15-2", value: "Gazdaságtudományi Kar", personName: "Nagy Anna" },
            { id: "s15-3", value: "Informatikai Kar", personName: "Szabó János" },
            { id: "s15-4", value: "Műszaki Kar", personName: "Tóth Éva" },
            { id: "s15-5", value: "Műszaki Kar", personName: "Kovács Márk" },
        ]
    },
    { 
        id: "s16", 
        name: "Kreditszám", 
        description: "A hallgató összegyűjtött kreditjeinek száma", 
        category: "student",
        filterConfig: { type: "number" },
        sampleData: [
            { id: "s16-1", value: 90, personName: "Kiss Péter" },
            { id: "s16-2", value: 150, personName: "Nagy Anna" },
            { id: "s16-3", value: 60, personName: "Szabó János" },
            { id: "s16-4", value: 210, personName: "Tóth Éva" },
            { id: "s16-5", value: 120, personName: "Kovács Márk" },
        ]
    },
];

const employeeData: DataItem[] = [
    { 
        id: "e1", 
        name: "Teljes név", 
        description: "Az alkalmazott hivatalos teljes neve", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e1-1", value: "Dr. Horváth László", personName: "Dr. Horváth László" },
            { id: "e1-2", value: "Németh Katalin", personName: "Németh Katalin" },
            { id: "e1-3", value: "Dr. Farkas István", personName: "Dr. Farkas István" },
            { id: "e1-4", value: "Papp Zsuzsanna", personName: "Papp Zsuzsanna" },
            { id: "e1-5", value: "Dr. Molnár Gábor", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e2", 
        name: "Születési év", 
        description: "Az alkalmazott születési éve", 
        category: "employee",
        filterConfig: { type: "number" },
        sampleData: [
            { id: "e2-1", value: 1975, personName: "Dr. Horváth László" },
            { id: "e2-2", value: 1982, personName: "Németh Katalin" },
            { id: "e2-3", value: 1968, personName: "Dr. Farkas István" },
            { id: "e2-4", value: 1990, personName: "Papp Zsuzsanna" },
            { id: "e2-5", value: 1978, personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e3", 
        name: "Születési hely", 
        description: "Az alkalmazott születési helye", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e3-1", value: "Budapest", personName: "Dr. Horváth László" },
            { id: "e3-2", value: "Miskolc", personName: "Németh Katalin" },
            { id: "e3-3", value: "Szeged", personName: "Dr. Farkas István" },
            { id: "e3-4", value: "Debrecen", personName: "Papp Zsuzsanna" },
            { id: "e3-5", value: "Pécs", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e4", 
        name: "Anyja neve", 
        description: "Az alkalmazott anyjának leánykori neve", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e4-1", value: "Kiss Mária", personName: "Dr. Horváth László" },
            { id: "e4-2", value: "Tóth Erzsébet", personName: "Németh Katalin" },
            { id: "e4-3", value: "Szabó Ilona", personName: "Dr. Farkas István" },
            { id: "e4-4", value: "Nagy Judit", personName: "Papp Zsuzsanna" },
            { id: "e4-5", value: "Varga Anna", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e5", 
        name: "Lakcím", 
        description: "Az alkalmazott állandó lakcíme", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e5-1", value: "1052 Budapest, Váci utca 12.", personName: "Dr. Horváth László" },
            { id: "e5-2", value: "3530 Miskolc, Széchenyi utca 8.", personName: "Németh Katalin" },
            { id: "e5-3", value: "6722 Szeged, Tisza Lajos krt. 45.", personName: "Dr. Farkas István" },
            { id: "e5-4", value: "4026 Debrecen, Bethlen utca 3.", personName: "Papp Zsuzsanna" },
            { id: "e5-5", value: "7622 Pécs, Rákóczi út 15.", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e6", 
        name: "E-mail cím", 
        description: "Az alkalmazott munkahelyi e-mail címe", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e6-1", value: "horvath.laszlo@uni.hu", personName: "Dr. Horváth László" },
            { id: "e6-2", value: "nemeth.katalin@uni.hu", personName: "Németh Katalin" },
            { id: "e6-3", value: "farkas.istvan@uni.hu", personName: "Dr. Farkas István" },
            { id: "e6-4", value: "papp.zsuzsanna@uni.hu", personName: "Papp Zsuzsanna" },
            { id: "e6-5", value: "molnar.gabor@uni.hu", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e7", 
        name: "Telefonszám", 
        description: "Az alkalmazott munkahelyi telefonszáma", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e7-1", value: "+36 1 123 4567", personName: "Dr. Horváth László" },
            { id: "e7-2", value: "+36 1 234 5678", personName: "Németh Katalin" },
            { id: "e7-3", value: "+36 1 345 6789", personName: "Dr. Farkas István" },
            { id: "e7-4", value: "+36 1 456 7890", personName: "Papp Zsuzsanna" },
            { id: "e7-5", value: "+36 1 567 8901", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e8", 
        name: "Beosztás", 
        description: "Az alkalmazott munkaköri beosztása", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["Egyetemi tanár", "Docens", "Adjunktus", "Tanársegéd", "Adminisztrátor", "Gazdasági munkatárs"]
        },
        sampleData: [
            { id: "e8-1", value: "Egyetemi tanár", personName: "Dr. Horváth László" },
            { id: "e8-2", value: "Adminisztrátor", personName: "Németh Katalin" },
            { id: "e8-3", value: "Docens", personName: "Dr. Farkas István" },
            { id: "e8-4", value: "Gazdasági munkatárs", personName: "Papp Zsuzsanna" },
            { id: "e8-5", value: "Adjunktus", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e9", 
        name: "Szervezeti egység", 
        description: "Az alkalmazott szervezeti egysége", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["Informatikai Tanszék", "Gazdasági Hivatal", "Rektori Hivatal", "Műszaki Tanszék", "HR Osztály"]
        },
        sampleData: [
            { id: "e9-1", value: "Informatikai Tanszék", personName: "Dr. Horváth László" },
            { id: "e9-2", value: "Rektori Hivatal", personName: "Németh Katalin" },
            { id: "e9-3", value: "Informatikai Tanszék", personName: "Dr. Farkas István" },
            { id: "e9-4", value: "Gazdasági Hivatal", personName: "Papp Zsuzsanna" },
            { id: "e9-5", value: "Műszaki Tanszék", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e10", 
        name: "Munkaviszony kezdete", 
        description: "Az alkalmazott munkaviszonyának kezdő dátuma", 
        category: "employee",
        filterConfig: { type: "date" },
        sampleData: [
            { id: "e10-1", value: "2005-09-01", personName: "Dr. Horváth László" },
            { id: "e10-2", value: "2015-03-15", personName: "Németh Katalin" },
            { id: "e10-3", value: "2000-09-01", personName: "Dr. Farkas István" },
            { id: "e10-4", value: "2020-01-10", personName: "Papp Zsuzsanna" },
            { id: "e10-5", value: "2010-09-01", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e11", 
        name: "Munkaviszony típusa", 
        description: "A munkaviszony típusa (határozatlan, határozott, stb.)", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["Határozatlan idejű", "Határozott idejű", "Megbízási", "Óraadó"]
        },
        sampleData: [
            { id: "e11-1", value: "Határozatlan idejű", personName: "Dr. Horváth László" },
            { id: "e11-2", value: "Határozatlan idejű", personName: "Németh Katalin" },
            { id: "e11-3", value: "Határozatlan idejű", personName: "Dr. Farkas István" },
            { id: "e11-4", value: "Határozott idejű", personName: "Papp Zsuzsanna" },
            { id: "e11-5", value: "Határozatlan idejű", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e12", 
        name: "Munkaidő", 
        description: "A munkaidő típusa (teljes, részmunkaidő)", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["Teljes munkaidő", "Részmunkaidő", "4 órás", "6 órás"]
        },
        sampleData: [
            { id: "e12-1", value: "Teljes munkaidő", personName: "Dr. Horváth László" },
            { id: "e12-2", value: "Teljes munkaidő", personName: "Németh Katalin" },
            { id: "e12-3", value: "Teljes munkaidő", personName: "Dr. Farkas István" },
            { id: "e12-4", value: "Részmunkaidő", personName: "Papp Zsuzsanna" },
            { id: "e12-5", value: "Teljes munkaidő", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e13", 
        name: "Felettes neve", 
        description: "Az alkalmazott közvetlen felettesének neve", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e13-1", value: "Dr. Varga Béla", personName: "Dr. Horváth László" },
            { id: "e13-2", value: "Dr. Kiss Andrea", personName: "Németh Katalin" },
            { id: "e13-3", value: "Dr. Varga Béla", personName: "Dr. Farkas István" },
            { id: "e13-4", value: "Fekete Tibor", personName: "Papp Zsuzsanna" },
            { id: "e13-5", value: "Dr. Varga Béla", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e14", 
        name: "Tudományos fokozat", 
        description: "Az alkalmazott tudományos fokozata", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["PhD", "CSc", "DSc", "Habilitált", "Nincs"]
        },
        sampleData: [
            { id: "e14-1", value: "DSc", personName: "Dr. Horváth László" },
            { id: "e14-2", value: "Nincs", personName: "Németh Katalin" },
            { id: "e14-3", value: "PhD", personName: "Dr. Farkas István" },
            { id: "e14-4", value: "Nincs", personName: "Papp Zsuzsanna" },
            { id: "e14-5", value: "PhD", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e15", 
        name: "Nyelvismeret", 
        description: "Az alkalmazott nyelvtudása", 
        category: "employee",
        filterConfig: { 
            type: "select",
            options: ["Angol", "Német", "Francia", "Orosz", "Spanyol", "Olasz"]
        },
        sampleData: [
            { id: "e15-1", value: "Angol", personName: "Dr. Horváth László" },
            { id: "e15-2", value: "Német", personName: "Németh Katalin" },
            { id: "e15-3", value: "Angol", personName: "Dr. Farkas István" },
            { id: "e15-4", value: "Angol", personName: "Papp Zsuzsanna" },
            { id: "e15-5", value: "Francia", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e16", 
        name: "TAJ szám", 
        description: "Az alkalmazott társadalombiztosítási azonosító jele", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e16-1", value: "123 456 789", personName: "Dr. Horváth László" },
            { id: "e16-2", value: "234 567 890", personName: "Németh Katalin" },
            { id: "e16-3", value: "345 678 901", personName: "Dr. Farkas István" },
            { id: "e16-4", value: "456 789 012", personName: "Papp Zsuzsanna" },
            { id: "e16-5", value: "567 890 123", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e17", 
        name: "Adóazonosító", 
        description: "Az alkalmazott adóazonosító jele", 
        category: "employee",
        filterConfig: { type: "text" },
        sampleData: [
            { id: "e17-1", value: "8123456789", personName: "Dr. Horváth László" },
            { id: "e17-2", value: "8234567890", personName: "Németh Katalin" },
            { id: "e17-3", value: "8345678901", personName: "Dr. Farkas István" },
            { id: "e17-4", value: "8456789012", personName: "Papp Zsuzsanna" },
            { id: "e17-5", value: "8567890123", personName: "Dr. Molnár Gábor" },
        ]
    },
    { 
        id: "e18", 
        name: "Munkába lépés éve", 
        description: "Az alkalmazott munkába lépésének éve", 
        category: "employee",
        filterConfig: { type: "number" },
        sampleData: [
            { id: "e18-1", value: 2005, personName: "Dr. Horváth László" },
            { id: "e18-2", value: 2015, personName: "Németh Katalin" },
            { id: "e18-3", value: 2000, personName: "Dr. Farkas István" },
            { id: "e18-4", value: 2020, personName: "Papp Zsuzsanna" },
            { id: "e18-5", value: 2010, personName: "Dr. Molnár Gábor" },
        ]
    },
];

export const allMockData: DataItem[] = [...studentData, ...employeeData];

export const getDataByCategories = (categories: ("student" | "employee")[]): DataItem[] => {
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
