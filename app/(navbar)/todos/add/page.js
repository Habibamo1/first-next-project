import { newTodo } from '@/lib/action'
import React from 'react'

const Add = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">إضافة مهمة جديدة</h2>

                </div>

                <form className="space-y-3" action={newTodo}>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">العنوان</label>
                        <input
                            autoFocus
                            required
                            className="w-full border rounded px-3 py-2"
                            placeholder="مثال: تعلم Next.js"
                            name='title'
                            id='title'
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">المؤلف ( اختياري)</label>
                        <input
                            id="author"
                            className="w-full border rounded px-3 py-2"
                            placeholder="مثال: Habiba :)"
                            name='author'
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-60"
                        >
                            إضافة المهمة
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add