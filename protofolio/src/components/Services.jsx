export const Services = ({ icon, heading, content1, content2, content3, content4 }) => {
  return (
    <div className="border border-black pb-7 bg-[#FF4D00] flex flex-col w-[80vw] max-w-[300px] md:max-w-[340px] rounded-2xl p-4 shadow-lg">
      <div className="my-4 flex justify-center">
        <img className="w-14 md:w-16" src={icon} alt="card-icon" />
      </div>
      <h3 className="text-center font-lobster text-lg md:text-xl font-bold text-white mb-4">
        {heading}
      </h3>
      <ul className="text-white list-disc list-inside font-bebas text-sm md:text-base space-y-2 pl-4">
        <li>{content1}</li>
        <li>{content2}</li>
        <li>{content3}</li>
        <li>{content4}</li>
      </ul>
    </div>
  );
};
