type InnerHeaderProps = {
  title: string;
};

const InnerHeader = ({ title }: InnerHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-[#8aa894] to-[#8cbc9c] py-20 mt-15">
      <h1 className="text-center text-4xl text-white">{title}</h1>
    </div>
  );
};

export default InnerHeader;
