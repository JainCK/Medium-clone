const Quote = () => {
  return (
    <div className="h-screen bg-slate-200 flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className=" text-3xl font-bold">
            "The customer service i recieved was exceptional. the support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-md text-xl font-semibold mt-5">
            Jules Winnfield
          </div>
          <div className="max-w-md text-sm font-light text-slate-400">
            CEO | Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
