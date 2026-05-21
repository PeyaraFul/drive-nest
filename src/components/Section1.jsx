import React from "react";

const Section1 = () => {
  return (
    <div>
      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>

            <p className="mt-4 text-gray-500">
              Experience premium car rental service with comfort, security, and
              affordability.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>

              <p className="mt-3 text-gray-500">
                Get the best rental deals without hidden charges.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Secure Booking</h3>

              <p className="mt-3 text-gray-500">
                Safe and trusted booking experience for every user.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">24/7 Support</h3>

              <p className="mt-3 text-gray-500">
                Our support team is always ready to help you.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Verified Cars</h3>

              <p className="mt-3 text-gray-500">
                All vehicles are verified and well maintained.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
