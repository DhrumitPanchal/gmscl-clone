import Image from "next/image";
import { FaSistrix } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main>
        <div className="fixed w-full">
        <div className="bg-[#f5f5f5]">
          <div className="px-[16rem] flex max-sm:flex-col max-sm:px-[1rem] justify-end">
            <img className="h-[2.2rem] max-sm:h-[1.6rem]" src="/top-links.png" alt="" />
          </div>
          <div className="cursor-pointer flex justify-between items-center max-sm:items-start max-sm:flex-col px-[16rem] max-sm:px-[1rem]  pb-[.8rem]">
            <img className="max-sm:h-[4rem]" src="/logo2.png" alt="" />
            <div className="text-[.8rem] text-[#002a7e]">
              <div className="text-[.8rem] text-[#002a7e]">
                <a
                  className="hover:text-[#0e8cc4] transition-colors duration-300"
                  href="#"
                >
                  Sitemap{" "}
                </a>
                |
                <a
                  className="mr-[.1rem] hover:text-[#0e8cc4] transition-colors duration-300"
                  href=""
                >
                  {" "}
                  Contact Us
                </a>
                |
                <a
                  className="ml-[.1rem] hover:text-[#0e8cc4] transition-colors duration-300"
                  href=""
                >
                  ClN:U85110GJ2012SGC071667
                </a>
              </div>
              <div className="mt-[.6rem] w-full flex justify-end max-sm:justify-normal">
                <input className="p-[.3rem]" type="text" placeholder="Search" />
                <div className="flex justify-center items-center h-[2rem] w-[2rem] bg-[#006592] text-white text-[1.1rem]">
                  {" "}
                  <FaSistrix />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden px-[16rem] max-sm:w-full max-sm:px-[1rem] max-sm:flex-col flex justify-start items-center bg-[#006592] text-[.9rem] font-semibold capitalize">
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            home
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            about us
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            drug
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            Ecpipment
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            iT
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-[.2rem] transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            Market Intelligence
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-2 transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            Diagnostic Services
          </li>
          <li className="px-[1rem] py-[.6rem] text-white cursor-pointer border-r-2 transition-colors duration-200 hover:bg-[#004562] border-[#176e96]">
            Contact Us
          </li>
        </div>
        </div>
        {/* -------------------------------------------- */}

        <section className="pt-[11.5rem] px-[16rem] max-sm:px-[1rem] py-[1rem] flex max-sm:flex-col justify-center gap-[1rem] h-full w-full">
          <div className="flex flex-col gap-[1.6rem] h-full w-[150rem] max-sm:w-full">
            <div className="p-[.4rem] h-[18rem] w-full shadow-[0_0px_8px_rgba(0,0,0,1)]">
              <img className="h-full w-full" src="/Banner_1_1_3.jpg" alt="" />
            </div>
            <div>
              <div className="px-[.4rem] overflow-hidden flex items-center h-[2.2rem] w-full text-[1rem] rounded-[.4rem] text-[#006592] bg-[#d4e1f4]">
                અગત્યની નોધ : આવતીકાલે તા. 03/10/2023 ના રોજ ખરીદ સમિતીની મિટીગ
                હોવાથી મેનેજીગ{" "}
              </div>
              <div className="mt-[.8rem] flex max-sm:flex-col gap-[1.4rem]">
                <div className="h-[26rem] w-full border-[1.5px] rounded-[1rem] border-[#006592] ">
                  <div className="flex items-center px-[.6rem] py-[.6rem] gap-[.4rem] border-b-[1.5px] border-[#006592]">
                    {" "}
                    <img src="/impo-link.png" alt="" />{" "}
                    <div className="text-[1.1rem] text-[#104572]">
                      IMPORTANT <span className="text-[#cc0e00]">LINKS</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[.4rem] p-[.7rem]">

                    <div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
                      <h2 className="text-[#062b58]">Rate Contracts</h2>
                      <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
                    </div>
                    <div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
                      <h2 className="text-[#062b58]">Purchase Orders</h2>
                      <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
                    </div>
                    <div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
                      <h2 className="text-[#062b58]">Essential Lists</h2>
                      <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
                    </div>
                    <div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
                      <h2 className="text-[#062b58]">Debarred Lists</h2>
                      <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="h-[26rem] w-full border-[1.5px] rounded-[1rem] border-[#006592] ">
                  <div className="flex items-center px-[.6rem] py-[.6rem] gap-[.4rem] border-b-[1.5px] border-[#006592]">
                    {" "}
                    <img src="/announcement01.png" alt="" />{" "}
                    <div className="text-[1rem] text-[#104572]">
                      ANNOUNCEMENTS &{" "}
                      <span className="text-[#cc0e00]">TENDERS</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[.4rem] p-[.7rem]">

<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Drugs</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Equipments</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Equipments Maintenance</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">IT</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Admin</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Diagnostic Services</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Others</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
</div>
                </div>
              </div>
              <div className="mt-[1.4rem] flex max-sm:flex-col gap-[1.4rem]">
                <div className="h-[30rem] w-full border-[1.5px] rounded-[1rem] border-[#006592] ">
                  <div className="flex items-center px-[.6rem] py-[.6rem] gap-[.4rem] border-b-[1.5px] border-[#006592]">
                    {" "}
                    <img src="/ral-link.png" alt="" />{" "}
                    <div className="text-[1.1rem] text-[#104572]">
                      RELATED <span className="text-[#cc0e00]">LINKS</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[.4rem] p-[.7rem]">

<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Procurement Agencies of Other States</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] hover:bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">National Health Mission</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Generic Drug Websites</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
</div>
                </div>
                <div className="h-[30rem] w-full border-[1.5px] rounded-[1rem] border-[#006592] ">
                  <div className="flex items-center px-[.6rem] py-[.6rem] gap-[.4rem] border-b-[1.5px] border-[#006592]">
                    {" "}
                    <img src="/open-book (1).png" alt="" />{" "}
                    <div className="text-[1rem] text-[#104572]">
                      MISCELLANEOUS{" "}
                      <span className="text-[#cc0e00]">INFORMATION</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[.4rem] p-[.7rem]">

