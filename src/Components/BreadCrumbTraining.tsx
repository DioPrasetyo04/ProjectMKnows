import { BreadCrumbsProps } from "@/Types/BreadCrumbType";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./UI/breadcrumb";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

const BreadCrumbTraining = ({
  items,
  textColor,
  bgColor,
}: BreadCrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items
          ? items.map((crumb, index) => {
              const lastItem = index === items.length - 1;
              if (!lastItem) {
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={crumb.slug}>
                          <span className="text-white text-xl md:text-2xl font-montserrat font-semibold mb-2">
                            {crumb.name}
                          </span>
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon className="text-white text-5xl" />
                    </BreadcrumbSeparator>
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <span className="text-[#06974a] text-xl md:text-2xl font-montserrat font-semibold mb-2">
                          {crumb.name}
                        </span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Fragment>
                );
              }
            })
          : []}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbTraining;
