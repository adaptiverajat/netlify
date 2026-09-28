import { useRef, useState } from 'react'
import { Pencil, Check, RotateCcw, Download, Upload } from 'lucide-react'
import { useSiteContent } from '@/lib/site-content-context'

export function EditControls() {
  const { editMode, setEditMode, reset, exportContent, importContent, hasSavedEdits } =
    useSiteContent()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [confirmingReset, setConfirmingReset] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 print:hidden">
      {editMode && (
        <div className="flex max-w-xs flex-wrap items-center justify-end gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur">
          <span className="mr-1 text-xs text-muted-foreground">
            Click any text on the page to edit it. Changes save automatically in this
            browser.
          </span>
          <button
            onClick={exportContent}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
          >
            <Download size={12} /> Export
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
          >
            <Upload size={12} /> Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (!file) return
              try {
                await importContent(file)
              } catch {
                alert(
                  'Could not read that file. Make sure it is a JSON export from this page.',
                )
              }
              e.target.value = ''
            }}
          />
          <button
            onClick={() => {
              if (confirmingReset) {
                reset()
                setConfirmingReset(false)
              } else {
                setConfirmingReset(true)
                setTimeout(() => setConfirmingReset(false), 3000)
              }
            }}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
          >
            <RotateCcw size={12} /> {confirmingReset ? 'Click to confirm' : 'Reset'}
          </button>
        </div>
      )}
      <button
        onClick={() => setEditMode(!editMode)}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-90"
      >
        {editMode ? <Check size={16} /> : <Pencil size={16} />}
        {editMode ? 'Done editing' : 'Edit page'}
      </button>
      {!editMode && hasSavedEdits && (
        <span className="rounded bg-card/90 px-2 py-0.5 text-[11px] text-muted-foreground shadow">
          Showing your saved edits
        </span>
      )}
    </div>
  )
}
