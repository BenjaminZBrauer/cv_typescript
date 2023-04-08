import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser" 
import clear from "rollup-plugin-clear"
import { isDev, files } from "./.build/Rollup.js"

export default [
    {
        input: [
            ...files("src/ts"),
            ...files("src/ts/pages")
        ],
        output: {
            dir: "public/js",
            format: "system",
            sourcemap: isDev()
        },
        plugins: [
            clear({
                targets:['public/js'],
                watch: true
            }),
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            !isDev() && terser(
                {
                    format: {
                        comments: false
                    }
                }
            )
        ]
    },
    {
        input: "node_modules/systemjs/dist/system.js",
        output: {
            dir: "public/lib"
        },
        plugins: [
            terser(
                {
                    format: {
                        comments: false
                    }
                }
            )
        ]

    }
] 