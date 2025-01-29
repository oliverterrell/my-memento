'use client';

import { Fragment, useState } from 'react';
import { ChevronLeft, List } from 'react-bootstrap-icons';
import { AnimatePresence, motion } from 'framer-motion';

export const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <List className={'my-auto ml-2 cursor-pointer text-3xl'} onClick={() => setOpen(true)} />
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: -180 }}
            animate={{ x: 0 }}
            exit={{ x: -180, transition: { ease: 'linear', duration: '0.1' } }}
            transition={{ ease: 'linear', duration: '0.1' }}
            className={`fixed left-0 top-0 h-screen w-[180px] border-r-2 border-gray-400 bg-gray-800`}
          >
            <div className={`flex flex-col py-2`}>
              <div className={`flex flex-row justify-between gap-x-6 border-b border-gray-400 px-3 py-4`}>
                <ChevronLeft className={'cursor-pointer text-xl'} onClick={() => setOpen(false)} />
                <div className={`text-xl leading-tight`}>Menu</div>
                <ChevronLeft className={'text-xl text-gray-800'} />
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
