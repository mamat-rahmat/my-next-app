export default function FAQPage() {
    return (
        <div className="flex flex-col gap-8 items-center text-center">
            <section className="max-w-xl">
                <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100 mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-700 dark:text-gray-200">
                    Have questions about Coding Club? We've got answers.
                </p>
            </section>

            <section className="max-w-xl w-full">
                <ul className="space-y-6 text-left text-gray-600 dark:text-gray-300">
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">What is the Coding Club?</strong>
                        <p>The Coding Club is a community for students interested in learning and practicing programming.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">Who can join the Coding Club?</strong>
                        <p>Anyone with an interest in coding, regardless of experience level, is welcome to join.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">How do I become a member?</strong>
                        <p>You can become a member by signing up on our website or attending one of our meetings.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">When and where does the club meet?</strong>
                        <p>We meet every Friday at 5 PM in Room 101 of the main building.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">Do I need prior programming experience?</strong>
                        <p>No prior experience is required. We offer beginner-friendly sessions and resources.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">What programming languages do you teach?</strong>
                        <p>We cover a variety of languages including Python, JavaScript, and Java.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">Are there any membership fees?</strong>
                        <p>No, joining the Coding Club is completely free.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">What activities does the club organize?</strong>
                        <p>We organize coding workshops, hackathons, guest lectures, and group projects.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">How can I stay updated about club events?</strong>
                        <p>You can follow our social media pages or subscribe to our newsletter for updates.</p>
                    </li>
                    <li>
                        <strong className="text-indigo-700 dark:text-indigo-300">Who can I contact for more information?</strong>
                        <p>You can email us at codingclub@example.com for any questions or information.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
