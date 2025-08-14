import { Header } from "@/components/header"
import { Profile } from "@/components/profile";
import { Form } from "@/components/form";

export default function Page(){
  return (
    <div>
        <Header />
        <Form />
        <Profile name="Indra" age="22" address="Surabaja" gender="m" />
        <Profile name="Najwa" age="26" address="Semarang" gender="f" />
    </div>
  );
}