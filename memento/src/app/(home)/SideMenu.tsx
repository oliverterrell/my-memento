'use client';

import { Fragment, useState } from 'react';
import { CheckCircleFill, ChevronLeft, Gear } from 'react-bootstrap-icons';
import { AnimatePresence, motion } from 'framer-motion';
import lodash from 'lodash';

const SelectIcon = ({ selected }: { selected: boolean }) => {
  if (selected) {
    return <CheckCircleFill className="mt-1" />;
  }
  return <Fragment />;
};

type AnalysisOption = 'big-5' | 'myers-briggs' | 'dsm-iv' | 'enneagram' | 'eqi';
type AIModel = 'claude' | 'gemini' | 'chat-gpt' | 'deepseek';

const MenuOption = ({ selected, setSelected, value, name }: any) => {
  return (
    <div
      onClick={() => setSelected(value)}
      className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
    >
      {name} <SelectIcon selected={selected === value} />
    </div>
  );
};

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<AnalysisOption>('big-5');
  const [model, setModel] = useState<AIModel>('claude');

  return (
    <Fragment>
      <Gear className={'absolute left-5 mt-5 cursor-pointer text-3xl'} onClick={() => setOpen(true)} />
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240, transition: { ease: 'linear', duration: '0.1' } }}
            transition={{ ease: 'linear', duration: '0.1' }}
            className={`fixed left-0 top-0 h-screen w-[240px] border-r border-gray-900 bg-gray-700`}
          >
            <div className={`flex flex-col`}>
              <div
                onClick={() => setOpen(false)}
                className={`bg-yellow flex cursor-pointer flex-row justify-between gap-x-6 bg-opacity-90 px-3 py-4 text-gray-800`}
              >
                <ChevronLeft className={'cursor-pointer text-xl'} />
                <div className={`text-xl font-bold leading-tight`}>Settings</div>
                <div className={'h-5 w-5'} />
              </div>
              <div className={`my-5 flex flex-col items-start text-left`}>
                <div className={`w-[90%] border-b border-gray-900 pb-0.5 pl-3 pt-1.5 text-left font-bold`}>
                  Analysis
                </div>
                <MenuOption
                  selected={selected}
                  setSelected={setSelected}
                  value={'big-5'}
                  name={'Big 5 Personality'}
                />
                <MenuOption
                  selected={selected}
                  setSelected={setSelected}
                  value={'myers-briggs'}
                  name={'Myers-Briggs'}
                />
                <MenuOption selected={selected} setSelected={setSelected} value={'dsm-iv'} name={'DSM-IV'} />
                <MenuOption
                  selected={selected}
                  setSelected={setSelected}
                  value={'enneagram'}
                  name={'Enneagram'}
                />
                <MenuOption selected={selected} setSelected={setSelected} value={'eqi'} name={'EQ-i'} />
              </div>
            </div>

            <div className={`my-5 flex flex-col items-start text-left`}>
              <div className={`w-[90%] border-b border-gray-900 pb-0.5 pl-3 pt-1.5 text-left font-bold`}>
                Model
              </div>
              <MenuOption selected={model} setSelected={setModel} value={'claude'} name={'Claude'} />
              <MenuOption selected={model} setSelected={setModel} value={'chat-gpt'} name={'ChatGPT'} />
              <MenuOption selected={model} setSelected={setModel} value={'gemini'} name={'Gemini'} />
              <MenuOption selected={model} setSelected={setModel} value={'deepseek'} name={'DeepSeek'} />
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </Fragment>
  );
};
