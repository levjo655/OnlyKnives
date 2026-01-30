import React from "react";

const SmithSignup = () => (
  <>
    <div className="bg-bg min-h-screen text-primaryText">
      <div className="bg-gray-200 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">
          Apply as a smith form
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="full-name"
              >
                Full name
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="studio-brand"
              >
                Studio / Brand name
              </label>
              <input
                type="text"
                id="studio-brand"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="country-region"
              >
                Country / Region
              </label>
              <input
                type="text"
                id="country-region"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="background-summary"
              >
                Background / career summary
              </label>
              <textarea
                id="background-summary"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded h-24"
                placeholder=""
              ></textarea>
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="website-portfolio"
              >
                Website / portfolio link
              </label>
              <input
                type="url"
                id="website-portfolio"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="instagram"
              >
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="steels"
              >
                Steels you commonly work with
              </label>
              <input
                type="text"
                id="steels"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="heat-treatment"
              >
                Anything notable about your heat treatment or approach
              </label>
              <textarea
                id="heat-treatment"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded h-24"
                placeholder=""
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
              >
                Submit
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              We review applications manually.
              <br />
              If accepted, you'll receive an email
              <br />
              with next steps.
            </p>
          </div>
        </form>
      </div>
    </div>
  </>
);

export default SmithSignup;
