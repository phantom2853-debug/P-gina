/**
 * ════════════════════════════════════════════════════════════════
 *  ARCHIVO: comun.js
 *  Contiene: catálogo de temas de fortalecimiento (para el reporte PDF)
 *  y funciones compartidas entre todas las páginas del sitio.
 *
 *  CÓMO EDITAR LOS TEMAS:
 *  Cada municipio en datos.js tiene un número "temas_fortalecimiento".
 *  Aquí abajo defines la LISTA COMPLETA de temas posibles. El sistema
 *  toma esa lista, separa automáticamente cuáles están "fortalecidos"
 *  (los primeros N según el municipio) y cuáles quedan como
 *  "sugeridos" (el resto), para generar el reporte PDF.
 *
 *  Cuando tengas tu Excel real, lo ideal es agregar una columna por
 *  cada tema con "Sí/No" y ajustar la función obtenerTemasMunicipio()
 *  más abajo para leer esas columnas en vez de usar el número.
 * ════════════════════════════════════════════════════════════════
 */

window.CATALOGO_TEMAS = [
  "Plan Municipal de Respuesta actualizado",
  "Mapa de riesgo municipal vigente",
  "Centro de Operaciones de Emergencia (COE) habilitado",
  "Inventario de recursos y equipo actualizado",
  "Brigadistas comunitarios capacitados",
  "Sistema de alerta temprana funcionando",
  "Simulacro realizado en el último año",
  "Protocolo de evacuación comunitaria",
  "Convenios de cooperación interinstitucional",
  "Equipo de protección personal (EPP) disponible",
  "Red de comunicación de emergencia (radios/redundancia)",
  "Capacitación en primeros auxilios y rescate",
  "Análisis de vulnerabilidad territorial",
  "Uso de sistemas de información geográfica (SIG)",
  "Rendición de cuentas ante la coordinadora departamental"
];

/**
 * Devuelve los temas "fortalecidos" y "sugeridos" para un municipio,
 * según su número de temas_fortalecimiento (dato de ejemplo).
 * Usa una selección pseudo-aleatoria pero estable (mismo municipio
 * siempre da el mismo resultado) basada en el nombre del municipio.
 */
function obtenerTemasMunicipio(dato) {
  const total = window.CATALOGO_TEMAS.length;
  const cantidadFortalecidos = Math.min(dato.temas_fortalecimiento || 0, total);

  // Hash simple y estable a partir del nombre del municipio
  let seed = 0;
  const str = dato.municipio + dato.departamento;
  for (let i = 0; i < str.length; i++) seed = (seed * 31 + str.charCodeAt(i)) % 100000;

  // Generar un orden "aleatorio" pero estable de índices
  const indices = [...Array(total).keys()];
  for (let i = indices.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const idxFortalecidos = indices.slice(0, cantidadFortalecidos);
  const idxSugeridos    = indices.slice(cantidadFortalecidos);

  return {
    fortalecidos: idxFortalecidos.map(i => window.CATALOGO_TEMAS[i]),
    sugeridos:    idxSugeridos.map(i => window.CATALOGO_TEMAS[i])
  };
}
