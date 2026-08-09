import {
  Play,
} from "lucide-react";

import Container from "../common/Container";

function StudentVideos({ videos }) {
  return (
    <section
      id="student-videos"
      className="bg-white py-16 sm:py-20"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Student Videos
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Hear From Our Students
          </h2>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-slate-200"
            >

              <div className="aspect-video overflow-hidden">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition group-hover:bg-slate-950/40">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-slate-950 shadow-xl transition group-hover:scale-110">

                  <Play
                    size={25}
                    fill="currentColor"
                  />

                </div>

              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 pt-16">

                <h3 className="text-lg font-black text-white">
                  {video.title}
                </h3>

              </div>

            </a>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default StudentVideos;