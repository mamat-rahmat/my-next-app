export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center text-center">
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
        Welcome to the Coding Club! 🚀<br />
        Join us to learn, build, and collaborate on exciting programming projects.
      </p>
      <ul className="list-disc list-inside text-left text-base text-gray-600 dark:text-gray-300 space-y-2">
        <li>Weekly coding sessions and workshops</li>
        <li>Collaborative projects and hackathons</li>
        <li>Mentorship and peer learning</li>
        <li>All skill levels welcome!</li>
      </ul>
      <div className="flex gap-4 flex-col sm:flex-row justify-center">
        <a
          className="rounded-full bg-indigo-600 text-white font-semibold px-6 py-3 hover:bg-indigo-700 transition-colors shadow"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfgt7VHzHw7m7tmzTeUn0iFu26zO8-fiOCQLLQ8nLa7sOyU2Q/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Club
        </a>
        <a
          className="rounded-full border border-indigo-600 text-indigo-700 dark:text-indigo-200 font-semibold px-6 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
          href="mailto:contact@codingclub.org"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
