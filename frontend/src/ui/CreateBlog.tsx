import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  MDXEditor,
  tablePlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import Sidebar from "./Sidebar";

export const CreateBlog = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="h-screen w-screen">
        <MDXEditor
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            imagePlugin({
              imageUploadHandler: () => {
                return Promise.resolve("https://picsum.photos/200/300");
              },
              imageAutocompleteSuggestions: [
                "https://picsum.photos/200/300",
                "https://picsum.photos/200",
              ],
            }),
            tablePlugin(),
            toolbarPlugin({
              toolbarClassName: "my-classname",
              toolbarContents: () => (
                <>
                  {" "}
                  <ToggleGroup type="multiple" className="mt-10">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <BoldItalicUnderlineToggles options={["Bold"]} />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <BoldItalicUnderlineToggles options={["Italic"]} />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="strikethrough"
                      aria-label="Toggle strikethrough"
                    >
                      <BoldItalicUnderlineToggles options={["Underline"]} />
                    </ToggleGroupItem>
                    {/* <ToggleGroupItem value="image" aria-label="Toggle bold">
                    <InsertImage />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="table" aria-label="Toggle bold">
                    <InsertTable />
                  </ToggleGroupItem> */}
                  </ToggleGroup>
                </>
              ),
            }),
          ]}
          markdown="Hii"
        />
      </div>
    </div>
  );
};
