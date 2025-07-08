import Layout from "../../layout/Layout";

export default function FeaturesPage() {
  return (
    <Layout>
      <div className="w-full sm:py-12">
        <div className="w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="text-center text-2xl/7 font-semibold text-indigo-600">
            서비스 소개:
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            우리말 사투리 번역기
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    우리 서비스는 대한민국 각 지역의 사투리를 자동으로 표준어로
                    바꿔주는 사투리 자동 번역기입니다.
                  </p>
                  <p className="mt-2 max-w-lg text-3xl text-gray-600 max-lg:text-center">
                    단순한 단어 변환을 넘어서, 인공지능(GPT)을 활용하여 문맥까지
                    고려한 자연스러운 번역을 제공합니다.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  shadow-2xl">
                    <img
                      alt="mainpng"
                      src="images/main.png"
                      className="size-full object-cover object-top rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-3 sm:px-10 sm:pt-5">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    🔍 주요 기능
                  </p>
                  <p className="mt-2 max-w-lg text-2xl text-gray-600 max-lg:text-center">
                    ✅ 사투리 → 표준어 자동 변환
                  </p>
                  <p className="text-base">
                    경상도, 전라도, 충청도 등 다양한 지역의 방언을 인식하여
                    표준어로 바꿔줍니다.
                  </p>
                  <p>
                    단순 단어 매핑 외에도, 인공지능이 문맥을 고려해 자연스럽게
                    번역합니다.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt=""
                    src="/images/product.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    ✅ 빠르고 정확한 대응
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    대부분은 사전 기반으로 빠르게 처리하고,
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    사전에 없는 표현은 GPT를 활용해 유연하게 대응합니다.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      {/* Your code example */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
