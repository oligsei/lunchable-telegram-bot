import rollupTypescriptPlugin from 'rollup-plugin-typescript2'
import rollupClosureCompilerPlugin from '@ampproject/rollup-plugin-closure-compiler'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: ['https', 'querystring'],
  plugins: [
    rollupTypescriptPlugin({
      clean: true,
      tsconfig: './config/tsconfig.json',
      languageOut: 'ECMASCRIPT6',
      languageIn: 'ECMASCRIPT6'
    }),
    rollupClosureCompilerPlugin({
      env: 'CUSTOM',
      useTypesForOptimization: true
    })
  ]
}
