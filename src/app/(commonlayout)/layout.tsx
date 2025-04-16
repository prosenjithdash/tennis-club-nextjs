// COMMON LAYOUT (We can add hare Navbar and Footer.)

import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
    <div>
        <Navbar/>
          <div className="min-h-screen">
            {children}
       </div>
    </div>
  );
}
