import Image from "next/image";

export function Support() {
  return (
    <section className="bg-[#F4F8FE] flex items-center justify-center md:h-[260px] md:px-4">
      <div className="max-w-[1040px] flex md:flex-row flex-col items-center justify-center py-10 md:py-0 gap-5">
        <h2 className="text-[#450000] font-extrabold text-[32px] md:text-start text-center md:w-1/2">
          Care Me Supplier Support <br />
          Available 24/7
        </h2>
        <div className="md:w-1/2 flex flex-col gap-5 px-4 md:px-0">
          <p className="text-gray-600 md:text-start text-center">
            Meesho supplier support is available to solve all your doubts and
            issues, before and after you start your online selling business.
          </p>
          <div className="inline-flex gap-3 md:items-start items-center md:justify-start justify-center">
            <div className="bg-[#450000] px-3 py-2 rounded-[5px]">
              <Image
                src={"svg/envelope-mail.svg"}
                className="text-white"
                alt="WhatsApp"
                width={20}
                height={20}
              />
            </div>
            <div className="text-center md:text-start">
              <p className="text-[#000]">You can reach out to</p>
              <p className="text-gray-500">support@caremebd.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