<div className="cursor-pointer py-[.3rem] px-[.8rem] flex justify-between items-center border-b-[.1rem] border-dotted border-[#e7e7e7] bg-[#e7e7e7]">
  <h2 className="text-[#062b58]">Specification Database</h2>
  <img  className="h-[1.1rem] w-[1.1rem]" src="/plus-acc1.png" alt="" />
</div>
</div>
                </div>
              </div>
              <div className="overflow-hidden  mt-[1.4rem] h-[27rem] w-full border-[1.5px] rounded-[1rem] border-[#006592] ">
                <div className="flex items-center  border-b-[1.5px] font-normal text-[.95rem] text-[#104572] capitalize border-[#006592] ">
                  <li className=" max-sm:h-full px-[.5rem] py-[.8rem] border-r-[1.5px] border-[#006592] hover:bg-[#e7e7e7]">
                    news
                  </li>
                  <li className="px-[.5rem] py-[.8rem] border-r-[1.5px] border-[#006592] hover:bg-[#e7e7e7]">
                    Notifications
                  </li>
                  <li className="px-[.5rem] py-[.8rem] border-r-[1.5px] border-[#006592] hover:bg-[#e7e7e7]">
                    Financial
                  </li>
                  <li className="px-[.5rem] py-[.8rem] border-r-[1.5px] border-[#006592] hover:bg-[#e7e7e7]">
                    Minutes of Board Meetings
                  </li>
                  <li className="px-[.5rem] py-[.6rem] border-r-[1.5px]  hover:bg-[#e7e7e7]">
                    Initiatives and Achievements
                  </li>
                </div>
                <div className="px-[1rem] py-[2.2rem] h-full w-full flex flex-col gap-[1rem]">
                  <div>
                    <h2 className="text-[1rem] font-semibold text-[#007b8d]">
                      May 26,2023
                    </h2>
                    <p className="mt-[.3rem] text-[.95rem]">
                      સ્થાનિક કક્ષાએ એસેન્સીયલ ડ્રગ લીસ્ટ હેઠળની ખરીદાયેલ
                      દવાઓ/આઈટમોની એન્ટ્રી ઈ-ઔષધી સોફટવેરના “લોકલ પ્રોક્યોરમેન્ટ
                      મોડ્યુલ” માં કરવા બાબત.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-semibold text-[#007b8d]">
                      May 26,2023
                    </h2>
                    <p className="mt-[.3rem] text-[.95rem]">
                      પરિપત્ર : તબીબી સાધનોના તમામ માંગણીપત્રકો (ઈન્ડેન્ટ) EMMS
                      Software મારફતે ઓનલાઈન મોકલવા બાબત.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-semibold text-[#007b8d]">
                      May 26,2023
                    </h2>
                    <p className="mt-[.3rem] text-[.95rem]">
                      Annexure - List and rates consumables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- */}
          <div className="h-full w-full">
            <div className="px-[1rem] py-[.8rem] flex gap-[.8rem] bg-[#f2f2f2] border-b-[1.5px] border-[#006592]">
              <img
                className="h-[6rem]"
                src="/Bhupendrabhai-Patel-cm.png"
                alt=""
              />
              <div>
                <h2 className="text-[.8rem] font-semibold text-[#006592]">
                  Shri Bhupendra Patel
                </h2>
                <p className="mt-[.3rem] text-[.8rem]">
                  Hon'ble Chief Minister, Government of Gujarat
                </p>
                <div className="flex gap-[.6rem]">
                  <img className="cursor-pointer" src="/fb-icon.jpg" alt="" />
                  <img
                    className="cursor-pointer"
                    src="/twitter-icon.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[.8rem] flex gap-[.8rem] bg-[#f2f2f2] border-b-[1.5px] border-[#006592]">
              <img className="h-[6rem]" src="/ShriRushikeshPatel.jpg" alt="" />
              <div>
                <h2 className="text-[.8rem] font-semibold text-[#006592]">
                  Shri Rushikesh Patel
                </h2>
                <p className="mt-[.3rem] text-[.8rem]">
                  Hon'ble Cabinet Minister,Health and Family Welfare Department,
                  Government of Gujarat
                </p>
                <div className="flex gap-[.6rem]">
                  <img className="cursor-pointer" src="/fb-icon.jpg" alt="" />
                  <img
                    className="cursor-pointer"
                    src="/twitter-icon.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[.8rem] flex gap-[.8rem] bg-[#f2f2f2] border-b-[1.5px] border-[#006592]">
              <img className="h-[6rem]" src="/MA.jpg" alt="" />
              <div>
                <h2 className="text-[.8rem] font-semibold text-[#006592]">
                  Shri Manoj Aggarwal, IAS
                </h2>
                <p className="mt-[.3rem] text-[.8rem]">
                  Chairman, Gujarat Medical Services Corporation Limited,
                  Government of Gujarat
                </p>
              </div>
            </div>
            <div className="px-[1rem] py-[.8rem] flex gap-[.8rem] bg-[#f2f2f2] border-b-[1.5px] border-[#006592]">
              <img className="h-[6rem]" src="/MD.jpg" alt="" />
              <div>
                <h2 className="text-[.8rem] font-semibold text-[#006592]">
                  Dr. Navnath Gavhane,
                </h2>
                <p className="mt-[.3rem] text-[.8rem]">
                  Managing Director, Gujarat Medical Services Corporation
                  Limited, Government of Gujarat
                </p>
              </div>
            </div>

            {/* ---------------- */}
            <div className="mt-[1.2rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/purchase-order.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/equipment-main-12.gif" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/buyer-award-21.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/equipment-main-12.gif" alt="" />
            </div>

            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/award.gif" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/certificate-ba.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/health-safty-policy.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/gst-implementation.jpg" alt="" />
            </div>

            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/TRRS-new1.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/eAushadhi_01.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/e-ayushadi-monitoring.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/emms-banner.jpg" alt="" />
            </div>

            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/bank-guarante-details.jpg" alt="" />
            </div>
            <div className="cursor-pointer mt-[.6rem] w-full rounded-[.6rem] overflow-hidden border-[.5px] border-black/50">
              <img className="w-full" src="/GRS-new.gif" alt="" />
            </div>
          </div>

        </section>



    <div className="mb-[2rem] mt-[.4rem] px-[16rem] flex gap-[2.6rem]">
  <div className="overflow-hidden rounded-[.4rem] border-[.5px] border-black/50">
    <img src="/deendayal-banner.jpg" alt="" />
  </div>
  <div className="overflow-hidden rounded-[.4rem] border-[.5px] border-black/50">
    <img src="/post-your-comments-here-1.jpg" alt="" />
  </div>
  <div className="overflow-hidden rounded-[.4rem] border-[.5px] border-black/50">
    <img src="/e-dawa-new.jpg" alt="" />
  </div>
</div>


<footer className="px-[16rem] max-sm:px-[1rem] py-[1.2rem] flex justify-between text-[.75rem] bg-[#006592] text-white">
 <div className="flex flex-col gap-[.5rem]">
  <p>Home | Contact | E-Citizen | Disclaimer | Privacy Policy | Accessibility Statement | Help | Sitemap | Feedback</p>
   <p>Copyright 0 2023 Gujarat Medical Services Corporation Limited. All rights Reserved</p>
 </div>
 <div>
  <h1>Page last updated on: 26/10/2023 Visitors: 3212647</h1>
 </div>
</footer>
      </main>
    </>
  );
}
