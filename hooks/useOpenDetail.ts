import { useState } from "react";

const useOpenDetail = () => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const hanldeOpenDetail = () => setIsOpenDetail(true);
    const hanldeClostDetail = () => setIsOpenDetail(false);

    return {
        isOpenDetail, setIsOpenDetail,
        hanldeOpenDetail,hanldeClostDetail
    }
}
export default useOpenDetail