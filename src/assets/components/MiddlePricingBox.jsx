import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import PricingTopBar from "../components/PricingTopBar.jsx";
import PricingRow from "../components/PricingRow.jsx";
import PricingBtn from "../buttons/PricingBtn.jsx";

const MiddlePricingBox = () => {
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
    <div className="w-[326px] h-fit bg-[var(--gray4)]/80 border border-[var(--gray3)] max-[450px]:w-full !p-[16px] rounded-[16px] hover:bg-[var(--gray4)]/90 transition-colors ease-out duration-400">
      <div className="flex flex-col gap-1">
        <PricingTopBar
          title="Full web-development"
          src="images/svgs/Stack.svg"
          bg="bg-[#15121D]"
          border="border-[#583E8E]"
          textColor="text-[#9B69FF]"
        />

        <div className="flex justify-between !mt-3">
          <p className="smif text-[22px]">Landing Page</p>
          <p className="smif text-[20px]">
            €2.5K<span className="alt !ml-[2px]">+</span>
          </p>
        </div>

        <p className="sf text-[16px] text-[var(--gray1)] leading-[130%] max-w-[220px]">
          Perfect for Start-ups. Everything included, custom code too.
        </p>

        <div className="w-full h-[1px] bg-[var(--gray3)] !my-2.5" />

        <div className="flex flex-col gap-[7px]">
          <PricingRow title="Full design" src="images/svgs/Figma.svg" />
          <PricingRow title="Single page" src="images/svgs/Page.svg" />
          <PricingRow title="Custom code" src="images/svgs/Code.svg" />
          <PricingRow title="2 weeks delivery" src="images/svgs/Calendar.svg" />
          <PricingRow title="Monthly updates $+" src="images/svgs/Spin.svg" />
        </div>

        <PricingBtn
          title="Apply now"
          className="bg-white border border-[var(--gray4)] hover:opacity-70"
          text="text-black"
          data-cal-namespace="aweb"
          data-cal-link="augustas/aweb"
          data-cal-config='{"layout":"month_view"}'
        />
      </div>
    </div>
  );
};

export default MiddlePricingBox;
