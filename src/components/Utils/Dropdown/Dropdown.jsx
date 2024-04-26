import { useEffect, useState } from "react";
import Expand from "../../../assets/icons/expand.svg";
import DropdownItem from "./DropdownItem/DropdownItem";

/*

setValue should be a setState function

data should be an array of objects such that each object is

{
  text: "Text to be shown",
  value : "value"
}


*/

const Dropdown = (props) => {

  const setValue = props.setValue;
  const data = props.data;
  const defaultText = props.defaultText;

  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedText, setSelectedText] = useState(null);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setValue(selectedValue)
  }, [selectedValue])

  // const data = [
  //   {
  //     text: "Selection 1",
  //     value: "select-1"
  //   },
  //   {
  //     text: "Selection 2",
  //     value: "select-2"
  //   },
  //   {
  //     text: "Selection 3",
  //     value: "select-3"
  //   },
  //   {
  //     text: "Selection 4",
  //     value: "select-4"
  //   },
  //   {
  //     text: "Selection 5",
  //     value: "select-5"
  //   },
  // ]

  const dropdownItemsList = data.map(datapoint => {
    return <DropdownItem setIsOpen={setIsOpen} setSelectedText={setSelectedText} setSelectedValue={setSelectedValue} datapoint={datapoint} />
  })

  return (
    <>
      <div>
        <div className="flex w-full items-center justify-between rounded bg-[#13133d] p-4 font-semibold" onClick={toggleIsOpen}>
          <p className={``}>{selectedText ? selectedText : (defaultText? defaultText : "Please Select Something")}</p>
          <img src={Expand} className={`${isOpen ? "scale-y-[-1]" : ""}`}/>
        </div>
        <div className={`rounded-b overflow-y-auto ${isOpen ? "max-h-[20em]" : "max-h-[0em]"}`}>
            {dropdownItemsList}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
