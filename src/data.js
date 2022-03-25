// synthetic data adapted from https://github.com/c3g/chord_demo_dataset

export const phenotypicFeatures = {
  "Abnormal cellular phenotype": 67,
  "Abnormality of blood and blood-forming tissues": 105,
  "Abnormality of head or neck": 18,
  "Abnormality of limbs": 66,
  "Abnormality of metabolism/homeostasis": 23,
  "Abnormality of the breast": 44,
  "Abnormality of the cardiovascular system": 33,
  "Abnormality of the digestive system": 55,
  "Abnormality of the ear": 13,
  "Abnormality of the endocrine system": 27,
  "Abnormality of the eye": 17,
  "Abnormality of the genitourinary system": 16,
  "Abnormality of the immune system": 25,
  "Abnormality of the integument": 3,
  "Abnormality of the musculoskeletal system": 67,
  "Abnormality of the nervous system": 43,
  "Abnormality of the respiratory system": 35,
  "Abnormality of the thoracic cavity": 98,
  "Abnormality of the voice": 102,
  "Constitutional symptom": 21,
  "Growth abnormality": 12,
  "Neoplasm": 3,
};

export const age = {
  20: 28,
  21: 40,
  22: 34,
  23: 3,
  24: 33,
  25: 6,
  26: 36,
  27: 36,
  28: 12,
  29: 26,
  30: 25,
  31: 8,
  32: 41,
  33: 33,
  34: 12,
  35: 27,
  36: 1,
  37: 22,
  38: 37,
  39: 34,
  40: 30,
  41: 30,
  42: 48,
  43: 29,
  44: 12,
  45: 31,
  46: 40,
  47: 22,
  48: 32,
  49: 29,
  50: 29,
  51: 37,
  52: 26,
  53: 34,
  54: 32,
  55: 38,
  56: 31,
  57: 3,
  58: 12,
  59: 20,
  60: 12,
  61: 39,
  62: 22,
  63: 12,
  64: 20,
  65: 17,
  66: 28,
  67: 12,
  68: 18,
  69: 12,
  70: 41,
  71: 26,
  72: 28,
  73: 32,
  74: 43,
  75: 34,
  76: 34,
  77: 30,
  78: 30,
  79: 34,
  80: 23,
  81: 30,
  82: 12,
  83: 7,
  84: 7,
  85: 6,
  86: 8,
  87: 8,
  89: 9,
  90: 2,
  91: 1,
  92: 9,
  93: 2,
  94: 6,
  95: 2,
  96: 1,
  100: 2,
  101: 1,
};

export const sex = {
  "FEMALE": 1015,
  "MALE": 1183,
  "OTHER_SEX": 0,
  "UNKNOWN_SEX": 2995,
};

// synthetic public dashboard data, array of object format
export const ages_array = [
  { x: "0", y: 66 },
  { x: "10", y: 75 },
  { x: "20", y: 221 },
  { x: "30", y: 265 },
  { x: "40", y: 316 },
  { x: "50", y: 321 },
  { x: "60", y: 318 },
  { x: "70", y: 178 },
  { x: "80", y: 167 },
  { x: "90", y: 177 },
  { x: "100", y: 29 },
];

export const experiment_type_array = [
  { x: "DNA Methylation", y: 490 },
  { x: "Histone H3K4me1", y: 480 },
  { x: "RNA-Seq", y: 521 },
  { x: "mRNA-Seq", y: 502 },
  { x: "smRNA-Seq", y: 515 },
  { x: "missing", y: 212}
];
export const sex_array = [
  { x: "FEMALE", y: 1271 },
  { x: "MALE", y: 1233 },
];

// edge case data

export const singleton_category = {
  "only_category": 29,
};
