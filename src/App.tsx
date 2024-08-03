import { useMemo } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import CheckedIcon from "@/assets/images/icon-checkbox-check.svg";
import QueryCheckedIcon from "@/assets/images/icon-radio-selected.svg";

type FormType = {
    first_name: string;
    last_name: string;
    email: string;
    query: string;
    message: string;
    consant: boolean;
};

export default function App() {
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
    } = useForm<FormType>();
    const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);
    const labelClassName = useMemo(
        () => "text-xs py-2 font-dm text-c_grey900",
        []
    );
    const isConsant = watch("consant");
    const queryType = watch("query");

    return (
        <main className="bg-c_green200 flex items-center justify-center p-4 min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg bg-white lg:p-8 lg:w-[40rem] flex flex-col gap-4"
            >
                <h1 className="font-dm text-2xl text-c_grey900 font-bold">
                    Contact Us
                </h1>
                <div className="lg:grid grid-cols-2 gap-3">
                    <div className="flex flex-col relative">
                        <label className={labelClassName} htmlFor="first_name">
                            First Name{" "}
                            <span className="text-c_green600">*</span>
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            {...register("first_name", {
                                required: "This field is required",
                            })}
                            className={`rounded-md outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                        />
                    </div>
                    <div className="flex flex-col relative">
                        <label className={labelClassName} htmlFor="last_name">
                            Last Name <span className="text-c_green600">*</span>{" "}
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            {...register("last_name", {
                                required: "This field is required",
                            })}
                            className={`rounded-md outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                        />
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label className={labelClassName} htmlFor="email">
                        Email Address <span className="text-c_green600">*</span>{" "}
                    </label>
                    <input
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Please enter a valid email address",
                            },
                        })}
                        className={`rounded-md outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                    />
                </div>
                <div className="flex flex-col relative">
                    <span className={labelClassName}>
                        Query Type <span className="text-c_green600">*</span>{" "}
                    </span>
                    <div className="lg:grid grid-cols-2 gap-3">
                        <label
                            role="radio"
                            htmlFor="general_enquiry"
                            className={`rounded-md cursor-pointer flex items-center gap-2 outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                        >
                            <input
                                id="general_enquiry"
                                type="radio"
                                value={"General Enquiry"}
                                {...register("query", {
                                    required: "Please select a query type",
                                })}
                                className="hidden"
                            />
                            <div className="size-3 rounded-full border-[1px] border-c_grey900">
                                {queryType === "General Enquiry" && (
                                    <img
                                        alt="Check General Enquiry"
                                        src={QueryCheckedIcon}
                                    />
                                )}
                            </div>
                            <span className={"font-dm text-c_grey900 text-sm"}>
                                General Enquiry
                            </span>
                        </label>
                        <label
                            role="radio"
                            htmlFor="support_request"
                            className={`rounded-md cursor-pointer flex items-center gap-2 outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                        >
                            <input
                                id="support_request"
                                type="radio"
                                value={"Support Request"}
                                {...register("query", {
                                    required: "Please select a query type",
                                })}
                                className="hidden"
                            />
                            <div className="size-3 rounded-full border-[1px] border-c_grey900">
                                {queryType === "Support Request" && (
                                    <img
                                        alt="Check Support Request"
                                        src={QueryCheckedIcon}
                                    />
                                )}
                            </div>
                            <span className={"font-dm text-c_grey900 text-sm"}>
                                Support Request
                            </span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label className={labelClassName} htmlFor="message">
                        Message <span className="text-c_green600">*</span>{" "}
                    </label>
                    <textarea
                        id="message"
                        {...register("message", {
                            required: "This field is required",
                        })}
                        className={`resize-none rounded-md h-20 leading-4 outline-none border-[1px] border-c_grey500 px-4 py-2 text-sm text-c_grey900 font-dm`}
                    />
                </div>
                <label
                    htmlFor="consant"
                    className="relative flex items-center gap-3"
                >
                    <input
                        id="consant"
                        type="checkbox"
                        {...register("consant", {
                            required:
                                "To submit this form, please consant to being contacted",
                        })}
                        className="hidden"
                    />
                    <div
                        className="size-3 border-[1.05px] border-c_grey500 cursor-pointer"
                        role="checkbox"
                    >
                        {isConsant && <img src={CheckedIcon} alt="checked" />}
                    </div>
                    <span className={labelClassName}>
                        I consant to being contacted by the team{" "}
                        <span className="text-c_green600">*</span>{" "}
                    </span>
                </label>
                <button
                    type="submit"
                    className="rounded-lg text-white font-dm py-3 font-medium bg-c_green600 text-xs"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}
