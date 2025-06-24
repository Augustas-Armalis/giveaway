import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import PricingTopBar from "../components/PricingTopBar.jsx";
import PricingRow from "../components/PricingRow.jsx";
import PricingBtn from "../buttons/PricingBtn.jsx";

const LeftPricingBox = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "aweb" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#ffffff" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-[327px] h-fit bg-[var(--gray4)]/0 border border-[var(--gray3)] max-[450px]:w-full !p-[16px] rounded-[16px] hover:bg-[var(--gray4)]/45 transition-colors ease-out duration-400">
      <div className="flex flex-col gap-1">
        <PricingTopBar
          title="Figma project"
          src="images/svgs/FigmaOutline.svg"
          bg="bg-[#03090C]"
          border="border-[#025385]"
          textColor="text-[#009DFF]"
        />

        <div className="flex justify-between !mt-3">
          <p className="smif text-[22px]">Website Design</p>
          <p className="smif text-[20px]">
            €1.5K<span className="alt !ml-[2px]">+</span>
          </p>
        </div>

        <p className="sf text-[16px] text-[var(--gray1)] leading-[130%] max-w-[200px]">
          Only custom web-copy and entire website design
        </p>

        <div className="w-full h-[1px] bg-[var(--gray3)] !my-2.5" />

        <div className="flex flex-col gap-[7px]">
          <PricingRow title="Full design" src="images/svgs/Figma.svg" />
          <PricingRow title="Single page" src="images/svgs/Page.svg" />
          <PricingRow title="Copywriting" src="images/svgs/Pen.svg" />
          <PricingRow title="Custom visuals" src="images/svgs/Image.svg" />
          <PricingRow title="1 week delivery" src="images/svgs/Calendar.svg" />
        </div>

        <PricingBtn
          title="Apply now"
          className="bg-[var(--gray4)]/80 border border-[var(--gray2)]/60 hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]"
          text="text-white"
          data-cal-namespace="aweb"
          data-cal-link="augustas/aweb"
          data-cal-config='{"layout":"month_view"}'
        />
      </div>
    </div>
  );
};

export default LeftPricingBox;
