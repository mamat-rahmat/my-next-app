interface Props {
    params: Promise<{ id: string }>;
}

export default async function EventDetail({ params }: Props) {
    const { id } = await params;

    return (
        <div className="flex flex-col gap-8 items-center text-center">
            <section className="max-w-xl w-full">
                <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100 mb-4">
                    Event Details
                </h2>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                    You&#39;re viewing details for event with ID: <span className="font-medium">{id}</span>
                </p>
                <img
                    src={`https://picsum.photos/id/${id}/400/300`}
                    alt={`Event ${id}`}
                    className="rounded-lg shadow-md mx-auto"
                />
            </section>
        </div>
    );
}