'use server'

import { ContactType } from '@/components/Forms/ContactType'
import sendToGoogleSheets from '@/service/sendGoogleSheet'

export async function sendContactAction(
  prevState: unknown,
  formData: FormData
) {
  try {
    const data: ContactType = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    }
    
    // await new Promise(resolve => setTimeout(() => resolve(1), 4000));
    await sendToGoogleSheets(data)

    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send message' }
  }
}