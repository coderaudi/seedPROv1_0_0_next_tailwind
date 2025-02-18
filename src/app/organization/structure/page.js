'use client';
import { DashboardLayout, MYPieChart } from '@lib/layout';
import React, { useState } from 'react';

const OrganizationalStructure = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ id: '', name: '', role: 'Employee', parent: '' });
  const [editEmployee, setEditEmployee] = useState(null);

  // Update the list of managers (those with the role 'Manager')
  const getManagers = () => {
    return employees.filter(emp => emp.role === 'Manager');
  };

  // Function to add or update an employee
  const handleAddEditEmployee = () => {
    if (editEmployee) {
      // Update the employee
      setEmployees(
        employees.map(emp =>
          emp.id === editEmployee.id ? editEmployee : emp
        )
      );
      setEditEmployee(null);
    } else {
      // Add a new employee
      setEmployees([...employees, { ...newEmployee, id: Date.now().toString() }]);
      setNewEmployee({ id: '', name: '', role: 'Employee', parent: '' });
    }
  };

  // Function to delete an employee
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Function to handle role change
  const handleRoleChange = (id, role) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, role } : emp));
  };

  // Function to handle manager change (parent employee)
  const handleManagerChange = (e) => {
    setNewEmployee({ ...newEmployee, parent: e.target.value });
  };

  // Graph data calculation
  const roleCount = ['Employee', 'Senior Employee', 'Team Lead', 'Manager'].reduce((acc, role) => {
    acc[role] = employees.filter(emp => emp.role === role).length;
    return acc;
  }, {});

  const chartData = [
    { value: roleCount['Employee'], label: 'Employee' },
    { value: roleCount['Senior Employee'], label: 'Senior Employee' },
    { value: roleCount['Team Lead'], label: 'Team Lead' },
    { value: roleCount['Manager'], label: 'Manager' },
  ];

  const totalEmployees = employees.length;

  return (
    <>
        <DashboardLayout>

    <div className="font-sans bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Organizational Structure</h1>

      <div className="flex space-x-8 mb-12">
        {/* Employee Form Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-1/2">
          <h2 className="text-2xl mb-4">{editEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
          
          {/* Employee Name Input */}
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Employee Name"
            value={editEmployee ? editEmployee.name : newEmployee.name}
            onChange={(e) => (editEmployee ? setEditEmployee({ ...editEmployee, name: e.target.value }) : setNewEmployee({ ...newEmployee, name: e.target.value })) }
          />
          
          {/* Role Select */}
          <select
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editEmployee ? editEmployee.role : newEmployee.role}
            onChange={(e) => (editEmployee ? setEditEmployee({ ...editEmployee, role: e.target.value }) : setNewEmployee({ ...newEmployee, role: e.target.value })) }
          >
            <option value="Employee">Employee</option>
            <option value="Senior Employee">Senior Employee</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Manager">Manager</option>
          </select>

          {/* Manager Dropdown */}
          <select
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editEmployee ? editEmployee.parent || 'SuperAdmin' : newEmployee.parent || 'SuperAdmin'}
            onChange={handleManagerChange}
          >
            <option value="SuperAdmin">SuperAdmin</option>
            {getManagers().map((manager) => (
              <option key={manager.id} value={manager.id}>
                {manager.name}
              </option>
            ))}
          </select>

          <button
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
            onClick={handleAddEditEmployee}
          >
            {editEmployee ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>

        {/* Employee List Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-1/2">
          <h2 className="text-2xl mb-4">Employee List</h2>
          <ul className="space-y-4">
            {employees.map((emp) => (
              <li key={emp.id} className="bg-white p-4 rounded-md border border-gray-300 flex justify-between items-center shadow-md">
                <span>{emp.name} - {emp.role}</span>
                <div className="flex space-x-4">
                  <button
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
                    onClick={() => setEditEmployee(emp)}
                  >
                    Edit
                  </button>
                  <select
                    className="p-2 border border-gray-300 rounded-md"
                    value={emp.role}
                    onChange={(e) => handleRoleChange(emp.id, e.target.value)}
                  >
                    <option value="Employee">Employee</option>
                    <option value="Senior Employee">Senior Employee</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pie Chart and Employee Breakdown side by side */}
      <div className="flex space-x-8 justify-between">
        <div className="w-1/2">
          <MYPieChart pieChartData={chartData} />
        </div>

        <div className="w-1/2">
          <h2 className="text-xl mb-4 text-center">Employee Breakdown by Role</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Role</th>
                <th className="p-2 text-left">Count</th>
                <th className="p-2 text-left">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((item) => (
                <tr key={item.label} className="border-b">
                  <td className="p-2">{item.label}</td>
                  <td className="p-2">{item.value}</td>
                  <td className="p-2">{totalEmployees > 0 ? ((item.value / totalEmployees) * 100).toFixed(2) : 0}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </DashboardLayout>

    </>
  );
};

export default OrganizationalStructure;
