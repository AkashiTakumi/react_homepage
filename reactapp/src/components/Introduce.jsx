import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';

const Introduce = () => {
    return (
        <>
        <h1 className="myname">明石 拓弥</h1>
        <label><SchoolIcon/></label><span>神戸大学大学院 システム情報学研究科 M2</span>
        <h2>[Profile]</h2>
        <div>
            <label><CakeIcon/></label><span>1998年6月26日 かに座O型</span>    
        </div>
        <div>
            <label><EmailIcon/></label><span>akataku@ws.cs.kobe-u.ac.jp</span>
        </div>
        <div>
            <p>人感センサ等のセンサを搭載したセンサボックスと，スピーカーを繋いだIoTスピーカーを利用して，高齢者宅における音声支援の研究をしています．
                研究に関する紹介ページは<a href="https://cs27.org/?%BA%DF%C2%F0%B9%E2%CE%F0%BC%D4%A4%F2%BB%D9%B1%E7%A4%B9%A4%EB%B8%C4%BF%CD%C5%AC%B1%FE%B7%BF%A5%B9%A5%D4%A1%BC%A5%AB%A1%BC">こちら</a>．
            </p>
            <p>2021年には神戸大学の学生チームと三田市が連携して，クイズラリーアプリ「モイ！サンタクエスト」を開発しました(現在はイベント期間外のため閉鎖中)．
                広報サイトのリンクは<a href="https://www.city.sanda.lg.jp/soshiki/17/gyomu/gaiyo/city_sales/project/3914.html">こちら</a>．</p>
        </div>
        </>
    );
}

export default Introduce;