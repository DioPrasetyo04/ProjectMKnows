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
                        <Link href={crumb.slug}>{crumb.name}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <span className="text-[#10914c] font-semibold">
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
