const FloatingTextInner = ({ title }: { title: string }) => {
  return (
    <div className="hidden lg:block absolute top-100 right-[-250px]">
    <p className="text-[#7fa58d]/10 text-[150px] font-bold rotate-270">
      {title}
    </p>
    </div>
  );
};

export default FloatingTextInner;
