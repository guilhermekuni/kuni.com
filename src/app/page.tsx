import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col justify-between p-24 bg-primary-content items-center">
        <section className="flex w-full max-w-2xl px-4">
          <h1>Hi, I'm Guilherme!</h1>
        </section>
      </main>
    </>
  );
}
