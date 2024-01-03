// sidebar index
import { Recommended } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:py-0">
        <Recommended />
      </div>
    </Wrapper>
  );
};
