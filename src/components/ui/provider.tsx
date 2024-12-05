"use client"

import { ChakraProvider, createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "Figtree, sans-serif" },
        heading: { value: "Figtree, sans-serif" },
      },
    },
  },
  // preflight: false,  
})

const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
