import FAQsVirtualVisits from "@/components/FAQsVirtualVisits";
import HeroSection from "@/components/HeroSection";
import React from "react";

const VirtualVisits = () => {
  return (
    <div className="bg-white">
    <HeroSection
      message="quality care without leaving home"
      image="virtual-visits-hero"
      variant="hidden"
    />

    <div className="bg-background-light py-[32px] md:py-[64px] px-[16px] md:px-[70px] flex flex-col justify-center items-center">
      <div className="max-w-[1170px] flex flex-col gap-[4px] text-denim ">
        <h3 className="text-center px-10 text-[42px] leading-[50.4px] md:text-56px] md:leading-[67.2px]">
          schedule a Virtual Visit
        </h3>
        <p>
          We’re here for you. We know our communities need convenient, safe
          access to care. You can see a licensed MedExpress medical
          professional from the comfort of your home with secure video
          conferencing. MedExpress offers telehealth urgent care and medical
          evaluations for everyday illnesses and injuries to patients who
          reside in Arkansas, Maryland, Massachusetts, Minnesota,
          Pennsylvania, Texas, Virginia or West Virginia.
        </p>
      </div>
    </div>

    <div className="bg-terracotta text-center text-white py-[32px] md:py-[64px] px-[16px] md:px-[70px] flex flex-col justify-center items-center">
      <div className="max-w-[1170px] flex flex-col gap-[12px]">
        <h2 className="text-[32px] lg:px-[310px] md:px-[122px] text-center leading-[48px] md:text-[36px] md:leading-[54px]">
          Call{" "}
          <span className="underline">
            <a href="tel:1-888-759-1868">1-888-759-1868</a>
          </span>{" "}
          to schedule a Virtual Visit today.
        </h2>
        <p className="md:px-[122px]">
          *EMERGENCY SERVICE NOTICE: IF YOU ARE SUFFERING FROM CHEST PAIN,
          SHORTNESS OF BREATH, SEVERE ABDOMINAL PAIN, STROKE LIKE SYMPTOMS, OR
          ANY OTHER EMERGENCY, PLEASE DIAL 911 OR GO TO THE NEAREST
          ER.
        </p>
      </div>
    </div>

    <FAQsVirtualVisits />
  </div>
  );
};

export default VirtualVisits;
