'use server'
import { redirect } from "next/navigation";
import { Todo } from "./models/todos";

export async function newTodo(formData) {
    try {
        const title = await formData.get("title");
        const author = await formData.get("author");

        await Todo.create({ title, author });
    } catch (err) {
        console.error("Error Occured !!", err);
    }

    redirect("/todos")
}


// export async function deleteTodo(id) {
//     try {
//         await Todo.deleteOne({ _id: id })

//     } catch (err) {
//         console.error("Error Occured !!", err);
//     }

//     redirect("/todos")
// }