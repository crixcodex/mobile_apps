export const inputFieldStyle = (style, width, color) => {
  return {
    ...style,

    width: width ? width : '100%',
    color: color ? color : '#62656b',
    fontSize: 10,
    padding: 2,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  };
};
