interface LandingLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode;
  }> {}

export default async function LandingLayout({
  children,
  modal,
}: LandingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1 ">
        {children}
        {modal}
      </main>
    </div>
  );
}
