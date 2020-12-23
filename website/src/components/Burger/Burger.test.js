import { shallow } from "enzyme";
import { Burger } from "../";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("hamburger state changes", () => {
    it("Test open click event", () => {
      let open = false;
      let setOpen = (val) => {
        open = val;
      };
  
      const button = shallow(
        <Burger open={open} setOpen={setOpen}>
          Hamburger With Cheese!
        </Burger>
      );
      button.simulate("click");
      expect(open).toEqual(true);
    });
  
    it("Test close click event", () => {
      let open = true;
      let setOpen = (val) => {
        open = val;
      };
  
      const button = shallow(
        <Burger open={open} setOpen={setOpen}>
          Hamburger With Cheese!
        </Burger>
      );
      button.simulate("click");
      expect(open).toEqual(false);
    });
  });
  