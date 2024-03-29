'use client'
import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectRadix.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Root({ placeholder, children, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger className=" flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600">
        <SelectRadix.Value placeholder={placeholder} className="text-black" />
        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg"
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
