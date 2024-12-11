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
      <label
        tabIndex={0}
        className="font-lato text-start text-base font-bold leading-normal text-secondary md:text-lg">
        {label}
      </label>
      {(type === 'text' || type === 'email' || type === 'tel') && (
        <input
          tabIndex={0}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracotta"
        />
      )}
      {type === 'select' && (
        <select
          tabIndex={0}
          name={name}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracotta"
          value={value}
          onChange={onChange}>
          <option value="" disabled></option>
          <option tabIndex={0} value="Acquisition Opportunities">
            Acquisition Opportunities
          </option>
          <option tabIndex={0} value="New Vendors">
            New Vendors
          </option>
          <option tabIndex={0} value="Media Inquiries">
            Media Inquiries
          </option>
          <option tabIndex={0} value="Webmaster">
            Webmaster
          </option>
          <option tabIndex={0} value="Other">
            Other
          </option>
        </select>
      )}
      {type === 'textArea' && (
        <textarea
          tabIndex={0}
          name={name}
          className="h-[236px] p-5 focus:outline-none focus:ring-1 focus:ring-terracotta md:h-full"
          value={value}
          onChange={onChange}></textarea>
      )}

      {error && (
        <span
          tabIndex={0}
          className="font-lato text-start text-base font-normal leading-normal text-error md:text-lg">
          {error}
        </span>
      )}
    </div>
  )
}
