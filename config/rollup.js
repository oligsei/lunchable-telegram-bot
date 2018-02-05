import rollupPrepackPlugin from 'rollup-plugin-prepack';
import rollupTypescriptPlugin from 'rollup-plugin-typescript';

import typescript from 'typescript';
import tsconfig from '../tsconfig.json';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        rollupTypescriptPlugin({
            typescript,
            tsconfig
        }),
        rollupPrepackPlugin()
    ]
};
