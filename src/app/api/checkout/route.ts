import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	console.log("executando POST");
	console.log(req.body);

	return NextResponse.json(
		{
			success: true,
			message: "executado",
		},
		{            
			status: 201,
		},
	);
}