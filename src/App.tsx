import { useMemo } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import CheckedIcon from "@/assets/images/icon-checkbox-check.svg";
import QueryCheckedIcon from "@/assets/images/icon-radio-selected.svg";
import FormCompleteIcon from "@/assets/images/icon-success-check.svg";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    first_name: z.string().min(1, { message: "This field is required" }),
    last_name: z.string().min(1, { message: "This field is required" }),
    email: z
        .string()
        .min(1, { message: "This field is required" })
        .email({ message: "Please enter a valid email address" }),
    query: z.string({ message: "Please select a query type" }),
    message: z.string().min(1, { message: "This field is required" }),
    consant: z
        .boolean()
        .refine((checked) => !!checked, {
            message: "To submit this form, please consant to being contacted",
        }),
});

type FormType = z.infer<typeof formSchema>;

export default function App() {
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
        reset,
    } = useForm<FormType>({ resolver: zodResolver(formSchema) });

    const onSubmit: SubmitHandler<FormType> = () => {
        reset();
        toast(
            <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                    <img
                        alt="form submit success"
                        src={FormCompleteIcon}
                        className="size-4 scale-90"
                    />
                    <span className="font-dm text-white font-semibold text-xs">
                        Message Sent!
                    </span>
                </p>
                <span className="text-c_grey500 font-dm text-xs">
                    Thanks for completing the form. We'll be in touch soon!
                </span>
            </div>,
            {
                classNames: {
                    toast: "bg-[#2f4143]",
                },
            }
        );
    };
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
                className="rounded-lg bg-white lg:p-8 p-4 w-full lg:w-[40rem] flex flex-col gap-4"
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
                            {...register("first_name")}
                            className={`rounded-md outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm focus:border-c_green600 ${
                                "first_name" in errors
                                    ? "border-c_red"
                                    : "border-c_grey500"
                            }`}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="first_name"
                            render={({ message }) => (
                                <p className="font-dm text-xs text-c_red pt-2">
                                    {message}
                                </p>
                            )}
                        />
                    </div>
                    <div className="flex flex-col relative">
                        <label className={labelClassName} htmlFor="last_name">
                            Last Name <span className="text-c_green600">*</span>{" "}
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            {...register("last_name")}
                            className={`rounded-md outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm focus:border-c_green600 ${
                                "last_name" in errors
                                    ? "border-c_red"
                                    : "border-c_grey500"
                            }`}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="last_name"
                            render={({ message }) => (
                                <p className="font-dm text-xs text-c_red pt-2">
                                    {message}
                                </p>
                            )}
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
                        {...register("email")}
                        className={`rounded-md outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm focus:border-c_green600 ${
                            "email" in errors
                                ? "border-c_red"
                                : "border-c_grey500"
                        }`}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                            <p className="font-dm text-xs text-c_red pt-2">
                                {message}
                            </p>
                        )}
                    />
                </div>
                <div className="flex flex-col relative">
                    <span className={labelClassName}>
                        Query Type <span className="text-c_green600">*</span>{" "}
                    </span>
                    <div className="lg:grid grid-cols-2 lg:gap-3 gap-2 flex flex-col">
                        <label
                            role="radio"
                            htmlFor="general_enquiry"
                            className={`rounded-md cursor-pointer flex items-center gap-2 outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm transition ${
                                queryType === "General Enquiry"
                                    ? "bg-c_green200 border-c_green600"
                                    : "border-c_grey500"
                            }`}
                        >
                            <input
                                id="general_enquiry"
                                type="radio"
                                value={"General Enquiry"}
                                {...register("query")}
                                className="hidden"
                            />
                            <div className="size-3 rounded-full border-[1.1px] border-c_grey900">
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
                            className={`rounded-md cursor-pointer flex items-center gap-2 outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm transition ${
                                queryType === "Support Request"
                                    ? "bg-c_green200 border-c_green600"
                                    : "border-c_grey500"
                            }`}
                        >
                            <input
                                id="support_request"
                                type="radio"
                                value={"Support Request"}
                                {...register("query")}
                                className="hidden"
                            />
                            <div className="size-3 rounded-full border-[1.1px] border-c_grey900">
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
                    <ErrorMessage
                        errors={errors}
                        name="query"
                        render={({ message }) => (
                            <p className="font-dm text-xs text-c_red pt-2">
                                {message}
                            </p>
                        )}
                    />
                </div>
                <div className="flex flex-col relative">
                    <label className={labelClassName} htmlFor="message">
                        Message <span className="text-c_green600">*</span>{" "}
                    </label>
                    <textarea
                        id="message"
                        {...register("message")}
                        className={`resize-none rounded-md lg:h-20 h-48 leading-4 outline-none border-[1.1px] px-4 py-2 text-sm text-c_grey900 font-dm focus:border-c_green600 ${
                            "message" in errors
                                ? "border-c_red"
                                : "border-c_grey500"
                        }`}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="message"
                        render={({ message }) => (
                            <p className="font-dm text-xs text-c_red pt-2">
                                {message}
                            </p>
                        )}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label
                        htmlFor="consant"
                        className="relative flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            id="consant"
                            type="checkbox"
                            {...register("consant")}
                            className="hidden"
                        />
                        <div
                            className="size-3 border-[1.05px] border-c_grey500 cursor-pointer"
                            role="checkbox"
                        >
                            {isConsant && (
                                <img src={CheckedIcon} alt="checked" />
                            )}
                        </div>
                        <span className={labelClassName}>
                            I consant to being contacted by the team{" "}
                            <span className="text-c_green600">*</span>{" "}
                        </span>
                    </label>
                    <ErrorMessage
                        errors={errors}
                        name="consant"
                        render={({ message }) => (
                            <p className="font-dm text-xs text-c_red">
                                {message}
                            </p>
                        )}
                    />
                </div>
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
