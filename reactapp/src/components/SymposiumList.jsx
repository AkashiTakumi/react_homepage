import { useMemo } from "react";

const SymposiumList = () => {
    const conferenceList = [
        "2021年3月 SC研究会 「サイバーフィジカルシステムを支えるサービスコンピューティング技術及び一般」",
        "2021年7月 認知症予防学会",
        "2021年11月 SC研究会 「社会変化に伴う際のサービスとソフトウェア・システム構築とその高度化および一般」",
        "2022年3月 NLC研究会 「観光情報処理と一般」",
        "2022年3月 KBSE研究会",
        "2022年6月 36th Global Conference of Alzheimer's Disease International"
    ]

    const columns = useMemo(
        () => [
            {Header: "学会名", accessor: "conference"},
            {Header: "サイト", accessor: "site"}
        ]
    )

    return();
}