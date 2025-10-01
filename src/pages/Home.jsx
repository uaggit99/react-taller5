//import { Footer } from "../comnponents/Footer";
import { UserList } from "../comnponents/UserList";
import { Navbar } from "../comnponents/Navbar";


export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <UserList />
      </main>
     
    </>
  );
}
