export default function NavPage({
  name,
  nameOfsubpage,
}: {
  name: string;
  nameOfsubpage?: string[];
}) {
  return (
    <div className="w-full bg-[#E0ECF6]">
      <div className="md:container md:mx-auto max-md:px-4">
        <div className="flex flex-row items-center justify-start p-[10px] gap-4 h-[88px]">
          <p className="text-[#999999]">الصفحة الرئيسية</p>
          {nameOfsubpage?.length != 0 && nameOfsubpage != undefined ? (
            <>
              {nameOfsubpage.map((page: string, i: any) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-start gap-4 h-[88px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                      fill="#999999"
                    />
                  </svg>
                  <p className="text-[#999999]">{page}</p>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
          <svg
            width="16"
            height="16"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
              fill="#999999"
            />
          </svg>
          <p className="text-[#451E7B]"> {name}</p>
        </div>
      </div>
    </div>
  );
}
