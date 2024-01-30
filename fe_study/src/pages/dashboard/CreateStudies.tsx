import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createStudy } from "../../api/studyAPI";
import { changeToggle, changeToggleDisplay } from "../../global/reduxState";

const CreateStudies = () => {
  const toggle = useSelector((state: any) => state.toggleDisplay);
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);

  const [title, setTitle] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (title !== "" && hours !== "" && minutes !== "" && duration !== "") {
      createStudy(user?.data?._id, { title, minutes, hours, duration }).then(
        () => {
          dispatch(changeToggleDisplay(false));
          dispatch(changeToggle(false));
        }
      );
    }
  };

  return (
    <div className="w-full h-full relative ">
      <div
        className={`w-[400px] h-[99.9vh]  bg-white shadow-md absolute transition-all duration-300  ${
          toggle ? "right-0" : "-right-[30rem]"
        } `}
      >
        <div className="flex w-full h-screen justify-center items-center">
          <div className="w-[350px]">
            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Title this study" />
                </div>
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="Title this study"
                  required
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="How long do you want to Study for"
                  />
                </div>
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="2 hours"
                  required
                  value={hours}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setHours(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Break Time in Minutes" />
                </div>
                <TextInput
                  id="password"
                  required
                  placeholder="Break Time in Minutes"
                  value={minutes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMinutes(e.target.value);
                  }}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Study Duration" />
                </div>
                <TextInput
                  id="password1"
                  required
                  placeholder="Study Duration in minutes"
                  value={duration}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setDuration(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center gap-2"></div>
              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="h-full w-full "
        onClick={() => {
          dispatch(changeToggleDisplay(false));
          dispatch(changeToggle(false));
        }}
      />
    </div>
  );
};

export default CreateStudies;
