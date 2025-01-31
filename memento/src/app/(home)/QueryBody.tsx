'use client';

import { useApp } from '@/lib/AppProvider';
import { useState } from 'react';

export const QueryBody = ({}) => {
  const { setToast } = useApp();

  const [query, setQuery] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runAnalysis = () => {
    if (query === '') {
      setToast({ message: 'Enter some text to analyze', type: 'info' });
      return;
    }
  };

  return (
    <div className={`my-12 flex flex-col items-center justify-center gap-y-12`}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={'h-32 w-96 max-w-[600px] rounded-md bg-gray-200 px-1.5 py-1 text-black caret-black'}
        placeholder={'Analyze text...'}
      />
      <button
        className={`bg-yellow h-[35px] w-[110px] rounded-md font-bold leading-none text-gray-800`}
        onClick={runAnalysis}
      >
        <span className={'-mb-2 leading-none'}>Analyze</span>
      </button>
    </div>
  );
};
