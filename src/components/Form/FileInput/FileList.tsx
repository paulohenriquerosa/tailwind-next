'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file, index) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            index={index}
            size={file.size}
            state="error"
          />
        )
      })}
    </div>
  )
}
