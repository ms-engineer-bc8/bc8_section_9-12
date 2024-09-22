import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "../components/ui-elements/Heading";
import '@testing-library/jest-dom';

test("ヘッダーコンポーネントのレンダリング", () => {
    const headingText = "テスト用ヘッダー";

    // コンポーネントをレンダリング
    render(<Heading>{headingText}</Heading>);

    // レンダリングされたh2要素がテキストを持つことを確認
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toHaveTextContent(headingText);
  });