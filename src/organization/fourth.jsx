import { Textarea } from "@/components/ui/textarea";

function Fourth({ name, description, setName, setDescription }) {
  return (
    <div className="py-8 max-w-2xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Name your organization
        </h1>
        <p className="text-gray-600">
          Give your organization a unique name and description that reflects its purpose
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-2">
            Organization Name
          </label>
          <input
            id="orgName"
            type="text"
            placeholder="e.g. Acme Corporation"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="orgDesc" className="block text-sm font-medium text-gray-700 mb-2">
            Organization Description
          </label>
          <Textarea
            id="orgDesc"
            placeholder="Tell us about your organization&apos;s mission and goals..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[120px] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
          <p className="mt-2 text-sm text-gray-500">
            A clear description helps team members understand the organization&apos;s purpose
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
