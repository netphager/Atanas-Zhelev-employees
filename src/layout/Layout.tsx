import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex flex-col ">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-wide">
            Pair Employees App
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} Pair Employees App. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
