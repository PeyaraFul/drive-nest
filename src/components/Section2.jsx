import React from "react";

const Section2 = () => {
  return (
    <div>
      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">What Our Customers Say</h2>

            <p className="mt-4 text-gray-500">
              Trusted by hundreds of happy customers.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl text-black bg-white p-6 shadow">
              <p className="text-gray-600">
                “Amazing service and very clean cars. Booking process was super
                easy.”
              </p>

              <h4 className="mt-5 font-semibold">— Rahim Ahmed</h4>
            </div>

            <div className="rounded-2xl text-black bg-white p-6 shadow">
              <p className="text-gray-600">
                “Affordable price and excellent customer support.”
              </p>

              <h4 className="mt-5 font-semibold">— Nusrat Jahan</h4>
            </div>

            <div className="rounded-2xl text-black bg-white p-6 shadow">
              <p className="text-gray-600">
                “The car was in perfect condition. Highly recommended!”
              </p>

              <h4 className="mt-5 font-semibold">— Tanvir Hasan</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
