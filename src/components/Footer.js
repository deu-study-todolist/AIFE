export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center w-full h-[160px] bg-[#d9d9d9] p-6 border-t lg:p-8">
        <div className="flex justify-between w-[1300px]">
          <div className="flex flex-col justify-around">
            <span className="text-2xl">Team. 니깡내깡</span>
            <div className="flex gap-10 text-xl">
              <span>팀장. 김민우</span>
              <span>팀원. 박재욱 , 김민수 , 신형민</span>
            </div>
            <div className="flex flex-col text-xl gap-2">
              <span>Location. 부산광역시 부산진구 엄광로 176</span>
              <div className="flex gap-10 text-xl">
                <span>P. 010-4005-2469</span>
                <span>E-mail. gnswldms2@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img alt="logo" src="/images/logo.png" className="size-56" />
          </div>
        </div>
      </div>
    </footer>
  );
}
