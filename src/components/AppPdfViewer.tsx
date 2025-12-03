import { RPProvider, RPDefaultLayout, RPPages } from "@pdf-viewer/react";
import { type FC } from "react";

const AppPdfViewer: FC = () => {
  return (
    <RPProvider src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf">
      <RPDefaultLayout>
        <RPPages />
      </RPDefaultLayout>
    </RPProvider>
  );
};
export default AppPdfViewer;
