import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-700 text-center text-white">
      <div className="container pt-9">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center space-x-2">
          <a
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-secondary-900 focus:outline-none focus:ring-0"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </span>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-secondary-900 focus:outline-none focus:ring-0"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </span>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-secondary-900 focus:outline-none focus:ring-0"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </span>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-secondary-900 focus:outline-none focus:ring-0"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </span>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-secondary-900 focus:outline-none focus:ring-0"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FontAwesomeIcon icon={faPinterestP} size="lg" />
            </span>
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full p-4 text-center bg-black/50 text-white">
        © 2023 Copyright:
        <a className="text-white" href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
};

export default Footer;
