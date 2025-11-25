import React from "react";
import './../styles/App.css';

// PageLayout Component
function PageLayout({ header, footer, children }) {
  return (
    <>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </>
  );
}

const App = () => {
  const header = <h1>Welcome to my website</h1>;
  const footer = <p>© 2023 My Website. All rights reserved.</p>;

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <PageLayout
        header={header}
        footer={footer}
      >
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  );
};

export default App;
