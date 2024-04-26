const DropdownItem = (props) => {

    const setSelectedValue = props.setSelectedValue;
    const setSelectedText = props.setSelectedText;
    const setIsOpen = props.setIsOpen;

    const text = props.datapoint.text;
    const value = props.datapoint.value;
    
    const setValue = () => {
        setSelectedText(text);
        setSelectedValue(value);
        setIsOpen(false)
    }
  return (
    <>
      <div className="flex w-full items-center justify-between bg-[#191950] px-4 py-4 text-[0.9em] hover:bg-[#232355]" onClick={setValue}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default DropdownItem;
