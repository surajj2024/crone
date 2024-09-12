import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddTask({ name, email, schedule });
    setName("");
    setEmail("");
    setSchedule("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        placeholder="Cron Schedule"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
