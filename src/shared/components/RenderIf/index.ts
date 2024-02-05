import { RenderIfProps } from "shared/types/index";

const RenderIf: React.FC<RenderIfProps> = ({
  children,
  condition,
  renderElse = "",
}) => {
  if (condition) return children;
  return renderElse;
};

export default RenderIf;
