import { Pricing, PricingMode } from "@/types/interfaces";
import { FC } from "react";
import Button from "@/components/Button";
import { Check } from "lucide-react";

interface PricingCardProps extends Pricing {
  mode: PricingMode;
}

const PricingCard: FC<PricingCardProps> = ({
  annullyPrice,
  description,
  features,
  monthlyPrice,
  title,
  glowPostion,
  isMostPopular,
  mode,
}) => {
  return (
    <article
      className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-6 rounded-lg overflow-hidden ${
        isMostPopular
          ? "border-2 border-sky-700 bg-slate-800"
          : "border border-slate-700"
      }`}
    >
      <figure
        className={`absolute w-72 h-60 bg-sky-600 -z-10 rounded-full blur-3xl opacity-20 -top-12 ${
          glowPostion === "left" ? "-left-8" : "-right-8"
        }`}
      />
      {isMostPopular && (
        <p className="absolute top-5 right-6 bg-sky-600 text-slate-100 text-xs font-semibold capitalize py-2 px-3 rounded-3xl">
          most popular
        </p>
      )}
      <h1 className="text-slate-100 font-bold text-base capitalize">{title}</h1>
      <p>{description}</p>
      <h1 className="font-extrabold text-slate-100 text-4xl">
        ${mode === "monthly" ? monthlyPrice : annullyPrice}
        <small className="text-base font-semibold ps-1 text-slate-300">
          /{mode === "monthly" ? "month" : "year"}
        </small>
      </h1>
      <Button variant={isMostPopular ? "primary" : "scondary"} isFullSize>
        by plan
      </Button>
      <ul className="space-y-4">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <Check className="text-sky-600" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingCard;
