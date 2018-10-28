import * as debug from 'debug'

/**
 *
 * @param {string} prefix
 * @returns {(__filename: string) => ReturnType<typeof createLogger>}
 */
export function createLogger(prefix: string): (__filename: string) => ReturnType<typeof createLogger>
/**
 * @param {string} prefix - project name
 * @param {string} __filename - must __filename
 * @returns {debug.IDebugger}
 */
export function createLogger(prefix: string, __filename: string)
export function createLogger(prefix: string, __filename?: string) {
  if (__filename === undefined) {
    return (__filename: string) => createLogger(prefix, __filename)
  }
  const suffix = __filename.split('/').slice(-2).join('/')
  return debug(`prefix:${suffix}`)
}

export default createLogger
