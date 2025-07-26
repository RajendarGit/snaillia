"use client";
import React from "react";
import Wrapper from "@/components/wrapper";
import InnerHeader from "@/components/inner-header";

const ContactPage = () => {
  return (
    <>
      <InnerHeader title="Contact Us" />
      <div className="py-10 lg:py-20 bg-gray-50 min-h-screen">
        <Wrapper>
          <div className="lg:flex gap-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4 text-gray-600">
                Have questions or feedback? We would love to hear from you! Reach
                out to us using the information below or fill out the contact
                form.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold">Address</h3>
                <p>
                  Snaillia Skincare
                  <br />
                  123 Green Avenue,
                  <br />
                  Nature City, NY 10001
                  <br />
                  United States
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Email:</span>{" "}
                  info@snaillia.com
                  <br />
                  <span className="font-semibold">Phone:</span> +1 (555)
                  123-4567
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Add your social icons here */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                title="Snaillia Location"
                src="https://www.google.com/maps?q=123+Green+Avenue,+Nature+City,+NY+10001&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ContactPage;
