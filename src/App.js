import "./styles.css";
import React from "react";
import { demoText, toolbar } from "./demo";
import { Global, css } from "@emotion/core";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default class App extends React.Component {
  render() {
    return (
      <div
        className="ckeditor-wrapper"
        css={css`
          ${this.ckWrapperStyle}
        `}
      >
        <Global
          styles={css`
            :root {
              --ck-border-radius: 4px;
              --ck-color-focus-border: rgba(96, 103, 113, 0.8);
              --ck-color-shadow-inner: rgba(69, 79, 99, 0.2);
              --ck-inner-shadow: 0 0 0 2px var(--ck-color-shadow-inner);
              --ck-spacing-large: var(--ck-spacing-standard);
            }
            .ck.ck-editor__editable_inline {
              border: 1px solid rgba(217, 217, 217, 1);
              transition: all 0.3s;
              &:hover {
                border-color: rgba(96, 102, 112, 1);
                border-right-width: 1px !important;
              }
            }
            .ck-editor__editable.ck-read-only {
              background-color: rgba(245, 245, 245, 1);
              opacity: 1;
              cursor: not-allowed;
              color: rgba(0, 0, 0, 0.25);
              &:hover {
                border-color: rgba(217, 217, 217, 1);
              }
            }
          `}
        />
        <GrammarlyEditorPlugin clientId="client_NG84FFXQD2VB6Au1iTiXW8">
          <h1>Grammarly Demo by Kaushik Dey ( React Js)</h1>
          <CKEditor
            editor={ClassicEditor}
            data={demoText.textarea}
            config={toolbar}
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              console.log(
                "toolbar: ",
                Array.from(editor.ui.componentFactory.names())
              );
              console.log(
                "plugins: ",
                ClassicEditor.builtinPlugins.map((plugin) => plugin.pluginName)
              );
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(editor) => {
              console.log("Focus.", editor);
            }}
          />
        </GrammarlyEditorPlugin>
      </div>
    );
  }
}
