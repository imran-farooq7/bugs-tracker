"use client";
import { Button, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
	const { register, handleSubmit, control, formState } = useForm();
	const { errors } = formState;
	const router = useRouter();
	const onSubmit = async (data: any) => {
		await axios.post("/api/issues", data);
		router.push("/issues");
	};
	return (
		<form className="max-w-xl p-5 space-y-3" onSubmit={handleSubmit(onSubmit)}>
			<TextField.Root>
				<TextField.Input
					placeholder="Title"
					{...register("title", {
						required: "Title is required",
					})}
				/>
			</TextField.Root>
			{errors.title && (
				<Text color="red" className="pt-4">
					{errors.title.message as string}
				</Text>
			)}
			<Controller
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
				{...register("description", {
					required: "Description is required",
				})}
				control={control}
			/>
			{errors.description && (
				<Text color="red" className="block">
					{errors.description.message as string}
				</Text>
			)}
			<Button radius="large">Submit New Issue</Button>
		</form>
	);
};
export default NewIssuePage;
