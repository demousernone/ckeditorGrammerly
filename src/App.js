import "./styles.css";
import React from "react";
import { demoText } from "./demo";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default class App extends React.Component {
  render() {
    return (
      <div
        className="ckeditor-wrapper"
      >
        <GrammarlyEditorPlugin clientId="client_NG84FFXQD2VB6Au1iTiXW8">
          <h1>Grammarly Demo by Kaushik Dey ( React Js)</h1>
          <textarea defaultValue={demoText.textarea} rows={10}></textarea>
        </GrammarlyEditorPlugin>
      </div>
    );
  }
}
