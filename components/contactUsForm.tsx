'use client'

import React, { useState, useTransition } from 'react'
import { z } from 'zod'
import InputBox from './inputBox'
import { cn } from '@/utils/utils'

const contactUsSchema = z.object({
  reason: z.string().min(1, 'Please select a reason for inquiry'),
  name: z.string().min(1, 'Please enter your full name'),
  phone: z
    .string()
    .regex(/^\d+$/, 'Please enter a valid phone number')
    .min(1, 'Please enter your phone number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Please enter a message')
})

type ContactUsFormValues = z.infer<typeof contactUsSchema>

const firstGrid = [
  {
    label: 'Reason for inquiry*',
    type: 'select',
    value: 'reason',
    col: 'col-span-2'
  },
  {
    label: 'Full Name',
    type: 'text',
    value: 'name',
    col: 'md:col-span-1 col-span-2'
  },
  {
    label: 'Phone Number',
    type: 'tel',
    value: 'phone',
    col: 'md:col-span-1 col-span-2'
  },
  {
    label: 'Email Address*',
    type: 'text',
    value: 'email',
    col: 'col-span-2'
  }
]

const fields = [
  { firstGrid, col: 'col-span-2' },
  {
    label: 'Message*',
    type: 'textArea',
    value: 'message'
  }
]

export default function ContactUsForm() {
  const [isPending, startTransition] = useTransition()
  const [isError, setIsError] = useState(false)

  const [formValues, setFormValues] = useState<ContactUsFormValues>({
    reason: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactUsFormValues, string>>>({})
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))

    const fieldValidation = z
      .object({ [name]: contactUsSchema.shape[name as keyof ContactUsFormValues] })
      .safeParse({ [name]: value })

    if (!fieldValidation.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldValidation.error.errors[0].message
      }))
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = contactUsSchema.safeParse(formValues)
    if (!result.success) {
      const newErrors: Partial<Record<keyof ContactUsFormValues, string>> = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactUsFormValues
        newErrors[field] = err.message
      })
      setIsError(true)
      setErrors(newErrors)
      return
    }
    startTransition(async () => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formValues)
        })

        const result = await response.json()
        if (response.ok) {
          setSuccessMessage('Your message has been sent!')
          alert('Your message has been sent!')
          setFormValues({
            reason: '',
            name: '',
            phone: '',
            email: '',
            message: ''
          })
          setErrors({})
        } else {
          setSuccessMessage(`Error: ${result.message}`)
          alert(successMessage)
        }
      } catch (error) {
        setSuccessMessage(`There was an error sending the email: ${error}`)
        alert(successMessage)
      } finally {
        setIsError(false)
      }
    })
  }
  return (
    <div className="flex flex-col items-center justify-center bg-cream px-4 py-8 md:max-h-[946px] md:px-[70px] md:pb-[78px] md:pt-[67px]">
      <div className="flex max-w-[1170px] flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-3 text-center">
          <h1
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="w-auto text-center text-[32px] font-normal leading-normal text-denim md:max-w-[1296px] md:text-5xl">
            How can we help you?
          </h1>
          <p tabIndex={0} className="text-center text-lg font-normal leading-normal text-primary">
            Do you have a general question for a MedExpress team member? Submit your inquiry below
            and we&apos;ll be sure that your question gets routed to the appropriate person.
          </p>
          <p tabIndex={0}>
            <span className="font-bold">Please Note:</span> If you submit the form below, you will
            initiate contact with us via an unencrypted communication method which is not 100%
            secure. Information shared on this form or in future emails with GoHealth could be
            intercepted and viewed by others. By submitting the form, you acknowledge you are aware
            of and assume this risk.
          </p>
          <div className="border-b border-beige pb-[35px] md:pb-[31px]"></div>
          <h2
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="w-auto text-center text-lg font-normal leading-normal text-denim md:max-w-[1296px] md:text-[21px]">
            Please enter your contact information and inquiry below.
          </h2>
          <p
            tabIndex={0}
            className="text-center text-base font-normal leading-normal text-primary md:text-lg">
            *Required fields
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-[40px]">
          <div className="grid h-auto w-full grid-cols-1 flex-col items-stretch justify-center gap-5 md:grid-cols-2">
            {fields.map((field, index) => (
              <div className={cn('w-full')} key={index}>
                <div>
                  {field.firstGrid && (
                    <div className="grid w-full grid-cols-2 gap-5">
                      {field.firstGrid.map((gridField, index) => (
                        <div className={cn('w-full', gridField.col)} key={index}>
                          <InputBox
                            label={gridField.label}
                            type={gridField.type}
                            name={gridField.value}
                            value={formValues[gridField.value as keyof ContactUsFormValues]}
                            onChange={handleChange}
                            error={errors[gridField.value as keyof ContactUsFormValues]}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={cn('h-full w-full', field.col)}>
                  <InputBox
                    label={field.label || ''}
                    type={field.type || ''}
                    name={field.value}
                    value={formValues[field.value as keyof ContactUsFormValues]}
                    onChange={handleChange}
                    error={errors[field.value as keyof ContactUsFormValues]}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {isError && (
              <span
                tabIndex={0}
                className="text-start text-base font-normal leading-normal text-error md:text-lg">
                Please correct the errors and submit again.
              </span>
            )}
            <button
              tabIndex={0}
              type="submit"
              disabled={isPending}
              className="w-auto border border-terracotta px-7 py-[14px] text-center text-[21px] font-bold uppercase text-terracotta hover:bg-terracotta hover:text-white">
              {isPending ? 'Sending...' : 'Send Us Your Questions'}
            </button>
          </div>
        </form>
        <hr className="h-[2px] w-full space-y-10 bg-beige" />
        <p tabIndex={0} className="italic text-neutral">
          <span className="font-bold">*Emergency Service Notice:</span> If you are suffering from
          chest pain, shortness of breath, severe abdominal pain, stroke-like symptoms, or any other
          emergency, please dial{' '}
          <span>
            <a href="tel:911">911</a>
          </span>{' '}
          or go to the nearest ER.
        </p>
      </div>
    </div>
  )
}
