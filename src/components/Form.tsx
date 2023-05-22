"use client";
import { ArrowCircleRight, ArrowCircleRight2 } from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image2 from "../../img/form-image.png";
import CustomInputForm from "./CustomInputForm";
import { sendContactForm } from "../lib/api";

interface Form {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
  full?: boolean;
  isTextBlack?: boolean;
}

const initValues = { name: "", email: "", message: "", subject: "" };
const initState = { values: initValues, errors: {}, isSubmitting: false };

function Form() {
  const [state, setState] = React.useState(initState);
  const [touched, setTouched] = React.useState({});

  const { values, isSubmitting, errors } = state;

  const onBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) =>
    setState((prev: any) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (): Promise<void> => {
    setState((prev: any) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      // console.log("values", values);
      setTouched({});
      setState(initState);
    } catch (error: any) {
      setState((prev: any) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className=" bg-ta-cream over overflow-hidden">
      <div className="max-w-[1246px] mx-auto pl-3 pr-3 lg:pr-0 flex flex-col lg:flex-row ">
        <div className="before:bg-[url('../../img/form-image.png')] before:opacity-0 before:lg:opacity-100 bg-no-repeat before:absolute before:w-[150%] before:h-[110%] before:left-[-150px]  relative before:bg-no-repeat order-2 lg:order-1">
          {/* <img
             className=" w-[1027px] h-[916px]"
             src="https://i.imgur.com/IQXaTpv.png"
             alt="logo"
            /> */}
          <div className="flex justify-center items-center">
            <Image
              className="opacity-100 lg:opacity-0"
              src={image2}
              alt="logo"
            />
          </div>
        </div>

        <div className="w-[100%] basis-[62%] order-1 z-10 ">
          <h3 className="font-mazzardM text-[32px] font-[700] mt-[138px] mb-[35px]">
            Spark my passion
          </h3>

          <label className="block mb-5">
            <input
              className=" border-black border-[1px] border-solid rounded py-2 px-3 form-input w-full ring-ta-purple outline-none focus:ring"
              placeholder="Name"
              name="name"
              onBlur={onBlur}
              value={values.name}
              onChange={handleChange}
              type="text"
              required
              // errorBorder={errors.name && touched.name}
            />
          </label>

          <label className="block mb-5">
            <input
              className=" border-black border-[1px] border-solid rounded-[10px] py-2 px-3 form-input w-full ring-ta-purple outline-none focus:ring"
              placeholder="E-mail"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="block mb-5">
            <input
              className=" border-black border-[1px] border-solid rounded-[10px] py-2 px-3 form-input w-full ring-ta-purple outline-none focus:ring"
              placeholder="Subject"
              name="subject"
              type="text"
              pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$"
              value={values.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-5">
            <textarea
              className="border-black mb-[19px] border-[1px] border-solid rounded-[10px] py-2 px-3 form- mt-1 block w-full outline-none ring-ta-purple focus:ring"
              placeholder="Type something"
              name="message"
              rows={8}
              value={values.message}
              onChange={handleChange}
              required
            />
          </label>

          <div className="flex justify-start">
            <button
              type="submit"
              className="md:py-[22px] md:px-[32px] text-[white] px-[29px] py-[17px]  mb-[20px] lg:mb-[112px] flex gap-[35px] bg-black font-mazzardM font-[600] text-[16px] rounded-[10px] tracking-[0.3rem] "
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
            >
              SEND
              <ArrowCircleRight />
            </button>
          </div>
        </div>

        {/* w-[855px] h-[655px] */}
      </div>
    </div>
  );
}

export default Form;
