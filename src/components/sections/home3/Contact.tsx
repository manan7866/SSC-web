"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import apiClient from "@/lib/apiClient";

interface ContactFormInputs {
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormInputs) => {
    const token = localStorage.getItem("accessToken");
    
    if (!token) {
      alert("Please log in to send a message");
      return;
    }

    // Validate data before sending
    if (!data.subject?.trim() || !data.message?.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      console.log("Sending data:", data); // Debug log
      console.log("Token:", token); // Debug log
      
      // Make sure we're sending the data in the exact format your backend expects
      const payload = {
        subject: data.subject.trim(),
        message: data.message.trim()
      };

      console.log("Payload:", payload); // Debug log
      
      const res = await apiClient.post("/user/contact-us", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log("Response:", res); // Debug log
      alert("Your message has been sent successfully!");
      reset();
    } catch (error: any) {
      console.error("Contact Us Error:", error);
      console.error("Error response:", error.response?.data); // More detailed error logging
      console.error("Error status:", error.response?.status); // Status code
      console.error("Error headers:", error.response?.headers); // Headers
      
      if (error.response?.status === 400) {
        alert(`Bad request: ${error.response?.data?.message || "Please check your input and try again."}`);
      } else if (error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
        // Optionally redirect to login page
        localStorage.removeItem("accessToken");
      } else if (error.response?.status === 500) {
        alert("Server error. Please try again later.");
      } else {
        alert(error.response?.data?.message || error.message || "Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block relative text-lg font-semibold text-fixnix-lightpurple uppercase tracking-wider">
            CONTACT US
            <div className="absolute top-1/2 left-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
          </div>
          <h2 className="text-4xl font-bold text-fixnix-lightpurple mt-4 mb-3">
            Let Us Know Or Call Us At
          </h2>
          <p className="text-gray-600 mx-auto">
            Reach out in remembrance and sincerity, every message is a thread in
            the divine tapestry.
            <br />
            Whether in yearning, curiosity, or service, your voice is part of
            the sacred unfolding.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <input
                  {...register("subject", { 
                    required: "Subject is required",
                    minLength: {
                      value: 3,
                      message: "Subject must be at least 3 characters long"
                    }
                  })}
                  type="text"
                  placeholder="Subject"
                  className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register("message", { 
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long"
                  }
                })}
                rows={6}
                placeholder="Your Message"
                className="w-full px-5 py-4 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}