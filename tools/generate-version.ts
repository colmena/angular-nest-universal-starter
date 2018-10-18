import { gitDescribeSync } from 'git-describe'
import { join, relative } from 'path'
import { writeFileSync } from 'fs-extra'

const { version, name, description, repository, homepage } = require('../package.json')

const result = {
  name,
  description,
  repository,
  homepage,
  version,
  ...gitDescribeSync({
    dirtyMark: false,
    dirtySemver: false,
  })
}

const file = join(process.cwd(), 'libs', 'core', 'src', 'version.ts')

writeFileSync(file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(result, null, 4)};
/* tslint:enable */
`, { encoding: 'utf-8' })

console.log(`Wrote version info ${result.raw} to ${relative(process.cwd(), file)}`)
