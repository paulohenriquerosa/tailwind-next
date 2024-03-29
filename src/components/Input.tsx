import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

function Control(props: ControlProps) {
  return (
    <input
      className="box-border w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

function Root(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}

export const Input = {
  Prefix,
  Root,
  Control,
}
