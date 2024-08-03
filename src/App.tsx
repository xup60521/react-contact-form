import { type SubmitHandler, useForm } from "react-hook-form";

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
        handleSubmit,
    } = useForm<FormType>();
    const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);
    errors;

    return (
        <main className="bg-c_green200 flex items-center justify-center p-4 min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg bg-white lg:p-8"
            >
                <h1>Contact Us</h1>
                <div className="lg:grid grid-cols-2">
                    <div className="flex flex-col relative">
                        <label htmlFor="first_name">First Name *</label>
                        <input
                            id="first_name"
                            type="text"
                            {...register("first_name", {
                                required: "This field is required",
                            })}
                        />
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="last_name">Last Name * </label>
                        <input
                            id="last_name"
                            type="text"
                            {...register("last_name", {
                                required: "This field is required",
                            })}
                        />
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="email">Email Address * </label>
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
                    />
                </div>
                <div className="flex flex-col relative">
                    <span>Query Type * </span>
                    <div className="lg:grid grid-cols-2">
                        <label htmlFor="general_enquiry">
                            <input
                                id="general_enquiry"
                                type="radio"
                                value={"General Enquiry"}
                                {...register("query", {
                                    required: "Please select a query type",
                                })}
                            />
                            <span>General Enquiry</span>
                        </label>
                        <label htmlFor="support_request">
                            <input
                                id="support_request"
                                type="radio"
                                value={"Support Request"}
                                {...register("query", {
                                    required: "Please select a query type",
                                })}
                            />
                            <span>Support Request</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="message">Message * </label>
                    <textarea
                        id="message"
                        {...register("message", {
                            required: "This field is required",
                        })}
                        className={`resize-none`}
                    />
                </div>
                <div className="relative flex items-center">
                    <input
                        id="consant"
                        type="checkbox"
                        {...register("consant", {
                            required:
                                "To submit this form, please consant to being contacted",
                        })}
                    />
                    <label htmlFor="consant">
                        I consant to being contacted by the team *{" "}
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
