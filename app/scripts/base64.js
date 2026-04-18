import { open } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'

import { getargs } from './getargs.js'

/**
 * Converts an input file to base64 format.
 * This requires `process.argv` input parameters from the command line.
 * @usage
 * ```sh
 * npm run base64 -- input=./path/to/input.txt output=./path/to/output.txt
 * ```
 */
const main = async () => {
  let readHandle
  let writeHandle

  try {
    const args = getargs({
      params: ['input', 'output'],
    })

    const { input: inputFile, output: outputFilePath } = args

    // File handles
    readHandle = await open(inputFile)
    writeHandle = await open(outputFilePath, 'w')

    // Streams
    const readable = readHandle.createReadStream({ encoding: 'base64' })
    const writeable = writeHandle.createWriteStream()

    // Write converted base64 to file
    await pipeline(readable, writeable)
  } catch (err) {
    console.error(`[ERROR]: ${err.message}`)

    process.exitCode = 1
  } finally {
    await Promise.allSettled([
      readHandle.close(),
      writeHandle.close(),
    ])
  }
}

main()
