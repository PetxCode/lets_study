"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/userAPI";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (email !== "" && password !== "" && password === confirm) {
      createUser({ email, password }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Card className="w-[400px]">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              placeholder="**********"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="comfirm password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              placeholder="**********"
              value={confirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setConfirm(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-2"></div>
          <Button type="submit">Register</Button>
        </form>

        <div className="text-[14px] text-center">
          Already have an Account{" "}
          <span className="text-blue-900 font-bold cursor-pointer">
            <Link to="/login">Login here</Link>
          </span>{" "}
        </div>
      </Card>
    </div>
  );
};

export default Register;
