import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const MapComponent = ({
  latitude,
  longitude,
  googlePlaceId,
  className,
  apiKey,
}: MapComponentProps) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&center=${latitude},${longitude}&zoom=12&maptype=roadmap`;

  return (
    <div
      className={cn(className, "relative max-w-full h-[243px] overflow-hidden")}
    >
      <Link
        href={`https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`}
        target="_blank"
        title="Open this area in Google Maps (opens a new window)."
      >
        <Image
          src="/assets/images/google.png"
          alt="google"
          width={80}
          height={16}
          className="absolute left-0 bottom-0 z-10 cursor-pointer"
        />
      </Link>
      <iframe
        src={mapUrl}
        width="400%"
        height="280"
        tabIndex={-1}
        style={{
          border: 0,
          transformOrigin: "center",
        }}
        allowFullScreen
        loading="lazy"
        title={`Map centered at coordinates: ${latitude}, ${longitude}`}
        className="pointer-events-none z-1 -translate-x-[37.5%]"
      ></iframe>
    </div>
  );
};

export default MapComponent;
