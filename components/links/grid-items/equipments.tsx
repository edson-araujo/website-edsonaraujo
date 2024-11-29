import { GridItemInterface } from "../site-config";
import Image from "next/image";
import Link from "next/link";
import Icon from "../icon";
import Button from "../button";
import { useRouter } from 'next/navigation';

const Equipments = ({ item }: { item: GridItemInterface }) => {
  const router = useRouter();

  return (
    <div className="w-full h-min overflow-hidden rounded-3xl"  
    onClick={item.layout === "2x4" ? () => window.open(item.buttonLink ?? "/", "_blank") : undefined}
    style={{ cursor: item.layout === "2x4" ? "pointer" : "default" }}>
      <div className="flex flex-col md:flex-row w-full">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full p-4 sm:p-8">
          <div className="mb-4">
            <div className="flex items-center md:mt-2 space-x-2">
              {item.icon && (
                <div className="pl-4 md:pl-0 flex items-center justify-center">
                  <Icon type={item.icon} color={item.color ?? "#fff"} />
                </div>
              )}
              <div className="text-sm font-medium text-black d:text-white">
                <span className="font-semibold">{item.title}</span>
                <br />
                <span className="font-light">{item.link}</span>
              </div>
              {item.layout === "2x2" && (
                <Link href={item.buttonLink ?? "/"}>
                  <Button
                    text={item.buttonTitle ?? ""}
                    secondaryText={item.buttonSecondaryText}
                    color={item.color}
                  />
                </Link>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {item.equipments?.map((equipment, index) => (
                <Link
                  className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900"
                  key={equipment.link + index}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={equipment.link}
                >
                  {equipment.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="w-full">
            <Image
              priority
              className="object-cover object-center w-full h-auto max-h-32 md:max-h-64 rounded-3xl opacity-70"
              src={item.image ?? ""}
              width={600}
              height={300}
              alt="equipments"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
