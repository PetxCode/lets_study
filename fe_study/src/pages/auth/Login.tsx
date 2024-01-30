"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userAPI";
import { login } from "../../global/reduxState";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      loginUser({ email, password }).then((res) => {
        dispatch(login(res));
        navigate("/dashboard");
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
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              placeholder="**********"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Login</Button>
        </form>

        <div className="text-[14px] text-center">
          Don't have an Account{" "}
          <span className="text-blue-900 font-bold cursor-pointer">
            <Link to="/register">Create one here</Link>
          </span>{" "}
        </div>
      </Card>
    </div>
  );
};

export default Login;
