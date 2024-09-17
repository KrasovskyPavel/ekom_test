import { Container } from "@/components/shared";

export default async function CalculatorPage() {
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <p className="text-gray-400">CalculatePage</p>
        </div>
      </div>
    </Container>
  );
}
