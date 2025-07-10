export default function AboutPage() {
    return (
        <div className="flex flex-col gap-8 items-center text-center">
            <section className="max-w-xl">
                <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100 mb-2">About Coding Club</h2>
                <p className="text-gray-700 dark:text-gray-200">
                    We are a team of passionate developers building a community to learn and grow together.
                </p>
            </section>

            <section className="max-w-xl w-full">
                <h3 className="text-xl font-medium text-indigo-700 dark:text-indigo-200 mb-4">Organization Structure</h3>
                <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300 space-y-1">
                    <li>President: Alice Johnson</li>
                    <li>Vice President: Bob Smith</li>
                    <li>Secretary: Carol Lee</li>
                    <li>Treasurer: David Kim</li>
                    <li>Lead Mentor: Emily Chen</li>
                    <li>Event Coordinator: Frank Miller</li>
                </ul>
            </section>
        </div>
    );
}
