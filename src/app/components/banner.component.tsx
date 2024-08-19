'use client';

import React, { useState } from "react";
import { XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  name: string;
  message: string;
  buttonText?: string;
  link?: string;
  onClose: () => void;
}

export const EventBanner: React.FC<Props> = (props) => {
  const { name, message, buttonText, link, onClose } = props;
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-secondary fixed top-0 left-0 right-0 z-50 flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-100">
          <strong className="font-semibold">{name}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {message}
        </p>
        {buttonText && (
          <a
            href={link}
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            {buttonText} <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleClose}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
};