import WcMs from "../Welcome/WelcomeMessage";
export function Home() {
  return <WcMs />;
}

export function HomeMenu() {
  return (
    <>
      <p className="fs-5 text-center p-4">Home Menu</p>
    </>
  );
}

export function HomeSubMenu() {
  return (
    <>
      <p className="fs-6 text-center p-4">Home Sub Menu</p>
    </>
  );
}
