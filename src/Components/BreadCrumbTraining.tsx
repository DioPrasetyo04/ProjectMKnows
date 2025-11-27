import { BreadCrumbsProps } from "@/Types/BreadCrumbType";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./UI/breadcrumb";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import { Fragment } from "react/jsx-runtime";

const BreadCrumbTraining = ({
  items,
  textColor,
  bgColor,
}: BreadCrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center gap-2">
        {items?.map((crumb, index) => {
          const last = index === items.length - 1;

          return (
            <Fragment key={index}>
              <BreadcrumbItem className="flex items-center">
                {!last ? (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.slug}>
                      <span className="text-white text-xl md:text-2xl font-montserrat font-semibold hover:underline">
                        {crumb.name}
                      </span>
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <span className="text-[#06974a] text-xl md:text-2xl font-montserrat font-semibold">
                    {crumb.name}
                  </span>
                )}
              </BreadcrumbItem>

              {!last && (
                <BreadcrumbSeparator className="flex items-center">
                  <RxSlash
                    size={30}
                    className="text-white"
                    style={{ width: "25px", height: "25px" }}
                  />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbTraining;
