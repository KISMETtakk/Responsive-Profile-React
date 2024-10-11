// app/(auth)/confirm-profile/page.tsx
"use client"; // Mark this component as a Client Component

import { useRouter } from "next/navigation"; // Correct import for the router
import { useEffect } from "react";

export default function ConfirmProfile({ searchParams }: { searchParams: any }) {
  const router = useRouter();

  // Destructure searchParams to get values
  const { stuno, name, surname, email, campus } = searchParams;

  useEffect(() => {
    // Check if required parameters are available
    if (!stuno || !name || !surname || !email || !campus) {
      // Navigate back or show an error
      router.push("/"); // Redirect to home or handle accordingly
    }
  }, [stuno, name, surname, email, campus, router]);

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-indigo-200">Confirm Your Profile</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="stuno">
                  Student Number <span className="text-red-500">*</span>
                </label>
                <ul id="course-list" className="list-disc pl-5">
                  <li className="text-gray-300">{stuno}</li>
                </ul>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  First Name <span className="text-red-500">*</span>
                </label>
                <ul id="course-list" className="list-disc pl-5">
                  <li className="text-gray-300">{name}</li>
                </ul>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="surname">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <ul id="course-list" className="list-disc pl-5">
                  <li className="text-gray-300">{surname}</li>
                </ul>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <ul id="course-list" className="list-disc pl-5">
                  <li className="text-gray-300">{email}</li>
                </ul>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="campus">
                  Campus <span className="text-red-500">*</span>
                </label>
                <ul id="course-list" className="list-disc pl-5">
                  <li className="text-gray-300">{campus}</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
