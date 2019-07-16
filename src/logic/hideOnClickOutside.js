function hideOnClickOutside(element, e, hideFunc) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && e !== event.target) {
      hideFunc(false);
      removeClickListener();
    }
  };
  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };
  document.addEventListener("click", outsideClickListener);
  return this;
}

export default hideOnClickOutside;
