import { connectDB } from "@/lib/dbConnection";
import { NextResponse } from "next/server";


const { Todo } = require("@/lib/models/todos");

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