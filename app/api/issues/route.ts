import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
	const body = await request.json();
	if (!body.title || !body.description) {
		return NextResponse.json(
			"please provide a description and title of the issue",
			{ status: 401 }
		);
	}
	const newIssue = await prisma.issue.create({
		data: {
			title: body.title,
			description: body.description,
		},
	});

	return NextResponse.json("Issue created successfully", { status: 201 });
}
