import React from 'react'

interface InputBoxProps {
  label: string
  type: string
  value: string
  name?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  error?: string
}

export default function InputBox({ label, type, value, name, onChange, error }: InputBoxProps) {
  return (
    <div className="inputBox flex h-full w-full flex-col">
      <label className="font-lato text-start text-base font-bold leading-normal text-secondary md:text-lg">
        {label}
      </label>
      {(type === 'text' || type === 'email' || type === 'tel') && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracotta"
        />
      )}
      {type === 'select' && (
        <select
          name={name}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracotta"
          value={value}
          onChange={onChange}>
          <option value="" disabled></option>
          <option value="Acquisition Opportunities">Acquisition Opportunities</option>
          <option value="New Vendors">New Vendors</option>
          <option value="Media Inquiries">Media Inquiries</option>
          <option value="Webmaster">Webmaster</option>
          <option value="Other">Other</option>
        </select>
      )}
      {type === 'textArea' && (
        <textarea
          name={name}
          className="h-[236px] p-5 focus:outline-none focus:ring-1 focus:ring-terracotta md:h-full"
          value={value}
          onChange={onChange}></textarea>
      )}

      {error && (
        <span className="font-lato text-start text-base font-normal leading-normal text-error md:text-lg">
          {error}
        </span>
      )}
    </div>
  )
}
