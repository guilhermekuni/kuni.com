import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col justify-between p-24 bg-primary-content">
        <section className="max-w-2xl">
          <h1>Test</h1>
        </section>
      </main>
    </>
  );
}
