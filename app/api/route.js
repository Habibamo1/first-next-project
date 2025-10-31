import { connectDB } from "@/lib/dbConnection";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectDB();
        const todos = await Todo.find();
        return NextResponse.json(todos, { status: 200 });
    } catch (err) {
        console.log("Error Occured", err);
        return NextResponse.json({ message: "Error Occured" }, { status: 500 });
    }
}