import Layout from "../../layout/Layout";

export default function Support() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around w-full">
        <div className="flex flex-col items-center gap-10">
          <span className="text-8xl">Support center</span>
          <span className="text-5xl">무엇을 도와드릴까요?</span>
          <video
            className="w-auto h-[400px] bg-white"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/support.webm" type="video/webm" />
            <source src="/video/support.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-12 text-center text-2xl md:text-3xl space-y-4 font-semibold">
          <span>P. 010-4005-2469</span>
          <span>E-mail. gnswldms2@gmail.com</span>

          <button>34</button>
        </div>
      </div>
    </Layout>
  );
}

<div className="relative isolate px-6 pt-14 lg:px-8">
  {/* 그라데이션 1*/}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
    />
  </div>

  {/* 그라데이션 2 */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%+35rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+25rem)]"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
    />
  </div>
</div>;
