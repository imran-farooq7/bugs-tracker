"use client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
	const { register, handleSubmit, control } = useForm();
	const router = useRouter();
	const onSubmit = async (data: any) => {
		await axios.post("/api/issues", data);
		router.push("/issues");
	};
	return (
		<form className="max-w-xl p-5 space-y-3" onSubmit={handleSubmit(onSubmit)}>
			<TextField.Root>
				<TextField.Input placeholder="Title" {...register("title")} />
			</TextField.Root>
			<Controller
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
				{...register("description")}
				control={control}
			/>
			<Button radius="large">Submit New Issue</Button>
		</form>
	);
};
export default NewIssuePage;
