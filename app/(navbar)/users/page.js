// app/users/page.js

import { getDataISR } from "@/components/utils";

export default async function UsersPage() {
    const users = await getDataISR("https://68ff5fb7e02b16d1753dab64.mockapi.io/users/v1/users", 10);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Users 😊</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-200"
                    >
                        <h2 className="font-semibold text-lg mb-2">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
