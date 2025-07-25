import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const KYC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    countryOfResidence: '',
    city: '',
    phoneNumber: '',
    documentType: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-j-full bg-white flex items-center justify-center p-4">
      <div className="bg-white p-6 w-2xl">
        <p className="text-gray-500 text-sm mb-6">Please verify your identity</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Fullname"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              name="dateOfBirth"
              placeholder="Enter Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              placeholder="Enter Nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Country of Residence
            </label>
            <select
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-400"
            >
              <option value="">Select</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold font-medium text-gray-700 mb-1">
              Document
            </label>
            <input
              type="text"
              name="documentType"
              placeholder="Select Document Type"
              value={formData.documentType}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="relative block w-full">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,.pdf"
              />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors">
                <Upload className="w-10 h-10 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload</p>
              </div>
            </label>
            {uploadedFile && (
              <p className="text-sm text-gray-600 mt-2">Uploaded: {uploadedFile}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYC;