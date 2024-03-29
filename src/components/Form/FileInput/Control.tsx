'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFileSelected } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)
    onFileSelected(files, multiple)
  }

  return (
    <input
      {...props}
      type="file"
      onChange={handleFileSelected}
      className="sr-only"
      multiple={multiple}
      id={id}
    />
  )
}
