import svgPaths from "./svg-x3uax8nrd5";
import imgImage1 from "figma:asset/73450976410b159c4bd1062cd1ca463409f520ba.png";
import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

function ImageHrisLogo() {
  return (
    <div className="relative shrink-0 size-[189px]" data-name="Image (HRIS Logo)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[0.44%] max-w-none size-full top-[-0.04%]" src={imgImageHrisLogo} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-start justify-center left-[124px] pb-[20px] top-[52px] w-[384px]" data-name="Container">
      <ImageHrisLogo />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[83px] left-[67px] top-[256px] w-[497px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[248.5px] not-italic text-[#424242] text-[24px] text-center top-[10px] w-[321px]">Human Resource Information System</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[68px] top-[339px] w-[497px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#757575] text-[14px] text-center">Secure access to your HRIS account</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#424242] text-[14px]">Email or Username</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Enter your email or username</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#424242] text-[14px]">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute h-[50px] left-0 rounded-[10px] top-0 w-[497px]" data-name="Password Input">
      <div className="content-stretch flex items-center overflow-clip pl-[16px] pr-[48px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3342 13.3323">
            <path d={svgPaths.pcb0000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[456px] size-[20px] top-[15px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <PasswordInput />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.016px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#c62828] text-[14px] whitespace-nowrap">Forgot Password?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c62828] h-[48px] relative rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[248px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Login</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[368px] items-start left-[67px] top-[405px] w-[497px]" data-name="Form">
      <Container2 />
      <Container3 />
      <Container5 />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] border border-[#6a7282] border-solid h-[742px] left-[-92.5px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-41.5px] w-[634px]" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
      <Form />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[659px] left-[639.5px] top-[226.5px] w-[449px]">
      <Container />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <div className="absolute h-[1171px] left-[-63px] top-[-54px] w-[1810px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(96,19,19,0)] h-[1117px] left-0 to-[rgba(198,40,40,0.43)] top-0 via-1/2 via-[rgba(147,30,30,0.23)] w-[1728px]" />
      <Frame />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[863.5px] not-italic text-[14px] text-center text-white top-[1042px] w-[301px]">© 2026 Human Resource Information System</p>
    </div>
  );
}