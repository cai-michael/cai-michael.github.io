import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import { Burger } from "./components";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/Michael Cai/i);
  expect(linkElement).toBeInTheDocument();
});
