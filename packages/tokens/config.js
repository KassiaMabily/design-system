/* eslint-disable @typescript-eslint/no-var-requires */
const tokens = require('./figma')

// {
//   "source": ["src/input/**/*.json"],
//   "platforms": {
//     "js": {
//       "transformGroup": "js",
//       "buildPath": "src/figma",
//       "files": [{
//         "destination": "colors.ts",
//         "format": "javascript/es6"
//       }]
//     }
//   }
// }

module.exports = {
  source: ['figma/**/*.json'],
  platforms: {
    'esm/category': {
      buildPath: 'src/figma/',
      transforms: ['attribute/cti', 'name/cti/camel', 'size/px', 'color/hex'],
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.ts`,
        format: 'javascript/es6',
        filter: {
          attributes: {
            category: tokenCategory,
          },
        },
      })),
    },
  },
}
