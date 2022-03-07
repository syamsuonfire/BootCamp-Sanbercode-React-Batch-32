import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("required");
  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };

  const handleSubmit = () => {
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        message.success("Selamat Anda telah berhasil membuat Akun baru");
        history.push("/login");
      })
      .catch((err) => {
        message.error("Data yang diinput harus sesuai dan benar");
      });
  };
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  return (
    <section>
      <h1>
        <strong style={{ fontWeight: "bold", fontSize: "40px" }}>
          Daftar Akun
        </strong>
      </h1>
      <div style={{ width: "80%", margin: "0 auto", display: "block" }}>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <Form
            onFinish={handleSubmit}
            form={form}
            layout="vertical"
            initialValues={{
              requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
            <Form.Item label="Nama">
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                placeholder="********"
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit">
                Daftar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
