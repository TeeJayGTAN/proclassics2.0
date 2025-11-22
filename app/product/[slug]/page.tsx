import api from "@/utils/api";
import ProductPage from "../product_page";

export async function generateStaticParams() {
  const response = await api.get(`/api/product/get-all-slugs`);
  const slugs = response.data.slugs;
  return slugs.map((slug: any) => ({
    slug: slug.slug,
  }));
}

export default async function Page({ params }: { params: any }) {
  const routeParams = await params;
  const slug = routeParams.slug;

  const res = await api.get(`/api/product/get-one/${slug}`);
  const product = res.data.product;

  return <ProductPage product={product} />;
}
