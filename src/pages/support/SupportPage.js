import SupportAniation from "../../animation/SupportAnimation";
import Layout from "../../layout/Layout";

export default function SupportPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around w-full">
        <div className="w-[1300px] h-[800px] flex flex-col justify-between items-center gap-10">
          <div className="flex flex-col gap-10 items-center">
            <span className="text-8xl">Support center</span>
            <span className="text-5xl">무엇을 도와드릴까요?</span>
          </div>
          <SupportAniation />
          <div className="flex justify-center items-center w-[30%] rounded-3xl h-[100px] bg-indigo-600  text-7xl shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <a
              href="mailto:gnswldms2@gmail.com?subject=문의드립니다&body=안녕하세요."
              className="text-white"
            >
              이메일 보내기
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
