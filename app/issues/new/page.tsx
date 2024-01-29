"use client";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
	return (
		<div className="max-w-xl p-5 space-y-3">
			<TextField.Root>
				<TextField.Input placeholder="Title" />
			</TextField.Root>
			<SimpleMDE placeholder="Description" />
			<Button radius="large">Submit New Issue</Button>
		</div>
	);
};
export default NewIssuePage;