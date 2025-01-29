import { SideMenu } from './SideMenu';

export default function Page() {
  return (
    <div className={`flex flex-col items-center`}>
      <div className={`flex h-24 w-full flex-row justify-between border-b border-gray-400 px-2 py-3 text-center`}>
        <SideMenu />
        <div className={`text-yellow my-auto flex text-2xl font-light tracking-widest md:text-3xl`}>
          My Memento
        </div>
        <div />
      </div>
    </div>
  );
}
