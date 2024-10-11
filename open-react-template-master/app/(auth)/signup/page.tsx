"use client"; // Ensure the component remains a client-side component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Link from "next/link"; // Import Link for navigation

export default function SignUp() {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({
    stuno: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    cpassword: "",
    campus: "PRETORIA", // Default value
  });

  // Handle form changes and preserve state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a query string from form data
    const queryString = new URLSearchParams(formData).toString();
    
    // Navigate to confirmation page with form data as query parameters
    router.push(`/confirm-profile?${queryString}`);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Input fields as before */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="stuno">
                  Student Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="stuno"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your student number"
                  required
                  value={formData.stuno}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="e.g. Tshiamo"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="surname">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="surname"
                  type="text"
                  className="form-input w-full"
                  placeholder="e.g. Matiza"
                  required
                  value={formData.surname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your work email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="cpassword">
                  Confirm <span className="text-red-500">*</span>
                </label>
                <input
                  id="cpassword"
                  type="password"
                  className="form-input w-full"
                  placeholder="Confirm Password"
                  required
                  value={formData.cpassword}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="campus">
                  Campus <span className="text-red-500">*</span>
                </label>
                <select
                  id="campus"
                  className="form-input w-full"
                  value={formData.campus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="PRETORIA">PRETORIA</option>
                  <option value="SOSHANGUVE">SOSHANGUVE</option>
                  <option value="GA-RANKUWA">GA-RANKUWA</option>
                  <option value="ARCADIA">ARCADIA</option>
                  <option value="eMALAHLENI">eMALAHLENI</option>
                  <option value="MBOMBELA">MBOMBELA</option>
                  <option value="POLOKWANE">POLOKWANE</option>
                </select>
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Next
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
