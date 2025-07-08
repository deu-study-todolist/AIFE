import Header from "../../components/Header";

export default function MainPage() {
  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* 그라데이션 1*/}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>
        <div>
          <div className="mx-auto max-w-7xl py-56 h-full sm:py-56 lg:py-56"></div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-2 text-2xl text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              제품에 대해 더 알고 싶으신가요?.{" "}
              <a href="/features" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />더 보러
                가기 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-semibold tracking-tight text-gray-900 sm:text-8xl  ">
              모든 대화가 통하는 세상으로
            </h1>
            <p className="mt-8 text-3xl font-medium text-gray-500 sm:text-4xl">
              어떤 지역 방언도 쉽게 이해하고 소통하세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/product"
                className="rounded-md bg-indigo-600 px-4 py-3 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="/features"
                className="text-3xl font-semibold text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* 그라데이션 2 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-8rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
}
