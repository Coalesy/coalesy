
const Accordion = ({ number, question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-white border-opacity-10 w-[550px]">
        <div
          onClick={onClick}
          className="cursor-pointer flex items-center py-4 w-full"
        >
          <span className="mr-4 text-[16px] font-medium tracking-[-0.5px] text-white opacity-70">{number}.</span>
          <h3 className="text-lg text-[16px] font-medium tracking-[-0.2px]">{question}</h3>
        </div>
        {isOpen && (
          <div className="pl-8 pb-4">
            <p className="text-white opacity-70 text-[14px] ">{answer}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Accordion;
