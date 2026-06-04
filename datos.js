/**
 * ════════════════════════════════════════════════════════════════
 *  CORED — MATRIZ DE COORDINADORAS
 *  Archivo: datos.js
 *
 *  INSTRUCCIONES PARA ACTUALIZAR DESDE EXCEL:
 *  1. Abre tu archivo Excel (.xlsx) con los datos de coordinadoras.
 *  2. Asegúrate de que tenga estas columnas (exactamente con esos nombres):
 *       nombre_coordinadora | departamento | municipio | lat | lng |
 *       nivel               | temas_fortalecimiento
 *  3. Guarda el Excel como CSV (Archivo → Guardar como → CSV UTF-8).
 *  4. Pega los datos en el arreglo CORED_DATA abajo, siguiendo el
 *     formato de cada objeto { ... }.
 *
 *  COLUMNAS OBLIGATORIAS:
 *  ┌──────────────────────────┬────────────────────────────────────────────────────┐
 *  │ Campo                    │ Descripción                                        │
 *  ├──────────────────────────┼────────────────────────────────────────────────────┤
 *  │ nombre_coordinadora      │ Nombre oficial de la coordinadora (COMRED, CODRED) │
 *  │ departamento             │ Nombre del departamento                            │
 *  │ municipio                │ Nombre del municipio                               │
 *  │ lat                      │ Latitud decimal (ej. 14.6420)                      │
 *  │ lng                      │ Longitud decimal (ej. -90.5130)                    │
 *  │ nivel                    │ "Alto" | "Medio" | "Bajo"                          │
 *  │ temas_fortalecimiento    │ Número entero (cantidad de temas activos)          │
 *  └──────────────────────────┴────────────────────────────────────────────────────┘
 *
 *  CÓMO OBTENER LATITUD/LONGITUD:
 *  - Busca el municipio en Google Maps → clic derecho → "¿Qué hay aquí?"
 *  - O usa: https://www.latlong.net/
 *
 * ════════════════════════════════════════════════════════════════
 */

window.CORED_DATA = [

  // ── GUATEMALA ──────────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Guatemala",
    departamento:          "Guatemala",
    municipio:             "Guatemala",
    lat:                   14.6420,
    lng:                   -90.5130,
    nivel:                 "Alto",
    temas_fortalecimiento: 12
  },
  {
    nombre_coordinadora:   "COMRED Mixco",
    departamento:          "Guatemala",
    municipio:             "Mixco",
    lat:                   14.6306,
    lng:                   -90.6073,
    nivel:                 "Alto",
    temas_fortalecimiento: 10
  },
  {
    nombre_coordinadora:   "COMRED Villa Nueva",
    departamento:          "Guatemala",
    municipio:             "Villa Nueva",
    lat:                   14.5249,
    lng:                   -90.5888,
    nivel:                 "Medio",
    temas_fortalecimiento: 7
  },

  // ── SACATEPÉQUEZ ───────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Antigua Guatemala",
    departamento:          "Sacatepéquez",
    municipio:             "Antigua Guatemala",
    lat:                   14.5586,
    lng:                   -90.7343,
    nivel:                 "Alto",
    temas_fortalecimiento: 11
  },
  {
    nombre_coordinadora:   "COMRED Jocotenango",
    departamento:          "Sacatepéquez",
    municipio:             "Jocotenango",
    lat:                   14.5701,
    lng:                   -90.7385,
    nivel:                 "Medio",
    temas_fortalecimiento: 6
  },

  // ── ESCUINTLA ──────────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Escuintla",
    departamento:          "Escuintla",
    municipio:             "Escuintla",
    lat:                   14.3049,
    lng:                   -90.7858,
    nivel:                 "Alto",
    temas_fortalecimiento: 9
  },
  {
    nombre_coordinadora:   "COMRED Santa Lucía Cotzumalguapa",
    departamento:          "Escuintla",
    municipio:             "Santa Lucía Cotzumalguapa",
    lat:                   14.3393,
    lng:                   -91.0180,
    nivel:                 "Medio",
    temas_fortalecimiento: 5
  },

  // ── QUETZALTENANGO ─────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Quetzaltenango",
    departamento:          "Quetzaltenango",
    municipio:             "Quetzaltenango",
    lat:                   14.8348,
    lng:                   -91.5185,
    nivel:                 "Alto",
    temas_fortalecimiento: 10
  },
  {
    nombre_coordinadora:   "COMRED Coatepeque",
    departamento:          "Quetzaltenango",
    municipio:             "Coatepeque",
    lat:                   14.7018,
    lng:                   -91.8641,
    nivel:                 "Medio",
    temas_fortalecimiento: 6
  },

  // ── IZABAL ─────────────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Puerto Barrios",
    departamento:          "Izabal",
    municipio:             "Puerto Barrios",
    lat:                   15.7278,
    lng:                   -88.5974,
    nivel:                 "Medio",
    temas_fortalecimiento: 7
  },

  // ── CHIMALTENANGO ──────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Chimaltenango",
    departamento:          "Chimaltenango",
    municipio:             "Chimaltenango",
    lat:                   14.6613,
    lng:                   -90.8190,
    nivel:                 "Medio",
    temas_fortalecimiento: 6
  },

  // ── ALTA VERAPAZ ───────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Cobán",
    departamento:          "Alta Verapaz",
    municipio:             "Cobán",
    lat:                   15.4694,
    lng:                   -90.3783,
    nivel:                 "Medio",
    temas_fortalecimiento: 5
  },

  // ── SAN MARCOS ─────────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED San Marcos",
    departamento:          "San Marcos",
    municipio:             "San Marcos",
    lat:                   14.9633,
    lng:                   -91.7958,
    nivel:                 "Bajo",
    temas_fortalecimiento: 3
  },

  // ── PETÉN ──────────────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Flores",
    departamento:          "Petén",
    municipio:             "Flores",
    lat:                   16.9335,
    lng:                   -89.8936,
    nivel:                 "Bajo",
    temas_fortalecimiento: 2
  },

  // ── HUEHUETENANGO ──────────────────────────────────────────────
  {
    nombre_coordinadora:   "COMRED Huehuetenango",
    departamento:          "Huehuetenango",
    municipio:             "Huehuetenango",
    lat:                   15.3197,
    lng:                   -91.4724,
    nivel:                 "Bajo",
    temas_fortalecimiento: 2
  }

  // ── AGREGA MÁS COORDINADORAS AQUÍ ─────────────────────────────
  // Copia el bloque de arriba y cambia los valores.
  // No olvides la coma al final de cada objeto (excepto el último).

];
