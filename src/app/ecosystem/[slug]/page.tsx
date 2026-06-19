import EcosystemClient from "@/components/EcosystemClient";

export async function generateStaticParams() {
  return [
    { slug: "carbon-eco-market" },
    { slug: "alpar-ai" },
    { slug: "decas-hub" },
    { slug: "lionexia" },
    { slug: "fresh-rider" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <EcosystemClient slug={slug} />;
}
