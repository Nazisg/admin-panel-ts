import { RenderIfType } from "shared/types/index";

const RenderIf: React.FC<RenderIfType> = ({ children, conditions, renderelse = "" }) => {
    if (conditions) return children
    return renderelse;
};

export default RenderIf;
