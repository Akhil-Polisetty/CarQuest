"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (title,e) => {
    // const
    console.log(e);
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        title={title}
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(title,e);
        }}
      >
        <div className="relative w-fit x-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="upside down"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default
        select-none py-2 px-4 ${
          active ? "bg-primary-blue text-white" : "text-gray-900"
        }`}
                >
                  {({ selected }) => <span>{option.title}</span>}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
