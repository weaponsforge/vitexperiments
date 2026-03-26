/**
 * Get the node script argument input values
 * @param {string[]} params - Array of script input arguments
 * @param {optional[]} optional - Array of optional script input arguments
 * @usage
 *   - Function call: `getargs({ params: ['arg1', 'arg2'] })`
 *   - Script: `npm run myscript -- arg1=test arg2=hello`
 * @throws {Error} - Undefined input argument/s from `params`
 * @returns {object} Input params with user-input values
 */
export const getargs = ({
  params = [],
  optional = []
}) => {
  /* eslint-disable no-undef */
  const args = process.argv.slice(2)

  const inputObject = args.reduce((list, item) => {
    const separatorIndex = item.indexOf("=")
    const key = separatorIndex >= 0 ? item.slice(0, separatorIndex) : item
    const value = separatorIndex >= 0 ? item.slice(separatorIndex + 1) : undefined

    if (params.includes(key)) {
      list[key] = value
    }

    return list
  }, {})

  params.forEach(param => {
    if (inputObject[param] === undefined && !optional.includes(param)) {
      throw new Error(`Undefined args "${param}"`)
    }
  })

  return inputObject
}
