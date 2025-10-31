"use client";
import { deleteTodo } from "@/lib/action";
import { useEffect, useState } from "react";

export default function TodosPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTodo, setEditingTodo] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    useEffect(() => {

        fetch("/api/todos")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setTodos(data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching todos:", err);
                setLoading(false);
            });
    }, []);

    const handleUpdate = async (id) => {
        const res = await fetch(`/api/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle, author: newAuthor }),
        });

        if (res.ok) {
            const updated = await res.json();
            setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
            setEditingTodo(null);
        } else {
            console.error("Failed to update todo");
        }
    };

    const handleDelete = async (id) => {
        const res = await fetch(`/api/todos/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            // حذف العنصر من الواجهة بدون الحاجة لإعادة تحميل الصفحة
            setTodos((prev) => prev.filter((t) => t._id !== id));
        } else {
            console.error("Failed to delete todo");
        }
    };

    if (loading) return <p className="text-center mt-10 text-gray-600">جارٍ التحميل...</p>;

    if (!todos.length)
        return <p className="text-center mt-10 text-gray-600">لا توجد مهام حالياً 😅</p>;

    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <div>

                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                    قائمة المهام (Todos)
                </h1>
                <button
                    onClick={() => window.location.href = '/todos/add'}
                    className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    ➕ إضافة مهمة جديدة
                </button>
            </div>
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <ul className="space-y-4">
                    {todos.map((todo, i) => (
                        <li
                            key={todo._id || i}
                            className="border-b border-gray-200 pb-2 hover:bg-gray-50 rounded-lg p-3 transition"
                        >
                            {editingTodo === todo._id ? (
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        className="border p-2 w-full rounded"
                                    />
                                    <input
                                        type="text"
                                        value={newAuthor}
                                        onChange={(e) => setNewAuthor(e.target.value)}
                                        className="border p-2 w-full rounded"
                                    />
                                    <button
                                        onClick={() => handleUpdate(todo._id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                    >
                                        حفظ
                                    </button>
                                    <button
                                        onClick={() => setEditingTodo(null)}
                                        className="bg-gray-400 text-white px-3 py-1 rounded"
                                    >
                                        إلغاء
                                    </button>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {todo.title}
                                        </h2>
                                        <p className="text-sm text-gray-500">👤 {todo.author}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setEditingTodo(todo._id);
                                            setNewTitle(todo.title);
                                            setNewAuthor(todo.author);
                                        }}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        ✏️ تعديل
                                    </button>

                                    <button
                                        onClick={() => handleDelete(todo._id)}
                                        type="submit"
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        🗑️ حذف
                                    </button>

                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </main>);
}
