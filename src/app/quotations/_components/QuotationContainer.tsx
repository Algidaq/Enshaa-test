import QutationsCard from "./QuotationCard";
import Quotation from "@/service/qutation";
import { QutationNavbar } from "./QutationNavbar";
export default function QutationsContainar({
  Qutations,
}: {
  Qutations: Quotation[] | null;
}) {
  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="md:container md:mx-auto max-md:px-4 flex flex-col justify-end items-center pt-[20px] bg-[#F9FAFB] gap-4">
        <QutationNavbar />
        <hr className="border-divider" />
        <div className="grid md2:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-8 w-full place-content-stretch pb-[20px] h-full">
          {Qutations?.map((qutation: Quotation, i: any) => (
            <QutationsCard qutation={qutation} key={qutation.id.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}
