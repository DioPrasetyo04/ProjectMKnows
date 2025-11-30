"use client";
import { ContactUsType } from "@/Types/ContactUsType";
import React, { useEffect, useRef, useState } from "react";

const ContactUs = ({ fields, onSubmit, BackGroundImage }: ContactUsType) => {
  const initialData = fields.reduce((acc: any, field: any) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialData);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;

      const defaults = fields.reduce((acc: any, field: any) => {
        acc[field.name] = field.defaultValue || "";
        return acc;
      }, {});

      setFormData(defaults);
    }
  }, [fields]);

  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${BackGroundImage})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 sm:px-8 md:px-10 py-8 md:py-10 text-white">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            suppressHydrationWarning={true}
          >
            {fields.map((field: any) => (
              <div key={field.name} className="flex flex-col gap-y-3 p-3">
                <label className="block text-xl mb-1">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleValueChange}
                    required={field.required}
                    className="w-full bg-transparent border-b border-white/60 outline-none py-1 text-lg text-white"
                  >
                    {!field.defaultValue && (
                      <option value="" disabled className="text-slate-800">
                        {field.placeholder || "Pilih"}
                      </option>
                    )}
                    {field.options?.map((opt: any) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="text-slate-800"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={5}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleValueChange}
                    required={field.required}
                    className="w-full bg-transparent border-b border-white/60 outline-none py-1 text-lg"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleValueChange}
                    required={field.required}
                    className="w-full bg-transparent border-b border-white/60 outline-none py-1 text-lg"
                  />
                )}
              </div>
            ))}

            {/* Tombol Submit */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-1.5 rounded-full bg-white text-slate-900 text-xl font-semibold shadow hover:bg-gray-300 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
