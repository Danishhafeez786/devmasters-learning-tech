import {
  PlayCircle,
  Video,
} from "lucide-react";

import Container from "../common/Container";

function GalleryVideos() {
  const videos = [
    {
      id: 1,
      title: "Institute Training Session",
      thumbnail: "/images/seminars/seminar-01.jpg",
      url: "#",
    },
    {
      id: 2,
      title: "Student Practical Session",
      thumbnail: "/images/seminars/seminar-03.jpg",
      url: "#",
    },
    {
      id: 3,
      title: "Seminar & Workshop Highlights",
      thumbnail: "/images/seminars/seminar-02.jpg",
      url: "#",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Video Gallery
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              See Our Institute In Action
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Watch highlights from training sessions,
              seminars, workshops and student activities.
            </p>

          </div>

          <Video
            size={36}
            className="hidden text-teal-600 sm:block"
          />

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >

              <div className="aspect-video overflow-hidden">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-slate-950 shadow-xl transition group-hover:scale-110">

                  <PlayCircle
                    size={28}
                    fill="currentColor"
                  />

                </div>

              </div>

              <div className="p-5">

                <h3 className="text-base font-black text-slate-950">
                  {video.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-teal-700">
                  Watch Video →
                </p>

              </div>

            </a>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default GalleryVideos;