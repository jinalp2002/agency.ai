import toast from "react-hot-toast";
import assets from "../assets/assets"
import Title from "./Title"

// import { useState } from "react";


const ContactUs = () => {
    // const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //It stop to reload the page
        const form = event.currentTarget; // actual form element

        const formData = new FormData(event.currentTarget); //It formdata collect


        //append = new key-value pair  add (access-key)
        formData.append("access_key", "0092be9e-6211-4aa1-939f-f5d18d11cc7e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            type ApiResponse = {
                success: boolean;
                message: string;
            };

            const data: ApiResponse = await response.json();

            if (data.success) {
                toast.success('Thank you for submission')
                form.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) { //error is a variable when error comes true the error is come on (erro)
            if (error instanceof Error) { //it check error is really of javascript object
                toast.error(error.message)
            } else {
                toast.error("Something went wrong")
            }
        }


    };


    return (
        <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="" />
                        <input type="text" name="name" placeholder="Enter your name"
                            className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="" />
                        <input type="email" name="email" placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" required rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"></textarea>
                </div>

                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">Submit
                    <img src={assets.arrow_icon} alt="" className="w-4" />
                </button>
            </form>
            {/* <span>{result}</span> */}
        </div>
    )
}

export default ContactUs