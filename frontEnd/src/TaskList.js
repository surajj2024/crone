import React from "react";

const TaskList = ({ tasks }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Schedule</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task._id}>
          <td>{task.name}</td>
          <td>{task.email}</td>
          <td>{task.schedule}</td>
          <td>{task.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskList;
