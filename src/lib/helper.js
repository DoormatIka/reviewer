/**
 * @param {any} obj
 */
export function serializeNonPOJOs(obj) {
  return JSON.parse(JSON.stringify(obj))
}