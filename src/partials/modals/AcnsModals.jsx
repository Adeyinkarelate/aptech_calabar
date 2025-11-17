import React from "react";
import { Modal } from "flowbite-react";

export const AcnsModal1 = ({ modalImg, isOpen, closeModal }) => {
  return (
    <React.Fragment>
      <Modal size="3xl" show={isOpen}>
        <button
          onClick={closeModal}
          type="button"
          className="absolute -top-2 -right-2 rounded-full border-2 border-gray-500 bg-white p-1 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="p-3 pt-7">
          <img src={modalImg} alt="CourseImage1" className="h-full w-full" />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export const AcnsModal2 = ({ modalImg, isOpen2, closeModal2 }) => {
  return (
    <React.Fragment>
      <Modal size="3xl" show={isOpen2}>
        <button
          onClick={closeModal2}
          type="button"
          className="absolute -top-2 -right-2 rounded-full border-2 border-gray-500 bg-white p-1 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="p-3 pt-7">
          <img src={modalImg} alt="CourseImage1" className="h-full w-full" />
        </div>
      </Modal>
    </React.Fragment>
  );
};
