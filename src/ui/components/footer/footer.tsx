export function Footer() {
  return (
    <div className="w-full h-96 flex justify-around items-center text-white">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">About Pets</h2>
        <p className="font-light">Introduction</p>
        <p className="font-light">Security</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Downlaod</h2>
        <p className="font-light">Github</p>
        <p className="font-light">NPM</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Acknowledgements</h2>
        <p className="font-light">Contributors</p>
        <p className="font-light">Sponsors</p>
      </div>
    </div>
  );
}
