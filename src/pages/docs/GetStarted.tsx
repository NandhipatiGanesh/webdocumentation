// src/pages/docs/GettingStarted.tsx
export default function GettingStarted() {
  return (
    <div className="prose max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Getting Started</h1>
      <p className="mt-4">
        Welcome to the documentation! This guide will walk you through the
        essential steps required to install, configure, and use the library in
        your project. The following sections provide a detailed explanation of
        each step, ensuring you have a smooth onboarding experience.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">1. Introduction</h2>
      <p>
        Before diving into the technical setup, it is important to understand
        what this library offers. The package provides a collection of utilities
        and UI components designed to accelerate development and improve
        maintainability. Whether you are building a small prototype or a
        full-scale enterprise application, the tools here can be adapted to fit
        your workflow. By following this guide, you will learn the core
        concepts, installation steps, and best practices.
      </p>
      <p>
        Getting started with any new technology can feel overwhelming, but rest
        assured that the learning curve here is minimal. The documentation is
        designed to be approachable and modular. Each section builds upon the
        previous one, so by the time you finish this page, you will already have
        a functioning setup in your local environment.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">2. Installation</h2>
      <p>
        To begin, you need to install the package using your preferred package
        manager. The library is distributed via npm and works seamlessly with
        both npm and yarn.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`npm install your-library-name

# or using yarn
yarn add your-library-name`}
      </pre>
      <p>
        After installation, ensure that the package appears in your{" "}
        <code>package.json</code> file under dependencies. If you encounter any
        issues, double-check your internet connection and make sure you are
        running a supported version of Node.js.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">3. Project Setup</h2>
      <p>
        Once the package is installed, you can start configuring your project.
        Typically, this involves creating a configuration file or initializing
        the library within your app entry point. For example, in a React
        project, you might initialize the provider at the root level.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`import { Provider } from "your-library-name";

function App() {
  return (
    <Provider>
      <YourApp />
    </Provider>
  );
}

export default App;`}
      </pre>
      <p>
        This setup ensures that all components have access to the core
        functionality without requiring repetitive boilerplate code. The
        provider encapsulates global state, themes, and any required context.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">4. Usage Example</h2>
      <p>
        Once everything is set up, you can start using the library immediately.
        Let’s look at a basic example. Suppose you want to add a styled button
        component. Simply import it and use it in your JSX:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`import { Button } from "your-library-name";

export default function Example() {
  return <Button variant="primary">Click Me</Button>;
}`}
      </pre>
      <p>
        That’s it! You now have a fully functional button with consistent
        styling and behavior. The library handles accessibility, responsive
        design, and theming out of the box, so you can focus on building
        features instead of reinventing the wheel.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">5. Configuration</h2>
      <p>
        The library ships with sensible defaults, but you can customize almost
        every aspect to suit your needs. Configuration is typically done via a
        JSON or JavaScript file located at the root of your project. This file
        allows you to modify themes, colors, typography, breakpoints, and other
        design tokens.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`// config.js
export default {
  theme: {
    colors: {
      primary: "#00ff99",
      secondary: "#1a1a1a",
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  },
};`}
      </pre>
      <p>
        By customizing these options, you can create a unique look and feel for
        your application without sacrificing consistency. Theming is applied
        globally, ensuring that all components adhere to your design system.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">6. Best Practices</h2>
      <p>
        While the library is flexible, adhering to best practices ensures a
        smoother development experience. Here are some tips:
      </p>
      <ul className="list-disc ml-6">
        <li>Keep your configuration centralized and version-controlled.</li>
        <li>
          Avoid deeply nested overrides; instead, rely on the theming system.
        </li>
        <li>Leverage reusable components to minimize duplication.</li>
        <li>
          Regularly update the library to benefit from bug fixes and new
          features.
        </li>
        <li>
          Use TypeScript for type safety and better developer experience.
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">7. Troubleshooting</h2>
      <p>
        Inevitably, you may encounter issues during setup or development. Common
        problems include version mismatches, missing peer dependencies, or build
        errors. To resolve these:
      </p>
      <ol className="list-decimal ml-6">
        <li>
          Verify that your Node.js and package manager versions are up to date.
        </li>
        <li>
          Delete your <code>node_modules</code> folder and reinstall
          dependencies.
        </li>
        <li>
          Check the GitHub issues page for known problems and solutions.
        </li>
        <li>
          Reach out to the community on forums or chat channels for assistance.
        </li>
      </ol>

      <h2 className="mt-8 text-2xl font-semibold">8. Conclusion</h2>
      <p>
        You have now completed the basic setup and learned how to use the core
        features of the library. As you continue exploring, you will discover
        more advanced components and utilities that can significantly enhance
        your workflow. Remember, this documentation is your companion—refer back
        to it whenever you encounter challenges or need inspiration.
      </p>
      <p>
        With these fundamentals in place, you are ready to start building.
        Explore additional sections for deeper dives into topics such as API
        integration, advanced configuration, and performance optimization. The
        possibilities are endless, and the tools at your disposal are designed
        to help you succeed.
      </p>
    </div>
  );
}
