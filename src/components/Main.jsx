import { useState } from "react";
const Main = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    setAge({ years, months, days });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-red-600 text-3xl font-bold mb-9">Age Calculator</h2>
        <input
          type="date"
          className="w-[15rem]  h-[3rem] mb-4"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white w-[9rem] h-[3rem] rounded-xl"
          onClick={calculateAge}
        >
          Calculate
        </button>
        {age && (
          <div className="mt-4">
            <p className="text-lg">
              You are {age.years} years , {age.months} months , and {age.days}{" "}
              days old
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
