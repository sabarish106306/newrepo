import React from "react";
import { shallow } from "enzyme";
import Parent from "./parent";

describe("Parent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Parent />);
    expect(wrapper).toMatchSnapshot();
  });
});
