// src/pages/docs/Installation.tsx
export default function Installation() {
  return (
    <div className="prose max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Installation</h1>
      <p className="mt-4">
        This guide walks you through the installation process for the library.
        Whether you are starting a fresh project or integrating into an existing
        application, the following steps ensure a smooth setup experience.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">1. Prerequisites</h2>
      <p>
        Before installing, verify that your development environment meets the
        following requirements:
      </p>
      <ul className="list-disc ml-6">
        <li>Node.js version 16 or higher</li>
        <li>npm v7+ or yarn v1.22+</li>
        <li>A modern code editor (VS Code recommended)</li>
        <li>
          Familiarity with JavaScript or TypeScript, as all examples use ES
          modules
        </li>
      </ul>
      <p>
        Ensuring these prerequisites are met prevents common errors during
        installation and usage. If you need to upgrade Node.js, visit the{" "}
        <a href="https://nodejs.org" target="_blank">
          official Node.js website
        </a>{" "}
        and download the latest LTS version.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">2. Installing via npm</h2>
      <p>
        The easiest way to add the package to your project is by using npm.
        Navigate to your project root and run:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`npm install your-library-name`}
      </pre>
      <p>
        After running this command, the library will appear under{" "}
        <code>dependencies</code> in your <code>package.json</code>. You should
        also see a new folder under <code>node_modules</code> containing the
        package.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">3. Installing via Yarn</h2>
      <p>
        If you prefer Yarn as your package manager, simply run the following
        command:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`yarn add your-library-name`}
      </pre>
      <p>
        Yarn offers faster installs and better caching, which can be useful in
        monorepo setups. Functionality is identical regardless of whether you
        use npm or Yarn.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">4. Verifying the Installation</h2>
      <p>
        Once installed, you can quickly verify that everything is working by
        importing a simple component from the library. For example:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`import { Button } from "your-library-name";

export default function Verify() {
  return <Button variant="primary">Hello World</Button>;
}`}
      </pre>
      <p>
        If this renders correctly without errors, congratulations—you have
        successfully installed the library!
      </p>

      <h2 className="mt-8 text-2xl font-semibold">5. Common Issues</h2>
      <p>
        Installation problems are rare, but when they occur, they typically fall
        into the following categories:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Version Mismatch:</strong> Ensure your Node.js and npm versions
          meet the prerequisites.
        </li>
        <li>
          <strong>Missing Peer Dependencies:</strong> The library may rely on
          packages like <code>react</code> or <code>react-dom</code>. Install
          them manually if necessary.
        </li>
        <li>
          <strong>Cache Issues:</strong> Delete <code>node_modules</code> and
          reinstall dependencies.
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">6. Alternative Installation</h2>
      <p>
        In some cases, you may want to install directly from GitHub instead of
        npm. This is useful when testing unreleased features or custom forks.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`npm install username/repository-name

# or with yarn
yarn add username/repository-name`}
      </pre>
      <p>
        Keep in mind that direct GitHub installs may be less stable than official
        releases, so use them with caution in production environments.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">7. Next Steps</h2>
      <p>
        After successfully installing the library, the next step is to configure
        it according to your project needs. Head over to the{" "}
        <a href="/docs/configuration">Configuration</a> section to learn how to
        customize themes, colors, and behavior.
      </p>
      <p>
        The installation is just the first step in leveraging the full potential
        of the library. As you progress, you will discover advanced features
        that enable faster development, consistent UI patterns, and improved
        performance.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">8. Conclusion</h2>
      <p>
        You now have the library installed and ready to use in your project.
        With just a few commands, you’ve set the foundation for building robust,
        scalable applications. Take a moment to review your setup, commit your
        changes to version control, and continue to the next section of the
        documentation to unlock more features.
      </p>
      <p>
        Remember: the key to mastering any tool is consistent practice and
        experimentation. Explore the provided examples, try out new components,
        and don’t hesitate to customize the setup according to your project’s
        unique requirements.
      </p>
    </div>
  );
}
