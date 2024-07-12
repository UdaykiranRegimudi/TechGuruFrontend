import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: '',
    description: '',
    about: '',
    imageUrl: '',
    datesAndTimings: {
      startDate: '',
      endDate: '',
      timings: ''
    },
    topics: [''],
    projects: [{ title: '', description: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value
    });
  };

  const handleDatesChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      datesAndTimings: {
        ...course.datesAndTimings,
        [name]: value
      }
    });
  };

  const handleTopicChange = (index, value) => {
    const newTopics = [...course.topics];
    newTopics[index] = value;
    setCourse({
      ...course,
      topics: newTopics
    });
  };

  const addTopic = () => {
    setCourse({
      ...course,
      topics: [...course.topics, '']
    });
  };

  const removeTopic = (index) => {
    const newTopics = course.topics.filter((_, i) => i !== index);
    setCourse({
      ...course,
      topics: newTopics
    });
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...course.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    };
    setCourse({
      ...course,
      projects: newProjects
    });
  };

  const addProject = () => {
    setCourse({
      ...course,
      projects: [...course.projects, { title: '', description: '' }]
    });
  };

  const removeProject = (index) => {
    const newProjects = course.projects.filter((_, i) => i !== index);
    setCourse({
      ...course,
      projects: newProjects
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(course);
    const object =  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    }
    const response = await fetch("http://localhost:3000/course/",object)
    const data1 = await response.json()
    alert(data1.message)
    // Submit the form data to your server or handle it a   s needed
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Add Course</h2>
      <div>
        <label className="block text-sm font-medium">Course Name</label>
        <input
          type="text"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">About</label>
        <textarea
          name="about"
          value={course.about}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={course.imageUrl}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={course.datesAndTimings.startDate}
          onChange={handleDatesChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Date</label>
        <input
          type="date"
          name="endDate"
          value={course.datesAndTimings.endDate}
          onChange={handleDatesChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Timings</label>
        <input
          type="text"
          name="timings"
          value={course.datesAndTimings.timings}
          onChange={handleDatesChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Topics</label>
        {course.topics.map((topic, index) => (
          <div key={index} className="flex items-center mt-1">
            <input
              type="text"
              value={topic}
              onChange={(e) => handleTopicChange(index, e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeTopic(index)}
              className="ml-2 p-2 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addTopic}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Topic
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Projects</label>
        {course.projects.map((project, index) => (
          <div key={index} className="mt-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
              />
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="ml-2 p-2 text-red-500"
              >
                <FaTrash />
              </button>
            </div>
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addProject}
          className="mt-2 p-2 text-blue-500 flex items-center"
        >
          <FaPlus className="mr-1" /> Add Project
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

export default AddCourse;
