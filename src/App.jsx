import { useState } from 'react';

function App() {
  const [date, setDate] = useState(null);
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(date);
    const diff = today - birthDate;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return isNaN(age) ? "Enter your birth date" : age;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">Calculate Your Age</h1>
        <label className="text-xl font-light mb-2 block">Choose your birth date:</label>
        <input
          id="birthdate"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border-4 border-gray-300 rounded-3xl focus:outline-dotted focus:border-gray-500"
        />
        {calculateAge() > 18 ? (<div className="mt-6 text-2xl text-red-800 font-bold text-center">
          <h2>{calculateAge()}</h2>
        </div>) : (<div className="mt-6 text-2xl text-green-800 font-bold text-center">
          <h2>{calculateAge()}</h2>
        </div>)}
      </div>
    </div>
  );
}

export default App;
