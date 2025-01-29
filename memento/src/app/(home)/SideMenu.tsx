'use client';

import { Fragment, useState } from 'react';
import { ChevronLeft, List } from 'react-bootstrap-icons';
import { AnimatePresence, motion } from 'framer-motion';

export const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <List className={'absolute left-5 mt-5 cursor-pointer text-3xl'} onClick={() => setOpen(true)} />
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: -180 }}
            animate={{ x: 0 }}
            exit={{ x: -180, transition: { ease: 'linear', duration: '0.1' } }}
            transition={{ ease: 'linear', duration: '0.1' }}
            className={`fixed left-0 top-0 h-screen w-[180px] border-r-2 border-gray-400 bg-gray-800`}
          >
            <div className={`flex flex-col`}>
              <div
                onClick={() => setOpen(false)}
                className={`bg-yellow w-[calc(100% + 3px)] flex translate-x-0.5 transform cursor-pointer flex-row justify-between gap-x-6 px-3 py-4 text-gray-800`}
              >
                <ChevronLeft className={'cursor-pointer text-xl'} />
                <div className={`text-xl font-bold leading-tight`}>Menu</div>
                <ChevronLeft className={'text-yellow text-xl'} />
              </div>
              <div className={`m-5 flex flex-col items-start gap-y-3`}>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </Fragment>
  );
};
