import fs from 'fs'
import path from 'path'
import showdown from 'showdown'

const HEAD_TAGS = [
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">',
  '<style>body{margin: 10vh 15vw;}pre{background-color: var(--bs-gray-200);padding: 1rem;}</style>',
].join('')

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
      converter.setFlavor('github')

      resolve(`${HEAD_TAGS}${converter.makeHtml(stringFromReadme)}`)
    } catch (err) {
      reject(err)
    }
  })
