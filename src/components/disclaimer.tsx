'use client';

import { useState } from 'react';

const Disclaimer = () => {
  const [show, setShow] = useState<boolean>(true);

  const close = () => {
    setShow(false);
  }

  if (!show) {
    return null;
  }
  return (
    <dialog className="w-full min-h-[10rem] sm:min-h-[10rem] flex z-50 bg-red-500 px-8 py-2 bg-opacity-80 backdrop-blur-lg" open>
      <section className="flex items-center justify-between w-full gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            {`Disclaimer:`}
          </h1>
          <p className="text-xl font-medium">
            {`The user interface of this website is heavily inspired by Abstract's Help page. It is not affiliated with Abstract in any way.`}
          </p>
        </div>
        <button aria-label="close disclaimer" onClick={close} className="font-medium bg-gray-200 rounded-full px-4 py-2 bg-opacity-80 backdrop-blur-lg">
          {`Close Disclaimer`}
        </button>
      </section>
    </dialog>
  )
}

export default Disclaimer;