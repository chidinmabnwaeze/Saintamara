import { useEffect } from 'react'

type ToastProps = {
  visible: boolean
  message: string
  type?: 'info' | 'success' | 'error'
  duration?: number
  onClose?: () => void
}

export function Toast({ visible, message, type = 'info', duration = 4000, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => onClose && onClose(), duration)
    return () => clearTimeout(t)
  }, [visible, duration, onClose])

  if (!visible) return null

  const base = 'fixed right-6 bottom-6 z-50 max-w-sm rounded-lg px-4 py-3 shadow-lg'
  const variants: Record<string, string> = {
    info: `${base} bg-navy text-ivory ring-1 ring-navy/10`,
    success: `${base} bg-green-600 text-white`,
    error: `${base} bg-rose-600 text-white`,
  }

  return (
    <div role="status" aria-live="polite" className={variants[type || 'info']}>
      <div className="flex items-center gap-3">
        <div className="text-sm">{message}</div>
        <button
          onClick={() => onClose && onClose()}
          className="ml-auto text-sm opacity-80 hover:opacity-100"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default Toast
