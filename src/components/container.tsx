type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return <div className="flex flex-col max-7-xl min-h-screen mx-auto bg-white/[2%]">{children}</div>;
}
