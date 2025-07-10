import Link from 'next/link';

export default function EventsPage() {
    return (
        <div className="flex flex-col gap-8 items-center text-center">
            <section className="max-w-xl">
                <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100 mb-2">
                    Club Events
                </h2>
                <p className="text-gray-700 dark:text-gray-200">
                    Explore our past and upcoming events. Click on any event to learn more.
                </p>
            </section>

            <section className="max-w-4xl w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
                    {Array.from({ length: 16 }, (_, i) => (
                        <Link
                            key={i + 1}
                            href={`/events/${i + 1}`}
                            className="block border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:shadow-md transition"
                        >
                            Event {i + 1}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
