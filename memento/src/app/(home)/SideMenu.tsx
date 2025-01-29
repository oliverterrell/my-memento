'use client';

import { Fragment, useState } from 'react';
import { CheckCircleFill, ChevronLeft, Gear } from 'react-bootstrap-icons';
import { AnimatePresence, motion } from 'framer-motion';

const SelectIcon = ({ selected }: { selected: boolean }) => {
  if (selected) {
    return <CheckCircleFill className="mt-1" />;
  }
  return <Fragment />;
};

type AnalysisOption = 'big-5' | 'myers-briggs' | 'dsm-iv' | 'enneagram' | 'eqi';
type AIModel = 'claude' | 'gemini' | 'chat-gpt' | 'deepseek';

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
            initial={{ x: -180 }}
            animate={{ x: 0 }}
            exit={{ x: -180, transition: { ease: 'linear', duration: '0.1' } }}
            transition={{ ease: 'linear', duration: '0.1' }}
            className={`fixed left-0 top-0 h-screen w-[180px] border-r border-gray-900 bg-gray-700`}
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
                <div
                  onClick={() => setSelected('big-5')}
                  className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
                >
                  Big 5 Personality <SelectIcon selected={selected === 'big-5'} />
                </div>
                <div
                  onClick={() => setSelected('myers-briggs')}
                  className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
                >
                  Myers-Briggs <SelectIcon selected={selected === 'myers-briggs'} />
                </div>
                <div
                  onClick={() => setSelected('dsm-iv')}
                  className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
                >
                  DSM-IV <SelectIcon selected={selected === 'dsm-iv'} />
                </div>
                <div
                  onClick={() => setSelected('enneagram')}
                  className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
                >
                  Enneagram <SelectIcon selected={selected === 'enneagram'} />
                </div>
                <div
                  onClick={() => setSelected('eqi')}
                  className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
                >
                  EQI <SelectIcon selected={selected === 'eqi'} />
                </div>
              </div>
            </div>

            <div className={`my-5 flex flex-col items-start text-left`}>
              <div className={`w-[90%] border-b border-gray-900 pb-0.5 pl-3 pt-1.5 text-left font-bold`}>
                Model
              </div>
              <div
                onClick={() => setModel('claude')}
                className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
              >
                Claude <SelectIcon selected={model === 'claude'} />
              </div>
              <div
                onClick={() => setModel('gemini')}
                className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
              >
                Gemini <SelectIcon selected={model === 'gemini'} />
              </div>
              <div
                onClick={() => setModel('chat-gpt')}
                className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
              >
                ChatGPT <SelectIcon selected={model === 'chat-gpt'} />
              </div>
              <div
                onClick={() => setModel('deepseek')}
                className={`flex w-full cursor-pointer flex-row justify-between p-3 hover:bg-gray-600`}
              >
                DeepSeek <SelectIcon selected={model === 'deepseek'} />
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </Fragment>
  );
};
