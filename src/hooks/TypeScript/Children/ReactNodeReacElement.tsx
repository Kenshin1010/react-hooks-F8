import React from "react";

// React.ReactNode accepts the most inputs
interface ReactNodeProps {
  children: React.ReactNode;
}

function ReactNodeReacElement() {
  const RNode = (props: ReactNodeProps) => <div>{props.children}</div>;

  const ReactNodeApp = () => (
    <>
      <RNode>
        <p>One element</p>
      </RNode>
      <RNode>
        <>
          <p>Fragments for</p>
          <p>More elements</p>
        </>
      </RNode>
      <RNode>1</RNode>
      <RNode>Hello</RNode>
      <RNode>{null}</RNode>
      <RNode>{true}</RNode>
      // Must have children though
      {/* <RNode /> */}
    </>
  );

  // React.ReactElement accepts only JSX elements
  interface ReactElementProps {
    children: React.ReactElement;
  }

  const RElement = (props: ReactElementProps) => <div>{props.children}</div>;

  const ReactElementApp = () => (
    <>
      <RElement>
        <p>More elements</p>
      </RElement>
      <RElement>
        <>
          <p>More elements</p>
          <p>More elements</p>
        </>
      </RElement>
      // Must be a JSX element
      {/* <RElement>1</RElement>
      <RElement>Hello</RElement>
      <RElement>{null}</RElement>
      <RElement>{true}</RElement> */}
      // Must have children though
      {/* <RElement /> */}
    </>
  );
  return (
    <div>
      <ReactNodeApp />
      <ReactElementApp />
    </div>
  );
}

export default ReactNodeReacElement;
