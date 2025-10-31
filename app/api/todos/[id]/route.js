import { connectDB } from "@/lib/dbConnection";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await req.json();
        const todo = await Todo.findByIdAndUpdate(id, body, { new: true, runValidators: true });


        if (!todo) {
            return NextResponse.json({ success: false, message: "Todo not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: todo }, { status: 200 });
    } catch (err) {
        console.log("Error Occured", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });

    }

}


export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        await Todo.findByIdAndDelete(id);
        return NextResponse.json({ message: "Todo deleted successfully" }, { status: 200 });
    } catch (err) {
        console.log("Error Occured", err);
        return NextResponse.json({  message: err.message }, { status: 500 });

    }

}