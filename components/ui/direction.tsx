"use client"

import * as React from "react"
import * as Direction from "@radix-ui/react-direction"

function DirectionProviderComponent({
  dir,
  direction,
  children,
}: React.ComponentProps<typeof Direction.DirectionProvider> & {
  direction?: React.ComponentProps<typeof Direction.DirectionProvider>["dir"]
}) {
  return (
    <Direction.DirectionProvider dir={direction ?? dir}>
      {children}
    </Direction.DirectionProvider>
  )
}

const useDirection = Direction.useDirection

export { DirectionProviderComponent as DirectionProvider, useDirection }
