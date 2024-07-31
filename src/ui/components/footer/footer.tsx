export function Footer() {
  return (
    <div className="flex flex-col h-96 items-center justify-center gap-10">
      <div className="flex w-full justify-around items-center text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-2xl font-bold">About Pets</h2>
          <p className="font-light">Introduction</p>
          <p className="font-light">Security</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-2xl font-bold">Downlaod</h2>
          <p className="font-light">Github</p>
          <p className="font-light">NPM</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-2xl font-bold">Acknowledgements</h2>
          <p className="font-light">Contributors</p>
          <p className="font-light">Sponsors</p>
        </div>
      </div>
      <span className="text-gray-400/40 italic">
        Companhia PETS ₢, todos os direitos reservados. 2024
      </span>
    </div>
  );
}
