import PricingTopBar from "../components/PricingTopBar.jsx";
import PricingRow from "../components/PricingRow.jsx";
import PricingBtn from "../buttons/PricingBtn.jsx";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const RightPricingBox = () => {
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
          title="Front-end services"
          src="images/svgs/CodeYellow.svg"
          bg="bg-[#120F07]"
          border="border-[#886E38]"
          textColor="text-[#FFCD69]"
        />

        <div className="flex justify-between !mt-3">
          <p className="smif text-[22px] ">Enterprise</p>
          <p className="smif text-[20px]">
            €4K<span className="alt !ml-[2px]">+</span>
          </p>
        </div>

        <p className="sf text-[16px] text-[var(--gray1)] leading-[130%] max-w-[240px]">
        A bigger brand? no problem, your big idea will need more than 1 page
        </p>

        <div className="w-full h-[1px] bg-[var(--gray3)] !my-2.5" />

        <div className="flex flex-col gap-[7px]">
          <PricingRow title="Priority support" src="images/svgs/Star.svg" />
          <PricingRow title="Unlimited pages " src="images/svgs/Pages.svg" />
          <PricingRow title="Custom projects" src="images/svgs/Potion.svg" />
          <PricingRow title="Team integration" src="images/svgs/People.svg" />
          <PricingRow title="Monthly updates $+" src="images/svgs/Spin.svg" />
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

export default RightPricingBox;