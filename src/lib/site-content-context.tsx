import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { defaultContent, type SiteContent } from '@/data/site-content'

const STORAGE_KEY = 'rajat-portfolio-content-v1'

export type ContentPath = (string | number)[]

export function getValue(obj: any, path: ContentPath): any {
  return path.reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}

function setValueImmutable(obj: any, path: ContentPath, value: any): any {
  if (path.length === 0) return value
  const [key, ...rest] = path
  const base = obj == null ? (typeof key === 'number' ? [] : {}) : obj
  const clone: any = Array.isArray(base) ? [...base] : { ...base }
  clone[key as any] = setValueImmutable(base[key as any], rest, value)
  return clone
}

interface SiteContentApi {
  content: SiteContent
  editMode: boolean
  setEditMode: (v: boolean) => void
  setValue: (path: ContentPath, value: any) => void
  addItem: (path: ContentPath, template: any) => void
  removeItem: (path: ContentPath, index: number) => void
  reset: () => void
  exportContent: () => void
  importContent: (file: File) => Promise<void>
  hasSavedEdits: boolean
}

const SiteContentContext = createContext<SiteContentApi | null>(null)

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent)
  const [editMode, setEditMode] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [hasSavedEdits, setHasSavedEdits] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setContent(JSON.parse(raw))
        setHasSavedEdits(true)
      }
    } catch {
      // ignore corrupt storage, fall back to defaults
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
    setHasSavedEdits(true)
  }, [content, hydrated])

  const setValue = (path: ContentPath, value: any) => {
    setContent((prev) => setValueImmutable(prev, path, value))
  }

  const addItem = (path: ContentPath, template: any) => {
    setContent((prev) => {
      const arr = getValue(prev, path) ?? []
      return setValueImmutable(prev, path, [...arr, template])
    })
  }

  const removeItem = (path: ContentPath, index: number) => {
    setContent((prev) => {
      const arr = getValue(prev, path) ?? []
      return setValueImmutable(
        prev,
        path,
        arr.filter((_: any, i: number) => i !== index),
      )
    })
  }

  const reset = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    setContent(defaultContent)
    setHasSavedEdits(false)
  }

  const exportContent = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'site-content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importContent = async (file: File) => {
    const text = await file.text()
    const parsed = JSON.parse(text)
    setContent(parsed)
  }

  return (
    <SiteContentContext.Provider
      value={{
        content,
        editMode,
        setEditMode,
        setValue,
        addItem,
        removeItem,
        reset,
        exportContent,
        importContent,
        hasSavedEdits,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  )
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext)
  if (!ctx) {
    throw new Error('useSiteContent must be used within SiteContentProvider')
  }
  return ctx
}
