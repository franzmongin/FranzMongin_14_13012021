import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { statesListJson } from "./states";
import { Input, DatePicker, Form, Select, Button } from "antd";

const { Option } = Select;

// page to add an Employee
function HomePage() {
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [birthDateInput, setbirthDateInput] = useState("");
  const [startDateInput, setstartDateInput] = useState("");
  const [streetInput, setstreetInput] = useState("");
  const [cityInput, setcityInput] = useState("");
  const [stateInput, setstateInput] = useState(
    statesListJson[0]["abbreviation"]
  );
  const [zipCodeInput, setzipCodeInput] = useState("");
  const [departmentInput, setdepartmentInput] = useState("Sales");
  const [hiddenModal, sethiddenModal] = useState(true);

  // function to save the employee on sumbitting the form
  const saveEmployees = (e) => {
    console.log(e);
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      dateOfBirth: birthDateInput,
      startDate: startDateInput,
      department: departmentInput,
      street: streetInput,
      city: cityInput,
      state: stateInput,
      zipCode: zipCodeInput,
    };
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    sethiddenModal(false);
  };

  const dateFormat = "DD/MM/YYYY";

  const [form] = Form.useForm();

  return (
    <div className="home-page page">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form
          form={form}
          id="create-employee"
          layout="vertical"
          onFinish={(e) => saveEmployees(e)}
          onValuesChange={(e, f) => {
            console.log(e);
          }}
        >
          <Form.Item
            label="First Name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
            name="first-name"
          >
            <Input
              type="text"
              id="first-name"
              onChange={(e) => setfirstNameInput(e.target.value)}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
            name="last-name"
          >
            <Input
              type="text"
              id="last-name"
              onChange={(e) => setlastNameInput(e.target.value)}
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            label="Date Of Birth"
            rules={[
              { required: true, message: "Please input your birth date!" },
            ]}
            name="date-of-birth"
          >
            <DatePicker
              id="date-of-birth"
              type="date"
              onChange={(_, f) => {
                setbirthDateInput(f);
              }}
              placeholder="Date Of Birth"
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item
            label="Start Date"
            rules={[
              { required: true, message: "Please input your start date name!" },
            ]}
            name="start-date"
          >
            <DatePicker
              id="start-date"
              onChange={(_, f) => setstartDateInput(f)}
              placeholder="Start Date"
              format={dateFormat}
            />
          </Form.Item>
          <fieldset className="address">
            <legend>Address</legend>

            <Form.Item
              label="Street"
              rules={[{ required: true, message: "Please input your street!" }]}
              name="street"
            >
              <Input
                id="street"
                type="text"
                onChange={(e) => setstreetInput(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="City"
              rules={[{ required: true, message: "Please input your city!" }]}
              name="last-city"
            >
              <Input
                id="city"
                type="text"
                onChange={(e) => setcityInput(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="State"
              rules={[{ required: true, message: "Please input your state!" }]}
              name="state"
              initialValue={stateInput}
            >
              <Select
                name="state"
                id="state"
                onChange={(value) => setstateInput(value)}
                style={{ width: "100%" }}
              >
                {statesListJson.map((el, i) => {
                  return (
                    <Option value={el.abbreviation} key={`state-${i}`}>
                      {el.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Zip Code"
              rules={[
                { required: true, message: "Please input your zip code!" },
              ]}
              name="zip-code"
            >
              <Input
                id="zip-code"
                type="number"
                onChange={(e) => setzipCodeInput(e.target.value)}
              />
            </Form.Item>
          </fieldset>

          <Form.Item
            label="Department"
            rules={[
              { required: true, message: "Please input your department!" },
            ]}
            name="departement"
            initialValue={departmentInput}
          >
            <Select
              name="department"
              id="department"
              onChange={(value) => setdepartmentInput(value)}
              style={{ width: "100%" }}
            >
              <Option value="sales">Sales</Option>
              <Option value="marketing">Marketing</Option>
              <Option value="Engineering">Engineering</Option>
              <Option value="human resources">Human Resources</Option>
              <Option value="legal">Legal</Option>
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // onSubmit={(e) => saveEmployees(e)}
          >
            Save Employee
          </Button>
        </Form>
      </div>
      <Modal hiddenModal={hiddenModal} sethiddenModal={sethiddenModal} />
    </div>
  );
}

export default HomePage;
