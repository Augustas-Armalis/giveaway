import HeroTitle from "../components/HeroTitle"
import HeroButtons from "../components/HeroButtons"
import TopLogo from "../components/TopLogo.jsx"
import InfiniteSliders from "../components/InfiniteSliders.jsx"
import RecentBrands from "../components/RecentBrands.jsx"

const Hero = ({spots}) => {

    return (
        <> 
            <div className="flex flex-col items-center justify-center gap-[128px] max-[548px]:gap-[92px]">
                <div className="w-[1000px] relative h-fit !pt-[42px] !px-8 max-[1064px]:w-full max-[548px]:!px-4 max-[548px]:!pt-4">
                    <TopLogo />
                    
                    <HeroTitle spots={spots}/>
                    <HeroButtons />
                </div>
                <InfiniteSliders />

                <RecentBrands />
            </div>


        </>
    )
}

export default Hero;