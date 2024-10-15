import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Software Engineers Developer Club",
  description: "Official website of Software Engineers Developer Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
