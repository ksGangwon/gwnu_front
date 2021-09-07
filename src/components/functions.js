import {Link} from 'react-router-dom';
import DetailNotice from './board/DetailNoticePage';

export function pageLoder(detail, number)
{
    if(detail==="introduce"){
        switch (number){
            case "1":
                return <h1>인사말</h1> ;
            case "2":
                return <img src="/images/detail/사업소개.png" alt="사업소개"/>;
            case "3":
                return <h1>주요연혁</h1>;
            case "4":
                return <img src="/images/detail/조직도.png" alt="조직도"/>;
            case "5":
                return <h1>CI 소개</h1>;
            case "6":
                return <h1>참여기관</h1>;
            case "7":
                return <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.5856600206007!2d127.9224207210971!3d37.30495269855958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356376917e5e1783%3A0xbb03d0f1cd046340!2z6rCV66aJ7JuQ7KO864yA7ZWZ6rWQIOybkOyjvOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1621525682297!5m2!1sko!2skr" width="1200" height="500"  allowfullscreen="" loading="lazy"></iframe>;
            default:

            }
    }
    else if(detail==="business"){
        switch (number){
            case "1":
                return <div> <img src="/images/detail/학습프로그램1.png" alt="학습프로그램"/> <img src="/images/detail/학습프로그램2.png" alt="학습프로그램"/></div> ;
            case "2":
                return <h1>현장맞춤형교과과정운영</h1>;
            case "3":
                return <h1>중소기업역량강화</h1>;
            case "4":
                return <h1> 대학체제 개편</h1>;
            default:
        }
    }
    else if(detail==="area"){
        switch (number){
            case "1":
                return <img src="/images/detail/융합지구시설.png" alt="융합지구시설"/> ;
            case "2":
                return <h1>기업연구관안내</h1>;
            default:
        }
    }
    else{
        switch (number){
            case "1":
                return <DetailNotice /> ;
            case "2":
                return <img src="/images/detail/사업소개.png" alt="사업소개"/>;
            case "3":
                return <h1>주요연혁</h1>;
            case "4":
                return <img src="/images/detail/조직도.png" alt="조직도"/>;
            case "5":
                return <h1>CI 소개</h1>;
        }
    }
}

export function pageName(name) {
    if(name==="introduce") return "융합원소개";
    if(name==="business") return "산학융합촉진사업";
    if(name==="area") return "강원산학융합지구";
    if(name==="notion") return "알림마당";
}
export function pageDetailName(detail, number ) {
    if(detail==="introduce"){
        switch (number){
            case "1":
                return "인사말" ;
            case "2":
                return "사업소개";
            case "3":
                return "주요연혁";
            case "4":
                return "조직도";
            case "5":
                return "CI 소개";
            case "6":
                return "참여기관";
            case "7":
                return "오시는 길";
            default:
                
        }
    }
    if(detail==="business"){
        switch (number){
            case "1":
                return "근로자평생학습프로그램" ;
            case "2":
                return "현장맞춤형교과과정운영";
            case "3":
                return "중소기업역량강화";
            case "4":
                return "대학체제 개편";
            default:
        }
    };
    if(detail==="area") {
        switch (number){
            case "1":
                return "강원산학융합지구시설" ;
            case "2":
                return "기업연구관안내";
            default:
        }
    };

    if(detail==="notion") {
        switch (number){
            case "1":
                return "공지사항" ;
            case "2":
                return "교육및사업안내";
            case "3":
                return "보도자료";
            case "4":
                return "포토갤러리";
            case "5":
                return "자료실";
            default:
        }
    }
}

export function pageList(page){
    if(page==="introduce"){
        return <div>
            <Link to="/page/introduce/1"><p>인사말</p></Link>
            <Link to="/page/introduce/2"><p>사업소개</p></Link>
            <Link to="/page/introduce/3"><p>주요연혁</p></Link>
            <Link to="/page/introduce/4"><p>조직도</p></Link>
            <Link to="/page/introduce/5"><p>CI소개</p></Link>
            <Link to="/page/introduce/6"><p>참여기관</p></Link>
            <Link to="/page/introduce/7"><p>오시는 길</p></Link>
        </div>
    }
    if(page==="business") {
        return <div>
            <Link to="/page/business/1"><p>근로자평생학습프로그램</p></Link>
            <Link to="/page/business/2"><p>현장맞춤형교과과정운영</p></Link>
            <Link to="/page/business/3"><p>중소기업역량강화</p></Link>
            <Link to="/page/business/4"><p>대학체제 개편</p></Link>
        </div>
    }
    if(page==="area") {
        return <div>
            <Link to="/page/area/1"><p>강원산학융합지구시설</p></Link>
            <Link to="/page/area/2"><p>기업연구관안내</p></Link>
        </div>
    }
    if(page==="notion") {
        return <div>
            <Link to="/page/notion/1"><p>공지사항</p></Link>
            <Link to="/page/notion/2"><p>교육및사업안내</p></Link>
            <Link to="/page/notion/3"><p>보도자료</p></Link>
            <Link to="/page/notion/4"><p>포토갤러리</p></Link>
            <Link to="/page/notion/5"><p>자료실</p></Link>
        </div>
    }
}