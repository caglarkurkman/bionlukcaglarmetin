import React from "react";

const AdvertisementSection = () => (
    <div className="bg-green-100 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-green-600 mb-2">Reklam Alanı</h3>
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex-shrink-0"></div>
        <div>
          <p className="text-sm font-medium text-gray-700">Sponsorlu</p>
          <p className="text-gray-600">Reklam içeriği buraya gelecek kanzi</p>
        </div>
      </div>
    </div>
  );

  export default AdvertisementSection;