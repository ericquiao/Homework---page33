const fs = require('fs/promises')
const fse = require('fs-extra')

const src = './pics/pic1.jpg'
const dest = './newpics/pic1.jpg'

async function example (src, dest) {
  try {
    await fse.move(src, dest)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example(src, dest)