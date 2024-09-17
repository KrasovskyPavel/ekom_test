import { PasswordParamsGroup, Container, PasswordList } from "@/components/shared";
import { Title } from "@/components/ui";

export default async function PasswordPage() {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-1 flex-col mt-14 mb-1">
        <Title size="lg" text="Генератор паролей" className="font-bold" />
        <Title size="md" text="Длина пароля:" />
      </div>

      <div className="flex flex-1 mt-3">
        <PasswordParamsGroup className="w-[50%] pr-[14px]" />
        <PasswordList className="w-[50%] pl-[14px] pr-[6px]" />
      </div>
    </Container>
  );
}
