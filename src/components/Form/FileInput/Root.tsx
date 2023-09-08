'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onFileSelected: (files: File[], multiple: boolean) => void
  removeByIndex: (index: number) => void
}

const FileInputContext = createContext<FileInputContextType>(
  {} as FileInputContextType,
)

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()

  const [files, setFiles] = useState<File[]>([])

  function onFileSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    }
  }

  function removeByIndex(index: number) {
    files.splice(index, 1)
    setFiles([...files])
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFileSelected, removeByIndex }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}
export const useFileInput = () => useContext(FileInputContext)
