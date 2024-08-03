import NavPage from "@/components/navpage";
import DetailsContainar from "./_components/detailsContainar";
import QutationsDetails from "./_components/qutationDetails";

import { apiQutationById } from "@/service";
import Quotation from "@/service/qutation";

import { redirect, usePathname } from "next/navigation";

import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { Icon } from "@/components";
import { parseISO, format } from "date-fns";
import { ar } from "date-fns/locale";

export default async function QuotationDetails(params: {
  params: { id: string };
}) {
  const _id = Number(params.params.id);
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }

  const _data = await apiQutationById(_id, token);

  if (_data === null) {
    redirect("/");
  }

  return (
    <div id="root">
      <NavBar token={token} />
      <NavPage nameOfsubpage={["عرض طلبات التسعير"]} name="عرض تفاصيل الطلب" />
      {/* <PendingQuotation quotation={_data} /> */}
      {_data?.status === "WAITING_FOR_APPROVAL" ? (
        <QutationsDetails qutation={_data} />
      ) : (
        <DetailsContainar qutation={_data} />
      )}
    </div>
  );
}

// const PendingQuotation: React.FC<{ quotation: Quotation }> = ({
//   quotation,
// }) => {
//   return (
//     <div className="md:container md:mx-auto max-md:px-4 py-8">
//       <div className="bg-netural-100 border border-divider rounded-[0.75rem]">
//         <div className="py-8 px-4">
//           <QuotationHeader
//             id={quotation.id.toString()}
//             date={formatDateTimeAr(quotation.createdAt)}
//           />
//           <div className="mt-4">
//             <div className="border border-divider p-4 rounded-[0.75rem]">

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const QuotationHeader: React.FC<{ id: string; date: string }> = ({
//   id,
//   date,
// }) => {
//   return (
//     <div className="flex flex-row justify-between items-center">
//       <div className="flex gap-4">
//         <div className="h-[28px] w-[28px] rounded-[100%] bg-divider flex items-center justify-center">
//           <Icon icon="Receipt" height={16} width={16} />
//         </div>
//         <div className="self-center flex gap-4">
//           <p className="body_large">رقم طلب عروض الأسعار</p>
//           <span className="font-semibold" dir="ltr">
//             {` # ${id} `}
//           </span>
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <p className="body_large font-light">تم الإنشاء في</p>
//         <p className="body_large font-semibold">{date}</p>
//       </div>
//     </div>
//   );
// };

// function formatDateTimeAr(dateTimeString: string) {
//   console.log("timeNow :" + dateTimeString);
//   if (dateTimeString.length === 0) {
//     return "";
//   }
//   try {
//     const parsedDate = parseISO(dateTimeString);
//     const formattedDate = format(parsedDate, "dd MMMM, yyyy - hh:mm a", {
//       locale: ar,
//     });
//     return formattedDate;
//   } catch (error) {
//     console.error("Error parsing or formatting date:", error);
//     return ""; // Handle error gracefully in your application
//   }
// }
