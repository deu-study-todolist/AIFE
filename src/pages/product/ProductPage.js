import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { postData } from "../../api/Product";

export default function ProductPage() {
  const [text, setText] = useState("");
  const [data, setData] = useState();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak1 = () => {
    if (!text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak2 = () => {
    const speakText = data?.converted?.trim();

    if (!speakText) return;

    const utterance = new SpeechSynthesisUtterance(speakText);
    utterance.lang = "ko-KR";
    window.speechSynthesis.speak(utterance);
  };

  const handleClear = () => {
    setText("");
    setData("");
  };

  const handleCopy1 = async () => {
    try {
      if (!text.trim()) return;
      await navigator.clipboard.writeText(text);
      alert("텍스트가 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
      alert("복사에 실패했습니다.");
    }
  };

  const handleCopy2 = async () => {
    try {
      const copiedText = data?.converted?.trim();
      if (!copiedText) return;

      await navigator.clipboard.writeText(copiedText);
      alert("텍스트가 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
      alert("복사에 실패했습니다.");
    }
  };

  const handleTranslate = () => {
    postData({
      values: { sentence: text },
      successFn: (result) => {
        console.log("번역 결과:", result);
        setData(result);
      },
      failFn: () => {
        alert("요청은 갔지만 실패했습니다.");
      },
      errFn: (msg) => {
        alert(msg);
      },
    });
  };

  return (
    <Layout>
      <div className="flex justify-center w-full">
        <div className="flex w-[1300px] justify-around pt-20 ">
          {/* 사투리 쪽 */}
          <div className="w-[45%] h-[300px] border rounded-3xl flex flex-col">
            <div className="w-full h-[60px] flex items-center justify-between border-b text-3xl p-5 text-[#333]">
              사투리
              {data?.region && <h2>지역 : {data.region}</h2>}
            </div>
            <div className="h-full">
              <textarea
                className="w-[90%] h-[180px] p-5 pt-7 text-4xl resize-none"
                value={text}
                onChange={handleTextChange}
                placeholder="텍스트를 입력하세요"
              />

              {text ? (
                <button
                  className="pt-4 absolute bg-[#fff] size-16"
                  onClick={handleClear}
                >
                  <img
                    src="/images/close.png"
                    alt="clearBt"
                    className="size-14"
                  />
                </button>
              ) : null}
              <div className="w-full h-[65px] border-t rounded-b-3xl bg-slate-50 flex items-center ">
                <div className="w-full h-full flex">
                  <button
                    onClick={handleSpeak1}
                    className="w-[20%] min-w-[90px] h-full border-r flex justify-center items-center "
                  >
                    <img
                      src="/images/volume.png"
                      alt="volume"
                      className="h-auto w-12"
                    />
                  </button>
                  <button
                    className="w-[20%] min-w-[90px] h-full border-r flex justify-center items-center"
                    onClick={handleCopy1}
                  >
                    <img
                      src="/images/copy.png"
                      alt="copy"
                      className="h-auto w-12"
                    />
                  </button>
                </div>
                <button
                  className="relative top-0.5 w-[30%] h-full  rounded-br-3xl bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-3xl"
                  onClick={handleTranslate}
                >
                  번역하기
                </button>
              </div>
            </div>
          </div>
          {/* 표준어 */}
          <div className="w-[45%] h-[300px] border rounded-3xl flex flex-col">
            <div className="w-full h-[60px] flex items-center justify-between border-b text-3xl p-5 text-[#333]">
              표준어
            </div>
            <div className="h-full">
              <textarea
                className="w-[90%] h-[180px] p-5 pt-7 text-4xl resize-none "
                value={data?.converted || ""}
                readOnly
              />
              <div className="w-full h-[65px] border-t rounded-b-3xl bg-slate-50 flex items-center ">
                <div className="w-full h-full flex">
                  <button
                    onClick={handleSpeak2}
                    className="w-[20%] max-w-[90px] h-full border-r flex justify-center items-center "
                  >
                    <img
                      src="/images/volume.png"
                      alt="volume"
                      className="h-auto w-12"
                    />
                  </button>
                  <button
                    className="w-[20%] max-w-[90px] h-full border-r flex justify-center items-center"
                    onClick={handleCopy2}
                  >
                    <img
                      src="/images/copy.png"
                      alt="copy"
                      className="h-auto w-12"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
