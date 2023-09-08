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
      files: [
        {
          destination: 'index.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
}
