import typescript from "@rollup/plugin-typescript"

function operatingMode() {
    return !!(process.argv.find(el => el == "--config-dev"))
}
export default [
    {
        input: "src/ts/app.ts",
        output: {
            dir: "public/js",
            format: "esm",
            sourcemap: operatingMode()
        },
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json"
            })
        ]
    }
]