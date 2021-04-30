# Repro Tailwind JIT + Snowpack requiring snowpack restarts

## Repro

1. `yarn`
2. `yarn start`
3. Change `text-red-900` to `text-blue-900` and save the file.

## Expected

Tailwind JIT picks up the change and rebuilds the CSS and HMR loads the new class.

## Actual

HMR loads the new class, but the CSS is not rebuilt so it does not have the `text-blue-900` style.

## Notes

This plugin improves things: https://github.com/jadex/snowpack-plugin-tailwindcss-jit
