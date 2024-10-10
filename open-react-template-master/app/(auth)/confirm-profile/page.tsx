export const metadata = {
    title: "Confirm Profile",
    description: "Page description",
  };
  
  import Link from "next/link";
  
  export default function SignUp() {
    return (
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Confirm Profile
              </h1>
            </div>

            {/* Bottom link */}
            <div className="mt-6 text-center text-sm text-indigo-200/65">
            Please review the information below and make any necessary corrections. Once you're finished, click <b>'Confirm'</b> to proceed.{" "}
            </div>
            <div className="mt-12 text-center text-sm text-indigo-200/65">
            
            </div>

            {/* Contact form */}
            <form className="mx-auto max-w-[400px]">
              <div className="space-y-5">
              <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="stuNo"
                  >
                    Student Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="stuNo"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="name"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="surname"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="surname"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your last name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="email"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full"
                    placeholder="Your work email"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-indigo-200/65"
                    htmlFor="linkedin"
                  >
                    Linkedin Profile URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="linkedin"
                    type="text"
                    className="form-input w-full"
                    placeholder="www.linkedin.com/..."
                  />
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                  Confirm Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  