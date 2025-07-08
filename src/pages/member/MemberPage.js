import Layout from "../../layout/Layout";
import CardSwiper from "../../swiper/CardSwiper";

export default function MemberPage() {
  return (
    <Layout>
      <div className="flex justify-center w-full">
        <div className="flex w-[1300px] justify-center items-start pt-10">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <CardSwiper />
          </div>
        </div>
      </div>
    </Layout>
  );
}
