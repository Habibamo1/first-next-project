'use client'

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-400">Something went wrong </h1>
            <p className="text-gray-400 mb-6">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-2xl hover:bg-yellow-300 transition-all"
            >
                Try again
            </button>
        </div>
    )
}
