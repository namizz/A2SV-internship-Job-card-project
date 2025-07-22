interface BoxProps {
  children: React.ReactNode;
}
const Box = ({ children }: BoxProps) => {
  return (
    <div>
      <h2>Description</h2>
      {children}
    </div>
  );
};
export default Box;
