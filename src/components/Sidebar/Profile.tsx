import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/paulohenriquerosa.png"
      />
      <div className="truncate text-zinc-500">
        <span className="block text-sm font-semibold text-zinc-700">
          Paulo Henrique Rosa
        </span>
        <span className="text-sm text-zinc-500">
          paulohenriquerosa04@gmail.com
        </span>
      </div>
      <Button
        variant="ghost"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50"
        type="button"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
