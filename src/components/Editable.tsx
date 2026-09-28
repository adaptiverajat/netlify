import type { FocusEvent, JSX } from 'react'
import { cn } from '@/lib/utils'
import { getValue, useSiteContent, type ContentPath } from '@/lib/site-content-context'

interface EditableTextProps {
  path: ContentPath
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function EditableText({ path, as = 'span', className }: EditableTextProps) {
  const { content, editMode, setValue } = useSiteContent()
  const value = (getValue(content, path) ?? '') as string
  const Tag = as as any

  return (
    <Tag
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={(e: FocusEvent<HTMLElement>) => {
        if (!editMode) return
        setValue(path, e.currentTarget.innerText)
      }}
      className={cn(
        className,
        editMode &&
          'rounded outline-dashed outline-1 outline-primary/30 hover:outline-primary/60 focus:outline-primary focus:outline-2 cursor-text',
      )}
    >
      {value}
    </Tag>
  )
}
