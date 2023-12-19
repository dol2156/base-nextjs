'use client';

import { Fragment } from 'react';

export default function Footer_2() {
  return (
    <>
      <footer id="DashBoardFooter" className="bg-[#1C1C20] text-[#fff] text-[12px] font-[400]">
        <section className="HBox">
          <div className="Inner py-[60px]">
            <article className="RRR BottomBetween">
              <div className="Fc">
                <div>
                  <img src="https://gifpng.com/140x30" alt="" />
                </div>
                <ul className={`CenterLeft gap-[40px] mt-[48px] text-[#fff] text-[14px] font-[600]`}>
                  {['서비스이용약관', '개인정보처리방침'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <a href="#" target="_blank">
                            {obj}
                          </a>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
                <ul className={`mt-[30px] text-[#fff] text-[12px] font-[400] leading-[18px]`}>
                  <li>상호명 : ㈜덱스터크레마</li>
                  <li>대표이사 : 손동운/송경운</li>
                  <li>전화 : 02-511-6239 ㅣ 팩스 : 02-511-6293</li>
                  <li>소재지 : 서울특별시 강남구 도산대로30길21-9 크레마타워</li>
                  <li>개인정보관리자 : 담당자 info@dexterkrema.com</li>
                  <li>사업자 등록번호 : 220-87-80934</li>
                  <li>통신판매업신고번호 : 2018-서울서초-2119</li>
                </ul>
                <div className={`mt-[30px] text-[#fff] text-[14px] font-[400] leading-[14px]`}>© Dexterkrema Inc.</div>
              </div>
              <div className="Fc">
                <article className="CenterRight gap-[20px]">
                  {['1:1문의', '자주 묻는 질문', '공지사항'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <a href={`#`} className={`Button_1 w-[140px]`}>
                          {obj}
                        </a>
                      </Fragment>
                    );
                  })}
                </article>
                <ul className={`mt-[36px] text-[#fff] text-[12px] font-[400] leading-[18px]`}>
                  <li>운영시간 : 평일 9:00 ~ 17:00 (점심시간: 12:00 ~ 13:00)</li>
                  <li>대표전화 : 02-511-6239</li>
                  <li>메일주소 : info@dexterkrema.com</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </footer>
    </>
  );
}
