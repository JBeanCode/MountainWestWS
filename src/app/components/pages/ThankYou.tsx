export default function ThankYou() {

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-[rgb(39,89,83)] mb-6">
                    Thank You!
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Your message has been sent successfully.
                    We’ll get back to you shortly.
                </p>
                <a
                    href="/"
                    className="inline-block bg-[rgb(39,89,83)] text-white px-6 py-3 rounded hover:bg-[rgb(29,79,73)] transition-colors"
                >
                    Return Home
                </a>
            </div>
        </div>
    );
}