import React, { useState, ChangeEvent } from "react";
import axios from "axios";

const SimilarCars: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [predictedCarType, setPredictedCarType] = useState<string | null>(null);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
      setPredictedCarType(null);
      setFilteredCars([]);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Image missing.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<any>(
        "http://localhost:8080/api/upload",
        formData
      );

      const responseData = response.data;
      console.log(responseData);

      const mappedCars = responseData.filteredCars.map((car: any) => ({
        imageUrl: car.imageUrl,
        make: car.make,
        model: car.model,
        type: car.type,
        year: car.year,
      }));

      setPredictedCarType(responseData.predictedCarType);
      setFilteredCars(mappedCars);
    } catch (error) {
      setError("Error uploading image.");
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-500 font-sans">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Car Finder</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload Car Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>

        {predictedCarType && (
          <div className="mt-4">
            <p>Predicted Car Type: {predictedCarType}</p>
          </div>
        )}

        {filteredCars.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Filtered Cars</h2>
            <ul className="flex flex-wrap -mx-2">
              {filteredCars.map((car, index) => (
                <li key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <div className="bg-white p-6 shadow-md rounded-lg">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={car.imageUrl}
                        alt={`${car.make} ${car.model}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">{car.make} {car.model}</h3>
                    <p>Type: {car.type}</p>
                    <p>Year: {car.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

      </main>
    </div>
  );
};

export default SimilarCars;
