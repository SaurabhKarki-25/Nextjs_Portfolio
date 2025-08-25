"use client";
import React, { forwardRef, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";
import {ToastPosition } from "react-toastify";

export const baseUrl = "https://meta-resume.herokuapp.com/api";

export const contactFormCodes = {
  FIRSTNAME: "firstName",
  LASTNAME: "lastName",
  CONTACTEMAIL: "contactEmail",
  MESSAGE: "message",
};

const Contact = (props: any, ref: any) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    contactEmail: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const dark = "rgb(48,48,48)";

  useEffect(() => {
    const inputs = [fnameRef, lnameRef, emailRef, messageRef];
    inputs.forEach((input) => {
      if (!input.current) return;
      const label = input.current.nextElementSibling?.firstElementChild as HTMLElement;
      input.current.addEventListener("focus", () => {
        if (label) {
          label.style.transform = `translateY(-30px)`;
          label.style.fontSize = `13px`;
          label.style.color = `rgb(0,255,187)`;
        }
      });
      input.current.addEventListener("blur", () => {
        if (input.current && input.current.value !== "") {
          if (label) {
            label.style.transform = `translateY(-30px)`;
            label.style.fontSize = `13px`;
            label.style.color = `rgb(0,255,187)`;
          }
        } else {
          if (label) {
            label.style.transform = `translateY(-50%)`;
            label.style.fontSize = `16px`;
            label.style.color = dark;
          }
        }
      });
    });
  }, []);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        !contactData.firstName ||
        !contactData.lastName ||
        !contactData.contactEmail ||
        !contactData.message
      ) {
        toast.error("Please fill all details", {
          position: "top-center",

          className: "custom_toast",
        });
      } else {
        await axios.post(`${baseUrl}/contact-form`, {
          ...contactData,
        });

        await emailjs.sendForm(
          "service_0n3imd2",
          "template_fsi3bzl",
          form.current!,
          "Y1g44RpQNGxshhClN"
        );

        toast.success("Message sent successfully. We will contact you soon", {
          position: "top-center",

          className: "custom_toast",
        });
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",

        className: "custom_toast",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full flex justify-center items-center py-10 px-5 bg-[#292929]"
    >
      <div className="max-w-[1100px] w-full bg-white shadow-[0_0_30px_5px_rgba(0,0,0,1)] flex flex-col md:flex-row relative overflow-hidden">
        
        {/* Left Image Box */}
        <div className="relative w-full md:w-[350px] flex items-end justify-center md:justify-start">
          <div
            className="absolute bottom-[-34px] left-[-80px] w-[400px] h-[546px] md:rotate-[10deg] bg-no-repeat bg-[length:100%] md:bg-[length:100%] md:bg-[center_40%] bg-[center_40%]"
            style={{ backgroundImage: "url('/contact.png')" }}
          ></div>
        </div>

        {/* Right Form Section */}
        <div className="relative w-full md:w-[calc(100%-300px)] px-5 md:px-10 z-10">
          <h1 className="text-[40px] md:text-[50px] uppercase text-gray-800 font-semibold mb-4 text-center md:text-left">
            Contact Me
          </h1>
          <form
            ref={form}
            autoComplete="off"
            onSubmit={handleSubmit}
            className="pb-10 md:pb-[50px] md:pr-[50px]"
          >
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="relative w-full">
                <input
                  ref={fnameRef}
                  type="text"
                  name={contactFormCodes.FIRSTNAME}
                  value={contactData.firstName}
                  onChange={handleInputs}
                  id="id_fname"
                  className="h-[55px] w-full border-b-2 border-gray-800 bg-transparent outline-none pt-4 pl-1 text-[22px] text-gray-800"
                />
                <label htmlFor="id_fname" className="absolute left-0 bottom-0 h-[55px] w-full pointer-events-none">
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[16px] tracking-wide text-gray-800 transition-all">
                    First Name
                  </span>
                </label>
              </div>
              <div className="relative w-full">
                <input
                  ref={lnameRef}
                  type="text"
                  name={contactFormCodes.LASTNAME}
                  value={contactData.lastName}
                  onChange={handleInputs}
                  id="id_lname"
                  className="h-[55px] w-full border-b-2 border-gray-800 bg-transparent outline-none pt-4 pl-1 text-[22px] text-gray-800"
                />
                <label htmlFor="id_lname" className="absolute left-0 bottom-0 h-[55px] w-full pointer-events-none">
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[16px] tracking-wide text-gray-800 transition-all">
                    Last Name
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="mb-5">
              <div className="relative w-full">
                <input
                  ref={emailRef}
                  type="email"
                  name={contactFormCodes.CONTACTEMAIL}
                  value={contactData.contactEmail}
                  onChange={handleInputs}
                  id="id_email"
                  className="h-[55px] w-full border-b-2 border-gray-800 bg-transparent outline-none pt-4 pl-1 text-[22px] text-gray-800"
                />
                <label htmlFor="id_email" className="absolute left-0 bottom-0 h-[55px] w-full pointer-events-none">
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[16px] tracking-wide text-gray-800 transition-all">
                    E-mail
                  </span>
                </label>
              </div>
            </div>

            {/* Row 3 - Message */}
            <div className="mb-5">
              <div className="relative w-full">
                <textarea
                  ref={messageRef}
                  name={contactFormCodes.MESSAGE}
                  value={contactData.message}
                  onChange={handleInputs}
                  id="id_message"
                  rows={6}
                  className="resize-none w-full h-[140px] border-b-2 border-gray-800 bg-transparent outline-none text-[20px] text-gray-800 pl-1"
                ></textarea>
                <label htmlFor="id_message" className="absolute left-0 bottom-0 h-[170px] w-full pointer-events-none">
                  <span className="absolute left-1 top-8 text-[16px] tracking-wide text-gray-800 transition-all">
                    Message
                  </span>
                </label>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-[95%] mx-auto mt-10 block bg-gray-900 text-gray-200 rounded-full py-4 text-[20px] tracking-wider shadow-[0_20px_20px_5px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_10px_5px_rgba(0,0,0,0.6)] transition-all"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
