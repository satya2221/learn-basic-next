import { Header } from "@/components/header"
import { Profile } from "@/components/profile";

export default function Page(){
  return (
    <div>
        <Header />
        <Profile name="Indra" age="22" address="Surabaja" gender="m" />
        <Profile name="Najwa" age="26" address="Semarang" gender="f" />
    </div>
  );
}