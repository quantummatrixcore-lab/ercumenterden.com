import ArticleClient from "@/components/ArticleClient";

export async function generateStaticParams() {
  return [
    { slug: "verification-economy" },
    { slug: "ai-safety-audits" },
    { slug: "cbam-2026-compliance" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />;
}
