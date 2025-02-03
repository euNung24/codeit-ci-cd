import {expect, test} from "@jest/globals";
import {render} from "@testing-library/react";
import Home from "@/app/page";

test('should render Home component', () => {
    const {findByText} = render(<Home />);

    expect(findByText('Deploy')).not.toBeNull();
})
