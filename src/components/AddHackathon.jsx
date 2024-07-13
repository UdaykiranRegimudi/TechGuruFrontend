import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const AddHackathon = () => {
  const [hackathon, setHackathon] = useState({
    id: 5,
    title: '',
    date: '',
    time: '',
    description: '',
    cta: '',
    imageUrl: '',
    rules: [''],
    technologies: [''],
    registrationGuidelines: [''],
    prizes: [''],

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHackathon({
      ...hackathon,
      [name]: value
    });
  };

  const handleArrayChange = (arrayName, index, value) => {
    const newArray = [...hackathon[arrayName]];
    newArray[index] = value;
    setHackathon({
      ...hackathon,
      [arrayName]: newArray
    });
  };

  const addArrayItem = (arrayName) => {
    setHackathon({
      ...hackathon,
      [arrayName]: [...hackathon[arrayName], '']
    });
  };

  const removeArrayItem = (arrayName, index) => {
    const newArray = hackathon[arrayName].filter((_, i) => i !== index);
    setHackathon({
      ...hackathon,
      [arrayName]: newArray
    });
  };









  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(hackathon);
    const object =  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hackathon),
    }
    const response = await fetch("https://techbackend-2.onrender.com/hackathon/",object)
    const data1 = await response.json()
    alert(data1.message)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Add Hackathon</h2>
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={hackathon.title}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="text"
          name="date"
          value={hackathon.date}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Time</label>
        <input
          type="text"
          name="time"
          value={hackathon.time}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={hackathon.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Call to Action</label>
        <input
          type="text"
          name="cta"
          value={hackathon.cta}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={hackathon.imageUrl}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Rules</label>
        {hackathon.rules.map((rule, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              value={rule}
              onChange={(e) => handleArrayChange('rules', index, e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('rules', index)}
              className="ml-2 p-2 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('rules')}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Rule
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Technologies</label>
        {hackathon.technologies.map((tech, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              value={tech}
              onChange={(e) => handleArrayChange('technologies', index, e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('technologies', index)}
              className="ml-2 p-2 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('technologies')}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Technology
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Registration Guidelines</label>
        {hackathon.registrationGuidelines.map((guideline, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              value={guideline}
              onChange={(e) => handleArrayChange('registrationGuidelines', index, e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('registrationGuidelines', index)}
              className="ml-2 p-2 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('registrationGuidelines')}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Guideline
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Prizes</label>
        {hackathon.prizes.map((prize, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              value={prize}
              onChange={(e) => handleArrayChange('prizes', index, e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('prizes', index)}
              className="ml-2 p-2 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('prizes')}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Prize
        </button>
      </div>
      
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddHackathon;
