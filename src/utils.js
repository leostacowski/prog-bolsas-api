import fs from 'fs'
import path from 'path'
import showdown from 'showdown'

export const getReadmeAsString = () =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(process.cwd(), 'README.md'),
      'utf8',
      (err, data) => {
        if (err) reject(err)

        resolve(data)
      },
    )
  })

export const getHTMLFromReadme = () =>
  new Promise(async (resolve, reject) => {
    try {
      const stringFromReadme = await getReadmeAsString()
      const converter = new showdown.Converter()

      resolve(converter.makeHtml(stringFromReadme))
    } catch (err) {
      reject(err)
    }
  })
