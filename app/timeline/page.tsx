import { getTimelineEvents } from "../get-timeline-events";
import { Timeline } from "../components/Timeline";

export const revalidate = 60;

export const metadata = {
  title: "Timeline | Tomas Holtz",
  description:
    "Los momentos que me trajeron hasta aca. Una linea de tiempo interactiva con cada proyecto, decision y experiencia.",
};

export default async function TimelinePage() {
  const events = await getTimelineEvents();

  return (
    <div className="w-full flex flex-col items-center min-h-[85vh] py-4 md:py-8">
      <Timeline events={events} />
    </div>
  );
}
