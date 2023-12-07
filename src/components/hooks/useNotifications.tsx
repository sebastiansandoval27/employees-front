import { Toaster, toast } from 'sonner'

export const useNotifications = () => {
  const showToast = (
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'success'
  ) => {
    toast[type](message, {
      duration: 2000,
      position: 'top-center',
    })
  }

  return {
    Toaster,
    showToast,
  }
}
