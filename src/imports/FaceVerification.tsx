import svgPaths from "./svg-6ehokg2yi8";
import imgImage1 from "figma:asset/73450976410b159c4bd1062cd1ca463409f520ba.png";
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

function Heading() {
  return (
    <div className="absolute h-[83px] left-[68px] not-italic text-center top-[243px] w-[497px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[248.5px] text-[#424242] text-[24px] top-[10px] w-[321px]">Facial Verification</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[248.5px] text-[#757575] text-[14px] top-[54px] w-[497px]">Please verify your identity to continue accessing the system.</p>
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[26px] left-[68px] top-[339px] w-[497px]" data-name="Paragraph" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[128px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="Icon">
          <path d={svgPaths.pdcd7380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d={svgPaths.p14d7b200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d={svgPaths.p350b86c0} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d={svgPaths.p5717600} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d={svgPaths.p337ffec0} id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d="M48 48H48.0533" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          <path d="M80 48H80.0533" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[332px] items-center justify-center left-0 top-0 w-[444px]" data-name="Container" style={{ backgroundImage: "linear-gradient(143.213deg, rgb(229, 231, 235) 0%, rgb(209, 213, 220) 100%)" }}>
      <Icon />
    </div>
  );
}

function Container3() {
  return <div className="absolute border-4 border-[#99a1af] border-dashed h-[300px] left-[16px] rounded-[16px] top-[16px] w-[412px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Camera Scanning Area</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[36px] items-start left-[136.2px] pt-[8px] px-[16px] rounded-[10px] top-[280px] w-[171.609px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f3f4f6] border-2 border-[#d1d5dc] border-solid h-[336px] left-[92px] overflow-clip rounded-[16px] top-[339px] w-[448px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#c62828] h-[48px] left-[92px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[694px] w-[301px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[151px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Verify Face</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid h-[48px] left-[403px] rounded-[10px] top-[694px] w-[137px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[67px] not-italic text-[#424242] text-[16px] text-center top-[10px] whitespace-nowrap">Retry Scan</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] border border-[#6a7282] border-solid h-[812px] left-[547px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[153px] w-[634px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container1 />
      <Button />
      <Button1 />
    </div>
  );
}

function ImageHrisLogo() {
  return (
    <div className="absolute left-[769px] size-[189px] top-[199px]" data-name="Image (HRIS Logo)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[0.44%] max-w-none size-full top-[-0.04%]" src={imgImageHrisLogo} />
      </div>
    </div>
  );
}

export default function FaceVerification() {
  return (
    <div className="bg-white relative size-full" data-name="Face Verification">
      <div className="absolute h-[1171px] left-[-63px] top-[-54px] w-[1810px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(96,19,19,0)] h-[1117px] left-0 to-[rgba(198,40,40,0.43)] top-0 via-1/2 via-[rgba(147,30,30,0.23)] w-[1728px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[863.5px] not-italic text-[14px] text-center text-white top-[1042px] w-[301px]">© 2026 Human Resource Information System</p>
      <Container />
      <ImageHrisLogo />
    </div>
  );
}