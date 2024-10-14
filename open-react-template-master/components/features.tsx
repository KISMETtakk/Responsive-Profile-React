"use client"; // Ensure this component is client-side

import { useState } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

const flashCardData = [
  { title: "Step 1", content: "Welcome to the donation journey!" },
  { title: "Step 2", content: "Choose your donation amount." },
  { title: "Step 3", content: "Provide your details." },
  { title: "Step 4", content: "Review your information." },
  { title: "Step 5", content: "Thank you for your generosity!" },
];

export default function Features() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = flashCardData.length;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="features-section relative">
      <div
        className="background-shape-gray pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="background-shape pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="header-border py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="header-content mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="title animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Donation Journey
            </h2>
            <p className="description text-lg text-indigo-200/65">
              Follow these steps to complete your donation.
            </p>
          </div>

          {/* Donation journey steps */}
          <div className="progress-container relative mb-8">
            {/* Liquid-like progress bar */}
            <div className="progress-bar w-full h-4 bg-gray-300 rounded-full overflow-hidden relative">
              <div
                className="progress-fill h-full bg-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
              <div className="liquid-waves" />
            </div>

            {/* Steps display */}
            <div className="steps-display flex justify-between mt-4">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div
                  key={step}
                  className={`step-item flex-1 text-center ${
                    step === currentStep
                      ? "active-step text-white font-bold bg-indigo-500 rounded-full p-2"
                      : "inactive-step text-gray-400"
                  }`}
                >
                  Step {step}
                </div>
              ))}
            </div>
          </div>

          {/* Flash Card Display */}
          <div className="flash-card-container flex justify-center pb-4 md:pb-12">
            {flashCardData.map((card, index) => (
              <div
                key={index}
                className={`flash-card w-48 h-72 bg-white shadow-lg rounded-lg flex items-center justify-center transition-opacity duration-500 ${
                  index + 1 === currentStep ? "opacity-100" : "opacity-0 blur-md"
                }`}
              >
                <div className="flash-card-content text-center">
                  <h3 className="flash-card-title font-bold text-lg">{card.title}</h3>
                  <p className="flash-card-text">{card.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="navigation-buttons flex justify-between mt-8">
            <button
              className={`back-button px-4 py-2 rounded bg-indigo-500 text-white ${
                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              className={`next-button px-4 py-2 rounded bg-indigo-500 text-white ${
                currentStep === totalSteps ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={currentStep === totalSteps}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
