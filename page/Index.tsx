import Character from "@/components/Character"
import DetailChar from "@/components/DetailChar"
import SelectChar from "@/components/SelectChar"

const Index = () => {
    return (
        <div className="max-w-screen h-screen flex ">
            <div className="w-1/3 bg-amber-400 h-full">
                <Character className=""/>
            </div>
            <div className="w-2/3 bg-red-400 h-full">
                <SelectChar className=""/>
            </div>
            <div className="max-w-full h-full ">
                <DetailChar className="hidden"/>
            </div>
        </div>
    )
}

export default Index
