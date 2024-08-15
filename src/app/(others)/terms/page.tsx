import { ReceiptText } from "lucide-react";
import React from "react";
// import Navbar from "~/components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex w-full items-center justify-center overflow-hidden pb-6">
        <div className="mx-3 mt-16 flex w-full flex-col space-y-6 md:w-[85%] lg:w-1/2">
          <span className="mb-4 flex items-center gap-2 text-4xl font-bold md:text-5xl">
            Terms and Conditions <ReceiptText />
          </span>
          <span>
            Welcome to [AppName]. By using the Service, you agree to be bound
            by the following terms and conditions (the "Terms of Use"). If you
            do not agree to these Terms of Use, please do not use the Service.{" "}
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Subscription & Ownership
          </span>
          <span>
            When you subscribe to [App Name], you gain access to our services.
            Upon termination or expiration of your subscription, you will loose
            those services. We do not offer any refunds at this time and every
            sale is final.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Limitation of Liability
          </span>
          <span>
            [App Name] will not be liable for any damages arising out of or in
            connection with your use of the Service, including but not limited
            to direct, indirect, incidental, special, consequential or punitive
            damages.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Governing Law
          </span>
          <span>
            These Terms of Use shall be governed by the laws of Canada without
            giving effect to any principles of conflicts of law. Any disputes
            arising out of or in connection with these Terms of Use will be
            resolved in the courts of Canada.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Data Collection
          </span>
          <span>
            By using this service you are agreeing for us to collect the
            following data -
          </span>
          <ul className="list-inside list-disc">
            <li>Name</li>
            <li>Email</li>
            <li>Payment Information</li>
            <li>Usage Activity</li>
          </ul>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Changes to the Terms and Conditions
          </span>

          <span>
            We may update this Terms and Conditions from time to time to reflect
            any change in our services.
          </span>

          <span className="mb-4 text-2xl font-bold md:text-3xl">
            Contact Us
          </span>

          <span>
            If you have any questions or concerns about the Terms and Conditions
            please contact us at{" "}
            <Link
              href={"mailto:faizancurious@gmail.com"}
              target="_blank"
              className="italic underline hover:text-[#a754fe]"
            >
              faizancurious@gmail.com
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
