import imgImageHrisLogo from "figma:asset/c72d7cbccefc0352c4dd51dd71910fe0b60a917e.png";

function ImageHrisLogo() {
  return (
    <div className="absolute left-[48px] size-[101px] top-[42px]" data-name="Image (HRIS Logo)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[0.44%] max-w-none size-full top-[-0.04%]" src={imgImageHrisLogo} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#c62828] h-[185px] left-0 top-0 w-[434px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[169px] not-italic text-[24px] text-white top-[61px] w-[243px]">Human Resource Information System</p>
      <ImageHrisLogo />
    </div>
  );
}