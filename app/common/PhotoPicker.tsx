import ReactDom from "react-dom";

function PhotoPicker({onChange} :any) {
  const component = (<input type="file" hidden id="photo-picker" onChange={onChange}/>)
  return ReactDOM.createPortal(component, document.getElementById("photo-picker-element"));
}

export default PhotoPicker;
